Integração em $\R^n$

- Intervalo aberto de $\R^n$ é um conjunto de fatores

$I = ]a_1, b_1[ \times ]a_2, b_2[ \times \dots \times ]a_n, b_n[$

Ex: em $\R^2$ são retângulos abertos
em $\R^3$ são paralelipípedos abertos

Def:
$|I| = (b_1-a_1) \times (b_2-a_2)\times \dots \times (b_n-a_n)$

Em $\R$, $|I|$ comprimento
Em $\R^2$, $|I|$ área
Em $\R^3$, $|I|$ volume

Def.
Uma partição de $I$ é uma subdivisão em intervalos abertos

Dada uma partição, uma função em escada nessa partição é uma função que é constante em cada subintervalo.

Em geral, se $f: I \to \R$ é uma função em escada

$\int_I f= \sum_{J elemento da partição} (valor da função) \times |J|$

Ex:

Em $\R$:

$\int^8_0=3\times 1 + 2\times 2 + 4\times 2 + 1\times 3 = 3+4+8+3 = 18$

Em geral, se, $f: I \to \R$, como definir $\int_I f$ ?

"$\int_I f \leq $ área deste função em escada"

Isto é verdade para qualquer partição.

$\int_I f \leq \overline\int_I f = \operatorname{int} \{\text{Integrais de todas as funções em cada por excesso}\}$
Integral superior de $f$

"$\int_I f \geq $ área deste função em escada"

$\int_I f \geq \underline\int_I f = \operatorname{sup} \{\text{Integrais de todas as funções em cada por defeito}\}$
Integral inferior de $f$

Def:

$f: I \to \R$ diz-se integrável se $\overline\int_I f=\underline\int_I f$ e
nesse caso,
$\int_I f := \overline\int_I f$ (ou $\underline\int_I f$)
...é igual, por definição, a...

Propriedade do integral

- Se $f, g: I \to \R$ integráveis, então

  $\int_I (af+bg) = a\int_I f + b\int_I g$, $a,b\in \R$

- Se $f \leq g$, $\int_I f \leq \int_I g$

- Se $I_1 \cup I_2$ é uma partição de $I$ então

  $\int_I f= \int_{I_1} f + \int_{I_2} f$
