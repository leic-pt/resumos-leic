---
title: Funções
description: Definição. Passagem de Parâmetros
path: /iaed/funcoes
type: content
---

# Funções

```toc

```

## Definição

### Definição e Protótipo

Uma função é definida pelo seu **tipo de retorno**, **nome**, **declaração de parâmetros**, **variáveis (locais) que define** e pelas **instruções que executa**.

```c
#include <stdio.h>

int exemplo(int a) {
    int b = 2;
    a = a + b;
    return a;
}
```

Os [**protótipos**](color:orange) permitem indicar que a função é conhecida pelo o compilador. **Uma função deve ser conhecida pelo compilador** antes de este "ler" qualquer função que a chame, direta ou indiretamente. Por exemplo, caso `main` seja a primeira função com _código escrito_ no nosso _source code_, devemos ter sempre, ou em _header files_ (`.h`) ou antes da _main_ definidos os protótipos de todas as funções auxiliares do programa.

```c
int exemplo(int a);
```

### Return

Retorna o valor da função que irá ser usada por outra.
Quando executada, o valor da `expressão` é automaticamente convertido para o tipo de retorno da função definida e esta termina o programa.

Uma funcão pode ainda não devolver nada se o seu tipo de retorno for `void`.

```c
#include <stdio.h>

int potencia(int base, int n); /* Protótipo */

int main() {
    int i;

    for (i = 0; i < 10; i++) {
        printf("%d %d %d\n", i, potencia(2, i), potencia(-3, i));
    }

    return 0;
}

int potencia(int base, int n) {
    int i, p = 1;

    for (i = 1; i <= n; i++) {
        p = p * base;
    }

    return p;
}
```

## Passagem de Parâmetros

### Passagem por Valor e Passagem por Referência

Todos os argumentos são copiados para **variáveis temporárias** quando a função é executada - a função não tem acesso aos argumentos dados, só às cópias, pelo que quaisquer alterações que se façam às cópias não afetam os argumentos originalmente dados.

:::danger[Atenção]
Existe uma [**exceção**](color:red) a esta regra: se o argumento for uma tabela, não é efectuada a cópia da tabela. Assim sendo, se a função alterar o conteúdo da tabela, estas alterações preservam-se.
:::

```c
int potencia(int base, int n) {
    int p;
    for (p = 1; n > 0; n--) {
        /* O valor de n dentro da função varia,
         * mas fora da função n mantém o seu valor original
         */
        p = p * base;
    }
    return p;
}

int main() {
    int n = 2; /* Valor de n antes de ser executada a função potencia */
    int base = 6;
    int res;
    res = potencia(base, n);

    printf("%d\n", n);
}

/* O output do programa será 2, pois fora da
 * função potencia o valor de n não mudou
 */
```

:::tip[Conversão do Tipo de 1 Variável]
Para fazer uma divisão entre inteiros, por vezes a parte inteira não chega.
Assim, convertemos o divisor para outro tipo de dados, `float`, para que a assim a divisão mostre casas decimais.

```c
media = soma / (float) num_alunos;
```

:::

### Copiar Tabelas

Uma tabela tem de ser copiada elemento a elemento.

```c
void copia(char destino[], char origem[]) {
    int i;
    for (i = 0; origem[i] != '\0'; i++) {
        destino[i] = origem[i];
    }
    destino[i] = '\0';
}
```
