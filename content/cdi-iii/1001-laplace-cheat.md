---
title: Transformada de Laplace (Cheat Sheet)
description: Transformada de Laplace (Cheat Sheet);
path: /cdi-iii/cheatsheet/laplace-cheat
type: cheatsheets
---

# Transformada de Laplace (Cheat Sheet)

|         $f(t)$          |           $\mathcal{L} (f)$            |
| :---------------------: | :------------------------------------: |
|           $1$           |              $\cfrac{1}s$              |
|           $t$           |            $\cfrac{1}{s^2}$            |
|  $t^n \ , \ n \geq 0$   |         $\cfrac{n!}{s^{n+1}}$          |
|        $e^{at}$         |            $\cfrac{1}{s-a}$            |
|        $ate^{at}$        |          $\cfrac{1}{(s-a)^2}$          |
|    $cos (\omega t)$     |      $\cfrac{s}{s^2 + \omega^2}$       |
|    $sin (\omega t)$     |    $\cfrac{\omega}{s^2 + \omega^2}$    |
| $e^{at} cos (\omega t)$ | $\cfrac {s -a}{(s -a)^2 + \omega^2} $  |
| $e^{at} sin (\omega t)$ | $\cfrac {\omega}{(s -a)^2 + \omega^2}$ |
