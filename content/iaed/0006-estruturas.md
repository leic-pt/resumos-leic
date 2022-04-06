---
title: Estruturas
description: Definição. Funções. Typedef
path: /iaed/estruturas
type: content
---

# Estruturas

```toc

```

## Definição

### Porquê uma estrutura?

Imaginemos que somos um professor, estando atualmente no processo de inserir a nota de um aluno a uma dada UC no Fénix. Ora, para tal, precisamos:

- do seu número de aluno;
- da sigla da disciplina (máx: 6 caracteres);
- da nota obtida.

Exemplo: `42069 IAED 20`

Ora, representar algo deste género em C é possível de várias maneiras. Algumas delas são:

- Recorrendo a um vector. Problema: Todos os dados precisam de ser do mesmo tipo!
- Poderíamos, então, recorrer a 3 vectores do mesmo tamanho. Ora, mas isso acabava por ser relativamente desagradável, adicionando uma _camada de complexidade_ adicional indesejável (para além de ter de haver $n$ vectores se quiséssemos $n$ propriedades - não ideal).

A solução "correta" em C passa por recorrer a [**estruturas**](color:green), `struct`s, para representar dados agregados de tipos diferentes.

### Exemplos

Uma estrutura permite **definir estruturas de dados sofisticadas**, as quais possibilitam a agregação de diferentes tipos de declarações.

`embed:assets/0006-def.c`

### Declaração de Variáveis

A definição da estrutura introduz um novo tipo de dados: podemos agora passar a usar a estrutura como qualquer outro tipo de dados nativo a C, como um `int` ou um `char`.

`embed:assets/0006-decl.c`

### Manipulação de Variáveis

A manipulação de propriedades de estruturas tem uma sintaxe bastante intuitiva: _acedemos_ à propriedade via `<variavel>.<membro>`, e é também assim que a podemos alterar.

`embed:assets/0006-man.c`

:::info[Nota]
As estruturas permitem incluir outras estruturas.

`embed:assets/0006-struception.c`
:::

:::danger
Estruturas não podem ser comparadas usando o usual operador de comparação de igualdade.

Assim sendo, se queremos determinar se duas estruturas são iguais, é necessário comparar [**cada campo da estrutura**](color:red).
:::

## Funções

A funções podem, claro, receber e retornar estruturas:

`embed:assets/0006-f.c`

A função em questão retorna uma cópia da estrutura `res`. A passagem de argumentos é feita por valor, não por referência: chamar `adicionaPonto(pa, pb)` não altera os valores de `pa` nem de `pb`.

### Vetores de Estruturas

Permite, claro, criar tabelas que guardam estruturas:

`embed:assets/0006-vectored.c`

Podemos inicializar tabelas de estruturas com valores iniciais pré-definidos:

`embed:assets/0006-hugetip.c`

## Typedef

`typedef` permite associar um nome a um tipo de dados já existente. Para tal, basta adicionar a _keyword_ `typedef` antes de `struct`, e escrever o nome a que queremos associar o novo tipo de dados após a definição da estrutura. Funcionam como uma espécie de alcunhas: podemos sempre usar `struct <struct-name>` para referenciar a estrutura, mas o `typedef` acaba por poder poupar _key-strokes_.

`embed:assets/0006-typedef.c`

Definir variáveis continua a ser bastante simples: basta escrever`<alcunha> <nome da variavel>` ou `struct <nome> <nome da variavel>`.
