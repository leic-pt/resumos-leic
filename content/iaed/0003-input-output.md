---
title: Input/Output
description: Comparação e Tratamento de Dados. Leitura e Escrita de Caracteres
path: /iaed/input-output
type: content
---

# Input/Output

```toc

```

## Comparação e Tratamento de Dados

- Igualdade: `==`

- Desigualdade: `> < >= <= !=`

:::tip[]
Variáveis do tipo `long` reservam 32 bits (4 bytes) para guardar o inteiro pretendido. Num `printf` ou `scanf`, usamos `%ld` para nos referirmos a variávelis deste tipo.
:::

:::tip[]
Podemos atribuir o mesmo valores a várias variáveis: `int notas = aprovacoes = 0;` é sintaxe correta (apesar de poder ser mais claro se separarmos as atribuições).
:::

### i++, ++i, i+=1

Em C, podemos incrementar uma variável em $1$ unidade de várias maneiras. Num primeiro momento, iremos abordar `++i` e `i++`.

`i++` e `++i` agem de maneira idêntica quando usadas em contexto "isolado", diferindo contudo quando utilizadas em contextos de comparação ou similares.

- `++i` incrementa o seu valor [**antes**](color:green) de verificar se a condição em que se encontra.

- `i++` incrementa o seu valor [**depois**](color:red) de verificar a condição em que se encontra.

:::info[Nota]
Esta notação pode também ser usada para decrementar valores em 1 unidade:
`i--` e `--i`
:::

```c
int a = 0, b = 0, c = 0;
/* Fazem o mesmo */
a++;
++a;

// ---

int a = 0;
while (a++ <= 3) {
  ... /* O ciclo é executado 4 vezes */
}

// ---

int a = 0;
while (++a <= 3) {
  ... /* O ciclo é executado 3 vezes */
}
```

:::warning[]
É perfeitamente natural que a diferença (subtil) entre as notações vos possa confundir inicialmente: prometemos que é algo que com a prática vos vai parecer cada vez mais natural!
:::

### Linha de Comandos

Caso tenhamos um ficheiro de texto (pode ser ou não no formato `txt`) e o queiramos passar como _input_ de um dado programa, devemos usar o operador de redireção `<` no terminal. O comando abaixo corre `myprogram`, tendo como input o ficheiro `input.txt`.

`$ ./myprogram < input.txt`

De modo semelhante, podemos também usar o operador de redireção `>` para passar o _output_ da execução de um programa para um ficheiro à nossa escolha. No comando abaixo, corremos `myprogram` e enviamos o seu _output_ para o ficheiro `output.txt`.

`$ ./myprogram > output.txt`

Podemos, por fim, **combinar** estes dois operadores, escrevendo um comando que corre um programa com um dado ficheiro como _input_, redirecionando o respetivo _output_ para outro ficheiro:

`$ ./myprogram < input.txt > output.txt`

## Leitura e Escrita de Caracteres

### Leitura de Valores do Standard Input

Cada linha contém 0 ou mais caracteres e acaba com o caracter `\n`. Funções habituais de manipulação de text streams (`stdout`/`stdin`) são (mas não só):

- `getchar()`, que **lê o proximo caracter da _text stream_**.
- `putchar(n)`, que escreve o caracter cujo código ASCII é o inteiro `n` passado como argumento.

```c
#include <stdio.h>

int main()
{
    char a = 'T';
    printf("Ao caracter %c corresponde o código ASCII %d.\n", a , a);
    return 0;
}

/*
Resultado:
    Ao caracter T corresponde o código ASCII 84.
*/
```

- As variáveis do tipo `char` são inteiros de 1 Byte.
- Permitem realizar operações numéricas tal como fazemos com `int`s.

### Operadores Lógicos

Em vez dos operadores `and` e `or` que usámos em Python, em C (e num vasto conjunto de outras linguagens) usamos, respetivamente, `&&` e `||`. Aqui, os argumentos são avaliados da **esquerda para a direita** e quando o valor do argumento for suficiente para definir o valor da expressão, o programa para de avaliar as condições.

A Constante `EOF` significa End of File (que pode ser criado no terminal UNIX através do Ctrl-D).

:::tip
Se colocarem a atribuição de uma variável à função `getchar()`, devem colocar a atribuição entre parênteses.

Sintaxe: `while((c = getchar()) != EOF)`

:::

O seguinte programa conta o número de caracteres e palavras que lhe são dados como input.

```c
#include <stdio.h>

#define FORA 0
#define DENTRO 1

int main() {
    char c;
    int num_palavras = 0, num_chars = 0, estado = FORA;

    while ((c = getchar()) != EOF) {
        ++num_chars;
        if (c == ' ' || c == '\n' || c == '\t') {
            estado = FORA;
        } else if (estado == FORA) {
            estado = DENTRO;
            ++num_palavras;
        }
    }

    printf("%d %d\n", num_palavras, num_chars);
    return 0;
}
```

Por exemplo, quando executado com o input, o programa

```
Lorem ipsum dolor sit amet, consectetur.
```

teria output `6 41`.
