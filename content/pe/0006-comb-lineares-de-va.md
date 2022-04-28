---
title: Combinações Lineares de VA
path: pe/combinacoes-lineares-de-va
type: content
---

# Combinações Lineares de VA

```toc

```

Para VA $X_1, X_2, \cdots, X_n$ e $c_1, c_2, \cdots, c_n \in \R$ dizemos que a VA 
$$
Y = \sum_{i=1}^n c_i X_i
$$
é uma combinação linear de $X_1, \cdots, X_n$.

Muitas vezes é interessante estudar combinações lineares de VA's pelo que os seguintes resultados são muito importantes.

:::tip[Valor Esperado de Comb. Lineares de VA's]

$$
E \left( \sum_{i=1}^n c_i X_i \right) = \sum_{i=1}^n c_i E(X_i)
$$

:::

:::tip[Variância de Comb. Lineares de VA's]

$$
V \left( \sum_{i=1}^n c_i X_i \right) = 
\sum_{i=1}^n c_i^2 V(X_i) + 2 \sum_{i=1}^n \sum_{j=i+1}^n c_ic_jcov(X_i, X_j)
$$

Nomeadamente, para VA's independentes duas a duas ($X_i \indep X_j, \forall_{i,j \in \{0,1,\cdots,n\}, i \neq j}$) temos que

$$
V \left( \sum_{i=1}^n c_i X_i \right) = 
\sum_{i=1}^n c_i^2 V(X_i)
$$

:::

Dizemos que duas variáveis $X$ e $Y$ são [**independentes e identicamente distribuídas**](color:green) se $X \indep Y$ e tiverem a mesma distribuição (*com os mesmos parâmetros*).
Denotamos duas VA's [independentes e identicamente distribuídas](color:green) por $X \iid Y$ e apreviamos esta expressão frequentemente para [**iid**](color:green).  
Este conceito vai ser muito usado daqui em diante.

## Distribuições de Combinações Lineares de VA

:::tip[Comb. Lineares de Binomiais]

Se $X_i \sim binomial(n_i, p)$ forem variáveis independentes entre si para $i \in \{1,2,\cdots,k\}$ então
$$
\sum_{i=1}^k X_i \sim binomial \left( \sum_{i=1}^k n_i, p \right)
$$

De uma forma intuitiva, o que isto significa é que se eu primeiro fizer $n_1$ provas de Bernoulli, depois fizer mais $n_2$, e por aí em diante até $n_k$, o número de sucessos que vou ter *no total* corresponde ao número de sucessos que tive nas primeiras $n_1$ tentativas, mais os que tive nas $n_2$ seguintes, consecutivamente até às últimas $n_k$ experiências.  
Note-se que isto só é válido se *todas as provas de Bernoulli tiverem o mesmo parâmetro*, ou seja, a mesma probabilidade de sucesso.

:::

:::tip[Comb. Lineares de Poisson's]

Se $X_i \sim Poisson(\lambda_i)$ forem variáveis independentes entre si para $i \in \{1,2,\cdots,k\}$ então
$$
\sum_{i=1}^k X_i \sim Poisson \left( \sum_{i=1}^k \lambda_i \right)
$$

De uma forma intuitiva, o que isto significa é que se tivermos $k$ eventos que esperamos que ocorram $\lambda_1, \lambda_2, \cdots, \lambda_k$ vezes, respetivamente, num dado intervalo, então esperamos que a união desses eventos aconteça $\lambda_1 + \lambda_2 + \cdots + \lambda_k$ vezes nesse dado intervalo.  
Isto é uma consequência da linearidade do valor esperado.

:::

:::tip[Comb. Lineares de Normais]

Se $X_i \sim normal(\mu_i, \sigma_i^2)$ forem variáveis independentes entre si para $i \in \{1,2,\cdots,k\}$ então
$$
\sum_{i=1}^k c_i X_i \sim normal \left( \sum_{i=1}^k c_i \mu_i, \sum_{i=1}^k c_i^2 \sigma_i^2 \right)
$$

Isto é uma consequência direta das propriedade vistas acima para o valor esperado e variância de combinações lineares de VA's.  
Note-se que ao contrário dos outros casos, aqui vale qualquer combinação linear das VA's, e não apenas somas.

:::

:::tip[Comb. Lineares de Exponenciais]

Se $X \sim exponencial(\lambda)$ então 
$$
cX \sim exponencial(\frac{\lambda}{c})
$$

Isto é uma consequência direta de $E(cX) = cE(x)$ (relembre-se que o valor esperado de uma VA $X \sim exponencial(\lambda)$ é $\frac{1}{\lambda}$)

:::

## Teorema do Limite Central

Sejam $X_i, X_2, \cdots, X_n$ VA iid com valor esperado $\mu$ e variância $\sigma^2$.
Consideremos as VA
$$
S_n = \sum_{i=1}^n X_i
$$
$$
\overline{X_n} = \frac{1}{n} \sum_{i=1}^n X_i
$$
Então, temos que
$$
\lim_{n \to \infty} P \left( \frac{S_n - E(S_n)}{\sqrt{V(S_n)}} \leq z \right)
= \lim_{n \to \infty} P \left( \frac{S_n - n\mu}}{\sqrt{n\simga^2} \leq z \right)
= \Phi(z)
$$
$$
\lim_{n \to \infty} P \left( \frac{\overline{X_n} - E(\overline{X_n})}{\sqrt{V(\overline{X_n})}} \leq z \right)
= \lim_{n \to \infty} P \left( \frac{\overline{X_n} - \mu}}{\sqrt{\frac{\simga^2}{n}} \leq z \right)
= \Phi(z)
$$

Por outras palavras, temos que para $n$ suficientemente grande
$$
\frac{S_n - n\mu}{\sqrt{n\sigma^2}} \sima normal(0,1)
$$
$$
\frac{\overline{X_n} - \mu}{\sqrt{\frac{\sigma^2}{n}}} \sima normal(0,1)
$$

por observação empírica verificou-se que esta aproximação fica razoável para valores de $n$ superiores a **30**.

Este teorema permite-nos obter várias aproximações para distribuições.
Vamos ver agora aproximações distribuições, algumas que seguem do TLC, outras não.

## Aproximações de Distribuições

:::tip[]

Uma VA $X \sim hipergeométrica(N, M, n)$ pode ser aproximada por
$$
\tilde{X} \sim binomial(n, \frac{M}{N})
$$
para $n < 0.1 N$

A lógica por trás desta aproximação é que se a população for muito maior que a amostra (isto é, o número de individuos analisados), a não-reposição torna-se negligenciável.

:::

:::tip[]

Uma VA $X \sim binomial(n, p)$ pode ser aproximada por
$$
\tilde{X} \sim Poisson(np)$
$$
para $n>20$ e $p<0.1$.

:::

:::tip[]

Uma VA $X \sim binomial(n, p)$ pode ser aproximada por
$$
\tilde{X} \sim normal(np, np(1-p))
$$
para $np > 5$ e $n(1-p) > 5$.

Isto é uma consequência do TLC.

:::

:::tip[]

Uma VA $X \sim Poisson(\lambda)$ pode ser aproximada por
$$
\tilde{X} \sim normal(\lambda, \lambda)
$$
para $\lambda > 5$.

Isto é uma consequência do TLC.

:::

### Correção de Continuidade

Quando aproximamos VA discretas por VA contínuas, normalmente fazemos uma pequena correção para melhor a aproximação:
$$
P(X=x) \simeq P(x -\frac{1}{2} < \tilde X \leq x + \frac{1}{2})
$$
$$
P(a < X \leq b) \simeq P(a + \frac{1}{2} < \tilde X \leq b + \frac{1}{2})
$$
$$
P(X < x) = P(X \leq x-1) \simeq P(\tilde X < x - \frac{1}{2})
$$
