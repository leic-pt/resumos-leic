---
description: 'Elementos da Linguagem: Identificadores, Tipos de dados, Formatos de Leitura e Escrita. Conversão de tipos. Tipos Enumerados. Inicialização de Variáveis. Operadores e Precedências.'
path: /iaed/elementos-linguagem
---

# Elementos da Liguagem

```toc

```

## Elementos

### Identificadores

- Sequências de letras, underscore, ou dígitos
- Primeiro caracter é letra ou underscore
- Identificadores são case-sensitive
  - `int i, I; /* Duas variáveis diferentes */`
- Frequentemente nomes nas bibliotecas começam com
  underscore para minimizar possíveis conflitos
- Por convenção usa-se o nome de `variaveis` em
  minúsculas e `CONSTANTES` em maiúsculas
- Nomes reservados: `if`, `else`, `int`, `float`, etc.

## Tipos de Dados

- `char`, `int`, `float`, `double`
  - `short int` , `int`, `long int`
- signed/unsigned `char`, `short`, `int`, `long`
- `unsigned` obedece aritmética módulo 2^n (n = número bits)
- `signed char` entre -128 e 127
- Tamanho `char` = 1 byte (= 8 bits)
- Tamanho-típico `int` = 4 bytes (=32 bits)
- Tamanho`short`<= Tamanho`int` <= Tamanho`long`

- Tamanho`float`<= Tamanho`double` <=
  Tamanho`long double`
- Obter o tamanho de um tipo: `sizeof()`

### Formatos de Leitura & Escrita

- `char` : `%c`
- ` int` : `%d ` ou `%i` (base decimal)
- `int` : `%x` (base hexadecimal)
- `short int` : `%hd`
- `long int` : `%ld`
- `unsigned short int` : `%hu`
- `unsigned int` : `%u`
- `unsigned long int` : `%lu`
- `float` e `double` : `%f`

## Conversão de Tipos

- Argumentos de operadores de diferentes tipos
  provocam transformação de tipos dos argumentos
- Algumas conversões automáticas: de representações
  "estreitas" para representações mais "largas".
  - Exemplo:
    conversão de `int` para `float` em `f + i`
- `char` é um inteiro pequeno e podem-se fazer operações
  aritméticas com caracteres

<<< @/src/iaed/assets/0007-conv.c

### Conversão Forçada de Tipos

- Conversão forçada de tipos: utilização de operador `cast`
- Valor `expressão` convertido para tipo `tipo` como se
  tratasse de atribuição
- Exemplo: `int i = (int) 2.34;`
- Conversão de `float` para `int` : `truncagem`
- Conversão de `double` para `float`: `truncagem` ou
  `arredondamento`

- Nas chamadas a funções, não é necessário recorrer a uma
  conversão forçada de tipos\
  ex:`double sqrt (double x);`\
  \
  `root2 = sqrt(2);` é equivalente a
  `root2 = sqrt(2.0);`

## Constantes - Tipos Enumerados

- Tipo enumerado definido por sequência de constantes\
  `enum resposta { NAO, SIM };`
- Tipo `resposta` tem duas constantes: `NAO` e `SIM`
- Constantes de tipo enumerado têm valor inteiro (`int`): a
  primeira constante vale `0`, a segunda vale `1`, etc
- Tipo `resposta`: `NAO` vale 0 e `SIM` vale 1
- Pode-se especificar valores para as constantes ou não
  `enum meses { JAN=1, FEV=2, MAR, ABR, MAI, JUN, JUL, AGO, SET, OUT, NOV, DEZ };`
- Permite criar uma abstracção dos valores quando se
  programa usando apenas os nomes do tipo enumerado

<<< @/src/iaed/assets/0007-mes.c

## Declarações de Variáveis

Precedem utilização e especificam tipo e lista das variáveis

<<< @/src/iaed/assets/0007-decvar.c

- Inicialização de variáveis externas (`globais`) e estáticas: \
  `<tipo> <variável> = <expressão constante>;`
- Variáveis globais são declaradas fora das funções
- Variáveis estáticas podem ser locais a uma função, mas
  mantêm o valor entre chamadas à função

  ::: warning Caso de omissão: valor 0

  Em C só as variáveis globais e estáticas são inicializadas
  automaticamente a 0, se o utilizador não fornecer nenhuma
  inicialização explícita

  :::

  - Exemplo: `int pi = 3.14159;`

  - Inicialização de variáveis automáticas `locais`:
    `<tipo> <variável> = <expressão>;` - Variáveis automáticas são reinicializadas sempre que a
    função é invocada

::: warning Caso de omissão em variáveis locais:

valor indefinido

:::

`Exemplo: int i, j = f(5);`

<<< @/src/iaed/assets/0007-global.c

- `const` pode anteceder qualquer declaração
- Significa que valor não vai mudar
- Se tentar modificar o valor, o compilador detecta como
  sendo um erro
- Compilador pode tirar partido e fazer optimizações

<<< @/src/iaed/assets/0007-cons.c

## Inicialização de Variáveis

- Posso fazer a mesma coisa com vectores inteiros\
  `int numbers[] = {1, 44, 12, 567};`
- até com vectores de vectores (strings, neste caso)\
  `char codes[][3] ={"AA", "AB", "BA","BB"};`\
  [3] = 2 char's + '\0'
- Para imprimir o "AB" basta escrever\
  `printf("%s",codes[1]);`

`int numbers[10] = {1, 44, 12, 567};`
Os restantes são inicializados a 0.

## Operações

### Operadores e Precedências

- Operadores Aritméticos :
  `+ - * / %`
- Operadores Relacionais :
  `> >= < <= == !=`
- Operadores Lógicos :
  `! && | |`

Precedências:\
`!` >>> Aritméticos >>> Relacionais >>> Lógicos

### Valores de Verdade

- Verdadeiro = 1
- Falso = 0 \
  !0 = 1 \
  !x = 0 \
  Uma estrutura permite definir estruturas de dados sofisticadas, as quais possibilitam a agregação de diferentes tipos de declarações.

## Operadores Bit a Bit

Em C é possível efectuar operações sobre a
representação binária

Manipular bits em inteiros (char, short, int, long):

- `&` `AND` bit a bit
- `|` `OR` bit a bit
- `ˆ` `XOR` (OR exclusivo) bit a bit
- `<<` shift left
- `>>` shift right

Ambos os shifts adicionam 0.

<<< @/src/iaed/assets/0007-bit.c

### Expressões Condicionais

- Expressão condicional: expressão cujo valor depende de
  uma outra expressão\
  ` <expr1> ? <expr2> : <expr3>`
- Se `<expr1>` for verdadeiro, valor da expressão é `<expr2>`
- Se `<expr1>` for falso, valor da expressão é `<expr3>`

<<< @/src/iaed/assets/0007-cond.c

Slides:

- [Aula 7](https://drive.google.com/file/d/1Qflt6mId0-75znhCgwscN2v7aLKrStTC/view?usp=sharing)
