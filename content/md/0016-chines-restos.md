---
path: /md/teorema-chines-restos
---

# Teorema Chinês dos Restos

$$
\left\{ \begin{aligned}
  x \equiv_5 \quad 1\\
  x \equiv_7 \quad 3\\
  x \equiv_9 \quad 5
\end{aligned} \right.
$$

## Inverso

$ã \in \Z$ é o inverso de $a \in \Z$, para o módulo $n \in \N_1$, se

$$ã\times a = a\times ã \equiv_n 1$$

:::tip[NOTA]

- **Só há inverso** se $a \frown n = 1$ ($a$ primo com $n$)
- $1$ e $-1$ são os seus próprios inversos, para qualquer módulo.
- Não existe apenas só um inverso, mas vários. A expressão que dá todos os inversos $ã$ de um número $a$ módulo $n$, é dada por:

$$
ã = ã_0 + nt, t \in \Z\\
ã_0 \rightarrow \text{um inverso de }a \text{ módulo } n\text{ qualquer}
$$

:::

### Como Calcular o Inverso

Queremos saber $(a\times ã) \equiv_n 1$, e sabe-se $a$ e $n$.

1. Verificar se dá para fazer mentalmente

Para fazer mentalmente, tenta-se encontrar $k_0$ e $k_1$, tal que

$$
(a\times k_0) - (n \times k_1) = 1 \text{ ou } (-1)
$$

No primeiro caso, $(=1)$, $k_0=ã$, $k_0$ é um inverso.

No segundo caso, $ã= k_0 (-1)=-k_0$

Se quisermos uma solução positiva, podemos recorrer à [Solução Geral](#inverso).

2. Não dá para fazer mentalmente

Resolve-se a equação diofantina

$$(a\times k_0) + (n \times k_1) = 1$$

E $k_0$ será o inverso

:::details[Exemplo]

Calcular $22k_0 \equiv_{25} 1$, inverso de $22$ módulo $25$.  
Usando o método manual,

$$(7\times k_0) + (8 \times k_1) = 1,\quad k_0?$$

Pelo Algoritmo de Euclides (extendido)

$$
\begin{array}{c|c|c|c|}
i & a_i & q_i & d_i & m_i\\
\hline
0 & 25 &  & 1 & 0\\
1 & 22 & 1 & 0 & 1\\
2 & 3 & 7 & 1 & -1\\
3 & 1 &  & -7 & 8\\
4 & 0 & & &
\end{array}\\
25(-7) + 22(8) = 1\\
$$

Ou seja,

$$k_0 = 8 \quad \checkmark$$

A solução geral é dada por:

$$\lambda = 8 + 25t, \quad t \in \Z$$

:::

## Teoremas

### Teorema 1

$a_1, \dots, a_k \in \Z$ e $m_1,\dots,m_k \in \N_1$, com estes últimos primos entre si 2 a 2.  
O problema:

$$
\left\{ \begin{aligned}
  x & \equiv_{m_1} \quad a_1\\
  x & \equiv_{m_2} \quad a_2\\
  & \vdots\\
  x & \equiv_{m_k} \quad a_k
\end{aligned} \right.
$$

Tem solução única Módulo $M$

$$M = \prod_{i=1}^k m_i$$

### Teorema 2

$a_1, \dots, a_k \in \Z$ e $m_1,\dots,m_k \in \N_1$, com estes útlimos **não** necessariamente primos entre si.  
O problema,

$$
\left\{ \begin{aligned}
  x & \equiv_{m_1} \quad a_1\\
  x & \equiv_{m_2} \quad a_2\\
  & \vdots\\
  x & \equiv_{m_k} \quad a_k
\end{aligned} \right.
$$

Tem solução única módulo $M$

$$
M = m_1 \smile m_2 \smile \dots \smile m_K\\
a \smile b = mmc(a,b)
$$

**SE E SÓ SE**, $\forall i,j = 1,\dots, k$, tais que $1 \leq i < j \leq k$,

$$(m_i \frown m_j)|(a_i-a_j)$$

## Teorema Chinês dos Restos

### Módulos primos

$$
\left\{ \begin{aligned}
  x & \equiv_{m_1} \quad a_1\\
  & \vdots\\
  x & \equiv_{m_k} \quad a_k
\end{aligned} \right.
$$

$m_1,\dots,m_k$, primos entre si 2 a 2

Pelo [Teorema 1](#teorema-1), há sempre solução

A **Solução Geral** é dada por

$$
x = x_0 + Mt, \quad t \in \Z\\
x_0 = a_1n_1ñ_1 + \dots + a_kn_kñ_k
$$

Onde,

- $M = \prod_{i=1}^k m_i$
- $n_i = m_1\times\dots\times m_{i-1} \times m_{i+1}\times \dots \times m_k = \frac M {m_i}$
- $ñ_i$ é o inverso de $n_i$, módulo $m_i$

:::details[Exemplo]

$$
\left\{ \begin{aligned}
  3x+1 & \equiv_7 \quad 6\\
  x & \equiv_9 \quad 2\\
  x-2 & \equiv_4 \quad 1
\end{aligned} \right.
$$

$4$,$7$ e $9$ são primos entre si, 2 a 2.

1. Colocar tudo na forma $x \equiv_n a$

$$
3x +1 \equiv_7 6\\
3x \equiv_7 5
$$

Agora queremos encontrar o **inverso** de $3$ módulo $7$ ($3 \frown 7 = 1$), pois, sendo $k_7$ esse inverso,

$$
(3k_7)x \equiv_7 5k_7\\
x \equiv_7 5k_7
$$

De cabeça, verifica-se que $(3\times 5) -(7 \times 2) = 1$, logo $k_7 = 5$.

$$
(3\times5)x \equiv_7 (5\times5)\\
 x \equiv_7 25 \\
 x \equiv_7 4 \quad \checkmark
$$

$$x\equiv_9 2 \quad \checkmark$$

$$
x-2 \equiv_4  1\\
x \equiv_4 3 \quad \checkmark
$$

Para aprender a calcular inversos mais dificeis, consultar [Cálculo de Inversos](#inverso)

$$
\left\{ \begin{aligned}
  x & \equiv_7 \quad 4\\
  x & \equiv_9 \quad 2\\
  x & \equiv_4 \quad 3
\end{aligned} \right.\\
$$

Temos,

$$
a_1=4, a_2 = 2, a_3 = 3\\
m_1 = 7, m_2 = 9, m_3 = 4
$$

2. Calcular módulo da Solução ($M$)

$$
M = m_1\times m_2 \times m_3\\
= 7 \times 9 \times 4 = 252
$$

3. Calcular os **$n_i$** ($n_i = \frac M {m_i}$)

$$
\left\{ \begin{aligned}
  n_1 = m_2 \times m_3 = 9 \times 4 = 36\\
  n_2 = m_1 \times m_3 = 7 \times 4 = 28\\
  n_3 = m_1 \times m_2 = 7 \times 9 = 63
\end{aligned} \right.\\
$$

4. Caclular os inversos de $n_i$ módulo $m_i$ ($ñ_i$)

$$36ñ_1 \equiv_7 1, \quad 36 \frown 7 = 1$$

Como $(36\times1) - (7 \times 5) = 1, ñ_1 = 1$

$$28ñ_2 \equiv_9 1, \quad 28 \frown 9 = 1$$

Como $(28\times1) - (9 \times 3) = 1, ñ_2 = 1$

$$63ñ_3 \equiv_4 1, , \quad 63 \frown 4 = 1$$

Como $(63 \times 3) - (4 \times 47)=1, ñ_3 = 3$

5. Solução Particular e Geral

Solução **Geral** é dada por,

$$x = x_0 +252t, \quad t \in \Z$$

$$
x_0 = a_1n_1ñ_1+a_2n_2ñ_2+a_3n_3ñ_3\\
= (4\times36\times1)+(2\times28\times1)+(3\times63\times3)\\
= 144 + 56 + 567\\
= 767
$$

$$
x=767+252t\\
x=11 + 252t, \quad t \in \Z
$$

:::

### Módulos não primos

$$
\left\{ \begin{aligned}
  x & \equiv_{m_1} \quad a_1\\
  & \vdots\\
  x & \equiv_{m_k} \quad a_k
\end{aligned} \right.
$$

$m_1,\dots,m_k$, **não** necessariamente primos entre si.

Pelo [Teorema 2](#teorema-2), há solução, se $\forall i,j = 1,\dots, k$, tais que $1 \leq i < j \leq k$,

$$(m_i \frown m_j)|(a_i-a_j)$$

Se a condição se verificar, a **Solução Geral** é dada por

$$
x = x_0 + Mt, \quad t \in \Z\\
x_0 = a_1n_1ñ_1 + \dots + a_kn_kñ_k
$$

Onde,

- $M = \prod_{i=1}^k c_i$
- $c_i$ é tal que: $c_i|m_i$ e $c_1 \times \dots \times c_k = m_1 \smile \dots \smile m_k = M$  
  (com o exemplo fica claro)
- $c_1,\dots,c_k$ são primos 2 a 2.
- $n_i = c_1\times\dots\times c_{i-1} \times c_{i+1}\times \dots \times c_k = \frac M {c_i}$
- $ñ_i$ é o inveros de $n_i$, módulo $c_i$

:::details[Exemplo]

$$
\left\{ \begin{aligned}
  x &\equiv_{12} \quad &10\\
  x &\equiv_8 \quad &2\\
  x &\equiv_5 \quad &2
\end{aligned} \right.
\quad \Leftrightarrow \quad
\left\{ \begin{aligned}
  x &\equiv_{12} \quad &10\\
  x &\equiv_8 \quad &2\\
  x &\equiv_5 \quad &2
\end{aligned} \right.
$$

Já está tudo na forma $x \equiv_n a \quad \checkmark$

Repare-se que $12$ e $8$ **não** são primos entre si.

1. Verificar se existe solução

$$
m_1 \frown m_2 = 12 \frown 8 = 4, \qquad a_1-a_2=10-2=8\\
4 \textnormal{ divide } 8 \quad \checkmark \\
m_1 \frown m_3 = 12 \frown 5 = 1, \qquad a_1-a_3=10-2=8\\
1 \textnormal{ divide } 8 \quad \checkmark \\
m_2 \frown m_3 = 8 \frown 5 = 1, \qquad a_2-a_3=2-2=0\\
1 \textnormal{ divide } 0 \quad \checkmark \\
$$

2. Calcular os $c_i$ e $M$

$$
m_1 = 2^2 \times 3, \quad m_2 = 2^3, \quad m_3=5\\
m_1 \smile m_2 \smile m_3 = 2^3 \times 3 \times 5 = \prod_{i=1}^3c_i
$$

**Relembrar:** No cálculo do $mmc$, escolhemos todos os fatores primos, mas, se houver repetições, escolhemos o de **maior** expoente.

Como $c_i|m_i$,

$$
c_1 = 3, \quad c_2 = 2^3, \quad c_3 = 5
$$

$$M = 2^3 \times 3 \times 5 = 120$$

3. Calcular os $n_i$

$$
\left\{ \begin{aligned}
  n_1 = c_2 \times c_3 = 8 \times 5 = 40\\
  n_2 = c_1 \times c_3 = 3 \times 5 = 15\\
  n_3 = c_1 \times c_2 = 3 \times 8 = 24
\end{aligned} \right.\\
$$

4. Calcular os $ñ_i$

$$40ñ_1 \equiv_3 1$$

Como $(40\times1) - (3 \times 13) = 1, ñ_1 = 1$

$$15ñ_2 \equiv_8 1$$

Como $(15\times1) - (8 \times 2) = -1,\quad ñ_2 = -1(1) = -1$

**Atenção**: Podemos igualar a $-1$, em vez de $1$. Nestes casos, o inverso do número $n$ é $(-1 \times k)$, onde $nk \equiv_n -1$. Para mais esclarecimentos, consultar [Cálculo de Inversos](#inverso)

$$24ñ_3 \equiv_5 1$$

Como $(24 \times 1) - (5 \times 5)=-1,\quad ñ_3 = -1(1) = -1$

1. Solução Geral e Particular

$$x = x_0 +120t, \quad t \in \Z$$

$$
x_0 = a_1n_1ñ_1+a_2n_2ñ_2+a_3n_3ñ_3\\
= (1\times40\times1)+(2\times15\times-1)+(2\times24\times-1)\\
= 40 - 30 - 48\\
= -38
$$

$$
x=-38+120t\\
x=82 + 120t, \quad t \in \Z
$$

:::
