---
title: Princípio do Pombal
path: /emd/principio-pombal
type: content
---

# Princípio do Pombal

```toc

```

## Primeira Forma do Princípio do Pombal

Se $n$ pombos voam para $k<n$ pombais, num dos $k$ pombais coabitam pelo menos dois pombos.

:::details[Demonstração]

Por absurdo,

Suponha-se que em cada pombal habita apenas um pombo. Nesse caso não podem existir mais do que $k$ pombos, o que é impossível, pois existem $n>k$ pombos.

:::

### Provas Exemplo 1

:::details[Exemplo 1 - 2.2 da Série 4]

Mostre que, se há mais livros numa biblioteca do que páginas em qualquer dos livros, então pelo menos dois livros têm igual número de páginas.

---

Imaginemos que os livros estão vazios, e temos de associar a cada livro um número de páginas, de acordo com as condições do enunciado.  
Seja $P$ o conjunto dos vários números de páginas possíveis, ordenados de forma crescente.

$$
P=\{p_1,p_2,\dots,p_k\}
$$

Como $p_k$ é menor que o número de livros (pelo enunciado) e $p_i$ toma apenas valores em $\N_1$,

$$
\#P<\text{número de livros}
$$

Pela [Primeira Forma do Princípio de Pombal](#primeira-forma-do-principio-do-pombal), ao associarmos cada $p_i$ com um livro vamos, obrigatoriamente, repetir o número de páginas para, pelo menos, $2$ livros diferentes, ficando estes com o mesmo número de páginas.

QED

:::

:::details[Exemplo 2 - Sucessão de números naturais dos Slides]

Mostre que, se $a_i$ é uma sucessão de números naturais e $n \in \N_2$, então
para algum valor de $k \in \N$ e para algum valor de $m \in \N$, a soma
$a_k + a_{k+1} + a_{k+2} + \dots + a_{k+m}$ é divisível por $n$.

---

**Importante:**

- Sejam $j_1 > j_2$ dois números tais que $j_1\%n = j_2\%n$, então $(j_1 - j_2)\%n = 0$.  
  (Também é válido para $j_1\leq j_2$, mas nesse caso $j_1-j_2\leq0$ e para este exercício dá jeito a solução positiva por causa dos números naturais)
- Este exercício só faz sentido se considerarmos números naturais a partir de $1$

Se escolhermos um certo termo da sucessão, $a_{\lambda}$, e considerarmos as seguintes $(n+1)$ somas:

$$
s_0 = a_{\lambda}\\
s_1 = a_{\lambda} + a_{\lambda+1}\\
\ldots\\
s_n = a_{\lambda} + a_{\lambda+1} + \dots + a_{\lambda+n}
$$

Como os termos da sucessão pertencem todos a $\N_1$, para $j>i$ tem-se $s_j > s_i$, logo de $s_0$ a $s_n$ teremos $n+1$ valores diferentes.  
Se fizermos o resto da divisão inteira por $n$ para todos os valores da soma, como esse resto tem de pertencer a $\{0,\dots,n-1\}$ ($n$ valores possíveis) e temos $n+1$ somas **diferentes**, pela [Primeira Forma do Princípio de Pombal](#primeira-forma-do-principio-do-pombal), haverá pelo menos duas somas com o mesmo resto.

Se têm o mesmo resto, pela Nota **Importante** do início da prova, a sua diferença será divisível por $n$.

Por fim, como as somas consideradas são de termos **consecutivos** a começar sempre pelo mesmo, a diferença entre quaisquer duas será também uma soma consecutiva de termos.

$$
s_j - s_i = a_{i+1+\lambda}+a_{i+2+\lambda}+\dots+a_{j+\lambda}, \quad j>i
$$

QED

:::tip[Nota]

- O $\lambda$ é usado para mostrar que se pode começar em qualquer termo da sucessão, se fizer confusão tomem $\lambda=0$, como está nos slides.
- Na última conclusão, podemos também pensar que $s_i$ é uma "subsoma" de $s_j$ $(i < j)$, por isso, quando fazemos $s_j-s_i$ estamos a retirar a $s_j$ os termos em comum com $s_i$.

:::

## Segunda Forma do Princípio do Pombal

Se f é uma aplicação de assinatura $\operatorname{f} : X \rightarrow Y$ , com $X$ e $Y$ conjuntos finitos tais que $\#X > \#Y$ , então existem $x_1, x_2 \in X$ tais que $x_1 \neq x_2$ e $\operatorname{f}(x_1) = \operatorname{f}(x_2)$.

:::details[Demonstração]

Seja $X$ o conjunto de pombos e $Y$ o conjunto de pombais. Atribuímos cada pombo $x \in X$ a um pombal $\operatorname{f}(x) \in Y$. Pela [Primeira Forma do Princípio de Pombal](#primeira-forma-do-principio-do-pombal), pelo menos dois pombos $x_1, x_2 \in X$ coabitam no mesmo pombal, i.e. existem $x_1, x_2 \in X$ tais que $x_1 \neq x_2$ e $\operatorname{f}(x_1) = \operatorname{f}(x_2)$.

:::

### Provas Exemplo 2

:::details[Exemplo 1 - Alunos de EMD dos Slides]

Prove que se selecionar 151 alunos de EMD de numeros compreendidos entre $ist199001$ e $ist199300$, inclusive, pelo menos dois alunos têm
números consecutivos.

---

Suponhamos que os 151 alunos têm números $n_1, n_2, \dots, n_{151}$, todos diferentes entre si. Por agora não interessa se são consecutivos ou não, o que interessa é que são diferentes.

Agora consideramos os 151 números consecutivos a cada número dos alunos, ou seja, $n_1+1, n_2+1,\dots ,n_{151}+1$. Estes também todos diferentes entre si.

Os $302$ $(151+151)$ números estão compreendidos entre $ist199001$ e $ist199301$ ($301$ números), pois se um aluno tiver $n_i=$ ist199300, o seu número consecutivo será ist199301 $(n_i+1)$.

Pela [Segunda Forma do Princípio de Pombal](#segunda-forma-do-principio-do-pombal), seja

$$
\operatorname{f} : \{n_1,n_1+1,\dots,n_{151},n_{151}+1\} \rightarrow \{ist199001,\dots,ist199301\}\\
\operatorname{f} : X \rightarrow Y
$$

Como $\#X>\#Y$, existirão $2$ números de aluno iguais no conjunto $\{n_1,n_1+1,\dots,n_{151},n_{151}+1\}$.  
Como dois alunos não podem ter o mesmo número $(n_i \neq n_j)$ e portanto também é verdade que $n_i+1 \neq n_j+1$, tem de haver pelo menos um caso onde $n_j = n_i+1$, ou seja $n_j$ é o número a seguir a $n_i$.  
Conclui-se que pelo menos dois alunos têm números consecutivos.

QED

:::

## Terceira Forma do Princípio do Pombal

Se $\operatorname{f}$ é uma aplicação de assinatura $\operatorname{f} : X \rightarrow Y$ tal que $\#X = n$ e $\#Y = m < n$, então existem pelo menos $k = \lceil\frac{n}{m}\rceil$ valores $a_1, a_2, \dots, a_k$ de $X$ tais que $\operatorname{f} (a_1) = \operatorname{f} (a_2) = \dots = \operatorname{f} (a_k)$.

:::details[Exemplo Ilustrativo]

Seja $\#X = 5$ e $\#Y = 2$, pela [Terceira Forma do Princípio de Pombal](#terceira-forma-do-principio-do-pombal) existem pelo menos $\lceil\frac{5}{2}\rceil=3$ valores $a_1, a_2, a_3$ de $X$ tais que $\operatorname{f} (a_1) = \operatorname{f} (a_2) = \operatorname{f} (a_3)$.

![Pombal 3](./assets/0002-3Pombal.png#dark=3)

:::

:::tip[Nota]
$k = \lceil\frac{a}{b}\rceil$ significa que $k$ é a divisão de $a$ por $b$ arredondada por excesso.  
Exemplos

$$
\lceil\frac{1}{3}\rceil =\lceil0.33..\rceil=1\\
\lceil\frac{20}{5}\rceil =\lceil4\rceil=4
$$

:::

### Provas Exemplo 3

:::details[Exemplo 1 - T-SHIRTS dos Slides]

Um cesto contém $20$ _T-SHIRTS_ de várias cores: $4$ brancas, $7$ verdes e $9$
azuis. Qual é o menor número de _T-SHIRTS_ a retirar aleatoriamente do
cesto de modo a obter (a) $4$ e (b) $5$ _T-SHIRTS_ da
mesma cor.

---

Seja $X= \{t_1,\dots,t_{20}\}$ o conjunto de _T-SHIRTS_ e $Y=\{c_1,c_2,c_3\}$ o conjunto de cores.

**(a)-4**

Como cada cor está associada a pelo menos $4$ _T-SHIRTS_ (pelo enunciado), podemos aplicar diretamente a [Terceira Forma do Princípio de Pombal](#terceira-forma-do-principio-do-pombal).  
Sendo $k$ o número mínimo de _T_SHIRTS_ a retirar, como existem $3$ cores possíveis e queremos pelo menos $4$ _T-SHIRTS_ de cores iguais, pela [Terceira Forma do Princípio de Pombal](#terceira-forma-do-principio-do-pombal) $4 = \lceil\frac{k}{3}\rceil$, ou seja, $k=10$.  
(Para $k=11$ e $k=12$ a equação também era válida, mas queremos o menor $k$ possível)

**(b)-5**

Neste caso não podemos aplicar diretamente a [Terceira Forma do Princípio de Pombal](#terceira-forma-do-principio-do-pombal), pois o número de _T-SHIRTS_ brancas é $4$, o que significa que é impossível retirar $5$ _T-SHIRTS_ brancas do cesto.  
Para ter a certeza que retirams $5$ _T-SHIRTS_ iguais do cesto é necessário retirar todas as $4$ _T-SHIRTS_ brancas.

Depois de retiradas as $4$ brancas já se pode aplicar diretamente a [Terceira Forma do Princípio de Pombal](#terceira-forma-do-principio-do-pombal).  
Das $16$ restantes queremos retirar o mínimo de _T-SHIRTS_ $k$ tal que pelo menos $5$ têm a mesma cor. Como só existem 2 cores no cesto $5 = \lceil\frac{k}{2}\rceil$, $k=9$.  
(**ATENÇÃO:** $k$ tem de ser menor que o número de _T-SHIRTS_ do cesto, neste caso $16$. Se o resultado for maior ou houve um erro de contas/raciocínio ou o exercício é impossível).

Resposta será $k+4=13$

Para quem ainda não percebeu a razão pela qual tiramos as $4$ _T-SHIRTS_ brancas:  
Tentem pensar em casos onde se consegue retirar no máximo $5$ _T-SHIRTS_ iguais, sem retirar as $4$ brancas.  
Por exemplo, retirar logo $5$ azuis/verdes ou $5$ azuis/verdes, $4$ verdes/azuis e $3$ brancas (total $12$). Em todos esses casos conseguimos pensar em outros onde retiramos o mesmo número de _T-SHIRTS_ sem conseguir retirar as $5$ iguais.  
Para termos a certeza que em $\lambda$ _T-SHIRTS_ temos $5$ iguais significa que quando temos $\lambda-1$ _T-SHIRTS_ a próxima será a $5$ª igual para uma dada cor. Sem retirar todas as $4$ brancas, a $\lambda$-ésima _T-SHIRT_ pode ser uma branca, que nunca será a $5$ª igual.

**AVISO:** Existem mais alíneas nos slides para quem tiver curiosidade.
:::

:::warning[Recomendação]

Para ficar à vontade com o `Princípio do Pombal` é necessário fazer várias provas sozinho. Apesar de percebermos algumas provas dos Slides e termos mais ou menos a ideia de como se fazem, sem a prática, a probabilidade de ficar preso em exercícios novos/diferentes continua elevada.

:::
