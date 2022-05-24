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
Ao construir um Modelo E-A, conseguimos, mais tarde, determinar de que tabelas e
colunas necessitamos na nossa base de dados.

Com este modelo conseguimos exprimir:

- Entidades
  - Entidades Fracas
- Atributos de Entidades
  - Chaves Primárias
- Associações (Relações)
- Agregações
- Generalizações/Especializações

Por vezes, o modelo não é suficiente para representar todos os requisitos da nossa
aplicação. Podemos, assim, recorrer também a [**Restrições de Integridade**](color:yellow)
(_Integrity Contraints_), quando necessário.

## Entidades e Atributos

Uma [**entidade**](color:orange) pode conter vários [**atributos**](color:green),
sendo que alguns desses atributos podem ser a sua chave primária.  
Dizemos que os atributos que constituem a chave primária são os atributos
que **caracterizam** a entidade.

Exemplos de entidades são _Pessoa_, _Produto_, _Compra_, etc.  
Exemplos de atributos, no caso da entidade _Pessoa_, são _número do cartão de cidadão_,
_nome_, _sexo_, _data de nascimento_, etc.

![Exemplo de Entidade (Pessoa) no Modelo E-A](./assets/0003-er-entity.svg#dark=3)

As [**entidades**](color:orange) são representadas por um retângulo, enquanto que
os [**atributos**](color:green) são representados por uma elipse.
Os atributos que são chave primária distinguem-se dos restantes pelo sublinhado.

[**Pelo menos**](color:red) um atributo tem de ser uma chave primária.

## Associações (Relações)

Uma associação entre **duas ou mais** entidades representa a relação entre
elas.

Como exemplo simples, podemos pensar que uma _Compra_ contém _Produtos_, pelo
que estão relacionados.  
Podemos representar esta associação com a seguinte notação:

![Exemplo de Associação (Compra-Produto) no Modelo E-A](./assets/0003-er-relationship.svg#dark=3)

As associações têm normalmente um nome, único em todo o diagrama, que normalmente
é um verbo.

Para além disso, não têm direção, mas podemos utilizar os símbolos `>` e `<` para
desambiguar alguns casos.

Algumas associações podem também conter atributos. No entanto, é importante ter em
conta que se tivermos muitos atributos numa associação, pode justificar-se a criação de
uma nova entidade.

Tomemos um cenário em que temos uma relação _Fornecedor_-_Loja_ e em que existe um
número máximo de produtos mensais que podem ser encomendados pela loja ao fornecedor.
A associação entre a entidade _Fornecedor_ e a entidade _Loja_ tem assim um atributo:
o número máximo de produtos mensais.  
Representamos uma associação com atributos das seguinte forma:

![Exemplo de Associação (Fornecedor-Loja) com um atributo no Modelo E-A](./assets/0003-er-relationship-attributes.svg#dark=3)

### Associações Ternárias

Nada nos impede de criar associações entre três ou mais entidades.
Atenção que estas podem, por vezes, ser pouco explícitas. Alternativamente, podemos
criar uma [agregação](#agregações), que, para além de ser mais explícita, dá-nos maior
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

Por vezes, duas entidades diferem por poucos ou até nenhum atributo. Quando isto
acontece, podemos estar num caso em que conseguimos generalizar/especializar uma entidade noutras.
Um exemplo fácil de perceber é o caso Professor/Aluno. Ambos têm um _nome_, _cartão de cidadão_,
_data de nascimento_, etc. Podemos criar uma entidade [_Pessoa_](color:green) que tem
duas especialidades, [_Professor_](color:orange) e [_Aluno_](color:yellow), e que tenha
também estes atributos comuns:

![Exemplo da Especialização de Pessoa em Professor/Aluno](./assets/0003-teacher-student-example.svg#dark=3)

É de realçar que cada uma das especializações pode ter atributos adicionais.
Isto é particularmente relevante quando temos atributos "opcionais": muitas vezes
estes podem ser modelados mais corretamente através de uma especialização.

Agora que delimitámos o **porquê** de querermos criar generalizações/especializações,
vamos ver algumas das suas propriedades e o que podemos fazer com elas.

Podemos, tal como nas associações, aplicar restrições às especializações:

- podemos obrigar a que exista a especialização
- podemos obrigar a que a especialização seja disjunta, isto é, não pode ser também
  uma instância de outra especialização

Como nas associações, é também possível aplicar ambas as restrições simultaneamente.
As bolinhas azuis nos diagramas de Venn (meramente ilustrativos; não fazem parte
do Modelo E-A) indicam onde podem existir entidades dentro das especializações possíveis.

![Restrições de Especializações: Visualização da notação e diagramas Venn](./assets/0003-types-of-specializations.svg#dark=3)

Para conseguir ilustrar tudo, vamos tomar um exemplo mais complexo. Temos um clube
que contém membros. Esses membros podem ser [sócios](color:green), [gestores](color:orange)
ou nenhum dos dois.
Cada sócio tem um _tier_, consoante as quotas que paga: [_bronze_](color:brown),
[_silver_](color:blue) e [_gold_](color:yellow). Os sócios são identificados pelo
número de sócio.  
Finalmente, consoante a frequência com que o membro interage com o clube, pode também
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
mesmo nível daquela que já existe. Esta abordagem permite que existam as várias combinações,
preservando a facilidade de leitura e simplicidade do modelo.  
Sabemos que um _membro_ tem de ser obrigatoriamente [regular](color:green) ou
[ocasional](color:orange), mas não pode ser ambos simultaneamente.

![Exemplo da especialização de regular e ocasional num membro](./assets/0003-club-example-2.svg#dark=3)

Finalmente, podemos criar as especializações do _tier_ de sócio. Como seria de
esperar, estes _tiers_ vão ser especializações de [sócio](color:green).
Um [sócio](color:green) tem obrigatoriamente um e apenas um _tier_.

![Exemplo da especialização do tier de um sócio](./assets/0003-club-example-3.svg#dark=3)

## Restrições de Integridade

Frequentemente, vamos precisar de incluir no nosso Modelo E-A certas restrições que
não são representáveis graficamente. Por esta razão, as [**Restrições de Integridade**](color:yellow)
(_Integrity Constraints_) são das poucas coisas que iremos representar textualmente.

É preciso ter em atenção que devemos [**evitar ao máximo**](color:red) utilizar representação textual,
usando sempre que possível a representação gráfica disponível no Modelo E-A
(e.g. nas multiplicidades das associações).

As restrições de integridade são indicadas no Modelo E-A com a notação **(RI - _X_)**
(em inglês, **(IC - _X_)**), onde _X_ é o número da restrição.  
O texto de cada restrição deve ser claro e objetivo, utilizando vocabulário de
obrigatoriedade ou proibições, sem nunca utilizar referências temporais.
Quando possível, é preferível separar uma restrição de integridade complexa
em várias mais simples.

:::info[Exemplo]

Imaginemos que temos uma cadeia de supermercados. Cada supermercado tem um supervisor,
que é escolhido entre os trabalhadores dessa loja. Adicionalmente, cada trabalhador tem
de trabalhar no mínimo 6h semanais por local de trabalho.  
Como podemos indicar no nosso Modelo E-A que o supervisor tem obrigatoriamente de trabalhar no supermercado?
E garantir que cada trabalhador trabalhe pelo menos 6h por semana em cada supermercado?
Com uma Restrição de Integridade!

![Aplicação de Restrições de Integridade ao Modelo E-A de uma cadeia de supermercados](./assets/0003-integrity-constraints-supermarket.svg#dark=3)

- **(IC - 1):** Um trabalhador **só pode** supervisionar um supermercado em que trabalha.
- **(IC - 2):** Um trabalhador **tem** de trabalhar pelo menos 6h semanais por supermercado.

_(atributos de Trabalhador e Supermercado omitidos por brevidade)_

:::

:::details[Mais exemplos]

**Atributo único**

![Restrição de Integridade: atributo com valor único](./assets/0003-integrity-constraints-unique.svg#dark=3)

- **(IC - 1):** O telemóvel de um utilizador **tem** de ser único.

---

**Associação Recursiva**

Quando temos uma associação recursiva, é útil definir restrições adicionais,
como **evitar associação de uma instância a si mesma**, **evitar dependências circulares**
ou mesmo **limitar a profundidade máxima**.

![Restrição de Integridade: circularidade](./assets/0003-integrity-constraints-circularity.svg#dark=3)

- **(IC - 1):** Uma categoria **não pode** ser sua sub categoria.

:::

## Entidades Fracas

Nem sempre conseguimos identificar uma entidade, isto é, por vezes, a sua chave não é suficiente para a definir.
Podemos ter, por exemplo, uma rua, um andar, etc. Cada um destes conceitos não pode existir
sem outro (e.g. freguesia e prédio, respetivamente).

Quando criamos uma entidade fraca, temos de indicar qual é a associação que passa a
identificar a entidade.
É possível, também, ter entidades fracas ligadas a entidades fracas, deste que tenham
uma ligação a uma entidade forte.

Modelando, por exemplo, as estradas de um distrito:

![Entidades Fracas: Concelho, Freguesia e Estrada](./assets/0003-weak-entities-streets.svg#dark=3)

## Agregações

Como referido nas [associações ternárias](#associações-ternárias), estas nem sempre são
claras nem flexíveis o suficiente.
Para resolvermos este problema, podemos utilizar uma notação do Modelo E-A chamada
[**agregação**](color:orange).

Com as agregações, podemos juntar associações de duas entidades e fazer com que estas
se comportem como apenas uma. No geral, **não** se deve utilizar uma agregação em mais do que
uma associação.  
Isto faz com que seja possível tornar a associação opcional ou definir multiplicidades
mais granularmente.

Podemos continuar a efetuar associações diretamente com entidades dentro da agregação.

Pegando num exemplo que ocorre no Fénix: agregamos a associação Disciplina/Semestre,
pelo que ganhamos granularidade na associação de professores à mesma.  
Podemos, no exemplo da esquerda, permitir que uma execução de uma disciplina não tenha
nenhum professor associado (embora não faça muito sentido), como também obrigar a que
tenha um ou mais, como no exemplo da direita.

![Agregação: Disciplina/Semestre](./assets/0003-aggregations-course-semester.svg#dark=3)

_(atributos das entidades omitidos por brevidade)_
