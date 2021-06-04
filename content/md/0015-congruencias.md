---
title: Congruências
path: /md/congruencias
---

# Congruências

## Definição

Dados 2 números $a , b \in \Z$ e um $n \in \N_1$, diz-se que **$a$ é congruente com $b$ para módulo $n$**, se:

$$
a-b = \dot{n}\\
\dot{n} \rightarrow \text{múltiplo de }n
$$

Podemos representar esta relação por:

- $a \equiv_n b$
- $a \equiv b \quad (\text{mod } n)$

Através desta definição, podemos também concluir facilmente que $a \equiv_n b$ se e só se **$a$ e $b$ têm o mesmo resto na divisão inteira por $n$**.

## Teoremas

### Teorema 1

Se adicionarmos, membro a membro, duas congruências do mesmo módulo, obtemos ainda uma congruência desse mesmo módulo.  
Ou seja,

$$
\begin{array}{c|cc}
 & a & \equiv_n & b \\
+ & c &  \equiv_n & d \\
\hline
 & a+c & \equiv_n &b+d
\end{array}
$$

:::details[Demonstração]

$$
\begin{array}{c|cc}
 & a & = & b + \dot{n} \\
+ & c & = & d + \dot{n} \\
\hline
 & a+c & = &b+d + \dot{n}
\end{array}
$$

(A soma de dois múltiplos de $n$ é um múltiplo de $n$)

:::

:::tip[NOTA IMPORTANTE]

- Esta propriedade também funciona para a **subtração** e **multiplicação**.

:::

### Teorema 2

Para $k \in \N$

$$
a \equiv_n b \quad \rightarrow \quad a^k \equiv_n b^k
$$

:::details[Demonstração]

Por indução,

1. $k=0$

$$
a^0 = 1 \equiv_n 1 = b^0
$$

2. Hereditariedade  
   **Hip**: $a^k \equiv_n b^k$, para todo o $k \in \N$ e $n \in \N_1$  
   **Tese**: $a^{k+1} \equiv_n b^{k+1}$, para todo o $k \in \N$ e $n \in \N_1$  
   Pelo [Teorema 1](#teorema-1) e pela `Hip. de Indução`

$$
\begin{array}{c|cc}
 & a & \equiv_n & b \\
\times & a^k &  \equiv_n & b^k \\
\hline
 & a^{k+1} & \equiv_n & b^{k+1}
\end{array}
$$

QED

:::

### Teorema 3

$ax \equiv_n b$ não tem solução se $d \nmid b$, onde $d = a \frown n$. No entanto, se $d \mid b$, então $ax \equiv_n b$ tem $d$ soluções incongruentes.

:::tip[Soluções Incongruentes]
Sejam $s_i$ e $s_j$ duas soluções, são incongruentes, se não forem congruentes módulo $n$, ou seja, $s_i \equiv_n a_i, \quad s_j \equiv_n a_j \quad \text{e} \quad a_i \neq a_j$
:::

:::details[Demonstração]

$$
 ax \equiv_n b\\
 ax + nk = b \quad k \in \Z
$$

Temos uma `equação diofantina` e sabe-se que este tipo de equações tem solução se e só se $d \mid b$ (relembrar: $d = a \frown n$). Podemos concluir, através das soluções de `equações diofantinas`,

$$
x = x_0 + \frac{n}{d}t, \quad t\in \Z
$$

Vamos tentar provar agora a existência de apenas $d$ soluções incongruentes.

Ao dividirmos $t$ por $d$, temos um quociente ($q$) e resto ($r$), tal que:

$$
t = dq + r, \quad 0 \leq r < d
$$

**NOTA:** Para valores diferentes de $t$, vamos ter valores diferentes de $q$ e $r$ ($d$ é fixo).  
Substituindo na equação das soluções,

$$
x = x_0 + \frac n d (dq+r)\\
x = x_0 +nq+ \frac n d r
$$

Como $nq$ é múltiplo de $n$,

$$x \equiv_n x_0 + \frac n d r$$

Isto significa que, se tivermos $t_1 = dq_1 + r$ e $t_2 = dq_2 + r$, onde $q_1 \neq q_2$, as soluções

$$
x_1 = x_0 + \frac n d t_1\\
x_2 = x_0 + \frac n d t_2
$$

**são congruentes módulo n entre si.**

As soluções incongruentes obtêm-se com os diferentes valores de $r$. Como $r=0,\dots,(d-1)$, concluímos que só existem $d$ soluções incongruentes.

QED
:::

### Teorema 4

Se $m_1, m_2 \in \N_1$ e são primos entre si $(m_1 \frown m_2 =1)$ e $m_1|a$ e $m_2|a$, então $(m_1m_2)|a$.

:::details[Demonstração]

$$
a = k_am_1 \quad a=k_bm_2\\
k_am_1 = k_bm_2
$$

Como $m_1 \frown m_2 = 1$, então, para a equação se verificar $k_a \mid m_2$ e $k_b \mid m_1$

$$
k_a = k \cdot m_2\\
a = k_am_1\\
a = k(m_1m_2)
$$

QED

:::

Generalizando este Teorema, se $m_1,\dots,m_k \in \N_1$, primos entre si, dois a dois, e $m_i \mid a$, para $i = 1,\dots,k$, então

$$
M \mid a, \qquad \text{com } M = \prod_{i=1}^{k}m_i
$$

### Teorema 5

Para todo o $a,b,c \in \Z$ e $n \in \N_1$,

$$
ac \equiv_n bc \quad a \equiv_{\frac n {n \frown c}} b
$$

:::details[Demonstração]

1. Condição necessária

Se $ac \equiv_n bc$, sabemos que $ac-bc = kn$, onde concluímos que $c(a-b)=kn$.  
Seja $d=n \frown c$,

$$(a-b)\frac c d = k \frac n d$$

Como $\frac c d$ e $\frac n d$ são primos entre si, concluímos (tal como em provas passadas) que $\frac n d \mid (a-b)$, por exemplo.  
Então,

$$
a-b = \lambda \frac n d \quad \lambda \in \Z\\
a = b+\lambda \frac n d\\
a \equiv_{\frac n d} b
$$

2. Condição suficiente

Se $a \equiv_{\frac n d} b$, com $d = c \frown n$, mais uma vez, então,

$$
a - b =  k \frac n d, \quad k \in \Z\\
ac - bc = k\cdot n \frac c d\\
ac -bc = \dot{n}\\
ac \equiv_n bc
$$

QED
:::

### Teorema 6

$x \equiv_{pq} a$ , se e só se $x \equiv_p a$ e $x \equiv_q a$,  
$a \in \Z$, $\quad p,q \in \N_1$ primos entre si ($p \frown q = 1$).

:::details[Demonstração]

1. Condição Necessária
   Assumindo que $x \equiv_{pq} a$,

$$
x-a = kpq,\qquad k \in \Z\\
x-a = k_pq, \qquad (k_p = kp, k_p \in \Z)\\
x \equiv_q a
$$

Por outro lado,

$$
x-a = k_qp, \qquad (k_q = kq, k_q \in \Z)\\
x \equiv_p q
$$

2. Condição Suficiente  
   Assumindo que $x \equiv_p a$ e $x \equiv_q a$.

$$
\left\{ \begin{aligned}
  x-a = k_0p, \quad k_0 \in \Z\\
  x-a = k_1q, \quad k_1 \in \Z\\
\end{aligned} \right.\\
k_1q = k_0p
$$

Como $q$ e $p$ são primos entre si, para a igualdade se verificar, $q | k_0$, por exemplo.  
Logo,

$$k_0 = \lambda q, \qquad \lambda \in \Z$$

Substituindo,

$$
x-a = \lambda q p\\
x \equiv_{pq} a
$$

QED
:::
