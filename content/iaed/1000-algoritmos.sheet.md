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

[Explicação nos resumos](/iaed/algoritmos-elementares-ordenacao#selection-sort).

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

[Explicação nos resumos](/iaed/algoritmos-elementares-ordenacao#insertion-sort).

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

[Explicação nos resumos](/iaed/algoritmos-elementares-ordenacao#bubble-sort-borbulhamento).

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

[Explicação nos resumos](/iaed/algoritmos-eficientes-ordenacao#quick-sort).

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

[Explicação nos resumos](/iaed/algoritmos-eficientes-ordenacao#merge-sort).

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

[Explicação nos resumos](/iaed/algoritmos-eficientes-ordenacao#heap-sort-enquadramento).

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

[Explicação nos resumos](/iaed/algoritmos-elementares-ordenacao-2#counting-sort).

**De realçar que a implementação do _counting sort_ varia dependendo da situação**: o que é intrínseco à lógica acaba por manter-se, mas temos obviamente que utilizar este algoritmo para ordenar caracteres e inteiros será diferente. A implementação abaixo corresponde a uma implementação-exemplo para ordenação de um vetor de inteiros.

:::details[Counting Sort]

```c
/* Quantos elementos diferentes podem aparecer */
/* No exemplo da imagem acima, podem aparecer 9, os números entre 0 e 8 */
#define DISTINCT_ELEMENTS 9
/* Tamanho máximo do vetor que queremos ordenar */
#define MAX_SIZE 10

void counting_sort(int vec[], int left, int right) {
  /* Vetor count que irá guardar quantas vezes aparece cada elemento */
  int i, count[DISTINCT_ELEMENTS + 1];

  /* Vetor auxiliar onde vamos guardar o vetor ordenado */
  /* Mais à frente iremos ver como alocar dinâmicamente
    o espaço a ser alocado pelo mesmo (com malloc) */
  int sorted_vec[MAX_SIZE];

  /* Inicializar vetor count a zeros */
  for (i = 0; i < DISTINCT_ELEMENTS; i++) {
    count[i] = 0;
  }

  /* Para cada elemento de vec, somar 1 ao índice correspondente de count */
  for (i = left; i < right; i++) {
    count[vec[i] + 1]++;
  }
  /* Para o exemplo da imagem, iremos obter o vetor: */
  /* count = [0, 0, 1, 2, 2, 1, 0, 0, 0, 1] */

  /* Passar a contagem de elementos para uma contagem comulativa */
  for (i = 1; i < DISTINCT_ELEMENTS + 2; i++) {
    count[i] += count[i - 1];
  }
  /* Ficamos agora com um vetor count igual ao da imagem exemplo */
  /* Cada índice indica a primeira posição onde iremos inserir o elemento,
    daí existir uma posição no início que não está associada a nada. */

  /* Para cada elemento do vetor original, vamos ver qual o índice inicial
    no vetor ordenado. Para colocarmos corretamente valores repetidos no
    vetor ordenado, temos de incrementar o valor no count, de forma a colocar
    os repetidos na posição seguinte. */
  for (i = left; i < right; i++) {
    sorted_vec[count[vec[i]]++] = vec[i];
  }
  /* O vetor sorted_vec contém agora o resultado final, ordenado */
  /* sorted_vec = [1, 2, 2, 3, 3, 4, 8] */

  /* Finalmente, inserir o vetor ordenado de volta no vetor original */
  for (i = left; i < right; i++) {
    vec[i] = sorted_vec[i - left];
  }
}

```

:::

### Radix Sort LSD

[Explicação nos resumos](/iaed/algoritmos-elementares-ordenacao-2#radix-lsd).

:::details[Radix Sort LSD]

```c
/* Estamos a ordenar inteiros */
typedef int Item;

/* Existem 10 dígitos diferentes */
#define DISTINCT_ELEMENTS 10
/* Como exemplo, vamos usar números de 3 dígitos */
#define INT_LENGTH 3
/* Número máximo de elementos a ordenar */
#define MAX_SIZE 100

/* Obter dígito de num no índice digit_i */
int digit(int num, int digit_i) {
  while (digit_i > 0) {
    num = num / 10;
    digit_i--;
  }
  return num % 10;
}

void radix_lsd(Item vec[], int left, int right) {
  int i, curr_digit, count[DISTINCT_ELEMENTS + 1];
  int sorted_vec[MAX_SIZE];
  for (curr_digit = 0; curr_digit < INT_LENGTH; curr_digit++) {
    /* Counting sort em cada dígito */
    for (i = 0; i < DISTINCT_ELEMENTS; i++) {
      count[i] = 0;
    }
    for (i = left; i < right; i++) {
      count[digit(vec[i], curr_digit) + 1]++;
    }
    for (i = 1; i < DISTINCT_ELEMENTS + 2; i++) {
      count[i] += count[i - 1];
    }
    for (i = left; i < right; i++) {
      sorted_vec[count[digit(vec[i], curr_digit)]++] = vec[i];
    }
    for (i = left; i < right; i++) {
      vec[i] = sorted_vec[i - left];
    }
  }
}
```

:::

### Radix Sort MSD

[Explicação nos resumos](/iaed/algoritmos-elementares-ordenacao-2#radix-msd).

:::details[Radix Sort MSD]

```c
void radix_msd(int a[], int l, int r, int w) {
  int i = l, j = r;
  if (r <= l || w > bitsword) {
    return;
  }
  while (j != i) {
    while (digit(a[i], w) == 0 && (i < j)) {
      i++;
    }
    while (digit(a[j], w) == 1 && (j > i)) {
      j--;
    }
    exch(a[i], a[j]);
  }
  if (digit(a[r], w) == 0) {
    j++;
  }
  radix_msd(a, l, j - 1, w + 1);
  radix_msd(a, j, r, w + 1);
}
```

:::

---

Quando reparas que o Bogosort é o único algoritmo que consegue ordenar à primeira

![BOGOSORT POG](https://miro.medium.com/max/919/1*vlRhlnh4-SKa6GVtYgJaHg.gif)
