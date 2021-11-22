---
title: Séries Numéricas
description: >-
  Série Numérica.
  Natureza de uma Série.
  Critérios de Convergência.
  Soma de Séries.
  Séries Geométrica, Redutível, de Mengoli.
  Séries de Termos não Negativos.
  Critério Geral de Comparação.
  Série de Dirichlet.
  Critérios da razão e de D'Alembert.
  Critério da raiz.
  Critério do Integral.
  Exemplos do estudo da Natureza de séries.
  Convergência simples e absoluta.
  Critério do módulo.
  Critério de Leibnitz.
  Permutação de termos e soma por blocos.
  Teorema de Riemann.
  Produto de Cauchy de duas sucessões.
  Teorema de Mertens.
path: /cdi-i/series-numericas
type: content
---

```toc

```

# Série Numérica

:::warning

O PDF da aula 27, páginas 1-2 começa com um exemplo do Paradoxo de Zenão, que pode ajudar a perceber melhor o conceito de série.

:::

Dada uma sucessão de números reais $(u_n)$, chama-se série de termo geral $u_n$, e escreve-se

$$
\sum^\infin_{n=1}u_n
$$

à soma de todos os termos de $(u_n)$.

Se essa soma for finita $(u_n)$ diz-se [**somável**](color:orange) e a série diz-se [**convergente**](color:green), caso contrário a sucessão diz-se [**não somável**](color:orange) e a série é [**divergente**](color:pink).

Quando a série é [**convergente**](color:green), chama-se [**soma da série**](color:orange) à soma de todos os termos de $(u_n)$.

Uma série não é nada mais nada menos do que a soma infinita de todos os termos de uma sucessão.

Como a dificuldade do estudo de uma série é proveniente de a soma ser de infinitos termos, considera-se assim as somas de um número finito de termos.

## Sucessão de somas parciais de uma série

Seja $(u_n)$ uma sucessão de números reais. Chama-se sucessão das somas parciais da série de termo geral $u_n$ à sucessão cujo termo de ordem $n$ é dado por:

$$
S_n=\sum^n_{k=1}u_k
$$

A série de termo geral $u_n$ é convergente se e só se $(S_n)$ é uma sucessão convergente. Nesse caso chama-se soma da série ao limite de $(S_n)$, o qual representa, naturalmente, a soma de todos os termos de $(u_n)$.

Assim, quando $S_n\to S\in\R$, a série [**converge**](color:green) e:

$$
\sum^\infin_{n=1}u_n=S
$$

Também de pode escrever o mesmo para $\overline\R$, mas neste caso a série é [**divergente**](color:pink).

Define-se [**sucessão de somas parciais de uma série**](color:orange) $(S_n)$ como uma sucessão em que cada termo é a soma até $n$ termos de $(u_n)$.

Por exemplo:

- $S_2$ seria a soma dos dois primeiros termos de $(u_n)$: $S_2=u_1+u_2$.

Caso esta sucessão $(S_n)$ tenha limite finito, a série é [**convergente**](color:green), e o limite corresponde à **soma da série**.

## Natureza de uma série

Já se observou que uma série pode ser [**convergente**](color:green) ou [**divergente**](color:pink).

Os termos iniciais de uma série não alteram a sua natureza (porém alteram o valor da sua soma), logo podemos estudar o seu comportamento apenas para $n>>$.

Fixando um $p\in\N^+$:

$$
S_n=\sum^p_{k=1}u_k+\sum^n_{k=p+1}u_k
$$

em que o primeiro termos é uma constante, para $n>p$. Então, a sucessão [**converge**](color:green), se e só se o segundo termo é uma sucessão convergente.

👉 **Representação de série de termo geral $u_n$:** $\sum u_n$.

## Critérios de convergência

### Condição necessária de convergência

Seja $u_n$ o termo geral de uma série convergente. Então, $u_n\to0$.

No entanto, isto é apenas uma condição necessária e não uma condição suficiente, logo [**não**](color:red) se pode concluir a convergência de uma série a partir do facto de o termo geral ser um infinitésimo.

Se uma série é [**convergente**](color:green), então $u_n\to0$. Nada se pode concluir a partir de $u_n\to0$.
No entanto, permite concluir que se o termo geral não é um infinitésimo, então a série [**diverge**](color:pink).

:::details[Exemplos]

$$
\sum\left(1+\frac1n\right)^n
$$

Como o termo geral tende para $e$, a série é divergente.

---

$$
\sum \cos\left(\frac{1}{n}\right)
$$

Como o termo geral tende para $1$, a série é divergente.

---

$$
\sum\frac1n
$$

Como o termo geral tende para $0$ (infinitésimo), nada se pode concluir pelo critério acima.

:::

### Resto de Ordem $n$

Seja $(u_n)$ uma sucessão de números reais somável. Chama-se resto de ordem $n$ da série de termo geral $u_n$ à sucessão cujo termo de ordem $n$ é dado por

$$
r_n=\sum^\infin_{k=n+1}u_k
$$

Se $(u_n)$ é somável, então, $(r_n)$ é um infinitésimo.

Chama-se [**resto de ordem $n$**](color:orange) à diferença entre o valor da soma de uma série e o valor de $S_n$. Caso a série seja convergente, o resto tende para zero (infinitésimo).

Por exemplo:

- Sendo $S_2=u_1+u_2$, então $r_2=u_3+u_4+\dots+u_n = \sum^\infin_{k=3}u_k$.

## Soma de séries

Sejam $\alpha\in\R$ e duas séries convergentes

$$
\sum^\infin_{n=1}a_n \quad\text{ e}\quad \sum^\infin_{n=1}b_n
$$

- A série soma das suas séries é a série [**convergente**](color:green) cujo termo geral é $a_n+b_n$.
- A série multiplicação da série de termo geral $a_n$ por $\alpha$ é a série [**convergente**](color:green) cujo termo geral é $\alpha a_n$.
- O conjunto de séries convergentes é um [espaço linear](https://en.wikipedia.org/wiki/Vector_space#Definition) de dimensão infinita.

Como a natureza de uma série não depende dos primeiros termos, pode definir-se a série soma de, com $p_1\ne p_2$:

$$
\sum^\infin_{n=p_1}a_n \quad\text{ e}\quad \sum^\infin_{n=p_2}b_n
$$

Supondo que $p_1<p_2$, a série soma pode ser definida por:

$$
\sum^{p_2-1}_{n=p_1}a_n +\sum^\infin_{n=p_2}(a_n+b_n)
$$

👉 Apenas se pode realizar soma de séries entre séries convergentes.

As somas entres todas as outras séries não estão definidas, mas pode-se somar o termo geral para obter uma nova série, tal que:

- A soma do termo geral de uma série [**convergente**](color:green) com o termo geral de uma série [**divergente**](color:pink) é sempre o termo geral de uma série [**divergente**](color:pink).
- A soma dos termo gerais de duas séries [**divergentes**](color:pink) pode ser o termo geral de uma série [**convergente**](color:green) ou [**divergente**](color:pink).

:::details[Exemplos]

Considerando as séries [**convergentes**](color:green) (porque são geométricas):

$$
\sum ^{\infty }_{n=1} 3\cdot 2^{-n} \quad \text{e} \quad \sum ^{\infty }_{n=1} 2\cdot 3^{-n}
$$

A soma destas duas séries é uma série [**convergente**](color:green), de termo geral $6\left(2^{-n-1}+3^{-n-1}\right)$.

---

Considerando as seguintes séries, a primeira [**convergente**](color:green) e a segunda [**divergente**](color:pink).

$$
\sum ^{\infty }_{n=1} 3\cdot 2^{-n} \quad \text{e} \quad \sum ^{\infty }_{n=1}\cos\left(\frac{1}{n}\right)
$$

A soma destas séries não está definida, mas sabe-se que a série de termo geral ${3\cdot 2^{-n}+\cos\left(\frac1n\right)}$ é uma série divergente.

---

Considerando as seguinte séries, ambas [**divergentes**](color:pink).

$$
\sum ^{\infty }_{n=1}\left[ 3\cdot 2^{-n} +\cos\left(\frac{1}{n}\right)\right] \quad \text{e} \quad \sum ^{\infty }_{n=1} -\cos\left(\frac{1}{n}\right)
$$

A soma destas séries não está definida, e não é imediato qual a **natureza da série** cujo termo geral é a soma dos termos gerais destas duas séries.

Podemos, no entanto, reconhecer que vai ser uma série [**convergente**](color:green), porque a soma dos termos gerais vai ser $3\cdot 2^{-n}$, cuja convergência da série já foi estudada.

---

Considerando as seguinte séries, ambas [**divergentes**](color:pink).

$$
\sum ^{\infty }_{n=1} 3\cos\left(\frac{1}{n}\right) \quad \text{e} \quad \sum ^{\infty }_{n=1}\cos\left(\frac{1}{n}\right)
$$

A soma destas séries não está definida, e não é imediato qual a **natureza da série** cujo termo geral é a soma dos termos gerais destas duas séries.

No entanto, podemos reparar que a soma dos termos gerais ($4\cos\left(\frac{1}{n}\right)$) não é um infinitésimo, logo a série cujo termo geral é a soma dos termos gerais das duas séries acima, é [**divergente**](color:pink).

:::

## Série Geométrica

Define-se como série geométrica qualquer série da forma

$$
\sum^\infin_{n=p}\left(K\cdot r^n\right)
$$

com $K,r\in\R$.

Uma série geométrica é convergente se e só se $|r|<1$ e, nesse caso, a soma da série dada é:

$$
S=\frac{K\cdot r^p}{1-r}
$$

:::details[Exemplos]

$$
\sum^\infin_{n=1}2^n
$$

É [**divergente**](color:pink), pois $|r|>1$.

---

$$
\sum^\infin_{n=1}2\times3^{-n}=\sum^\infin_{n=1}2\times\left(\frac{1}{3}\right)^{n}
$$

É [**convergente**](color:green), pois $|r|<1$, e a sua soma é $S=\frac{2\cdot \left(\frac 13\right)^1}{1-\frac13}=\frac23\times\frac32=1$.

:::

## Série de Mengoli

Uma série de Mengoli é uma série que tem uma das duas formas:

$$
\sum ^{\infty }_{n=p}( u_{n} -u_{n+1}) \quad \text{ou} \quad \sum ^{\infty }_{n=p}( u_{n+1} -u_{n})
$$

e é convergente se e só se $(u_n)$ é uma sucessão convergente.

Nesse caso, a sua soma é [$S=u_p-\lim u_n$](color:orange) para o primeiro caso e [$S=\lim u_n-u_p$](color:orange) para o segundo.

:::details[Exemplos]

$$
\sum ^{\infty }_{n=1}\left(\frac{1}{n+5} -\frac{1}{n+4}\right)
$$

Logo, é uma série de Mengoli da forma

$$
\sum ^{\infty }_{n=1}( u_{n+1} -u_{n}) \quad \text{com} \quad u_{n} =\frac{1}{n+4}
$$

Como $\lim u_n=0\in\R$, a série é [**convergente**](color:green) e a sua soma é:

$$
u_{1} =\frac{1}{1+4} =\frac{1}{5} \quad \quad S=0-\frac{1}{5} =-\frac{1}{5}
$$

---

$$
\sum ^{\infty }_{n=0}\left(\frac{1}{1+e^{-n}} -\frac{1}{1+e^{-n-1}}\right)
$$

Logo, é uma série de Mengoli da forma

$$
\sum ^{\infty }_{n=0}( u_{n} -u_{n+1}) \quad \text{com} \quad u_{n} =\frac{1}{1+e^{-n}}
$$

Como $\lim u_n=1\in\R$, a série é [**convergente**](color:green) e a sua soma é:

$$
u_{0} =\frac{1}{1+e^{0}} =\frac{1}{2} \quad \quad S=\frac{1}{2} -1=-\frac{1}{2}
$$

---

$$
\sum ^{\infty }_{n=1}\left(\sin\frac{n\pi }{4} -\sin\frac{( n+1) \pi }{4}\right)
$$

Também é uma série de Mengoli da forma

$$
\sum ^{\infty }_{n=1}( u_{n} -u_{n+1}) \quad \text{com} \quad u_{n} =\sin\frac{n\pi }{4}
$$

No entanto, como a sucessão $(u_n)$ é divergente, a série é [**divergente**](color:pink).

:::

## Série Redutível

Diz-se que uma série é redutível se existem $\alpha\in\R\backslash\{0\}$ e $k,p\in\N^+$ tais que a série se pode escrever na forma

$$
\sum ^{\infty }_{n=p}\left[ \alpha ( u_{n} -u_{n+k})\right]
$$

A série é convergente se e só se a sucessão definida por

$$
v_n=\sum^{k-1}_{j=0}u_{n+j}
$$

é uma sucessão convergente. Nesse caso, a soma da série é dada por

$$
S=\alpha(v_p-\lim v_n)
$$

### Condição suficiente de convergência de uma série redutível

Como a condição de convergência não é muito fácil de verificar, usa-se o seguinte:

Se $u_n\to L\in\R$, então a série redutível

$$
\sum ^{\infty }_{n=p}\left[ \alpha ( u_{n} -u_{n+k})\right]
$$

é convergente e a sua soma é

$$
S=\alpha(v_p-k\cdot L)
$$

:::details[Exemplos]

$$\sum ^{\infty }_{n=2}\frac{2}{n^{2} +4n+3}$$

Podemos usar a técnica adquirida na [Primitivação de Funções Racionais](/cdi-i/primitivacao#primitivas-de-uma-função-racional) para decompor o termo geral numa soma de frações mais simples.

$$
\frac{2}{n^{2} +4n+3} =\frac{2}{( n+1)( n+3)} =\frac{A}{n+1} +\frac{B}{n+3}\\
\\
A( n+3) +B( n+1) =2\Leftrightarrow \begin{cases}
A+B=0\\
3A+B=2
\end{cases} \Leftrightarrow \begin{cases}
A=1\\
B=-1
\end{cases}\\
\\
\frac{2}{n^{2} +4n+3} =\frac{1}{n+1} -\frac{1}{n+3}
$$

Então, a série pode ser escrita na forma:

$$
\sum ^{\infty }_{n=2}\left(\frac{1}{n+1} -\frac{1}{n+3}\right)
$$

Que não é de Mengoli, mas é quase, podendo somar e subtrair o termo $\frac1{n+2}$ para a transformar numa série de Mengoli:

$$
\sum ^{\infty }_{n=2}\left[\left(\frac{1}{n+1} +\frac{1}{n+2}\right) -\left(\frac{1}{n+2} +\frac{1}{n+3}\right)\right]
$$

Esta é uma série de Mengoli da forma:

$$
\sum ^{\infty }_{n=2}( u_{n} -u_{n+1}) \quad \text{com} \quad u_{n} =\frac{1}{n+1} +\frac{1}{n+2}
$$

Como $u_n\to0\in\R$, a série é [**convergente**](color:green) e a sua soma é

$$
u_{2} =\frac{1}{2+1} +\frac{1}{2+2} =\frac{1}{3} +\frac{1}{4} =\frac{7}{12} \quad \quad S=\frac{7}{12} -0=\frac{7}{12}
$$

:::

# Séries de Termos não Negativos

## Resumo Critérios de Convergência

👉 Muitas vezes só se consegue estudar a convergência de uma série, não sendo possível determinar a sua soma.

- A série é [**convergente**](color:green) se e só se a sucessão das somas parciais é [**convergente**](color:green).
- Se o termo geral da série não é um infinitésimo, a série é [**divergente**](color:pink).
- Se o resto de ordem $n$ não é um infinitésimo, a série é [**divergente**](color:pink).
- Se o termo geral da série é a soma de dois termos gerais de séries [**convergentes**](color:green), a série é [**convergente**](color:green).
- Se o termo geral da série é a soma do termo geral de uma série [**convergente**](color:green) com o termo geral de uma série [**divergente**](color:pink), a série é [**divergente**](color:pink).
- Se o termo geral é o produto de uma constante real pelo termo geral de uma série [**convergente**](color:green), a série é [**convergente**](color:green).
- Se a série é geométrica, ela [**converge**](color:green) se e só se a sua razão tem módulo inferior a 1
- Se o termo geral da série é da forma $u_n-u_{n+1}$ a série [**converge**](color:green) se e só se $(u_n)$ é [**convergente**](color:green).

## Critério geral de comparação (CGC)

Se $u_n$ for não positivo, para $n>>$, a série de termo geral $-u_n$ só tem termos não negativos, para $n>>$, e tem a mesma natureza que a série de termo geral $u_n$.
Assim, a partir daqui, estudam-se apenas as séries de termos gerais não negativos, para $n>>$.

Sejam $(a_n)$ e $(b_n)$ duas sucessões de números reais tais que

$$
0\le a_ n\le b_n\quad,\quad n>>
$$

- Se a série de termo geral $a_n$ for [**divergente**](color:pink), a série de termo geral $b_n$ é [**divergente**](color:pink).
- Se a série de termo geral $b_n$ for [**convergente**](color:orange), a série de termo geral $a_n$ é [**convergente**](color:orange).

Seja $(a_n)$ e $(b_n)$ tal que $0\le a_n\le b_n\quad,\quad n>>$:

- Série de $a_n$ é [**divergente**](color:pink) $\implies$Série de $b_n$ é [**divergente**](color:pink)
- Série de $b_n$ é [**convergente**](color:orange) $\implies$Série de $a_n$ é [**convergente**](color:orange)

:::details[Exemplos]

Seja a série:

$$
\sum ^{\infty }\frac{1}{n!}
$$

Como $2^n<<n!$ pela escala de sucessões, têm-se $2^n\le n!$ para $n>>$.

Então, para $n>>$:

$$
0\leqslant \frac{1}{n!} \leqslant \frac{1}{2^{n}} =2^{-n} =\left(\frac{1}{2}\right)^{n}
$$

A série de termo geral $2^{-n}$ é uma série geométrica de razão $\frac12$, sendo [**convergente**](color:green), e portanto, pelo CGC, a série de termo geral $\frac{1}{n!}$ também é [**convergente**](color:green).

---

Seja a série:

$$
\sum ^{\infty }\frac{1}{n^{2}}
$$

Para $n>1$, tem-se:

$$
0\leqslant \frac{1}{n^{2}} \leqslant \frac{1}{n( n-1)}
$$

Pela decomposição em funções simples:

$$
\frac{1}{n( n-1)} =\frac{A}{n} +\frac{B}{n-1} \Leftrightarrow 1=A( n-1) +Bn\\\\\begin{aligned}n=0\Longrightarrow  & 1=-A\Leftrightarrow A=-1\\n=1\Longrightarrow  & B=1\end{aligned}\\\\\frac{1}{n( n-1)} =\frac{1}{n-1} -\frac{1}{n}
$$

Então, a série é uma série de Mengoli [**convergente**](color:green), do tipo

$$
\sum ^{\infty }( u_{n} -u_{n+1}) \quad \text{com} \quad u_{n} =\frac{1}{n}\rightarrow 0\in \mathbb{R}
$$

Então, pelo CGC, a série de termo geral $\frac1{n^2}$ também é [**convergente**](color:green).

---

Seja a série:

$$
\sum ^{\infty }\frac{1}{\sqrt{n}}
$$

Para qualquer $n\in\N^+$:

$$
0\leqslant \frac{1}{\sqrt{n+1} +\sqrt{n}} \leqslant \frac{1}{\sqrt{n}}
$$

Por outro lado,

$$
\frac{1}{\sqrt{n+1} +\sqrt{n}} =\frac{\sqrt{n+1} -\sqrt{n}}{( n+1) -n} =\sqrt{n+1} -\sqrt{n}
$$

e a série de termo geral $\sqrt{n+1}-\sqrt n$ é da forma:

$$
\sum ^{\infty }( u_{n+1} -u_{n}) \quad \text{com} \quad u_{n} =\sqrt{n}\rightarrow +\infty
$$

Então, como a série de termo geral $\frac{1}{\sqrt{n+1} +\sqrt{n}}$ é [**divergente**](color:pink), pelo CGC, a série de termo geral $\frac1 {\sqrt n}$ também é [**divergente**](color:pink).

:::

### Critério de comparação (com recurso ao limite) (CC)

Sejam $(a_n)$ e $(b_n)$ duas sucessões de números reais tais que, para $n>>$, $a_n\ge 0$ e $b_n>0$.

Então, se

$$
\frac{a_n}{b_n}\to L\in\R^+
$$

as séries de termos gerais $a_n$ e $b_n$ têm a mesma natureza.

Se $\frac{a_n}{b_n}\to L\in\R^+$, então as séries de termos gerais $a_n$ e $b_n$ têm a mesma natureza (são ambas [**convergentes**](color:green) ou ambas [**divergentes**](color:pink))

Mesmo se o limite for $0$ ou $+\infin$, o critério _pode_ permitir alguma conclusão, a partir do CGC, se a sucessão de comparação tiver a natureza apropriada para esse fim.

- Se o limite de comparação é $0$, então $a_n<b_n$, para $n>>$
- Se o limite de comparação é $+\infin$, então $b_n<a_n$, para $n>>$

:::details[Exemplos]

Seja a série:

$$
\sum ^{\infty }\sin\frac{1}{\sqrt{n}}
$$

Tem-se que:

$$
\frac{\sin\frac{1}{\sqrt{n}}}{\frac{1}{\sqrt{n}}}\rightarrow 1\in \mathbb{R}^{+}
$$

Logo, as séries de termos gerais $\sin\frac1{\sqrt n}$ e $\frac 1{\sqrt n}$ têm a mesma natureza. Logo, pelos exemplos anteriores, são ambas [**divergentes**](color:pink).

---

Seja a série:

$$
\sum ^{\infty }\left( 2^{n}\sin\frac{1}{3^{n}}\right)
$$

Tem-se que:

$$
\frac{2^{n}\sin\frac{1}{3^{n}}}{\left(\frac{2}{3}\right)^{n}} =\frac{\sin\frac{1}{3^{n}}}{\frac{1}{3^{n}}}\rightarrow 1\in \mathbb{R}^{+}
$$

Como a série de termo geral $\left(\frac23\right)^n$ é uma série geométrica de razão $<1$, é [**convergente**](color:green), e então, a série dada é também [**convergente**](color:green).

---

Seja a série:

$$
\sum ^{\infty }\frac{2n^{2} +1}{n^{4} +1}
$$

Tem-se que:

$$
\frac{\frac{2n^{2} +1}{n^{4} +1}}{\frac{1}{n^{2}}} =\frac{2n^{4} +n^{2}}{n^{4} +1} =\frac{2+n^{-2}}{1+n^{-4}}\rightarrow 2\in \mathbb{R}^{+}
$$

Como a série de termo geral $\frac1{n^2}$ é uma série [**convergente**](color:green) (como visto nos exemplos anteriores), então, a série dada é também [**convergente**](color:green).

---

Seja a série:

$$
\sum ^{\infty }\frac{2-n}{n!n}
$$

Esta série [**não está nas condições do teorema**](color:red), pois os seus termos são negativos para $n>2$, mas tem a mesma natureza que a série com o termo geral simétrico. Logo, estudamos a série:

$$
\sum ^{\infty }\frac{n-2}{n!n}
$$

Tem-se que:

$$
\frac{\frac{n-2}{n!n}}{\frac{1}{n!}} =\frac{n-2}{n} =1-\frac{2}{n}\rightarrow 1\in \mathbb{R}^{+}
$$

Como a série de termo geral $\frac1{n!}$ é uma série [**convergente**](color:green) (como visto nos exemplos anteriores), então, a série dada é também [**convergente**](color:green).

:::

## Série de Dirichlet

Chama-se série de Dirichlet a qualquer série da forma

$$
\sum^\infin\frac{1}{n^\alpha}\quad,\quad\alpha \in\ \R
$$

A série acima converge se e só se $\alpha>1$.

Usam-se estas séries como escolha para séries de comparação, quando o termo geral das sucessões dominantes são potências ou quando o termo geral se adequa ao uso de um limite notável (como por exemplo o do $\sin$).

:::details[Exemplos]

Seja a série:

$$
\sum ^{\infty }\sin\frac{1}{n}
$$

Tem-se que:

$$
\frac{\sin\frac{1}{n}}{\frac{1}{n}}\rightarrow 1\in \mathbb{R}^{+}
$$

Como a série de termo geral $\frac1n$ é [**divergente**](color:pink) (pois é de Dirichlet com $\alpha \le 1$), a série dada também é [**divergente**](color:pink).

---

Seja a série:

$$
\sum ^{\infty }\frac{n^{2} +n+1}{2n^{7} +2}
$$

Tem-se que, para $\frac{n^2}{n^7}=\frac 1 {n^5}$ (visto que $n^2$ e $n^5$ são as sucessões dominantes do numerador e denominador, respetivamente):

$$
\frac{\frac{n^{2} +n+1}{2n^{7} +2}}{\frac{n^{2}}{n^{7}}} =\frac{1+\frac{1}{n} +\frac{1}{n^{2}}}{2+\frac{2}{n^{7}}}\rightarrow \frac{1}{2} \in \mathbb{R}^{+}
$$

Como a série de termo geral $\frac1{n^5}$ é [**convergente**](color:green) (pois é de Dirichlet com $\alpha > 1$), a série dada também é [**convergente**](color:green).

---

Seja a série:

$$
\sum ^{\infty }\left(\sqrt[3]{n^{2} +1} -\sqrt[3]{n^{2} +3n}\right)
$$

Esta série [**não está nas condições do teorema**](color:red), pois todos os seus termos são negativos, mas tem a mesma natureza que a série com o termo geral simétrico. Logo, estudamos a série:

$$
\sum ^{\infty }\left(\sqrt[3]{n^{2} +3n} -\sqrt[3]{n^{2} +1}\right)
$$

Como a sucessão dominante dentro de ambas as raízes é a mesma, tem-se de recorrer ao "conjugado":

$$
\sqrt[3]{n^{2} +3n} -\sqrt[3]{n^{2} +1} =\frac{3n-1}{\sqrt[3]{\left( n^{2} +3n\right)^{2}} +\sqrt[3]{\left( n^{2} +3n\right)\left( n^{2} +1\right)} +\sqrt[3]{\left( n^{2} +1\right)^{2}}}
$$

Como a dominante do numerador é $n$ e a do denominador é $n^{\frac43}$, compara-se a série dada com o termo geral $\frac{n}{n^{\frac43}}=\frac1{n^{\frac13}}$:

$$
\frac{\frac{3n-1}{\sqrt[3]{\left( n^{2} +3n\right)^{2}} +\sqrt[3]{\left( n^{2} +3n\right)\left( n^{2} +1\right)} +\sqrt[3]{\left( n^{2} +1\right)^{2}}}}{\frac{n}{n^{\frac{4}{3}}}} =\\\frac{3-\frac{1}{n}}{\sqrt[3]{\left( 1+\frac{3}{n}\right)^{2}} +\sqrt[3]{\left( 1+\frac{3}{n}\right)\left( 1+\frac{1}{n^{2}}\right)} +\sqrt[3]{\left( 1+\frac{1}{n^{2}}\right)^{2}}}\rightarrow 1\in \mathbb{R}^{+}
$$

Como a série de comparação é de Dirichlet com $\alpha\le 1$, são ambas [**divergentes**](color:pink).

:::

## Critério da razão

Seja $(a_n)$ uma sucessão de números reais positivos. Então,

- Se $\frac{a_{n+1}}{a_n}\le R<1$, para $n>>$, então a série de termo geral $a_n$ converge.
- Se $\frac{a_{n+1}}{a_n}\ge 1$, para $n>>$, então a série de termo geral $a_n$ diverge.

Este é um critério mais teórico, usado para chegar ao Critério de D'Alembert (definido abaixo). A explicação encontra-se no PDF da aula 28, página 9.

## Critério de D'Alembert

Seja $(a_n)$ uma sucessão de números reais positivos tal que existe, em $\overline\R$, o limite:

$$
\lim \frac{a_{n+1}}{a_{n}} =L\in \mathbb{R}^{+}_{0} \cup \{+\infty \}
$$

- Se $L>1$, a série de termo geral $a_n$ [**diverge**](color:pink)
- Se $L<1$, a série de termo geral $a_n$ [**converge**](color:green)
- Se $L=1$, nada se pode concluir

Este critério é normalmente utilizado para séries cujos termos gerais envolvem **exponenciais e/ou fatoriais**, ou quando o termo geral está **definido por recorrência**.

Quando, pelo critério de D'Alembert, se conclui que a série [**diverge**](color:pink) $(L>1)$, isto deve-se ao facto de a série **não ser um infinitésimo**.

:::details[Exemplos]

$$
\sum ^{\infty }\frac{( n!)^{2}}{( 2n) !}
$$

Calculando o limite auxiliar do critério de D'Alembert:

$$
\begin{aligned}\frac{a_{n+1}}{a_{n}} & =\frac{\frac{(( n+1) !)^{2}}{( 2n+2) !}}{\frac{( n!)^{2}}{( 2n) !}}\\ & =\frac{(( n+1) !)^{2}}{( n!)^{2}} \cdot \frac{( 2n) !}{( 2n+2) !}\\ & =\frac{( n+1)^{2}( n!)^{2}}{( n!)^{2}} \cdot \frac{( 2n) !}{( 2n+2)( 2n+1)( 2n) !}\\ & =\frac{( n+1)^{2}}{2( n+1)( 2n+1)}\\ & =\frac{n+1}{4n+2}\\ & =\frac{1+\frac{1}{n}}{4+\frac{2}{n}}\rightarrow \frac{1}{4} < 1\end{aligned}
$$

Logo a série dada é [**convergente**](color:green) pelo critério de D'Alembert.

---

Seja a série:

$$
\sum^\infin \frac{2^nn!}{n^n}
$$

Calculando o limite auxiliar do critério de D'Alembert:

$$
\begin{aligned}\frac{a_{n+1}}{a_{n}} & =\frac{\frac{2^{n+1}( n+1) !}{( n+1)^{n+1}}}{\frac{2^{n} n!}{n^{n}}}\\ & =\frac{2^{n+1}}{2^{n}} \cdot \ \frac{( n+1) !}{n!} \cdot \frac{n^{n}}{( n+1)^{n+1}}\\ & =2\cdot \frac{( n+1) n!}{n!} \cdot \frac{n^{n}}{( n+1)^{n} \cdot ( n+1)}\\ & =2\cdot \frac{( n+1) \cdot n^{n}}{( n+1)^{n} \cdot ( n+1)}\\ & =2\cdot \left(\frac{n}{n+1}\right)^{n}\\ & =2\cdot \left(\frac{1}{1+\frac{1}{n}}\right)^{n}\\ & =2\cdot \frac{1}{\left( 1+\frac{1}{n}\right)^{n}}\rightarrow \frac{2}{e} < 1\end{aligned}
$$

Logo a série dada é [**convergente**](color:green) pelo critério de D'Alembert.

:::

## Critério da raiz

👉 Não frequentemente utilizado. É usado para chegar ao Critério da Raiz de Cauchy (abaixo).

Seja $(a_n)$ uma sucessão de termos positivos, então:

- Se $\sqrt[n]{a_n}\le R < 1$ para $n>>$, a série de termo geral $a_n$ é [**convergente**](color:green).
- Se $\sqrt[n]{a_n}\ge 1$ para infinitos termos, a série de termo geral $a_n$ [**diverge**](color:pink).

### Critério da raiz de Cauchy

Seja $(a_n)$ uma sucessão de números reais positivos tal que $\sqrt[n]{a_n}\to L$. Então:

- Se $L<1$ a série de termo geral $a_n$ é [**convergente**](color:green).
- Se $L>1$ a série de termo geral $a_n$ é [**divergente**](color:pink).

Se $L=1$ mas $\sqrt[n]{a_n}> 1$ para $n>>$ (isto é, $\sqrt[n]{a_n}\to 1^+$), a série [**diverge**](color:pink).

:::details[Exemplos]

Seja a série:

$$
\sum ^{\infty }\left(\frac{3^{n} +( -2)^{n}}{4^{n}}\right)
$$

$$
\sqrt[n]{\frac{3^{n} +( -2)^{n}}{4^{n}}} =\sqrt[n]{\left(\frac{3}{4}\right)^{n}\left[ 1+\left( -\frac{2}{4} \times \frac{4}{3}\right)^{n}\right]} =\frac{3}{4}\sqrt[n]{1+\left( -\frac{2}{3}\right)^{n}}\rightarrow \frac{3}{4} < 1
$$

Pelo critério da raiz de Cauchy, a série é [**convergente**](color:green).

---

Seja a série:

$$
\sum ^{\infty }\left( 1\pm \frac{1}{n}\right)^{n^{2}}
$$

$$
\sqrt[n]{\left( 1\pm \frac{1}{n}\right)^{n^{2}}} =\left( 1\pm \frac{1}{n}\right)^{n} =e^{\pm 1}
$$

Pelo critério da raiz de Cauchy, conclui-se que:

- Com o sinal $+$, a série [**diverge**](color:pink), pois $e>1$.
- Com o sinal $-$, a série [**converge**](color:green), pois $e^{-1}<1$.

:::

## Outro critério

Este critério (sem nome), é útil para séries com termos gerais do tipo $\frac{1}{n^\alpha \log^\beta n}$.

Seja $(a_n)$ uma sucessão **decrescente e positiva**. Então as séries de termos gerais $a_n$ e $2^na_{2^n}$ têm a mesma natureza.

Se o termo geral é decrescente e positivo, podemos "_substituir $n$ por $2^n$ e multiplicar tudo por $2^n$_", mantendo a natureza da série.

Este critério pode ser utilizado na obtenção da natureza das séries de Dirichlet.

:::details[Exemplo]

Seja a série:

$$
\sum ^{\infty }\frac{1}{n\log^{2} n}
$$

Como $n$ e $\log^2n$ são termos gerais de sucessões crescentes, o termo geral da série dada é decrescente. É também positivo para todo o $n\in\N^+$, $n\ge2$.

Então, a série dada tem a mesma natureza que a série de termo geral:

$$
\frac{2^{n}}{2^{n}\log^{2}\left( 2^{n}\right)} =\frac{1}{\log^{2}\left( 2^{n}\right)} =\frac{1}{( n\log 2)^{2}} =\frac{1}{\left(\log^{2} 2\right) n^{2}}
$$

Logo, como a série com o termo geral obtido corresponde a uma série de Dirichlet (que se sabe ter com $\alpha>1$) com uma constante, a série dada é [**convergente**](color:green).

:::

## Critério do integral

Seja $f$ uma função decrescente e positiva e $(u_n)$ uma sucessão tal que $u_n=f(n)$, para $n>>$. Então, a série de termo geral $u_n$ converge se e só se existir e for finito o limite

$$
\lim _{x\rightarrow +\infty }\int ^{x}_{p} f( t) \ \mathrm{d} t
$$

para algum $p\in\R$.

# Exemplos de estudo da natureza de séries

Abaixo seguem-se alguns exemplos do estudo da natureza de séries, utilizando vários critérios simultaneamente.

:::details[Exemplos]

Seja a série:

$$
\sum ^{\infty }\frac{n^{3} n!+5^{n}}{n^{5} n!+n^{n} +n^{9}}
$$

Começa-se por utilizar o critério de comparação para simplificar o termo geral.

No numerador, é simples encontrar a sucessão dominante $(n^3n!)$, pois:

$$
5^n<<n!<<n^3n!
$$

No denominador, é necessário calcular um limite auxiliar, pois pela escala básica apenas se pode concluir:

$$
n^9<<n!<<n^5n!\quad\text e\quad n^9<<n^n
$$

$$
\begin{aligned}\frac{\frac{( n+1)^{5}( n+1) !}{( n+1)^{n+1}}}{\frac{n^{5} n!}{n^{n}}} & =\left(\frac{n+1}{n}\right)^{5} \times \frac{( n+1) n!}{n!} \times \frac{n^{n}}{( n+1)^{n}( n+1)}\\ & =\left( 1+\frac{1}{n}\right)^{5} \times \left(\frac{n}{n+1}\right)^{n}\\ & =\left( 1+\frac{1}{n}\right)^{5} \times \frac{1}{\left( 1+\frac{1}{n}\right)^{n}}\rightarrow 1\times \frac{1}{e} =\frac{1}{e} < 1\end{aligned}
$$

Assim, podemos concluir que $n^5n!<<n^n$.

Usando agora o critério de comparação, comparando o termo geral dado com $\frac{n^3n!}{n^n}$.

$$
\frac{\frac{n^{3} n!+5^{n}}{n^{5} n!+n^{n} +n^{9}}}{\frac{n^{3} n!}{n^{n}}} =\frac{1+\frac{5^{n}}{n^{3} n!}}{\frac{n^{5} n!}{n^{n}} +1+\frac{n^{9}}{n^{n}}}\rightarrow 1\in \mathbb{R}^{+}
$$

Logo, as séries de termos gerais $\frac{n^{3} n!+5^{n}}{n^{5} n!+n^{n} +n^{9}}$ e $\frac{n^3n!}{n^n}$ têm a mesma natureza.

Então, usa-se agora o critério de D'Alembert para determinar a natureza da série.

$$
\begin{aligned}\frac{\frac{( n+1)^{3}( n+1) !}{( n+1)^{n+1}}}{\frac{n^{3} n!}{n^{n}}} & =\dotsc \ \text{(bastante semelhante ao limite acima)}\\ & =\left( 1+\frac{1}{n}\right)^{3} \times \frac{1}{\left( 1+\frac{1}{n}\right)^{n}}\rightarrow 1\times \frac{1}{e} =\frac{1}{e} < 1\end{aligned}
$$

Como $\frac{a_{n+1}}{a_n}\to\frac1e <1$, a série dada é [**convergente**](color:green).

---

Seja a série:

$$
\sum ^{\infty }\left(\frac{2n+2}{3n+5}\right)^{2n}
$$

Escolhe-se o critério da raiz:

$$
\sqrt[n]{\left(\frac{2n+2}{3n+5}\right)^{2n}} =\left(\frac{2n+2}{3n+5}\right)^{2} =\left(\frac{2+\frac{2}{n}}{3+\frac{5}{n}}\right)^{2}\rightarrow \frac{4}{9} < 1
$$

Logo, a série dada é [**convergente**](color:green).

---

Seja a série:

$$
\sum ^{\infty }\frac{\sqrt[4]{n^{3} +1} +n}{\sqrt[3]{n^{4} +1} +\log n}
$$

Usa-se o critério da comparação para simplificar o termo geral.

Determinam-se os termos dominantes no numerador e no denominador, pela escala básica:

$$
1<<n^\frac34<<n\quad\text e\quad 1<<\log n << n^\frac43
$$

Então, compara-se o termo geral com $\frac{n}{n^{\frac43}}=\frac1{n^\frac13}$:

$$
\begin{aligned}\frac{\frac{\sqrt[4]{n^{3} +1} +n}{\sqrt[3]{n^{4} +1} +\log n}}{\frac{n}{n^{\frac{4}{3}}}} & =\frac{\sqrt[4]{n^{3} +1} +n}{n} \times \frac{n^{\frac{4}{3}}}{\sqrt[3]{n^{4} +1} +\log n}\\ & =\frac{\sqrt[4]{\frac{1}{n} +\frac{1}{n^{4}}} +1}{\sqrt[3]{1+\frac{1}{n^{4}}} +\frac{\log n}{n^{\frac{4}{3}}}}\rightarrow 1\in \mathbb{R}^{+}\end{aligned}
$$

Então, a série dada e a série de termo geral $\frac1{n^\frac13}$ têm a mesma natureza.

Como a série de termo geral $\frac1{n^\frac13}$ é uma série de Dirichlet com $\alpha=\frac13<1$, a série dada é [**divergente**](color:pink).

---

Seja a série:

$$
\sum ^{\infty }\sin\left(\frac{3^{n}}{n!}\right)
$$

Podemos recorrer ao critério de comparação, de forma a construir o limite notável do seno:

$$
\frac{\sin\left(\frac{3^{n}}{n!}\right)}{\frac{3^{n}}{n!}}\rightarrow 1\in \mathbb{R}^{+}
$$

Então, a série dada e a série de termo geral $\frac{3^{n}}{n!}$ têm a mesma natureza.

Usa-se assim o critério de D'Alembert:

$$
\frac{\frac{3^{n+1}}{( n+1) !}}{\frac{3^{n}}{n!}} =\frac{3^{n+1}}{3^{n}} \times \frac{n!}{( n+1) !} =\frac{3}{n+1}\rightarrow 0< 1
$$

Conclui-se assim que a série dada é [**convergente**](color:green).

:::

# Convergência simples e absoluta

Diz-se que uma série de termos genéricos $a_n$ é [**absolutamente convergente**](color:orange) se a série

$$
\sum^{\infin }|a_n|
$$

é uma série [**convergente**](color:green).

Diz-se que a série é [**simplesmente convergente**](color:yellow) se a série acima [**diverge**](color:pink) mas a série de termo geral $a_n$ [**converge**](color:pink).

Existem assim 3 tipos de séries:

- [**Absolutamente convergentes**](color:orange)
- [**Simplesmente convergentes**](color:yellow)
- [**Divergentes**](color:pink)

👉 Qualquer série de termos de sinal fixo, se convergir, é [**absolutamente convergente**](color:orange).

## Critério do módulo

Se a série de termo geral $|a_n|$ é convergente então a série de termo geral $a_n$ também é convergente.

Mais ainda, nesse caso a soma da primeira é não inferior ao módulo da soma da segunda, isto é:

$$
\left| \sum ^{\infty }_{n=p} a_{n}\right| \leqslant \sum ^{\infty }_{n=p}| a_{n}|
$$

se a série dos módulos convergir.

:::details[Exemplos]

Seja a série:

$$
\sum ^{\infty }\frac{( -1)^{n} n^{7}}{2^{n} +1}
$$

Como o sinal é dado por $(-1)^n$, para determinar a **série dos módulos** basta:

$$
\sum ^{\infty }\frac{n^{7}}{2^{n} +1}
$$

Podemos assim usar o critério de D'Alembert (pois inclui uma exponencial) para a estudar:

$$
\frac{\frac{(n+1)^{7}}{2^{n+1}+1}}{\frac{n^{7}}{2^{n}+1}}=\frac{(n+1)^{7}}{n^{7}} \cdot \frac{2^{n}+1}{2^{n+1}+1}=\left(\frac{n+1}{n}\right)^{7} \cdot \frac{1+2^{-n}}{2+2^{-n}}=\\=\left(1+\frac{1}{n}\right)^{7} \cdot \frac{1+2^{-n}}{2+2^{-n}} \longrightarrow \frac{1}{2}<1
$$

Conclui-se assim que a série dos módulos é [**convergente**](color:green) e, portanto, a série dada é [**absolutamente convergente**](color:orange).

---

Seja a série:

$$
\sum ^{\infty }\frac{20-( -1)^{n} n^{7}}{n^{10} +20n}
$$

A partir do segundo termo, o sinal é dado pelo termo $-(-1)^nn^7=(-1)^{n+1}n^7$.

Então, para $n\ge 2$, para obter o módulo pode-se multiplicar o termo geral por $(-1)^{n+1}$, de forma a tornar esse termo sempre positivo.

$$
\sum ^{\infty }\frac{20+( -1)^{n+1} n^{7}}{n^{10} +20n} =\sum ^{\infty }\frac{( -1)^{n+1} 20+( -1)^{2( n+1)} n^{7}}{n^{10} +20n} =\sum ^{\infty }\frac{n^{7} +( -1)^{n+1} 20}{n^{10} +20n}
$$

A série de módulos é assim:

$$
\sum ^{\infty }\frac{n^{7} +( -1)^{n+1} 20}{n^{10} +20n}
$$

Utilizando o critério de comparação com a sucessão $\frac{n^7}{n^{10}}=\frac1{n^3}$, obtém-se:

$$
\frac{\frac{n^{7}+(-1)^{n+1} 20}{n^{10}+20 n}}{\frac{n^{7}}{n^{10}}}=\frac{n^{7}+(-1)^{n+1} 20}{n^{7}} \cdot \frac{n^{10}}{n^{10}+20 n}=\frac{1+\frac{(-1)^{n+1} 20}{n^{7}}}{1+\frac{20}{n^{9}}} \longrightarrow 1 \in \mathbb{R}^{+}
$$

Assim, a série de termo geral $\frac1{n^3}$ e a série dos módulos têm a mesma natureza.

Como $\sum\frac1{n^3}$ é uma série de Dirichlet com $\alpha=3>1$, é convergente e a série dos módulos também é [**convergente**](color:green).

A série dada é, então, [**absolutamente convergente**](color:orange).

---

Seja a série:

$$
\sum ^{\infty }\left(\cos( n\pi )\frac{3^{n} n!}{n^{n}}\right)
$$

O sinal do termo geral é dado por $\cos(n\pi)=(-1)^n$, pelo que se pode substituir esse termo por $1$, obtendo assim a **série dos módulos**:

$$
\sum ^{\infty }\frac{3^{n} n!}{n^{n}}
$$

Pelo critério de D'Alembert:

$$
\frac{\frac{3^{n+1}(n+1) !}{(n+1)^{n+1}}}{\frac{3^{n} n !}{n^{n}}}=\frac{3^{n+1}}{3^{n}} \cdot \frac{(n+1) n !}{n !} \cdot \frac{n^{n}}{(n+1)^{n}(n+1)}=3\left(\frac{n}{n+1}\right)^{n}=\\=\frac{3}{\left(1+\frac{1}{n}\right)^{n}} \longrightarrow \frac{3}{\mathrm{e}}>1
$$

Assim, a **série dos módulos** é [**divergente**](color:pink).

Não é fácil saber se a série dada é ou não convergente. No entanto, como a divergência da série dos módulos foi assegurada pelo critério de D'Alembert, isso significa que a divergência se deve ao facto de o termo geral não ser um infinitésimo.

Logo, a série dada é [**divergente**](color:pink).

:::

## Critério de Leibnitz

Seja $a_n$ uma sucessão alternada, ou seja, uma sucessão que verifica $a_n\cdot a_{n+1}<0$, para $n>>$, tal que $|a_n|$ é um infinitésimo e decrescente, também para $n>>$. Então a série de termo geral $a_n$ [**converge**](color:green).

Se uma sucessão:

- For alternadamente positiva e negativa
- O seu módulo é um infinitésimo
- O seu módulo é decrescente
  Então, a série dada por essa sucessão é [**simplesmente convergente**](color:yellow).

📖 A demonstração deste critério encontra-se no PDF da aula 29, página 11.

:::details[Exemplos]

Seja a série (série harmónica alternada):

$$
\sum^\infin\frac{(-1)^n}n
$$

A **série dos módulos** é claramente [**divergente**](color:pink), pois corresponde a uma série de Dirichlet com $\alpha=1\le1$

Sabendo que a série dos módulos é um infinitésimo ($\frac1n\to0)$ e é decrescente, pois:

$$
a_{n+1}-a_n=\frac{1}{n+1}-\frac1n<0
$$

Assim, pelo critério de Leibnitz, a série é [**convergente**](color:green). Como a série de módulos [**diverge**](color:pink), a série dada é [**simplesmente convergente**](color:yellow).

---

Seja a série:

$$
\sum^\infin\left(\frac1n+\frac{(-1)^n}{\sqrt n}\right)
$$

Como $n>\sqrt n\implies \frac1n<\frac1{\sqrt n}$ para $n>2$, o sinal é dado pelo termo $\frac{(-1)^n}{\sqrt n}$ , logo o módulo do termo geral pode ser obtido multiplicando o termo geral por $(-1)^n$:

$$
\sum^\infin\left(\frac1{\sqrt n}+\frac{(-1)^n}n\right)
$$

Pelo critério de comparação, com a série de termo geral $\frac1{\sqrt n}$:

$$
\frac{\frac1{\sqrt n}+\frac{(-1)^n}{n}}{\frac1{\sqrt n}}=1+\frac{(-1)^n}{\sqrt n}\to1\in\R^+
$$

Como a série $\sum\frac1{\sqrt n}$ é uma série de Dirichlet com $\alpha = \frac12 \le 1$, a série de módulos é [**divergente**](color:pink).

Não é fácil aplicar o critério de Leibnitz neste caso, pois não é fácil saber se o termo geral da série de módulos é decrescente.

No entanto, pode-se recorrer à natureza da soma de séries:

Sabemos que a série $\sum\frac{1}n$ é [**divergente**](color:pink), e também sabemos que a série $\sum\frac{(-1)^n}{\sqrt n}$ é [**convergente**](color:green), pelo critério de Leibnitz.

Assim, como o termo geral da série dada é a soma dos termos gerais de uma série divergente e de uma série convergente, a série dada é [**divergente**](color:pink).

:::

### Majoração do erro pelo critério de Leibnitz

Se a série de termo geral $a_n$ tem o primeiro termo de ordem $p\in\Z$ e satisfaz as condições do critério de Leibnitz para $n\in\Z_p$ então

$$
|S_n-S|<|a_{n+1}|
$$

para qualquer $n\in\Z_p$, onde $(S_n)$ é a sucessão das somas parciais e $S\in\R$ a soma da série.

# Permutação de termos e soma por blocos

Seja

$$
\sum^\infin_{n=p}u_n
$$

uma série [**absolutamente convergente**](color:orange). Então:

- Qualquer série obtida a partir dessa série por permutação de termos, isto é, qualquer série de termo geral $u_{m_n}$ com $(m_n)$ uma bijeção do segmento terminal dos inteiros $\Z_p$ nele mesmo, é também absolutamente convergente e tem a mesma soma que a série de termo geral $u_n$.
- Qualquer série obtida a partir dessa série por soma por blocos, isto é, qualquer série de termo geral

  $$
  v_n=\sum^{m_{n+1}}_{k=m_n}u_k
  $$

  com $(m_n)$ uma sucessão estritamente crescente de inteiros tal que $m_1=p$, é também absolutamente convergente e tem a mesma soma que a série de termo geral $u_n$.

Estas propriedades correspondem a dizer que em somas infinitas [**absolutamente convergentes**](color:orange) são válidas as propriedades comutativa e associativa da soma.

## Teorema de Riemann

Seja $(a_n)$ o termo geral de uma série [**simplesmente convergente**](color:yellow). Então, por permutação dos termos de $(a_n)$ pode construir-se uma série [**simplesmente convergente**](color:yellow) com qualquer soma que se pretenda ou mesmo uma série divergente.

Este resultado mostra o quão delicado é trabalhar com séries simplesmente convergentes, pois uma simples permutação da ordem por que se somam os termos da série pode mudar a soma da série, podendo, até, mudar-lhe a natureza.

A demonstração deste teorema encontra-se no PDF da aula 30, página 2.

# Produto de Cauchy de duas sucessões

Sejam $(a_n)$ e $(b_n)$ duas sucessões.

Define-se o produto de Cauchy de $(a_n)$ por $(b_n)$ como sendo a sucessão de termo geral

$$
c_n=\sum^n_{k=1}a_{n-k+1}b_k
$$

## Teorema de Mertens

Sejam

$$
\sum^\infin_{n=1}a_n\quad\text e\quad\sum^\infin_{n=1}b_n
$$

duas séries [**convergentes**](color:green) em que pelo menos uma delas é [**absolutamente convergente**](color:orange). Então, sendo $(c_n)$ o produto de Cauchy de $(a_n)$ por $(b_n)$, a série de termo geral $c_n$ é absolutamente convergente e tem-se

$$
\sum ^{\infty }_{n=1} c_{n} =\left(\sum ^{\infty }_{n=1} a_{n}\right) \cdot \left(\sum ^{\infty }_{n=1} b_{n}\right)
$$

---

PDFs

- [Aula 27](https://drive.google.com/file/d/1s5i0RVCLAw0rDbwy0Ez0lsX5Q_6oXx79/view?usp=sharing)
- [Aula 28](https://drive.google.com/file/d/1xFjCwUnit2dlvuRefjuWcQk_9rUpocas/view?usp=sharing)
- [Aula 29](https://drive.google.com/file/d/1EG5dddDUe2xAwDwjtzfxM32NdMYuO92v/view?usp=sharing)
- [Aula 30](https://drive.google.com/file/d/1lZbHEPj5lP_eLzBJjq4MpSea8Rk-Y5MM/view?usp=sharing)
