---
title: Produto interno e ortogonalidade
description: >-
  Produto interno usual (real e complexo)
  Propriedades do produto interno
  Conceitos associados ao produto interno
  Vetores ortogonais
  Conjuntos Ortogonais
  Ortogonalização de Gram-Schmidt
  Projeção ortogonal

path: /al/produto-interno-ortogonalidade
type: content
---

# Produto interno e ortogonalidade

(baseado no material disponibilizado pela professora Esmeralda Dias)

Apesar da introdução a álgebra linear ter sido realizada até agora através de sistemas lineares, existe uma diversidade enorme de aplicações geométricas desta área.
Podemos por isso, generalizar muitas noções geométricas a qualquer espaço linear, não só a $$ \R^n$$ mas a qualquer espaço linear.

## Produto interno usual em $$ \R^n$$

O produto interno usual em $$ \R^n$$ pode ser definido simplesmente por

:::info[Definição]
Sejam x, y vetores de $$ \R^n$$

Tal que $$ x=(x_1,x_2,x_3,... , x_n) $$

e $$y=(y_1,y_2,y_3,..., y_n)$$

$$ \langle x,y \rang =x_1y_1 +x_2y_2+...+x_ny_n$$

ou seja,

$$ \langle x,y \rang = $$ $$\begin{bmatrix}
   x_1 & x_2 & ... & x_n
\end{bmatrix}\begin{bmatrix}
   y_1 \\
   y_2 \\
   ... \\
   y_n
\end{bmatrix}$$
$$= x^Ty$$
:::

## Produto interno em $$ \C^n $$

O produto interno usual em $$\C^n$$ é em muito similar ao produto em $$\R^n$$, mas com algumas diferenças.  
Segue-se a fórmula deste:

:::info[Definição]
Sejam x, y vetores de $$ \C^n$$

Tal que $$ x=(x_1,x_2,x_3,... , x_n) $$

e $$y=(y_1,y_2,y_3,..., y_n)$$

$$ \langle x,y \rang =\bar{x}\_1y_1 +\bar{x}\_2y_2+...+\bar{x}\_ny_n$$

ou seja,

$$ \langle x,y \rang = $$ $$\begin{bmatrix}
   \bar{x}_1 & \bar{x}_2 & ... & \bar{x}_n
\end{bmatrix} \begin{bmatrix}
   y_1 \\
   y_2 \\
   ... \\
   y_n
\end{bmatrix}$$
$$= \bar{x}^Ty$$
:::

#### Nota:

Verifica-se que se a fórmula do produto interno usual fôr aplicada aos números reais, que se obtém a fórmula do produto interno usual dos números reais pois $$\bar{x}=x, \forall x \in \R$$

## Propriedades do Produto Interno

Qualquer que seja o produto interno, este seguirá sempre as seguintes propriedades:

:::info[Simetria]
$$ \langle x,y \rang = \langle y,x \rang $$ (em $\R$) ou $$\langle x,y \rang =  \overline{\langle y,x \rang}$$ (em $\C$)
:::
:::info[Linearidade]
$$ \langle x,\alpha y + \beta z \rang = \alpha \langle x,y\rang + \beta \langle x,z\rang$$
:::
:::info[Simetria]
$$ \langle x,x \rang \geqslant 0 $$ e $ \langle x,x \rang = 0 $ apenas quando $ x=0$
:::

A partir destas características fundamentais podese definir o conceito de espaço Euclidiano.

:::info[Espaço Euclidiano]
Espaço linear munido de munido de produto interno
:::
Num espaço euclidiano definem-se os seguintes conceitos:

:::info[Norma]
$$ \parallel x\parallel = \langle x,x \rang $$
:::
:::info[Distância]
dist$$(u,v) = \parallel u-v\parallel $$
:::

### Matriz de Gram

:::info[Matriz de Gram]
Seja $W$ um espaço linear real (resp. complexo) munido de um produto interno e $$ B=(v*1,v_2,...,v_n)$$ uma base ordenada de $W$. A matriz $$G={[\langle v_i,v_j\rang]}*{(i,j=1,...,n)}$$ dos produtos internos dos vetores da base $B$ é dsignada por _matriz de Gram_ ou _matriz da métrica_, relativa à base $B$. A matriz $G$ verifica:

1. $G$ é simétrica (respetivamente Hermitiana);
2. $G$ é definida positiva, isto é, $$x^T_BGx_b>0$$ para todo $x \not = 0$ (resp. $ x^H_BGy_B>0$, para todo $x \not = 0$), ou seja, os valores próprios da matriz $G$ têm de ser todos positivos.

Em relação à base $B$, o produto interno em $W$ escreve-se na forma

$$ \langle x,y \rang = x^T_BGy_B$$
onde $x_B$ e $y_B$ são respetivamente, os vetores de coodenadas de $x$ e $y$ na base $B$.
:::

### Desigualdade de Cauchy-Schwarz

Num espaço euclidiano qualquer verifica-se que

$$ \large{\dfrac{| \langle u,v\rang |}{\| u \| \|v \|}} \leqslant 1$$

Esta desigualdade permite diretamente chegar à noção de ângulo entre vetores.

:::info[Ângulo entre vetores]
$$\large{\dfrac{ \langle u,v\rang }{\| u \| \|v \|}} =cos \theta, \theta \in [0, \pi] $$
:::

## Ortogonalidade

Com todas as noções previamente discutidas, torna-se possível discutir ortogonalidade entre dois vetores.

:::info[Definição]
$ u \perp v<=> \langle u,v\rang=0 $
:::

Com a definição de ortogonalidade, pode-se concluir que o **Teorema de Pitágoras** é válido, tal que:

Se $ u \perp v$ então

$ \|u-v\|^2=\|u\|^2+\|v\|^2$Definição

Com a ortogonalidade entre vetores definida sai a definição de conjunto ortogonal.

:::info[Conjunto Ortogonal]
$ S=\{v_1,v_2,...,v_n\}$ é ortogonal se os vetores de $S$ são ortogonais 2 a 2, isto é:

$\langle v_i, v_j \rang= 0 $ para $i \not= j$

:::

De forma muito similar,
:::info[Conjunto Ortonormado]
$ S=\{v_1,v_2,...,v_n\}$ é ortonormado se os vetores de $S$ são ortogonais 2 a 2 e se a norma de todos os vetores fôr 1, isto é:

$$\langle v_i, v_j \rang=$$ $$ \begin{cases}
0 &\text{se } i \not = j \\
1 &\text{se } i = j
\end{cases} $$
:::

:::info[Proposição]
Um conjunto ortogonal $ S=\{v_1,v_2,...,v_n\}$ que não contenha o vetor nulo é linearmente independente
:::

:::info[Projeção ortogonal]
Num espaço lonear $W$ munido de um produto interno, a _projeção ortogonal_ do vetor $u \isin W$ sobre o vetor não nulo $v \isin W$. é definida por

$$ proj_u v =\dfrac{ \langle u,v\rang }{\| u \|^2} $$
:::

:::info[Desigualdade Triangular]
$$ \|u+v\|\le \|u\|+\|v\| $$
:::

### Complemento ortogonal

Dois subespaços $U$ e $V$ dizem-se _subespaços complementares_ se qualquer vetor de $W$ se escreve na forma $w=u+v$ e se a interseção dos subespaços é nula ($U\cap V=\{\empty \}$).

Tendo em conta esta definição,

$dim W= dim U+ dim V$

Pode-se expandir esta noção, criando a noção de

:::info[Complemento Ortogonal]
Seja $W$ um espaço linear munido de um produto intero e $S$ um subespaço de $W$
O _complemento ortogonal_ de $S$ é o conjunto de todos os vetores de $W$ que são ortogonais a qualquer vetor de S. Designamos o complemento ortogonal do subespaço $S$ por $S^\perp$.
:::

:::info[Proposição]
O complemento ortogonal $S^\perp$ do subespaço $S$ é um subespaço.
:::

:::info[Proposição]
Seja $S$ um subespaço e $S^\perp$ o seu complemento ortogonal. Verifica-se que:

$S \cap S^\perp=\{\empty\}$
:::

Tendo em conta que a interseção de um subespaço com o seu complemento ortogonal é o vazio, e tendo em conta que a sua união é o espaço, fica a questão de se qualquer vetor do espaço pode ser decomposto em vetores dos dois espaços. (Sim, e faz-se da seguinte forma)

:::info[Teorema da decomposição ortogonal]
Seja $W$ um espaço euclidiano e $S$ um subespaço de $W$. Qualquer vector $x\in W$ escreve-se de forma única como a soma de um vetor $x_S$ de $S$ com um vetor $x_{S^\perp}$ do complemento ortogonal de $S$. Isto é,

$x=x_S+x_{S^\perp}$ com $x_S \in S$ e $x_{S^\perp}$

Define-se a projeção ortognal de $x$ sobre o subespaço $S^\perp$ como $proj_{S^\perp}x=x_{S^\perp}$
:::

:::info[Hiperplano]
Num espaço linear de dimensão $n$, chama-se _hiperplano_ a um subespaço de dimensão $(n-1)$
:::

:::info[Teorema da melhor aproximação]
Sendo $W$ um espaço euclidiano e $S$ um subespaço de $W$ e $v$ um vetor de $W$, então

$\| x-proj_Sx\|\le \|x-u\|$ para qualquer $u \in S$
:::

:::info[Distância a um subespaço]
Seja $W$ um espaço linear, $S$ um subespaço de $W$ e $x$ um vetor de $W$. A distância de $x$ a $S$ é:

$dist(x,S)= \|proj_{S^\perp}x\|$
:::

:::info[Ortogonalidade dos subespaços fundamentais de uma Matriz]
$(EL(A))^\perp=N(A)$ e $(EC(A))^\perp=N(A^T)$
:::

### Ortogonalização de Gram-Schmidt

Expressar vetores numa base ortornormada é relativamente simples, mas fica a questão de como obter uma tal base, a partir de um conjunto já existente de vetores. Para tal pode-se usar o método de ortogonalização de Gram Schmidt.

:::info[Ortogonalização de Gram Schmidt]
Seja $V=\{v_1,v_2,...,v_k\}$, com $k>1$, um conjunto linearmente independente de um espaço euclidiano. O conjutno $U=\{u_1,u_2,...,u_k\}$ formado pelos vetores

$u_1=v_1$

$u_2=v_2-\frac{\langle u_1,v_2\rang}{\|u_1\|^2}$

$...$

$u_k=v_k-proj_{u_1}v_k-proj_{u_2}v_k-...-proj_{u_{k-1}}v_k$

é ortogonal.

Os conjuntos U e V geram o mesmo espaço.
:::
