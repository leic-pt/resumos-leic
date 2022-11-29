---
title: Camada de Aplicação
description: >
  Camada de Aplicação - Modelo Internet.

  Arquiteturas de Aplicações de Rede: cliente-servidor, peer-to-peer, híbrido.
  Sockets.
path: /rc/aplicacao
type: content
---

# Camada de Aplicação

```toc

```

## Arquiteturas de Aplicações de Rede

- Cliente-Servidor
- Peer-to-peer (P2P)
- Híbrido

### Arquitetura Cliente-Servidor

**Servidor**: Sempre ligado, com endereço IP permanente e escalável com _server farms_.

**Clientes**: Comunicam com o servidor, não precisam de estar conectados continuamente,
podem utilizar IPs dinâmicos e não comunicam diretamente entre eles.

### Arquitetura Peer-to-peer

Não há servidor sempre ligado, _peers_ comunicam entre si diretamente.
_Peers_ não precisam de estar conectados continuamente e podem mudar de IP.
Bastante escalável, mas díficil de gerir.

### Híbrido

Exemplo do Skype: Servidor dá aos clientes os endereços, mas chamadas voz são
feitas diretamente entre os clientes utilizando uma aplicação _Voice-over-IP_ P2P.

## API de sockets

Um processo envia ou recebe mensagens a partir do seu socket.
A API permite escolher o protocolo de transporte e definir alguns parâmetros.

## As camadas de rede

Como apresentado brevemente na página anterior, existem várias camadas de rede.  
Nesta página, iremos falar em específico da camada de Aplicação mas, antes disso, eis uma breve descrição de cada camada:

- **Physical Layer** - Define as regras que explicam como é que a informação é transmitida, **fisicamente**. Por exemplo,
  - que tensão usar no cabo;
  - Num cabo de rede RJ45, o que é passado em cada pino;
  - qual a duração de um bit.
- **Link Layer** - Define as regras de como é feita a **ligação**. Diz respeito aos problemas locais e às ligações diretas, por exemplo,

  - Num [AP](./terminology#access-point), como é que as antenas se devem comportar para não existir sobreposição de canais.
  - Num cabo partilhado, de que forma é que ele é partilhado.

- **Network Layer** - Preocupa-se como é que a informação é transmitida de um ponto A para o ponto B, não num contexto local mas sim num contexto de uma **rede** de computadores e dispositivos de rede. Por exemplo,
  - Como é que consigo comunicar com um _host_ em qualquer ponto na internet (Protocolo IP - é atribuído um endereço a cada _host_).
- **Transport Layer** - Conjunto de regras que definem como é que o **transporte** de dados deve ser feito sobre uma rede de computadores. Por exemplo,

  - Protocolo UDP - Envia o ficheiro continuamente, não havendo verificação de falhas de envio;
  - Protocolo TCP - Parte o ficheiro em partes, enviando cada uma e verificando se falta alguma (caso falte, volta a envia-la).

- **Application Layer** - Conjunto de regras para uniformizar como as **aplicações** enviam e recebem informação, bem como devem a apresentar para os utilizadores. Por exemplo,
  - Protocolo HTTP - Uma aplicação deve enviar pedidos a outra e esta deve enviar uma resposta, usando certos Headers para identificar parâmetros.

## Noções importantes

Antes de partirmos para a Camada de Aplicação, é importante explicar algumas noções:

### Endereço IP (Internet Protocol)

Existem duas versões em uso do IP - IPv4 e IPv6.

#### IPv4

Endereços de 32 bits, separados por um `.` em 4 conjuntos de 8 bits.  
Por exemplo, `255.128.2.1` (Em binário, `11111111.10000000.00000010.00000001`).

Existem $2^{32} = 4.294.967.296$ IPs possíveis, o que para os dias de hoje não é suficiente.  
Por isso, surgiu a criação de uma nova versão do protocolo IP:

#### IPv6

Nesta nova versão, os endereços têm 256 bits e são separados por `:` em 8 grupos de 16 bits.  
Por exemplo, `2001:0df8:00f2:0001:0000:06ee:0000:0f11`.

### Portos

Apesar de um endereço IP identificar um _host_ numa rede, não identifica qual é processo dessa máquina que se pretende comunicar.  
Então, para resolver isso, criou-se a ideia de portos, número que sucede um endereço.  
Por exemplo, se quisermos aceder ao porto 50 do _host_ com o ip `255.128.2.1`, a sua representação seria `255.128.2.1:50`.

### URL - Universal Resource Locator

De forma a uniformizar a identificação do ficheiro que quero aceder, num dado processo a correr num dado host, através de um dado método, foi criado o **URL - Universal Resource Locator**, que é da seguinte forma:
![URL](./assets/0002-URL.svg 'URL - Universal Resource Locator')

Alguns métodos são:

| Nome   | Usado para       | Exemplo                  |
| ------ | ---------------- | ------------------------ |
| http   | Hypertext (HTML) | http://google.com        |
| ftp    | FTP              | ftp://host/README.md     |
| file   | Ficheiro Local   | file:///etc/passwd       |
| mailto | Enviar um e-mail | mailto&colon;foo@bar.com |
| telnet | Login remoto     | telnet://www.teste.pt:80 |

## A Camada de Aplicação

Com este conhecimento, podemos agora falar da Camada de Aplicação.

O protocolo da Camada de Aplicação define:

- o tipo de mensagens trocadas (por exemplo, se é um pedido ou uma resposta);
- a sintaxe das mensagens;
- a semântica e regras para quando e como os processos de aplicação enviam a respondem a mensagens.

Existem protocolos de domínio público (definidos em [RFCs](https://pt.wikipedia.org/wiki/Request_for_Comments)), como o HTTP e o SMTP, bem como protocolos proprietários/comerciais, como o Skype.

Para qualquer camada, esta precisa de garantias da camada inferior.  
No caso da Camada de Aplicação, a Camada de Transporte tem que garantir:

- **Integridade de Informação**: Algumas aplicações podem perder alguns dados (Ex. Audio & Video) enquanto que outras precisam de uma ligação garantida (Ex. transferência de ficheiros);

- **Throughput** - Algumas aplicações precisam de um Throughput mínimo para funcionar enquanto que outras precisam de conseguir usar o máximo disponível;

- **Timing** - Algumas aplicações precisam de um Delay mínimo para serem efetivas.

- **Segurança** - Os dados enviados têm que se seguros, através de encriptação, e não podem ser alterados (integridade);

Então, cada programador da Camada de Aplicação deve decidir que protocolo usar (Ex. TCP vs UDP):  
O programador não precisa de saber a implementação de cada um; Apenas se tem que preocupar com as vantagens e desvantagens de cada protocolo consoante o seu objetivo.

## Protocolo HTTP

É o protocolo da Camada de Aplicação usado na WWW (World Wide Web), usando o protocolo TCP da Camada de Transporte. Existem várias versões:

### HTTP 1.0

Versão não persistente.  
Cada objeto transferido exige a criação e uma sessão de TCP diferente.

### HTTP 1.1

Versão persistente, permitindo a transferência de vários objetos na mesma sessão de TCP.  
Isto permite pipelining - Se existem referências a um dado objeto numa dada transferência, o servidor pode ordenar o seu envio imediatamente, não sendo necessário o utilizador pedir esses ficheiros.

## Interação por HTTP

Existem vários passos para uma interação por HTTP, os quais vão ser descritos de seguida:

### Ligação por TCP

Inicialmente, é necessária estabelecer uma ligação TCP, conhecida como _3-way handshake_:

- O cliente envia ao servidor o comando `SYN` (Synchronize), onde informa o servidor que quer estabelecer uma ligação com ele, enviando também o seu setup (Ex. Aceita receber mensagens de X bytes divididas em Y segmentos onde os buffers têm tamanho máximo Z);
- O servidor responde com os comandos `SYN` e `ACK` (Acknowledge), onde afirma que aceita as condições do cliente e informa as suas condições;
- O cliente responde co o comando `ACK`, informando que aceita as condições.

Depois deste _handshake_, a ligação de TCP fica estabelecida e o cliente ou o servidor podem comunicar.  
O tempo que um pacote demora a ir de um cliente para o servidor e voltar é chamado de **RTT** - Round Trip Time.

Nota-se que, caso a versão de HTTP não seja persistente, esta ligação tem que ser estabelecida para cada nova transferência de dados.  
Segue-se um exemplo da interação numa versão persistente e não persistente, onde o cliente pede (`GET`) HTML e uma imagem:

![Transferência HTTP Não Persistente](./assets/0002-HTML-Transfer-NonPersistent.svg 'Transferência HTTP Não Persistente')

<br>

![Transferência HTTP Persistente](./assets/0002-HTML-Transfer-Persistent.svg 'Transferência HTTP Persistente')

### Pedido e Resposta

Depois de estabelecida uma ligação, o cliente faz pedidos (_Requests_) ao servidor e este responde (_Responses_).  
Um pedido tem o seguinte formato:

```
POST /submeterFicheiro HTTP/1.1
Host: website.com
User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: close
Upgrade-Insecure-Requests: 1

dados dados dados dados
```

- A primeira linha - **request line** - indica o protocolo e que tipo de pedido (_método_) está a ser feito (No exemplo, um pedido `POST`, ou seja, um pedido para publicar algo);
- As linhas seguintes - **header lines** - indicam alguma informação ao servidor, como se fossem flags (No exemplo, o `Header` _User-Agent_ indica o tipo de browser e sistema operativo que fez o pedido);
- A última linha - **message body** - indica o conteúdo da mensagem a ser submetida.

Os vários métodos podem ser consultados [aqui](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) e os vários headers [aqui](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers).

Uma resposta tem o seguinte formato:

```
HTTP/2 200 OK
Document-Policy: force-load-at-top
Expires: Sat, 01 Jan 2000 00:00:00 GMT
Content-Type: text/html; charset="utf-8"
Date: Tue, 29 Nov 2022 02:14:22 GMT

<!DOCTYPE html>
<html lang="en" id="facebook" class="no_js">
...
```

- A primeira linha - **status line** - indica o protocolo e o código de resposta do servidor (No exemplo, o código 200, que significa que o pedido teve sucesso);
- As linhas seguintes - **header lines** - assemelham-se aos headers de um pedido.
- A última linha - **message body** - indica o conteúdo da mensagem que o servidor enviou (No exemplo, um ficheiro HTML).

Os vários códigos de resposta podem ser consultados [aqui](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).  
Alguns dos exemplos são:

- `200 OK` - O pedido sucedeu. O objeto pedido está no fim da mensagem;
- `301 Moved Permanently` - O objeto pedido trocou de sítio. A sua nova localização está no fim da mensagem;
- `400 Bad Request` - O servidor não entendeu o pedido;
- `404 Not Found` - O documento pedido não se encontra no servidor;

#### GET condicional

Os browsers modernos guardam objetos em cache de forma a, caso sejam necessários de novo, não ser necessário transferir o ficheiro de novo. Mas e se os objetos forem atualizados?

Para resolver esse problema,

- o cliente inclui o Header `If-modified-since: <data>`;
- o servidor responde com `304 Not Modified` se o ficheiro não tiver sido alterado ou com a resposta normal, caso contrário.

### Cookies

Apesar de HTTP ser stateless (ou seja, cada pedido é feito independentemente, sem qualquer conhecimento dos pedidos anteriores), as páginas web conseguem manter sessões com os seus utilizadores (por exemplo, um carrinho de compras ou o login).

Isto é conseguido através de cookies - pedaços de texto que o Browser guarda e que envia para os websites quando são visitados.  
As Cookies são definidas de forma tal que os websites consigam interpretá-las e associar um estado ou função a cada uma.  
Por exemplo, para um dado website, a Cookie `awdjopvioawd` pode significar que o utilizador que a detém é um administrador.

### Outras versões de HTTP

Novas versões do HTTP vão aparecendo ao longo do tempo, onde são acrescentadas novas funcionalidades e o desempenho é melhorado.  
As versões são compatíveis com as anteriores.

#### HTTP 2.0

Os destaques destas versão são:

- a redução dos overheads dos cabeçalhos (são usados códigos para representar o conteúdo dos pedidos e respostas);
- permitir que várias tabs de um dado browser partilhem a mesma ligação TCP;
- **Push de servidor** - O servidor analisa o HTML e vê que outros ficheiros são necessários (e consequentemente, serão pedidos) e envia-os assim que possível, não sendo necessário um pedido por parte do utilizador;
- **Mitigação de HOL blocking** - Os objetos são divididos em pacotes e a transferência é intercalada, de forma a transmitir os ficheiros mais pequenos primeiro:

![Sem Mitigação de HOL blocking](./assets/0002-blockingHOL-before.svg 'Sem Mitigação de HOL blocking')

<br>

![Com Mitigação de HOL blocking](./assets/0002-blockingHOL-after.svg 'Com Mitigação de HOL blocking')

#### HTTP 3.0

Invés do protocolo de comunicação, usa-se o protocolo QUIC - mistura do protocolo UDP com algumas diferenças e com encriptação.

## E-mail

Existe desde 1982, sendo um dos protocolos mais antigos.

Os clientes compõem mensagens de e-mail que são transmitidas usando o protocolo SMTP para o servidor que hospeda os e-mails.  
Depois, ainda através do protocolo SMTP, os e-mails são transmitidos pela internet até chegarem ao servidor que hospeda o endereço de destino.  
Finalmente, este servidor entrega o e-mail usando o protocolo _Mail Access_.

### Protocolo SMTP

Este protocolo é muito simples, apenas contendo 5 comandos:

- `HELO` ou `EHLO` - serve para dois servidores SMTP estabelecerem uma ligação entre sí;
- `MAIL FROM` - indica quem é o remetente (quem envia) do e-mail;
- `RCPT TO` - indica o destinatário do e-mail;
- `DATA` - indica os dados que se pretendem enviar;
- `QUIT` - fecha a ligação;

O protocolo apenas olha para o cabeçalho e apenas aceita caracteres ASCII de 7 bits.

### SMTP vs HTTP

A diferença crucial entre estes protocolos é que o HTTP funciona à base de pedidos e respostas, enquanto que o SMTP funciona apenas à base de envio de informação sem esta ser pedida.

<!--

### Protcolo da camada de aplicação

O protocolo da camada de aplicação define o tipo de mensagens trocadas
(por exemplo, se é um pedido ou uma resposta), a sintaxe das mensagens,
a semântica e regras para quando e como os processos de aplicação enviam e
respondem a mensagens.

Procolos de domínio público (definidos em RFCs):

- Exemplos: HTTP, SMTP

Procolos de proprietários:

- Exemplo: Skype

#### Utilização da camada de transporte

Diferentes aplicações diferem naquilo que necessitam da camada de transporte.

**Perda de dados**: Algumas aplicações toleram alguma perda de dados
(e.g. chamadas de áudio, canais de televisão), enquanto outras aplicações precisam
de um transferência de dados completamente fiável (e.g. multibanco).

_**Throughput**_: Algumas aplicações precisam de um valor mínimo de
_throughput_ para funcionarem de forma eficiente.

**Segurança**: Encriptação, integridade de dados, ...

**Atraso** (_latency_): Aplicações de chamadas áudio precisam de um atraso mínimo para funcionar bem.
-->
