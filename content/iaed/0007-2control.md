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

### if

Mais uma vez, por esta altura já devemos estar mais que habituados a expressões `if`, `else if` e `else`: expressões condicionais que permitem exprimir decisões consoante um dado conjunto de condições.

`embed:assets/0007-cond1.c`

### Switch

Passamos então a uma operação que não foi abordada em FP: `switch` (_switch-case_) corresponde a um problema de decisão com múltiplas opções. Testa-se uma expressão, sendo que se a mesma coincidir com um dado _caso_, a instrução/conjunto de instruções a ele associadas são executadas. Podemos ainda definir (não obrigatoriamente) um conjunto de instruções para o caso especial em que a expressão não coincide com nenhum dos outros casos: `default`. Devemos [**sempre**](color:red) colocar um `break` no final de cada conjunto de instruções, visto que caso contrário continuaremos a verificar todos os outros casos.

`embed:assets/0007-switch.c`

## Ciclos Genéricos

### While

Enquanto uma dada expressão se verificar, uma instrução/conjunto de instruções são executadas.

`embed:assets/0007-while.c`

### For

`for` loops têm a particularidade de ter um **cabeçalho**, ao contrário de `while` loops. Esse mesmo cabeçalho possui:

- uma expressão de inicialização, como por exemplo `int i = 0`: tipicamente a variável que vai ser iterada durante o loop e que normalmente faz parte da condição de ciclo do mesmo;
- a condição de ciclo do loop: enquanto esta se verificar, o loop continua;
- uma expressão de incremento/alteração, que altera um dado conjunto de variáveis.

Um exemplo de cabeçalho de um `for` loop poderia ser `for (int i = 0; i < 10; i++)`: o loop vai ser executado enquanto a variável `i`, inicializada a 0 e incrementada em 1 unidade por iteração, tiver valor menor que 10.

`embed:assets/0007-for.c`

### Do-while

Bastante semelhante ao `while` loop, com um _twist_: o loop é sempre executado **pelo menos uma vez**, já que a condição só é testada no fim do mesmo.

`embed:assets/0007-do.c`

### Break e Continue

A instrução `break`, como sabemos, permite terminar a execução de um `for`, `while`, `do-while` ou `switch`. A instrução `continue`, por sua vez, desencadeia a execução da próxima iteração de um `for`, `while` ou `do-while`, ignorando todo o resto das instruções do loop que poderiam ser executadas a seguir.

Exemplo com algumas das funções dadas:

`embed:assets/0007-ex.c`
