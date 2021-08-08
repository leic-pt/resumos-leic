---
title: Sucessões
description: Sucessões e sub-sucessões. Convergência de sucessões. Limites e as suas propriedades.
path: /cdi-i/sucessoes
type: content
---

# Sucessões

```toc

```

:::tip[DEFINIÇÃO]

- **Sucessão limitada:** O conjunto dos seus termos é limitado, isto é, é uma sucessão majorada e minorada.
- **Sucessão monótona:** Quando uma sucessão é (estritamente) crescente ou (estritamente) decrescente.
  Por outras palavras, quando $u_{n+1}\ge u_n$ ou $u_{n+1}\le u_n$, respetivamente.

:::

## Operações com sucessões

Podemos efetuar as seguintes operações com sucessões:

- multiplicar por um escalar
- somar e subtrair duas sucessões
- multiplicar duas sucessões
- dividir duas sucessões (com atenção de que o denominador nunca pode ser zero).

Também podemos, para uma sucessão $u_n$ real positiva, $\alpha\in\mathbb Q$ e $\{v_n\}\subset\mathbb Q$, efetuar $(u_n)^\alpha$ e $(u_n)^{v_n}$.

## Sub-sucessões

Seja ($u_n$) uma sucessão de números reais e ($m_n$) uma sucessão estritamente crescente de números naturais positivos. Chama-se à sucessão de termo geral $v_n = u_{m_n}$ uma sub-sucessão de ($u_n$).

:::details[Exemplo 1]

$$
u_n=1+(-1)^n\\
u_{2n}=2\\
u_{2n-1}=0
$$

:::

:::details[Exemplo 2]

$$
u_n=\cos\left(\frac{2n\pi}{3}\right)\\
\text{ } \\
u_{3n}=\cos\left(2n\pi\right)=1\\
u_{3n+1}=\cos\left(2n\pi+\frac{2\pi}{3}\right)=-\frac{1}{2}\\
u_{3n+2}=\cos\left(2n\pi+\frac{4\pi}{3}\right)=-\frac{1}{2}
$$

:::

Utiliza-se as sub-sucessões para conseguir mais facilmente estudar uma sucessão, devido às seguintes propriedades:

- Qualquer sub-sucessão de uma sucessão limitada é também limitada.
- Qualquer sub-sucessão de uma sucessão monótona tem a mesma monotonia que a sucessão original.
- Se uma família de sub-sucessões de uma mesma sub-sucessão é tal que a reunião dos seus termos é igual ao conjunto dos termos da sucessão original então se todas as sub-sucessões dessa família forem limitadas a sucessão original também o é.
- Se duas sub-sucessões de uma mesma sucessão tiverem monotonias diferentes a sucessão original não é monótona. O mesmo se pode concluir se qualquer sub-sucessão da sucessão original não for monótona, evidentemente.

## Existência de sub-sucessões monótonas para qualquer sucessão

:::tip[TEOREMA]
**Existência de sub-sucessões monótonas para qualquer sucessão**  
Seja ($u_n$) uma sucessão de números reais, então ($u_n$) tem, pelo menos, uma sub-sucessão monótona (isto é, crescente ou decrescente)
:::

Por exemplo, a sucessão $u_n=n\cdot(-1)^n$ não é monótona (é alternadamente positiva e negativa).  
No entanto, as sub-sucessões

$$
\begin{array}{ccc}
u_{2n}=2n\cdot (-1)^{2n}=2n &\text{e}& u_{2n-1}=(2n-1)\cdot (-1)^{2n-1}=-2n+1
\end{array}
$$

são, respetivamente, crescente e decrescente.  
É sempre possível encontrar uma sub-sucessão que seja monótona.
A justificação para tal encontra-se no PDF em anexo (aula 4).

![Sub-sucessões monótonas de uma sucessão](./assets/0004-subsucessoes-monotonas.png)

É também importante relembrar que uma sucessão constante (e.g. $u_n=1$) também é monótona.

## Sucessão convergente

Uma sucessão convergente é uma sucessão em que existe limite. Por outras palavras, significa que para uma ordem $n$ suficientemente grande (ou seja, $n → +\infin$ ou $n>>$), existe uma vizinhança para qualquer $r>0$ a que pertencem os termos de $u_n$.

$$
\forall _{r>0},\text{ }u_n\in V_r(a), n>>\\
\text{Caso a condição seja verdadeira:} \lim u_n=a
$$

Qualquer sucessão que não seja convergente é divergente.

É também fácil de perceber que uma sucessão constante $u_n=K$, é convergente.

:::details[Exemplo]

Considerando a sucessão $u_n=\frac{1}{n}, n\in \mathbb N^+$, podemos provar que é convergente:

$$
u_n \in V_r(0) \Leftrightarrow |v_n-0|<r\Leftrightarrow \frac 1 n < r \underbrace\Leftrightarrow _{n>0 \land r>0} n>\frac 1 r
$$

Então,

$$
\exist p\in \mathbb N^+: p>\frac 1 r
$$

Logo, para qualquer $n>p$ tem-se $\frac 1 n < r$.

:::

[**Infinitésimo:**](color:green) Diz-se que uma sucessão ($u_n$) é um infinitésimo se $u_n → 0$

:::tip[TEOREMA]
**Limitação das sucessões convergentes**  
Seja ($u_n$) uma sucessão convergente, então ($u_n$) é limitada.  
[**Atenção**](color:red) que o contrário nem sempre se verifica.
:::

**Comportamento da relação de ordem na passagem ao limite:** Sejam ($u_n$) e ($v_n$) duas sucessões convergentes, tem-se:

- Se $\lim u_n<\lim v_n$ então $u_n<v_n$ para $n>>$
- Se $u_n\le v_n$ para $n>>$ então $\lim u_n\le \lim v_n$
- Se $u_n<v_n$ para $n>>$ então $\lim u_n \le \lim v_n$

Esta última propriedade pode-se exemplificar através das seguintes sucessões, representadas no gráfico:

$u_n=\frac{1}{n}$ e $v_n=\frac{1}{3n}$

![Convergência de sub-sucessões](./assets/0004-convergencia-subsucessoes.png)

Podemos intuitivamente perceber que $u_n>v_n,\forall n\in \mathbb N^+$. No entanto, ambas as sucessões tendem para zero, isto é, $\lim u_n = \lim v_n = 0$.

:::tip[TEOREMA]
**Convergência das sub-sucessões das sucessões convergentes**  
Seja ($u_n$) uma sucessão convergente, então qualquer sub-subcessão de ($u_n$) é convergente para $\lim u_n$.
:::

:::tip[DEFINIÇÃO]
**Sublimite de uma sucessão**  
Diz-se que $a$ é um sublimite de ($u_n$) se existe uma sub-sucessão de ($u_n$), ($u_{m_n}$), tal que $u_{m_n}\rightarrow~a$.
:::

De acordo com esta última definição:

- Se existir uma sub-sucessão nas condições da definição, existe um número infinito delas
- Qualquer sucessão convergente só tem um sublimite (que é o limite da sucessão)

:::tip[TEOREMA]
**Convergência das sucessões monótonas e limitadas**  
Seja ($u_n$) uma sucessão de números reais que é monótona e é limitada, então ($u_n$) é convergente.
:::

## Propriedades operatórias com limites

Assumindo que $u_n →a$ e $v_n→b$ :

- $\lim (u_n \pm v_n)=a\pm b$
- $\lim (u_n \times v_n)=a\times b$
- $\lim (\frac {u_n} {v_n})=\frac a b$ (ver exceções na página 7 do PDF da aula 4 em anexo)
- $\lim u_n = a \Rightarrow \lim |u_n|=|a|$
- $\lim u_n^{v_n}=a^b$, sendo que $a\in\mathbb R^+$ e $b\in\mathbb R$

---

PDFs:

- [Aula 3](https://drive.google.com/file/d/1EFfvY-ky2oTGLccDWyZx940CvnnDJpPy/view?usp=sharing)
- [Aula 4](https://drive.google.com/file/d/13GAs8CbuD8fDubkclV9hx4lItEycT838/view?usp=sharing)
