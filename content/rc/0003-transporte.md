---
title: Camada de Transporte
description: >
  Camada de Transporte - UDP, RDP, TCP

path: /rc/transporte
type: content
---

# Camada de Transporte

```toc

```

## A camada de transporte

O objetivo desta camada é providenciar comunicação entre processos a correr em hosts diferentes,
ou seja, fazer o transporte de dados em canais de comunicação.

O host que envia parte as mensagens em segmentos.  
O host que recebe remonta os segmentos da mensagem.

![Divisão de um Segmento](./assets/0003-segment.svg#dark=3 'Divisão de um Segmento')

## Multiplexing

De forma a um servidor conseguir multiplexar/encaminhar segmentos para as devidas sockets (pois
estão lá os serviços/aplicações que estão à espera dos pacotes), este olha para o porto de destino e
para o IP de origem de cada segmento.

## UDP - User Datagram Protocol

É um protocolo da camada de transporte simples e com implementação fácil.
Tem vantagens e desvantagens:

**Vantagens**

- Simples;
- Tem menos delay que outros protocolos mais simples;
- Cabeçalho do segmento mais pequeno;
- Não há controlo de congestionamento, ou seja, pode enviar os dados muito mais rápido.

**Desvantagens**

- Os segmentos podem se perder;
- A entrega é feita fora de ordem;
- Não é feita uma conexão entre o emissor e o recetor.

Dado isso, este protocolo é normalmente usado em aplicações que toleram a perca de alguns pacotes e
que querem que a informação apareça o mais rápido possível (Por exemplo, transmissões de televisão).

Este protocolo é usado pelos protocolos DNS, SNMP e HTTP/3.  
No caso do HTTP/3, é aplicado um _wrapper_ ao UDP, que inclui lógica de recuperação, conexão e
entrega em ordem dos pacotes.

De qualquer forma, é necessário algum mecanismo básico de fiabilidade.

### Checksum

Este [campo dos segmentos](#a-camada-de-transporte) serve para detetar erros num dado segmento transmitido.

Quando o segmento é enviado, o emissor calcula e guarda a soma dos dois endereços IP enviados
(considerados números para ser possível fazer a soma) no campo Checksum.  
Quando o segmento é recebido, o recetor faz a mesma soma e verifica-se se o resultado é igual ao
valor que está no campo Checksum.

Se tiver existido alguma corrupção, ou seja, pelo menos algum bit que tenha sido mal transmitido, a
soma dará um valor diferente e então o erro será detetado.  
Se for esse o caso, o pacote é apenas ignorado/_dropped_ (No caso de TCP, o segmento seria antes
pedido novamente ao emissor).

Contudo, este sistema continua a não ser muito confiável - podem existir várias combinações de erros
que gerem a mesma soma e um erro pode também estar no _checksum_.

Uma melhoria que se pode fazer é considerar mais valores para o cálculo da soma do _checksum_, de
forma a aumentar a entropia do erro - pode-se, por exemplo, também considerar valores dos cabeçalhos
de outras camadas.

## RDT - Reliable Data Transfer

Depois do verificado com o UDP, o ideal seria existir um canal de comunicação confiável, fazendo com
que as aplicações não se tenham que preocupar com a correta chegada a informação ao destinatário e
vice-versa.

Como nem todos os canais de comunicação são fiáveis, a solução foi criar um conjunto de regras que
permitem a comunicação fiável sobre um canal não fiável. Exemplos destas regras são:

- Quando um pacote é enviado, o recetor tem que confirmar a sua receção;
- Se a confirmação não for recebida, reenvia-se o pacote;
- ...

Novas medidas foram aparecendo ao longo do tempo e estas constituem o protocolo RDP (conjunto de
regras que permitem estabelecer uma ligação fiável sobre um canal não fiável).

### RDT 1.0

Nesta versão inicial, o protocolo assume que o canal é fiável.  
Ponto de partida para as versões seguintes.

### RDT 2.0

Agora considera-se que o canal pode trocar bits num segmento.

Para os identificar, usa-se o _checksum_, já apresentado no protocolo UDP.  
Para os resolver,

- o receptor avisa o emissor que o pacote recebido estava ok, enviando um pacote
  ACK, ou que o pacote tinha erros, enviando um pacote NAK;
- no caso do pacote não estar ok (ter recebido NAK), o emissor reenvia o pacote.

Para implementar isso, usa-se a lógica **Stop and Wait** - o emissor envia um pacote e fica à espera
da resposta do receptor.

### RDT 2.1

A versão 2.0 tem um problema crucial.

Considere a seguinte situação

1. O Host A quer enviar a mensagem "Hoje vai Chover", separada em "Hoje", "vai", "Chover", para o Host B.
1. O Host A envia "Hoje";
1. O Host B recebe "Hoje" e envia um pacote ACK a confirmar a receção;
1. O Host A recebe o pacote ACK mas vem corrompido. Sem ter a certeza da resposta, reenvia "Hoje";
1. O Host B recebe novamente "Hoje": Serão mais dados ou uma repetição da mesma mensagem?

Para colmatar isso, a versão de RDT 2.1 inclui um número de sequência de forma a que o cliente possa confirmar se um segmento é repetido ou se é a continuação de uma mensagem.

### RDT 3.0

Nova assunção: E se os pacotes nunca chegarem?

Esta versão implementa um _Timeout_, ou seja, o emissor espera uma quantidade de tempo pela resposta
do envio de um pacote (ou seja, por um ACK).  
Se passado esse tempo nenhum ACK for recebido, o emissor reenvia a mensagem.

Se o pacote estava apenas com um delay grande, a retransmissão será então duplicada mas, graças ao
**RDT 2.1**, isso não é um problema devido ao uso de números de sequência.

Seguem-se exemplos deste protocolo:

![Caso 1 - Sem perdas](./assets/0003-rdt3_0-eg1.svg#dark=3 'Caso 1 - Sem perdas') <br/>
![Caso 2 - Pacote Perdido](./assets/0003-rdt3_0-eg2.svg#dark=3 'Caso 1 - Pacote Perdido') <br/>
![Caso 3 - ACK perdido](./assets/0003-rdt3_0-eg3.svg#dark=3 'Caso 3 - ACK perdido') <br/>
![Caso 4 - Timeout prematuro](./assets/0003-rdt3_0-eg4.svg#dark=3 'Caso 4 - Timeout prematuro') <br/>

### Sliding Window

O mecanismo Stop-And-Wait implica que esperemos pela confirmação de um dado segmento para enviar o seguinte.  
Isto implica que, do tempo total de envio, apenas uma pequena parte é efetivamente usada para envio,
sendo o restante tempo usado para esperar.  
Olhando para o esquema seguinte,

![Stop-and-Wait](./assets/0003-StopAndWait.svg#dark=3 'Stop-and-Wait') <br/>

Pode-se deduzir que a eficiência de um envio, ou seja, a fração do tempo em que o emissor está
realmente a emitir, é dada por $$\frac{\frac{L}{R}}{\frac{L}{R} + RTT}$$ (Do tempo total de envio de
um pacote e da espera da resposta, $$\frac{L}{R} + RTT$$, só existe efetivamente transmissão durante
$$ \frac{L}{R} $$).

Isto faz com que este sistema seja bastante ineficiente.  
Uma solução para este problema é, invés de enviar 1 pacote e esperar pela sua resposta, ter um número máximo ($$N$$) de pacotes pendentes de resposta (ou seja, permito ter até N pacotes pendentes).

A este esquema chama-se **Sliding Window** - "Janela" de tempo onde se podem enviar pacotes.  
Depois dessa janela acabar (ou seja, quando se chegar ao limite de N pacotes pendentes), espera-se
pela receção de pelo menos um pacote para poder enviar mais.

Por exemplo, se $$N = 3$$:

![Sliding Window](./assets/0003-SlidingWindow.svg#dark=3 'Sliding Window (N = 3)') <br/>

O ideal seria dimensionar o envio de tal forma que não exista tempo perdido:

![Sliding Window - Cenário Ideal](./assets/0003-SlidingWindow-IdealScenario.svg#dark=3 'Sliding Window - Cenário Ideal') <br/>

Contudo, ainda podem existir vários tipos de perdas, como apresentado no [RDT 3.0](#rdt-30).  
Para resolver esses problemas, existem "sub-protocolos" do **Sliding Window**:

#### Go-Back-N

Este protocolo pode ser visualizado usando [esta ferramenta online](https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/go-back-n-protocol/index.html).

Neste protocolo, o emissor vai reenviando todos os pacotes a partir do primeiro que falhou no envio.
Para se entender melhor, considere-se o seguinte exemplo, com $$ N = 5 $$:

1. São emitidos os $$N = 5$$ pacotes:
   ![Emissão de Pacotes](./assets/0003-GoBackN-1.png#dark=3) <br/>

2. Contudo, o 3º pacote é perdido:
   ![3º Pacote perdeu-se](./assets/0003-GoBackN-5.png#dark=3) <br/>

3. O recetor faz ACK de todos os pacotes recebidos até à primeira falha:
   ![Emissão de ACKs](./assets/0003-GoBackN-6.png#dark=3) <br/>

4. O emissor recebe mas só considera como recebidos os pacotes até à primeira falha:
   ![Receção de ACKs](./assets/0003-GoBackN-7.png#dark=3) <br/>

5. O emissor envia os pacotes a partir do primeiro que falhou, até o limite de $$ N = 5$$:
   ![Emissão de Pacotes](./assets/0003-GoBackN-8.png#dark=3) <br/>

Contudo, se o pacote perdido for um ACK, este algoritmo tem em conta isso:

1. São emitidos os $$N = 5$$ pacotes:
   ![Emissão de Pacotes](./assets/0003-GoBackN-1.png#dark=3) <br/>

2. O receptor recebe-os e faz ACK de todos:
   ![Emissão de ACKs](./assets/0003-GoBackN-2.png#dark=3) <br/>

3. Contudo, o 3º ACK é perdido:
   ![3º ACK é perdido](./assets/0003-GoBackN-3.png#dark=3) <br/>

4. Porém, o 4º ACK leva a informação que todos os pacotes até ele (1º, 2º e 3º) foram recebidos, por isso, o emissor sabe que foi tudo recebido:
   ![Todos os ACKs confirmados](./assets/0003-GoBackN-4.png#dark=3) <br/>

Sejam,

- $$ N_w $$ o Tamanho da janela;
- $$ N\_{pkts} $$ a quantidade de números usados para numerar os pacotes (ambos o emissor e o receptor
  têm que manter a mesma numeração de pacotes, de forma a saberem quais já foram enviados e quais são
  necessários receber).

Ambos têm que respeitar a seguinte condição:
$$ N*w <= N*{ptks} - 1 $$

#### Selective Repeat

Este protocolo também pode ser visualizado usando [esta ferramenta online](https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/selective-repeat-protocol/index.html).

Neste protocolo, ambos o emissor e o recetor têm uma _Sliding Window_ e estes apenas a avançam
quando o pacote mais antigo for _ACKnowledged_.
Para se entender melhor, considere-se o seguinte exemplo, com $$ N = 5 $$:

1. São emitidos os $$N = 5$$ pacotes:
   ![Emissão de Pacotes](./assets/0003-SelectiveRepeat-1.png#dark=3) <br/>

2. Contudo, o 2\* pacote é perdido:
   ![2º Pacote perdido](./assets/0003-SelectiveRepeat-2.png#dark=3) <br/>

3. O emissor envia os ACKs de cada pacote, mexendo a sua _Window_:
   ![Emissão de ACKs](./assets/0003-SelectiveRepeat-3.png#dark=3) <br/>

4. O emissor regista os pacotes recebidos e mexe a sua _Window_ até o primeiro pacote não recebido,
   ficando a par com o recetor:
   ![Registo de pacotes](./assets/0003-SelectiveRepeat-4.png#dark=3) <br/>

5. O emissor reenvia os pacotes perdidos (neste caso, o 2º pacote) bem como todos os restantes
   pacotes que fazem parte da _Window_ e que não foram enviados:
   ![Reenvio de falhas e novos pacotes](./assets/0003-SelectiveRepeat-5.png#dark=3) <br/>

Neste caso, a seguinte condição tem que ser respeitada:
$$ N_w <= N/2 $$
