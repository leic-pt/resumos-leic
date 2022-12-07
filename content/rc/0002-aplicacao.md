---
title: Camada de Aplicação
description: >
  Camada de Aplicação - Modelo Internet.

  Arquiteturas de Aplicações de Rede: cliente-servidor, peer-to-peer, híbrido.
  Sockets.

  HTTP: As várias versões (1.0, 1.1, 2.0 e 3.0).
  Conexões persistentes e não persistentes.
  HTTP pipelining.

  Interação por HTTP: pedidos e respostas.
  Methods, Headers e Status.

  Email: SMTP.
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

## As Camadas de Rede

Como apresentado brevemente na página anterior, existem várias camadas de rede.  
Nesta página, iremos falar em específico da camada de Aplicação mas,
antes disso, eis uma breve descrição de cada camada:

- **Physical Layer** - Define as regras que explicam como é que a informação é
  transmitida, **fisicamente**. Por exemplo,

  - que tensão usar no cabo;
  - Num cabo de rede RJ45, o que é passado em cada pino;
  - qual a duração de um bit.

- **Link Layer** - Define as regras de como é feita a **ligação**. Diz respeito
  aos problemas locais e às ligações diretas, por exemplo,

  - Num [AP](./terminology#access-point), como é que as antenas se devem
    comportar para não existir sobreposição de canais.
  - Num cabo partilhado, de que forma é que ele é partilhado.

- **Network Layer** - Preocupa-se como é que a informação é transmitida de um
  ponto A para o ponto B, não num contexto local mas sim num contexto de uma
  **rede** de computadores e dispositivos de rede. Por exemplo,
  - Como é que consigo comunicar com um _host_ em qualquer ponto na internet
    (Protocolo IP - é atribuído um endereço a cada _host_).
- **Transport Layer** - Conjunto de regras que definem como é que o **transporte**
  de dados deve ser feito sobre uma rede de computadores. Por exemplo,

  - Protocolo UDP - Envia o ficheiro continuamente, não havendo verificação de
    falhas de envio;
  - Protocolo TCP - Parte o ficheiro em partes, enviando cada uma e verificando
    se falta alguma (caso falte, volta a envia-la).

- **Application Layer** - Conjunto de regras para uniformizar como as
  **aplicações** enviam e recebem informação, bem como devem a apresentar para
  os utilizadores. Por exemplo,
  - Protocolo HTTP - Uma aplicação deve enviar pedidos a outra e esta deve enviar
    uma resposta, usando certos Headers para identificar parâmetros.
    Usado maioritariamente para interagir com website.

## Noções importantes

Antes de partirmos para a Camada de Aplicação, é importante explicar algumas noções:

### Endereço IP (Internet Protocol)

Existem duas versões em uso do IP - IPv4 e IPv6.

#### IPv4

Endereços de 32 bits, separados por um `.` em 4 conjuntos de 8 bits.  
Por exemplo, `255.128.2.1` (Em binário, `11111111.10000000.00000010.00000001`).

Existem $2^{32} = 4.294.967.296$ IPs possíveis, o que para os dias de hoje não é suficiente.  
Por isso, surgiu a criação de uma nova versão do protocolo IP, o IPv6.

#### IPv6

Nesta nova versão, os endereços têm 256 bits e são separados por `:` em 8 grupos de 16 bits.  
Por exemplo, `2001:0df8:00f2:0001:0000:06ee:0000:0f11`.

Existem $2^{256}$ IPs possíveis, o que é um número muito grande e mais que suficiente
nos dias que correm e no futuro.

### Portos

Apesar de um endereço IP identificar um _host_ numa rede, não identifica qual
é processo dessa máquina que se pretende comunicar.  
Então, para resolver isso, criou-se a ideia de portos, número que sucede um endereço.  
Por exemplo, se quisermos aceder ao porto 50 do _host_ com o ip `255.128.2.1`,
a sua representação seria `255.128.2.1:50`.

### URL - Universal Resource Locator

De forma a uniformizar a identificação do ficheiro que quero aceder, num dado
processo a correr num dado host, através de um dado método, foi criado o
**URL - Universal Resource Locator**, que é da seguinte forma:
![URL](./assets/0002-URL.svg#dark=3 'URL - Universal Resource Locator')

Alguns métodos são:

| Nome   | Usado para       | Exemplo                    |
| ------ | ---------------- | -------------------------- |
| http   | Hypertext (HTML) | `http://google.com`        |
| ftp    | FTP              | `ftp://host/README.md`     |
| file   | Ficheiro Local   | `file:///etc/passwd`       |
| mailto | Enviar um e-mail | `mailto:foo@bar.com`       |
| telnet | Login remoto     | `telnet://www.teste.pt:80` |

## A Camada de Aplicação

Com este conhecimento, podemos agora falar da **Camada de Aplicação**.

O protocolo da Camada de Aplicação define:

- o tipo de mensagens trocadas (por exemplo, se é um pedido ou uma resposta);
- a sintaxe das mensagens;
- a semântica e regras para quando e como os processos de aplicação enviam
  e respondem a mensagens.

Existem protocolos de domínio público (definidos em [RFCs](https://en.wikipedia.org/wiki/Request_for_Comments)),
como o HTTP e o SMTP, bem como protocolos proprietários/comerciais, como o Skype.

Para qualquer camada, esta precisa de garantias da camada inferior.  
No caso da Camada de Aplicação, a Camada de Transporte tem que garantir:

- **Integridade de Informação**: Algumas aplicações podem perder alguns dados
  (e.g. Audio e Video) enquanto que outras precisam de uma ligação
  garantida (e.g. transferência de ficheiros);

- **Throughput** - Algumas aplicações precisam de um throughput mínimo para
  funcionar enquanto que outras precisam de conseguir usar o máximo disponível;

- **Timing** - Algumas aplicações precisam de um delay (_latency_) mínimo para serem efetivas.

- **Segurança** - Os dados enviados têm que se seguros, através de encriptação,
  e não podem ser alterados (integridade);

Então, cada programador da Camada de Aplicação deve decidir que protocolo usar (Ex. TCP vs UDP):  
O programador não precisa de saber a implementação de cada um; Apenas se
tem que preocupar com as vantagens e desvantagens de cada protocolo consoante o seu objetivo.

## Protocolo HTTP

É o protocolo da Camada de Aplicação usado na WWW (World Wide Web),
usando o protocolo TCP da Camada de Transporte. Existem várias versões:

### HTTP 1.0

Versão não persistente.  
Cada objeto transferido exige a criação e uso de uma sessão de TCP diferente.

### HTTP 1.1

Versão [persistente](https://en.wikipedia.org/wiki/HTTP_persistent_connection),
permitindo a transferência de vários objetos na mesma sessão de TCP.  
Isto permite [pipelining](https://en.wikipedia.org/wiki/HTTP_pipelining) - se
existem referências a um dado objeto numa dada
transferência, o servidor pode ordenar o seu envio imediatamente,
não sendo necessário o utilizador pedir esses ficheiros.

## Interação por HTTP

Existem vários passos para uma interação por HTTP, os quais vão ser descritos de seguida:

### Ligação por TCP

Inicialmente, é necessária estabelecer uma ligação TCP, conhecida como _3-way handshake_:

- O cliente envia ao servidor o comando `SYN` (Synchronize), onde informa o
  servidor que quer estabelecer uma ligação com ele, enviando também o seu setup
  (e.g. Aceita receber mensagens de X bytes divididas em Y segmentos onde os buffers têm tamanho máximo Z);
- O servidor responde com os comandos `SYN` e `ACK` (Acknowledge), onde afirma
  que aceita as condições do cliente e informa as suas condições;
- O cliente responde com o comando `ACK`, informando que aceita as condições.

Depois deste _handshake_, a ligação de TCP fica estabelecida e o cliente ou o servidor podem comunicar.  
O tempo que um pacote demora a ir de um cliente para o servidor e voltar é chamado de **RTT** - Round Trip Time.

Nota-se que, caso a versão de HTTP não seja persistente, esta ligação tem que
ser estabelecida para cada nova transferência de dados.  
Segue-se um exemplo da interação numa versão persistente e não persistente,
onde o cliente pede (`GET`) HTML e uma imagem:

![Transferência HTTP Não Persistente](./assets/0002-HTML-Transfer-NonPersistent.svg#dark=3 'Transferência HTTP Não Persistente')

<br>

![Transferência HTTP Persistente](./assets/0002-HTML-Transfer-Persistent.svg#dark=3 'Transferência HTTP Persistente')

### Pedido e Resposta

Depois de estabelecida uma ligação, o cliente faz pedidos (_Requests_) ao
servidor e este responde (_Responses_).  
Um pedido tem o seguinte formato:

```http
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

- A primeira linha - **request line** - indica o protocolo e que tipo de pedido
  (_método_) está a ser feito (No exemplo, um pedido `POST`, ou seja, um pedido para publicar algo);
- As linhas seguintes - **header lines** - indicam alguma informação ao servidor,
  como se fossem flags (no exemplo, o `Header` _User-Agent_ indica o tipo de browser e sistema operativo que fez o pedido);
- A última linha - **message body** - indica o conteúdo da mensagem a ser submetida.

É possível consultar, no site da Mozilla, os [métodos HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
e os [vários headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers) que existem.

Uma resposta tem o seguinte formato:

```http
HTTP/2 200 OK
Document-Policy: force-load-at-top
Expires: Sat, 01 Jan 2000 00:00:00 GMT
Content-Type: text/html; charset="utf-8"
Date: Tue, 29 Nov 2022 02:14:22 GMT

<!DOCTYPE html>
<html lang="en" id="facebook" class="no_js">
...
```

- A primeira linha - **status line** - indica o protocolo e o código de resposta
  do servidor (no exemplo, o código 200, que significa que o pedido teve sucesso);
- As linhas seguintes - **header lines** - assemelham-se aos headers de um pedido.
- A última linha - **message body** - indica o conteúdo da mensagem que o
  servidor enviou (no exemplo, um ficheiro HTML).

Existem vários [códigos de resposta _(response status)_](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) que
podem ser retornados pelo servidor.  
Alguns dos exemplos são:

- `200 OK` - O pedido teve sucesso. O objeto pedido está no fim da mensagem;
- `301 Moved Permanently` - O objeto pedido trocou de sítio. A sua nova
  localização está no header `Location`;
- `400 Bad Request` - O servidor não entendeu o pedido porque o pedido tem erros;
- `404 Not Found` - O documento pedido não se encontra no servidor;

#### GET Condicional

Os browsers modernos guardam objetos em cache de forma a, caso sejam necessários
de novo, não ser necessário transferir o ficheiro de novo.
Mas e se os objetos forem atualizados?

Para resolver esse problema,

- o cliente inclui o Header [`If-Modified-Since: <data>`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since);
- o servidor responde com `304 Not Modified` se o ficheiro não tiver sido
  alterado ou, caso contrário, com a resposta normal.

### Cookies

Apesar de HTTP ser _stateless_ (ou seja, cada pedido é feito independentemente,
sem qualquer conhecimento dos pedidos anteriores), as páginas web conseguem manter
sessões com os seus utilizadores (por exemplo, um carrinho de compras ou um
sistema de _login_).

Isto é conseguido através de cookies - pedaços de texto que o Browser guarda
e que envia para os websites quando são visitados.  
As Cookies são definidas de forma tal que os websites consigam interpretá-las
e associar um estado ou função a cada uma.  
Por exemplo, para um dado website, a Cookie `awdjopvioawd` pode significar que
o utilizador que a detém está autenticada como um certo utilizador.

### Outras versões de HTTP

Novas versões do HTTP vão aparecendo ao longo do tempo, onde são acrescentadas
novas funcionalidades e o desempenho é melhorado.  
As versões são compatíveis com as anteriores.

#### HTTP 2.0

Os destaques destas versão são:

- a redução dos overheads dos cabeçalhos (são usados códigos para representar o
  conteúdo dos pedidos e respostas);
- permitir que várias tabs de um dado browser partilhem a mesma ligação TCP;
- **Push de servidor**: O servidor analisa o HTML e vê que outros ficheiros são
  necessários (e consequentemente, serão pedidos) e envia-os assim que possível,
  não sendo necessário um pedido por parte do utilizador;
- **Mitigação de [HOL blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking)**:
  Os objetos são divididos em pacotes e a
  transferência é intercalada, de forma a transmitir os ficheiros
  mais pequenos primeiro:

![Sem Mitigação de HOL blocking](./assets/0002-blockingHOL-before.svg#dark=3 'Sem Mitigação de HOL blocking')

<br>

![Com Mitigação de HOL blocking](./assets/0002-blockingHOL-after.svg#dark=3 'Com Mitigação de HOL blocking')

#### HTTP 3.0

Invés do protocolo de comunicação, usa-se o protocolo QUIC - mistura do protocolo
UDP com algumas diferenças e com encriptação.

## E-mail (SMTP)

Existe desde 1982, sendo um dos protocolos mais antigos.

Os clientes compõem mensagens de e-mail que são transmitidas usando o protocolo
SMTP para o servidor que hospeda os e-mails.  
Depois, ainda através do protocolo SMTP, os e-mails são transmitidos pela internet
até chegarem ao servidor que hospeda o endereço de destino.  
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

A diferença crucial entre estes protocolos é que o HTTP funciona à base de pedidos
e respostas, enquanto que o SMTP funciona apenas à base de envio de informação sem esta ser pedida.

## DNS - Domain Name System

Para acedermos a um _website_ na internet, normalmente usamos um _hostname_ - um nome que representa a máquina a que nos queremos ligar.  
Por exemplo, se nos quisermos ligar a `website.com` e escrevermos esse _hostname_ na barra de pesquisa, estaremos a ligar-nos a uma máquina cujo IP está mapeado para esse _hostname_ (Recordar que um endereço IP identifica um _host_ na internet).

A este mapeamento entre _hostnames_ e IPs chama-se **DNS** - Domain Name System.

### Características do DNS

O objetivo do DNS é fazer a tradução/resolução de um _hostname_ para um ou mais endereços IP. Note-se que:

- Cada máquina (ou seja, cada IP) pode ter vários _hostnames_ associados.  
  Por exemplo, os hostnames `website.com` e `website.pt` podem ambos mapear para o endereço `123.123.123.123`;
  Neste caso, existem as seguintes notações:
  - **Nome Canónico** - _hostname_ oficial associado à máquina;
  - **Nomes de Alias** - outros _hostnames_ que traduzem para a mesma máquina.
- Cada _hostname_ pode ter vários IPs associados.  
  Por exemplo, `website.com`, por ser um website muito usado, pode precisar de muitas máquinas. Então, associa-se ao _hostname_ `website.com` os IPs `123.123.123.123` e `111.111.111.111`, por exemplo.

O DNS é uma base de dados distribuída que está implementada numa hierarquia de **servidores de nome** - servidores que guardam o mapeamento entre endereços IP e `hostnames` ou outros servidores de nome.  
Seria problemático ser uma base de dados centralizada pois:

- Existiria um único ponto de falha possível;
- Haveria muito tráfego;
- Os `hosts` geograficamente afastados teriam problemas em se conectar, quer em rapidez como em falta de cobertura;
- Não é escalável.

O serviço de DNS numa máquina corre no porto 53, por defeito, usando o UDP para comunicar.

### Distribuição do DNS

Como mencionado anteriormente, o DNS usa uma estrutura de nomes hierárquica:

1. Começa em servidores **raiz** (_root_), que guardam informação sobre os servidores mais altos na hierarquia;
2. Seguem-se os servidores de DNS **TLD** - Top Level Domain. Estes guardam informação sobre o domínio dos `hostnames`, ou seja, a parte final do `hostname`. Por exemplo: `.com`, `.pt`, `.edu`, `.org`, ...
3. De seguida vêm os servidores de DNS **Autoritários**. Estes guardam informação sobre o primeiro sub-domínio dos hostnames, ou seja, a parte que antecede o domínio. Por exemplo: `website.com`, `organização.org`, etc.
4. Os servidores de DNS **Autoritários** também guardam informação sobre os sub-domínios dos sub-domínios, recursivamente. Por exemplo, `loja.website.com`, `pandas.organização.org`, etc.

Pode-se visualizar um esquema visual que exemplifica melhor a estrutura hierárquica:
![Hierarquia DNS](./assets/0003-DNSHierarchy.svg#dark=3 'Hierarquia DNS')

### Resolver um Hostname

Assim que uma máquina é ligada, esta procura pelo servidor de DNS mais local que encontrar, sendo o seu IP guardado pela máquina.

Sempre que seja preciso resolver um _hostname_ por DNS, o servidor local é que se vai encarregar disso.  
Vai acontecer o seguinte processo, assumindo-se que se quer resolver o _hostname_ `admin.website.com`:

1. Pergunta-se ao servidor local qual o endereço IP do _hostname_ `admin.website.com`;
2. Se ele souber, responde com o IP.  
   Se não souber, pergunta a um servidor _root_ pelo endereço.
3. O servidor _root_ vai responder que não sabe, mas conhece o servidor de nome que guarda informação sobre os domínios `.com` (sendo então um servidor TLD) e dá o seu endereço ao servidor local;
4. O servidor local pergunta ao servidor dos nomes `.com` se conhece o _hostname_ `admin.website.com`.
5. Este responde que não sabe mas conhece o servidor que guarda os nomes de `website.com`, novamente dando o seu endereço IP;
6. O servidor local então pergunta a `website.com` pelo endereço `admin.website.com`;
7. Este responde-lhe com o endereço IP desejado;
8. O servidor de DNS local dá ao computador o endereço desejado.

Este exemplo pode ser visualizado da seguinte forma:
![Resolver um Hostname](./assets/0003-ResolveHostname.svg#dark=3 'Resolver um Hostname')

### Servidores _Root_ Conhecidos

Existem [13 servidores _root_ conhecidos](https://www.iana.org/domains/root/servers), os quais têm várias cópias espalhadas pelo mundo que, por sua vez, têm os seus mecanismos de redundância.

Em Portugal, existem [5 cópias de servidores _root_](https://root-servers.org/).

### DNS Caching

Visto que o processo para resolver um hostname apresentado envolve imensa comunicação entre vários servidores espalhados por diversos sítios e muito distantes, quer-se evitar ao máximo que isso seja feito. Para tal, podem-se guardar os mapeamentos em Cache - **DNS Caching**.

Quando um servidor de nome aprende um mapeamento, ele guarda-o em cache.  
Esta entrada dura algum tempo (normalmente 2 dias), sendo depois apagada, visto que, por um lado, o armazenamento disponível é limitado, e por outro lado, se existirem alterações no mapeamento, estas não são propagadas para os servidores de nome (seria impraticável uma mudança ser anunciada para todos os servidores de nome).

Para além de mapeamentos, os servidores de TLD também são normalmente mantidos em Cache, o que faz com que os servidores _root_ não sejam visitados com frequência.

### DNS Record

Uma entrada de DNS - **DNS Record** - tem o seguinte formato:  
`(nome, valor, tipo, TTL)`, onde:

- `TTL` significa "Time To Live" - diz durante quanto tempo é que a entrada é válida;
- `nome` e `valor` dependem do `tipo`:
  - Se `tipo` = A, `nome` = _hostname_ e `valor` = endereço IP;
  - Se `tipo` = NS, `nome` = domínio (ex. `foo.com`) e `valor` = _hostname_ do servidor de nome associado;
  - Se `tipo` = CNAME, `nome` = alias para o nome canónico/real (ex. `website.com` é na verdade `server123.backup1.outro.website.com`) e `valor` = nome canónico;
  - Se `tipo` = MX, `nome` = endereço de e-mail e `valor` = nome do servidor de mail associado (ex. enviar um e-mail para `contacto@website.com` vai comunicar com o servidor de mail em `mail.website.com`);

### Ferramentas

Para fazer pedidos de DNS, podem ser usadas as seguintes ferramentas Linux:

- `nslookup *hostname*` ou `nslookup *ip*` (Ex. `nslookup website.com`);
- `dig *hostname*` (Ex. `dig website.com`);
- `host *hostname*` ou `host *ip*` (Ex. `host website.com`).

### DDNS - Dynamic DNS

Os Routers "lá de casa" têm um IP que não é fixo, sendo trocado de alguns dias em alguns dias.  
Isto é problemático caso queiramos ter um servidor a correr na nossa casa.

Para resolver isso, uma solução é comprar um IP fixo à operadora de rede.  
Outra solução, mais interessante, é o **DDNS** - Dynamic DNS.

O DDNS permite notificar um servidor de DNS que existiram alterações e pedir para alterar as suas configurações (ou seja, alterar o endereço IP associado a um `hostname`) imediatamente.  
Para isso, é necessário habilitar a opção de DDNS no Router "lá de casa" e fazer a configuração para um servidor de DDNS.

### Segurança de DNS

Existem vários tipos de ataques possíveis a DNS:

- Ataques **DDoS** - Distributed Denial of Service - a servidores _root_ de DNS, fazendo com que fiquem fora do ar.  
  Este ataque até hoje não funcionou, visto que existe filtro de tráfego e os servidores _root_ são raramente acedidos.
- Ataques **DDoS** a servidores TLD. Mais perigosos.
- Ataques de _Spoofing_, ou seja, uma máquina maliciosa faz-se passar por um servidor de DNS e redireciona os utilizadores para website errados.

## P2P - Peer to Peer

Esta é uma arquitetura que se opõe à arquitetura Cliente-Servidor.

Na arquitetura P2P, não há um servidor sempre ligado, pois os _peers_ comunicam entre si diretamente. Os _peers_ não precisam de estar conectados continuamente e podem mudar de IP.

É uma arquitetura bastante escalável, mas difícil de gerir.

Na arquitetura Cliente-Servidor, a comunicação é feita da seguinte forma:

![Arquitetura Cliente-Servidor](./assets/0003-clientServer.svg#dark=3 'Arquitetura Cliente-Servidor')

Ou seja, se três clientes pedem um ficheiro, o servidor terá que enviar o mesmo ficheiro três vezes.

Já na arquitetura P2P, o que acontece é o seguinte:

![Arquitetura P2P](./assets/0003-p2p.svg#dark=3 'Arquitetura P2P')

Ou seja, os clientes (_peers_) partilham a informação entre sí.

### Tempo de distribuição para N clientes

Podemos comparar o tempo de distribuição de ficheiros para N clientes entre as duas arquiteturas.  
Nas contas seguintes, considera-se que o tempo do tráfego passar pela internet é nulo, ou seja, é como se todos os hosts estivessem lado a lado.

Seja,

- $$N$$ o número de clientes;
- $$L$$ o tamanho de um ficheiro;
- $$u_s$$ a velocidade de upload do servidor;
- $$u_i$$ a velocidade de umload de um host;
- $$d_i$$ a velocidade de download de um host.

#### Cliente-Servidor

Do lado do servidor,

- O servidor tem que enviar $$N$$ cópias do ficheiro;
- O tempo de envio de um ficheiro é o tamanho a dividir pelo tempo de upload, $$\frac{L}{u_s}$$;
- O tempo total de envio do servidor é então $$N \times \frac{L}{u_s}$$.

Do lado do cliente,

- O tempo de download de um ficheiro para um dado cliente $$i$$ é $$\frac{L}{d_i}$$;
- Como queremos considerar o pior caso, temos que ter em conta o cliente com a velocidade de download menor, ou seja, $$min(d_i)$$;
- Portanto, o pior cliente demora $$\frac{L}{min(d_i)}$$.

Como queremos considerar o pior caso, temos que escolher o tempo mais lento entre os dois: O servidor fazer upload dos ficheiros todos e o cliente mais lento fazer download do ficheiro.

A equação do tempo é então $$max(N \times \frac{L}{u_s}, \frac{L}{min(d_i)})$$.

#### P2P

Do lado do servidor,

- Nesta arquitetura, o servidor só tem que enviar uma cópia, logo $$\frac{L}{u_s}$$;

Do lado do cliente,

- Para fazer download de um ficheiro, o cliente i continua com a velocidade $$\frac{L}{d_i}$$ portanto, no pior caso, a velocidade é $$\frac{L}{min(d_i)}$$;
- Contudo, agora cada cliente tem que enviar a sua parte para todos os outros clientes e receber as partes restantes!
- No total, tem que ser feito o download de $$N \times L$$ bits, pois existem $$N$$ _peers_ e cada um tem que baixar o ficheiro todo (vindo em vários pacotes), que corresponde a $$L$$.
- A velocidade a que é feito esse download depende das velocidades de upload do servidor, $$u_s$$ (para enviar o ficheiro repartido para os hosts) e das velocidades juntas de upload de cada host, $$\sum{u_i}$$, no melhor caso.

Novamente, o objetivo é considerar o pior caso, ou seja, o caso que demora mais tempo.  
Temos que comparar:

1. O servidor fazer upload do ficheiro;
2. O cliente mais lento fazer download do ficheiro;
3. As partes do ficheiro serem todas enviadas para os clientes.

A equação do tempo é então $$max(\frac{L}{u_s}, \frac{L}{min(d_i)}, \frac{N \times L}{u_s + \sum{u_i}})$$.