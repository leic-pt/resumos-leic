---
title: Estimação por Intervalos
description: Estimação por Intervalos
path: /pe/estimacao-por-intervalos
type: content
---

# Estimação por Intervalos

```toc

```

No capítulo anterior, além de introduzirmos o estudo da estatística, vimos métodos para indicar o valor mais provável para um certo parâmetro.
Neste capítulo, em vez de procurarmos formas de indicar o valor exato de um parâmetro, vamos procurar descobrir um intervalo no qual tenhamos um certo grau de confiança que o parâmetro esteja incluído.

:::tip[Intervalo de Confiança (IC)]

Damos o nome de [**intervalo de confiança**](color:orange) a um intervalo $[a_\alpha, b_\alpha]$ tal que, para um parâmetro desconhecido $\theta$, temos que

$$
P(\theta < a_\alpha) = P(\theta > b_\alpha) = \frac{\alpha}{2} \\
\Rightarrow P(a_\alpha \leq \theta \leq b_\alpha) = 1 - \alpha
$$

O valor $1-\alpha$ designa-se **grau de confiança** - temos $(1-\alpha) \times 100 \%$ de confiança que o parâmetro que queremos descobrir está no intervalo dado.

:::

## Método da VA fulcral

O [**método da VA fulcral**](color:purple) é um método que permite definir um IC com grau de confiança $1-\alpha$ (exato ou aproximado).
Para isto, é primeiro necessário identificar o **parâmetro desconhecido** $\theta$, a **VA de interesse** $X$, bem como a sua distribuição que pode ou não depender de outros parâmetros (conhecidos ou desconhecidos).

1. **Seleção da VA fulcral** - O primeiro passo corresponde à identificação de uma VA (fulcral) $Z = Z(\underline{X}, \theta)$, cuja distribuição seja independente de $\theta$. Note-se como esta VA depende da amostra aleatória $\underline{X}$. A seleção desta VA fulcral depende da distribuição de $X$, do parâmetro que queremos determinar e dos restantes parâmetros da distribuição $X$, conhecidos ou não (vamos ver como selecionar esta VA mais à frente);
2. **Obtenção dos quantis** - De seguida, temos de determinar $a_\alpha, b_\alpha$ tais que $P(Z < a_\alpha) = P(Z > b_\alpha) = \frac{\alpha}{2}$, ou seja
   $$
   a_\alpha = F_Z^{-1}\left(\frac{\alpha}{2}\right) \quad \quad \quad
   b_\alpha = F_Z^{-1}\left(1-\frac{\alpha}{2}\right)
   $$
3. **Obtenção dos extremos aleatórios** - Manuseamos as expressões acima para obter $T_1(\underline{X})$, $T_2(\underline{X})$ tais que $P(\theta \leq T_1(\underline{X})) = P(T_2(\underline{X}) \leq \theta) = \frac{\alpha}{2}$
4. **Concretização** - Finalmente, substituímos $\underline{X}$ por $\underline{x}$ de forma a obter $IC(\theta) = [T_1(\underline{x}), T_2(\underline{x})]$, com grau de confiança $1-\alpha$.

Abaixo, vamos ver que VA fulcral usar em diversos cenários.
Estas expressões podem ser encontradas no formulário pelo que não é preciso decorá-las, mas é relevante praticar e perceber em que situação se usa cada fórmula.  
No fim deste capítulo, encontram-se alguns exemplos para perceber melhor este método.

### Determinação de $\mu$ para $\sigma^2$ conhecido

Neste caso, estamos interessados em descobrir o valor do parâmetro $\mu$ (valor esperado) de uma VA arbitrária $X$ cuja variância já conhecemos.

**Parâmetro desconhecido**: $\mu$  
**VA de interesse**: Uma VA qualquer a que vamos chamar $X$  
**Outros parâmetros**: $\sigma^2$ (conhecido)

Se $X \sim \op{normal}(\mu, \sigma^2)$, sabemos que

$$
Z = \frac{\overline{X} - \mu}{\frac{\sigma}{\sqrt{n}}} \sim \op{normal}(0,1)
$$

Aplicando o método da VA fulcral à VA $Z$, obtemos um intervalo de confiança

$$
IC(\mu) = \left[ \overline{x} - \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \frac{\sigma}{\sqrt{n}}, \quad \overline{x} + \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \frac{\sigma}{\sqrt{n}} \right]
$$

com grau de confiança **exatamente** $1-\alpha$.

Se $X$ não seguir uma distribuição normal, invocamos o TLC para obter

$$
Z = \frac{\overline{X} - \mu}{\frac{\sigma}{\sqrt{n}}} \sima \op{normal}(0,1)
$$

e portanto podemos obter um intervalo de confiança

$$
IC(\mu) = \left[ \overline{x} - \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \frac{\sigma}{\sqrt{n}}, \quad \overline{x} + \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \frac{\sigma}{\sqrt{n}} \right]
$$

com grau de confiança **aproximadamente** $1-\alpha$.

### Determinação de $\mu_1 - \mu_2$ para $\sigma_1^2, \sigma_2^2$ conhecidos

:::danger[]

Esta determinação não é lecionada no programa de 2021/22.

:::

Neste caso, estamos interessados em descobrir o valor do parâmetro $\mu_1 - \mu_2$ (diferença entre os valores esperados) para duas VA arbitrárias $X_1, X_2$ independentes entre si ($X_1 \indep X_2$) cuja variância já conhecemos.

**Parâmetro desconhecido**: $\mu_1 - \mu_2$  
**VA de interesse**: Duas VA quaisquer a que vamos chamar $X_1, X_2$, $X_1 \indep X_2$  
**Outros parâmetros**: $\sigma_1^2, \sigma_2^2$ (conhecidos)

Se $X_i \sim \op{normal}(\mu_i, \sigma_i^2)$ ($i \in \{1,2\}$), temos que

$$
Z = \frac{(\overline{X_1} - \overline{X_2}) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sim \op{normal}(0,1)
$$

Aplicando o método da VA fulcral à VA $Z$, obtemos um intervalo de confiança

$$
IC(\mu) = \left[ (\overline{x_1} - \overline{x_2}) - \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}, \quad (\overline{x_1} - \overline{x_2}) + \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}  \right]
$$

com grau de confiança **exatamente** $1-\alpha$.

Se $X_1$ e $X_2$ não seguirem uma distribuição normal, invocamos o TLC para obter

$$
Z = \frac{(\overline{X_1} - \overline{X_2}) - (\mu_1 - \mu_2)}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}} \sima \op{normal}(0,1)
$$

e portanto podemos obter um intervalo de confiança

$$
IC(\mu) = \left[ (\overline{x_1} - \overline{x_2}) - \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}, \quad (\overline{x_1} - \overline{x_2}) + \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}  \right]
$$

com grau de confiança **aproximadamente** $1-\alpha$.

### Determinação de $\mu$ para $\sigma^2$ desconhecido

Neste caso, estamos interessados em descobrir o valor do parâmetro $\mu$ (valor esperado) de uma VA arbitrária $X$ cuja variância não conhecemos (portanto vamos ter de a estimar também).

**Parâmetro desconhecido**: $\mu$  
**VA de interesse**: Uma VA qualquer a que vamos chamar $X$  
**Outros parâmetros**: $\sigma^2$ (desconhecido)

Se $X \sim \op{normal}(\mu, \sigma^2)$, temos que

$$
Z = \frac{\overline{X} - \mu}{\frac{s}{\sqrt{n}}} \sim t_{(n-1)}
$$

em que $s$ é um estimador para a variância - a variância corrigida.  
Aplicando o método da VA fulcral à VA $Z$, obtemos um intervalo de confiança

$$
IC(\mu) = \left[ \overline{x} - F_{t_{(n-1)}}^{-1}\left(1-\frac{\alpha}{2}\right) \frac{s}{\sqrt{n}}, \quad \overline{x} + F_{t_{(n-1)}}^{-1}\left(1-\frac{\alpha}{2}\right) \frac{s}{\sqrt{n}} \right]
$$

com grau de confiança **exatamente** $1-\alpha$.

Se $X$ não seguir uma distribuição normal, invocamos o TLC para obter

$$
Z = \frac{\overline{X} - \mu}{\frac{s}{\sqrt{n}}} \sima \op{normal}(0,1)
$$

e portanto podemos obter um intervalo de confiança

$$
IC(\mu) = \left[ \overline{x} - \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \frac{s}{\sqrt{n}}, \quad \overline{x} + \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \frac{s}{\sqrt{n}} \right]
$$

com grau de confiança **aproximadamente** $1-\alpha$.

### Determinação de $\mu_1 - \mu_2$ para $\sigma_1^2, \sigma_2^2$ desconhecidos

:::danger[]

Esta determinação não é lecionada no programa de 2021/22.

:::

Neste caso, estamos interessados em descobrir o valor do parâmetro $\mu_1 - \mu_2$ (diferença entre os valores esperados) para duas VA arbitrárias $X_1, X_2$ independentes entre si ($X_1 \indep X_2$) cuja variância não conhecemos.

**Parâmetro desconhecido**: $\mu_1 - \mu_2$  
**VA de interesse**: Duas VA quaisquer a que vamos chamar $X_1, X_2$, $X_1 \indep X_2$  
**Outros parâmetros**: $\sigma_1^2, \sigma_2^2$ (desconhecidos)

Se $X_i \sim \op{normal}(\mu_i, \sigma_i^2)$ ($i \in \{1,2\}$), temos que

$$
Z = \frac{(\overline{X_1} - \overline{X_2}) - (\mu_1 - \mu_2)}{\sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}\left(\frac{1}{n_1} + \frac{1}{n_2} \right)}} \sim t_{(n-1)}
$$

Aplicando o método da VA fulcral à VA $Z$, obtemos um intervalo de confiança

$$
IC(\mu) = \left[
(\overline{x_1} - \overline{x_2}) - F_{t_{(n_1+n_2-2)}}^{-1}\left(1-\frac{\alpha}{2}\right) \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}\left(\frac{1}{n_1} + \frac{1}{n_2} \right)}, \quad
(\overline{x_1} - \overline{x_2}) + F_{t_{(n_1+n_2-2)}}^{-1}\left(1-\frac{\alpha}{2}\right) \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}\left(\frac{1}{n_1} + \frac{1}{n_2} \right)}
\right]
$$

com grau de confiança **exatamente** $1-\alpha$.

Se $X_1$ e $X_2$ não seguirem uma distribuição normal, invocamos o TLC para obter

$$
Z = \frac{(\overline{X_1} - \overline{X_2}) - (\mu_1 - \mu_2)}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} \sima \op{normal}(0,1)
$$

e portanto podemos obter um intervalo de confiança

$$
IC(\mu) = \left[ (\overline{x_1} - \overline{x_2}) - \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}, \quad (\overline{x_1} - \overline{x_2}) + \Phi^{-1}\left(1-\frac{\alpha}{2}\right) \sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}  \right]
$$

com grau de confiança **aproximadamente** $1-\alpha$.

### Determinação de $\sigma^2$ para $\mu$ desconhecido

Neste caso, estamos interessados em descobrir o valor do parâmetro $\sigma^2$ (variância) de uma VA $X$ cujo valor esperado não conhecemos.

**Parâmetro desconhecido**: $\sigma^2$  
**VA de interesse**: Uma VA qualquer que vamos chamar $X$  
**Outros parâmetros**: $\mu$ (desconhecido)

Se $X \sim \op{normal}(\mu, \sigma^2)$ temos que

$$
Z = \frac{(n-1)s^2}{\sigma^2} \sim \chi_{(n-1)}^2
$$

Aplicando o método da VA fulcral à VA $Z$, obtemos o intervalo de confiança

$$
IC(\sigma^2) = \left[
\frac{(n-1)s^2}{F^{-1}_{\chi_{(n-1)}^2} \left(1-\frac{\alpha}{2}\right)}, \quad
\frac{(n-1)s^2}{F^{-1}_{\chi_{(n-1)}^2} \left(\frac{\alpha}{2}\right)}
\right]
$$

com grau de confiança **exatamente** $1-\alpha$.

### Determinação de $p$ numa Prova de Bernoulli

:::warning[]

A expressão relativa a este cenário não se encontra no formulário: é preciso decorá-la!

:::

**Parâmetro desconhecido**: $p$  
**VA de interesse**: Uma VA com distribuição de Bernoulli $X$

Se $X \sim Bernoulli(p)$, temos, segundo o TLC, que para $n>>$

$$
\frac{\overline{X} - p}{\sqrt{\frac{\overline{X}(1-\overline{X})}{n}}} \sima \op{normal}(0,1)
$$

Aplicando o método da VA fulcral à VA $Z$, obtemos o intervalo de confiança

$$
IC(p) = \left[
\overline{x} - \Phi^{-1}\left(1-\frac{\alpha}{2}\right)\sqrt{\frac{\overline{x}(1-\overline{x})}{n}}, \quad
\overline{x} + \Phi^{-1}\left(1-\frac{\alpha}{2}\right)\sqrt{\frac{\overline{x}(1-\overline{x})}{n}}
\right]
$$

com grau de confiança **aproximadamente** $1-\alpha$.

### Determinação de $\lambda$ numa distribuição de Poisson

:::danger[]

Esta determinação não é lecionada no programa de 2021/22.

:::

**Parâmetro desconhecido**: $\lambda$  
**VA de interesse**: Uma VA com distribuição de Poisson $X$

Se $X \sim Poisson(\lambda)$, temos, segundo o TLC, que para $n>>$

$$
\frac{\overline{X} - \lambda}{\sqrt{\frac{\overline{X}}{n}}} \sima \op{normal}(0,1)
$$

Aplicando o método da VA fulcral à VA $Z$, obtemos o intervalo de confiança

$$
IC(p) = \left[
\overline{x} - \Phi^{-1}\left(1-\frac{\alpha}{2}\right)\sqrt{\frac{\overline{x}}{n}}, \quad
\overline{x} + \Phi^{-1}\left(1-\frac{\alpha}{2}\right)\sqrt{\frac{\overline{x}}{n}}
\right]
$$

com grau de confiança **aproximadamente** $1-\alpha$.

### Notas e Exemplos

:::tip[Nota]

Observe-se que só é possível obter intervalos de confiança exatos para VA's com distribuições normais.
Num exercício é importante perceber se procuramos o IC **exato** ou **aproximado** para determinar a VA fulcral a usar.

:::

:::details[Exemplo]

(Exemplo retirado do [Teste 2C de 2016/2017 de PE](https://fenix.tecnico.ulisboa.pt/homepage/ist13114/2o-semestre-2016-17))

A quantidade de minutos ($X$ , em centenas de minutos) de um jogador _two-way_ na NBA
possui **distribuição normal**, sendo os respetivos valor
esperado e variância desconhecidos. Sabendo que a concretização $(x_1, ..., x_n)$ de uma amostra
proveniente da população $X$ conduziu a $\sum_{i=1}^{10} x_i = 293$ e $\sum_{i=1}^{10} x_i^2 = 8745$.

Caso queiramos construir um intervalo de confiança a $90\%$ para o desvio padrão
de um jogador do tipo referido, devemos:

1. [**Selecionar a VA Fulcral**](color:green)

$\mu$ e $\sigma^2$ são desconhecidos. Querendo um intervalo de confiança para $\sigma$,
faz sentido escolher a VA:

$$
Z = \frac{(n-1)S^2}{\sigma^2} \sim \chi_{(n-1)}^2
$$

2. [**Obter os quantis de probabilidade**](color:orange)

Temos que $n=10$ e $(1 - \alpha) = 0.9$, pelo que:

$$
\begin{aligned}
   (a_\alpha, b_\alpha): &\begin{cases}
      P(a_\alpha \leq Z \leq b_\alpha) = 1 - \alpha \\
      P(Z < a_\alpha) = P(Z > b_\alpha) = \frac{\alpha}{2}
   \end{cases}\\
   &\begin{cases}
      a_\alpha = F_{\chi_{(n-1)}^2}^{-1} (\frac{\alpha}{2}) = F^{-1}_{\chi_{(n-1)}^2} (0.05) \overset{\text{tabela}}{=} 3.325 \\
      b_\alpha = F_{\chi_{(n-1)}^2}^{-1} (1 - \frac{\alpha}{2}) = F^{-1}_{\chi_{(n-1)}^2} (0.95) \overset{\text{tabela}}{=} 16.92
   \end{cases}
\end{aligned}
$$

3. [**Inverter a desigualdade $a_\alpha \leq Z \leq b_\alpha$**](color:yellow)

$$
\begin{aligned}
   & P(a_\alpha \leq Z \leq b_\alpha) = 1 - \alpha \\
   & P\biggl[a_\alpha \leq \frac{(n-1)S^2}{\sigma^2} \leq b_\alpha \biggr] = 1 - \alpha \\
   & P\biggl[\frac{1}{b_\alpha} \leq \frac{\sigma^2}{(n-1)S^2} \leq \frac{1}{a_\alpha} \biggr] = 1 - \alpha \\
   & P\biggl[\frac{(n-1)S^2}{b_\alpha} \leq \sigma^2 \leq \frac{(n-1)S^2}{a_\alpha} \biggr] = 1 - \alpha \\
   & P\biggl[\sqrt{\frac{(n-1)S^2}{b_\alpha}} \leq \sigma \leq \sqrt{\frac{(n-1)S^2}{a_\alpha}} \biggr] = 1 - \alpha \\
\end{aligned}
$$

4. [**Concretizar**](color:red)

Vamos ter, para os dados do enunciado, que:

$$
\begin{aligned}
   s^2 &= \frac{1}{n - 1}\biggl[\sum_{i=1}^{n}{x_i}^2 - n (\overline{x})^2 \biggr] \\
   &= \frac{1}{10 - 1}(8745 - 10 \cdot 29.3^2) \\
   &= 17.7(8)
\end{aligned}
$$

Fazendo as devidas substituições, vamos ter um intervalo de confiança para o desvio padrão tal que:

$$
\begin{aligned}
IC_{90\%}(\sigma) &= \biggl[\sqrt{\frac{(n-1)S^2}{b_\alpha}}, \sqrt{\frac{(n-1)S^2}{a_\alpha}} \biggr] \\
&= \biggl[\sqrt{\frac{(10 - 1)\cdot 17.7(8)}{16.92}}, \sqrt{\frac{(10 - 1)\cdot 17.7(8)}{3.325}} \biggr] \\
&= [3.0762, 6.9389] \\
\end{aligned}
$$

:::
