---
description: Introdução ao Prolog. Componentes básicos, programa, objetivo, comparação, unificação, semântica.
---

# Introdução ao Prolog

Prolog é uma linguagem de programação que utiliza o paradigma de programação em lógica - especifica _o quê_ e _o que deve_ ser feito. Concebida com o objetivo inicial de resolver problemas associados à inteligência artificial/tradução de linguagem natural, hoje em dia as suas aplicações vão desde a LN/AI à lógica e à computação numérica e simbólica. Hoje

[[toc]]

## Conceitos Básicos

Importante - todo o input escrito na _prompt_ (`?-`) tem de terminar com um ponto final. Perguntamos _algo_ à prompt, e com a informação de que dispõe, o programa responde - se souber, dá-nos uma resposta; caso contrário (errado/falta de informação), responde que não sabe.

### Termos

Um dos conceitos importantes em Prolog é _termo_ - tal como na LPO, consiste numa variável, constante, ou função que as aceita como argumentos (um termo composto).

- **Constantes** - podem ser átomos ou números.

  - **Átomos** - podem ser como "nomes" numa LP normal (i.e `postMalone, ciDADE, zero`), começando sempre por minúscula; cadeias de carateres, utilizando plicas, e aqui a primeira letra pode ser maiúscula ou até `_` (i.e `'cidade', 'Lebron', '_poster'`); um átomo especial (`! | [ | ] | ; | { | } | + | - | * | / | **`), sendo estes últimos pouco utilizados. Se introduzirmos `atom(<argumento>)` na prompt, o Prolog devolve "yes." ou "no.", caso o argumento seja um átomo ou não.

  - **Números** - consideramos apenas números inteiros. Se introduzirmos `number(<argumento>)` na prompt, o Prolog devolve "yes." ou "no.", caso o argumento seja um número ou não.

  Podemos ainda fazer `atomic(<argumento>)` para verificar se o argumento é um átomo ou número.

- **Variáveis** - começam _sempre_ por maiúscula ou `_` (sendo que `_` por si só é a **variável anónima**, utilizada quando o valor da variável não tem interesse numa expressão). Várias ocorrências de variáveis anónimas numa mesma expressão são **ocorrências distintas**, e devem ser tratadas como tal - não é necessariamente a mesma variável em cada sítio. Podemos escrever `var<argumento>` e `nonvar(<argumento>)` para verificar se o argumento é uma variável segundo as convenções referidas acima.

- **Termos Compostos** - aplicação de um _functor_ a um dado número de argumentos. Um functor é necessariamente um átomo. Existem funções pré-embutidas em Prolog, tais como `+, *, /`.

  ::: details Exemplo

  `vencedor(X), 'vencedor'(_X), +(5, X), 5 + X`

  De realçar que escrever `+(5, X)` e `5 + X` é exatamente a mesma coisa.

  :::

- **Literais** - corresponde à aplicação de um predicado ao número apropriado de termos (devolve verdadeiro ou falso). Um literal de aridade (nº de argumentos) zero é um átomo. Sintaticamente, não existe diferença entre termos compostos e literais - decidir se é uma coisa ou outra depende do contexto.

  ::: details Exemplo

  `mae(Marge, Bart), filho(Bart, Marge)`

  :::

### Programas

Constituídos por uma sequência de cláusulas determinadas (cláusulas com cabeça). As cláusulas aceitam literais, funcionando tal como na LPO. Aqui, a implicação $\leftarrow$ é representada por `:-`.

::: details Cláusulas Determinadas

**Afirmações** - informações "concretas" dadas aos programa:
`pai(Homer, Bart),`
`comprarCigarros(pai, filhoRandom)`

**Regras** - informações "formais"/_regras_ dadas ao programa:
`ant(X,Y) :- ad(X, Y)`

:::

Podemos ainda ter cláusulas iterativas, cláusulas cujo corpo apenas contém um literal, sendo este igual ao utilizado na cabeça da cláusula.

::: details Cláusula Iterativa

`liga(X, Y) :- liga(Y, X)`

:::

- **Objetivos** - como na LPO, uma cláusula com corpo e sem cabeça.

- **Domínio de uma variável** - regras/objetivos nos quais a variável aparece.

## Unificação de termos

Na prompt, escrever `<expressão> = <expressão>` para verificar se é unificável, `<expressão> \= <expressão>` para verificar o contrário. Devolve `false.` caso não seja unificável(1). Se for unificável, pode devolver tanto a unificação concreta que torna a expressão verdadeira(2), ou `true.` caso a unificação não tenha uma resposta concreta(3).

::: details Unificação

(1)  
`?- a = b.`  
`false.`  
`?- f(X, a) = f(b, X).`  
`false.`

(2)  
`?- f(X, a) = f(b, Y).`  
`X = b, Y = a.`

(3)  
`?- X = X.`  
`true.`  
`?- f(_, _) = f(a, b).`  
`true.`  
(aqui não há uma resposta concreta). Além disso, como podemos observar neste segundo exemplo, as variáveis anónimas são consideradas variáveis distintas (se não fossem, retornaria `false.`).
:::

### Comparação de termos

Na prompt, escrever `<expressão> == <expressão>` para verificar se são iguais, `<expressão> \== <expressão>` para verificar o contrário. Um nome escrito de igual modo

::: details Comparação de Termos

`?- b == a.`  
`false.`  
`?- 'a' == a.`  
`true.`  
`?- X == a.`  
`false.`  
`?- X = a, X == a.`  
`X = a.`  
Neste último exemplo, o programa vai primeiro tentar unificar `X` com `a` e só depois é que ocorre a comparação, comparação que ocorre agora entre `a` e `a` (e que dá, portanto, `true.`).
:::

### Semântica

Para provar um objetivo, o Prolog recorre a uma Resolução SLD com função de seleção, função esta que escolhe o primeiro literal na cláusula objetivo, e com uma regra de procura que escolhe a primeira cláusula que se pode unificar com o literal selecionado da cláusula objetivo na sequência de cláusulas que corresponde ao programa.

- **Semântica declarativa** - preocupa-se com o que o programa afirma.

::: tip

A regra `ant(X, Z) :- ant(X, Y), ad(Y, Z)` pode ser lida como "se `ant(X, Y)` e `ad(Y, Z)` se verificarem para uma dada substituição de `X, Y, Z`, então `ant(X, Z)` verificar-se-á para a mesma substituição de `X` e `Z`".

:::

- **Semântica procedimental** - preocupa-se com o modo como provar um objetivo.

::: tip

A mesma regra descrita acima seria aqui lida como "para poder provar uma dada instância de `ant(X, Z)`, devemos primeiro provar `ant(X, Y)` e, com as substituições adequadas para `X, Y, Z`, provar uma instância de `ad(Y, Z)`".

:::

### Exemplos de resoluções

Consideraremos, nesta secção, o programa

```prolog
% os comentários começam com percentagens.
ad(marge, bart).
ad(srB, marge).

ant(X, Y) :- ad(X, Y).
ant(X, Z) :- ant(X, Y), ad(Y, Z).
```

Podem testar os exemplos seguintes no SWI-Prolog ao criar um ficheiro `.pl` com o código acima, e dentro do SWI-Prolog ir a `Consult` e escolher esse ficheiro. De seguida, na `prompt`, escrever os objetivos indicados e verificar a resposta. **Este programa tem erros, e à frente aprofundaremos quais são/o seu porquê**.

::: tip Resolução com um ramo bem sucedido

Tentar, através do programa anterior, provar `ant(srB, Bart)`. O Prolog cria uma árvore SLD para resolver o problema:

<img src="./assets/0007-pl-res1.png" alt="Resolução sem Nós Infinitos" class="invert-dark">

Aqui, é devolvido `true.`, visto que há um ramo bem sucedido para o programa.

:::

::: tip Resolução com um ramo infinito

Considerando o programa acima referido, e tentando agora chegar ao objetivo `ant(eva, bart)`, podemos verificar que o Prolog não só não encontra ramos bem sucedidos como chega a um ramo infinito. Assim sendo, devolve um erro - `ERROR: Out of local stack.`.
Porquê? Porque a cláusula com que o objetivo tenta unificar apresentará comportamento recursivo, devido ao predicado da cabeça ser o mesmo (`ant`) do primeiro elemento do corpo, e o Prolog, com uma função de seleção $\alpha_{1}$ vai apresentar comportamento recursivo infinito.
Se a quarta cláusula do programa tivesse `ad(Y, Z)` e `ant(X, Y)` trocados, o programa iria devolver `false.`, com dois ramos falhados.

<img src="./assets/0007-pl-res2.png" alt="Resolução com Nó Infinito" class="invert-dark">

:::

Podíamos ainda ter o caso de só haver ramos falhados - nesse caso, o Prolog responderia `false.`, equivalente a "não sei". Esta equivalência tem por base a **hipótese do mundo fechado** - o Prolog assume que tudo o que não consegue derivar é falso.

Devemos ainda ter em consideração 2 pontos:

- Ao definir um predicado, devemos definir as afirmações (cláusulas só com cabeça) antes das regras; esta regra vem devido às afirmações não terem corpo, e a unificação leva ao desaparecimento do literal (queremos isto o mais "cedo" no programa possível).

- Devemos evitar recursão à esquerda, ou seja, em vez de escrever `pred1(A, C) :- pred1(A, B), pred2(B, C).`, devemos trocar a ordem de `pred1(A, B)` e `pred2(B, C)`. Caso contrário, poderemos entrar em ciclos infinitos, visto que a função de seleção do Prolog é $\alpha_{1}$, e ao escolher o ramo mais à esquerda estaremos a entrar em recursões infinitas.

Caso haja **mais que uma resposta** a um dado objetivo dado um programa, podemos continuar a premir `Enter` até o Prolog esgotar os ramos bem sucedidos.
