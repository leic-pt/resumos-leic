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

### IEEE 802.3 - Ethernet

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
  certa.

![Topologia Estrela](./assets/0005-starTopology.svg#dark=3 'Topologia Estrela')

![Switch](./assets/0005-juniperEX2300.png 'Switch')
