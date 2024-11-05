---
title: Testes e Testes de Unidade
description: >-
  Testes.
  Testes de Unidade (Unit Tests).

  White Box e Black Box testing strategies.
  Partition testing.
  Test doubles.
path: /es/unit-tests
type: content
---

# Testes e Testes de Unidade

```toc

```

Os testes automáticos permitem-nos ter confiança de que o nosso código funciona
e que não sofreu regressões (i.e. algo que funcionava deixou de funcionar) devido
a alterações não relacionadas.  
No entanto, é importante ter em conta que ter todos os testes a passar
**não significa que o programa está livre de _bugs_**.

## Fases de Testagem

Existem 3 grandes fases onde os sistemas são testados:

- [**_Development Testing_**](color:green): o sistema é testado pelos **_developers_**
  durante o desenvolvimento. Pode tomar a forma de _unit testing_, _component testing_
  ou _system testing_.
- [**_Release testing_**](color:yellow): antes de uma nova versão do sistema ser
  lançada e disponibilizada aos utilizadores, os **_QA Engineers_**, uma equipa
  separada da equipa de desenvolvimento, testam todo o sistema.
- [**_User testing_**](color:red): os **utilizadores** do sistema testam o sistema,
  por exemplo, através de uma versão _beta_ ou _alpha_ lançada antes da versão final.

## Estratégias de Testagem

- [**_Black box testing_**](color:pink): os testes são feitos a partir de uma **especificação**,
  isto é, a descrição que levou à implementação.
- [**_White box testing_**](color:blue): os testes são feitos contra uma **implementação** específica.

:::info[Exemplo]

Imaginemos que temos uma estrutura do tipo FIFO implementada e queremos
testar o método `fifo.push()`.

No caso de não conhecermos a implementação (caso [_black box_](color:pink)), o óbvio
seria testar o caso em que a fifo está vazia, e o caso em que não está.

No entanto, se soubermos que a estrutura utiliza arrays de 512 elementos na
sua implementação, podemos (e devemos) também testar o caso em que é adicionado
um elemento a uma FIFO com 512 elementos (caso [_white box_](color:blue)).

:::

## Testagem de Partições

Quando estamos a testar um sistema, existem vários inputs (e os respetivos outputs)
que se comportam de forma semelhante.
Podemos, então, agrupar estes inputs quando escrevemos testes, numa técnica chamada
**Testagem de Partições** (ou, em inglês, [_equivalence partitioning testing_](https://en.wikipedia.org/wiki/Equivalence_partitioning)).

:::tip[Partition Testing]

Consiste em encontrar grupos de inputs (que não se intercetam) que se espera
que tenham um mesmo comportamento.  
De seguida, cria-se testes para cada um destes grupos.

:::

Uma técnica usada em conjunto com a testagem de partições é a
análise de valores fronteira ([_boundary-value analysis_](https://en.wikipedia.org/wiki/Boundary-value_analysis)),
isto é, os valores que delimitam as várias partições.

:::info[Exemplo]

Vamos imaginar uma função `passOrFail(int grade)` que retorna `"pass"` se a nota
for entre 10 e 20 (inclusive), `"fail"` se a nota for entre 0 e 9 (inclusive) e
lança uma exceção para qualquer outro valor.

Seguindo a testagem de partições, vamos dividir o nosso espaço em 4 diferentes partições.

```
...    -1 | 0 ... 9 | 10 ... 20 | 21    ...
-------------------------------------------
exception |  fail   |   pass    | exception
```

Considerando apenas a testagem de partições, temos de testar um valor
de cada uma das partições, por exemplo, -2, 4, 15 e 22.

No entanto, geralmente queremos também efetuar _boundary-value analysis_, pelo que
queremos incluir nos nossos testes os valores fronteira, -1, 0, 9, 10, 20 e 21.

Assim, se seguirmos ambos os métodos, os nossos testes deverão abranger 10 valores
diferentes e 4 partições.

:::

## Testes Unitários

Os Testes Unitários (_Unit Tests_) servem para testar os vários componentes
individualmente, isolados do resto do sistema.

As várias **unidades** podem ser:

- Funções ou métodos de um objeto
- Classes de objetos com vários atributos e métodos
- Componentes compostos (_composite components_) com interfaces bem definidas
  que permitem aceder à sua funcionalidade.

Para termos _coverage_ total de uma classe, temos de:

- Testar todas as operações associadas a um objeto;
- Fazer _set_ e _get_ de todos os atributos do objeto;
- Utilizar o objeto em todos os seus estados possíveis.

## Testes Automáticos

A utilização de testes automáticos (_Automated Testing_) deve ser prioritária para evitar
ao máximo testagem e verificação manual. Para tal, podem ser usados frameworks como o _Spock_ ou
o _JUnit_.

As principais componentes de um teste automático são:

- [**_Setup_**](color:purple): inicialização do sistema com o caso a testar (como os respetivos inputs e outputs);
- [**_Call_**](color:green): chamada da função ou do objeto a ser testado;
- [**_Assertion_**](color:orange): comparação do resultado da _Call_ com o valor esperado, tendo o teste sucesso caso
  a comparação seja verdadeira e falhado caso contrário.

:::details[Exemplos de testes automáticos]

Considerando os seguintes testes automáticos, em que o primeiro testa um objeto e o
segundo testa o valor de uma operação:

```java
def "Should be able to remove from list"() {
  given:
    def list = [1, 2, 3, 4]
  when:
    list.remove(0)
  then:
    list == [2, 3, 4]
}
```

```java
def "a number to the power of another"(int a, int b, int c) {
  expect:
    Math.pow(a, b) == c
  where:
    a | b | c
    1 | 2 | 1
    2 | 2 | 4
    3 | 2 | 9
}
```

Vemos que um teste pode ser constituído por cinco blocos:

- o bloco `given` declara todas as todas as variáveis e informações necessárias
  para a execução do teste, sendo parte do _Setup_;
- o bloco `when` chama o método ou operação a ser testado, sendo parte do _Call_;
- o bloco `then` compara o resultado esperado com o resultado obtido, sendo parte
  do _Assertion_;
- o bloco `expect` chama a operação a ser testada e compara logo o resultado, sendo parte
  do _Call_ e do _Assertion_;
  - Este bloco só é usado para comparações simples, onde muitas vezes nem é necessário
    o bloco `given`, pelo que o uso de blocos `when` e `then` é preferível quando
    há uma maior distinção entre a ação e o resultado.
- o bloco `where` normalmente define uma tabela de dados para utilizar como inputs diferentes
  para o mesmo teste, sendo que o teste só tem sucesso se tiver sucesso para todos os dados da tabela.

:::

## Test Doubles

Os _test doubles_ são objetos falsos que são usados no lugar de objetos verdadeiros
em testes.  
Estes podem ser:

- **Dummy objects**: são passados como argumentos de funções, mas nunca são usados;
- **Fake objects**: têm implementação funcional, mas algum aspeto seu torna-os inviáveis
  para utilização externa;
- **Stubs**: retornam respostas pré-definidas quando são chamados em testes, não respondendo
  a nada além daquilo para que foram programados;
- **Spies**: são stubs que guardam alguma informação sobre como foram chamados;
- **Mocks**: objetos pré-programados com expectativas de como se devem comportar quando forem
  chamados.

Estes têm a vantagem de isolar os testes a uma única unidade, de diminuir
as dependências ao efetuar testes e também simular casos difíceis de gerar.

## Análise e Inspeção de Software

É prática comum haver um grupo de pessoas que analisa partes ou todo um sistema de software
(desde o código, ao design, às especificações, aos testes), assim como toda a documentação associada.
Idealmente, essa revisão deve ser feita aos poucos, uma feature de cada vez, porque senão há
de demorar mais tempo e será mais difícil para quem está a analisar.

Inspecionar o código de um programa é importante para:

- encontrar bugs, comportamentos inesperados e features impossíveis de implementar;
- garantir que os programadores não falsificaram, não aplicaram más práticas e seguiram as
  guidelines definidas;
- orientar novos colaboradores, ajudando-os a perceber potenciais erros que tenham cometido.

A inspeção de código pode ser feita através das seguintes formas:

- Alternar entre revisores e autores;
- Processo social: expor a todos os erros dos autores;
- Gestão humana: não focar demasiado nos aspetos negativos, ser educado e respeitoso;
- Ajudar a perceber os erros e dizer como se pode melhorar.

Todas estas práticas fazem com que [a qualidade de código melhore com o tempo](color:blue).
