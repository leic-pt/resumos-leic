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

### Processo de Refactoring

As abstrações dependem do contexto, e é difícil desenvolver boas abstraçẽs através de abordagens _top-down_.
Refactoring, é uma abordagem _bottom-up_ para a construção de abstrações a partir de casos de uso de código.

O processo de refactoring é precedido pelos seguintes passos:

1. Desenvolver testes para a funcionalidade que vai ser implementada.
2. Foco em implementar a funcionalidade corretamente, sem pensar na estrutura ótima.
3. Quando a funcionalidade estiver corretamente implementada e todos os testes passarem, podemos iniciar o processo de refactoring.

O processo de refactoring é caraterizado pelo seguinte ciclo:

1. Mudar a estrutura
2. Testar

:::tip[NOTA IMPORTANTE]

- A refatoração é um processo incremental. É importante que se façam mudanças pequenas de cada vez, para que o código **NUNCA** deixe de funcionar.

:::

### Tipos de Refactoring

:::warning[Secção Incompleta]
Esta secção encontra-se incompleta. Procuram-se contribuidores.
:::

- **Test Driven Development**

- **Litter-Pickup**

- **Comprehension**

- **Preparatory**: "make the change easy, then make the easy change"

- **Planned**

- **Long-Term**: substituir uma abstração com uma nova interface

<!-- TODO: insert link for refactoring example movie rental -->
