---
title: Camada de Ligação de Dados
description: >
  Camada de Ligação de Dados
path: /rc/ligacao-dados
type: content
---

# Camada de Aplicação

```toc

```

## A Camada de Ligação de Dados (Data Link)

O objetivo desta camada é tratar da transferência de dados numa rede local entre
dois dispositivos - entre um host e um router ou entre dois routers -
pertencentes à mesma rede, ou seja, trata-se de como os dispositivos falam
diretamente uns com os outros.

## Serviços da camada

Esta camada oferece diferentes serviços:

**_Framing_ e acesso a Links**:

- Encapsula o datagrama numa **trama** - nome dado a um pacote nesta camada, adicionando cabeçalho e trailer;
- Protocolo **MAC** - Medium Access Control - para acessar o meio compartilhado;
  São usados endereços MAC nos cabeçalhos de tramas para identificar a origem e o destino, apenas dentro da mesma rede.

**Entrega confiável entre nós adjacentes:**

- Soluções semelhantes às adotadas na camada de transporte;
- Raramente usado em links com baixa taxa de erros de bits (e.g. fibra óptica). Já os links sem fio (e.g. WiFi), têm taxas de erro altas.

**Deteção de erros:**

- Deteta erros causados por atenuação de sinal e ruído;
- O receptor pode detetar a presença de erros, sinalizando o remetente para reenviar ou descartando a trama.

**Correção de erros:**

- Para além de detetar, o receptor pode identificar e corrigir erro(s) de bits sem recorrer ao reenvio.

**Controle de fluxo:**

- Ajustar o ritmo entre os nós adjacentes que enviam e recebem.

**Links half-duplex e full-duplex:**

- **Half-duplex**: É possível transmitir para os dois sentidos, mas só num sentido de cada vez.
- **Full-duplex**: É possível transmitir para os dois sentidos ao mesmo tempo.

## Terminologia

- **Nós** / **_Nodes_** - Hosts e routers (ou seja, quem comunica);
- **Ligações** / **_Links_** - Canais de comunicação que conectam nós adjacentes
  ao longo do caminho de comunicação. Por exemplo, _links_ por fio, _links_ sem
  fio, LANs, etc.
- **Trama** / **_Frame_** - Pacote da camada de Ligação de Dados. Encapsula um datagrama.

Usando a terminologia, o objetivo desta camada é

> transferir datagramas de um nó para o nó fisicamente adjacente em um link.

## Endereços MAC

A camada de ligação de dados está implementada na **NIC** - interface de rede de
cada host, que liga diretamente aos _buses_ de hardware.

Nesta camada, são usados endereços MAC. Um exemplo de um endereço MAC é o
seguinte: `A1:B2:C3:24:55:F1`.  
Cada placa de rede tem um endereço MAC associado, que é como se fosse um
identificador específico do dispositivo (como, por exemplo, o número de Cartão
de Cidadão é para as pessoas).

Estes endereços têm propósitos diferentes dos endereços IP: os endereços MAC têm
um propósito mais local enquanto que os endereços IP têm um contexto mais
geográfico.  
O que cria esta distinção é o facto de os endereços MAC serem intrínsecos das
placas de rede, ou seja, são como uma _fingerprint_; Já os endereços IP podem
ser alterados facilmente e é possível ser construido um sistema e uma divisão
hierárquica da sua distribuição, através das máscaras de rede.

:::info[Analogia]
Podemos pensar em endereços MAC e endereços IP como o número de Cartão de
Cidadão e a morada atual de uma pessoa:

- **Endereço MAC** - Tal como o número de CC, identifica inequivocamente a
  pessoa - é um identificador associado a ela que não pode ser repetido.
  Contudo, não é possível encontrar a pessoa a partir do seu número de CC;
- **Endereço IP** - Tal como a morada atual, identifica a localização da pessoa.
  A localização da pessoa é volátil, ou seja, pode alterar (pode ir de férias,
  pode ir numa viagem de trabalho, etc.) e sabendo o nome desse local, é fácil
  da a encontrar por causa da hierarquia presente: Por exemplo, se estiver em
  `Portugal, Lisboa, Rua João Pedro, Prédio 14, 4ºDto`, podemos a encontrar:
  1. Algures no país Portugal;
  2. Dentro de Portugal, algures no distrito de Lisboa;
  3. Dentro de Lisboa, algures na Rua João Pedro;
  4. Dentro nessa rua, algures no prédio 14;
  5. Dentro desse prédio, na casa do lado direito do 4º Andar.

:::

Para um dado endereço MAC, os três primeiros bytes identificam o fabricante
enquanto que os os três últimos bytes identificam o equipamento.

Nestes endereços também é possível ser feito um broadcast, fazendo-o para o
endereço `FF:FF:FF:FF:FF:FF`. Ao enviar um pacote para esse endereço, esse
pacote será reencaminhado para todos os hosts da rede local.

## Protocolo ARP - Address Resolution Protocol

> Um router recebe um pacote por IP de algum lado. Como é que ele é entregue ao host certo?

O router precisa de saber o endereço MAC correspondente ao endereço IP
recebido.  
Para tal, usa-se o protocolo **ARP** - Address Resolution Protocol:

1. O router faz um `ARP Request`, ou seja, um broadcast, enviando para o
   endereço FF:FF:FF:FF:FF:FF a pergunta: _Quem tem este endereço IP?_
2. O host com o endereço IP responde com o seu endereço MAC.

De forma a não se estarem sempre a repetir estes pedidos, os hosts guardam numa
tabela (tabela ARP), o mapeamento entre endereço IP e endereço MAC -
(`endereçoIP`, `endereçoMAC`, `TTL`).

:::info[Exemplo inter-redes]
Assumindo que existem os hosts A e B e o router R, o host A quer enviar um
pacote para o host B (ele sabe o seu endereço IP).  
A interação é a seguinte:

1. O IP de destino não está na rede local, logo a placa de rede de A nunca
   conseguirá comunicar com a de B. Logo, é necessário fazer reencaminhamento
   para outra rede, por isso o envio tem que ser feito para o router. O host A
   não sabe o endereço MAC do router (consultou a sua tabela ARP) e então faz
   um `ARP Request` para descobrir o endereço MAC associado ao router (ele sabe
   o endereço IP do router pois é o _Default Gateway_ da rede);
2. O router responde com o seu endereço MAC;
3. O host A envia-lhe o pacote;
4. O router não sabe o endereço MAC do endereço IP do host B, então faz um `ARP Request`;
5. O host B responde-lhe com o seu endereço MAC;
6. O Router envia-lhe o pacote;

Esquematizado,
![Routing para outra LAN](./assets/0005-routingAnotherLAN.svg#dark=3)

Nas próximas interações entre A e o router e entre o router e o B, não vão ser
necessários fazer `ARP Requests` pois A guardou o endereço MAC do router na sua
tabela.
:::

## Deteção de Erros de Transmissão

Os dados, por diversos motivos, podem sofrer erros de transmissão, fazendo com
que um ou mais bits venham trocados.  
Para detetar esses erros, existem várias formas:

### Bit de Paridade

Forma antiga de detetar erros.  
No fim da transmissão, era acrescentado um bit que dependia do número de bits
totais da mensagem:

- Se o número de bits fosse par, colocava-se um `0`;
- Se o número de bits fosse ímpar, colocava-se um `1`.

Não é uma forma muito boa pois não deteta um número par de erros.

### CRC - Cyclic Redundancy Check

Muito usado atualmente.
É feita uma operação matemática, usando divisão de polinómios.

Para tal, usa-se um polinómio gerador $G(x)$ de grau $n$ juntamente com uma
mensagem de $m$ bits, que é vista como um polinómio $M(x)$ de grau menor que $M$.

A computação do CRC é feita da seguinte forma:

1. Calcula-se o dividendo $D(x) = x^n \times M(x)$, ou seja, faz-se um shift
   para a esquerda de $M(x)$ de $n$ unidades;
2. O divisor é $G(x)$;
3. Converte-se o dividendo e o divisor em bits (Por exemplo, se $G(x) = x^3 + x^2 + 1$, este passa a $1001$);
4. Faz-se a divisão $D(x) \div G(x)$. A divisão é feita à mão, como se fosse uma
   divisão normal - a única diferença é que estão a ser usados bits, ou seja, é
   feita a diferença binária;
5. Desta divisão resulta o resto $R(x)$;
6. É enviada a mensagem $T(x) = x^n \times M(x) + R(x)$, onde o $+$ representa a concatenação.

Um erro será detetado se a mensagem recebida não for divisível por $G(x)$.

O video seguinte explica como aplicar o algoritmo:
::youtube{#ZJH0KT6c0B0}

Este algoritmo é facilmente implementado em hardware, usando registos de desvio.

## Colisões de broadcast

Quando é feito um broadcast `FF:FF:FF:FF:FF:FF`, este é partilhado por todos os
membros da rede.  
Isto implica que o canal possa sofrer colisões muito facilmente, bastando que um
nó receba dois ou mais sinais ao mesmo tempo.

Protocolos **Multiple Access Control** - algoritmos distribuídos que determina
como é que os nós partilham um canal, ou seja, quando é que um dado nó pode
transmitir.

Existem vários protocolos que implementam o acesso de formas diferentes:

**Particionamento de canal fixo**:

- Dividir o canal em "pedaços" menores (intervalos de tempo, frequências, códigos, ...);
- Alocar um pedaço para o nó para uso exclusivo.

**Alocação dinâmica ("um de cada vez")**:

- Os nós tomam a vez (mas os nós com mais dados para enviar podem transmitir com mais frequência);
- _Poll_ / seleção;
- Passagem de um token.

**Acesso Aleatório**:

- O canal não é dividido, logo permite colisões;
- É possível recuperar das colisões.

### Particionamento de canal fixo

#### FDMA - Frequency Division Multiple Access

Neste tipo de particionamento, o espectro de canal é dividido em faixas de
frequência. Assim, é atribuída a cada estação uma faixa de frequência fixa mas o
tempo de transmissão não utilizado nas faixas de frequência não é aproveitado.

Similar à [FDM de _Circuit Switching_](/content/rc/0001-introducao.md#fdm-frequency-division-multiplexer).

#### TDMA – Time Division Multiple Access

O acesso ao canal é feito em rondas. É atribuído a cada host uma fatia temporal em cada ronda. Também aqui, o tempo não utilizado não é aproveitado.

Similar à [TDM de _Circuit Switching_](/content/rc/0001-introducao.md#tdm-time-division-multiplexer).

#### CDMA – Code Division Multiple Access

Cada utilizador tem acesso à frequência completa, durante todo o tempo.  
São usados diferentes códigos para distinguir os utilizadores.

### Particionamento de canal fixo

Neste tipo de particionamento, o canal é fixo e é antes feita uma divisão por
regras de ordenação dos hosts.

#### Poll / Select

Um computador central central controla a atividade dos outros.

#### Token Passing

Um Token que dá a permissão de transmissão é passado entre os hosts.  
Quando um host acaba de transmitir, passa o token para outro host.

Esta medida não é ideal se não existir muito tráfego, pois existe dependência
que os hosts transmitam mensagens.

### Acesso aleatório

Neste tipo de particionamento, não existe qualquer divisão do canal nem
coordenação, ou seja, quando um nó tem um pacote para enviar, envia-o
imediatamente à _rate_ máxima.

Os protocolos que seguem este particionamento indicam como detetar colisões bem
como recuperar delas:

#### ALOHA

Criado na Universidade de Hawaii (daí o seu nome).  
É um protocolo simples que não tem sincronização.  
Existe uma colisão se duas ou mais tramas se sobrepuserem, sendo programada uma
retransmissão para um instante futuro aleatório.

#### Slotted ALOHA

Igual ao protocolo anterior, mas o tempo é dividido em slots temporais do mesmo
tamanho.  
Os nós só podem começar a transmitir no inicio de um slot.

#### CSMA - Carrier Sense Multiple Access

Baseia-se em não causar interrupções:

- Se o canal estiver calado, transmite a trama inteira;
- Se o canal estiver ocupado, adia a transmissão.

Contudo, ainda podem existir colisões devido ao tempo de propagação, o que
implica que toda a transmissão de um pacote tenha que ser descartada.

#### CSMA/CD - CSMA com Deteção de Colisões

Versão aprimorada do protocolo anterior, onde consegue detetar colisões mais
rapidamente. Ao ser detetada uma colisão, as transmissões são imediatamente
abortadas, reduzindo a ocupação do canal.

### Resumo dos protocolos

**Particionamento de canal fixo**:

- Eficientes com uma carga alta e constante de todos os nós;
- Ineficientes em cargas baixas ou desequilibradas.

**Alocação dinâmica ("um de cada vez")**:

- Compartilham o canal de forma eficiente e justa em cargas altas;
- Baixa carga: ineficiente, pois os nós ativos precisam esperar pelos nós sem/
  com pouca atividade para "passarem a vez";

**Acesso Aleatório**:

- Eficientes em carga baixa: um único nó pode utilizar unicamente o canal;
- Carga alta: sobrecarga de colisão.

## IEEE 802.3 - Ethernet

O IEEE 802.3 é um standard que introduz a tecnologia de LAN cablada chamada Ethernet.  
Existem várias topologias de rede:

### Topologias de rede

- **Bus** - um cabo principal partilhado em que os computadores se ligam a esse
  cabo. Todos os hosts ouvem todos os hosts e está muito sujeito a colisões.

![Topologia Bus](./assets/0005-busTopology.svg#dark=3 'Topologia Bus')

- **Estrela** - No lugar da ligação ser feita a um fio, é antes feita a uma
  tomada na parede. As tomadas nas paredes são ligações que se ligam todas a um
  armário onde estão equipamentos de rede usados para espalhar o tráfego.  
  Inicialmente usavam-se hubs, dispositivos que apenas repetem o sinal para
  todas as portas (basicamente, fazem broadcast);  
  Depois, surgiram os switches/bridges, que encaminham o tráfego para a porta
  certa (são "inteligentes").

![Topologia Estrela](./assets/0005-starTopology.svg#dark=3 'Topologia Estrela')

![Switch](./assets/0005-juniperEX2300.png 'Switch')

### Frames de rede
Na camada de Ligação de Dados (layer 2), os pacotes são chamados de ***Frames*/Tramas** e têm o 
seguinte formato:

TODO: meter diagrama 105

Onde, 
- Preâmbulo - Usado para sincronizar as _clock rates_ dos emissor e recetor;
- Endereços - Endereços MAC do emissor e do receptor;
- Tipo - Indica o protocolo da camada superior (Ex. IP);
- Data - Dados a serem transmitidos;
- CRC - checks para correção de erros.

## Algoritmos de comunicação

A ethernet básica tem alguns problemas:
- ***Connectionless*** - Não existe o conceito de conexão, como visto anteriormente 
  [com o paradigma **Datagram**](./0004-rede.md#datagram);
- **Instável** - A [NIC](#endereços-mac) de recebimento não envia ACKs ou NACKs 
  para a [NIC](#endereços-mac) de envio, o que implica que um fluxo de 
  datagramas transmitidos pela camada de rede pode ter lacunas (datagramas 
  perdidos). Contudo, se a aplicação estiver a usar o TCP, as lacunas serão 
  preenchidas.
  
Para colmatar isso, foi criado o seguinte algoritmo:

### Algoritmo CSMA/CD - Carrier Sense Multiple Access (with Collision Detection)
1. A NIC recebe o datagrama da camada de rede e cria uma trama;
2. Se o canal estiver livre (esperam-se 96 tempos de bit), a NIC inicia a transmissão da trama;  
    Se o canal estiver ocupado, aguarda até que o canal esteja livre e logo de seguida, transmite;
3. Se o NIC transmitir a trama inteira sem detetar outra transmissão: **sucesso**;  
4. Se o NIC detetar outra transmissão enquanto estiver transmitindo, houve uma
   colisão:
    - aborta e envia um sinal de interferência, avisando todos que houve uma colisão;
5. Depois de abortar, o NIC entra em retrocesso exponencial:
    - Depois da m-ésima colisão, a NIC escolhe um número $K$ aleatoriamente em $\{0,1,2,…,2^m-1\}$;
    - A NIC aguarda $K \times 512$ tempos de bit de transmissão; Depois, retorna ao Passo 2.
    
Este algoritmo procura, através de deteção de colisões, minimizar as colisões 
seguintes, pois todos os intervenientes são avisados que houve uma colisão e 
"ordenados" a parar, "reestabelecendo a ordem".   
Contudo, quando existe muito tráfego, existem de qualquer forma muitas colisões. 

## Switches  
Ao contrário dos hubs, apresentados [anteriormente](#topologias-de-rede), os 
switches são inteligentes - se um host A falar com um host B, o switch aprende a 
sua localização, ou seja, fica a saber que o host A está na sua porta X.   

Desta forma, são permitidas várias ligações em simultâneo e as colisões mencionadas anteriormente são reduzidas.

Para isso, o switch tem uma ***Switching table*/Switching table** - Sempre que existir uma 
nova transmissão, o switch constrói uma Switching table onde regista um 
mapeamento de quem transmitiu e de onde (de que interface) veio essa transmissão.  
(Não confundir com uma [Forwarding table](./0004-rede.md#forwarding-table))

São guardadas entradas do tipo: 
```(Endereço MAC, interface do switch, TTL)```  

Onde TTL representa o tempo até esta entrada deixar de ser válida.

Sempre que o switch quer enviar para um host, verifica primeiro se existe uma 
entrada válida na tabela com o endereço de destino:  
- Se estiver, envia para a interface associada.
- Se não estiver, faz ***flooding*** - a mensagem é repetida em todas as 
   interfaces (à exceção da que enviou a trama) - neste caso, funciona como um 
   Hub.  

### Interligar switches

É possível interligar switches, ou seja, a um switch estar ligado outro switch, 
que por sua vez está ligado a um terceiro switch, and so on.  
Por exemplo,
(TODO: esquema disso tipo 127)

Ou seja, numa interface de um switch podem existir várias interfaces (correspondentes às interfaces dos switches "filho").  

Considerado o flooding apresentado anteriormente, eis um exemplo de uma transmissão onde o switch ainda não tem nenhuma entrada na Switching table:  

TODO: meter exemplo de C para I
<!-- 
1. C envia
2. S1 flood
3. S4 aprende
3. S4 flood
4. S3 aprende 
5. S3 flood
6. S3 todos recebem a mensagem, inclusive o destinatário

I envia
1. I envia
2. S3 aprende
3. Destino é o C, conhecido, então envia para S4
4. S4 aprende
4. Destino é o C, conhecido, então envia para o S1
...
Nesta situação, apenas o C recebeu a mensagem
 -->

#### Falta de redundância
E se alguém corta-se a ligação entre dois dos switches?  
Os hosts todos ligados ao switch filho ficam desconectados.
Para resolver isso, pode-se introduzir alguma **redundância**!  

Considerando a interligação mostrada anteriormente, uma forma de adicionar seria 
a seguinte: 

TODO: 127 mas com redundância

Porém, adicionar redundância trás um problema grave - quando é feito flooding, é 
criado um loop na rede. Mais grave ainda, devido a não existir forma de 
identificar se uma trama é uma repetição ou uma trama nova, este loop fica na rede para sempre!

Por exemplo, considerando uma Switching table vazia,
- Se S4 fizer flooding, irá enviar uma trama para S1, S2 e S3;
- Por conseguinte, S1, S2 e S3 irão fazer flooding para S2, S1 e S3, e S2, respetivamente;  
- Os switches que já receberam a trama não conseguiram o distinguir e portanto, voltam a fazer flooding, incluindo os switches que já o fizeram...

Para resolver isto, a redundância necessita de estar desligada logicamente, ou seja, a ligação física (o cabo), está ligado, mas o switch desativa a porta até esta ser necessária.  

Para decidirem quais os melhores caminhos a usar e que interfaces desligar, os switches precisam de um algoritmo para os descobrir.  
Como o esboço da rede final é, pensando em grafos, uma árvore (cada nó só está ligado uma vez), é lhe dado o nome de **STP - Spanning Tree Protocol**.

#### STP - Spanning Tree Protocol

##### Ideias Gerais
É necessário então identificar uma árvore na topologia - as interfaces que constituem essa árvore ficam ligadas enquanto que as outras desligadas (até ser necessário).  

Para este algoritmo, são necessárias as seguintes ideias:
- **Bridge ID** - Cada switch é identificado por um endereço constituído por 2 
   bytes que representam a prioridade e 6 bytes que são o endereço MAC do switch. 
   Por exemplo, `8000.AA:BB:CC:DD:EE:FF` é o ID do switch com endereço MAC 
   `AA:BB:CC:DD:EE:FF` e com uma prioridade de 8000.
- **Root Bridge** - Switch que é o nó inicial da árvore. É o switch com o menor _Bridge ID_ (ou 
   seja, a prioridade serve para "forçar" um switch a ser o _root bridge_ e os seus sucessores).
- **Root Port** - Porta que, num dado switch, é responsável pela receção de frames para/do _root bridge_ - são o caminho em direção ao _Root bridge_ (daí **Root Port**, "porta para o _root_").
- **Designated Bridge** - Switch que, num dado segmento de rede, é responsável por enviar/receber as tramas da rede para/da a _root bridge_.
- **Designated Port** - Porta do _Designated Bridge_ por onde passa o tráfego para/da _root bridge_.

Vale notar que:
- **Root Port** não está relacionado com o _root bridge_. 
- Para um dado segmento de rede, onde podem estar computadores, impressoras, etc., estes enviam tráfego para o switch, sendo essa porta a **Designated Port**. O switch por sua vez, envia o tráfego pela **Root Port**, que aponta na direção da _root bridge_. Ou seja, o tráfego "flui" de **Designated Ports** para **Root Ports**.  
- Cada rede terá um _root bridge_, cada switch (exceto o _root bridge_) terá apenas uma **Root Port**, cada segmento de rede terá apenas uma **Designated Port** e as restantes portas ficarão inativas.
- Cada switch tem um custo para chegar ao _root bridge_, que é igual à soma dos custos de todas as portas que transmitem em direção à _root bridge_ (**Root Ports**).
- As restantes portas que não são usadas são as portas que são desativadas, ou seja, a árvore é definida pelas portas não bloqueadas.  



##### BPDUs - Bridge Protocol Data Units

Para ser possível identificar todos os elementos mencionados anteriormente, os switches têm que de alguma forma comunicar entre sí.  
Para o fazerem, e para trocarem a informação necessária, os switches enviam **BPDUs - Bridge Protocol Data Units**, que contém a seguinte informação,

``` 
(BridgeID do Root Bridge, Custo para chegar ao Root Bridge, BridgeID de quem enviou o BPDU, ID da porta que originou o BPDU)
```

Estes BPDUs são enviados, em norma, em intervalos de 2 segundos.

Quando um switch é ligado, o algoritmo STP é usado para identificar a _root bridge_, sendo enviados BPDUs com o BridgeID do novo switch.  
Este, até receber BPDUs, assume ser o _root bridge_. Porém, quando receber um BPDU, este verá o BridgeID do _root bridge_:  
- Se esse BridgeID for menor que o dele, o switch aceita que esse BridgeID é o _root bridge_ e deixa de assumir ser ele o _root bridge_;
- Se esse BridgeID for maior que o dele, então ele continua a assumir ser o _root bridge_. Quando os outros switches receberem o seu BridgeID, estes verão que é menor que os deles, então atualizam o seu _root bridge_.

##### Algoritmo

Devido à complexidade e nuances do algoritmo, este será explicado com um exemplo:

TODO: exemplo tablet

##### Ciclos temporários e perda de conectividade  

Quando existir uma mudança na topologia de rede (por ex., um switch é removido ou um novo _root bridge_ é introduzido), poderá: 
- existir uma perca temporária de conectividade, pois uma porta anteriormente bloqueada e que deve ser ativa pode ainda não ter passado a ativa;
- existirem ciclos temporários, pois uma porta anteriormente ativa e que deve ser bloqueada por ainda não ter passado a bloqueada.  

Para minimizar a probabilidade de ciclos temporários, os switches devem esperar algum tempo antes de trocarem uma porta de um estado bloqueado para um estado ativo.