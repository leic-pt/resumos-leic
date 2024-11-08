---
title: Code Coverage, Testes de Objeto e Componente
description: >-
  Code Coverage: statement, branch, condition e path coverage.
  Testes de Objeto (Object Testing)
  Testes de Componente (Component Testing)
path: /es/code-coverage
type: content
---

# Code Coverage, Testes de Objeto e Componente

```toc

```

## Code Coverage

Em _white-box testing_, podemos definir uma métrica que nos indica a percentagem
do nosso código que é testado, chamada de _code coverage_.

:::tip[Code Coverage]

Consiste numa aplicação de _**white-box testing**_ para determinar a percentagem de código
que é executado quando um dado conjunto de testes é corrido.
Quanto maior for a _code coverage_, há mais código a ser executado, o que **aumenta a
probabilidade de encontrar bugs**.

:::

No entanto, existem diversos critérios que podemos aplicar, cada um com as suas
vantagens e desvantagens:

- [**_Statement Coverage_**](color:green)
- [**_Branch Coverage_**](color:orange)
- [**_Condition Coverage_**](color:yellow)
- [**_Path Coverage_**](color:blue)

Para exemplificar cada um dos critérios acima, teremos em conta o pseudocódigo seguinte, assim
como o gráfico correspondente às suas possíveis execuções:

![Pseudo-código e respetivo CFG](./assets/0004-code-cfg-example.png#dark=2)

Mais exemplos podem ser encontrados [aqui](https://sqa.stackexchange.com/questions/20226/how-do-we-calculate-statement-coverage-branch-coverage-path-coverage-and-cond).

### Statement Coverage

A [_Statement Coverage_](color:green) de um programa relaciona-se com a percentagem das linhas de
código que são executadas com um dado conjunto de testes. Temos _Statement Coverage_ completa quando
os testes garantem que **todas as linhas de código são executadas pelo menos uma vez**.

Tendo em conta o exemplo acima, consideremos dois casos de teste:

- Test Case 1: `(b0 && b1) = true`, `b2 = true`
- Test Case 2: `(b0 && b1) = false`, `b2 = false`

Verifica-se que, para executar 100% das linhas do programa, basta ter o Test Case 1, o que nos dá
uma _Statement Coverage_ completa, enquanto o Test Case 2 apenas excuta 75% das linhas.

![Exemplo de Statement Coverage](./assets/0004-statement-coverage.png#dark=2)

### Branch Coverage

A [_Branch Coverage_](color:orange) de um programa relaciona-se com a percentagem de condições que são
avaliadas com um dado conjunto de teste. Temos _Branch Coverage_ completa quando os testes garantem que
**todas as condições são avaliadas como verdadeiras e falsas**.

Tendo em conta o exemplo acima, consideremos dois casos de teste:

- Test Case 1: `(b0 && b1) = true`, `b2 = true`
- Test Case 2: `(b0 && b1) = false`, `b2 = false`

Verifica-se que ambos os testes apenas testam 50% das condições possíveis, pelo que, para termos
_Branch Coverage_ completa, temos de considerar, pelo menos, ambos os test cases.

![Exemplo de Branch Coverage](./assets/0004-branch-coverage.png#dark=2)

### Condition Coverage

A [_Condition Coverage_](color:yellow) de um programa relaciona-se com a percentagem de subexpressões
booleanas de condições que são avaliadas como verdadeiro e falso. Temos _Condition Coverage_ completa
quando os testes garantem que **todas as componentes de uma condição são avaliadas como verdadeiras e
como falsas**.

Tendo em conta o exemplo acima, consideremos três casos de teste:

- Test Case 1: `b0 = true`, `b1 = false`, `b2 = false`
- Test Case 2: `b0 = false`, `b1 = true`, `b2 = true`
- Test Case 3: `b0 = true`, `b1 = true`, `b2 = true`

Verifica-se que, tendo em conta apenas os dois primeiros test cases, as condições `b0` e `b2` são
ambas avaliadas como verdadeiro e falso. No entanto, devido à presença da conjunção (`&&`), a condição
`b1` apenas é avaliada como falsa, dado que `b0 = false` e `(b0 && _)` vai ser sempre falso independentemente
da segunda condição, que acaba por não ser avaliada. Assim, para ter _Condition Coverage_ completa, temos
de incluir todos os três test cases.

![Exemplo de Condition Coverage](./assets/0004-condition-coverage.png#dark=2)

:::danger[Disjunções e Conjunções]

Para verificar _Condition Coverage_, é preciso ter em atenção as disjunções (`||`) e as conjunções (`&&`)
presentes no código, assim como a ordem pela qual as condições aparecem.

:::

### Path Coverage

A [_Path Coverage_](color:blue) de um programa relaciona-se com todos os caminhos independentes que podem ser
percorridos. Temos _Path Coverage_ completa quando **todos os caminhos independentes são executados**.

:::tip[Caminho Independente]

Um caminho independente num programa é um que atravessa pelo menos uma nova aresta do grafo de execução
do programa.

O número de caminhos independentes pode ser obtido a partir da seguinte maneira:

- Um corresponde ao caminho default;
- Há mais um caminho por cada instrução `if`, `while`, `repeat`, `for`, `and` e `or`;
- Há mais um caminho por cada `case` numa instrução `switch`, havendo ainda mais um
  caso não haja um caso default.

$ \text{Número de Caminhos Independentes} = \text{Número de Decisões} + 1 $

:::

Tendo em conta o exemplo acima, consideremos dois casos de teste:

- Test Case 1: `(b0 && b1) = true`, `b2 = true`
- Test Case 2: `(b0 && b1) = false`, `b2 = true`
- Test Case 3: `(b0 && b1) = true`, `b2 = false`

Verifica-se que, a cada test case, estamos a percorrer uma aresta no grafo que ainda não tinha sido percorrida,
pelo que necessitamos dos três test cases para ter _Path Coverage_ completa.

![Exemplo de Path Coverage](./assets/0004-path-coverage.png#dark=2)

## Testes de Objeto

Os testes de objeto são usados especialmente no contexto de programação orientada a objetos. Ao contrário dos testes
unitários, que testam funções e métodos de forma isolada, os testes de objeto testam **sequências de métodos**.

No contexto dos testes de objeto, é importante saber o conceito de **Classe Modal**.

:::tip[Classe Modal]

Uma classe modal é uma classe onde o seu estado interno afeta o resultado de certas sequências de invocação
de métodos. Costumam ser o alvo principal dos testes de objeto.

:::

As sequências de métodos a testar dependem de fatores como a longevidade do objeto em questão e devem ser feitas
de acordo com o diagrama de estados desse objeto.

## Testes de Componente

Os testes de componente costumam ser os **últimos testes** a ser executados (após os testes de unidade e de objeto) e
tratam de verificar a **interação entre interfaces** de diferentes componentes e classes. O principal objetivo destes
testes é [encontrar fragilidades que resultem da interação entre unidades](color:red).

Alguns dos erros relacionados com o uso de interfaces são:

- **_Interface Misuse_**: quando uma interface é usada incorretamente (como por exemplo, chamar uma função ou método
  com os parâmetros por ordem errada);
- **_Interface Misunderstanding_**: quando uma componente invoca outra assumindo comportamentos errados acerca dela;
- **_Timing Errors_**: as componentes invocadora e invocada operam a velocidades diferentes, resultando em operações
  fora de ordem ou informação desatualizada.

Podemos testar as componentes todas ao mesmo tempo (_Big Bang Integration_) ou incrementalmente (_Bottom-up_ ou _Top-down
integration_), sendo que a escolha depende de fatores como a dependência entre unidades e a dificuldade de encontrar falhas
no sistema.

- [**_Big Bang Integration_**](color:orange): testa todas as componentes e todas as interações ao mesmo tempo.

![Diagrama sobre Big Bang Integration](./assets/0004-big-bang-integration.png#dark=2)

- [**_Bottom-up Integration_**](color:purple): testa primeiro as componentes de mais baixo nível e vai acrescentando
  incrementalmente módulos de mais alto nível.

![Diagrama sobre Bottom-up Integration](./assets/0004-bottom-up-integration.png#dark=2)

- [**_Top-down Integration_**](color:green): testa primeiro as componentes de mais alto nível (recorrendo a _test doubles_ para
  simular o comportamento de componentes mais baixas) e vai acrescentando incrementalmente módulos de mais baixo nível.

![Diagrama sobre Bottom-up Integration](./assets/0004-top-down-integration.png#dark=2)

## Pirâmide de Teste

A pirâmide de teste (**_Test Pyramid_**) é um indicador de quantos testes de cada tipo devem ser criados para avaliar corretamente
um sistema. Há vários modelos de pirâmides de teste, sendo que as versões faladas em aula são a de Mike Cohn (descrita no livro
_Succeeding with Agile: Software Development Using Scrum_ ou acedendo [aqui](https://martinfowler.com/articles/practical-test-pyramid.html))
e a da Google (descrita no livro _Software Engineering at Google_).

![Pirâmides de teste de Mike Cohn e da Google](./assets/0004-test-pyramids.png#dark=2)
