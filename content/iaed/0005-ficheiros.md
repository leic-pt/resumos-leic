---
description: Definição. Passagem de Parâmetros
path: /iaed/ficheiros
---

# Funções

```toc

```

## Definição

### Definição e Protótipo

Uma função é definida por:

- o tipo de retorno
- o nome
- a declaração de parâmetros
- as variáveis (locais) que define e as instruções que executa

<<< @/src/iaed/assets/0005-def.c

Os protótipos permitem indicar que a função é conhecida pelo o compilador.

<<< @/src/iaed/assets/0005-prot.c

### Return

Retorna o valor da função que irá ser usada por outra.
Quando executada, o valor da `expressão` é automaticamente convertido para o tipo de retorno da função definida e esta termina o programa.

A funcão pode não devolver nada se o seu tipo de retorno for `void`

<<< @/src/iaed/assets/0005-pot.c

## Passagem de Parâmetros

### Passagem por Valor e Passagem por Referência

- Argumentos são copiados para variáveis temporárias
  quando função é executada
- Função não tem acesso aos argumentos (só às cópias)
- Não os pode alterar

  ::: warning Atenção
  Se o argumento for uma tabela, não é
  efectuada a cópia da tabela.

  Se a função alterar o conteúdo da tabela, estas alterações preservam-se.
  :::

  <<< @/src/iaed/assets/0005-loc.c

::: tip Conversão do Tipo de 1 Variável
Para fazer uma divisão entre inteiros, por vezes a parte inteira não chega.
Assim convertemos o divisor para outro tipo de dados (`float`) para que a assim a divisão mostre casas decimais.
`media = soma / (float) num_alunos ;`
:::

### Copiar Tabelas

Para copiar uma tabela, temos de copiar elemento a elemento.

<<< @/src/iaed/assets/0005-copia.c

Slides:

- [Aula 5](https://drive.google.com/file/d/1p2wguxSNAtxRTz8PGN_V-FVC3lbcQ6Go/view?usp=sharing)
