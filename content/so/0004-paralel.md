---
title: Programação Paralela
description: Programação Paralela
path: /so/paralel
type: content
---

# Programação Paralela

```toc

```

## Motivos

![moore's-law](./imgs/0004/0004-moore.png#dark=1)

Como podemos ver pelo gráfico mostrado em cima,
o número de transistores aumenta de acordo com a [Lei de Moore](https://en.wikipedia.org/wiki/Moore%27s_law).  
No entanto, a performance de uma thread do processador quase que estagnou no final da década de 2000.

Isso mostra que atualmente colocar mais transístores num processador, não o torna mais rápido.
Foi preciso pensar noutra maneira de continuar a aumentar a _performance_.  
Chegou-se à conclusão de que colocar vários "mini" processadores (_cores_) dentro do processador,
iria permitir que este pudesse fazer várias instruções em paralelo.

Assim aparecem os dual-cores (2), quad-cores (4), [muitos-cores](https://en.wikichip.org/wiki/amd/ryzen_threadripper/3990x) (64):

![Cores dentro de um processador](./imgs/0004/0004-cores.png)

Melhoramos assim a performance de:

- **Interação com periféricos lentos**
  - Enquanto periférico demora a responder a um fluxo de execução,
    outro fluxo paralelo pode continuar a fazer progresso
- **Programas interativos**
  - Enquanto um fluxo de execução espera por ação do utilizador,
    outros podem progredir em fundo

Com [Programação Paralela](color:orange) melhoramos a performance de qualquer CPU,
até aqueles que só têm [1 core](https://pt.wikipedia.org/wiki/Pentium).

## Introdução à Programação com Processos

A [multiprogragramação](color:orange) consiste na execução, em paralelo, de múltiplos programas na mesma máquina.
Cada instância de um programa em execução denomina-se um **processo**

![Análise temporal de um processo](./imgs/0004/0004-graph.png#dark=1)

Na realidade só pode estar a correr um processo de cada vez (por unidade de processamento).
Contudo, uma vez que um CPU é capaz de executar muitos milhares de operações por segundo, é possível executar a troca de processos em execução no CPU, de forma que, para um humano, os processsos parecem correr em paralelo.
A isto dá-se o nome de [pseudo-concorrência](color:green).

Uma vez que vamos falar muito de processos, é relevante estabelecer a diferença entre um programa e um processo:

- Um **programa** é um ficheiro executável (sem atividade);
- Um **processo** é um objecto do sistema operativo que suporta a execução dos programas. [Mais à frente](http://resumos.leic.pt/so/process-management#processos-e-tarefas) vamos ver como este objeto é visto pelo SO;
- Um processo pode, durante a sua vida, executar diversos programas;
- Um programa ou partes de um programa podem ser partilhados por diversos processos;
  - Bibliotecas partilhadas (e.g [DLL](https://en.wikipedia.org/wiki/Dynamic-link_library) no Windows).

### Processo

![virtual-machine](./imgs/0004/0004-vm.png#dark=1)
Elementos principais da máquina virtual que o SO disponibiliza aos processos.

Pelo ponto de vista do processo este encontra-se isolado de tudo resto e com recursos ilimitados[.](https://incels.wiki/images/thumb/b/bb/Bluepill.png/300px-Bluepill.png)  
Tal como uma máquina real, um processo tem:

- Um espaço de endereçamento (virtual):
  - Conjunto de posições de memória acessíveis;
  - Código, dados e pilha;
  - Dimensão variável;
- Um reportório de instruções:
  - As instruções do processador executáveis em modo utilizador;
  - As funções do sistema operativo;
- Um contexto de execução (estado interno):
  - Toda a informação necessária para retomar a execução do processo;
  - Memorizado quando o processo é retirado de execução.

Um processo tem algumas **propriedades:**

- Identificador;
- Programa;
- Espaço de Endereçamento (codigo, dados, pilha);
- Prioridade (vamos ver o que é [mais à frente](https://resumos.leic.pt/so/process-management#scheduling-escalonamento));
- Processo pai;
- Canais de Entrada Saída, Ficheiros;
- Quotas de utilização de recursos;
- Contexto de Segurança.

E **operações**, i.e, funções sistema que atuam sobre os processos:

- Criar;
- Eliminar;
- Esperar pela terminação de subprocesso.

## Programação com Processos em Unix

Em Unix, os processos são identificados por um inteiro (PID).
Alguns identificadores estão pré atribuídos, nomeadamente:

- Processo 0 é o swapper (gestão de memória);
- Processo 1 `init` é o de inicialização do sistema.

Os processos relacionam-se de forma hierárquica.
Sempre que é criado um processo, este herda grande parte do contexto do processo pai.
Quando um processo termina a sua execução, todos os subprocessos que lhe estão associados continuam a executar-se, sendo adoptados pelo processo de inicialização.

![Hierarquia de processos](./imgs/0004/0004-priority.png#dark=1)

### Criação de um Processo

```c
int fork()
```

A função `fork` (não recebe parâmetros) cria um processo (a que chamamos processo filho) que é uma cópia do processo em que foi criado (a que chamamos processo pai). Nomeadamente, são copiados:

- O espaço de endereçamento;
- O contexto de execução.

Ao copiar o contexto de execução, poderíamos pensar que esse processo iria ser pesado (em tempo e espaço).
Mas na verdade, a chamada `fork` é muito rápida.
Iremos estudar [mais à frente](https://resumos.leic.pt/so/memory-management#partilha-de-mem%C3%B3ria-entre-processos) porquê.

O fork apenas permite lançar um processo com o mesmo código.

A função retorna o PID do processo.
Este parâmetro assume valores diferentes consoante o processo em que se efetua o retorno:

- ao processo pai é devolvido o PID do filho
- ao processo filho é devolvido 0
- -1 em caso de erro

:::tip[Exemplo de fork]

```c
main() {
  pid_t pid;
  pid = fork();
  if (pid == -1){
    // ERRO
  }else if (pid == 0) {
    // Código do filho
  } else {
    // Código do pai
  }
  // ...
}
```

:::

### Terminação do Processo

```c
void exit(int status)
```

A função `exit` termina o processo em que é chamada, libertando todos os recursos detidos pelo processo, tais como os ficheiros abertos.
A terminação do processo é assinalada ao processo pai.

`status` é um parâmetro que permite passar ao processo pai o estado em que o processo terminou.
Normalmente um valor negativo indica um erro.

:::tip[E se a main terminar com return em vez de exit?]

Até agora, nunca chamámos `exit` para terminar programas.
Nem é preciso, o compilador trata disso automaticamente, chamando ele a função `exit` depois da execução da `main`.

```c
main_aux(argc, argv) {
  int s = main(argc, argv); // Função main do programador
  exit(s);
}
```

:::

` int wait (int *status)`

Esta função para o processo pai até este se sincronizar com a terminação de um processo filho.

- `wait` retorna o pid do processo terminado. O processo pai pode ter vários filhos sendo desbloqueado quando um terminar;
- O estado de terminação do processo filho que foi atribuído no parâmetro da função `exit` é guardado na variável apontada por `status`.

:::tip[Macros Importantes]
Usando `man wait` poderão encotrar Macros (`WIFEXITED`, `WEXITSTATUS`) que ajudam a saber como e se um processo terminou (com exit).
:::

:::tip[Exemplo de exit e wait]

```c
main () {
  int pid, estado;

  pid = fork();
  if (pid == 0) {
    // execução de algoritmo pelo filho
    exit(0);
  } else {
    // processo pai bloqueia-se à espera
    // da terminação do processo filho
    pid = wait(&estado);
  }
}
```

:::

Ao se fazer `exit` são mantidos os atributos necessários para quando o pai chamar `wait`:

- `pid` do processo terminado e do seu processo pai;
- `status` da terminação.

Entre `exit` e `wait`, o processo diz-se `zombie`.
Só depois de `wait` é que o processo é totalmente esquecido.

:::details[Exemplos]

Pai e filho a executarem trabalhos diferentes:

- Pai executa `fnPai()`;
- Filho executa `fnFilho()`.

```c
main () {
  int r = fork();
  if (r == 0) {
	// execução de algoritmo pelo filho
	fnFilho();
  } else if (r > 0) {
	// execução de algoritmo pelo pai
	fnPai();
  }
  exit(EXIT_SUCCESS);
}
```

Pai espera pelo resultado do filho:

- Filho: termina devolvendo o retorno de `fnFilho()`;
- Pai: depois de executar `fnPai()`, aguarda até saber o resultado do filho, e imprime soma de ambos.

```c
main () {
  int a,r, s;
  r = fork();
  if (r == 0) {
	// execução de algoritmo pelo filho
	a = fnFilho();
	exit(a);
  } else if (r > 0) {
	// execução de algoritmo pelo pai
	a = fnPai();
	wait(&s);
	if (WIFEXITED(s))
      printf("Total: %d\n", a + WEXITSTATUS(s));
	  exit(EXIT_SUCCESS);
  }
}
```

:::

### Executar outros programas

Até agora só vimos como criar uma cópia de um processo que execute o mesmo programa que o pai.  
Vamos agora ver como ter o processo filho a executar um programa diferente.

```c
int execl(char* ficheiro, char* arg0, char* argl, ..., argn, 0)
```

```c
int execv(char* ficheiro, char* argv[])
```

`ficheiro` é o caminho (absoluto) de acesso ao ficheiro executável.

Os argumentos podem ser passados de duas maneiras:

- Para `execl`, passa-se os ponteiros 1 a 1, acabando em 0
- Para `execv`, passa-se um array de ponteiros

Estes parâmetros são passados para a função `main` do novo programa e acessíveis através do `argv`.
Ambas as funções `execl()` e `execv()` são **front-ends** mais simples para `execve()` que é a função principal com mais parâmetros.

:::tip[Exemplo de execl]

```c
main() {
  int pid;
  pid = fork();
  if (pid == 0) {
    execl("/bin/who", "who", 0);
    // controlo deveria ser transferido para o novo programa
    printf("Erro no execl\n");
    exit(-1);
  } else {
    // algoritmo do processo pai
  }
}
```

:::

Por convenção o `arg0` é o nome do programa.

### Implementação de uma shell

Uma shell pode ser descrita muito facilmente por:

- Ciclo infinito, em que cada iteração:

  - Imprime mensagem;
  - Lê comando;
  - Cria novo processo filho;
  - Processo filho deve executar outro programa (indicado no comando lido);
  - Entretanto, o processo da shell bloqueia-se até filho terminar;
  - Volta à próxima iteração.

```c
while(TRUE) {
  prompt();
  read_command(command, params);
  pid = fork();
  if (pid < 0) {
    printf ("Unable to fork"); // Erro no fork
    continue;
  }
  if (pid != 0) {
    wait(&status); // Se o fork gerar um pai
  } else{
    execv(command, params);
  }
}
```

## Introdução à Programação com Tarefas (Threads)

### Tarefas

![Tarefas (threads)](./imgs/0004/0004-tarefas.png#dark=1)

Tarefas (em inglês, _threads_), são um mecanismo simples para criar fluxos de execução
independentes que partilham um contexto comum.

Num mesmo processo, as tarefas partilham entre si:

- O código
- Amontoado (heap)
  - Variáveis globais
  - Variáveis dinamicamente alocadas (malloc)
- Atributos do processo (visto mais tarde na cadeira)

Mas não partilham:

- Pilha (stack)
  - (atenção) não há isolamento entre pilhas!
  - Bugs podem fazer com que uma tarefa aceda à pilha de outra tarefa
- Estado dos registos do processador
  - Incluindo instruction pointer
- Atributos específicos da tarefa
  - Thread id (tid)
  - etc (visto mais tarde na cadeira)

## Programação com Tarefas em Unix (Interface POSIX)

### Operações sobre Tarefas

```c
int pthread_create(&tid, attr, function, arg)
```

(_[man page](https://man.archlinux.org/man/pthread_create.3)_)

- `tid` é o apontador para o identificador da tarefa;
- `attr` define atributos da tarefa(prioridade, etc);
- `function` é a função a executar;
- `arg` é o ponteiro para os parâmetros dados à função.

```c
void pthread_exit(void *value_ptr)
```

(_[man page](https://man.archlinux.org/man/pthread_exit.3)_)

- Tarefa chamadora termina;
- Guarda ponteiro para resultados no ponteiro `value_ptr`.

```c
int pthread_join(pthread_t thread, void *value_ptr)
```

(_[man page](https://man.archlinux.org/man/pthread_join.3)_)

- Tarefa chamadora espera até a tarefa indicada ter terminado;
- O ponteiro retornado pela tarefa terminada é colocado em `(*value_ptr)`.

Note-se como usamos sempre `void*` (referência opaca) na passagem de parâmetros.
Isto permite que os parâmetros possam ser de qualquer tipo.  
Os parâmetros de entrada para a nova tarefa são passados através do último argumento de `pthread_create` e a nova tarefa recebe parâmetro no argumento único da sua função.  
Os parâmetros de saída devolvido pela nova tarefa são colocados no parâmetro de `pthread_exit`, sendo recebidos pela tarefa criadora através do último argumento de `pthread_join` (por referência).

### Regra de ouro

O núcleo oferece a ilusão de uma máquina com número infinito de processadores, sendo que cada tarefa corre no seu processador.
No entanto, as velocidades de cada processador virtual podem ser diferentes e não podem ser previstas.

Esta regra também se aplica a programação com processos paralelos.

:::details[Exemplo: Soma das linhas de uma matriz]

Num programa para somar linhas de matrizes, podemos codificar uma resolução de várias formas.

**Solução sequencial**

```c
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <pthread.h>

#define N 5
#define TAMANHO 10

int buffer[N][TAMANHO];

void *soma_linha(int *linha) {
  int c, soma = 0;
  int *b = linha;
  for (c = 0; c < TAMANHO - 1; c++)
    soma += b[c];
  b[c] = soma; /* soma->ult.col. */
  return NULL;
}

int main(void) {
  int i, j;
  inicializaMatriz(buffer, N, TAMANHO);
  for (i = 0; i < N; i++)
    soma_linha(buffer[i]);
  imprimeResultados(buffer);
  exit(0);
}
```

**Solução paralelizada**

```c
#include <stdlib.h>
#include <stdio.h>
#include <unistd.h>
#include <pthread.h>

#define N 5
#define TAMANHO 10

int buffer[N][TAMANHO];

void *soma_linha(void *linha) {
  int c, soma = 0;
  int *b = (int*) linha;
  for (c = 0; c < TAMANHO - 1; c++)
    soma += b[c];
  b[c] = soma; /* soma->ult.col. */
  return NULL;
}

int main (void) {
  int i, j;
  pthread_t tid[N];
  inicializaMatriz(buffer, N, TAMANHO);
  for (i = 0; i < N; i++) {
    if (pthread_create(&tid[i], 0, soma_linha, buffer[i]) == 0) {
      printf("Criada a tarefa %d\n", tid[i]);
    } else {
      printf("Erro na criação da tarefa\n");
      exit(1);
    }
  }
  for (i = 0; i < N; i++) {
    pthread_join(tid[i], NULL);
  }
  printf("Terminaram todas as threads\n");

  imprimeResultados(buffer);
  exit(0);
}
```

:::

### Exemplos de Erros Comuns

Quando estamos a criar programas paralelizados, podem ocorrer erros que nunca aconteceriam em programas sequenciais.

Vamos ver um exemplo que simula o levantamento de dinheiro de uma conta bancária.

```c
struct {
  int saldo;
  // outras variáveis, ex. nome do titular, etc.
} conta_t;

int levantar_dinheiro(conta_t *conta, int valor) {
  if (conta->saldo >= valor) {
    conta->saldo = conta->saldo - valor;
  } else {
    valor = -1;
  }
  assert(conta->saldo >= 0);
  return valor;
}
```

Se a função for chamada por várias threads, pode acontecer que `conta->saldo` mude o seu valor incorretamente!

```c
struct {
  int saldo;
  // outras variáveis, ex. nome do titular, etc.
} conta_t;

int levantar_dinheiro(conta_t *conta, int valor) {
  conta->saldo = conta->saldo - valor;
  return valor;
}
```

O código equivalente em assembly seria o seguinte:

```
mov AX, SALDO ; carrega conteúdo da posição de memória
              ; SALDO para registo geral AX

mov BX, VALOR ; carrega conteúdo da posição de memória
              ; VALOR para registo geral BX

sub AX, BX    ; efectua subtracção AX = AX - BX

mov SALDO, AX ; escreve resultado da subtracção na
              ; posição de memória SALDO
```

Ao vermos o código assembly desta função, podemos reparar que entre a chamada das variáveis
para os registos e a voltar a guardar o valor nas variáveis, o seu valor pode sofrer alteração
por outras threads que possam estar a escrever sobre elas.  
Temos assim que evitar que threads acedam ao mesmo endereço de memória ao mesmo tempo.

[**IMPORTANTE**](color:yellow): É sempre má ideia assumir que uma operação em C é indivisível!!!

## Processos vs Tarefas

Vantagens de multi-tarefa:

- Criação e comutação entre tarefas do mesmo processo mais leves (vs. entre processos);
- Tarefas podem comunicar através de memória partilhada - comunicação entre processos é mais limitada (visto mais tarde na cadeira);
  Vantagens de processos:
- Podemos executar diferentes binários em paralelo;
- Isolamento: confinamento de bugs;
- Outras (visto mais tarde na cadeira).

:::tip[Exemplo de Uso de Processos]

**Chromium**:

- No browser [Chromium](https://brave.com/), criar um novo separador causa a chamada do `fork`;
- Processo filho usado para carregar e executar scripts dos sites abertos nesse separador;
- Permite que separadores não obtenham informação sobre os outros separadores (isolamento).

:::

---

Slides:

- [Slides 3](https://drive.google.com/file/d/1z8LmFC_-qSNok2l4b8KznLK7sEPxwexY/view?usp=sharing)
