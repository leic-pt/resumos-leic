---
prev: false
description: Comparação e Tratamento de Dados. Leitura e Escrita de Caractéres
---

# Input/Output

[[toc]]

## Comparação e Tratamento de Dados

- Igualdade: `==`

- Desigualdade: `> < >= <= !=`

::: tip
A Variável do tipo `long`, guarda 32 bits (4 bytes) para guardar o inteiro.
No printf usamos `%ld` para referirmos a esta variável.
:::

::: tip
Podemos atribuir o mesmo valores a várias variáveis:
`notas = aprovacoes = 0;`
:::

### i++, ++i, i+=1

Para acresentarmos 1 unidade à variável em C temos várias maneiras de o fazer.

`i++` e `++i` fora das condições for e while ambas agem de maneira idêntica.

No entanto quando se encontram dentro dessas condições elas diferem.

- `++i` incrementa o seu valor antes de verificar se a condição em que se encontra.

- `i++` incrementa o seu valor depois de verificar se a condição em que se encontra.

<<< @/src/iaed/assets/0003-a++.c

### Linha de Comandos

Para fornecer um input guardado num ficheiro de texto, escrevemos no stdin:

`$ ./myprogram < input.txt`

Para guardar o output num ficheiro de texto, escrevemos no stdin:

`$ ./myprogram > output.txt`

Assim se quisermos dar um input num ficheiro de texto e guardá-lo noutro podemos fazê-lo:

`$ ./myprogram < input.txt > output.txt`

## Leitura e Escrita de Caractéres

### Leitura de Valores do Standard Input

Cada linha contém 0 ou mais caracteres e acaba com o
caractér `\n`.

Funções de manipulação de text streams (stdout/stdin):

- `getchar()` lê o proximo caracter da text stream.
- `putchar(n)` escreve o caracter `c` cujo código ASCII é o
  número inteiro (n) passado como argumento.

<<< @/src/iaed/assets/0003-ascii.c

- As variáveis do tipo `char` são inteiros de 1 Byte.
- Permitem realizar operações numéricas tal como
  fazemos com os int's.

### Operadores Lógicos

Operador da Disjunção : `||`

Operador da Conjunção : `&&`

Os argumentos são avaliados da esquerda para a direita e quando o valor do argumento for suficiente para definir o valor da expressão, o programa para de avaliar as condições.

A Constante `EOF` significa End of File (que pode ser criado no terminal UNIX através do Ctrl-D).

::: tip
Se colocarem a atribuição da variável à função `getchar()`, devem colocar a atribuição entre parênteses.

Sintaxe: `while((c = getchar()) != EOF)`

:::

<<< @/src/iaed/assets/0003-conta-palavras.c
