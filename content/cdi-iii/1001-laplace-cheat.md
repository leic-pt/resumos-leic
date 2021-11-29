---
title: Transformada de Laplace (Cheat Sheet)
description: Transformada de Laplace (Cheat Sheet);
path: /cdi-iii/cheatsheet/laplace-cheat
type: cheatsheets
---

# Transformada de Laplace (Cheat Sheet)

## Transformações mais Usadas

|          $f(t)$          |           $\mathcal{L} (f)$            |
| :----------------------: | :------------------------------------: |
|           $1$            |              $\cfrac{1}s$              |
|           $t$            |            $\cfrac{1}{s^2}$            |
|   $t^n \ , \ n \geq 0$   |         $\cfrac{n!}{s^{n+1}}$          |
|         $e^{at}$         |            $\cfrac{1}{s-a}$            |
|        $te^{at}$         |          $\cfrac{1}{(s-a)^2}$          |
|    $\cos (\omega t)$     |      $\cfrac{s}{s^2 + \omega^2}$       |
|    $\sin (\omega t)$     |    $\cfrac{\omega}{s^2 + \omega^2}$    |
| $e^{at} \cos (\omega t)$ | $\cfrac {s -a}{(s -a)^2 + \omega^2} $  |
| $e^{at} \sin (\omega t)$ | $\cfrac {\omega}{(s -a)^2 + \omega^2}$ |

## Fórmulas

### Definição

$$
\lapt{f} (s) = \int_{0}^{+\infty} f(t) \ e^{-st} \d t
$$

### Função de Heaviside

$$
\lapt{H_c(t)}(s) = \frac{e^{-cs}}{s}
$$

### Função de Dirac

$$
\lapt{\delta(t - c)}(s) = e^{-cs}
$$

### Translação da Transformada de Laplace

$$
\lapt{e^{at} f(t)} (s) = \lapt{f(t) } (s-a)
$$

### Transformada de Laplace da Translação

$$
 \lapt{H(t-c) f(t-c)}(s ) = e^{-cs} \lapt{f(t)} (s)
$$

### Derivada da Transformada de Laplace

$$
\frac{\d^n}{\d s^n} \left(\lapt{f(t)} (s) \right) = (-1)^n \lapt{t^n f(t)}(s)
$$

### Transformada de Laplace da Derivada

$$
\lapt{f'(t)}(s) = - f(0) + s\lapt{f(t)}(s)
$$
