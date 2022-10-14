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

- Identificar secções críticas;
- Sincronizar cada secção crítica com trincos.

Um trinco (mutex), muito resumidamente é uma flag que garante que uma parte de memória é acedida **apenas** por uma `thread`.
Se outra `thread` quiser aceder a essa parte de memória não o poderá fazer, ficando à espera que essa parte de memória não esteja a ser acedida por nenhuma outra `thread`.

### Trinco Global

A solução mais simples para garantir que não há duas threads a aceder à mesma zona de memória é garantir que não há duas threads a correr ao mesmo tempo.
No entanto, esta solução limita o paralelismo.
Um exemplo de uma solução deste tipo é o chamado [big kernel lock do Linux](https://en.wikipedia.org/wiki/Giant_lock), criado nas primeiras versões do Linux (versão 2.0) que criava uma grande barreira de escalabilidade.
Esta implementação foi finalmente removida na versão 2.6.

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

### Trincos Finos

Tendencialmente, se possível, queremos que as nossas funções possam ser chamadas concorrentemente por várias tarefas.
Pode, no entanto, ser também necessário que estas funções (e consequentemente as tarefas que as chamam) acedam concorrentemente a dados partilhados.
Para garantir que esta concorrência não causa bugs, devemos:

- Identificar zonas críticas;
- "Trancar" as zonas críticas.

Enquanto que funções com trincos finos têm bastante vantagem na eficiência, também existem algumas contrapartidas:

- Trincos ocupam espaço em memória - demasiados trincos são de evitar;
- As operações de abrir e fechar trincos são algo demoradas, pelo que não se deve exagerar nestas operações;
- Programação com trincos finos é muito suscetível a bugs difíceis de resolver.

:::tip[Exemplo com Trincos Finos]

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

:::

## Jantar dos Filósofos

Cinco Filósofos estão reunidos para filosofar e jantar [spaghetti](https://drive.google.com/file/d/1yDuhf1gaubgpYjaWBWUBIqKw0oGrbGuO/view?usp=sharing).
Para comer precisam de dois garfos, mas a mesa apenas tem um garfo por pessoa.
Os filósofos podem estar em um de três estados: Pensar, Decidir comer e Comer.
Cada filósofo está num lugar fixo e apenas pode utilizar os garfos imediatamente à sua esquerda e direita.

**Implementação Naive**

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

**Jantar dos Filósofos com Semáforos**

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

Isto abre um problema, no caso do filósofo número 4, este escolhe primeiro o 4 e depois o 0, indo contra o princípio definido em cima.

Temos assim de arranjar uma solução para esse caso.

```c
mutex_t garfo[5] = {...};
filosofo(int id) {
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

**Recuo Aleatório**

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
        } else { // aquisição 2º trinco falhou
          unlock(garfo[id]); // abre 1º trinco e tenta outra vez
          sleep(random([0, MAX]));
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
  - Adaptar o valor de MAX consoante o número de tentativas
    - Por exemplo, MAX $=$ constante $\times$ num_tentativas

## Trincos - Limitações

Os trincos têm a desvantagem que só servem para proteger secções críticas e não são suficientemente expressivos para resolver outros problemas de sincronização.

:::tip[Exemplo: Acesso a Parque de Estacionamento]

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
  vagas--;
  unlock(m);
}

void sair() {
  lock(m);
  vagas++;
  unlock(m);
}
```

Esta solução, enquanto que correta, é extremamente pouco eficiente uma vez que depende de **espera ativa**, isto é, o processo fica preso num ciclo repetidamente à espera de uma condição.  
Para otimizar a eficiência de situações deste tipo usamos variáveis de condição.

:::

## Variáveis de Condição

As **variáveis de condição** permitem a uma tarefa esperar por uma condição que depende da ação de outra tarefa.
A condição é um booleano determinado em função do estado de variáveis partilhadas.
Uma variável de condição está sempre associada a um trinco, que protege as secções críticas com acessos às variáveis partilhadas que definem a condição da espera.
Pode haver mais que uma variável de condição associada ao mesmo trinco.  
O conjunto trinco + variáveis de condição é normalmente chamado um **monitor**.

### Primitivas (Semântica Mesa)

```c
wait(conditionVar, mutex)
```

Atomicamente, liberta o trinco associado e bloqueia a tarefa e coloca-a na fila de espera associada à variável de condição.
Quando for desbloqueada, a tarefa re-adquire o trinco e só depois é que a função esperar retorna.  
Uma tarefa só pode chamar `wait` quando detenha o trinco associado à variável de condição.

```c
signal(conditionVar)
```

Se houver tarefas na fila de espera da variável de condição, desbloqueia uma, passando o seu estado para executável.
Se não houver tarefas na fila da variável de condição, esta operação não tem efeito.

```c
broadcast(conditionVar)
```

Análogo ao `signal` mas desbloqueia todas as tarefas na fila de espera da variável de condição.

Normalmente estas primitivas são chamadas quando a tarefa ainda não libertou o trinco
associado à variável de condição

### Padrões Habituais de Programação com Variável de Condição

- Código que espera por condição

```c
lock(trinco);
/* ... acesso a variáveis partilhadas ... */
while (!condiçãoSobreEstadoPartilhado) // USAR SEMPRE CONDIÇÃO WHILE
  wait(varCondicao, trinco);
/* ... acesso a variáveis partilhadas ... */
unlock(trinco);
```

[**É extremamente importante que se use `while` em vez de `if` neste padrão de código**, visto que, por razões de otimização, às vezes o SO pode desbloquear o processo quando este está preso no `wait` num momento que não o esperado - ver explicação no final da página.](color:orange)

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

### Variáveis de Condição - POSIX

- `pthread_cond_t`
- Criação/destruição de variáveis de condição ([man page](https://man.archlinux.org/man/core/man-pages/pthread_cond_destroy.3p.en));
  - `int pthread_cond_init (condition, attr)`
  - `int pthread_cond_destroy (condition)`
- Assinalar e esperar nas variáveis de condição:
  - `int pthread_cond_wait (condition, mutex)` ([man page](https://man.archlinux.org/man/core/man-pages/pthread_cond_timedwait.3p.en))
  - `int pthread_cond_signal (condition)` ([man page](https://man.archlinux.org/man/core/man-pages/pthread_cond_broadcast.3p.en))
  - `int pthread_cond_broadcast (condition)` ([man page](https://man.archlinux.org/man/core/man-pages/pthread_cond_broadcast.3p.en))

Voltando ao exemplo do acesso ao parque de estacionamento:

```c
int vagas = N;
mutex m;
cond c;
void entrar() {
  lock(m);
  while (vagas == 0) // Use while condition because
    wait(c, m);      // wait can wake up without a signal
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

### Cuidados a ter

Quando uma tarefa chama `wait`, esta liberta o trinco e entra na fila de espera **atomicamente**.
Consequentemente, caso a condição mude e haja `signal`, pelo menos uma tarefa na fila será desbloqueada.
A tarefa que é desbloqueada por `signal/broadcast` não corre imediatamente - simplesmente é tornada executável - uma vez tem de re-adquirir o trinco para que o `wait` retorne.
Como a tarefa pode não correr imediatamente a seguir a se tornar executável o valor da condição pode ser alterado de volta, podendo gerar problemas graves.

![Problem with conditions](./imgs/0005/cond-problems.png#dark=1)

Podemos observar pela imagem que durante o tempo entre o `signal` (feito por T3) e uma tarefa ser "acordada" (T1) onde adquire o trinco, a variável de condição foi alterada pela tarefa (T2), isto irá resultar em problemas.

O que estamos a verificar é que o retorno do `wait` não garante que condição que lhe deu origem se verifique: a tarefa pode não ter sido a primeira tarefa a entrar na secção crítica depois da tarefa que assinalou a ter libertado.
Desta forma, após retorno do `wait`, **devemos re-verificar a condição**:

- [Não fazer](color:red): `if(condição)`
- [Fazer](color:green): `while(condição)`

Algumas implementações de variáveis de condição permitem que tarefa retorne do `wait` sem ter ocorrido `signal/broadcast` - [Spurious Wakeup](https://en.wikipedia.org/wiki/Spurious_wakeup). Isto é ainda outra razão para verificarmos a condição ciclicamente e não apenas uma vez.

---

Slides:

- [Slides 4](https://drive.google.com/file/d/1HD7UhXM4tYqEiZy_mYG0bUyKgKIntGyK/view?usp=sharing)
