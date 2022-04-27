---
title: Algoritmos de Ordenação (Cheat Sheet)
description: Selection Sort, Insertion Sort, Bubble Sort, Quick Sort, Merge Sort, Heap Sort, Counting Sort, Radix Sort LSD/MSD
path: /iaed/cheatsheet/algoritmos
type: cheatsheets
---

# Algoritmos de Ordenação (Cheat Sheet)

```toc

```

:::warning[Uso em projetos e/ou avaliações]

Qualquer uso do código abaixo em projetos e/ou avaliações é da responsabilidade do aluno.
O código disponível nesta página foi retirado de slides dos docentes, bibliografia da UC ou projetos de outros alunos e adaptado quando necessário.

:::

## Algoritmos

Os algoritmos abaixo vão usar as seguintes abstrações (em coerência com os algoritmos disponibilizados pela docência):

```c
typedef int Item; // caso queiramos ordenar inteiros

#define key(A) A
#define less(A, B) (key(A) < key(B))
#define exch(A, B)  \
    {               \
        Item t = A; \
        A = B;      \
        B = t;      \
    }
#define compexch(A, B) \
    if (less(B, A))    \
    exch(A, B)
```

Mais ainda, de realçar que todos os algoritmos apresentados nesta secção estão explicados na secção respetiva dos resumos, indicada a par do respetivo código.

### Selection Sort

[Explicação nos resumos](../algoritmos-elementares-ordenacao#selection-sort).

:::details[Selection Sort]

```c
void selection(Item a[], int left, int right) {
  int i, j;

  for (i = left; i < right; i++) {
    int min = i;
    for (j = i + 1; j <= right; j++) {
      if (less(a[j], a[min]))
        min = j;
    }
    exch(a[i], a[min]);
  }
}
```

:::

### Insertion Sort

[Explicação nos resumos](../algoritmos-elementares-ordenacao#insertion-sort).

:::details[Insertion Sort]

```c
void insertion(Item a[], int left, int right) {
  int i, j;

  for (i = left + 1; i <= right; i++) {
    Item v = a[i];
    j = i - 1;

    while (j >= left && less(v, a[j])) {
      // vetor percorrido até encontrar o elemento menor que v
      a[j + 1] = a[j]; // andamos uma casa para a direita
      j--;
    }

    a[j + 1] = v; // guarda o valor na casa acima à do valor menor
  }
}
```

:::

### Bubble Sort

[Explicação nos resumos](../algoritmos-elementares-ordenacao#bubble-sort-borbulhamento).

:::details[Bubble Sort]

```c
void bubble(Item a[], int left, int right) {
  int i, j;
  int done = 0; // flag utilizada para indicar quando o vetor está ordenado

  for (i = left; i < right && done == 0; i++) {
    done = 1;
    for (j = left; j < right + (left - i); j++) {
      if (less(a[j], a[j - 1])) {
        exch(a[j - 1], a[j]);
        done = 0;
      }
    }
  }
}
```

:::

### Quick Sort

[Explicação nos resumos](../algoritmos-eficientes-ordenacao#quick-sort).

:::details[Quick Sort]

```c
void quicksort(Item a[], int left, int right) {
  int i;
  int j;
  if (right <= left)
    return;

  i = partition(a, left, right);

  quicksort(a, left, i - 1);
  quicksort(a, i + 1, right);
}

int partition(Item a[], int left, int right) {
  int i = left - 1;
  int j = right;
  Item v = a[right];
  while (i < j) {
    while (less(a[++i], v));

    while (less(v, a[--j])) {
      if (j == left)
        break;
      if (i < j)
        exch(a[i], a[j]);
    }

    exch(a[i], a[right]);
  }

  return i;
}
```

:::

### Merge Sort

[Explicação nos resumos](../algoritmos-eficientes-ordenacao#merge-sort).

:::details[Merge Sort]

```c
void mergesort(Item a[], int left, int right) {
  int m = (right + left) / 2;
  if (right <= left)
    return;
  mergesort(a, left, m);
  mergesort(a, m + 1, right);
  merge(a, left, m, right);
}

Item aux[DIM];

void merge(Item a[], int left, int m, int right) {
  int i, j, k;
  for (i = m + 1; i > left; i--)
    aux[i - 1] = a[i - 1];
  for (j = m; j < right; j++)
    aux[right + m - j] = a[j + 1];
  for (k = left; k <= right; k++) {
    // vamos escolhendo os elementos das pontas para ordenar o vetor
    if (less(aux[j], aux[i]) || i == m + 1)
      a[k] = aux[j--];
    else
      a[k] = aux[i++];
  }
}
```

:::

### Heap Sort

[Explicação nos resumos](../algoritmos-eficientes-ordenacao#heap-sort-enquadramento).

:::details[Heap Sort]

```c
void heapsort(Item a[], int l, int r) {
  buildheap(a, l, r);
  while (r - l > 0) {
    exch(a[l], a[r]);
    fixDown(a, l, --r, l);
  }
}

void buildheap(Item a[], int l, int r) {
  int k, heapsize = r - l + 1;
  for (k = heapsize / 2 - 1; k >= l; k--)
    fixDown(a, l, r, l + k);
}

void fixDown(Item a[], int l, int r, int k) {
  int ileft, iright, largest = k;
  ileft = l + left(k - l);
  iright = l + right(k - l);

  if (ileft <= r && less(a[largest], a[ileft]))
    largest = ileft;
  if (iright <= r && less(a[largest], a[iright]))
    largest = iright;

  if (largest != k) {
    exch(a[k], a[largest]);
    fixDown(a, l, r, largest);
  }
}

int parent(int k) {
  return ((k + 1) / 2) - 1;
}

int left(int k) {
  return 2 * k + 1;
}

int right(int k) {
  return 2 * (k + 1);
}
```

:::

### Counting Sort

[Explicação nos resumos](../algoritmos-elementares-ordenacao-2#counting-sort).

**De realçar que a implementação do _counting sort_ varia dependendo da situação**: o que é intrínseco à lógica acaba por manter-se, mas temos obviamente que utilizar este algoritmo para ordenar caracteres e inteiros será diferente. A implementação abaixo corresponde a uma implementação-exemplo para ordenação de um vetor de inteiros.

:::details[Counting Sort]

```c
#define MAX 100 // 100 é placeholder
/* vamos evitar o uso de variáveis na declaração de vetores,
 * porque variable length arrays are bad
 * devemos OU usar constantes OU usar malloc e amigos
 * wikipedia article relevante:
 * https://en.wikipedia.org/wiki/Variable-length_array#C99
 */

void countingSort(int numbers[], int size) {
  int count[SIZE];
  for (int i = 0; i < MAX; i++)
    count[i] = 0;

  for (int i = 0; i < size; i++)
    count[numbers[i]]++;

  int index = 0;
  for (int i = 0; i < MAX; i++) {
    while (count[i] > 0) {
      numbers[index] = i;
      index++;
      count[i]--;
    }
  }
}

```

:::

### Radix Sort LSD

[Explicação nos resumos](../algoritmos-elementares-ordenacao-2#radix-lsd).

:::details[Radix Sort LSD]

```c
#define maxN 100000
#define bitsword 32
#define bitsbyte 8
#define bytesword 4
#define R (1 << bitsbyte)
#define digit(n, w) ((n & ( 1 << w )) >> w)

// defines um pouquinho cursed, mas é o que há

Item aux[maxN];

void radixLSD(Item a[], int l, int r) {
  int i, j, w, count[R + 1];

  for (w = bytesword - 1; w >= 0; w--) {
    /* Counting sort para o digito w */
    for (j = 0; j < R; j++)
      count[j] = 0;
    for (i = l; i <= r; i++)
      count[digit(a[i], w) + 1]++;
    for (j = 1; j < R; j++)
      count[j] += count[j - 1];
    for (i = l; i <= r; i++)
      aux[count[digit(a[i], w)]++] = a[i];
    for (i = l; i <= r; i++)
      a[i] = aux[i - l];
  }
}
```

:::

### Radix Sort MSD

[Explicação nos resumos](../algoritmos-elementares-ordenacao-2#radix-msd).

:::details[Radix Sort MSD]

```c
#include <stdio.h>

#define DIM 10
#define compexch(A, B) \
    if (less(B, A))    \
    exch(A, B)
#define maxN 1000000
#define bitsword 32
#define bitsbyte 8
#define bytesword 4
#define R (1 << bitsbyte)
#define digit(n, w) ((n & ( 1 << w )) >> w)
#define bin(A) l + count[A]
#define QM 10

Item aux[maxN];

void insertion(Item a[], int l, int r) {
  int i;
  /* Coloca o menor elemento na primeira posicao */
  for (i = l + 1; i <= r; i++)
    compexch(a[l], a[i]);
  for (i = l + 2; i <= r; i++) {
    int j = i;
    /* Variavel auxiliar para guardar o valor a[i] */
    Item v = a[i];
    /* Enquanto v < a[j] puxar os valores para a direita */
    /* Como o primeiro elemento e o menor podemos omitir a condicao j>=l */
    while (less(v, a[j - 1])) {
      a[j] = a[j - 1];
      j--;
    }
    /* Guardar o valor originalmente na posicao i na posicao libertada */
    a[j] = v;
  }
}

void radixMSD(Item a[], int l, int r, int w) {
  int i, j, count[R + 1];
  if (w > bytesword)
    return;
  /* Optimizacao */
  if (r - l <= QM) {
    insertion(a, l, r);
    return;
  }
  /* Counting sort para o digito w */
  for (j = 0; j < R; j++)
    count[j] = 0;
  for (i = l; i <= r; i++)
    count[digit(a[i], w) + 1]++;
  for (j = 1; j < R; j++)
    count[j] += count[j - 1];
  for (i = l; i <= r; i++)
    aux[count[digit(a[i], w)]++] = a[i];
  for (i = l; i <= r; i++)
    a[i] = aux[i - l];
  /* Os bins denotam as caixas discutidas acima */
  radixMSD(a, l, bin(0) - 1, w + 1);
  for (j = 0; j < R - 1; j++)
    radixMSD(a, bin(j), bin(j + 1) - 1, w + 1);
}
```

:::

---

Quando reparas que o Bogosort é o único algoritmo que consegue ordenar à primeira

![BOGOSORT POG](https://miro.medium.com/max/919/1*vlRhlnh4-SKa6GVtYgJaHg.gif)
