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

`embed:assets/0005-def.c`

Os [**protótipos**](color:orange) permitem indicar que a função é conhecida pelo o compilador. **Uma função deve ser conhecida pelo compilador** antes de este "ler" qualquer função que a chame, direta ou indiretamente. Por exemplo, caso `main` seja a primeira função com _código escrito_ no nosso _source code_, devemos ter sempre, ou em _header files_ (`.h`) ou antes da _main_ definidos os protótipos de todas as funções auxiliares do programa.

`embed:assets/0005-prot.c`

### Return

Retorna o valor da função que irá ser usada por outra.
Quando executada, o valor da `expressão` é automaticamente convertido para o tipo de retorno da função definida e esta termina o programa.

Uma funcão pode ainda não devolver nada se o seu tipo de retorno for `void`.

`embed:assets/0005-pot.c`

## Passagem de Parâmetros

### Passagem por Valor e Passagem por Referência

Todos os argumentos são copiados para **variáveis temporárias** quando a função é executada - a função não tem acesso aos argumentos dados, só às cópias, pelo que quaisquer alterações que se façam às cópias não afetam os argumentos originalmente dados.

:::danger[Atenção]
Existe uma [**exceção**](color:red) a esta regra: se o argumento for uma tabela, não é efectuada a cópia da tabela. Assim sendo, se a função alterar o conteúdo da tabela, estas alterações preservam-se.
:::

`embed:assets/0005-loc.c`

:::tip[Conversão do Tipo de 1 Variável]
Para fazer uma divisão entre inteiros, por vezes a parte inteira não chega.
Assim, convertemos o divisor para outro tipo de dados, `float`, para que a assim a divisão mostre casas decimais.

```c
media = soma / (float) num_alunos;
```

:::

### Copiar Tabelas

Uma tabela tem de ser copiada elemento a elemento.

`embed:assets/0005-copia.c`
