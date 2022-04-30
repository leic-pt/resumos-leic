---
title: Interação Computacional
description: >-
  Computação Ubíqua.
  Contexto em Sistemas Interativos.
  Extrair Informação Contextual.
path: /ipm/interacao-computacional
type: content
---

# Interação Computacional

```toc

```

## Computação Ubíqua

Podemo-nos perguntar quantas coisas temos na nossa posse. A resposta não será sempre 100% exata mas é evidente que temos várias coisas. E se nos focarmos em diferentes grupos, por exemplo, quantos [**acessórios e ferramentas do dia-a-dia**](color:orange) temos? E o número de [**consumíveis**](color:orange) ou [**itens de cozinha**](color:orange), [**dispositivos eletrónicos**](color:orange), [**mobília**](color:orange) ou [**roupa**](color:orange)? E se agora modificarmos a pergunta: [**São donos de que coisas que custam mais de 50€ ou são dispositivos eletrónicos?**](color:pink)

A verdade é que, na maior parte dos casos, as coisas que nós temos que são mais caras ou são roupa ou dispositivos eletrónicos. Mas e se conseguissemos juntar os dois? Em 2017, a Levi's hipotetisou isto mesmo. Através do [**Projeto Jacquard**](color:pink), podíamos ter um telemóvel incorporado no nosso casaco, evitando ter que tirar e pôr o telemóvel constantemente no bolso, especialmente quando estamos na rua, a andar de bicileta, conduzir ou somente com as mãos cheias.

Contudo em [**em quantas coisas tocamos**](color:orange)? Todos os dias temos de tocar em diversos objetos, para [**comer**](color:pink), [**brincar**](color:pink), [**comunicar com outras pessoas**](color:pink), [**construir**](color:pink), [**nadar**](color:pink), [**tomar conta da nossa higiene pessoal**](color:pink), [**pagar**](color:pink), entre outros.

Em qualquer que seja a situação somos forçados a agir de certas formas e a fazer uma série de [**gestos universais**](color:pink), que podem ajudar na programação com diferentes formas de agarrar no nosso objeto para cumprir certas tarefas como [**selecionar**](color:orange), [**aceitar**](color:orange), [**rodar**](color:orange), [**mover**](color:orange) algo.

:::tip[]

Mas de que forma podemos relacionar estas questões com IPM?

:::

![Gestos Universais](./assets/0008-gestos-universais.png#dark=3)

Introduzindo o conceito de [**computação ubiqua**](color:pink). Definido por Mark Weiser em 1991, este diz-nos que

> _**"The most profound technologies are those [**that disappear**](color:orange). They weave themselves into the fabric of everyday life until they are indistinguishable from it."**_

Isto quer dizer que, os melhores equipamentos eletrónicos que temos neste momento são aqueles que já fazem tão parte da nossa vida que já nem pensamos neles como aparelhos eletrónicos mas como algo na nossa vida.

### Grupo de R&D do Xerox PARC

A PARC, [**Palo Alto Research Company**](color:pink) é uma companhia de Open Innovation e reconhecida pesquisa científica que está por detrás se alguns dos descobrimentos científicos mais importantes do nosso tempo. Fundada em 1969 por Jacob E. "JAck" Goldman, cientista-chefe da Xerox Corporation, esta empresa esteve na origem da criação de produtos e sistemas de hardware relacionados à tecnologia de computador, como a [**interface gráfica do utilizador (GUI)**](color:pink), [**papel eletrónico**](color:pink), [**rato de computador**](color:pink), etc. Estas descobertas tomaram um papel tão importante no nosso dia-a-dia que já nem olhamos para elas como dispositivos eletrónicos, nem descobertas assim tão significativas.

### Protótipos

Existem diferentes formas de descrevermos os nossos dispsoitivos, eletrónicos. Podemos usar [**Tabs (polegada)**](color:orange), [**Pads (feet)**](color:orange), [**Boards (yard)**](color:orange).

> _**"The computer today is isolated from the overall situation (...) and fails to get out of the way of the work (...) [**rather than being a tool through which we work**](color:pink), and thus disappearing from our awareness, [**the computer too often remains the focus of attention**](color:pink)."**_

Se nos questionarmos que itens poderão ter a capacidade de comunicação [**(network)**](color:orange) e de computação em 10 anos ou qual a vantagem de adicionarmos funcionalidades de rede e de computação e esses itens [**(added value)**](color:orange). A resposta provavelmente será em relação a itens que usamos todos os dias e regularmente, como por exemplo:

- Luzes;
- Frigorífico;
- Micro-ondas;
- Termóestato;

Podemos juntar a estes aparelhos assistentes de voz que facilitam o nosso dia-a-dia. Podem ser ferramentas poderosas, contudo a [**falta de contexto do utilixador torna a utilização penosa**](color:orange).

## Contexto em Sistemas Interativos

Ao interagirmos com os nossos dispositivos podemos fazê-lo de duas formas diferentes:

- Implicitamente
- Explicitamente

![Contexto em Sistemas Interativos](./assets/0008-sistemas-interativos.png#dark=3)

Ao interagir com uma máquina, o utlizador tem que inserir um input [**implícito**](color:pink) na aplicação, esta comunica com o sistema, network e o resto do mundo e pode devolver ao utilizador um output [**explicito**](color:pink) ou [**implícito**](color:pink), que pode, através do contexto, gerar um [**input implícito**](color:pink) e por assim adiante.

> _**"The assumption is that in future we can afford environments where there is a [**massive over-provision of displays**](color:pink) [...] Our first step is to provide additional [**information at decision points**](color:pink) (e.g., what should I wear, do I go by bike or by car, should I take the umbrella or not) that help to make a more informed decision."**_

**Albrecht Schmidt, 2004**

### Contexto

Contudo, apenas temos que ter esta informação embebida [**onde**](color:pink) e [**quando**](color:pink) for mais necessário; é necessário embeber informação de uma forma [**não disruptiva**](color:pink) à atividade ou atenção do utilizador; a informação embebida [**não deve requerir interação**](color:pink).

O uso de contexto serve para [**adpatar**](color:pink):

- a aplicação
- o conteúdo
- [**a apresentação**¹](color:orange)
- a modalidade de interação

[¹](color:orange) Podemos adaptar a apresentação por exemplo ao rodar o ecrã para visualizarmos um vídeo num maior espaço.

O contexto como [**conteúdo**](color:pink) define-se através da Tag de conteúdo média, criação de meta-dados, contexto como dados (percurso de uma corrida, etc) ou partilha em tempo real de contexto.

## Extrair Informação Contextual

Alguns tipos de informação contextual:

- Localização do utilizador (GPS, direção de voz)
- Atividade do utilizador
- Emoção do utilizador
- Pose do utilizador
- Objetos em redor do utilizador
- Estado destes objetos

### Exemplo:

Ao utilizarmos um programa com controlo de voz, temos que ter consciencia que estes programas contêm uma extração e seleção de features como volume. Através de [**machine learning**](color:pink), emsemble-based decision trees ([**Random Forest**](color:pink)) entre outros, estes programas são capazes de produzir melhores resultados e resultados mais direcionados e especializados para o utilizador. Um bom exemplo do mesmo são os teclados que, ao inicializar o nosso dispositivo, estes [**não têm bordas**](color:pink). Em vez disso, à medida que o utilizador vai usando, o teclado vai-se habituando ao seu input.

![Teclado](./assets/0008-teclado.png#dark=3)

É por esta razão que, ao utilizarmos o teclado de outra pessoa, por vezes, temos dificuldade em escrever nele sem cometer uma grande quantidade de erros.

### Convulutional Neural Network (CNN)

A [**convolutional neural network (CNN)**](color:pink) serve de forma a classificar se o utilizador está a usar o seu dedo ou polegar. Um grande exemplo disto é em tablets, existe uma [**rejeição à palma da mão quando estamos a escrever**](color:orange) neles com uma caneta. Também serve para reconhecer a atividade do seu utilizador, postura corporal, direção do olhar, etc.

![Atividade do Utilizador](./assets/0008-atividade-utilizador.png#dark=3)

Também é muito utilizado na identificação de objetos em imagens.

![Identificação de Objetos em Imagens](./assets/0008-identificacao-objetos.png#dark=3)

## Machine Learning em IPM

![Adaptação para Machine Learning](/assets/0008-machine-learning.png#dark=3)

![Ciclo de Desenho](/assets/0008-ciclo-desenho.png#dark=3)
