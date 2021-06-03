---
description: RSA.
path: /md/cheatsheet/rsa
---

# Criptografia RSA (Cheat Sheet)

```toc

```

## Teoremas

### Teorema 1 - Pequeno Teorema de Fermat

Para todo o $a \in \N$ e para todo o $p$ primo,

$$a^p\equiv_pa$$

### Teorema 2

Para todo o $a \in \N$ e para todo o $p$ primo, se $a \frown p = 1$

$$a^{p-1}\equiv_p 1$$

### Teorema 3

Para todos os primos $p$ e $q$ distintos, para todo o $e \in \N$, tal que $e \frown (p-1)(q-1) = 1$, então  
Para todo o $M \in \N$, tal que $0 \leq M < pq = N$.

$$
M^{ed} \equiv_N M\\
d \rightarrow \text{inverso de }e\text{ módulo }(p-1)(q-1)
$$

## Chave Pública e Privada

Escolhem-se 2 primos $p$ e $q$ diferentes
Escolhe-se $e$, tal que $e \frown (p-1)(q-1)=1$
Determina-se $d$, o inverso de $e$ módulo $(p-1)(q-1)$
Comunica-se a `Chave Pública` $(N,e)$ e guarda-se a `Chave Privada` $(N,d)$, onde $N = pq$.

A `Chave Pública` servirá para encriptar a mensagem e a `Chave Privada` para a desencriptar.

Com os 2 primos já escolhidos: $13$ e $5$  
O expoente $(e): \quad 11$

$$N = 13\times5 = 65$$

Falta determinar o inverso de $e$, módulo $(13-1)(5-1) = 48 \quad (d)$  
Queremos resolver a `Eq. Diofantina`:

$$
1= (e\times d)+(48 \times k)\\
\begin{array}{c|c|c|c|}
i & a_i & q_i & d_i & m_i\\
\hline
0 & \textcolor{red}{48} &  & 1 & 0\\
1 & 11 & 4 & 0 & 1\\
2 & 4 & 2 & 1 & -4\\
3 & 3 & 1 & -2 & 9\\
3 & 1 & 3 & 3 & \textcolor{orange}{-13}\\
4 & 0
\end{array}\\
$$

Como $\textcolor{orange}{-13} < 0$ temos de somar $\textcolor{orange}{-13} +\textcolor{red}{48}$

Logo $d = 35$

A `Chave Pública` é $(65,11)$

A `Chave Privada` é $(65,35)$

![EZHACKS](./imgs/1005-hack.jpg#dark=1)
