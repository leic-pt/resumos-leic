---
title: Refactoring e Reutilização de Software
description: >-
  Refatorização e Reutilização de Software
path: /es/refactoring
type: content
---

# Refactoring e Reutilização de Software

```toc

```

## Reutilização de Software

Software pode ser reutilizado de várias formas:

**Libraries**: adaptam através de parametrização, reutilizam código

**Frameworks**: adaptam através de extensão, reutilizam design

- Em _libraries_, o nosso código invoca o da _library_, que por sua vez executa e devolve controlo ao nosso programa

- No entanto, em _frameworks_, ao reutilizarmos o design, utilizamos a framework como um esqueleto do programa, no qual o nosso código é incorporado. Assim, damos o _flow control_ do programa à framework. Este princípio de delegação de controlo à framework é chamado de _Hollywood Principle: "Don't call us, we'll call you"_, embora seja também conhecido como o princípio de inversão de controle (_Inversion of Control_).

**Code generators**: adaptam através da escrita de modelos e frases de alto nível, geram código e possibilitam _aspect-oriented development_ (e.g. JPA) e _model-driven engineering_ (e.g. OutSystems)

**Product Lines**: adaptam por seleção e extensão, com módulos comuns e módulos de variação

**Services**: adaptam através de parametrização, sendo a diferença destes e das bibliotecas, que estes partilham serviços

## Refactoring (Refatoração)

### Test Driven Development

> "Separating refactoring keeps work focused."

Test Driven Development (TDD) é uma abordagem de desenvolvimento em que primeiro escrevemos testes automáticos para validar uma funcionalidade desejada antes de implementá-la. O refactoring acontece após os testes passarem, quando revisamos e melhoramos o código, mantendo o mesmo comportamento correto. O fluxo básico no TDD é:

1. Desenvolver testes para a funcionalidade que vai ser implementada.
2. Implementar o mínimo de código para passar nos testes.
3. "Limpar" o código, tornando-o mais eficiente (refactoring).
4. Garantir que se passa nos testes após a limpeza do código.

:::tip[NOTA IMPORTANTE]

- A refatoração é um processo incremental. É importante que se façam mudanças pequenas de cada vez, para que o código **NUNCA** deixe de funcionar.

:::

Ao trabalhar no código, muitas vezes encontramos partes confusas ou mal escritas pelo que devemos estar sempre atentos e à "caça" de código de baixa qualidade.
Geralmente encontramos mau código quando se está a trabalhar noutra coisa, pelo que podemos tomar a decisão de refatorizá-lo na hora, ou fazê-lo mais tarde.

### Litter-Pickup

> "Always leave the code better than when you found it."

O _litter-pickup_, também conhecido como, _campsite rule_, consiste em sempre deixar o código melhor do que estava quando o encontrá-mos, qualquer seja a mudança realizada.

### Comprehension

> "Simple code is good code."

Código fácil de entender é valorizado pois torna a sua utilização e modificação futura também mais simples. Desta maneira estamos à procura de simplificar o código, tornando-o mais "legível".

### Preparatory

> "Make the change easy, then make the easy change."

Se ao adicionares novas funcionalidades perceberes que a estrutura não se adequa, refatora primeiro: isso facilita e acelera o processo, tal como preparar uma parede antes de pintar.

### Planned

> "Plan the cleanup, but keep the code clean."

Muitas equipas agendam a refatoração como parte do trabalho planeado, recorrendo a algo como _refactoring stories_ para corrigir grandes áreas de código problemático que exigem atenção dedicada.

### Long-Term

> "Refactor big, deliver small."

Algumas reestruturações prolongam-se por várias iterações, mas ainda assim podem ser feitas por refatoração gradual: a equipa acorda num objetivo, define um plano e aplica mudanças no trabalho normal para manter o código funcional. Uma técnica comum é _Branch By Abstraction_, que usa uma camada de abstração para suportar a implementação atual e a nova.

<!-- TODO: insert link for refactoring example movie rental -->
