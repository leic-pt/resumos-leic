---
title: Funções
description: Função real de variável real. Função Injetiva e Bijetiva.
path: /cdi-i/funcoes
type: content
---

# Funções

```toc

```

:::tip[Definição]
**Função real de variável real**  
Chama-se [**função real de variável real**](color:orange) a qualquer correspondência $f$ que a cada valor de um conjunto $A \subset \mathbb R$ faz corresponder um e um só elemento de um conjunto $B$.  
Chama-se [**domínio**](color:yellow) ao conjunto $A$ e conjunto de chegada ao conjunto $B$.  
Para indicar explicitamente o [**domínio**](color:yellow) e o [**conjunto de chegada**](color:pink) de $f$ usa-se a notação $f:A\rightarrow B$.
:::

## Injetividade, Sobrejetividade e Bijetividade

:::tip[Definição]
Seja $f:A\rightarrow B$ uma função real de variável real. Diz-se que:

- $f$ é **injetiva** se não existem dois elementos de $A$ com a mesma imagem, ou seja, se para quaisquer $x_1,x_2\in A$ se tem $f(x_1)=f(x_2)\Rightarrow x_1=x_2$.
- $f$ é **sobrejetiva** se $f(A)=B$, ou seja, se para qualquer $y\in B$ existe um $x\in A$ tal que $f(x)=y$.
- $f$ é **bijetiva** se $f$ é simultaneamente injetiva e sobrejetiva

:::

Se $f$ é bijetiva, diz-se que $f$ é invertível, isto é, que admite uma inversa: $f^{-1}(f(x))=x$.

Por vezes, as funções podem-se tornar bijetivas fazendo restrições e extensões:

:::tip[Definições]
**Restrição e Extensão**  
Seja $f:A\rightarrow B$ uma função real de variável real.

- Dado um conjunto $A_1\subset A$ chama-se **restrição** de $f$ a $A_1$ à função $f|_{A_1}:A_1\rightarrow B$, $f|_{A_1}(x)=f(x)$ para qualquer $x\in A_1$.
- Dado um conjunto $A_2\supset A$ diz-se que $f_2$ é uma **extensão** de $f$ a $A_2$ se $f_2:A_2\rightarrow B$ e $f$ é uma restrição de $f_2$ a $A$.

:::

---

PDFs:

- [Aula 7](https://drive.google.com/file/d/1s_3zvAzj2ynivQ70QdZuEmER943lMGUh/view?usp=sharing)
