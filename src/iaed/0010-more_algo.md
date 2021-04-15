---
description: Quick Sort. Merge Sort. Heap Sort (Enquadramento).
---

# Algoritmos Eficientes de Ordenação

[[toc]]

## Quick Sort

### Ideia

![Quick Sort](./assets/0010-qsort.gif)

- Vantagens
  - popular devido à facilidade de implementação e eficiência
    , em média, para ordenar objectos
  - ciclo interno muito simples e conciso
- Inconvenientes
  - não é estável; no pior caso!
  - frágil: qualquer pequeno erro de concretização pode não ser
    detectado mas levar a ineficiência
- Biblioteca C fornece uma concretização: `qsort()`

Aplica método dividir para conquistar para ordenar
(“divide and conquer”)

- Ideia chave: efectuar partição dos dados e ordenar as
  várias partes independentemente (de forma recursiva)

  - particionar os dados: menores para um lado, maiores para outro
  - usar recursão e aplicar algoritmo a cada uma das partes
  - processo de partição é crítico para evitar partições degeneradas

### Código

<<< @/src/iaed/assets/0010-qsort.c

- Trocas: $2N log (N)$
- Pior Caso: $O(N^2)$
- Melhor Caso: $\Omega(N log (N))$

- Não apenas o tempo necessário para a execução do
  algoritmo cresce quadraticamente como o espaço
  necessário para o processo recursivo é de cerca de $N$ o
  que é inaceitável para vectores grandes. É possível
  modificar para obter espaço $O(log (N))$

### Melhorias

- Podemos escolher o pivô para que seja mais eficiente

- QuickSort é garantido instanciar-se a si próprio múltiplas
  vezes para vectores pequenos!
- Conveniente utilizar o melhor método possível nesta
  situação: insertion sort

## Merge Sort

### Explicação

![Merge](./assets/0010-merge-sort.gif)

- Partir sucessivamente ao
  meio o vector de
  elementos a ordenar,
  até obtermos vectores
  com apenas um elemento

Quando chegamos a vetores de um elemento:

- Aplicar sucessivamente o
  procedimento de Merge,
  para gerar um vector
  ordenado a partir de dois
  vectores ordenados

### Código

<<< @/src/iaed/assets/0010-mergesort.c

- Pior Caso: $O(N log (N))$
- Melhor Caso: $\Omega(N log (N))$

## Heap Sort (Enquadramento)

### Explicação

![Merge](./assets/0010-heap.gif)

- Podemos pensar no heapsort como um selection sort
  mais eficiente.

- o Heapsort mantém os dados organizados
  numa estrutura de dados (chamada heap).
- A raiz dessa estrutura, contém sempre
  o maior elemento.
- Os elementos podem ser sucessivamente removidos
  da raiz da heap, na ordem desejada, tendo o cuidado
  de manter as propriedades dessa estrutura

### Código

<<< @/src/iaed/assets/0010-heap.c

- Construção do amontoado (ciclo `for`):
  - $O(N log (N))$ no pior caso
  - Pode ser provado $O(N)$
- Colocação das chaves (ciclo `while`):
  - $O(N log (N))$ no pior caso
  - Pode ser provado que para elementos distintos, o melhor caso
    também é Ω$S(N log (N))$
- Complexidade no pior caso é $O(N log (N))$
- Não é estável

- Algoritmos de ordenação baseados em comparações
  são pelo menos Ω(N lg N)

Recomendo vivamente a ver os slides da aula e investigar mais sobre estes algoritmos.

- [Demonstração visual dos algoritmos](https://gonque.github.io/sorting-algos/)

Slides:

- [Aula 10](https://drive.google.com/file/d/15_1rxryl8zCLxsx8h-95sZ_LmzTpJRXk/view?usp=sharing)
