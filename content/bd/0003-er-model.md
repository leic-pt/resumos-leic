---
title: Modelo EA
description: >-
  Modelo Entidade-Associação.
  Entidades e Atributos.
  Associações Binárias e Ternárias. Restrições de Cardinalidade e Participação.
  Generalizações e Especializações.
  Restrições de Identidade.
  Entidades Fracas.
  Agregações.
path: /bd/er-model
type: content
---

# Modelo Entidade-Associação

```toc

```

## O que é?

O [Modelo Entidade-Associação](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model)
permite-nos exprimir as necessidades do domínio de uma aplicação.
Ao construir um Modelo E-A, conseguimos mais tarde determinar que tabelas e
colunas necessitamos na nossa base de dados.

Com este modelo conseguimos exprimir:

- Entidades
  - Entidades Fracas
- Atributos de Entidades
  - Chaves Primárias
- Associações (Relações)
- Agregações
- Generalizações/Especializações

Por vezes o modelo não é suficiente para representar todos os requisitos da nossa
aplicação. Podemos assim recorrer também a [**Restrições de Integridade**](color:yellow)
(_Integrity Contraints_) quando necessário.

## Entidades e Atributos

Uma [**entidade**](color:orange) pode conter vários [**atributos**](color:green),
sendo que alguns desses atributos podem ser a sua chave primária.  
Dizemos que os atributos que contituem a chave primária são os atributos
que **caracterizam** a entidade.

Exemplos de entidades são "Pessoa", "Produto", "Compra", etc.  
Exemplos de atributos, neste caso de uma "Pessoa", são "número cartão de cidadão",
"nome", "sexo", "data de nascimento", etc.

![Exemplo de Entidade (Pessoa) no Modelo E-A](./assets/0003-er-entity.svg#dark=3)

As [**entidades**](color:orange) são representadas por um retângulo, enquanto que
os [**atributos**](color:green) são representados por uma elipse.
Os atributos que são chave primária representam-se a sublinhado.

[**Pelo menos**](color:red) um atributo tem de ser uma chave primária.

## Associações (Relações)

Uma associação entre **duas ou mais** entidades representa a relação entre
elas.

Como exemplo simples, podemos pensar que uma "Compra" contém "Produtos", pelo
que estão relacionados.  
Podemos representar esta associação com a seguinte notação:

![Exemplo de Associação (Compra-Produto) no Modelo E-A](./assets/0003-er-relationship.svg#dark=3)

As associações têm normalmente um nome, único em todo o diagrama, que normalmente
é um verbo.

As associações são adirecionais, mas podemos utilizar os símbolos `>` e `<` para
desambiguar alguns casos.

Algumas associações podem também conter atributos. No entanto, é importante ter em
conta que se tivermos muitos atributos numa associação, pode valer a pena criar
uma nova entidade.

Tomemos um cenário em que temos uma relação Fornecedor-Loja, em que existe um
número máximo de produtos mensais que podem ser encomendados pela loja ao fornecedor.
A associação entre a entidade Fornecedor e a entidade Loja tem assim um atributo:
o número máximo de produtos mensais.  
Representamos uma associação com atributos das seguinte forma:

![Exemplo de Associação (Fornecedor-Loja) com um atributo no Modelo E-A](./assets/0003-er-relationship-attributes.svg#dark=3)

### Associações Ternárias

Nada nos impede de criar associações entre três ou mais entidades.
Atenção que estas podem, por vezes, ser pouco explícitas. Alternativamente, podemos
criar uma [agregação](#agregações), que, além de mais mais explícita, dá-nos maior
flexibilidade a definir [restrições](#restrições).

Voltando ao exemplo da _Compra_ e do _Produto_, tomemos outra entidade, _Cliente_,
que passa a fazer parte da relação.

![Exemplo de Associação (Compra-Cliente-Produto) no Modelo E-A](./assets/0003-er-relationship-ternary.svg#dark=3)

### Restrições

Existem dois tipos de restrições que podemos aplicar a associações:
[**restrições de cardinalidade**](color:pink) e [**restrições de participação**](color:purple).

As [**restrições de cardinalidade**](color:pink) referem a multiplicidade da relação,
isto é, _one-to-one_, _one-to-many_ ou _many-to-many_.

![Restrições de cardinalidade: one-to-one, one-to-many e many-to-many](./assets/0003-er-cardinality-constraints.svg#dark=3)

As [**restrições de participação**](color:purple) indicam se é necessário a
associação existir ou não.

![Restrições de participação: opcional, obrigatório e mútuo](./assets/0003-er-participation-constraints.svg#dark=3)

Podemos aplicar ambas as restrições simultaneamente.

:::info[Exemplos]

1. Um aluno pode estar inscrito em várias disciplinas e cada disciplina tem
   vários alunos, sendo que cada disciplina tem pelo menos 1 aluno.

   ![Exemplo da Relação Aluno-Disciplina](./assets/0003-er-relations-example-student-course.svg#dark=3)

2. Existe um delegado para cada curso, sendo que cada curso tem obrigatoriamente
   um e só um delegado. Um aluno só pode ser delegado de um curso.

   ![Exemplo da Relação Delegado-Curso](./assets/0003-er-relations-example-delegate-degree.svg#dark=3)

:::

## Generalizações/Especializações

Membro -> (Sócio, Não Sócio) | Gestor | (Regular, Não Regular)
Sócio -> (Sócio Bronze, Sócio Silver, Sócio Gold)

Por vezes duas entidades diferem por poucos ou até nenhum atributo. Quando isto
acontece, podemos estar num caso em que podemos generalizar/especializar uma entidade noutras.
Um exemplo fácil de perceber é o caso Professor/Aluno. Ambos têm um _nome_, _cartão de cidadão_,
_data de nascimento_, etc. Podemos criar uma entidade [_Pessoa_](color:green) que tem
duas especialidades, [_Professor_](color:orange) e [_Aluno_](color:yellow), e que tenha
também estes atributos comuns:

![Exemplo da Especialização de Pessoa em Professor/Aluno](./assets/0003-teacher-student-example.svg#dark=3)

De realçar que cada uma das especializações pode ter atributos adicionais.
Isto é particularmente relevante quando temos atributos "opcionais": muitas vezes
estes podem ser modelados mais corretamente através de uma especialização.

Agora que delimitámos o **porquê** de querermos criar generalizações/especializações,
vamos ver algumas das suas propriedades e o que podemos fazer com elas.

Podemos, tal como nas associações, aplicar restrições às especializações:

- podemos obrigar a que exista a especialização
- podemos obrigar a que a especialização seja disjunta, isto é, não pode ser também
  outra instância de outra especialização

Como nas associações, é também possível aplicar ambas as restrições simultaneamente.
As bolinhas azuis nos diagramas de Venn indicam onde podem existir entidades dentro
das especializações possíveis.

![Restrições de Especializações: Visualização da notação e diagramas Venn](./assets/0003-types-of-specializations.svg#dark=3)

Para conseguir ilustrar tudo, vamos tomar um exemplo mais complexo. Temos um clube
que contém membros. Esses membros podem ser [sócios](color:green), [gestores](color:orange)
ou nenhum dos dois.
Cada sócio tem um _tier_, consoante as quotas que pagam: [_bronze_](color:brown),
[_silver_](color:blue) e [_gold_](color:yellow). Os sócios são identificados pelo
número de sócio.  
Finalmente, consoante a frequência que o membro interage com o clube, pode também
ser classificado como [regular](color:green) ou [ocasional](color:red).

Vamos então começar a modelar esta situação. Ao lado do modelo E-A, irá ser também
apresentado um diagrama de Venn, de forma a clarificar o significado de cada símbolo.

O primeiro passo é criar a especialização [sócio](color:green) e [gestor](color:orange).
Um membro pode não ser nenhum deles (isto é, ser apenas membro), como pode ser ambos simultaneamente.

![Exemplo da especialização de sócio e gestor num membro](./assets/0003-club-example-1.svg#dark=3)

De seguida, criamos outra especialização, a frequência. Será que faz sentido especializar
tanto o _sócio_ como _gestor_? [**NÃO**!](color:red) Isso resultaria em duplicação
de especializações, como podemos ver abaixo. Se tivéssemos ainda mais especializações
abaixo destas, criaríamos uma árvore muito grande para obtermos as combinações todas.

![Exemplo do que não se deve fazer a especializar em níveis abaixo](./assets/0003-club-example-wrong-specialization.svg#dark=3)

Como podemos resolver entre problema? É simples, criamos outra especialização ao
mesmo nível daquela que já existe. Isto permite existir as várias combinações,
preservando a facilidade de leitura e simplicidade do modelo.  
Sabemos que um _membro_ tem de ser obrigatoriamente [regular](color:green) ou
[ocasional](color:orange), mas não pode ser ambos simultaneamente.

![Exemplo da especialização de regular e ocasional num membro](./assets/0003-club-example-2.svg#dark=3)

Finalmente, podemos criar as especializações do _tier_ de sócio. Como seria de
esperar, estes _tiers_ vão ser especializações de [sócio](color:green).
Um [sócio](color:green) tem obrigatoriamente um e apenas um _tier_.

![Exemplo da especialização do tier de um sócio](./assets/0003-club-example-3.svg#dark=3)

## Restrições de Integridade

// TODO

## Entidades Fracas

// TODO

## Agregações

// TODO
