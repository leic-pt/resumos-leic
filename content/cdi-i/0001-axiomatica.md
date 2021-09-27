---
title: Axiomática
description: Definição das operações básicas. Inequações de somas/substrações.
path: /cdi-i/axiomatica
type: content
---

# Axiomática

```toc

```

Existem vários métodos de definir os números reais. No entanto, apenas vamos aprofundar no método que utiliza uma via [axiomática e axiomas](https://en.wikipedia.org/wiki/Axiom).

É importante perceber o que é um axioma antes de continuar.  
TL;DR: Um axioma é uma afirmação que supomos ser verdadeira, e que a partir dela (ou de um conjunto de axiomas) vamos tirar conclusões, neste caso para chegar à definição de números reais.

## Operação binária da soma

Uma [operação binária](https://pt.wikipedia.org/wiki/Opera%C3%A7%C3%A3o_bin%C3%A1ria) é uma operação que tem dois operandos e um resultado.

- Axioma do fecho da adição
  $$\forall x,y\in\mathbb{U}, x+ y\in\mathbb{U}$$

A qualquer operação que tenha a propriedade anteiormente estabelecida chama-se uma operação fechada em $\mathbb{U}$.

- Axioma da associatividade da adição
  $$\forall x,y,z\in \mathbb{U}, x+(y+z)=(x+y)+z$$

- Axioma da comutatividade da adição
  $$\forall x,y \in \mathbb{U}, x+y=y+x$$

:::tip

Nos PDFs em anexo, existem muitos mais exemplos de axiomas que são usados para definir o conjunto dos números reais. Na prática, esta informação não é assim tão importante, por isso o resumo disto acaba aqui :)

:::

## Inequações com somas/diferenças de módulos

Tomemos o exemplo seguinte:

$$
|x-1|+|x+2|\le |x-3| \Leftrightarrow |x-1|+|x+2|-|x-3|\le 0
$$

Para resolver esta inequação, temos de utilizar uma **tabela de módulos**, atendendo aos pontos em que os módulos mudam de sinal. Assim, ficamos com os pontos $-2, 1 \text{ e } 3$.

![Tabela de Sinais](./assets/0001-tabela-sinais.png#dark=1)

É importante relembrar que quando se está a juntar as parcelas na linha $F(x)$ não se pode esquecer dos sinais que estavam inicialmente na inequação. É de notar também a simetria da expressão após passar pelo seu zero.

Através da tabela anterior, podemos escrever a seguinte expressão:

![Inequação](./assets/0001-inequacao.png#dark=1)

É de salientar que não se pode esquecer de fechar os intervalos, isto é, de incluir os pontos de separação na tabela anterior ($-2, 1 \text{ e } 3$), exceto nos casos em que estes não fazem do domínio.

No final, ao resolver a expressão anterior, obtemos o resultado de $[-4,0]$.

- [Exemplo Exercício Inequação](https://drive.google.com/file/d/1njGRXgghyIinAfn-jF9_WpxVPjZc3Gc4/view)

---

PDFs:

- [PDF Aula 1](https://drive.google.com/file/d/1_hZH350ltqeNvS1Fqjp3qQ-CHpZfbWPp/view?usp=sharing)
