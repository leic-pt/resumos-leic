---
title: Álgebra Relacional
description: >-
  Álgebra Relacional: para que serve?
  Definição formal.
path: /bd/relational-algebra
type: content
---

# Álgebra Relacional

```toc

```

## O que é?

Quando efetuamos uma _SQL query_ numa base de dados, o SGBD converte essa _query_
numa expressão algébrica. O que é para nós uma linguagem facilmente compreensível (SQL)
é na verdade uma simplificação das expressões algébricas aplicadas a relações.

Uma [**expressão relacional (algébrica)**](color:yellow) recebe uma ou mais relações
e retorna apenas uma relação.

Vejamos agora que literais/operadores existem em álgebra relacional, isto é, qual a sua gramática formal:

| Nome                     | Representação                                     |
| ------------------------ | ------------------------------------------------- |
| Relação vazia            | $\emptyset$                                       |
| Literal de Relação       | $\{\lang v_1, \dots, v_n\rang, \dots \}$          |
| Nome de Relação/_relval_ | $r$                                               |
| Seleção                  | $\sigma_c(r)$                                     |
| Projeção                 | $\pi_{A_1, \dots, A_n}(r)$                        |
| Projeção Generalizada    | $\pi_{F_1, \dots, F_n}(r)$                        |
| Renomeação               | $\rho_{A_1\mapsto B_1,\dots, A_m \mapsto B_m}(r)$ |
| União                    | $r \cup s$                                        |
| Diferença                | $r - s$                                           |
| Interceção               | $r \cap s$                                        |
| Produto Cartesiano       | $r \times s$                                      |
| Divisão                  | $r \div s$                                        |
| Atribuição               | $r <- E$                                          |
| _Natural Join_           | $\bowtie$                                         |
| Agregação                | $_L G_{F}(r)$                                     |

Aprofundemos, de seguida, alguns destes operadores.

## Seleção

A seleção funciona de forma semelhante à cláusula `WHERE` do SQL,
em que se restringe uma relação de acordo com uma condição/predicado.

Relembremos a sintaxe, $\sigma_c(r)$. Aqui, temos que:

- $c$ é uma condição/predicado, podendo ser simples ou composta
- $r$ é a relação a que queremos aplicar esta condição

Assim, iremos obter uma nova relação, definida por:

$$
\sigma_c(r) = \{t | t \in r \enspace \op{and} \enspace c(t)\}
$$

Na seleção, a condição $c$ irá ser avaliada por cada tuplo $t$.
Uma condição pode conter os operadores de comparação $=$, $>$, $<$, $\geq$, $\leq$, etc,
assim como os operadores lógicos $\land$, $\lor$ e $\neg$.

:::info[Exemplo]

// TODO

:::

## Projeção

A projeção funciona de forma semelhante à cláusula `SELECT` do SQL,
em que seleciona certas colunas/atributos de uma relação.

Relembremos a sintaxe, $\pi_{A_1, \dots, A_n}(r)$. Aqui, temos que:

- $r$ é a relação que queremos projetar
- $A_i$ é uma coluna/atributo da relação $r$

Assim, iremos obter uma nova relação, definida por:

$$
\pi_{A_1, \dots, A_n}(r) = \{t[A_1, \dots, A_n]| t\in r\}
$$

Na projeção, obtemos a mesma relação dada, mas sem as colunas não especificadas.
Todas as colunas $A_i$ têm de pertencer à relação $r$.

:::info[Exemplo]

// TODO

:::

:::warning[Tuplos duplicados]

Visto que as relações não contêm tuplos duplicados (isto é, são _sets_ e não listas),
ao remover certas colunas poderemos diminuir o número de tuplos na relação.

// TODO exemplo

:::

### Projeção Generalizada

A projeção generalizada, tal como o nome indica, é uma generalização da projeção
apresentada acima, permitindo, além de referenciar atributos de uma relação, a
utilização de expressões sobre os atributos da relação.

Relembremos a sintaxe, $\pi_{F_1,\dots,F_n}(r)$. Aqui, temos que:

- $r$ é a relação que queremos projetar
- $F_i$ é uma função/expressão sobre os atributos de $r$

Assim, iremos obter uma nova relação, definida por:

$$
\pi_{F_1, \dots, F_n}(r) = \{\lang F_1(t), \dots, F_n(t)\rang | t \in r\}
$$

As expressões $F_i$ podem efetuar aritmética (somas, subtrações, multiplicações, etc)
entre valores dos atributos de $r$ ou até mesmo com literais
(i.e. somar $X$ a todos os valores de um atributo).

:::info[Exemplo]

// TODO

:::

## Renomeação

A renomeação funciona de forma semelhante à cláusula `AS` do SQL,
em que altera o nome de certas colunas/atributos de uma relação.

Relembremos a sintaxe, $\rho_{A_1\mapsto B_1,\dots, A_m \mapsto B_m}(E)$. Aqui, temos que:

- $E$ é a relação cujas colunas queremos renomear
- $A_i$ é o nome original (ou posição) de uma coluna da relação $E$
- $B_i$ é o nome para o qual queremos alterar o nome de $A_i$

Assim, iremos obter uma nova relação, definida por:

$$
\rho_{A_1\mapsto B_1,\dots, A_m \mapsto B_m}(r) = \{t | \exists u \in r, \enspace t[B_i] = u[A_i] \enspace \forall 1 \leq i \leq m\}
$$

Na renomeação, iremos obter os mesmos tuplos, apenas com nomes de colunas diferentes.

:::info[Exemplo]

// TODO

:::

## União

A união em álgebra relacional funciona de forma semelhante, se não idêntica, à união
que já conhecemos da teoria de conjuntos. A união de conjuntos consiste em obter um
novo conjunto com os valores de ambos os conjuntos, eliminando valores duplicados.
Do mesmo modo, a **união de relações** consiste em obter os tuplos de ambas
as relações, eliminando tuplos duplicados.

Relembremos a sintaxe, $r \cup s$, em que $r$ e $s$ são as duas relações a unir.

Para isto, temos primeiro de obedecer a duas condições: tanto $r$ como $s$ têm de ter
o mesmo número de atributos, e os tipos (isto é, os domínios) dos atributos na i-ésima
posição de cada uma das relações têm de corresponder.

Assim, iremos obter uma nova relação, definida por:

$$
r \cup s = \{t | t \in r \enspace \op{or} \enspace t \in s\}
$$

:::info[Exemplo]

// TODO

:::

## Diferença

A diferença entre duas relações funciona também da mesma forma que a diferença
entre conjuntos (isto é, $A \backslash B$).
Tal como na união, as relações têm de ter o mesmo número de atributos e estes têm
de ter domínios compatíveis.

Relembremos a sintaxe, $r - s$, em que $r$ e $s$ são as duas relações em que se aplica a diferença.

Assim, iremos obter uma nova relação, definida por:

$$
r - s = \{t | t \in r \enspace \op{and} \enspace t \notin s\}
$$

## Interceção

A interceção entre duas relações funciona também da mesma forma que a interceção
entre conjuntos (isto é, $A \cap B$).
Tal como na união, as relações têm de ter o mesmo número de atributos e estes têm
de ter domínios compatíveis.

Relembremos a sintaxe, $r \cap s$, em que $r$ e $s$ são as duas relações a intersetar.  
É também de realçar que a interceção é nada mais nada menos que duas diferenças,
isto é:

$$
r \cap s = r - (r - s)
$$

Assim, iremos obter uma nova relação, definida por:

$$
r \cap s = \{t | t \in r \enspace \op{and} \enspace t \in s\}
$$

:::info[Exemplo]

// TODO

:::

## Produto Cartesiano

O produto cartesiano entre duas relações associa cada valor da primeira relação
a todos os valores da segunda. Isto significa que se a primeira relação tiver
$n$ tuplos e a segunda tiver $m$ tuplos, a relação obtida pelo produto cartesiano
entre estas duas vai ter $nm$ tuplos.

Para efetuar o produto cartesiano, o [**nome dos atributos das duas relações têm de ser diferentes**](color:red),
isto é, não podem ter nomes de atributos em comuns. Caso seja este o caso, é
necessário utilizar uma [renomeação](#renomeação).

Relembremos a sintaxe, $r \times s$, em que $r$ e $s$ são as duas relações em que
queremos efetuar o produto cartesiano.

Assim, iremos obter uma nova relação, definida por:

$$
r \times s = \{t_r t_s | t_r \in r, t_s \in s\}
$$

:::info[Exemplo]

// TODO

:::

## Divisão

A divisão entre duas relações é algo relativamente complicado de perceber. Esta consiste em
determinar o subconjunto dos tuplos de $r$ que cobrem todos os tuplos de $s$.
Pode-se considerar como a operação inversa do [produto cartesiano](#produto-cartesiano),
como se pode ver nos exemplos abaixo.

Relembremos a sintaxe, $r \div s$, em que $r$ e $s$ são as duas relações em que
queremos efetuar a divisão. Devemos também considerar $R$ e $S$, que correspondem
às _schemas_, isto é, aos atributos de $r$ e $s$, respetivamente.

Assim, iremos obter uma nova relação, definida por:

$$
r \div s = \left\{t[R-S] | t\in r \op{and} s \subseteq \{u[s] | u \in r \op{and} u[R-s]=t[R-S]\}\right\}
$$

:::info[Exemplo]

// TODO

:::

## Composição de Operações

Como seria de esperar, podemos encadear várias destas operações, visto que
cada uma das operações "retorna" uma nova relação.

Por exemplo, podemos efetuar uma projeção após efetuarmos uma seleção:

$$
\pi_{\op{name}} \left(\sigma_{\op{price}<100}(\op{products})\right)
$$

### Atribuição

Além de encadearmos operações, o que se pode revelar muito verboso e até confuso,
podemos atribuir resultados de operações a novas relações, como se estivessemos
a definir uma "variável".

$$
\begin{aligned}
&\op{cheap\_products} \leftarrow \sigma_{\op{price}<100}(\op{products})\\
&\pi_{\op{name}} (\op{cheap\_products})
\end{aligned}
$$

## Natural Join

O _natural join_ entre duas relações efetua a junção de duas relações, juntando
os tuplos que têm valores iguais para atributos com o mesmo nome.
De realçar que se tivermos dois atributos [**não relacionados**](color:red) nas duas relações
que estamos a juntar, deveremos usar a operação de [renomeação](#renomeação) numa
delas para [**evitar resultados indesejados**](color:red).

Relembremos a sintaxe, $r \bowtie s$, em que $r$ e $s$ são as duas relações a juntar.
Devemos também considerar $R$ e $S$, que correspondem às _schemas_, isto é,
aos atributos de $r$ e $s$, respetivamente.

Assim, iremos obter uma nova relação, definida por:

$$
r \bowtie s = \{t_r t_s | t_r \in r \op{and} t_s \in s \op{and} t_r[R\cap S] = t_s[R \cap S]\}
$$

:::info[Exemplo]

// TODO

:::

## Agregação

Antes de olharmos para a operação de agregação em si, temos primeiro de definir
o que são [**funções de agregação**](color:orange). Uma função de agregação
pega num conjunto de valores e efetua-lhes uma operação, de forma a obter
um único valor. Funções estas como o máximo/mínimo de um conjunto, a soma,
a contagem e até a média.

Existem assim, em álgebra relacional, cinco funções lecionadas em aula:
`min`, `max`, `sum`, `count` e `avg`, que penso serem explícitas no seu comportamento.
Todas estas funções necessitam de um argumento a indicar qual o atributo sobre o
qual efetuam os cálculos, à exceção do `count` cujo argumento é opcional (contar
quantos valores existem, num atributo específico ou no geral é, regra geral, indiferente).

O operador de agregação usa estas funções e aplica-as sobre grupos de tuplos,
grupos estes que serão gerados através de um conjunto de atributos.

Relembremos a sintaxe, $_{A_1, \dots, A_n} G_{F_1, \dots, F_k}(r)$. Aqui, temos que:

- $r$ é a relação onde queremos aplicar a agregação
- $A_i$ é um atributo de $r$. Os tuplos serão agrupados pelos valores dos atributos $A_i$,
  isto é, juntando os tuplos que partilham os mesmos valores para os atributos $A_i$.
  Caso $n = 0$, isto é, não seja dado nenhum atributo por onde agrupar, considera-se
  a relação na sua totalidade.
- $F_i$ é uma função de agregação a aplicar em cada um dos grupos. Podemos, por conveniência,
  renomear logo o atributo resultante da função para algo mais ilustrativo:
  $_{\op{product}}G_{\op{SUM(price)} \mapsto \op{profit}}(\op{orders})$

Assim, iremos obter uma nova relação, definida por:

$$
\begin{aligned}
_{A_1, \dots, A_n} G_{F_1, \dots, F_k}(r) = \{t |& t[A_1, \dots, A_n] \in \pi_{A_1, \dots, A_n}(r)\\
&\op{and} t[F_i] = F_i (\{u | u[A_1, \dots, A_n] = t[A_1, \dots, A_n]\}), \forall_{1\leq i \leq k}\}
\end{aligned}
$$

:::info[Exemplo]

// TODO

:::
