---
prev: false
description: Tipos e Operadores Elementares. Estruturas de Controlo
---

# Estruturas de Controlo

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




