---
description: Meta-predicados. Aritmética, Instruções de Escrita e Leitura, Estruturas.
---

# Meta-Predicados, Arimética, IO, Estruturas

[[toc]]

## Meta-Predicados sobre Listas

Ponto importante - sempre que virem algo do género `<nome_func>/<numero>`, `<numero>` é o número de argumentos que a função recebe.

### length

[Predicado built-in](https://github.com/dtonhofer/prolog_notes/tree/master/swipl_notes/about_length) que recebe dois argumentos, uma lista e uma variável, e\
 devolve `<variável> = <comprimento>`.

```prolog
% Exemplo de interação
?- length([1,2,3,4,5], L).
L = 5.
```

### append

Recebe dois ou três argumentos, uma ou duas listas e uma variável. Permite interações como as demonstradas abaixo:

```prolog
% interações com append
?- append([1,2,3], [4,5], X).
X = [1,2,3,4,5].
% podemos ainda dar append a mais que 2 listas:
?- append([[1,2],[3,4], [5,6]], X).
X = [1,2,3,4,5,6].
?- append([[1,2], X, [a,b,c]], [1,2,3,4,5,a,b,c]).
X = [3,4,5].
?- append(X, [Resto], [1,2,3]).
X = [1,2],
Resto = 3.
?- append([1,2,3], Resto, L).
L = [1,2,3 | Resto].
```

### maplist

O [maplist](https://github.com/dtonhofer/prolog_notes/blob/master/swipl_notes/about_maplist/maplist_2_examples.md) é um predicado _built-in_ com enormes semelhanças ao `map` do Python, onde, ao dar-lhe uma função como argumento, retornava o resultado da aplicação dessa função aos elementos da lista argumento. No `maplist` do Prolog passa-se algo do mesmo género. Ocorre em 4 variantes, `maplist/2`, `maplist/3`, `maplist/4` e `maplist/5`, correspondendo os números à quantidade de argumentos que aceita (ao chamar a função, não usamos esta notação, apenas usamos `maplist`). O primeiro argumento é **sempre** a função/predicado que queremos utilizar, e os seguintes as listas que queremos que sejam operadas pela função.

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
% maplist/2 - chama o predicado e
% verifica se o predicado é verdadeiro para cada elemento da lista

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
% irá ser abordado mais à frente, mas =\= é "valores de expressões diferentes" e mod é o resto
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
% operações semelhantes ocorrem ao alterar o = por <, >, ...
?- count_vars([1,2,4,X,Y,p, A], L).
L = 3.
```

### findall, setof

O `findall` e o `setof` têm estruturas semelhantes:

```prolog
findall(<termo>, <objetivo>, <lista>).
setof(<termo>, <objetivo>, <lista>).
```

Ambos funcionam de modo semelhante, `<lista>` vai ter os termos que satisfaçam `<objetivo>`. Contudo, `<lista>` em `findall` pode conter elementos repetidos, enquanto que em `setof` isso não ocorre.
Aqui vale a pena também notar que `member/2` recebe um termo e uma lista e devolve um booleano que representa o termo estar presente na lista ou não.

Interações possíveis seriam, por exemplo:

```prolog
?- findall(X, (member(X, [6,2,4,5,4,7]), X mod 2 =:= 0), L).
L = [6,2,4,4].
?- setof(X, (member(X, [6,2,4,5,4,7]), X mod 2 =:= 0), L).
L = [6,2,4,4].
```

Interação mais complexa, **útil para o projeto** segundo a prof.:

```prolog
% sublist(SL, L, N) - SL é uma sublista de L de comprimento N
sublist(SL, L, N) :- append([_, SL, _], L), length(SL, N).

?- L = [1,2,3,4,5,6], sublist(SL, L, 4).
L = [1, 2, 3, 4, 5, 6],
SL = [1, 2, 3, 4]
L = [1, 2, 3, 4, 5, 6],
SL = [2, 3, 4, 5]
L = [1, 2, 3, 4, 5, 6],
SL = [3, 4, 5, 6]
false.
```

No programa acima, podemos ler `append([_, SL, _], L)`, que é algo como "SL é uma sublista de L, onde ambos os `_` são o que vem (ou não) atrás e à frente de SL em L, mas que não nos interessa". Como queremos todas as sublistas de L de comprimento `N`, primeiro é devolvida a resposta com os 4 primeiros elementos, de seguida com os elementos de 1 a 5 e por fim com os últimos 4 elementos.

Podemos, ainda, querer uma lista com todas as sublistas - aqui entra o `findall`:

```prolog
sublists(L, N, SLs) :- findall(SL, sublist(SL, L, N), SLs).
% aqui, SLs é uma lista com todas as sublistas pretendidas.

?- L = [1,2,3,4,5,6], sublists(L, 4, SLs).
L = [1,2,3,4,5,6],
SLs = SLs = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]].
```

Esta implementação tem, contudo, um problema, problema este que segundo a prof está **diretamente relacionado com o projeto**.

```prolog
% caso façamos:
?- L = [V1,V2,V3,V4,V5,V6], sublists(L, 4, SLs).
% o que é devolvido é
L = [V1,V2,V3,V4,V5,V6],
SLs = [[_1056, _1062, _1068, _1074], [_1026, _1032, _1038, _1044], [_996, _1002, _1008, _1014]].
% que não é o que queríamos (queríamos uma lista cujas sublistas incluem as variáveis Vn)
% dependendo da aplicação, pode ser irrelevante - no projeto interessa
% porque é que isto acontece? "não me perguntes porque é que faz, mas faz" - prof.
```

Como é que podemos solucionar isto? Utilizando o `bagof`, que faz algo muito semelhante ao `findall`, com a particularidade de no caso de termos uma lista com variáveis, as variáveis (para este propósito) serem tratadas como queremos aqui:

```prolog
% a diferença entre programas é exclusivamente usar bagof em vez de findall
?- L = [V1,V2,V3,V4,V5,V6], sublistas(L, 4, SLs).
L = [V1, V2, V3, V4, V5, V6],
SLs = [[V1, V2, V3, V4], [V2, V3, V4, V5], [V3, V4, V5, V6]].

% temos ainda que sublistas de tamanho maior que o comprimento de L retornam false
?- L = [V1,V2,V3,V4,V5,V6], sublistas(L, 7, SLs).
false.
% que pode ser um problema, caso quiséssemos, aqui, uma lista vazia em vez de false

% como resolver o problema? adicionar uma cláusula ao programa:
sublists(_, _, []).
% para além disso, adicionar `!` (cuja utilidade será explicada à frente) à cláusula original:
sublists(L, N, SLs) :- bagof(SL, sublista(SL, L, N), SLs), !.
% de notar que a cláusula que vem primeiro é esta última, só depois é que vem a cláusula que adicionámos
```

Aqui, a utilidade do operador de corte é: "se isto não der falso, não uses mais cláusula nenhuma; se der, continua e usa o que vem a seguir".

"Estes slides são uma _receita_ para o vosso projeto, para quando quiserem fazer uma coisa semelhante" - prof.
