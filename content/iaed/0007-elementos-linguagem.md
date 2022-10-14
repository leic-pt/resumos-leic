---
title: Elementos da Linguagem
description: 'Elementos da Linguagem: Identificadores, Tipos de dados, Formatos de Leitura e Escrita. Conversão de tipos. Tipos Enumerados. Inicialização de Variáveis. Operadores e Precedências.'
path: /iaed/elementos-linguagem
type: content
---

# Elementos da Linguagem

```toc

```

## Tipos de Dados

Já falámos em secções anteriores sobre os tipos de dados usuais - por esta altura, todos os que estiverem a ler esta página devem estar perfeitamente confortáveis com tipos como `char`, `int`, `float`, `double` e amigos. É possível, contudo, que ainda não se tenham deparado com situações em que tenham precisado de usar versões **diferentes** de cada um destes tipos.

Consideremos, por exemplo, uma aplicação que contacta com somas avultadas de dinheiro. Ora, o limite de um inteiro "normal", `int`, pode ser curto para estas situações: inteiros podem encontrar-se numa _range_ de valores entre $[-2 147 483 648, 2 147 483 647]$, e há uma quantidade considerável de transações e contas que podem facilmente ultrapassar estes limites. Assim sendo, poderá fazer sentido usar `long int`, ou até `long long int`, para os representar. Inteiros tradicionais são armazenados em, no máximo, 4 bytes (32 bits). `long int` são armazenados em **pelo menos** 4 bytes, e `long long int` são armazenados em **pelo menos** 8 bytes, permitindo uma maior precisão neste tipo de operações. Existe também `short int`, claro, que podemos utilizar caso saibamos que um dado inteiro nunca ultrapassará valores "pequenos" (não deverão ultrapassar $32767$). Lógicas análogas (com precisões distintas, claro) podem ser utilizadas para tipos de dados como `float` e `double` - `float` tem precisão de sete dígitos, ocupando $32$ bits, enquanto que `double` possui precisão de quinze dígitos, ocupando $64$ bits no total.

Podemos ainda usar uma _keyword_ adicional, útil em algumas circunstâncias para aumentar ainda mais a precisão possível de um tipo. Caso saibamos que um dado inteiro nunca será negativo, podemos usar `unsigned int` para o representar, efetivamente transportando toda a sua capacidade de representar números negativos para representar números positivos _adicionais_.

:::danger[]

Resta realçar, por fim, que podemos obter o **tamanho (em bytes) de um tipo de dados na nossa máquina** utilizando `sizeof(<tipo>)`. [**Não devemos decorar o tamanho**](color:red): em alguns casos específicos, este [pode mudar de máquina para máquina](https://en.wikipedia.org/wiki/Sizeof#Purpose), pelo que devemos **sempre** utilizar `sizeof` quando nos queremos referir ao tamanho de um tipo.

:::

## Conversão de Tipos

É possível converter um tipo de dados para outro: temos o caso clássico de caracteres e inteiros, em que um dado inteiro corresponde a um dado caracter (baseado na Tabela ASCII), podendo realizar operações interessantes com eles. Podemos, ainda, ter dois tipos de dados diferentes (`int` e `float`, por exemplo), e executar uma operação sobre eles que retorna um tipo de dados diferente de um deles: a soma de um inteiro com um `float` não devolve um inteiro, por exemplo.

```c
// Função que recebe uma string de digitos todos juntos
// e devolve o inteiro correspondente
int atoi(char s[]) {
    int i, n;
    n = 0;

    for (i = 0; s[i] >= '0' && s[i] <= '9'; i++) {
        n = 10 * n + (s[i] - '0');
    }

    return n;
}
```

Existe uma [função `atoi` na _standard library_](https://linux.die.net/man/3/atoi) que faz o mesmo.

:::info[Conversão Forçada de Tipos]

Na maioria das linguagens tipificadas, é possível **forçar** a conversão de um tipo de dados para outro: esta operação chama-se _casting_. _Casts_ clássicos incluem, por exemplo forçar a **truncagem** de um `float` para um `int` (como por exemplo `int n = (int) 2.34`).

Ao chamar funções, contudo, o _casting_ é automático: consideremos, por exemplo, a função `double sqrt(double n)`, que calcula a raiz quadrada do respetivo argumento. Passar `2` e `2.0` como argumento surte o mesmo efeito, já que o C trata de fazer por nós o _cast_ de `2` para `double`.

:::

## Constantes - Tipos Enumerados

Enumerados, `enum`, consistem numa sequência de constantes - por exemplo, `enum resposta { NAO, SIM }` corresponde a definir que o tipo `resposta` tem duas constantes associadas: `NAO` e `SIM`. Ora, estas constantes têm um valor inteiro associado, intimamente ligado à ordem pela qual são definidas no `enum`: a primeira constante vale `0`, a segunda vale `1`, e assim sucessivamente. No exemplo anterior, teríamos `NAO` e `SIM` a valer 0 e 1, respetivamente.

Podemos, contudo, especificar valores para as constantes na definição: `enum meses { JAN=1, FEV=2, MAR=3, ABR=4, MAI=5, JUN=6, JUL=7, AGO=8, SET=9, OUT=10, NOV=11, DEZ=12 };`, por exemplo, pode ser uma abstração útil, já que um mês é vulgarmente conhecido como um inteiro entre 1 e 12.

Abaixo encontra-se um exemplo que poderá, de forma mais direta, mostrar o uso de enumerados:

`embed:assets/0007-mes.c`

## Declarações de Variáveis

A esta altura do campeonato, todos devemos saber os básicos da definição de variáveis: definem-se antes da sua utilização (ou, no limite, assim que se utilizam), especificando o respetivo tipo de dados que representam.

```c
/* Sequência de declarações */
int superior, inferior, passo;
char c, linha[1000];

/* Alternativa */
int superior;
int inferior;
int passo;
char c;
char linha[1000];
```

A declaração de variáveis, contudo, pode ter mais que um significado inerente, consoante o local no código onde estas são definidas e se se usa uma keyword especial, `static`, na definição das mesmas.

**Variáveis globais** são definidas fora da _scope_ de qualquer função, passando a poder ser utilizadas em qualquer ponto do código. Devemos, contudo, ter o cuidado de não nomear variáveis com o mesmo nome noutros pontos do código.

Podemos ainda ter variáveis `static`: a sua inicialização só ocorre uma vez ao longo do programa - se o fluxo do programa voltar à declaração da mesma, esta pegará no valor com que acabou o último fluxo de execução onde se encontrava. O exemplo abaixo (do contador) poderá ilustrar com mais clareza o propósito destas variáveis:

```c
int global; /* global = 0 */

int contador() {
    static int i = 1; /* Só inicializa i a 1 */
                      /* Depois de inicializada esta instrução é ignorada */
    return i++;
}

int main() {
    int a = global + contador();
    int b = contador();
    int c = contador();

    printf("a = %d, b = %d, c = %d\n", a, b, c);
    /* a = 1, b = 2, c = 3 */
    return 0;
}
```

:::warning[Omissão de Inicialização]

Em C, só as variáveis globais e estáticas são inicializadas automaticamente a 0 (caso o utilizador não fornecer nenhuma inicialização explícita).

No caso de variáveis locais, na ausência de inicialização estas ficarão com valor dito _indefinido_ até uma posterior atribuição.

:::

Podemos ainda definir variáveis constantes, através da _keyword_ `const`: pode anteceder qualquer declaração, e significa que o valor associado àquele nome nunca vai mudar (nem pode). Sempre que tentarmos modificar o valor de uma constante, [**o compilador vai gritar connosco**](color:red) - não queremos que o compilador grite connosco.

```c
const double e = 2.71828182845905;
const char msg[] = "bem vindo ao C";
int strlen(const char[]);
```

:::info[Inicialização de Vectores]

Podemos inicializar vectores de várias maneiras diferentes:

- `int numbers[] = {1, 44, 12, 567}`, que inicializa um vector de 4 inteiros com os valores 1, 44, 12 e 567;
- `char codes[][3] ={"AA", "AB", "BA","BB"}`, que inicializa um vector de vectores de três caracteres (note-se que o `\0` está aqui _contado_);
- `int numbers[10] = {1, 44, 12, 567}`, que inicializa um vector de 10 inteiros, onde os 4 primeiros valores são 1, 44, 12 e 567, e o resto fica inicializado a zero. Note-se, aqui, que a diferença é termos **especificado o tamanho do vector**;
- Entre outras, claro: há toda uma panóplia de maneiras de inicializar vectores!

:::

## Operações

Bem, por esta altura já devemos conhecer a grande maioria dos operadores em C:

- Operadores Aritméticos:
  `+ - * / %`
- Operadores Relacionais:
  `> >= < <= == !=`
- Operadores Lógicos:
  `! && ||`

As suas precedências, contudo, podem não ser triviais. Em C, temos que a precedência de operadores é tal que:

$$
\text{!} >>> \text{Aritméticos} >>> \text{Relacionais} >>> \text{Lógicos}
$$

Em relação aos **valores de verdade** em C, temos que _true_ corresponde ao inteiro $1$, e que _false_ corresponde ao inteiro $0$. Utilizar a negação funciona como esperado: `!0 = 1`, e vice-versa.

## Operadores Bit a Bit

Em C, é possível efetuar operações sobre a representação binária de um número, manipulando-os bit a bit:

- `&` `AND` bit a bit
- `|` `OR` bit a bit
- `ˆ` `XOR` (OR exclusivo) bit a bit
- `<<` shift left
- `>>` shift right

Com o MEPP, IAC passou para depois de IAED, pelo que é possível que ainda não tenham contactado a fundo com notação binária. Podem, contudo, encontrar um [apanhado geral do funcionamento destes operadores](https://www.programiz.com/c-programming/bitwise-operators) noutros sites.

```c
int x = 1, y = 2;
int z = x & y;
int w = x && y;

printf("z = %d w = %d \n", z, w);

/* z = 0 , w = 1 */
```

### Expressões Condicionais

Expressões condicionais são expressões que recorrem a um **operador ternário**, e que dependem do valor de verdade de uma outra expressão. A sintaxe deste tipo de expressões segue o padrão ` <expr1> ? <expr2> : <expr3>`, onde:

- Se `<expr1>` for verdadeiro, o valor da expressão é `<expr2>`;
- Se `<expr1>` for falso, ovalor da expressão é `<expr3>`.

O operador ternário permite _one-liners_ interessantes, mas pode tornar o código menos legível: façam escolhas pensadas, pensando sempre primeiro na ótica de quem vai ler o vosso código (tornem a vida dessa pessoa mais fácil).

```c
int maior(int a, int b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

int maior(int a, int b) {
    return (a > b ? a : b);
}
```
