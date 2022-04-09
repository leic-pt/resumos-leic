---
title: Algoritmos Elementares de Ordenação (Continuação)
description: Counting Sort. Radix Sort.
path: /iaed/algoritmos-elementares-ordenacao-2
type: content
---

# Algoritmos Elementares de Ordenação (Continuação)

```toc

```

## Counting Sort

É um algoritmo frequentemente utilizado para ordenados elementos de um vetor em que sabemos que os mesmos podem aparecer repetidamente **e** as respetivas chaves são inteiros de valores relativamente baixos. Esta última "restrição" fará sentido mais à frente.

![Count](./assets/0011-count.png#dark=1)

O procedimento-base do algoritmo é bastante simples: passa por guardar uma **lista de ocorrências** de cada chave durante o vetor. Percorrido o vetor inicial, preenche um vetor com as chaves ordenadas, tantas vezes quantas estas ocorrerem.

Este _preenchimento_ do segundo vetor é realizado iterando o vetor auxiliar, que guarda a contagem de ocorrências de cada chave, do início para o fim, onde cada índice corresponde a uma chave! É então daqui a limitação de chaves com valores baixos: para valores muito grandes, deixa de fazer sentido utilizar o algoritmo (podemos pensar num vetor com 4 elementos, mas em que os vetores variam entre $1000$ e $5000$ - não faz sentido usar o _counting sort_).

`embed:assets/0011-count.c`

A complexidade temporal do algoritmo é dada por $O(n + m)$, onde $n$ é o tamanho do vetor original e $m$ o valor máximo considerado. **É um algoritmo estável**, mas não é _in-place_: o vetor original não é alterado, é utilizado um vetor auxiliar, e é esse vetor que estará ordenado no fim.

## Radix Sort

O _radix sort_ baseia-se na **estrutura** dos elementos que pretende ordenar: ordena elementos processando cada dígito/bit/caracter do elemento atual separadamente (utilizando para esse efeito um outro algoritmo de ordenação, tipicamente o _counting sort_).

A sua complexidade temporal é $O(nm)$, onde $n$ é a quantidade de elementos a ordenar e $m$ o _valor_ máximo a considerar: se estivermos a ordenar palavras _lowercase_, por exemplo, dizemos que $m = 26$ (número de letras do alfabeto).

![Radix](./assets/0011-radix.gif)

Em IAED vamos abordar as versões LSD e MSD do _Radix sort_: _least significant digit_ e _most significant digit_, respetivamente.

### RADIX LSD

Possui um funcionamento bastante simples: limita-se a aplicar o _counting sort_ sucessivamente, dos dígitos menos significativos para os mais significativos.

`embed:assets/0011-radix.c`

Abaixo podem ver um exemplo da aplicação do _Radix LSD_:

::youtube{#y4rh9o58h8A}

### RADIX MSD

Funcionamento análogo ao _Radix LSD_, com a diferença óbvia da ordenação ser "invertida": ordenamos do dígito mais significativo para o menos significativo.

`embed:assets/0011-msd.c`

Abaixo podem ver um exemplo da aplicação do _Radix MSD_:

::youtube{#6YyflHO9GdE}

---

Mais uma vez, e tal como no final das duas últimas páginas, fica [aqui](https://gonque.github.io/sorting-algos) um _link_ que permite a demonstração visual dos algoritmos referidos nesta página
