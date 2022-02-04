---
title: Programação Linear
description: Programação Linear.
  Algoritmo Simplex.
  Algoritmos e modelação de problemas com restrições lineares.
  Formulações Standard e Slack.
  Dualidade.
path: /asa/programacao-linear
type: content
---

# Programação Linear

```toc

```

:::tip[Motivação]

No quotidiano de uma empresa, os gestores são confrontados com opções a tomar: dadas certas restrições e limitações quanto a recursos disponíveis, precisam de escolher rumos que maximizem o lucro da mesma - produzir mais circuitos de um tipo do que outro por serem mais rentáveis, por exemplo.

Da mesma forma, um partido político pode ter de escolher entre "secções estratégicas" a incluir no seu programa eleitoral - cada uma destas secções pode agradar a uma parte do eleitorado e ser pior aceite por outra parte, tendo então de haver uma escolha baseada nos efeitos esperados da inclusão de cada secção no programa.

A programação linear procura desconstruir e chegar a uma resposta concreta para estes problemas, maximizando o ganho consosante um dado conjunto de restrições.

:::

O exemplo dos partidos políticos referido acima é bastante fácil de explicar com a ajuda de uma tabela. Tenhamos os seguintes efeitos da inclusão de certas políticas num programa eleitoral:

|                              | Urbano | Suburbano | Rural |
| ---------------------------- | ------ | --------- | ----- |
| Construção de Estradas       | $-2$   | $5$       | $3$   |
| Legalização das Drogas Leves | $8$    | $2$       | $-5$  |
| Subsídios Agrícolas          | $0$    | $0$       | $10$  |
| Impostos no Combustível      | $10$   | $0$       | $-2$  |

Aqui, cada coluna corresponde a um círculo eleitoral, enquanto que cada linha corresponde a uma política. Cada círculo eleitoral tem, claro, número diferente de eleitores: respetivamente cem mil, duzentos mil e cinquenta mil eleitores recenseados. Cada entrada na matriz corresponde aos ganhos (em milhares de eleitores) por cada $1000€$ gastos em publicidades.

Como podemos observar, diferentes círculos eleitorais reagem de forma diferente à mesma medida: subsídios agrícolas, por exemplo, são recebidos com enorme satisfação pela população rural, diretamente beneficiada pelos mesmos, enquanto que os setores urbano e suburbano reagem com indiferença, visto que a medida não os afeta diretamente.

O objetivo passará, então, por tentar obter a maioria absoluta (pelo menos $50\%$ dos votos) minimizando os custos. A resposta, claro, será obtida através da programação linear. Antes de introduzir o conceito em si, tentemos formalizar o problema:

Temos que as quantias a gastar por medida em publicidade são dados, respetivamente, por $x_1, x_2, x_3$ e $x_4$. O nosso objetivo passa, então, por minimizar $\sum_{i=1}^4 x_i$. Visto que queremos procurar satisfazer ao máximo o eleitorado, procuramos também que cada círculo eleitoral tenha, no mínimo, $50\%$ dos votos. Assim sendo, iríamos procurar a solução que minimize os custos sujeita às restrições:

$$
-2x_1 + 8x_2 + 0x_3 + 10x_4 \geq 50\\
5x_1 + 2x_2 + 0x_3 + 0x_4 \geq 100\\
3x_1 - 5x_2 + 10x_3 + -2x_4 \geq 25\\
x_1, x_2, x_3, x_4 \geq 0.
$$

## Formulações

:::info[Formulação Geral - Programação Linear]

Procuramos, ao resolver problemas via programação linear, otimizar uma função linear sujeita a um conjunto de restrições (desigualdades) lineares.

Dados um conjunto de números reais $[a_1, ..., a_n]$ e um conjunto de variáveis $[x_1, ..., x_n]$, podemos definir uma **função linear** para essas variáveis tal que:

$$
f(x_1, ..., x_n) = \sum_{i=1}^n a_i x_i.
$$

Uma função linear pode estar sujeita a um dado conjunto de **restrições lineares**, igualdades e/ou desigualdades lineares (em relação a um qualquer número real).

Temos que qualquer solução que satisfaça o conjunto de restrições de uma dada função é uma **solução exequível**, e que o conjunto de soluções deste género corresponde à **região exequível** da função. Por fim, diz-se que uma dada formulação é exequível se tiver pelo menos uma solução exequível (e não exequível caso contrário).

:::

Tenhamos um conjunto de restrições tal que:

$$
4x_1 - x_2 \leq 8\\
2x_1 + x_2 \leq 10\\
5x_1 - 2x_2 \geq -2\\
x_1, x_2 \geq 0
$$

Temos que a aplicação destas restrições resulta num gráfico tal que:

![Região Exequível - Gráfico inicial](./assets/0008-regiao-exequivel-inicio.png#dark=1)

Ora, a interseção de todas estas restrições resulta num conjunto convexo como o que se apresenta na figura:

![Região Exequível - Região Convexa](./assets/0008-regiao-exequivel-regiao.png#dark=1)

Tenhamos ainda que a função objetivo é $f(x_1, x_2) = x_1 + x_2$.

Visto que temos que a maximizar, vamos considerar aqui várias linhas tal que $x_1 + x_2 = z$, onde $z$ é um número real. O objetivo será encontrar o maior número $z$ tal que a interseção da linha com o conjunto convexo apresentado acima não é vazio - aí, **maximizamos o objetivo**!

Observemos a imagem abaixo:

![Região Exequível - Linha](./assets/0008-regiao-exequivel-linha.png#dark=1)

Aqui, o valor máximo de $z$ tal que a interseção da linha com o conjunto convexo apresentado acima não é vazio é $8$: todas as retas "abaixo" dela têm valores menores, que não maximizam o objetivo, e nenhuma "acima" tem interseção não vazia com o conjunto convexo. Assim sendo, encontrámos a solução ótima: $x_1 = 2$ e $x_2 = 6$, com objetivo maximizado $x_1 + x_2 = 8$.

Importa realçar que as soluções ótimas para este tipo de problemas encontram-se **sempre** nos vértices do conjunto convexo. Mais ainda, se a interseção da linha que maximiza o objetivo com o conjunto convexo for um segmento de reta, então os vértices desse segmento são ambos soluções ótimas.

O conjunto convexo, a região que andamos a referir tantas vezes, chama-se **Simplex** - nome este que vamos ouvir bastante durante esta secção.

São estudadas duas formas de especificar programas lineares - as formas Standard e Slack. Diferem quanto à especificação das respetivas restrições: a primeira opta por especificar as restrições como **desigualdades**, enquanto que a segunda opta por especificar as restrições como **igualdades** (exceto para os problemas que requerem variáveis necessariamente não negativas). Olhemos para ambas:

### [Forma Standard](color:green)

A forma standard procura **maximizar** $\sum_{i=1}^n a_i x_i$, tendo em conta um conjunto de restrições tal que:

$$
\sum_{i=1}^n a_{ij} x_j \leq b_i \quad \forall i \in \{1, ..., m\}.\\
x_j \geq 0 \quad \forall j \in \{1, ..., n\}.
$$

Mais ainda, notar que a forma standard requer **variáveis com valor não negativo**, e que todas as suas desigualdades sejam apresentadas tal que **menor-ou-igual-a**, não havendo lugar a restrições de igualdade (a importância da orientação do sinal da inequação será claro mais à frente).

Podemos representar o programa de forma mais compacta ainda, recorrendo a uma representação matricial do problema.

Ao criar uma matriz $A = (a_{ij})$, matriz essa $m \times n$, e recorrendo a três vetores $b = (b_i)$, $c = (c_j)$ e $x = (x_j)$, podemos representar o programa tal que procuramos maximizar $c^T x$, tendo em conta as restrições:

$$
Ax \leq b \\
x \geq 0
$$

Podemos reparar que as representações coincidem com as apresentadas anteriormente.

A conversão de um programa linear para a forma standard pode não ser trivial: podemos enfrentar problemas com resolução não óbvia.

- Caso o objetivo seja [**minimizar**](color:orange) o objetivo (em vez de procurar a maximização do mesmo), a solução passa por inverter o sinal de todos os coeficientes da função objetivo (mantendo os das restrições), procurando agora a maximização desse novo objetivo. Por exemplo, minimizar uma função objetivo $3x_1 - 17x_2 + 4x_3$ seria o mesmo que maximizar $-3x_1 + 17x_2 - 4x_3$ (não havendo quaisquer alterações nos coeficientes das restrições).

- Caso haja [**variáveis que possam ser negativas**](color:yellow), essas mesmas variáveis são substituídas pela diferença de duas variáveis auxiliares, essas sim com a restrição de serem não negativas. Por exemplo, no programa abaixo:

  - Objetivo: Maximizar $2x_1 - 3x_2$
  - Restrições:
    - $x_1 + x_2 = 7$
    - $x_1 - 2x_2 \leq 4$
    - $x_1 \geq 0$

  Aqui, $x_2$ não apresenta a restrição requerida. Assim sendo, substituímo-la por $x_2 = x_2' - x_2''$, ficando então com o programa linear:

  - Objetivo: Maximizar $2x_1 - 3(x_2' - x_2'')$
  - Restrições:
    - $x_1 + x_2' - x_2'' = 7$
    - $x_1 - 2(x_2' - x_2'') \leq 4$
    - $x_1, x_2', x_2'' \geq 0$

- Caso haja [**restrições via igualdade**](color:green), ao invés de desigualdades, estas são substituídas por um par de desigualdades. Ter $f(x_1, x_2, x_3) = b$ é equivalente a ter $x_1 + x_2 + x_3 \leq b \wedge x_1 + x_2 + x_3 \geq b$, pelo que podemos pegar no exemplo imediatamente acima e reescrevê-lo tal que:

  - Objetivo: Maximizar $2x_1 - 3(x_2' - x_2'')$
  - Restrições:
    - $x_1 + x_2' - x_2'' \leq 7$
    - $x_1 + x_2' - x_2'' \geq 7$
    - $x_1 - 2(x_2' - x_2'') \leq 4$
    - $x_1, x_2', x_2'' \geq 0$

- Caso haja [**restrições via desigualdade maior-ou-igual-a**](color:pink), basta apenas trocar os sinais em ambos os lados. Pegando no programa acima, ficaríamos com:

  - Objetivo: Maximizar $2x_1 - 3(x_2' - x_2'')$
  - Restrições:
    - $x_1 + x_2' - x_2'' \leq 7$
    - $-x_1 - x_2' + x_2'' \leq -7$
    - $x_1 - 2(x_2' - x_2'') \leq 4$
    - $x_1, x_2', x_2'' \geq 0$

  De realçar que a restrição que obriga as variáveis a ser não negativas é mantida.

Por fim, as variáveis com apóstrofes acabariam por ser renomeadas, ficando então com:

- Objetivo: Maximizar $2x_1 - 3(x_2 - x_3)$
- Restrições:
  - $x_1 + x_2 - x_3 \leq 7$
  - $-x_1 - x_2 + x_3 \leq -7$
  - $x_1 - 2(x_2 - x_3) \leq 4$
  - $x_1, x_2, x_3 \geq 0$

### [Forma Slack](color:yellow)

O tratamento que estamos a fazer ao programa não é despropositado - é fulcral para o algoritmo Simplex, abordado mais abaixo, resolver o problema de forma eficiente. O algoritmo, contudo, prefere ainda uma forma diferente de expressar o programa: todas as restrições (exceto as das variáveis serem não negativas) devem ser expressadas sob a forma de **igualdade**. Para tal, recorremos a $s$, uma [**variável de slack**](color:purple) que representa a diferença entre ambos os lados da nova igualdade - a inequação passou a equação, logo algo teve necessariamente de mudar para deixar de ser uma inequação.

Por exemplo, tendo a restrição

$$
\sum_{i=1}^{n} a_{ij}x_j \leq b_i
$$

convertê-la-iamos para a forma Slack tal que:

$$
s = b_i - \sum_{i=1}^{n} a_{ij}x_j\\
s \geq 0
$$

Na forma slack, optamos por escrever as novas igualdades sob a notação $x_{n + i}$, ao invés de $s$. O exemplo utilizado na forma standard ficaria então:

- Objetivo: Maximizar $2x_1 - 3(x_2 - x_3)$
- Restrições:
  - $x_4 = 7 - (x_1 + x_2 - x_3)$
  - $x_5 = -7 - (-x_1 - x_2 + x_3)$
  - $x_6 = 4 - (x_1 - 2(x_2 - x_3))$
  - $x_1, x_2, x_3, x_4, x_5, x_6 \geq 0$

Podemos reparar num pormenor interessante: estamos a procurar sempre escrever os $x_{n + i}$ em função de outras variáveis - neste caso em função das "variáveis iniciais", as da função que pretendemos maximizar. Dizemos que estas variáveis auxiliares (as do lado esquerdo das equações, portanto) são as **variáveis básicas**, que dependem das outras, e que as restantes são as **variáveis não-básicas**. Mais ainda, tal como no exemplo do gráfico que foi utilizado acima onde denotámos $x_1 + x_2 = z$, temos que na forma slack a função objetivo está definida como

$$
z = \sum_{i=1}^{n} c_{j}x_{j},
$$

e que portanto o programa acima na forma slack seria escrito tal que:

$$
\begin{aligned}
z &= 2x_1 - 3(x_2 - x_3)\\
x_4 &= 7 - (x_1 + x_2 - x_3)\\
x_5 &= -7 - (-x_1 - x_2 + x_3)\\
x_6 &= 4 - (x_1 - 2(x_2 - x_3))
\end{aligned}
$$

Formalizando por fim, a forma slack pode ser então descrita tal que:

- $N$ corresponde ao conjunto de índices das variáveis não-básicas;

- $B$ corresponde ao conjunto de índices das variáveis básicas;

- $N \cup B = {1, 2, ..., n + m}$, com $|N| = n$ e $|B| = m$;

$$
z = v + \sum_{i=1}^{n} c_{j}x_{j}\\
x_{i} = b_i - \sum_{i=1}^{n} a_{ij}x_j \quad \text{para } i \in B\\
$$

Na função objetivo, $v$ corresponde a uma constante, cuja utilidade será aparente mais à frente.

:::details[Exemplo - Representação Matricial]

Tenhamos o seguinte programa na forma slack:

$$
\begin{aligned}
z &= 28 - \frac{x_3}{6} - \frac{x_5}{6} - \frac{2x_6}{3}\\
x_1 &= 8 + \frac{x_3}{6} + \frac{x_5}{6} - \frac{x_6}{3}\\
x_2 &= 4 - \frac{8x_3}{3} - \frac{2x_5}{3} + \frac{x_6}{3}\\
x_4 &= 18 - \frac{x_3}{2} + \frac{x_5}{2}\\
\end{aligned}
$$

Ora, temos aqui que $N = \{3, 5, 6\}$ (as **variáveis não-básicas**) e $B = \{1, 2, 4\}$ (as **variáveis básicas**).

Voltando a pegar na representação matricial abordada inicialmente na forma Standard, podemos então escrever:

$$
\begin{aligned}
A &= \begin{pmatrix}
  a_{13} & a_{15} & a_{16}\\
  a_{23} & a_{25} & a_{26}\\
  a_{43} & a_{45} & a_{46}\\
\end{pmatrix} = \begin{pmatrix}
  \frac{-1}{6} & \frac{-1}{6} & \frac{1}{3}\\
  \frac{8}{3} & \frac{2}{3} & \frac{-1}{3}\\
  \frac{1}{2} & \frac{-1}{2} & 0\\
\end{pmatrix}\\
b &= \begin{pmatrix}
  b_1\\
  b_2\\
  b_4\\
\end{pmatrix} = \begin{pmatrix}
  8\\
  4\\
  18\\
\end{pmatrix}\\
c &= \begin{pmatrix}
  c_3 & c_5 & c_6\\
\end{pmatrix}^T = \begin{pmatrix}
  \frac{-1}{6} & \frac{-1}{6} & \frac{-2}{3}\\
\end{pmatrix}^T\\
v &= 28.
\end{aligned}
$$

Podemos então notar que, de forma sucinta:

- As colunas de $A$ correspondem às variáveis não-básicas, $N$;
- As linhas de $A$ correspondem às variáveis básicas, $B$;
- As entradas de $A$ correspondem aos coeficientes de cada variável não básica na equação associada a cada variável básica do conjunto de restrições;

Mais ainda, as linhas da matriz vertical $b$ correspodem à variável de slack de cada igualdade do conjunto de restrições associada a cada variável básica. Para além disso, $c_3, c_5, c_6$ em $c$ correspondem aos coeficientes de cada variável não básica na função objetivo.

:::

## [Algoritmo Simplex](color:orange)

O Algoritmo Simplex corresponde à abordagem clássica para resolver problemas de otimização linear. Tem por base a interpretação geométrica (o conjunto convexo) apresentada no início desta página. Funciona como uma espécie de "eliminação de Gauss-Jordan" para inequações.

A ideia por detrás do algoritmo poderá ser entendida mais facilmente com a ajuda de um exemplo. Tenhamos o seguinte programa linear na forma slack:

$$
\begin{aligned}
z &= 3x_1 + x_2 + 2x_3\\
x_4 &= 30 - x_1 - x_2 - 3x_3\\
x_5 &= 24 - 2x_1 - 2x_2 - 3x_3\\
x_6 &= 36 - 4x_1 - x_2 - 2x_3
\end{aligned}
$$

Inicialmente, olhamos para a **solução básica** para o problema: colocamos todas as variáveis não-básicas a zero, ficando com a solução igual a $(0, 0, 0, 30, 24, 36)$, $z = 3 \cdot 0 + 1 \cdot 0 + 2 \cdot 0 = 0$. Se for exequível, dizemos que se trata de uma **solução básica exequível**.

O algoritmo procura, a cada iteração, reescrever as equações do programa, de forma a encontrar diferentes soluções para o mesmo. Além disso, temos que as alterações que faremos serão sempre com vista a **não decrescer** $z$ - não tem necessariamente de aumentar, mas nunca irá diminuir entre iterações.

Para reescrever as igualdades, pegamos numa das variáveis não-básicas do programa e olhamos para as variáveis básicas, procurando pensar "qual é o máximo que posso aumentar a variável não-básica sem que as variáveis básicas se tornem negativas". Para isso, temos de olhar para cada uma das restrições e procurar percebê-lo - pensemos, em relação ao programa acima, qual é o máximo que podemos aumentar $x_1$:

- $x_4 = 30 - x_1 - x_2 - 3x_3$. Igualando todas as variáveis exceto $x_1$ a zero, obtemos uma maximização de $x_1$ para esta restrição: $x_1 = 30$;

- $x_5 = 24 - 2x_1 - 2x_2 - 5x_3$ - fazemos o mesmo que acima, ficando com $x_1 = 12$;

- $x_6 = 36 - 4x_1 - x_2 - 2x_3$ - fazemos o mesmo que acima, ficando com $x_1 = 9$. Esta é a [**restrição mais apertada**](color:orange), dando então o máximo que podemos aumentar $x_1$.

Temos, então, que uma restrição no programa reescrito será $x_1 = 9 - \frac{x_2}{4} - \frac{x_3}{2} - \frac{x_6}{4}$ (vem da última restrição, a que considerámos apertada, escrita agora com $x_1$ em função das outras variáveis).

Descoberta a restrição mais apertada, trocamos os papéis de $x_1$ e $x_6$, tanto nas restrições como no objetivo, ficando com um programa tal que:

$$
\begin{aligned}
z &= 27 + \frac{x_2}{4} + \frac{x_3}{2} - \frac{3x_6}{4}\\
x_1 &= 9 - \frac{x_2}{4} - \frac{x_3}{2} - \frac{x_6}{4}\\
x_4 &= 21 - \frac{3x_2}{4} - \frac{5x_3}{2} + \frac{x_6}{4}\\
x_5 &= 6 - \frac{3x_2}{2} - 4x_3 + \frac{x_6}{2}
\end{aligned}
$$

De realçar que as duas últimas restrições foram obtidas substituíndo $x_1$ pelo lado direito da nova igualdade que envolve $x_1$ como variável básica: $9 - \frac{x_2}{4} - \frac{x_3}{2} - \frac{x_6}{4}$.

A operação que foi agora realizada, esta troca entre uma variável básica e uma não-básica, é a [**Operação Pivot**](color:yellow). Nesta operação, consideramos a variável não-básica $x_1$ a **variável de entrada** (vai entrar no conjunto das variáveis básicas), e a variável básica $x_6$ a **variável de saída** (vai sair do conjunto de variáveis básicas). O algoritmo Simplex procura, então, realizar sucessivos Pivots até não haver mais soluções básicas exequíveis - [**até todos os coeficientes das variáveis não-básicas na função objetivo serem negativos**](color:pink).

Voltamos então a igualar todas as variáveis não-básicas a zero, ficando com solução igual a $(9, 0, 0, 21, 6, 0)$ e $z = 27$.

De seguida, procuramos reescrever novamente o problema: desta vez, foquemo-nos na variável $x_3$. Aqui, a terceira restrição (a que tem $x_5$ como variável básica) é a mais apertada, restringindo $x_3$ a $6$. Assim sendo, o programa reescrito será (e tendo em conta agora $x_3 = \frac{3}{2} - \frac{3x_2}{8} - \frac{x_5}{4} + \frac{x_6}{8}$):

$$
\begin{aligned}
z &= \frac{111}{4} + \frac{x_2}{16} - \frac{x_5}{8} + \frac{11x_6}{16}\\
x_1 &= \frac{33}{4} - \frac{x_2}{16} + \frac{x_5}{8} - \frac{5x_6}{16}\\
x_3 &= \frac{3}{2} - \frac{3x_2}{8} - \frac{x_5}{4} + \frac{x_6}{8}\\
x_4 &= \frac{69}{4} + \frac{3x_2}{16} + \frac{5x_5}{8} - \frac{x_6}{16}
\end{aligned}
$$

O objetivo $z$ é, então, aumentado para $\frac{111}{4}$.

Por fim, reescrevemos o programa olhando para $x_2$, ficando com:

$$
\begin{aligned}
z &= 28 - \frac{x_3}{6} - \frac{x_5}{6} - \frac{2x_6}{3}\\
x_1 &= 8 + \frac{x_3}{6} + \frac{x_5}{6} - \frac{x_6}{3}\\
x_2 &= 4 - \frac{8x_3}{3} - \frac{2x_5}{3} + \frac{x_6}{3}\\
x_4 &= 18 - \frac{x_3}{2} + \frac{x_5}{2}.
\end{aligned}
$$

Chegámos, assim, a um ponto em que todas as variáveis não-básicas na função objetivo têm coeficiente negativo. Assim sendo, podemos dar o algoritmo por terminado, dizendo que a **solução ótima** para o programa é $(8, 4, 0, 18, 0, 0)$, com $z = 28$.

:::info[Solução Exequível Inicial]

A conversão de um programa linear para a forma slack nem sempre é simples. Vejamos o caso abaixo:

- Objetivo: Maximizar $2x_1 - x_2$;
- Restrições:
  $$
  2x_1 - x_2 \leq 2\\
  x_1 - 5x_2 \leq -4\\
  x_1, x_2 \geq 0.
  $$

A conversão deste programa para a forma slack resulta nas restrições $x_1 = 0 \wedge x_2 = 0$, o que vai diretamente contra a segunda restrição acima apresentada - **não há uma solução exequível inicial**. Podemos, contudo, verificar se o programa tem alguma solução exequível, recorrendo a um programa auxiliar.

Seja $L$ um programa linear na forma standard, $L_{aux}$ é definido tal que:

- Objetivo: Maximizar $-x_0$;
- Restrições:
  $$
    \sum_{i=1}^{n} a_{ij}x_j - x_0 \leq b_i, \quad i = 1, 2, ..., m\\
    x_j \geq 0, \quad j = 0, 1, 2, ..., n.
  $$

Temos assim que $L$ só é exequível caso o valor ótimo para o objetivo de $L_{aux}$ seja $0$ (a prova será adicionada num futuro próximo).

:::

Começemos com o programa linear inicial abaixo:

- Objetivo: Maximizar $2x_1 - x_2$;
- Restrições:
  $$
  2x_1 - x_2 \leq 2\\
  x_1 - 5x_2 \leq -4\\
  x_1, x_2 \geq 0.
  $$

Temos que a solução básica não é exequível. Assim sendo, construímos um programa linear auxiliar tal que:

- Objetivo: Maximizar $-x_0$;
- Restrições:
  $$
  2x_1 - x_2 - x_0 \leq 2\\
  x_1 - 5x_2 - x_0 \leq -4\\
  x_1, x_2, x_0 \geq 0.
  $$

O programa encontra-se atualmente na forma standard. A sua conversão para a forma slack é trivial:

$$
\begin{aligned}
&z = -x_0\\
&x_3 = 2 - 2x_1 + x_2 + x_0\\
&x_4 = -4 - x_1 + 5x_2 + x_0\\
\end{aligned}
$$

A solução básica deste programa continua sem ser exequível: igualar todas as variáveis não-básicas a $0$ levaria a $x_4 = -4$, que vai diretamente contra a restrição de todas as variáveis terem de ser não negativas. Assim sendo, executamos uma operação pivot entre $x_0$ e $x_4$, com vista a eliminar o problema em questão - se após todos os Pivots possíveis continuar sem haver solução exequível, o próprio programa diz-se **não exequível**.

A operação pivot leva então a:

$$
\begin{aligned}
z &= -4 - x_1 + 5x_2 - x_4\\
x_0 &= 4 + x_1 - 5x_2 + x_4\\
x_3 &= 6 - x_1 - 4x_2 + x_4\\
\end{aligned}
$$

Este programa apresenta solução básica exequível! Aplicaríamos agora o algoritmo Simplex até obter uma solução para este programa auxiliar tal que $z = 0$: caso tal solução exista, o programa original é exequível. A solução para o programa auxiliar seria:

$$
\begin{aligned}
&z = -x_0\\
&x_2 = \frac{4}{5} - \frac{x_0}{5} + \frac{x_1}{5} + \frac{x_4}{5}\\
&x_3 = \frac{14}{5} + \frac{4x_0}{5} - \frac{9x_1}{5} + \frac{x_4}{5}
\end{aligned}
$$

Para resolver o problema inicial, teríamos que ter em conta $2x_1 - x_2 = 2x_1 - \frac{4}{5} - \frac{x_0}{5} + \frac{x_1}{5} + \frac{x_4}{5}$, ficando então escrito na forma slack tal que:

$$
\begin{aligned}
&z = - \frac{4}{5} + \frac{9x_0}{5} - \frac{x_4}{5}\\
&x_2 = \frac{4}{5} - \frac{x_0}{5} + \frac{x_1}{5} + \frac{x_4}{5}\\
&x_3 = \frac{14}{5} + \frac{4x_0}{5} - \frac{9x_1}{5} + \frac{x_4}{5}
\end{aligned}
$$

A partir daqui, resolveríamos este programa linear com a ajuda do algoritmo Simplex.

:::info[Teorema Fundamental da Programação Linear]

Qualquer programa linear na forma standard:

- Tem uma [**solução ótima**](color:pink) com valor objetivo finito;

- É [**não exequível**](color:purple);

- É [**unbounded**](color:red), não limitado: o valor objetivo pode ser arbitrariamente maximizado.

:::

Abaixo encontra-se o gráfico correspondente a um programa linear _unbounded_. Podemos notar que há infinitas retas que maximizam o valor objetivo, cada uma com $z$ arbitrariamente maior que a anterior, e todas elas cuja interseção com a região exequível é não vazia:

![Região Exequível - Unbounded](./assets/0008-regiao-exequivel-unbounded.png#dark=1)

Como nota final, resta afirmar que caso após $\binom{n + m}{n}$ iterações o algoritmo ainda não tenha terminado, podemos admitir que este está [**em ciclo**](color:orange). Há, ao todo, $n + m$ variáveis e $m$ formas de escolher $B$, pelo que há $\binom{n + m}{n}$ formas de slack únicas - mais que isso e o algoritmo está em ciclo. São raros, mas existem, e para os eliminar recorre-se à [**Regra de Bland**]: em caso de empate na escolha de variáveis, escolhe-se sempre a variável com menor índice.

## Dualidade

:::warning[Página em Construção]

O conteúdo será adicionado brevemente.

:::

---

- [Slides](https://drive.google.com/file/d/1IGRwXhtKGG0P9SRQxB3RTf5bIxtpvG1Y/view?usp=sharing)
- [Notas Prog. Linear - Prof. José Fragoso](https://drive.google.com/file/d/1mDyBymCHkOOU0IrikVmHZ0kcdku9X23A/view?usp=sharing)
