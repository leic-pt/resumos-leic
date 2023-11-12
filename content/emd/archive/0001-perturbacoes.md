---
title: Método das Perturbações
description: 'Cálculo de somatórios através de perturbação direta e indireta'
path: /emd/archive/perturbacoes
type: archive
---

# Método das Perturbações

```toc

```

## Perturbação Direta

A perturbação direta consiste em obter o valor de $S_{n+1}$ de duas maneira diferentes,
de forma a ser possível igualar ambas as somas.

Vamos então ver um exemplo:

$$
S_n= \sum^n_{k=0} 2^k
$$

Para calcularmos $S_n$ vamos obter então o valor de $S_{n+1}$ de duas maneiras:

- Retirando o último elemento (simples)
- Retirando o primeiro elemento (complicado)

Retirar o último elemento é muito simples:

$$
S_{n+1} = \sum^{n+1}_{k=0} 2^k = \sum^n_{k=0} 2^k + 2^{n+1} = S_n + 2^{n+1}
$$

Retirar o primeiro elemento pode revelar-se trabalhoso, mas neste exemplo é relativamente simples:

$$
S_{n+1} =\sum ^{n+1}_{k=0} 2^{k} =2^{0} +\sum ^{n+1}_{k=1} 2^{k} =1+\sum ^{n}_{k=0} 2^{k+1} =1+\sum ^{n}_{k=0}\left( 2^{k} \times 2\right) =\\
=1+2\sum ^{n}_{k=0} 2^{k} =1+2S_{n}
$$

Juntamos agora ambas as expressões, e resolvemos em ordem a $S_n$:

$$
S_{n} +2^{n+1} =1+2S_{n} \Leftrightarrow S_{n} =2^{n+1} -1
$$

Calculámos assim o valor do somatório, $S_{n} = 2^{n+1} -1$.

:::tip[MAIS EXEMPLOS]
É possível encontrar mais exemplos de perturbação direta nos exercícios 1.1.1 da [Ficha Séries 1](/md/exercicios/fichas-aulas-praticas).
:::

## Perturbação Indireta

Por vezes, não é possível calcular o valor do somatório pois o método da perturbação direta é inconclusivo.  
Um exemplo deste caso é a seguinte soma:

$$
\sum^n_{k=0} k^2
$$

:::danger[INCONCLUSIVO]

Podemos tentar fazer os cálculos pelo método da perturbação direta, mas o resultado vai ser inconclusivo:

$$
S_{n+1} =\sum ^{n+1}_{k=0} k^{2} =\sum ^{n}_{k=0} k^{2} +( n+1)^{2} =S_{n} +( n+1)^{2}
$$

$$
S_{n+1} =\sum ^{n+1}_{k=0} k^{2} =0+\sum ^{n+1}_{k=1} k^{2} =\sum ^{n}_{k=0}( k+1)^{2} =\sum ^{n}_{k=0}\left( k^{2} +2k+1\right) =\\
=\sum ^{n}_{k=0} k^{2} +2\sum ^{n}_{k=0} k+\sum ^{n}_{k=0} 1=S_{n} +2\sum ^{n}_{k=0} k+( n+1)
$$

O problema é que ao juntar ambas as expressões, os $S_n$ anulam-se.

$$
S_{n} +( n+1)^{2} =S_{n} +2\sum ^{n}_{k=0} k+( n+1) \Leftrightarrow ( n+1)^{2} =2\sum ^{n}_{k=0} k+( n+1)
$$

:::

Então como é que podemos resolver este problema?  
Se analisarmos com atenção o resultado anterior, podemos concluir que ao calcular o valor de $\displaystyle \sum^n_{k=0}k^2$,
acabámos por conseguir calcular o valor de $\displaystyle \sum^n_{k=0}k$:

$$
S_{n} +( n+1)^{2} =S_{n} +2\sum ^{n}_{k=0} k+( n+1) \Leftrightarrow ( n+1)^{2} =2\sum ^{n}_{k=0} k+( n+1) \Leftrightarrow \\
\Leftrightarrow 2\sum ^{n}_{k=0} k=n^{2} +2n+1-( n+1) \Leftrightarrow \sum ^{n}_{k=0} k=\frac{n^{2} +n}{2}
$$

O que acontece então se tentarmos calcular o valor de $\displaystyle \sum^n_{k=0}k^3$?

$$
S'_{n} =\sum ^{n}_{k=0} k^{3}
$$

$$
S'_{n+1} =\sum ^{n+1}_{k=0} k^{3} =\sum ^{n}_{k=0} k^{3} +( n+1)^{3} =S'_{n} +( n+1)^{3}
$$

$$
S'_{n+1} =\sum ^{n+1}_{k=0} k^{3} =0+\sum ^{n+1}_{k=1} k^{3} =\sum ^{n}_{k=0}( k+1)^{3} =\sum ^{n}_{k=0}\left( k^{3} +3k^{2} +3k+1\right) =\\
=\sum ^{n}_{k=0} k^{3} +3\sum ^{n}_{k=0} k^{2} +3\sum ^{n}_{k=0} k+\sum ^{n}_{k=0} 1=S'_{n} +3S_{n} +3\sum ^{n}_{k=0} k+( n+1)
$$

Parece que vamos conseguir obter o valor de $S_n$ desta forma. Podemos também substituir o valor de $\displaystyle \sum ^{n}_{k=0} k$,
que foi calculado acima.  
Igualando então as duas expressões, conseguimos obter o valor de $\displaystyle \sum ^{n}_{k=0} k^2$:

$$
S'_{n} +(n+1)^{3} =S'_{n} +3S_{n} +3\sum ^{n}_{k=0} k+( n+1) \Leftrightarrow \\
\Leftrightarrow 3S_{n} =( n+1)^{3} -3\left(\frac{n^{2} +n}{2}\right) -( n+1) \Leftrightarrow \\
\Leftrightarrow S_{n} =\frac{( n+1)^{3}}{3} -\frac{n^{2} +n}{2} -\frac{n+1}{2} \Leftrightarrow \\
\Leftrightarrow \dotsc \Leftrightarrow S_{n} =\frac{n( n+1)( 2n+1)}{6}
$$

:::tip[MAIS EXEMPLOS]
É possível encontrar mais exemplos de perturbação indireta nos exercícios 1.1.2 da [Ficha Séries 1](/md/exercicios/fichas-aulas-praticas).
:::
