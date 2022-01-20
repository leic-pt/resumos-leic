---
title: Implementação de um Mutex
description: Implementação de um Mutex
path: /so/implementation
type: content
---

# Implementação de um Mutex

```toc

```

## Propriedades Desejáveis num Trinco

- Propriedade de Correção (Safety)
  - Exclusão mútua
    - no máximo uma tarefa detém o trinco
- Propriedades de Progresso (Liveness)
  - Ausência de Interblocagem (Deadlock)
    - Se pelo menos uma tarefa tenta obter o trinco, então alguma o
      obterá (dentro de um tempo finito)
- Ausência de Míngua (Starvation)
  - Se uma dada tarefa tenta obter o trinco, essa tarefa conseguirá obtê-
    lo (dentro de um tempo finito)
  - Eficiência

## Implementações

- [Algorítmicas](#soluções-algorítmicas)
- [Hardware](#soluções-com-suporte-do-hardware)
- [Sistema Operativo](#trincos-como-objetos-geridos-pelo-núcleo-do-sistema-operativo)

## Soluções Algorítmicas

:::details[Tentativas de Solução]
**Tentativa de Solução 1**

```c
int trinco = ABERTO;

Fechar () {
  while (trinco == FECHADO) {/* instrução vazia */};
  trinco = FECHADO;
}
Abrir () {
  trinco = ABERTO;
}
```

[Duas tarefas podem passar o trinco para fechado ao mesmo tempo](color:red)

**Tentativa de Solução 2**

```c
int trinco_t1 = ABERTO;
int trinco_t2 = ABERTO;

Tarefa T1                           Tarefa T2
t1_fechar () {                      t2_fechar ( ) {
  while (trinco_t2 == FECHADO);       while (trinco_t1 == FECHADO);
  trinco_t1 = FECHADO;                trinco_t2 = FECHADO;
}                                   }

t1_abrir() {trinco_t1 = ABERTO;}    t2_abrir() {trinco_t2 = ABERTO;}

```

[Ambos os trincos podem ficar fechados ao mesmo tempo](color:red)

**Tentativa de Solução 3**

(igual à #2 mas com linhas trocadas)

```c
int trinco_t1 = ABERTO;
int trinco_t2 = ABERTO;

Tarefa T1                           Tarefa T2
t1_fechar () {                      t2_fechar ( ) {
  trinco_t1 = FECHADO;                trinco_t2 = FECHADO;
  while (trinco_t2 == FECHADO);       while (trinco_t1 == FECHADO);
}                                   }

t1_abrir() {trinco_t1 = ABERTO;}    t2_abrir() {trinco_t2 = ABERTO;}

```

[Ficam presos no ciclo `while`](color:red)

**Tentativa de Solução 4**

```c
int trinco_vez = 1;

Tarefa T1                           Tarefa T2
t1_fechar () {                      t2_fechar ( ) {
  while (trinco_vez == 2);       while (trinco_vez == 1);
}                                   }

t1_abrir() {trinco_vez = 2;}    t2_abrir() {trinco_vez = 1;}

```

[Dá prioridade a 1 deles](color:red)
:::

## Algoritmo da Padaria

[Lamport’s Bakery algorithm](https://en.wikipedia.org/wiki/Lamport%27s_bakery_algorithm) (proposto por Leslie Lamport)

- Cada cliente tem:
  - Senha com inteiro
    - Com número positivo caso esteja à espera da sua vez (ou a ser
      atendido)
    - Com zero caso contrário
  - Caneta
    - Sem tampa (caso o cliente esteja a escrever na sua senha)
    - Com tampa (caso o cliente não esteja a escrever na sua senha)
- Qualquer cliente pode observar os elementos acima dos outros
  clientes, mas só observa um de cada vez

**Passos**

- Quando um cliente quer ser atendido:
  - Fase 1 (obtenho número para a minha senha)
    - Tiro tampa da minha caneta
    - Olho para as outras senhas, 1 por 1, para determinar máximo
    - Escrevo na minha senha: máximo+1
    - Coloco tampa na minha caneta
  - Fase 2 (espero até ser sua vez de ser servido)
    - Olho para a senha de cada cliente, 1 por 1
    - Para cada outro cliente com senha positiva, espero enquanto:
    - Outro cliente tem tampa fora da caneta
    - Senha do outro tem número inferior à minha
    - Em caso de empate, caso o id do outro cliente seja inferior ao meu
  - Fase 3 (posso ser atendido em exclusão mútua!)
  - Fase 4: coloca senha a 0 (já fui atendido)

**Código**

`senha` contém o número da senha atribuído à tarefa\
`escolha` indica se a tarefa está a pretender aceder à secção crítica

```c
int senha[N]; // Inicializado a 0
int escolha[N]; // Inicializado a FALSE

Fechar (int i) {
  int j;
  escolha[i] = TRUE;
  senha [i] = 1 + maxn(senha); // Pi indica que está a escolher a senha
                               // Escolhe uma senha maior que todas as outras
                               // Anuncia que escolheu já a senha
  escolha[i] = FALSE;
  for (j=0; j<N; j++) { // Pi verifica se tem a menor senha de todos os Pj
    if (j==i) continue;
    while (escolha[j]) ; // Se Pj estiver a escolher uma senha, espera que termine

    while (senha [j] && (senha [j] < senha [i]) ||
    (senha [i] == senha [j] && j < i))); // Se a senha de Pi for menor, Pi entra
                                         // Se as senhas forem iguais,
                                         // entra o que tiver o menor identificador
  }
}
Abrir (int i) {senha [i] = 0;}

```

**Se não usássemos escolha** 2 tarefas podiam entrar na mesma secção critíca ao mesmo tempo

### Conclusão

- Complexas $\implies$ Latência
- Só são corretas se não houver reordenação de acessos a memória
- Implica perder otimizações de desempenho que são
  possíveis por compiladores modernos e caches
  - Só contemplam espera ativa

## Soluções com Suporte do Hardware

- `Abrir()`e `Fechar()` usam instruções especiais
  oferecidas pelos processadores:
  - Inibição de interrupções:
    - Estudadas mais à frente nos resumos
  - Exchange (`xchg`no Intel)
  - Test-and-set (`cmpxchg`no Intel)

![bus](./imgs/0006/bus.png#dark=1)

### Intruções de Hardware Atómicas

[BTS varX](https://youtu.be/9GJuoAQ-eVg?t=56)

- De forma indivisível :

  - Lê o bit menos significativo de varX
  - Escreve o valor do bit na carry flag
  - Coloca esse bit de varX com valor 1

Capaz de trancar o bus de memória, logo também funciona em
multi-processador

**Código (Simplificado)**

```asm
ABERTO EQU 0  ; ABERTO equivale ao valor 0
FECHADO EQU 1 ; FECHADO equivale ao valor 1
Fechar_hard:
L1: BTS trinco ; A variável trinco fica FECHADO (1)
               ; A carry flag fica com o valor inicial do trinco
  JC L1        ; Se carry flag ficou a 1, trinco estava FECHADO.
               ; Implica voltar a L1 e tentar de novo.
  RET          ; Se carry flag ficou a 0, trinco estava ABERTO e ficou FECHADO
Abrir_hard:
  MOV AX, ABERTO
  MOV trinco, AX
  RET
```

[Outras tarefas também podem ver o trinco a zero](color:red)

### Conclusão

- Oferecem os mecanismos básicos para a
  implementação da exclusão mútua
- Algumas não podem ser usadas directamente por programas em modo utilizador
  - e.g., inibição de interrupções
- Outras só contemplam espera ativa
  - e.g., `exchange`, `test-and-set`

## Trincos como Objetos Geridos pelo Núcleo do Sistema Operativo

![mutex implemented by SO](./imgs/0006/so-trinco.png#dark=1)

- Fechar e abrir são chamadas sistema
- Núcleo mantém estado de cada trinco
- Caso tarefa tente acesso a trinco fechado, o núcleo
  retira-a de execução, bloqueando-a!

```c
trinco_t t; t.var=ABERTO; t.tarefasBloqueadas = {};
t.t_interior;

Fechar (trinco_t t) {
  fechar_hw(t.t_interior);
  if (t.var == FECHADO) {
    t.tarefasBloqueadas += estaTarefa;
    abrir_hw(t.t_interior);
    bloqueia_tarefa(estaTarefa);
  }
  else {
    t.var = FECHADO;
    abrir_hw(t.t_interior);
  }
}

Abrir (trinco_t t) {
  fechar_hw(t.t_interior);
  if (t.tarefasBloqueadas.count > 0) {
    outraTarefa = t.tarefasBloqueadas.dequeue();
    abrir_hw(t.t_interior);
    desbloqueia_tarefa(outraTarefa);
  }
  else {
    t.var = ABERTO;
    abrir_hw(t.t_interior);
  }
}
```

- Núcleo não dá tempo de execução a tarefas na fila de espera
- Elimina-se espera ativa
  - Exceptuando durante curtos períodos,
    caso haja chamadas concorrentes a
    fechar()

Em que categoria está o
pthread_mutex?

- É trinco com suporte do núcleo
- No entanto, tem otimizações para que,
  quando o trinco está livre, se evite chamada
  sistema
- Assim minimiza-se os custos de chamadas sistema

![State of processes](./imgs/0006/cycle.png#dark=1)

---

Slides:

- [Slides 4.1](https://drive.google.com/file/d/14uEA_uE2kAu3D_p8VRkhupB9nwPRMNVr/view?usp=sharing)
