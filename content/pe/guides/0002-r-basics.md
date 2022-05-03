---
title: Básicos de R
description: >-
  Conceitos Básicos de R
path: /pe/guides/r-basics
type: guides
---

# Básicos de R

```toc

```

## Documentação do R

É possível abrir a documentação do R localmente no vosso computador.

Para isso, basta executar os seguintes comandos na consola de R (tanto `R` ou `radian`):

```R
options("browser"="brave")    # (Opcional) Alterar o browser default para "brave"
help.start()                  # Ligar o servidor com a documentação
```

Alternativamente, também é possível ver a documentação de cada função (de forma
semelhante às _man pages_ do Unix):

```R
?solve
```

Ou até mesmo procurar por uma função:

```R
??solve
```

Na documentação online conseguem encontrar uma explicação semelhante à abaixo,
e mais completa.

## Vetores e Atribuição

Em R, um vetor é definido com a função `c` (_concatenate_), levando como argumento todos os elementos.

```R
c(10.4, 5.6, 3.1, 6.4, 21.7)

# [1] 10.4  5.6  3.1  6.4 21.7
```

Alternativamente, podemos definir um vetor como um intervalo de números:

```R
# Vetor com números entre 1 e 10 (inclusive)
c(1:10)

# [1]  1  2  3  4  5  6  7  8  9 10
```

Podemos obter certos valores do vetor com os seguintes seletores:

```R
y <- c(10.4, 5.6, 3.1, 6.4, 21.7)

y[1]       # [1] 10.4
y[1:4]     # [1] 10.4  5.6  3.1  6.4
y[y > 10]  # [1] 10.4 21.7
```

Como podemos observar, no exemplo acima começámos por atribuir um valor a uma variável.
Em $R$, existem várias formas de o fazer, pelo que o seguinte é equivalente:

```R
# Todas as expressões abaixo são equivalentes
y <- c(10.4, 5.6, 3.1, 6.4, 21.7) # Recomendada
c(10.4, 5.6, 3.1, 6.4, 21.7) -> y
y = c(10.4, 5.6, 3.1, 6.4, 21.7)
```
