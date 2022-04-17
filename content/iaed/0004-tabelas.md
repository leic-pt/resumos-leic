---
title: Tabelas
description: Tabelas para Guardar Conjuntos de Elementos. Strings (Cadeias de Caracteres)
path: /iaed/tabelas
type: content
---

# Tabelas

```toc

```

## Tabelas para Guardar Conjuntos de Elementos

### Tabelas Unidimensionais (Vectores)

$$
\begin{array}{|c|c|c|c|}
\hline
tab[ 0] & tab[ 1] & ... & tab[ DIM\ -1]\\
\hline
\end{array}
$$

Uma tabela permite guardar vários elementos **do mesmo tipo** - é aceite qualquer tipo de dados que seja reconhecido, mas não podemos misturar tipos de dados na mesma tabela. `int tab[DIM];`, por exemplo, cria uma tabela `tab` de tamanho `DIM` que armazena inteiros (**apenas** inteiros).

Esta propriedade advém, claro, do facto de C ser uma linguagem tipificada - em Python, por exemplo, a não ser que _tipifiquemos_ explicitamente uma lista, esta pode armazenar tipos de dados diferentes.

Para [**aceder**](color:orange) ao valor da tabela na posicao `i`, devemos usar a notação `tab[i]`. Já para [**atribuir**](color:green) um valor à posição `i` da tabela, devemos usar a notação `tab[i] = n`.

Tal como em Python, as tabelas são **indexadas a partir de 0**. Assim sendo, o primeiro indíce é o `0` e o último índice é o `DIM - 1`.

:::danger[AVISO]
Quando a tabela é criada, os valores que esta guarda não são inicializadas a 0, têm valores pseudo-aleatórios.
Para defini-las a 0, podemos fazer um loop atribuindo a cada posição da tabela o valor 0.
:::

```c
#include <stdio.h>

int main () {
    int i;
    int tab[10];

    // Inicializa uma tabela cujos
    // valores são o dobro dos índices
    // e.g. [0, 2, 4, 6, ...]
    for (i = 0; i < 10; i++) {
        tab[i] = 2 * i;
    }

    for (i = 0; i < 10; i++) {
        printf("%d\n", tab[i]);
    }

    return 0;
}
```

:::details[Output do programa acima]

```
0
2
4
6
8
10
12
14
16
18
20
```

:::

### Tabelas Bidimensionais (Matrizes)

Uma tabela permite guardar vários elementos do mesmo tipo. Podemos, claro, guardar tabelas dentro de tabelas! `char tab[DIM1][DIM2];` cria uma tabela `tab` de tamanho `DIM1` que armazena tabelas de tamanho `DIM2` que armazena caracteres.

Para aceder ao valor da posição `j` na tabela indexada por `i`, devemos escrever `tab[i][j]`. Por outro lado, para atribuir um valor à posição `j` na tabela `i`, devemos escrever `tab[i][j] = n`.

## Strings (Cadeias de Caracteres)

### Leitura de Valores do Standard Input

Podemos guardar caracteres em tabelas (Vetores).

$$
\begin{array}{|c|c|c|c|c|c|c|c|c}
\hline
'h' & 'e' & 'l' & 'l' & 'o' & '\backslash n' & '\backslash 0' & ... \\
\hline
\end{array}
$$

Em C, qualquer cadeia de caracteres que se preze acaba com `\0`: a cadeia de caracteres "hello\n", por exemplo, é composta pelos caracteres `h`, `e`, `l`, `l`, `o`, `\n` e `\0`.  
O `\0` indica **o fim da cadeia de caracteres**, e a função `printf` espera strings neste formato (podemos _printar_ cadeias de caracteres usando `%s`).

Os Vetores são copiados posição a posição!

```c
#include <stdio.h>

#define DIM 100

int main() {
    int c, i;
    char origem[DIM], destino[DIM];

    for (i = 0; i < DIM - 1 && (c = getchar()) != EOF && c != '\n'; i++) {
        origem[i] = c;
    }

    origem[i] = '\0';
    i = 0;

    while ((destino[i] = origem[i]) != '\0') {
        i++;
    }

    printf("Origem: %s\nDestino: %s\n", origem, destino);

    return 0;
}
```

### Leitura de Strings com o Scanf

```c
#include <stdio.h>

#define DIM 100

int main() {
    char palavra[DIM];
    scanf("%s", palavra);

    printf("%s", palavra);

    return 0;
}
```

O `scanf` permite ler uma string através da formatação `%s`. A leitura é feita até encontrar um "whitespace" (`" "`, `\n`, `\t`, etc) - não podemos, com um único `scanf("%s", ...)`, ler toda uma cadeia com várias palavras. Mais ainda, o `scanf` automaticamente insere `\0` no final da leitura da cadeia.

Será, contudo, de grande utilidade poder ler linhas inteiras (ou, pelo menos, mais que uma palavra de cada vez) - a função `fgets` entra aqui em cena, permitindo ler linhas inteiras!

### String.h

Ao escrever `#include <string.h>`, estamos a adicionar ao nosso programa uma biblioteca equipada com um conjunto bastante razoável de funções para manipulação de strings.
Exemplos úteis (que vão certamente ser-vos úteis nos vossos projetos) incluem:

- `strcmp` (compara strings)
- `strcpy` (copia strings)
- `strdup` (duplica uma string)
- `strlen` (devolve o tamanho da string dada como argumento)
- entre outros.

:::tip
Escrever `man <nome da função>` no terminal permite ver o que as funções fazem. Caso não tenham um sistema onde _manpages_ estejam à vossa disposição, [as _manpages_ online](https://man7.org/linux/man-pages/dir_section_3.html) podem ser-vos particularmente útil.
:::
