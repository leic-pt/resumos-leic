---
title: Continuidade e Limites
description: >-
  Continuidade pontual.
  Continuidade segundo Heine.
  Continuidade com operações algébricas.
  Continuidade da composta.
  Prolongamento contínuo de uma função.
  Limite num ponto.
path: /cdi-i/continuidade-limites
type: content
---

# Continuidade

```toc

```

:::tip[Definição]
**Função contínua num ponto:** Sejam $D_f\subset\R$ um conjunto não vazio, $f : D_f \rightarrow \R$ uma função real de variável real e $a\in D_f$.
Diz-se que $f$ é contínua em $a$ se para qualquer distância $R \in \R^+$ existe uma outra distância $r \in \R^+$ tal que

$$
x\in V_r(a)\cap D_f\Rightarrow f(x)\in V_R(f(a))
$$

:::

A mesma definição pode ser escrita $|x-a|<r\land x\in D_f\Rightarrow |f(x)-f(a)|<R$.

Também pode ser escrita na forma $f(V_r(a)\cap D_f)\subset V_r(f(a))$.

Uma função $f$ é contínua num ponto $a$ do seu domínio se e só se $f\big|_{V_r(a)}$ é contínua em $a$, para algum $r\in\R^+$.

No PDF da aula 9 em anexo, páginas 12 e 13, encontram-se alguns exemplos de continuidade.

## Continuidade Pontual

### Função Heaviside

Esta função modela o comportamento de um interruptor, definida por:

$$
H:\R\rightarrow\R\quad,\quad H(x)=\begin{cases}
1 &\text{se}&x>0\\
\frac 1 2 &\text{se}&x=0\\
0 &\text{se}&x<0\\
\end{cases}
$$

![Função Heaviside](./assets/0007-heaviside.png)

Começa-se por estudar a continuidade em $\R \backslash \{0\}$. Como a função é constante em $x>0$ e $x~<~0$, podemos assumir uma vizinhança de raio menor que o valor absoluto de $x_0$ (isto é, $r < |x_0|$). Desta forma, todos os valores na vizinhança vão ser iguais a $H(x_0)$ (isto é, de valor 1 para $x_0>0$ e valor 0 para $x < 0$). Logo, a função é contínua em $\R\backslash\{0\}$.

Estudando agora a continuidade em $x=\frac 1 2$, podemos concluir que, considerando $R=\frac 1 2$, não existe nenhum ponto de $x\in\R\backslash\{0\}$ tal que $H(x)\in V_R(f(0))$, e portanto, não pode existir nenhum $r\in\R^+$ tal que $x\in V_r(0)\Rightarrow H(x)\in V_R(f(0))$. Concluímos assim que $H$ não é contínua em 0.

### Função de Dirichlet

A função de Dirichlet é definida por:

$$
D:\R\rightarrow\R\quad,\quad H(x)=\begin{cases}
1 &\text{se}&x\in\R\backslash\mathbb Q\\
0 &\text{se}&x\in \mathbb Q\\
\end{cases}
$$

Não é possível desenhar o gráfico desta função, visto que o seu aspeto seria o de duas retas paralelas devido à densidade dos racionais e irracionais em $\R$, mas este é definido por:

$$
\{(x,0):x\in\mathbb Q\}\cup\{(x,1):x\in\R\backslash\mathbb Q\}
$$

Para estudar a continuidade, considera-se um qualquer $x_0\in\R$ e $R=\frac 1 2$. Para qualquer $r\in\R^+$,

$$
f(V_r(x_0))\cap V_R(f(x_0))\ne\empty\quad\text{e}\quad f(V_r(x_0))\cap(\R\backslash V_R(f(x_0)))\ne\empty
$$

e então a função $D$ não é contínua em $x_0$.

Conclui-se assim que a função de Dirichlet é descontínuia em todos os pontos de $\R$.

### Função Seno

Para estudar a continuidade da função seno, definida por:

$$
f:\R\rightarrow \R\quad,\quad f(x)=\sin x
$$

podemos considerar um $x_0\in\R$.

A função $f$ é contínua em $x_0$ se for possível, para cada $R\in\R⁺$, determinar um $r\in\R⁺$ tal que $x\in V_r(x_0)\Rightarrow\sin x \in V_R(\sin x_0)$.

Esta implicação é equivalente a:

$$
|\sin x - \sin x_0|<R\Leftrightarrow \bigg|2\sin\frac{x-x_0}2\cos\frac{x+x_0}2\bigg|<R
$$

Como sabemos que $|\cos \alpha|\le 1$, podemos escrever que:

$$
\bigg| 2\sin\frac{x-x_0}2\cos\frac{x+x_0}2\bigg|\le2\bigg|\sin\frac{x-x_0}2\bigg|
$$

E como $|\sin\alpha| \le\alpha$:

$$
\bigg| 2\sin\frac{x-x_0}2\bigg|\le2\bigg|\frac{x-x_0}2\bigg|=|x-x_0|
$$

Então, se assumirmos que $r=R$:

$$
|x-x_0|<r\Rightarrow |\sin x-\sin x_0|<R
$$

podemos concluir que $f$ é contínua em $x_0$ e, consequentemente, a função seno é contínua em $\R$.

## Continuidade segundo Heine

Seja $D_f\subset \R, f:D_f\rightarrow\R$ uma função real de variável real e $x_0\in D_f$, $f$ é contínua em $x_0$ se e só se para qualquer sucessão de termos em $D_f$ e convergente para $x_0$ se tem $f(x_n)\rightarrow f(x_0)$

Pode-se concluir através desta definição que uma sucessão é sempre contínua, assim como qualquer função definida num ponto isolado do seu domínio é contínua nesse ponto.

## Continuidade com operações algébricas

Sejam $D_f,D_g\subset\R, f:D_f\rightarrow \R$ e $g:D_g\rightarrow \R$ duas funções reais de variável real, $\alpha \in \R$ e $x_0\in D_f\cap D_g$. Então, se $f$ e $g$ são contínuas em $x_0$:

- $f\pm g$, $\alpha f$, $f\cdot g$, $|f|$ são contínuas em $x_0$
- Se $n$ ímpar, $\sqrt[n]f$ é contínua em $x_0$
- Se $g(x_0)\ne 0$, $\frac f g$ é contínua em $x_0$
- Se $f(x_0)>0$, $f^g$ é contínua em $x_0$
- Se $f(x_0)\ge 0$ (e $n$ par), $\sqrt[n]f$ é contínua em $x_0$

## Continuidade da composta

Sejam $D_f,D_g\subset\R, f:D_f\rightarrow \R$ e $g:D_g\rightarrow \R$ duas funções reais de variável real e $x_0\in D_f$ tal que $f(x_0)\in D_g$. Então, se $f$ é contínua em $x_0$ e $g$ é contínua em $f(x_0)$, a função composta $g\circ f$ é contínua em $x_0$.

A partir desta definição, pode-se concluir que as funções trigonométricas e hiperbólicas são contínuas no seu domínio, basta recorrer à aplicação do teorema anterior às funções necessárias.

Exemplos da aplicação deste teorema encontram-se no PDF da aula 10 em anexo, página 6.

## Prolongamento contínuo de uma função

**Prolongamento contínuo ($\tilde f$) de uma função:** Seja $D_f\subset\R, f: D_f\rightarrow\R$ uma função real de variável real e $x_0\in\overline{D_f}$, diz-se que $f$ é prolongável por continuidade em $x_0$ se existe uma função $\tilde f$ definida em $D_f\cup\{x_0\}$ que coincide com $f$ em todos os pontos de $D_f$ e é contínua em $x_0$. Chama-se a uma função $\tilde f$ nessas condições, prolongamento contínuo de $f$ em $x_0$.

Daqui podem-se extrair algumas propriedades:

- O prolongamento contínuo de uma função num ponto, se existir, é único.
- Qualquer função continua num ponto $x_0$ tem prolongamento contínuo nesse ponto, sendo este a própria função.
- Considerando $a\in\R\backslash \overline{D_f}$, podem-se definir extensões da função $f$ a $D_f\cup\{a\}$ que são funções contínuas. Esta extensão, no entanto, não é única e não se trata de um prolongamento contínuo em $a$.

:::tip[Definição]
**Definição de limite de uma função num ponto:** Seja $D_f\subset\R,f:D_f\rightarrow \R$ uma função real de variável real e $x_0\in\overline{D_f}$, diz-se que existe limite de $f$ no ponto $x_0$ se existe o prolongamento contínuo de $f$ em $x_0$, isto é, $\tilde f$, dizendo-se, nesse caso, que o limite de $f$ em $x_0$ é $\tilde f(x_0)$.
Ou seja,

$$
\lim_{x\rightarrow x_0}f(x)=\tilde f(x_0)
$$

:::

## Limite num ponto

### Limite num ponto segundo Cauchy

Seja $D_f\subset\R, f:D_f\rightarrow \R$ uma função real de variável real e $x_0 \in\overline{D_f}$. O limite de $f$ no ponto $x_0$ é $b\in\R$ se e só se, para qualquer $R\in\R^+$, existe um $r\in\R⁺$ tal que, para qualquer $x\in D_f$

$$
|x-x_0|<r\Rightarrow |f(x)-b|<R
$$

### Limite num ponto segundo Heine

Seja $D_f\subset\R, f:D_f\rightarrow \R$ uma função real de variável real e $x_0 \in\overline{D_f}$. O limite de $f$ no ponto $x_0$ é $b\in\R$ se e só se, para qualquer sucessão ($x_n$) de termos em $D_f$ e convergente para $x_0$ se tem $f(x_n)\rightarrow b$.

### Unicidade do limite

Seja $D_f\subset\R, f:D_f\rightarrow \R$ uma função real de variável real e $x_0 \in\overline{D_f}$. Se, para alguns, $a,b \in\R$,

$$
\lim_{x\rightarrow x_0} f(x)=a\quad\text{e}\quad\lim_{x\rightarrow x_0} f(x)=b
$$

então, $a=b$.

Um limite, caso exista, é único.

### Calcular limite numa função contínua

Numa função contínua, o limite num ponto pode-se obter determinando o valor da função nesse ponto: $\lim_{x\rightarrow x_0}f(x)=f(x_0)$.

### Propriedades de limites num ponto

- Se $f$ e $g$ são contínuas em $x_0\in D_f\cap D_g$ e $f(x_0)<g(x_0)$ então $f(x)<g(x)$ para qualquer $x\in V_r(x_0)\cap D_f \cap D_g$ para algum $r\in\R^+$.
- Se existem $a,b\in\R$ e $x_0\in \overline{D_f}\cap\overline{D_g}$ tais que $\lim_{x\rightarrow x_0} f(x)=a$ e $\lim_{x\rightarrow x_0} g(x)=b$ e $a < b$, então $f(x)<g(x)$ para qualquer $x\in V_r(x_0)\cap D_f \cap D_g$, para algum $r\in\R^+$.
- Se $x_0 \in \overline {D_f}\cap\overline {D_g}$, $f(x)\le g(x)$ para todo o $x\in V_r(x_0)\cap D_f\cap D_g$ para algum $r\in\R^+$, então, se existirem $a,b, \in \R$ tais que $\lim_{x\rightarrow x_0} f(x)=a$ e $\lim_{x\rightarrow x_0} g(x)=b$, tem-se que $a\le b$.
- A propriedade anterior também se verifica para $f(x) <g(x)$.

---

PDFs:

- [Aula 9](https://drive.google.com/file/d/1zVWHjEpfGJWwE_DVhxlwSvlmtoX_gEhM/view?usp=sharing)
- [Aula 10](https://drive.google.com/file/d/1A0fV8-3Dd_EdMjrYYjagD40iNbAu-V8-/view?usp=sharing)
