---
description: Meta-predicados. Aritmética, Instruções de Escrita e Leitura, Estruturas.
---

# Meta-Predicados, Arimética, IO, Estruturas

[[toc]]

## Meta-Predicados sobre Listas

Ponto importante - sempre que virem algo do género `<nome_func>/<numero>`, `<numero` é o número de argumentos que a função recebe.

### length

[Predicado built-in](https://github.com/dtonhofer/prolog_notes/tree/master/swipl_notes/about_length) que recebe dois argumentos, uma lista e uma variável, e devolve `<variável> = <comprimento>`.

```prolog
% Exemplo de interação
?- length([1,2,3,4,5], L).
L = 5.
```

### maplist

O [maplist](https://github.com/dtonhofer/prolog_notes/blob/master/swipl_notes/about_maplist/maplist_2_examples.md) é um predicado _built-in_ com enormes semelhanças ao `map` do Python, onde, ao dar-lhe uma função como argumento, retornava o resultado da aplicação dessa função aos elementos da lista argumento. No `maplist` do Prolog passa-se algo do mesmo género. Ocorre em 4 variantes, `maplist/2`, `maplist/3`, `maplist/4` e `maplist/5`, correspondendo os números à quantidade de argumentos que aceita (ao chamar a função, não usamos esta notação, apenas usamos `maplist`.) O primeiro argumento é **sempre** a função/predicado que queremos utilizar, e os seguintes as listas que queremos que sejam operadas pela função.
**Pormenores importantes** - nos `maplist` que aceitam mais que uma lista, todas as listas devem ser do mesmo tamanho; as listas devem ter tamanhos definidos.

O último pormenor pode ser reproduzido através de:

```prolog
% programa:
just_one(1).

% interação
?- maplist(just_one, E).
E = []; % temos de carregar no ; para ver os resultados a aparecer
E = [1];
E = [1,1];
...

% esta interação nunca "para", o que é oposto ao que queremos - uma resposta concisa
```

Exemplos de interações corretas:

```prolog
% maplist/2 - chama o predicado, verifica se o predicado é verdadeiro para cada elemento da lista

?- maplist(atom, [a, b, c]).
true.
? maplist(nonvar, [X, 1, P]).
false.
% par(N) - N é par
?- maplist(par, [1,2,3,4]).
false.

% dobro(X, Y) - Y é o dobro de X
?- maplist(dobro, [1,2,3,4,5], L).
L = [2,4,6,8,10].

% soma(X, Y, Z) - Z é a soma de X com Y
?- maplist(soma, [1,2,3,4,5], [1,2,3,4,5], L).
L = [2,4,6,8,10].
?- maplist(soma(10), [1,2,3,4,5], L).
L = [11,12,13,14,15].
```

### include, exclude

Os meta-predicados `include` e `exclude` funcionam, tal como o nome indica, de maneiras diretamente opostas. Ambos recebem 3 argumentos, sendo o primeiro o predicado "filtrador", o segundo a lista que queremos filtrar e a terceira a lista devolvida após o filtro estar concluído.

```prolog
% programa
is_odd(I) :- 0 =\= I mod 2.
% irá ser abordado mais à frente, mas =\= é "diferente" e mod é o resto
are_identical(X, Y) :- X == Y.
count_vars(L, Res) :- include(var, L, L_vars), length(L_vars, Res).

% interação
?- include(is_odd, [1,2,3,4,5,6], Odd).
Odd = [1,3,5].
?- exclude(is_odd, [1,2,3,4,5,6], Odd).
Odd = [2,4,6].
?- exclude(are_identical(3), [1,2,3,4,3,2,1], L).
L = [1,2,4,2,1].
% podemos escrever o objetivo acima de outra maneira, mais interessante
?- exclude(=(3), [1,2,3,4,3,2,1], L).
L = [1,2,4,2,1].
% o mesmo ocorre ao alterar o = por <, >, ...
?- count_vars([1,2,4,X,Y,p, A], L).
L = 3.
```
