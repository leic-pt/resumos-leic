---
title: Introdução
description: Interação Pessoa-Máquina.
  Mitos de bom design.
  Modelos de desenho.
path: /ipm/introducao
type: content
---

# Introdução

```toc

```

## Interação Pessoa-Máquina

A Interação Pessoa-Máquina (em inglês, HCI - _Human-Computer Interaction_) é a área de estudo que se foca em desenhar tecnologia para computadores para que estes consigam servir humanos da melhor maneira.

A [Interaction Design Foundation](https://www.interaction-design.org/) define IPM do seguinte modo:

> Human-computer interaction (HCI) is a multidisciplinary field of study focusing on the **design of computer technology** and, in particular, the **interaction between humans (the users) and computers**.

Neste momento, os fatores diferenciadores no campo da tecnologia são a **conveniência**, a **usabilidade** e a **fiabilidade** — nem tanto a rapidez, capacidade de armazenamento, etc. como antigamente, pelo que é essencial que haja um foco consciente nessa área.

IPM envolve várias disciplinas, das quais se destacam:

- **[Interação](color:orange) — Design:** comunicação utilizador->máquina e máquina->utilizador
- **[Pessoa](color:orange) — Ciências Comportamentais:** utilizador, contexto social
- **[Máquina](color:orange) — Ciência da Computação:** hardware / software

### Interface Utilizador (IU)

Um conceito básico em IPM é a **interface utilizador** (ou, mais frequentemente, **UI - _User Interface_**, em inglês).

:::tip[Interface Utilizador]

Corresponde ao conjunto de elementos que um utilizador pode interagir com um sistema — é a parte "visível" do sistema. Permite ao utilizador interagir com a aplicação e realizar as suas tarefas.

:::

A UI é o ponto de interação pessoa-máquina e o meio de comunicação num dispositivo. Inclui, por exemplo, elementos como **ecrãs**, **botões**, **teclados** e um **rato**.

Existem vários tipos de UI, incluindo, entre muitos outros:

- interface gráfica (GUI - _Graphical User Interface_)
- interface por linha de comandos (CLI - _Command Line Interface_)
- interface por voz (VUI - _Voice User Interface_)
- interface por linguagem natural (NLUI - _Natural Language User Interface_)

### Experiência do Utilizador (UX)

Quando se fala de UI, é quase impossível não referir outro conceito, a **experiência do utilizador** (ou, mais frequentemente, **UX - _User eXperience_**, em inglês).

:::tip[Experiência do Utilizador]

A **experiência do utilizador**, ou **experiência de utilização**, consiste na experiência global de uma pessoa com um sistema, especialmente no que toca à facilidade de utilização ou quão satisfatório é o seu uso.

:::

A UX garante interações com propósito e envolve uma componente afetiva, apelando às emoções da pessoa na utilização da tecnologia.

### UI vs UX

Apesar de relacionados, UI e UX são termos completamente separados e representam conceitos distintos com focos diferentes.

| [**User Interface (UI)**](color:blue) | [**User Experience (UX)**](color:orange) |
| ------------------------------------- | ---------------------------------------- |
| [**_utilizador_**](color:green)       | [**_pessoa_**](color:green)              |
| [**_usabilidade_**](color:pink)       | [**_experiência_**](color:pink)          |
| mais objetiva                         | mais subjetiva                           |
| "o que fazer"                         | "o que atingir"                          |
| "elementos visuais"                   | "experiências"                           |
| "desejável"                           | "credível"                               |
| foco nas ferramentas                  | foco na interação                        |

## Mitos de Bom _Design_

Existem algumas ideias erradas sobre _design_ que devem ser salientadas:

### 1. Bom _design_ é bons gráficos ❌

Apesar de gráficos serem importantes, relacionando-se com o que queremos comunicar e como, não é suficiente ter bons gráficos: é necessário também **considerar os utilizadores**.

### 2. Marketing conhece os utilizadores ❌

Marketing foca-se em dados demográficos, não sabendo o **comportamento humano**. Existe uma grande distinção entre **o que os utilizadores dizem e o que fazem**, sendo portanto relevante a diferença entre questionários e a observação.

> "If I had asked people what they wanted, they would have said faster horses..." **- Henry Ford**

### 3. Bom _design_ é senso comum ❌

Se assim o fosse, não existiriam tantos maus _websites_ nem tantas _apps_ difíceis de utilizar. Bom _design_ é algo complexo e requer peritos no assunto.

### 4. A interface é feita no final ❌

A interface deve ser construída com base nas **necessidades do utilizador** e o sistema deve ser construído com base nas **necessidades da interface**. Fazê-lo pela ordem inversa levará provavelmente a que sejam necessários ajustes e mudanças, mudanças estas que implicam custos e níveis monetários e de tempo perdido.

> "... The needs of the users should dominate the design of the interface, and the needs of the interface should dominate the design of the rest of the system." **- Don Norman**

## Modelo de Desenho

### Modelo Cascata

O modelo em cascata é um padrão de gestão de projetos que se organiza da seguinte forma:

![Modelo Cascata](./assets/0001-modelo-cascata.png#dark=1)

Contudo, este modelo tem um problema crítico na sua base: as transições entre estados são unidirecionais. Se, por exemplo, a fase de testes falhar, o modelo não especifica como se deve proceder e voltar atrás — não está preparado para falhas.

### Modelo Desenho Iterativo

Como, então, fazer boas interfaces?

Deve-se recorrer a um modelo de **desenho iterativo**:

![Modelo Desenho Iterativo](./assets/0001-modelo-desenho-iterativo.png#dark=1)

Este modelo utiliza uma filosofia de **fail fast**:

- falhar _rápido_, _cedo_ e _repetidamente_;
- iterar o máximo possível;
- idear-prototipar-testar.

Envolve várias etapas:

![Etapas do Desenho Iterativo](./assets/0001-etapas-desenho-iterativo.png#dark=4)

1. **Identificar necessidades, estabelecer requisitos**
   - Quem são os utilizadores?
   - Que funcionalidades pretendem?
   - Onde realizam as tarefas?
2. **Gerar ideias**
   - Explorar muitas soluções
   - Utilizar pensamento divergente
   - Diversificar
   - Evitar _bias_
3. **Conceber soluções**
   - Usar um **modelo conceptual**, central no _design_ de interações
   - Criar soluções alternativas
4. **Prototipar soluções**
   - Criar protótipos que identifiquem problemas no início
     - Não funcionais (em papel)
     - Funcionais (código)
5. **Avaliar e refinar protótipos**
   - Por peritos
   - Usando modelos
   - Envolvendo utilizadores
   - Identificar problemas de usabilidade

### Os dois _mantras_ de IPM

- [**Conhecer os utilizadores**](color:orange)
  - Tanto a nível de capacidades físicas, cognitivas e sensoriais como o contexto social que os rodeia, entre outros fatores
- [**"O utilizador não é como eu"**](color:orange)
  - Erro mais comum — não somos utilizadores típicos, conseguimo-nos adaptar a más interfaces
