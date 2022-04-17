---
title: Controlo da Execução
description: Instruções e Blocos. Execução Condicional (if, switch). Ciclos Genéricos (while, for, do-while, continue, break).
path: /iaed/controlo-execucao
type: content
---

# Controlo da Execução

```toc

```

## Execução Condicional

### If

Mais uma vez, por esta altura já devemos estar mais que habituados a expressões `if`, `else if` e `else`: expressões condicionais que permitem exprimir decisões consoante um dado conjunto de condições.

```c
if (/* condição 1 */) {
    /* instrução 1 */
} else if (/* condição 2 */) {
    /* instrução 2 */
} else {
    /* instrução 3 */
}
```

### Switch

Passamos então a uma operação que não foi abordada em FP: `switch` (_switch-case_) corresponde a um problema de decisão com múltiplas opções. Testa-se uma expressão, sendo que se a mesma coincidir com um dado _caso_, a instrução/conjunto de instruções a ele associadas são executadas. Podemos ainda definir (não obrigatoriamente) um conjunto de instruções para o caso especial em que a expressão não coincide com nenhum dos outros casos: `default`. Devemos [**sempre**](color:red) colocar um `break` no final de cada conjunto de instruções, visto que caso contrário continuaremos a verificar todos os outros casos.

```c
switch (c = getchar()) {
    case 'a':
        /* instruções 1 */
        break; /* parar a execução dentro do switch aqui */
    case 'b':
    case 'B':
        /* instruções 2 */
    default:
        /* instruções 3 */
}
```

## Ciclos Genéricos

### While

Enquanto uma dada expressão se verificar, uma instrução/conjunto de instruções são executadas.

```c
while (/* expressão */) {
    /* instruções */
}
```

### For

`for` loops têm a particularidade de ter um **cabeçalho**, ao contrário de `while` loops. Esse mesmo cabeçalho possui:

- uma expressão de inicialização, como por exemplo `int i = 0`: tipicamente a variável que vai ser iterada durante o loop e que normalmente faz parte da condição de ciclo do mesmo;
- a condição de ciclo do loop: enquanto esta se verificar, o loop continua;
- uma expressão de incremento/alteração, que altera um dado conjunto de variáveis.

Um exemplo de cabeçalho de um `for` loop poderia ser `for (int i = 0; i < 10; i++)`: o loop vai ser executado enquanto a variável `i`, inicializada a 0 e incrementada em 1 unidade por iteração, tiver valor menor que 10.

```c
for (/* expr inicialização */; /* condição */; /* expr alteração */) {
  /* instruções */
}
```

### Do-while

Bastante semelhante ao `while` loop, com um _twist_: o loop é sempre executado **pelo menos uma vez**, já que a condição só é testada no fim do mesmo.

```c
do {
    /* instruções */
} while (/* condição */);
```

### Break e Continue

A instrução `break`, como sabemos, permite terminar a execução de um `for`, `while`, `do-while` ou `switch`. A instrução `continue`, por sua vez, desencadeia a execução da próxima iteração de um `for`, `while` ou `do-while`, ignorando todo o resto das instruções do loop que poderiam ser executadas a seguir.

---

Exemplo com algumas das funções dadas:

```c
int main() {
    char command;
    while (1) {
        command = getchar(); /* Lê o comando */
        switch (command) {
            case 'a':
                /* Chama a função responsável pela execução do comando a */
                break;
            case 'b':
                /* Chama a função responsável pela execução do comando b */
                break;
            case 'x':
                return 0; /* Termina o programa com sucesso */
            default:
                printf("ERRO: Comando desconhecido\n");
        }
        getchar(); /* Lê o '\n' introduzido pelo utilizador */
    }
    return -1; /* Se chegou aqui algo correu mal */
}
```
