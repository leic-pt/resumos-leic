---
title: Algoritmos de Ordenação (Cheat Sheet)
description: Selection Sort.
  Insertion Sort.
  Bubble Sort.
  Quick Sort.
  Merge Sort.
  Heap Sort.
  Counting Sort.
  Radix Sort LSD/MSD.
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
void selection_sort(Item arr[], int left, int right) {
  int i, j;

  for (i = left; i < right; i++) {
    int min = i;
    for (j = i + 1; j <= right; j++) {
      if (less(arr[j], arr[min]))
        min = j;
    }
    exch(arr[i], arr[min]);
  }
}
```

:::

### Insertion Sort

[Explicação nos resumos](/iaed/algoritmos-elementares-ordenacao#insertion-sort).

:::details[Insertion Sort]

```c
void insertion_sort(Item arr[], int left, int right) {
  int i, j;

  for (i = left + 1; i <= right; i++) {
    Item curr = arr[i];
    j = i - 1;

    while (j >= left && less(curr, arr[j])) {
      // vetor percorrido até encontrar o elemento menor que curr
      arr[j + 1] = arr[j]; // andamos uma casa para a direita
      j--;
    }

    arr[j + 1] = curr; // guarda o valor na casa acima à do valor menor
  }
}
```

:::

### Bubble Sort

[Explicação nos resumos](/iaed/algoritmos-elementares-ordenacao#bubble-sort-borbulhamento).

:::details[Bubble Sort]

```c
void bubble_sort(Item arr[], int left, int right) {
  int i, j;
  int done = 0; // flag utilizada para indicar quando o vetor está ordenado

  for (i = left; i < right && !done; i++) {
    done = 1;
    for (j = left; j < right + (left - i); j++) {
      if (less(arr[j], arr[j - 1])) {
        exch(arr[j - 1], arr[j]);
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
void quick_sort(Item arr[], int left, int right) {
  int i;
  if (right <= left)
    return;

  i = partition(a, left, right);

  quick_sort(arr, left, i - 1);
  quick_sort(arr, i + 1, right);
}

int partition(Item arr[], int left, int right) {
  int i = left - 1;
  int j = right;
  Item el = arr[right];
  while (i < j) {
    while (less(arr[++i], el));

    while (less(el, arr[--j])) {
      if (j == left)
        break;
      if (i < j)
        exch(arr[i], arr[j]);
    }

    exch(arr[i], arr[right]);
  }

  return i;
}
```

:::

### Merge Sort

[Explicação nos resumos](/iaed/algoritmos-eficientes-ordenacao#merge-sort).

:::details[Merge Sort]

```c
void merge_sort(Item arr[], int left, int right) {
  int mid = (right + left) / 2;
  if (right <= left)
    return;

  merge_sort(arr, left, mid);
  merge_sort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

Item aux[DIM];

void merge(Item arr[], int left, int mid, int right) {
  int i, j, k;
  for (i = mid + 1; i > left; i--)
    aux[i - 1] = arr[i - 1];
  for (j = mid; j < right; j++)
    aux[right + mid - j] = arr[j + 1];
  for (k = left; k <= right; k++) {
    // vamos escolhendo os elementos das pontas para ordenar o vetor
    if (less(aux[j], aux[i]) || i == mid + 1)
      arr[k] = aux[j--];
    else
      arr[k] = aux[i++];
  }
}
```

:::

### Heap Sort

[Explicação nos resumos](/iaed/algoritmos-eficientes-ordenacao#heap-sort-enquadramento).

:::details[Heap Sort]

```c
void heap_sort(Item arr[], int left, int right) {
  build_heap(arr, left, right);
  while (right - left > 0) {
    exch(arr[left], arr[right]);
    fix_down(arr, left, --right, left);
  }
}

void build_heap(Item arr[], int left, int right) {
  int k, heapsize = right - left + 1;
  for (k = heapsize / 2 - 1; k >= left; k--)
    fix_down(arr, left, right, left + k);
}

void fix_down(Item arr[], int left, int right, int k) {
  int ileft, iright, largest = k;
  ileft = left + left_child(k - left);
  iright = left + right_child(k - left);

  if (ileft <= right && less(arr[largest], arr[ileft]))
    largest = ileft;
  if (iright <= right && less(arr[largest], arr[iright]))
    largest = iright;

  if (largest != k) {
    exch(arr[k], arr[largest]);
    fix_down(arr, left, right, largest);
  }
}

int parent(int k) {
  return ((k + 1) / 2) - 1;
}

int left_child(int k) {
  return 2 * k + 1;
}

int right_child(int k) {
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
/* Vamos considerar, neste algoritmo-exemplo, que podem aparecer 9 elementos: os números entre 0 e 8 */
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
