---
prev: false
description: Tipos e Operadores Elementares. Estruturas de Controlo
---

# Estruturas de Controlo

[[toc]]

## Conversão de Temperaturas

<<< @/src/iaed/assets/0002-conversao-temperaturas.c

::: tip
Podes (e deves!) comentar o código utilizando `/*` e `*/`.
:::

Como visto anteriormente, todas as variáveis devem ser declaradas antes de serem utilizadas.

A sintaxe da atribuição de valor a uma variável funciona como em Python (`<variável> = <expressão>`).

Podes definir constantes utilizando `#define`.

### Ciclo while

Sintaxe: `while (<expressão>) <instrução>`

Apesar de a identação poder ser ignorada, ao contrário de Python, é importante continuar a usá-la de modo a facilitar
a leitura do programa.

::: warning
Um erro comum na escrita de ciclos while consiste na colocação despropositada de um `;` após a expressão que define o ciclo.
Muitas vezes isto resultará num loop infinito. Um bom truque para evitar isto é abrir chavetas imediatamente
a seguir à expressão, independentemente do while conter apenas uma instrução.

<<< @/src/iaed/assets/0002-erro-while.c
:::

### Ciclo for

Os ciclos for também já são conhecidos do python. No entanto são escritos de maneira diferente.

Sintaxe: `for (<inicialização de variáveis>; <teste>; <incremento>) <instrução>`

Aplicado ao exemplo anterior,

<<< @/src/iaed/assets/0002-ciclo-for.c

## Input/Output

### Leitura de valores do standard input

É possível criar um programa que interage com o utilizador utilizando certas instruções.

Com o `scanf()` é possível ler o input introduzido no terminal, como podes ver neste exemplo.

<<< @/src/iaed/assets/0002-quadrado-input.c

::: tip
Utiliza-se o `%d` para ler um inteiro. Se pretendêssemos ler dois inteiros seguidos faríamos
`scanf("%d%d", &x, &y)`, por exemplo. Para ler um float utiliza-se `%f`.

**É necessário colocar o `&` antes do nome da variável.**
:::

Temos aqui outro exemplo que inclui um ciclo while. Este programa reproduz no terminal
o input recebido (assumindo que apenas recebe inteiros) até ser introduzido um número
negativo. Na aba ao lado mostra-se como adicionar um contador ao programa, que conta
o número de inteiros introduzidos, imprimindo-o no final.

<code-group>
<code-block title="SEM CONTADOR">
<<< @/src/iaed/assets/0002-copia-inteiros-positivos.c
</code-block>

<code-block title="C/ CONTADOR">
<<< @/src/iaed/assets/0002-copia-contador.c
</code-block>
</code-group>

Como se pode ver no exemplo do contador, a forma de incrementar o valor de uma variável
é algo que não existe em Python. `contador++` em C equivale a `contador += 1` em Python.
Nota-se que este último também existe em C, no entanto.
