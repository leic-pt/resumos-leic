---
description: Integrais; Intervalo Aberto; Partições; Função em Escada; Integral Superior e Inferior; Propriedades de Integrais
---

# Integração em Rⁿ

[[toc]]

## Intervalo aberto

Um intervalo aberto de $\R^n$ é um conjunto de fatores

$$I = ]a_1, b_1[ \times ]a_2, b_2[ \times \dots \times ]a_n, b_n[$$

Por exemplo, em $\R^2$ são retângulos abertos, enquanto em $\R^3$ são paralelipípedos abertos

Podemos também calcular o comprimeiro, área, volume, etc através de um intervalo.

$$|I| = (b_1-a_1) \times (b_2-a_2)\times \dots \times (b_n-a_n)$$

- Em $\R$, $|I|$ é o comprimento
- Em $\R^2$, $|I|$ é a área
- Em $\R^3$, $|I|$ é o volume

## Partição

Uma partição de $I$ é uma subdivisão em intervalos abertos.

[imagem]

## Integração

### Funções em escada

Dada uma partição, uma **função em escada** nessa partição é uma função que é constante em cada subintervalo.

Uma propriedade das funções em escada é que é muito fácil calcular o seu integral.

Em geral, se $f: I \to \R$ é uma função em escada, então

$$\int_I f= \sum_{J \text{elemento da partição}} (\text{valor da função}) \times |J|$$

::: details Exemplo (TODO)

[imagem]

Em $\R$:

$\int^8_0=3\times 1 + 2\times 2 + 4\times 2 + 1\times 3 = 3+4+8+3 = 18$

:::

### Funções escalares

Em geral, se, $f: I \to \R$, podemos encontrar estratégias para definir $\int_I f$.
Uma dessas estratégias é enquadrar a função no integral superior e inferior.
O tamanho das partições que escolhemos não é relevante, obtemos o mesmo resultado com partições de qualquer tamanho.

"$\int_I f \leq$ área deste função em escada"

"$\int_I f \geq$ área deste função em escada"

::: tip DEFINIÇÃO

Integral superior de $f$:

$$\int_I f \leq \overline{\int_I} f = \operatorname{int} \{\text{Integrais de todas as funções em cada por excesso}\}$$

Integral inferior de $f$

$$\int_I f \geq \underline{\int_I} f = \operatorname{sup} \{\text{Integrais de todas as funções em cada por defeito}\}$$

:::

Assim, conseguimos obter a definição de função integrável.

::: tip DEFINIÇÃO

$f: I \to \R$ diz-se integrável se $\overline{\int}_I f=\underline{\int}_I f$ e
nesse caso,

$$\int_I f := \overline{\int_I} f \left(\text{ou} \underline{\int_I} f\right)$$

:::

### Propriedades do Integral

- Se $f, g: I \to \R$ integráveis, então podemos separar somas e constantes

  $$\int_I (af+bg) = a\int_I f + b\int_I g, \quad a,b\in \R$$

- Se $f \leq g$, então $\int_I f \leq \int_I g$

- Se $I_1 \cup I_2$ é uma partição de $I$ então

  $$\int_I f= \int_{I_1} f + \int_{I_2} f$$
