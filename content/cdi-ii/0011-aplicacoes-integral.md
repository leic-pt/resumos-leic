---
title: Aplicações do Integral
description: 'Aplicações do Integral: Determinação da Massa de Sólidos, Centro de Massa e Centroide, e Momento de Inércia em Relação a um Eixo'
path: /cdi-ii/aplicacoes-integral
---

# Aplicações do Integral

```toc

```

Além da determinação do [volume n-dimensional](./0008-integracao.html#volume-n-dimensional-de-um-conjunto-a) de um sólido,
podemos usar o integral para calcular a massa de sólidos, o centro de massa e centroide,
o momento de inércia em relação a um eixo, entre outros.

## Massa de Sólidos

Se tivermos um {green}(sólido $S$, em $\R^3$) e uma função {blue}($f$ que representa a densidade de massa do sólido $S$),
então podemos calcular a **massa de $S$** através de:

$$
\text{Massa de }S = \int_S f
$$

:::details[Exemplos]

Seja {green}($V$ um sólido)

$$
V = \{(x,y,z) \in \R^3: x^2+y^2\leq 1, x^2+y^2 \leq z \leq 3-x^2-y^2 \}
$$

e {blue}(a função $f$, densidade de massa de $V$),

$$f(x,y,z) = z^2$$

**Qual a massa de $V$?**

$$\int_V z^2 \d x \d y \d z$$

$V$ é sólido de revolução em torno do eixo dos $z$.

Então, transformando em [coordenadas cilíndricas](./0010-integracao-mudanca-var.html#coordenadas-cilindricas),

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta\\
z = z
\end{cases}
$$

$$
\begin{array}{l l l}
r^2 \leq 1 & , & r^2 \leq z \leq 3 - r^2\\
\theta \in ]0, 2\pi [ & , & 0 \leq r \leq 1
\end{array}
$$

$$
\begin{aligned}
\text{Massa} &= \int^1_0 \int^{2\pi}_0 \int^{3-r^2}_{r^2} z^2 \cdot r \d z \d \theta \d r\\
&= \int^1_0 \int^{2\pi}_0 \left[\frac{z^3}{3} \cdot r \right]^{z=3-r^2}_{r=r^2} \d \theta \d r\\
&= \int^1_0 \int^{2\pi}_0 \left(\frac{(3-r^2)^3}{3} \cdot r - \frac{r^6}{3} \cdot r \right) \d \theta \d r\\
&= 2\pi \int^1_0 \left(\frac{(3-r^2)^3}{-2\times 3} \cdot (-2r) - \frac{r^7}{3} \right) \d r\\
&= 2\pi \left[\frac{(3-r^2)^4}{-2\times 3 \times 4} - \frac{r^8}{3 \times 8} \right]^1_0\\
&= 2\pi \left(\left(-\frac{16}{24} - \frac{1}{24} \right) - \frac{81}{-24}\right)\\
&= 2\pi \frac{64}{24}
\end{aligned}
$$

:::

## Centro de Massa

Representado por $(\overline x, \overline y, \overline z)$, o {purple}(centro de massa) de um sólido
pode ser calculado através da seguinte expressão, para cada uma das suas coordenadas:

$$
\overline x = \frac{\int_S xf}{\int_S f} = \frac{1}{\text{Massa}} \cdot \int_S xf
$$

$$
\overline y = \frac{\int_S yf}{\int_S f} = \frac{1}{\text{Massa}} \cdot \int_S yf
$$

$$
\overline z = \frac{\int_S zf}{\int_S f} = \frac{1}{\text{Massa}} \cdot \int_S zf
$$

No caso $f=1$, $(\overline x, \overline y, \overline z)$ chama-se {pink}(**centroide**).

$$
\overline x = \frac{\int_S x}{\int_S 1}
$$

## Momento de Inércia em Relação a um Eixo

Podemos também, através do integral, calcular o {yellow}(**momento de inércia**) em relação a um eixo.

![Momento de Inércia em relação ao eixo zz](./assets/0011-inercia.svg#dark=1)

O {yellow}(**momento de inércia**) em relação a um eixo $L$ pode ser calculado através de

$$
I_L = \int_S \text{densidade} \times (\text{distância à lateral})^2
$$

Como exemplo, para o eixo $zz$:

$$
I_z = \int_S f\cdot (\underbrace{\sqrt{x^2+y^2}}_{\begin{array}{c}
\scriptsize\text{distância de um} \\
\scriptsize\text{ponto ao eixo dos }zz
\end{array}})^2 = \int_S f\cdot (x^2+y^2)
$$

E para o eixo $yy$:

$$
I_y = \int_S f\cdot (x^2+z^2)
$$

---

Slides:

- [Aula 24](https://drive.google.com/file/d/1nge8TWV-8fdiAe2QM2B93AxMl4zdoBgi/view?usp=sharing)
