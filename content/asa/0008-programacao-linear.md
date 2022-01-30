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

Como podemos observar, diferentes círculos eleitorais reagem de forma diferente à mesma medida: subsídios agrícolas, por exemplo, são recebidos com enorme satisfação pela população rural, diretamente beneficiada pelos mesmos, enquanto que os setores urbano e suburbano reagem com indiferença, visto que não os afeta diretamente.

O objetivo passará, então, por tentar obter a maioria absoluta (pelo menos $50%$ dos votos) minimizando os custos. A resposta, claro, será obtida através da programação linear. Antes de introduzir o conceito em si, tentemos formalizar o problema:

Temos que as quantias a gastar por medida em publicidade são dados, respetivamente, por $x_1, x_2, x_3$ e $x_4$. O nosso objetivo passa, então, por minimizar $\sum_{i=1}^4 x_i$. Visto que queremos procurar satisfazer ao máximo o eleitorado, procuramos também que cada círculo eleitoral tenha, no mínimo, $50%$ dos votos. Assim sendo, iríamos procurar a solução que minimize os custos sujeita às restrições:

$$
-2x_1 + 8x_2 + 0x_3 + 10x_4 \geq 50\\
5x_1 + 2x_2 + 0x_3 + 0x_4 \geq 100\\
3x_1 - 5x_2 + 10x_3 + -2x_4 \geq 25\\
x_1, x_2, x_3, x_4 \geq 0.
$$

## Formulações

:::info[Formulação Geral - Programação Linear]

Procuramos, ao resolver problemas via programação linear, a otimizar uma função linear sujeita a um conjunto de restrições (desigualdades) lineares.

Dados um conjunto de números reais $[a_1, ..., a_n]$ e um conjunto de variáveis $[x_1, ..., x_n]$, podemos definir uma **função linear** para essas variáveis tal que:

$$
f(x_1, ..., x_n) = \sum_{i=1}^n a_i x_i.
$$

Uma função linear pode estar sujeita a um dado conjunto de **restrições lineares**, igualdades e/ou desigualdades lineares (em relação a um qualquer número real).

Temos que qualquer solução que satisfaça o conjunto de restrições de uma dada função é uma **solução exequível**, e que o conjunto de soluções deste género corresponde à **região exequível** da função. Por fim, diz-se que uma dada formulação é exequível se tiver pelo menos uma solução exequível (e não exequível caso contrário). Se atingir a solução levar tempo exponencial (vs tempo polinomial), a formulação diz-se **não limitada**.

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

Visto que temos que maximizar a função objetivo, $x_1 + x_2$, vamos considerar aqui várias linhas tal que $x_1 + x_2 = z$, onde $z$ é um número real. O objetivo será encontrar o maior número $z$ tal que a interseção da linha com o conjunto convexo apresentado acima não é vazio - aí, **maximizamos o objetivo**!

Observemos a imagem abaixo:

![Região Exequível - Linha](./assets/0008-regiao-exequivel-linha.png#dark=1)

Aqui, o valor máximo de $z$ tal que a interseção da linha com o conjunto convexo apresentado acima não é vazio é $8$: todas as retas "abaixo" dela têm valores menores, que não maximizam o objetivo, e nenhuma "acima" tem interseção não vazia com o conjunto convexo. Assim sendo, encontrámos a solução ótima: $x_1 = 2$ e $x_2 = 6$, com objetivo maximizado $x_1 + x_2 = 8$.

Importa realçar que as soluções ótimas para este tipo de problemas encontram-se **sempre** nos vértices do conjunto convexo. Mais ainda, se a interseção da linha que maximiza o objetivo com o conjunto convexo for um segmento de reta, então os vértices desse segmento são ambos soluções ótimas.

O conjunto convexo, a região que andamos a referir tantas vezes, chama-se **Simplex** - nome este que vamos ouvir bastante durante esta secção.

São estudadas duas formas de especificar programas lineares - as formas Standard e Slack. Diferem quanto à especificação das respetivas restrições: a primeira opta por especificar as restrições como **desigualdades**, enquanto a segunda opta por especificar as restrições como **igualdades** (exceto para os problemas que requerem variáveis necessariamente não negativas). Olhemos para ambas:

### [Forma Standard](color:green)

A forma standard procura **maximizar** $\sum_{i=1}^n a_i x_i$, tendo em conta um conjunto de restrições tal que:

$$
\sum_{i=1}^n a_{ij} x_j \leq b_i \quad \forall i \in \{1, ..., m\}.\\
x_j \geq 0 \quad \forall j \in \{1, ..., n\}.
$$

Mais ainda, notar que a forma standard requer **variáveis com valor não negativo**, e que todas as suas desigualdades sejam apresentadas tal que **menor-ou-igual-a**, não havendo lugar a restrições de igualdade.

Podemos representar o programa de forma mais compacta ainda, recorrendo a uma representação matricial do problema.

Ao criar uma matriz $A = (a_{ij})$, matriz essa $m \times n$, e recorrendo a três vetores $b = (b_i)$, $c = (c_j)$ e $x = (x_j)$, podemos representar o programa tal que procuramos maximizar $c^T x$, tendo em conta as restrições:

$$
Ax \leq b \\
x \geq 0
$$

Podemos reparar que as reprsentações coincidem com as apresentadas anteriormente.

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

- Caso haja [**restrições via desigualdade maior-ou-igua-a**](color:pink), basta apenas trocar os sinais em ambos os lados. Pegando no programa acima, ficaríamos com:

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

O tratamento que estamos a fazer ao programa não é despropositado - não estamos a fazê-lo só porque sim, este tratamento é fulcral para o algoritmo Simplex, abordado mais abaixo, resolver o problema de forma eficiente. O algoritmo, contudo, prefere ainda uma forma diferente de expressar o programa: todas as restrições (exceto as das variáveis serem não negativas) devem ser expressadas sob a forma de **igualdade**. Para tal, recorremos a $s$, uma [**variável de slack**](color:purple) que representa a diferença entre ambos os lados da nova igualdade - atualmente é uma igualdade, logo algo teve necessariamente de mudar para deixar de ser uma inequação.

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

Podemos reparar num pormenor interessante: estamos a procurar sempre escrever os $x_{n + i}$ em função de outras variáveis - neste caso em função das "variáveis iniciais", as da função que pretendemos maximizar. Dizemos que estas variáveis auxiliares (as do lado esquerdo das equações, portanto) são as **variáveis básicas**, e que as restantes são as **variáveis não-básicas**. Mais ainda, tal como no exemplo do gráfico que foi utilizado acima onde denotámos $x_1 + x_2 = z$, temos que na forma slack a função objetivo está definida como

$$
z = \sum_{i=1}^{n} c_{j}x_{j},
$$

e que portanto o programa acima na forma slack seria escrito tal que:

- $z = 2x_1 - 3(x_2 - x_3)$
- $x_4 = 7 - (x_1 + x_2 - x_3)$
- $x_5 = -7 - (-x_1 - x_2 + x_3)$
- $x_6 = 4 - (x_1 - 2(x_2 - x_3))$

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
z = 28 - \frac{x_3}{6} - \frac{x_5}{6} - \frac{2x_6}{3}\\
x_1 = 8 + \frac{x_3}{6} + \frac{x_5}{6} - \frac{x_6}{3}\\
x_2 = 4 - \frac{8x_3}{3} - \frac{2x_5}{3} + \frac{x_6}{3}\\
x_4 = 18 - \frac{x_3}{2} + \frac{x_5}{2}\\
$$

Ora, temos aqui que $N = \{3, 5, 6\}$ (as **variáveis não-básicas**) e $B = \{1, 2, 4\}$ (as **variáveis básicas**).

Voltando a pegar na representação matricial abordada inicialmente na forma Standard, podemos então escrever:

$$
A = \begin{pmatrix}
  a_{13} & a_{15} & a_{16}\\
  a_{23} & a_{25} & a_{26}\\
  a_{43} & a_{45} & a_{46}\\
\end{pmatrix} = \begin{pmatrix}
  \frac{-1}{6} & \frac{-1}{6} & \frac{1}{3}\\
  \frac{8}{3} & \frac{2}{3} & \frac{-1}{3}\\
  \frac{1}{2} & \frac{-1}{2} & 0\\
\end{pmatrix}\\
b = \begin{pmatrix}
  b_1\\
  b_2\\
  b_4\\
\end{pmatrix} = \begin{pmatrix}
  8\\
  4\\
  18\\
\end{pmatrix}\\
c = \begin{pmatrix}
  c_3 & c_5 & c_6\\
\end{pmatrix}^T = \begin{pmatrix}
  \frac{-1}{6} & \frac{-1}{6} & \frac{-2}{3}\\
\end{pmatrix}^T\\
v = 28.
$$

Podemos então notar que, de forma sucinta:

- As colunas de $a$ correspondem às variáveis não-básicas, $N$;
- As linhas de $a$ correspondem às variáveis básicas, $B$;
- As entradas de $A$ correspondem aos coeficientes de cada variável não básica na equação associada a cada variável básica do conjunto de restrições;

Mais ainda, as linhas da matriz vertical $b$ correspodem à variável de slack de cada igualdade do conjunto de restrições associada a cada variável básica. Para além disso, $c_3, c_5, c_6$ em $c$ correspondem aos coeficientes de cada variável não básica na função objetivo.

:::

## [Algoritmo Simplex](color:orange)

## Dualidade

---

- [Slides]()
- [Notas]()
  $$
