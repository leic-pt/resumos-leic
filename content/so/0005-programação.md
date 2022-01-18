---
title: Programação Multi-Tarefa
description: Programação Multi-Tarefa
path: /so/programação
type: content
---

# Programação Multi-Tarefa

```toc

```

## Trincos

Para saber como programar com vários processos que partilham memória temos de:

- Identificar secções críticas
- Sincronizar cada secção crítica com trinco (mutex)

Um trinco (mutex), muito resumidamente é uma flag que só permite que uma parte de memória seja acedida **apenas** por uma `thread`,
se outra `thread` quiser aceder a essa parte de memória não o poderá fazer, assim vai ficar à espera até que essa parte de memória não esteja a ser acedida por nenhuma outra `thread`.

### Trinco Global

- Normalmente é a solução mais simples
- Mas limita o paralelismo
  - Quanto mais paralelo for o programa, maior é a limitação
- Exemplo: [big kernel lock do Linux](https://en.wikipedia.org/wiki/Giant_lock)
  - Criado nas primeiras versões do Linux (versão 2.0)
  - Grande barreira de escalabilidade
  - Finalmente removido na versão 2.6

```c
struct {
  int saldo;
  // ...
} conta_t;

pthread_mutex_t mutex;

int levantar_dinheiro (conta_t* conta, int valor) {
  mutex_lock(&mutex); // Bloqueia o acesso a este endereço
                            // de memória a outras threads
  if (conta->saldo >= valor)
    conta->saldo = conta->saldo - valor;
  else
    valor = -1; /* -1 indica erro ocorrido */
  mutex_unlock(&mutex); // Desbloqueia o acesso a este
                              // endereço de memória
  return valor;
}
```

### Trincos Finos: Programação com Objetos Partilhados

- Objeto cujos métodos podem ser chamados em
  concorrência por diferentes tarefas
- Devem ter:
  - Interface dos métodos públicos
  - Código de cada método
  - Variáveis de estado
  - Variáveis de sincronização
    - Um trinco para garantir que métodos críticos se executam em
      exclusão mútua
    - Opcionalmente: semáforos, variáveis de condição
- Em geral, maior paralelismo
- Mas pode trazer bugs difíceis de resolver...

#### Exemplo com Trincos Finos

```c
transferir(conta a, conta b, int montante) {
  fechar(a.trinco);
  debitar(a, montante);
  fechar(b.trinco);
  creditar(b, montante);
  abrir(a.trinco);
  abrir(b.trinco);
}
```

O que pode correr mal?

Uma das execuções do processo pode bloquear a e outra bloqueia b, e depois ficam uma à espera da outra (e.g. `transferir(a, b, 10)` e `transferir(b, a, 20)`).  
Isto leva-nos a um exemplo conhecido: o Jantar dos Filósofos.

## Jantar dos Filósofos

- Cinco Filósofos estão reunidos para filosofar e
  jantar [spaghetti](https://drive.google.com/file/d/1yDuhf1gaubgpYjaWBWUBIqKw0oGrbGuO/view?usp=sharing):

  - Para comer precisam de dois garfos, mas a mesa
    apenas tem um garfo por pessoa.

- Condições:
  - Os filósofos podem estar em um de três estados:
    Pensar, Decidir comer, Comer.
  - O lugar de cada filósofo é fixo.
  - Um filósofo apenas pode utilizar os garfos
    imediatamente à sua esquerda e direita.

### Implementação Naive

```c
filosofo(int id) {
  while (TRUE) {
    pensar();
    <adquirir os garfos>
    comer();
    <libertar os garfos>
  }
}
```

O problema desta implementação é que pode parar o programa para sempre.
Por exemplo, se cada filósofo fizer _lock_ do garfo à sua direita, nenhum vai conseguir efetuar o segundo _lock_ do garfo à sua esquerda,
ficando o programa parado infinitamente.

### Jantar dos Filósofos com Semáforos

```c
mutex_t garfo[5] = {...};

filosofo(int id) {
  while (TRUE) {
    pensar();
    fechar(garfo[id]);
    fechar (garfo[(id + 1) % 5]);
    comer();
    abrir(garfo[id]);
    abrir(garfo[(id + 1) % 5]);
  }
}
```

$$
0 \rightarrow 1 \rightarrow 2 \rightarrow 3 \rightarrow 4
$$

Esta implementação segue o esquema acima definido, um filósofo deve escolher sempre pela ordem.
Se o filósofo quiser o garfo 3 e 4, deve escolher primeiro o 3 e só depois o 4.

Isto abre um problema, no caso do filósofo número 4, este escolhe primeiro o 4 e depois o 0, indo contra o príncipio definido em cima.

Temos assim de arranjar uma solução para esse caso.

```c
mutex_t garfo[5] = {...};
filosofo(int id){
  while (TRUE) {
    pensar();
    if (id < 4) {
      fechar(garfo[id]);
      fechar(garfo[(id + 1) % 5]);
    else {
      fechar(garfo[(id + 1) % 5]);
      fechar(garfo[id]);
    }
    comer();
    abrir(garfo[id]);
    abrir(garfo[(id + 1) % 5]);
  }
}
```

Nesta implementação, apenas o filósofo 4 se comporta de maneira diferente.\
Assim todos cumprem a ordem definida.

### Evitar Míngua: Recuo Aleatório!

Outra solução possível seria:

```c
mutex_t garfo[5] = {...};

filosofo(int id) {
  int garfos;
  while (TRUE) {
    pensar();
    garfos = FALSE;
    while (!garfos) {
      if (lock(garfo[id])) {
        if (try_lock(garfo[(id + 1) % 5])) {
          garfos = TRUE;
        } else { // adquisição 2º trinco falhou
          unlock(garfo[id]); // abre 1º trinco e tenta outra vez
          sleep(random([0, MAX]);
        }
      }
    }
    comer();
    unlock(garfo[id]);
    unlock(garfo[(id + 1) % 5]);
  }
}
```

- Pretende-se evitar que dois filósofos vizinhos possam conflituar indefinidamente
- Introduzir uma fase de espera/recuo (back-off) entre uma tentativa e outra de cada filósofo.
- Como escolher a duração da fase de espera?
  - Existem várias maneiras de escolher

Uma implementação simples é escolher valores aleatórios de espera

- Duração aleatória entre [0, MAX]
- Como escolher o valor MAX?
  - Quanto maior o valor de MAX:
    - [menor desempenho](color:red)
    - [maior probabilidade de evitar contenção](color:green)
  - Adaptar o valor de MAX consoante o número de
    tentativas
    - Por exemplo, MAX $=$ constante $\times$ num_tentativas

:::tip[Prevenir Inteblocagem]

- Garantir que os recursos são todos adquiridos
  segundo uma ordem total pré-definida
- Quando a aquisição de um recurso não é
  possível, liberta-se todos os recursos detidos
  e anulam-se as operações realizadas até esse
  momento
  :::

### Trincos - Limitações

- Só servem para proteger secções críticas
  - Não são suficientemente expressivos para resolver outros problemas de sincronização

#### Exemplo: Acesso a Parque de Estacionamento

Num dado ponto do código, tarefa só quer avançar quando uma condição se verificar.

```c
int vagas = N

void entrar() {
  if (vagas == 0) {
    // esperar até haver vaga
  }
  vagas--;
}

void sair() {
  vagas++;
}
```

Com mutex implementados, o código fica da seguinte maneira:

```c
int vagas = N;
mutex m;

void entrar() {
  do {
    lock(m);
    if (vagas > 0) break;
    else unlock(m);
  } while (1); // Existe problema
  vagas --;
  unlock(m);
}

void sair() {
  lock(m);
  vagas++;
  unlock(m);
}
```

## Variáveis de Condição

- Permite a uma tarefa esperar por uma condição que depende da ação de outra tarefa

  - Condição é boleano determinado em função do estado de variáveis partilhadas

- Variável de condição sempre associada a um trinco
  - O trinco que protege as secções críticas com acessos às variáveis partilhadas que definem a condição da espera
  - Pode haver mais que uma variável de condição associada ao mesmo trinco
- O conjunto trinco + variáveis de condição é normalmente chamado um monitor

### Primitivas (Semântica Mesa)

- `wait(conditionVar, mutex)`
  - Atomicamente, liberta o trinco associado e bloqueia a tarefa
    - Tarefa é colocada na fila de espera associada à variável de condição
  - Quando for desbloqueada, a tarefa re-adquire o trinco e só depois é que a função esperar retorna

Uma tarefa só pode chamar `wait` quando detenha o trinco associado à variável de condição

- `signal(conditionVar)`

  - Se houver tarefas na fila da variável de condição, desbloqueia uma
    - Tarefa que estava bloqueada passa a executável
  - Se não houver tarefas na fila da variável de condição, não tem efeito

- `broadcast(conditionVar)`
  - Análogo ao `signal` mas desbloqueia todas as tarefas na fila
    da variável de condição

Normalmente estas primitivas são chamadas quando a tarefa ainda não libertou o trinco
associado à variável de condição

### Padrões Habituais de Programação com Variável de Condição

- Código que espera por condição

```c
lock(trinco);
/* ... acesso a variáveis partilhadas ... */
while (!condiçãoSobreEstadoPartilhado)
  wait(varCondicao, trinco);
/* ... acesso a variáveis partilhadas ... */
unlock(trinco);
```

- Código que muda ativa condição

```c
lock(trinco);
/* ... acesso a variáveis partilhadas ... */
/* se o estado foi modificado de uma forma
   que pode permitir progresso a outras tarefas,
   chama signal (ou broadcast) */
signal/broadcast(varCondicao);
unlock(trinco);
```

#### Variáveis de Condição - POSIX

- `pthread_cond_t`
- Criação/destruição de variáveis de condição ([man page](https://man.archlinux.org/man/core/man-pages/pthread_cond_destroy.3p.en));
  - `pthread_cond_init (condition, attr)`
  - `pthread_cond_destroy (condition)`
- Assinalar e esperar nas variáveis de condição:
  - `pthread_cond_wait (condition, mutex)` ([man page](https://man.archlinux.org/man/core/man-pages/pthread_cond_timedwait.3p.en))
  - `pthread_cond_signal (condition)` ([man page](https://man.archlinux.org/man/core/man-pages/pthread_cond_broadcast.3p.en))
  - `pthread_cond_broadcast (condition)` ([man page](https://man.archlinux.org/man/core/man-pages/pthread_cond_broadcast.3p.en))

Voltando ao exemplo do acesso ao parque de estacionamento:

```c
int vagas = N;
mutex m;
cond c;
void entrar() {
  lock(m);
  while (vagas == 0)
    wait(c, m);
  vagas--;
  unlock(m);
}

void sair() {
  lock(m);
  vagas++;
  signal(c);
  unlock(m);
}
```

:::tip[Exemplos]
Mais exemplos nos slides em baixo
:::

### Problemas

- Tarefa que chama `wait` liberta o trinco e entra
  na fila de espera **atomicamente**

  - Consequência: caso a condição mude e haja
    `signal`, pelo menos uma tarefa na fila será
    desbloqueada

- Tarefa em espera que seja desbloqueada por
  `signal/broadcast` não corre imediatamente
  - Simplesmente é tornada executável
  - Para que `wait` retorne, tem de re-adquirir o trinco

Como a tarefa pode não correr imediatamente a seguir a se tornar executável o valor da condição pode ser alterada, podendo gerar problemas graves.

![Problem with conditions](./imgs/0005/cond-problems.png#dark=1)

Podemos observar pela imagem que durante o tempo entre o `signal` (feito por T3) e uma tarefa ser "acordada" (T1) onde adquire o trinco, a variável de condição foi alterada pela tarefa (T2), isto irá resultar em problemas.

- Retorno do `wait` não garante que condição
  que lhe deu origem se verifique
  - Tarefa pode não ter sido a primeira tarefa a entrar
    na secção crítica depois da tarefa que assinalou a
    ter libertado
- Logo, após retorno do `wait`, re-verificar a
  condição:
  - [Não fazer](color:red): `if` (testa variável partilhada)
  - [Fazer](color:green): `while` (testa variável partilhada)

Algumas implementações de variáveis de
condição permitem que tarefa retorne do
`wait` sem ter ocorrido `signal/broadcast` - [Spurious Wakeup](https://en.wikipedia.org/wiki/Spurious_wakeup)

---

Slides:

- [Slides 4](https://drive.google.com/file/d/1HD7UhXM4tYqEiZy_mYG0bUyKgKIntGyK/view?usp=sharing)
