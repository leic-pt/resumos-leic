---
title: Transformada de Laplace (Cheat Sheet)
description: Transformada de Laplace (Cheat Sheet);
path: /cdi-iii/cheatsheet/laplace-cheat
type: cheatsheets
---

# Transformada de Laplace (Cheat Sheet)

|        $f(t)$        |   $\mathcal{L} (f)$   |         $f(t)$          |           $\mathcal{L} (f)$            |
| :------------------: | :-------------------: | :---------------------: | :------------------------------------: |
|         $1$          |     $\cfrac{1}s$      |    $cos (\omega t)$     |      $\cfrac{s}{s^2 + \omega^2}$       |
|         $t$          |   $\cfrac{1}{s^2}$    |    $sin (\omega t)$     |    $\cfrac{\omega}{s^2 + \omega^2}$    |
| $t^n \ , \ n \geq 0$ | $\cfrac{n!}{s^{n+1}}$ | $e^{at} cos (\omega t)$ | $\cfrac {s -a}{(s -a)^2 + \omega^2} $  |
|       $e^{at}$       |   $\cfrac{1}{s-a}$    | $e^{at} sin (\omega t)$ | $\cfrac {\omega}{(s -a)^2 + \omega^2}$ |
