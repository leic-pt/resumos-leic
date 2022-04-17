---
title: Estruturas de Controlo
description: Tipos e Operadores Elementares. Estruturas de Controlo
path: /iaed/estruturas-controlo
type: content
---

# Estruturas de Controlo

```toc

```

## Conversão de Temperaturas

```c
#include <stdio.h>

/* Conversão Fahrenheit-Celsius */

#define INFERIOR 0
#define SUPERIOR 300
#define PASSO 20

int main ()
{
    float fahr, celsius;

    fahr = INFERIOR;
    while (fahr <= SUPERIOR)
    {
        celsius = (5.0/9.0) * (fahr-32);
        printf("%3.0f\t%6.1f\n", fahr, celsius);
        fahr = fahr + PASSO;
    }
    return 0;
}
```

:::info[]
Podes (e deves!) comentar o código utilizando `/*` e `*/`.

A UC de IAED costuma requerer a compilação do código com a flag `-ansi` que, entre outras coisas, proíbe comentários _single-line_ com `//`. Esta é, contudo, outra maneira de comentar o código, podendo ser usada caso a flag em questão não esteja presente.
:::

Como visto anteriormente, todas as variáveis devem ser declaradas antes de serem utilizadas.

A sintaxe da atribuição de valor a uma variável funciona como em Python (`<variável> = <expressão>`).

Podes ainda definir constantes utilizando `#define`. No código acima, definimos como constantes `INFERIOR`, `SUPERIOR` e `PASSO`. Existem várias razões para escolher definir algo como uma variável _vs_ defini-lo como uma constante:

- Caso tenhamos a certeza que queremos que aquele nome esteja associado àquele valor durante todo o nosso código, faz sentido defini-lo como uma constante.
- Para propósitos de tradução, faz sentido ter _strings de ajuda/texto_ associadas a constantes: algo como `#define HELP_MESSAGE "Clique aqui para obter ajuda."` é o exemplo típico para estes casos (costumando, inclusive, ser algo relevante nos projetos de IAED, e que consta das boas práticas da cadeira).

Podemos ainda fazer coisas giras com `#define`:

```c
#define ever (;;)

void not_stopping_baby() {
  for ever {
    printf("Ups\n");
  }
}

// ou ainda

void oh_no() {
  for ever {
    oh_no();
  }
}
```

Resta realçar que as constantes são, por convenção, definidas com o nome todo em **caracteres maiúsculos**.

### Ciclo while

Sintaxe: `while (<expressão>) <instrução>`

:::warning
Um erro comum na escrita de ciclos `while` consiste na colocação (errada) de um `;` após a expressão que define o ciclo.
Muitas vezes isto resultará num loop infinito. Um bom truque para o evitar é abrir chavetas **imediatamente a seguir à expressão**, independentemente do `while` conter apenas uma instrução.

```c
while (i >= 0);
    i = i - 1;

// vs.

while (i >= 0) {
    i = i - 1;
}
```

:::

### Ciclo for

Os ciclos `for` também já são conhecidos do Python. São, no entanto, escritos de maneira diferente.

Sintaxe: `for (<inicialização de variáveis>; <teste>; <incremento>) <instrução>`

Aplicado ao exemplo anterior,

```c
while (fahr <= superior) {
    celsius = (5.0 / 9.0) * (fahr - 32);
    printf("%3.0f\t%6.1f\n", fahr, celsius);
    fahr = fahr + passo;
}

// vs.

for (fahr = INFERIOR; fahr <= SUPERIOR; fahr = fahr + PASSO) {
    celsius = (5.0 / 9.0) * (fahr - 32);
    printf("%3.0f\t%6.1f\n", fahr, celsius);
}
```

## Input/Output

### Leitura de valores do standard input

É possível criar um programa que interage com o utilizador utilizando certas instruções.

Com o `scanf()` é possível ler o input introduzido no terminal, como podes ver neste exemplo.

```c
#include <stdio.h>
/*
 * Objectivo: vamos pedir um inteiro ao utilizador e devolver o
 * quadrado desse numero
 */
int main () {
    int x;
    printf("Introduza um valor inteiro:\n");
    scanf("%d",&x);
    printf("O quadrado de %d é %d\n", x, x * x);
    return 0;
}
```

:::tip[]
Utiliza-se o `%d` para ler um inteiro. Se pretendêssemos ler dois inteiros seguidos faríamos
`scanf("%d%d", &x, &y)`, por exemplo. Para ler um float utiliza-se `%f` (podem encontrar uma lista mais completa [aqui](https://nick-lab.gs.washington.edu/cworkshop/formaters.html)).

Num `scanf`, **é necessário colocar o `&` antes do nome da variável** (a não ser que estejamos na presença de uma sequência de caracteres, `%s`). Aprenderão mais à frente na cadeira, na secção [Ponteiros e Tabelas](/iaed/ponteiros), o porquê da sintaxe ser esta.
:::

Temos aqui outro exemplo que inclui um ciclo `while`. Este programa reproduz no terminal
o input recebido (assumindo que apenas recebe inteiros) até ser introduzido um número
negativo. Na aba ao lado mostra-se como adicionar um contador ao programa, que conta
o número de inteiros introduzidos, imprimindo-o no final.

::::tab-group
:::tab[SEM CONTADOR]

```c
#include <stdio.h>

/* Copia inteiros do input para output */

int main () {
    int v;

    scanf("%d", &v);
    while (v >= 0) {
        printf("%d\n", v);
        scanf("%d", &v);
    }
    return 0;
}
```

:::

:::tab[C/ CONTADOR]

```c
#include <stdio.h>

/* Copia inteiros do input para output */

int main () {
    int v;
    long contador;

    contador = 0;
    scanf("%d", &v);
    while (v >= 0) {
        printf("%d\n", v);
        contador++;
        scanf("%d", &v);
    }
    printf("%ld\n", contador);
    return 0;
}
```

:::
::::

Como se pode ver no exemplo do contador, a forma de incrementar o valor de uma variável
é algo que não existe em Python. `contador++` em C equivale a `contador += 1` em Python.
Nota-se que este último também existe em C, no entanto.
