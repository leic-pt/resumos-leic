---
title: Cliente & Servidor usando TCP e UDP
description: Resolução dos Laboratórios.
path: /rc/lab1
type: labsProg
---

# Lab 1 - Cliente & Servidor usando TCP e UDP

```toc

```

Neste laboratório foram apresentados os protocolos TCP e UDP e foram mostradas implementações de um cliente e de um servidor, para cada protocolo.  
É feita a comunicação para o servidor `tejo.tecnico.ulisboa.pt`, uma máquina que está no IST e que aceita ligações de fora do IST (ou seja, o código abaixo pode ser testado com essa máquina mesmo fora dos laboratórios).

Nesta página encontram-se os ficheiros usados neste laboratório com bastantes comentários, de forma a ser claro o que cada linha de código faz, visto que esta matéria é importante para o projeto da UC em 2022-2023.

## Cliente UDP

```c
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

#define PORT "58001"

int fd, errcode;
ssize_t n;
socklen_t addrlen; // Tamanho do endereço
/*
hints - Estrutura que contém informações sobre o tipo de conexão que será estabelecida.
        Podem-se considerar, literalmente, dicas para o sistema operacional sobre como
        deve ser feita a conexão, de forma a facilitar a aquisição ou preencher dados.

res - Localização onde a função getaddrinfo() armazenará informações sobre o endereço.
*/
struct addrinfo hints, *res;
struct sockaddr_in addr;
char buffer[128]; // buffer para onde serão escritos os dados recebidos do servidor

int main() {

    /* Cria um socket UDP (SOCK_DGRAM) para IPv4 (AF_INET).
    É devolvido um descritor de ficheiro (fd) para onde se deve comunicar. */
    fd = socket(AF_INET, SOCK_DGRAM, 0);
    if (fd == -1)
        exit(1);

    /* Preenche a estrutura com 0s e depois atribui a informação já conhecida da ligação*/
    memset(&hints, 0, sizeof hints);
    hints.ai_family = AF_INET;      // IPv4
    hints.ai_socktype = SOCK_DGRAM; // UDP socket

    /* Busca informação do host "tejo.tecnico.ulisboa.pt", na porta especificada,
    guardando a informação nas `hints` e na `res` */
    errcode = getaddrinfo("tejo.tecnico.ulisboa.pt", PORT, &hints, &res);
    if (errcode != 0)
        exit(1);

    /* Envia para o `fd` (socket) a mensagem "Hello!\n" com o tamanho 7.
       Não são passadas flags (0), e é passado o endereço de destino.
       É apenas aqui criada a ligação ao servidor. */
    n = sendto(fd, "Hello!\n", 7, 0, res->ai_addr, res->ai_addrlen);
    if (n == -1)
        exit(1);

    /* Recebe 128 Bytes do servidor e guarda-os no buffer.
       As variáveis `addr` e `addrlen` não são usadas pois não foram inicializadas. */
    addrlen = sizeof(addr);
    n = recvfrom(fd, buffer, 128, 0, (struct sockaddr *)&addr, &addrlen);
    if (n == -1)
        exit(1);

    /* Imprime a mensagem "echo" e o conteúdo do buffer (ou seja, o que foi recebido
    do servidor) para o STDOUT (fd = 1) */
    write(1, "echo: ", 6);
    write(1, buffer, n);

    /* Desaloca a memória da estrutura `res` e fecha o socket */
    freeaddrinfo(res);
    close(fd);
}
```

## Servidor UDP

Este código tem algumas similaridades ao Cliente UDP e por isso, apenas estão comentadas as diferenças.

```c
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

#define PORT "58001"

int fd, errcode;
ssize_t n;
socklen_t addrlen;
struct addrinfo hints, *res;
struct sockaddr_in addr;
char buffer[128];

int main() {
    fd = socket(AF_INET, SOCK_DGRAM, 0);
    if (fd == -1)
        exit(1);

    memset(&hints, 0, sizeof hints);
    hints.ai_family = AF_INET;
    hints.ai_socktype = SOCK_DGRAM;
    /* É passada uma flag para indicar que o socket é passivo.
    Esta flag é usada mais tarde pela função `bind()` e indica que
    o socket aceita conceções. */
    hints.ai_flags = AI_PASSIVE;

    /* Ao passar o endereço `NULL`, indicamos que somos nós o Host. */
    errcode = getaddrinfo(NULL, PORT, &hints, &res);
    if (errcode != 0)
        exit(1);

    /* Quando uma socket é criada, não tem um endereço associado.
    Esta função serve para associar um endereço à socket.
    É associado o nosso endereço (`res->ai_addr`, definido na chamada à função `getaddrinfo()`).*/
    n = bind(fd, res->ai_addr, res->ai_addrlen);
    if (n == -1)
        exit(1);

    /* Loop para receber bytes e processá-los */
    while (1) {
        addrlen = sizeof(addr);
        /* Lê da socket (fd) 128 bytes e guarda-os no buffer.
        Existem flags opcionais que não são passadas (0).
        O endereço do cliente (e o seu tamanho) são guardados para mais tarde devolver o texto */
        n = recvfrom(fd, buffer, 128, 0, (struct sockaddr *)&addr, &addrlen);
        if (n == -1)
            exit(1);

        /* Faz `echo` da mensagem recebida para o STDOUT do servidor */
        write(1, "received: ", 10);
        write(1, buffer, n);

        /* Envia a mensagem recebida (atualmente presente no buffer) para o endereço `addr` de onde foram recebidos dados */
        n = sendto(fd, buffer, n, 0, (struct sockaddr *)&addr, addrlen);
        if (n == -1)
            exit(1);
    }

    freeaddrinfo(res);
    close(fd);
}
```

## Cliente TCP

Este código assemelha-se bastante ao do Cliente UDP e por isso, apenas estão comentadas as diferenças.  
Vale notar que as alterações são apenas:

- o tipo de Socket (`SOCK_DGRAM` vs `SOCK_STREAM`);
- as funções chamadas:
  - `connect()` em TCP para estabelecer a ligação inicial;
  - `sendto()` vs `write()`;
  - `recvfrom()` vs `read()`.

```c
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

#define PORT "58001"

int fd, errcode;
ssize_t n;
socklen_t addrlen;
struct addrinfo hints, *res;
struct sockaddr_in addr;
char buffer[128];

int main() {

    /* Cria um socket TCP (SOCK_STREAM) para IPv4 (AF_INET).
    É devolvido um descritor de ficheiro (fd) para onde se deve comunicar. */
    fd = socket(AF_INET, SOCK_STREAM, 0);
    if (fd == -1)
        exit(1);

    memset(&hints, 0, sizeof hints);
    hints.ai_family = AF_INET;
    hints.ai_socktype = SOCK_STREAM; // TCP socket

    errcode = getaddrinfo("tejo.tecnico.ulisboa.pt", PORT, &hints, &res);
    if (errcode != 0)
        exit(1);

    /* Em TCP é necessário estabelecer uma ligação com o servidor primeiro (Handshake).
       Então primeiro cria a conexão para o endereço obtido através de `getaddrinfo()`. */
    n = connect(fd, res->ai_addr, res->ai_addrlen);
    if (n == -1)
        exit(1);

    /* Escreve a mensagem "Hello!\n" para o servidor, especificando o seu tamanho */
    n=write(fd,"Hello!\n",7);
    if(n==-1)
        exit(1);

    /* Lê 128 Bytes do servidor e guarda-os no buffer. */
    n=read(fd,buffer,128);
    if(n==-1)
        exit(1);

    /* Imprime a mensagem "echo" e o conteúdo do buffer (ou seja, o que foi recebido
    do servidor) para o STDOUT (fd = 1) */
    write(1, "echo: ", 6);
    write(1, buffer, n);

    /* Desaloca a memória da estrutura `res` e fecha o socket */
    freeaddrinfo(res);
    close(fd);

}
```

## Servidor TCP

Este código assemelha-se bastante ao do Servidor UDP e por isso, apenas estão comentadas as diferenças.

```c
#include <unistd.h>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <netdb.h>

#define PORT "58001"

int fd, newfd, errcode; // newfd é fd da nova ligação (existem 2 sockets em TCP)
ssize_t n;
socklen_t addrlen;
struct addrinfo hints, *res;
struct sockaddr_in addr;
char buffer[128];

int main() {
    fd = socket(AF_INET, SOCK_STREAM, 0);
    if (fd == -1)
        exit(1);

    memset(&hints, 0, sizeof hints);
    hints.ai_family = AF_INET;
    hints.ai_socktype = SOCK_STREAM;
    hints.ai_flags = AI_PASSIVE;

    errcode = getaddrinfo(NULL, PORT, &hints, &res);
    if ((errcode) != 0)
        exit(1);

    n = bind(fd, res->ai_addr, res->ai_addrlen);
    if (n == -1)
        exit(1);

    /* Prepara para receber até 5 conexões na socket fd.
    Recusa outras conexões enquanto estiverem 5 conexões pendentes. */
    if (listen(fd, 5) == -1)
        exit(1);

    /* Loop para processar uma socket de cada vez */
    while (1) {
        addrlen = sizeof(addr);
        /* Aceita uma nova conexão e cria uma nova socket para a mesma.
        Quando a conexão é aceite, é automaticamente criada uma nova socket
        para ela, guardada no `newfd`.
        Do lado do cliente, esta conexão é feita através da função `connect()`. */
        if ((newfd = accept(fd, (struct sockaddr *)&addr, &addrlen)) == -1)
            exit(1);

        /* Já conectado, o cliente então escreve algo para a sua socket.
        Esses dados são lidos para o buffer. */
        n = read(newfd, buffer, 128);
        if (n == -1)
            exit(1);

        /* Faz `echo` da mensagem recebida para o STDOUT do servidor */
        write(1, "received: ", 10);
        write(1, buffer, n);

        /* Envia a mensagem recebida (atualmente presente no buffer) para a socket */
        n = write(newfd, buffer, n);
        if (n == -1)
            exit(1);

        /* Fecha a socket atualmente estabelecida */
        close(newfd);
    }

    freeaddrinfo(res);
    close(fd);
}
```
