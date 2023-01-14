---
title: Camada de Transporte
description: >
  Camada de Transporte - UDP, RDT, TCP

path: /rc/transporte
type: content
---

# Camada de Transporte

```toc

```

## A Camada de Transporte

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

[**Vantagens**](color:green)

- Simples;
- Tem menos delay que outros protocolos mais simples;
- Cabeçalho do segmento mais pequeno;
- Não há controlo de congestionamento, ou seja, pode enviar os dados muito mais rápido.

[**Desvantagens**](color:red)

- Os segmentos podem se perder;
- A entrega pode ser feita fora de ordem;
- Não é feita uma conexão entre o emissor e o recetor.

Dado isto, este protocolo é normalmente usado em aplicações que toleram a perca de alguns pacotes e
que querem que a informação apareça o mais rápido possível (e.g. transmissões de televisão).

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
Se for esse o caso, o pacote é apenas ignorado/_dropped_ (no caso de TCP, o segmento seria antes
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

Novas medidas foram aparecendo ao longo do tempo e estas constituem o protocolo RDT (conjunto de
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
2. O Host A envia "Hoje";
3. O Host B recebe "Hoje" e envia um pacote ACK a confirmar a receção;
4. O Host A recebe o pacote ACK mas vem corrompido. Sem ter a certeza da resposta, reenvia "Hoje";
5. O Host B recebe novamente "Hoje": Serão mais dados ou uma repetição da mesma mensagem?

Para colmatar isso, a versão de RDT 2.1 inclui um número de sequência de forma a
que o cliente possa confirmar se um segmento é repetido ou se é a continuação de uma mensagem.

### RDT 3.0

Nova assunção: E se os pacotes nunca chegarem?

Esta versão implementa um _Timeout_, ou seja, o emissor espera uma quantidade de tempo pela resposta
do envio de um pacote (ou seja, por um ACK).  
Se passado esse tempo nenhum ACK for recebido, o emissor reenvia a mensagem.

Se o pacote estava apenas com um delay grande, a retransmissão será então duplicada mas, graças ao
**RDT 2.1**, isso não é um problema devido ao uso de números de sequência.

Seguem-se exemplos deste protocolo:

![Caso 1 - Sem perdas](./assets/0003-rdt3_0-eg1.svg#dark=3 'Caso 1 - Sem perdas') <br/>
![Caso 2 - Pacote Perdido](./assets/0003-rdt3_0-eg2.svg#dark=3 'Caso 2 - Pacote Perdido') <br/>
![Caso 3 - ACK perdido](./assets/0003-rdt3_0-eg3.svg#dark=3 'Caso 3 - ACK perdido') <br/>
![Caso 4 - Timeout prematuro](./assets/0003-rdt3_0-eg4.svg#dark=3 'Caso 4 - Timeout prematuro') <br/>

### Sliding Window

O mecanismo Stop-And-Wait implica que esperemos pela confirmação de um dado segmento para enviar o seguinte.  
Isto implica que, do tempo total de envio, apenas uma pequena parte é efetivamente usada para envio,
sendo o restante tempo usado para esperar.  
Olhando para o esquema seguinte,

![Stop-and-Wait](./assets/0003-StopAndWait.svg#dark=3 'Stop-and-Wait') <br/>

Pode-se deduzir que a eficiência de um envio, ou seja, a fração do tempo em que o emissor está
realmente a emitir, é dada por $\frac{\frac{L}{R}}{\frac{L}{R} + RTT}$ (Do tempo total de envio de
um pacote e da espera da resposta, $\frac{L}{R} + RTT$, só existe efetivamente transmissão durante
$\frac{L}{R}$).

Isto faz com que este sistema seja bastante ineficiente.  
Uma solução para este problema é, invés de enviar 1 pacote e esperar pela sua resposta,
ter um número máximo ($N$) de pacotes pendentes de resposta (ou seja, permito ter até $N$ pacotes pendentes).

A este esquema chama-se **Sliding Window** - "Janela" de tempo onde se podem enviar pacotes.  
Depois dessa janela acabar (ou seja, quando se chegar ao limite de N pacotes pendentes), espera-se
pela receção de pelo menos um pacote para poder enviar mais.

Por exemplo, se $N = 3$:

![Sliding Window](./assets/0003-SlidingWindow.svg#dark=3 'Sliding Window (N = 3)') <br/>

O ideal seria dimensionar o envio de tal forma que não exista tempo perdido:

![Sliding Window - Cenário Ideal](./assets/0003-SlidingWindow-IdealScenario.svg#dark=3 'Sliding Window - Cenário Ideal') <br/>

Contudo, ainda podem existir vários tipos de perdas, como apresentado no [RDT 3.0](#rdt-30).  
Para resolver esses problemas, existem "sub-protocolos" do **Sliding Window**:

#### Go-Back-N

Este protocolo pode ser visualizado usando [esta ferramenta online](https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/go-back-n-protocol/index.html).

Neste protocolo, o emissor vai reenviando todos os pacotes a partir do primeiro que falhou no envio.
Para se entender melhor, considere-se o seguinte exemplo, com $N = 5$:

1. São emitidos os $N = 5$ pacotes:
   ![Emissão de Pacotes](./assets/0003-GoBackN-1.png#dark=3) <br/>

2. Contudo, o 3º pacote é perdido:
   ![3º Pacote perdeu-se](./assets/0003-GoBackN-5.png#dark=3) <br/>

3. O recetor faz ACK de todos os pacotes recebidos até à primeira falha:
   ![Emissão de ACKs](./assets/0003-GoBackN-6.png#dark=3) <br/>

4. O emissor recebe mas só considera como recebidos os pacotes até à primeira falha:
   ![Receção de ACKs](./assets/0003-GoBackN-7.png#dark=3) <br/>

5. O emissor envia os pacotes a partir do primeiro que falhou, até o limite de $N = 5$:
   ![Emissão de Pacotes](./assets/0003-GoBackN-8.png#dark=3) <br/>

Contudo, se o pacote perdido for um ACK, este algoritmo tem em conta isso:

1. São emitidos os $N = 5$ pacotes:
   ![Emissão de Pacotes](./assets/0003-GoBackN-1.png#dark=3) <br/>

2. O receptor recebe-os e faz ACK de todos:
   ![Emissão de ACKs](./assets/0003-GoBackN-2.png#dark=3) <br/>

3. Contudo, o 3º ACK é perdido:
   ![3º ACK é perdido](./assets/0003-GoBackN-3.png#dark=3) <br/>

4. Porém, o 4º ACK leva a informação que todos os pacotes até ele (1º, 2º e 3º) foram recebidos, por isso, o emissor sabe que foi tudo recebido:
   ![Todos os ACKs confirmados](./assets/0003-GoBackN-4.png#dark=3) <br/>

Sejam,

- $N_w$ o Tamanho da janela;
- $N_{pkts}$ a quantidade de números usados para numerar os pacotes (ambos o emissor e o receptor
  têm que manter a mesma numeração de pacotes, de forma a saberem quais já foram enviados e quais são
  necessários receber).

Ambos têm que respeitar a seguinte condição:
$N_w \leq N_{ptks} - 1$

#### Selective Repeat

Este protocolo também pode ser visualizado usando [esta ferramenta online](https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/selective-repeat-protocol/index.html).

Neste protocolo, ambos o emissor e o recetor têm uma _Sliding Window_ e estes apenas a avançam
quando o pacote mais antigo for _ACKnowledged_.
Para se entender melhor, considere-se o seguinte exemplo, com $N = 5$:

1. São emitidos os $N = 5$ pacotes:
   ![Emissão de Pacotes](./assets/0003-SelectiveRepeat-1.png#dark=3) <br/>

2. Contudo, o 2º pacote é perdido:
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
$N_w \leq \frac{N_{ptks}}{2}$

## TCP - Transmission Control Protocol

Criado com a ideologia do RDT em mente, veio o protocolo **TCP - Transmission Control Protocol**.
Este protocolo tem as seguintes características:

- **Point-to-Point** - Apenas um emissor e um receptor;
- **Sliding Window** - implementa a noção de Sliding Window, apresentada anteriormente;
- **Dados Full Duplex** - na mesma conexão, é permitido enviar dados nos dois sentidos;
- **Orientado a conexão** - Implementa uma conexão, ou seja, dois hosts conhecem-se (vs. o UDP,
  em que o receptor recebe informação de vários emissores sem estabelecer uma conexão).
- **Controlo de Flow** - O emissor consegue controlar a quantidade de dados enviados, caso o
  cliente não consiga processar tudo.

### Estrutura de um segmento TCP

De forma a conseguir implementar estas medidas, o TCP altera a estrutura do segmento apresentada
anteriormente:

![Divisão de um Segmento TCP](./assets/0003-TCPsegment.svg#dark=3 'Divisão de um Segmento TCP')

Onde os campos que se destacam são,

- **Número de sequência** - conta o número de bytes enviados, desde o inicio da conexão. É igual ao
  n-ésimo byte enviado do cliente mais o primeiro byte enviado deste segmento;
- **Número de ACK** - número de sequência do byte seguinte que se espera receber. Este indica que
  foram recebidos os dados acumulados até este ACK (ou seja, todos os ACKs anteriores chegaram) e
  que se pretende receber os dados associados a este ACK.
- **Bit A** - diz se o segmento é um ACK;
- **_len cab_** - tamanho do cabeçalho;
- **Janela de Receção** - número de bytes que recetor consegue receber;
- **Bit R, S, F** - diz se o segmento é um RST, SYN ou FIN;
- **Bit E e Bit C** - notificação de congestão na rede.

### Three Way Handshake - Estabelecer uma conexão

Antes de serem transmitidos dados, o emissor e o receptor criam uma conexão, através do Three Way Handshake:

1. O cliente envia um segmento **SYN** para o servidor, indicando o número de sequência inicial;
2. O servidor responde com um **SYN ACK**, indicando o seu número de sequência inicial.
   Aqui, o servidor aloca buffers.
3. O cliente responde com um **ACK**, podendo já enviar dados com este segmento.

Para terminar a conexão,

1. O cliente envia um segmento **FIN** para o servidor;
2. O servidor responde com um **ACK** e começa a fechar a conexão;
3. O servidor, depois de fechar completamente a conexão, responde com um **FIN**;
4. O cliente responde ao **FIN** recebido com um **ACK**.
   Mesmo depois de receber o **FIN**, como os pacotes podem não chegar por ordem, o socket não é fechado imediatamente pois ainda podem chegar pacotes.
5. o servidor recebe o **ACK**, que confirma que a conexão foi totalmente (dos dois lados) fechada.

### Comparar números de segmento

Considere o seguinte esquema, onde existe um servidor que faz "echo" do que os clientes enviam. O esquema mostra uma conexão já anteriormente inicializada e alguns dados trocados,

![Exemplo de interação](./assets/0003-exemploSeqACK.svg#dark=3)

1. O cliente envia a letra 'A'. O segmento contém o número de sequência 40 e o ACK 80.
2. O servidor envia o segmento com o número de sequência 80 (visto que o ACK recebido representa
   que todos os segmentos até ao 80 foram recebidos e que o número de sequência que se pretende
   receber é o 80).  
   O servidor envia o ACK 41, avisando que recebeu tudo até ao número de sequência 40 e que quer receber o 41.  
   O servidor envia a letra 'A', pois está a fazer echo das mensagens recebidas.
3. O cliente responde com o número de sequência e o ACK (não são enviados dados pois o
   objetivo deste segmento é confirmar a receção do segmento anterior).
   O cliente envia o número de segmento 41, pois é número do ACK que recebeu do servidor;  
   O cliente envia o ACK 81, avisando que recebeu tudo até ao segmento 80 e quer o segmento 81.

### Timeout

Cada segmento tem que ter um dado tempo para, caso esse tempo seja passado e não seja obtida
resposta, considerar o segmento como perdido. A esse tempo chama-se **timeout**.

O tempo de timeout tem que ser maior que o RTT e portanto, é necessário saber o tempo de RTT.  
É possível estimar este valor fazendo a diferença entre o tempo de emissão de um segmento e da
receção do respetivo ACK. A este tempo chama-se $SampleRTT$ (visto ser uma amostra do tempo
possível).

Contudo, uma amostra do tempo não é suficiente, visto que a rede, nesse instante podia instável e
não representar a realidade.  
Então alternativamente calcula-se o $EstimatedRTT$, que é uma média de vários $SampleRTT$s.

Alternativamente a esses tempos, pode-se ainda calcular o $EstimateRTT = (1-\alpha) \times 
EstimatedRTT + \alpha * SampleRTT$ (tipicamente, $\alpha = 0.125$). A esta fórmula chama-se
**EWMA - Exponential Weighted Moving Average**,
e com ela, a influência das amostras anteriores diminui exponencialmente.

### Envio de um segmento

O flow de envio de dados é o seguinte:

1. criar um segmento;
2. definir o número de sequência como o primeiro byte de dados deste segmento. Por exemplo,
   - se for o primeiro segmento a ser enviado, o número de sequência será 1;
   - se já tiverem sido enviados 1000 bytes, o número de sequência será 1001.
3. Enviar o segmento e começar um _timer_.
4. Se o _timer_ passar e não tiver sido recebida uma confirmação, reenvia-se o segmento que causou
   o timeout. O tempo de espera é dobrado para evitar timeouts prematuros de segmentos seguintes.
5. É recebido um ACK, confirmado todos os segmentos enviados até o valor do ACK.  
   Se os segmentos ainda não estavam confirmados, são agora confirmados.
   Recomeça o timer, se ainda existirem outros segmentos por confirmar.

Apesar de existir o timeout, o período de espera é relativamente longo.
Uma solução para isso é fazer uma **retransmissão rápida** - assume-se que se existirem 3 ACKs
duplicados, deve-se retransmitir imediatamente.

Note-se que, se algum segmento não tiver chegado, o servidor irá sempre responder com ACKs até esse
segmento, pois o ACK representa que todos os segmentos até o seu número foram recebidos com sucesso.
Por exemplo,

1. O cliente envia um segmento com número = 1.
2. O servidor responde com ACK = 2 (recebeu tudo até 2 e quer receber o 2).
3. O cliente envia um segmento com número = 2.
4. O servidor responde com ACK = 3.
5. O cliente envia um segmento com número = 3. **O Pacote perde-se**.
6. O cliente envia um segmento com número = 4.
7. O servidor responde com ACK = 3 (Apesar de ter recebido o segmento 4, o servidor só pode
   responder com 3 pois o ACK é acumulativo, ou seja, só recebeu tudo até ao 2).
8. O cliente envia um segmento com número = 5.
9. O servidor responde com ACK = 3.
10. O cliente envia um segmento com número = 6.
11. O servidor responde com ACK = 3.
12. O cliente recebe 3 ACKs repetidos e então retransmite o segmento 3.
13. O servidor responde com ACK = 7 (Recebeu todos os pacotes até ao 6 e pode receber o 7).

### Controlo do fluxo

Um dos objetivos do TCP é assegurar que a transmissão não é feita rápido de mais, ou seja, que o
receptor consegue processar todos os dados de um segmento antes de receber o seguinte.

O receptor tem um **buffer de receção** - buffer para onde vão os dados que vão sendo recebidos
através de TCP.  
Uma forma de controlar o fluxo é o receptor avisar o espaço livre que tem no buffer a cada ACK
enviado para o emissor através do cabeçalho [Janela de Receção](#estrutura-de-um-segmento-tcp).
Desta forma, é garantido que não existirá overflow de dados.

### Controlo de congestão

Outro problema que o TCP consegue antever é a congestão na rede.

Poderá haver congestão na rede se não existirem sincronizações de tráfego, ou seja, se as múltiplas
transmissões não souberem que as outras existem e portanto enviarem todas a uma velocidade maior
que o suposto.  
Para além disso, se existir tráfego em demasia e passar por um router,este pode não ter capacidade
suficiente para segurar a informação toda e então descarta pacotes.  
Isso implica que terá que ser feita uma nova transmissão e, consequentemente, causar ainda mais
tráfego na rede.  
Essa situação tem a agravante de, se existirem cadeias de routers, apesar do tráfego conseguir
passar um dos routers, poder ser descartado mais tarde, causando ainda mais latência.

Para conseguir controlar a congestão, existem duas soluções para o problema: **Controlo através da rede** e **Controlo end-end**:

#### Controlo através da rede

Nesta solução, os routers dão feedback direto aos hosts, informado quão congestionada a rede está.  
O feedback é passado pelos vários routers até chegar ao host final e, com esse feedback, os
emissores podem reduzir o seu ritmo.

Esse feedback é passado [nos bits E e C do header de TCP](#estrutura-de-um-segmento-tcp).

#### Controlo end-end - AIMD

Nesta solução, não existe um feedback explicito da rede. Em vez disso, a congestão é inferida
através do delay e das perdas de pacotes observadas.

No caso do TCP, usa-se um algoritmo de **AIMD - Additive increase/multiplicative decrease**, onde
os emissores começam com um ritmo base e vão aumentado esse ritmo aos poucos.  
Se à medida que o ritmo vai aumentando, existir uma perda (o que significa que o canal está a ficar
mais congestionado), então a velocidade é reduzida drasticamente.

Detalhadamente, os aumentos são de dois tipos, baseados num _threshold_:

- Se a velocidade estiver abaixo do _threshold_, os aumentos são exponenciais - duplicando a
  velocidade a cada envio;
- Se com um aumento a velocidade passar desse _threshold_, o aumento passa a ser constante, de 1
  segmento extra por envio.

Já os decréscimos:

- são em metade de velocidade, caso seja detetado o [mesmo ACK três vezes](#controlo-do-fluxo);
- São para o mínimo possível - **1 MSS - Maximum Segment Size**, caso seja detetada uma perda.

O valor do _threshold_ é um valor fixo quando a transmissão começa mas, sempre que existe um
decréscimo, o seu valor muda para metade da velocidade atual (antes desta ser reduzida).

Resumidamente,

- Quando uma conexão começa, a velocidade é a mais lenta possível - 1 MSS. A isto chama-se **slow start**.
- Contudo, como a velocidade é muito inferior ao threshold, esta irá crescer exponencialmente até
  alcançar o threshold. Depois disso, entra na fase de **congestion-avoidance**, onde o
  crescimento é linear.
- Se o mesmo ACK for repetido três vezes, o _threshold_ é passado para metade da velocidade atual e
  a velocidade para metade;
- Se existir um timeout, o _threshold_ é passado para metade da velocidade atual e a velocidade 1
  MSS.

Olhando para um gráfico temporal que representa a velocidade de envio, este terá um aspeto de uma
serra:

![Grafico em serra](./assets/0003-graficoSerraAIMD.svg#dark=3)

**Estado de Fast Recovery**
Se forem detetados três ACKs duplicados antes da fase de **congestion-avoidance**, pode ser usado o
estado de **Fast Recovery**, onde se tenta acelerar a recuperação enviando apenas os segmentos
perdidos.

Neste caso,a velocidade é incrementada em 1 por cada ACK duplicado recebido pelo segmento perdido
que causou a entrada neste estado.

Finalmente, depois do ACK que confirma a receção do segmento perdido, move-se para a fase de
**congestion-avoidance**.

##### Variações

Existem variações de implementação do AIMD. Por exemplo, em Linux é usado **TCP CUBIC** onde, se
assume que, quando é detetada uma congestão, esta não vai ser muito alterada.  
Desta forma, pode-se aproximar mais rapidamente da velocidade que provocou a congestão anterior
(visto que se assume que esta se manteve) e quando mais perto, aproximar-se mais lentamente.

Comparando os dois tipos num gráfico, ambos teriam este aspeto:

![TCP Normal vs CUBIC](./assets/0003-graficoSerraAIMD-CUBIC.svg#dark=3)

### _Fairness_ de TCP

Se existirem várias conexões a utilizar o mesmo meio, o TCP tenta o partilhar, de forma a tornar a
ligação equitativa para todos.

Com os mecanismos apresentados anteriormente, ao fim de certo tempo, a partilha tende a
aproximar-se do mais justo, pois as velocidades tendem a equilibrar-se.

Contudo, por exemplo, um browser pode gerar várias conexões por cada _tab_ aberta, o que faz com
que estas (que representam uma ligação maior) ficam com uma grande parte do canal.

Não existe forma de controlar isso no TCP.

### QUIC - Quick UDP Internet Connections

Como mencionado anteriormente [na camada de aplicação](./0002-aplicacao.md#http-30), recentemente
foi criado o protocolo **QUIC - Quick UDP Internet Connections**, inventada pela Google.

O QUIC implementa muitas das funcionalidades de TCP mas, como o nome indica, usa UDP e para além
disso tem outras features adicionais como, por exemplo, implementar segurança (autenticação,
encriptação) e estabelecimento de conexões (controlo de congestionamento diferente, fiabilidade).
