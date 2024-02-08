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


## Produto interno usual em  $$ \R^n$$


O produto interno usual em  $$ \R^n$$ pode ser definido simplesmente por


:::info[Definição]
Sejam x, y vetores de  $$ \R^n$$

Tal que $$ x=(x_1,x_2,x_3,... , x_n) $$

e      $$y=(y_1,y_2,y_3,..., y_n)$$

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
Sejam x, y vetores de  $$ \C^n$$

Tal que $$ x=(x_1,x_2,x_3,... , x_n) $$

e      $$y=(y_1,y_2,y_3,..., y_n)$$

$$ \langle x,y \rang =\bar{x}_1y_1 +\bar{x}_2y_2+...+\bar{x}_ny_n$$


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
$$ \langle x,y \rang =  \langle y,x \rang $$ (em $\R$) ou $$\langle x,y \rang =  \overline{\langle y,x \rang}$$ (em $\C$)
:::
:::info[Linearidade]
$$ \langle x,\alpha y + \beta z \rang =  \alpha \langle x,y\rang + \beta \langle x,z\rang$$ 
:::
:::info[Simetria]
$$ \langle x,x \rang \geqslant 0 $$ e $ \langle x,x \rang = 0 $  apenas quando $ x=0$
:::


A partir destas características fundamentais podese definir o conceito de espaço Euclidiano.

:::info[Espaço Euclidiano]
Espaço linear munido de munido de produto interno 
:::
Num espaço euclidiano definem-se os seguintes conceitos:

:::info[Norma]
$$ \parallel x\parallel = \sqrt[2]{x} $$ 
:::
:::info[Distância]
dist$$(u,v) = \parallel u-v\parallel $$ 
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
$ u \perp v<=>  \langle u,v\rang=0 $
:::