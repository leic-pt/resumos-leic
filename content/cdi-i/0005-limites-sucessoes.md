---
title: Limites de Sucessões
description: Infinitamente grande. Resolução de Indeterminações.
path: /cdi-i/limites-sucessoes
type: content
---

# Limites de Sucessões

```toc

```

## Infinitamente grande

:::tip[Definições]

- **Infinitamente grande positivo:** Uma sucessão ($u_n$) que, para qualquer $R>0$, $u_n>R$, para $n>>$.
  Por outras palavras, $u_n\rightarrow +\infin$, isto é, $\lim u_n=+\infin$.

- **Infinitamente grande negativo:** Uma sucessão ($u_n$) em que ($-u_n$) é um infinitamente grande positivo.
  Por outras palavras, $u_n\rightarrow -\infin$, isto é, $\lim u_n=-\infin$.

- **Reta acabada:** Quando de fala de limites de sucessões, estes podem pertencer a $\R$ ou serem $\pm \infin$.
  Por esta razão, consideramos os limites das sucessões no conjunto $\overline \R =\R\cup\{-\infin,+\infin\}$, a que chamamos **reta acabada**.

:::

Quando definimos $\overline\R$, temos de ter em atenção a distinção entre uma sucessão ser **convergente** e **ter limite**.

- **Ser convergente:** A sucessão tem limite em $\R$, isto é, $u_n\rightarrow x,\enspace x\in\R$.
- **Ter limite:** A sucessão é convergente ou $u_n\rightarrow +\infin$ ou $u_n \rightarrow -\infin$.

:::warning
Deve-se ter em atenção que $\lim u_n=\infin$ não significa que existe limite de $u_n$ e que este é $\infin$, mas sim que $|u_n|\rightarrow +\infin$.
:::

- **Sucessão não convergente com limite infinito:** Sucessão propriamente divergente
- **Sucessão não convergente sem limite infinito:** Sucessão divergente oscilante

Abaixo apresentam-se algumas propriedades de sucessões, agora que consideramos os limites das sucessões em $\overline\R$:

- Qualquer sucessão monótona tem limite (finito ou infinito)
- Qualquer sucessão com mais do que um sublimite não é monótona
- Qualquer sucessão tem pelo menos um sublimite (finito ou infinito)
- Uma sucessão é limitada se e só todos os seus sublimites são finitos
- $u_n\rightarrow\infin$ se e só se ($u_n$) não tem sublimites finitos

### Operações Algébricas

Temos também de ter atenção às operações algébricas [já definidas](./sucessoes#propriedades-operatórias-com-limites) (soma, diferença, produto, divisão, etc) entre limites, agora que se introduziu limites infinitamente grandes.

#### Soma/Diferença

- $+\infin +b=+\infin$ para todo o $b\ne-\infin$
- $-\infin +b=-\infin$ para todo o $b\ne+\infin$
- $+\infin-\infin$ não existe

#### Produto

- $+\infin\times b=\begin{cases}
  +\infin&,&\text{se }b>0\\
  -\infin&,&\text{se }b<0
  \end{cases}$

- $-\infin\times b=\begin{cases}
  -\infin&,&\text{se }b>0\\
  +\infin&,&\text{se }b<0
  \end{cases}$

- $\infin\times0$ não existe

#### Divisão (recíproco)

Considerando $\lim\frac 1 {u_n}=b$ e $u_n\rightarrow a$,

- $b=0$ se $a=\pm\infin$
- $b=+\infin$ se $a=0$ e $u_n>0$ para $n>>$
- $b=-\infin$ se $a=0$ e $u_n<0$ para $n>>$

#### Módulo

- $\lim |u_n|=+\infin,\ u_n\rightarrow\pm\infin$

#### Potência

Considerando $\lim u_n^{v_n}=a^b$, $u_n\rightarrow a$ e $v_n\rightarrow b$,

- $(+\infin)^b=+\infin$ se $b>0$
- $(+\infin)^b=0$ se $b<0$
- $0^b=0$ se $b>0$
- $0^b=+\infin$ se $b<0$
- $a^{+\infin}=+\infin$ se $a>1$
- $a^{+\infin}=0$ se $a<1$
- $a^{-\infin}=0$ se $a>1$
- $a^{-\infin}=+\infin$ se $a<1$

Não existe limite se:

- $a=1\land b=\pm \infin$
- $a=0\land b=0$
- $a=+\infin \land b=0$

## Indeterminações

Abaixo apresentam-se algumas indeterminações no cálculo de limites:

$$
\begin{darray}{ c|c|c|c|c|c|c }
\infin-\infin & 0\times\infin & \frac 0 0 & \frac\infin\infin & 0^0 & (+\infin)^0 & 1^\infin
\end{darray}
$$

### Sucessão dominante

:::tip[Definição]
**Sucessão dominante**  
Sejam ($u_n$) e ($v_n$) duas sucessões de números reais tais que $v_n\ne0$ para $n>>$. Diz-se que ($v_n$) é dominante em relação a ($u_n$), e escreve-se $u_n<<v_n$, se $\frac{u_n}{v_n}\rightarrow 0$.
:::

Através da definição de sucessão dominante, podemos resolver algumas indeterminações.

Para descobrir que sucessão é dominante face a outra, podemos recorrer a um pequeno teorema:

:::tip[Teorema]
Seja ($a_n$) uma sucessão de termos positivos tal que $\frac{a_{n+1}}{a_n}\rightarrow L\in\overline\R$.  
Então:

$$
\begin{cases}
a_n\rightarrow +\infin&,&\text{se }L>1\\
a_n\rightarrow 0&,&\text{se }L<1
\end{cases}
$$

:::

:::details[Exemplo de aplicação do teorema]

Podemos usar este teorema para provar que $n^p<<a^n$ para qualquer $a>1$:

$$
\frac{\frac{(n+1)^p}{a^{n+1}}}{\frac{n^p}{a^n}}=\bigg(\frac{n+1}n\bigg)^p\frac1a=\bigg(1+\frac1n\bigg)^p\frac1a\rightarrow\frac1a<1
$$

Logo, como segundo o teorema $\frac{n^p}{a^n}\rightarrow 0$, podemos concluir que $n^p<<a^n$.

:::

Outro teorema não tão útil, mas também importante é:

:::tip[Teorema]
Seja ($u_n$) uma sucessão de números reais positivos tal que $u_{n+1}-u_n\rightarrow L\in\overline\R$.  
Então, $\frac{u_n}n\rightarrow L$.
:::

#### Escala básica de sucessões

Esta escala permite-nos resolver indeterminações, e não é preciso justificar nenhuma destas relações ao resolver exercícios.

$$
\log_{p1}n<<n^{p_2}<<a^n<<n!<<n^n\quad,\quad p_1,p_2\in\R^+,\ a>1
$$

Ao resolver exercícios, pode ser necessário aumentar (isto é, adicionar parcelas) esta escala. Para isso, deve-se utilizar um dos dois teoremas apresentados acima.

---

PDFs:

- [Aula 6](https://drive.google.com/file/d/11TnrA6vsVnlbzXtp_HnUhteg1inwMrxN/view?usp=sharing)
