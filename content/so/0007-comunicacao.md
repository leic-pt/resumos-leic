---
title: Comunicação por Troca de Mensagem entre Processos
description: Comunicação por Troca de Mensagem entre Processos
path: /so/comunicacao
type: content
---

# Comunicação por Troca de Mensagem entre Processos

Dois paradigmas para programação concorrente

- Por Memória Partilhada
  - Tarefas partilham dados (no heap/amontoado)
  - Troca de dados é feita escrevendo e lendo da memória
    partilhada
  - Sincronização recorre a mecanismos adicionais (e.g., trincos,
    semáforos,…).
- Por Troca de Mensagens
  - Cada tarefa trabalha exclusivamente sobre dados privados
  - Tarefas transmitem dados trocando mensagens
  - Mensagens também servem para sincronizar tarefas

**Analogia**

- Edição concorrente de um documento

  - Google docs
    - Única cópia online do
      documento
    - As alterações de um editor são
      imediatamente aplicadas ao
      documento partilhado e visíveis
      logo aos outros editores

- Troca de Mensagens

  - Cada editor mantem uma
    cópia privada do documento
    no seu computador
  - Alterações enviadas por email
    e aplicadas
    independentemente

### Porquê Diferentes Paradigmas?

- Historicamente:

  - Algumas arquiteturas só permitiam que programas a correr em
    CPUs distintos trocassem mensagens
    - Cada CPU com a sua memória privada, interligados por alguma rede
  - Outras suportavam memória partilhada
    - E.g. CPUs podiam aceder à mesma memória RAM através de protocolo
      de coerência de cache

- Estilos diferentes de programação, com virtudes e defeitos:
  - Diferentes ambientes de programação mais apropriados para
    cada paradigma
  - Preferências de cada programador
  - Alguns problemas mais fáceis de resolver eficientemente num
    paradigma que noutro

## Combinações de Modelos de Paralelismo e Coordenação

- Dois modelos de paralelismo:

1. por tarefa
2. por processo

- Dois modelos de
  concorrência:

1. por troca de mensagens
2. por memória partilhada

- Os modelos de paralelismo
  e concorrência podem ser
  combinados!

![Matrix](./imgs/0007/matrix.png#dark=1)

Anteriormente vimos Memória Partilhada e Tarefas, Agora iremos ver Troca de Mensagens e Processos

### Comunicação por Troca de Mensagem

![Communications](./imgs/0007/comms.png#dark=1)

- A comunicação entre processos pode realizar-se no âmbito:
  - de uma única aplicação
  - entre aplicações numa mesma máquina
  - entre máquinas interligadas por uma redes de dados
- Exemplos:
  - servidores de base de dados
  - browser e servidor WWW
  - cliente e servidor SSH
  - cliente e servidor de e-mail
  - nós BitTorrent

### Implementação de um Canal de Comunicação

- O canal de comunicação pode ser implementado a dois
  níveis:
  - No núcleo do sistema operativo: os dados são enviados/recebidos por chamadas sistema
  - No user level: os processos acedem a uma zona de memória partilhada entre ambos os processos comunicantes

#### Por Memória Partilhada

![Shared Memory](./imgs/0007/shared.png#dark=1)

#### Cópia Através do Núcleo

![Core Copy](./imgs/0007/core.png#dark=1)

Iremos começar por falar neste última forma de implementação

## Unix - Modelo Computacional - IPC

### Pipes

- Mecanismo original do Unix para comunicação entre processos.
- Canal `byte stream` ligando dois processos, unidirecional
- Não tem nome externo
  - Os descritores são internos a um processo
  - Podem ser transmitidos para os processos filhos através do mecanismo de herança
- Os descritores de um pipe são análogos ao dos ficheiros
  - As operações de read e write sobre ficheiros são válidas para os pipes
  - O processo fica bloqueado quando escreve num pipe cheio
  - O processo fica bloqueado quando lê de um pipe vazio

![Pipes](./imgs/0007/tubinhos.png#dark=1)

:::details[Exemplo: Comunicação Pai-Filho]

```c
#include <stdio.h>
#include <fnctl.h>

#define TAMSG 100

char msg[] = "mensagem de teste";
char tmp[TAMSG];

main() {
  int fds[2], pid_filho;
  // fds[0] - descritor aberto para leitura
  // fds[1] - descritor aberto para escrita

  if (pipe (fds) < 0) exit(-1); // Criação de um pipe
  if (fork () == 0) {
    /* processo filho*/
    close(fds[1]);
    /* lê do pipe */
    read (fds[0], tmp, sizeof (msg));
    printf ("%s\n", tmp);
    exit (0);
  }
  else {
    /* processo pai */
    close(fds[0]);
    /* escreve no pipe */
    write (fds[1], msg, sizeof (msg));
    pid_filho = wait();
  }
}
```

:::

### Redirecção de Entradas/Saídas com Pipes

[**DUP - System Call**](https://man7.org/linux/man-pages/man2/dup.2.html)

:::details[Exemplo: Redireccionamento de Entradas/Saídas]

```c
#include <stdio.h>
#include <fnctl.h>

#define TAMSG 100

char msg[] = "mensagem de teste";
char tmp[TAMSG];

main() {
  int fds[2], pid_filho;
  if (pipe (fds) < 0) exit(-1);
  if (fork () == 0) {
    /* processo filho */
    /* liberta o stdin (posição zero) */
    close (0);

    /* redirecciona o stdin para o pipe de
    leitura */
    dup (fds[0]);

    /* fecha os descritores não usados pelo
    filho */
    close (fds[0]);
    close (fds[1]);
    /* lê do pipe */
    read (0, tmp, sizeof (msg));
    printf ("%s\n", tmp);
    exit (0);
  }
  else {
    /* processo pai */
    /* escreve no pipe */
    write (fds[1], msg, sizeof (msg));
    pid_filho = wait();
  }
}
```

:::

**Redireccionamento de Entradas/Saídas no Shell**

ls -la | grep xpto | ...etc...

![ls](./imgs/0007/ls.png#dark=1)

:::details[Exemplo: Redireccionamento de Entradas/Saídas]

```c
int main()
{
  int fds[2]; int p;
  pipe(fds);
  p = fork();
  if (p > 0){ // pai
    close(1); dup(fds[1]);
    execl("/bin/ls", "ls", "-la", 0);
  }
  else if (p == 0)
  {
    close(0); dup(fds[0]);
    execl("/bin/grep", "grep", "xpto", 0);
  }
  return EXIT_FAILURE;
}
```

:::

## Named Pipes ou FIFO

- Para dois processos (que não sejam pai e filho)
  comunicarem é preciso que o pipe seja identificado por um
  nome
- Atribui-se um nome lógico ao pipe, usando o espaço de
  nomes do sistema de ficheiros
  - Um named pipe comporta-se externamente como um ficheiro,
    existindo uma entrada na directoria correspondente
- Um named pipe pode ser aberto por processos que não
  têm qualquer relação hierárquica

  - Tal como um ficheiro tem um dono e permissões de acesso

- Um named pipe é um canal:
  - Unidireccional
  - Interface sequência de caracteres (byte stream)
  - Identificado por um nome de ficheiro
    - Entre os restantes ficheiros do sistema de ficheiros
    - Ao contrário dos restantes ficheiros, named pipe não é persistente

### Como Usar

- Criar um named pipe no sistema de ficheiros
  - Usando função `mkfifo`
- Um processo associa-se com a função `open`
  - Processo que abra uma extremidade do canal bloqueia até que
    pelo menos 1 processo tenha aberto a outra extremidade
- Eliminado com a função `unlink`
- Leitura e envio de informação feitos com API habitual do
  sistema de ficheiros (`read`, `write`, etc)

:::details[Exemplo com Named Pipes]

```c
/* Servidor */
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

#define TAMMSG 1000

main () {
  int fcli, fserv, n;
  char buf[TAMMSG];
  unlink("/tmp/servidor");
  unlink("/tmp/cliente");
  if (mkfifo ("/tmp/servidor", 0777) < 0)
    exit (1);
  if (mkfifo ("/tmp/cliente", 0777) < 0)
    exit (1);
  if ((fserv = open ("/tmp/servidor",
  O_RDONLY)) < 0) exit(1);
  if ((fcli = open ("/tmp/cliente",
  O_WRONLY)) < 0) exit(1);

  for (;;) {
    n = read (fserv, buf, TAMMSG);
    if (n <= 0) break;
    trataPedido (buf);
    n = write (fcli, buf, TAMMSG);
  }

  close (fserv);
  close (fcli);
  unlink("/tmp/servidor");
  unlink("/tmp/cliente");
}
/* Cliente */
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

#define TAMMSG 1000

void produzMsg (char *buf) {
strcpy (buf, "Mensagem de teste");
}

void trataMsg (buf) {
printf ("Recebeu: %s\n", buf);
}

main() {
  int fcli, fserv;
  char buf[TAMMSG];

  if ((fserv = open ("/tmp/servidor",
  O_WRONLY)) < 0) exit(1);
  if ((fcli = open ("/tmp/cliente",
  O_RDONLY)) < 0) exit(1);

  produzMsg (buf);
  write (fserv, buf, TAMMSG);
  read (fcli, buf, TAMMSG);
  trataMsg (buf);
  close (fserv);
  close (fcli);
}
```

:::

## Signals

- Dois propósitos distintos:
  - Mecanismo usado pelo núcleo do SO para notificar um
    processo de que ocorreu um dado evento relevante
    - Exemplos: `CTRL-C`, timeout, acesso inválido a memória, etc.
- Mecanismo limitado de comunicação entre processos
  - Permite a um processo notificar outro que ocorreu um dado evento
  - Exemplo: processo servidor notifica outros processos para que iniciem
    procedimento de terminação
- Em ambos os casos, o evento é tratado de forma assíncrona pelo processo

### Definições

**Eventos Assíncronos**

Rotinas Assíncronas para Tratamento de acontecimentos assíncronos e excepções

**Rotinas Assíncronas**

- Certos acontecimentos devem ser tratados pelas aplicações, embora não seja possível prever a sua
  ocorrência
  - Ex: `Ctrl-C`
  - Ex: Acção desencadeada por um timeout
- Como tratá-los na programação sequencial?
  - Interrupções de Sistema

**Modelo de Eventos**

- Semelhante a outro conceito...

![Modelo de Eventos](./imgs/0007/event.png#dark=1)

### Rotinas Assíncronas

`RotinaAssincrona (Evento,Procedimento)`

- Tem de existir uma tabela com os eventos que o sistema pode tratar
- Identificação do procedimento a executar assincronamente quando se manifesta o evento.

**Acontecimentos Assíncronos em Unix**

[Definidos em signal.h](<https://en.wikipedia.org/wiki/Signal_(IPC)#POSIX_signals>)

### Tratamento por omissão

- Cada signal tem um tratamento por omissão, que
  pode ser:
  - Terminar o processo
  - Terminar o processo e criar ficheiro "core"
  - Ignorar signal
  - Suspender o processo
  - Continuar o processo suspenso

**Redefinir o tratamento de um Signal**

- Função `signal` permite mudar o tratamento de um
  signal:
  - Mudar para outro tratamento pré-definido
  - Associar uma rotina do programa para tratar o signal
- O signal `SIGKILL` não pode ser redefinido.

`void (*signal (int sig, void (*func)(int))) (int)`

`void (...)` - A função retorna um ponteiro para função anteriormente associada ao `signal`\
`int sig` - Identificador do `signal` para o qual se pretende definir um `handler`\
`void(*func)(int)` - Ponteiro para a função ou macro especificando:

- `SIG_DFL` - acção por omissão
- `SIG_IGN` - ignorar o signal

  `(int)` - Parâmetro para a função de tratamento

:::details[Exemplo de redefinir o tratamento de um Signal]

```c
#include <stdio.h>
#include <signal.h>
#include <stdlib.h>

void apanhaCTRLC (int s) {
  char ch;
  printf("Quer de facto terminar a execucao?\n");
  ch = getchar();
  if (ch == 's') exit(0);
  else {
    printf ("Entao vamos continuar\n");
    signal (SIGINT, apanhaCTRLC);
  }
}

int main () {
  signal (SIGINT, apanhaCTRLC);
  printf("Associou uma rotina ao signal SIGINT\n");
  for (;;)
    sleep (10);
}
```

:::

### Chamada Sistema Kill

`kill (pid, sig);`

- Envia um signal ao processo

`pid` - Identificador do processo.\
Se o pid for zero é enviado a todos os
processos do grupo.\
Está restrito ao superuser o envio de
signals para processos de outro user\
`sig` - Identificador do `signal`

### Outras funções associadas aos signals

- `unsigned alarm (unsigned int segundos)`
  - o signal `SIGALRM` é enviado para o processo depois de
    decorrerem o número de segundos especificados. Se o
    argumento for zero, o envio é cancelado.
- `pause()`
  - aguarda a chegada de um signal
- unsigned sleep (unsigned int segundos);
  - A função chama alarm e bloqueia-se à espera do `signal`
- `int raise(int sig)`
  - o `signal` especificado em input é enviado para o próprio
    processo

### Diferentes semânticas dos Signals

Unix System V e Unix BSD

- System V:
  - A associação de uma rotina a um signal é apenas efetiva para uma ativação
    - Depois de receber o signal, o tratamento passa a ser novamente o por omissão
      (necessário associar de novo)
    - Entre o lançamento de rotina de tratamento e a nova associação à tratamento
      por omissão
    - Preciso restabelecer a associação na primeira linha da rotina de tratamento
      - Problema se houver receção sucessiva de signals
- BSD (e nas versões de Linux mais recentes, desde glibc2):
  - Associação signal-rotina não é desfeita após ativação
  - A receção de um novo signal é inibida durante a execução da rotina de
    tratamento

**Como conseguir código portável?**

- Não associar signals a rotinas

  - Associar apenas a `SIG_DFL` ou `SIG_IGN`

- Usar função sigaction

  - Ver detalhes nas man pages

- Em plataformas Linux, para ter a certeza de obter
  semântica BSD, usar `bsd_signal`

### Funções async-signal-safe

- A lista das funções que podem ser chamadas a partir
  dum signal pode ser obtida na página de manual do
  signal(7)
- Estas funções são também chamadas `async-signal-safe` e incluem:
  - funções reentrantes
  - funções cuja execução não pode ser interrompidas por
    signals (pois os bloqueiam durante a própria execução)

Processo com múltiplas tarefas recebe um signal
associado a uma função de tratamento.
Qual das tarefas é interrompida para executar a função?

- Por omissão, o OS escolhe uma qualquer tarefa do
  processo
- Podemos usar função `pthread_sigmask` para impor
  que determinadas tarefas não tratem aquele signal
  - Basta cada tarefa chamar `pthread_sigmask` para bloquear o
    signal

:::tip[Matéria Fora de Avaliação]
Existem nos slides matéria que para os mais curiosos pode ser interessante
:::

---

Slides:

- [Slides 5](https://drive.google.com/file/d/1h0CU2NX_K-0G-FdakvWHwKmoAe3BbPZS/view?usp=sharing)
