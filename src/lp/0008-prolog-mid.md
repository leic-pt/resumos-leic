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

## Aritmética

De seguida estão apresentadas algumas operações aritméticas que podem ser úteis:

| Operação                      | Significado                          |
| ----------------------------- | ------------------------------------ |
| A+B, +(A, B)                  | soma entre A e B                     |
| A-B, -(A, B)                  | diferença entre A e B                |
| A*B, *(A, B)                  | produto entre A e B                  |
| A/B, /(A, B)                  | quociente real entre A e B           |
| A//B, //(A,B)                 | quociente inteiro entre A e B        |
| A^B, ^(A, B)                  | A elevado a B                        |
| -A                            | simétrico de A                       |
| sin(A), cos(A), tan(A)        | seno, cosseno, tangente de A         |
| log(A)                        | logaritmo natural de A               |
| abs(A)                        | módulo de A                          |
| sqrt(A)                       | raiz quadrada de A                   |
| max(A, B)                     | maior valor entre A e B              |
| min(A, B)                     | menor valor entre A e B              |
| rem(A, B), mod(A, B)          | resto da divisão entre A e B         |
| gcd(A, B)                     | maior divisor comum entre A e B      |
| lcm(A, B)                     | menor múltiplo comum entre A e B     |
| sign(A)                       | -1 se A < 0, 0 se A == 0, 1 se A > 0 |
| random(A)                     | valor tal que 0 <= valor < A         |
| random_between(A, B)          | valor tal que A <= valor <= B        |
| round(A)                      | arredonda (para cima) A              |
| floor, ceiling, float, int... | vocês sabem estes                    |
| >>, <<, xor                   | estes também                         |
| \\/                           | bitwise or (cursed)                  |
| /\                            | bitwise and (cursed)                 |

Temos também operações relacionais:

| Operação         | Significado                                         |
| ---------------- | --------------------------------------------------- |
| >, <, >=, <=, == | vocês conhecem estas                                |
| A =\= B          | true caso o valor de A seja diferente do valor de B |
| A =:= B          | true caso o valor de A seja igual ao valor de B     |

::: details Exemplos de Interações com as operações acima

```prolog
?- X = +(2, 3).
X = 2+3.
?- 2 + X = Y + 3.
X = 3,
Y = 2.
?- 3 + 5 = 5 + 3.
false.
?- 3 + 5 =:= 5 + 3.
true.
?- X = 9, X + 1 = 10.
false.
?- X = 9, X + 1 == +(9,1).
X = 9.
?- X = 9, X + 1 =:= 10.
X = 9.
```

:::

Podemos ainda fazer um mini throwback ao Python e ir buscar o `is`, onde primeiro é avaliada a expressão da direita e depois há a tentativa de unificação com o termo da esquerda.

```prolog
% (equivalente a ?- a = 8.)
?- a is 6 + 2.
false.
% (equivalente a ?- 6 + 2 = 8.)
?- 6 + 2 is 6 + 2.
false.
% (equivalente a ?- s(8) = 8.)
?- s(8) is 6 + 2.
false.
% (equivalente a ?- X = 8.)
?- X is 6 + 2.
X = 8.
?- X is 6 + 2, Y is X ** 2.
X = 8,
Y = 64.
```

Criação do predicado potência, equivalente à operação `**`:

```prolog
% potencia(B, E, P) - B elevado a E é P

% qualquer coisa elevada a 0 é 1
potencia(_, 0, 1).

%  caso contrário:
potencia(B, E, P) :-
  E > 0,
  NextE is E - 1,
  potencia(B, NextE, NextRes),
  P is B*NextRes.
```

## Leitura/Escrita

O Prolog, tal como as outras linguagens de programação, também apresenta instruções de leitura e escrita de dados, instruções estas que correspondem a predicados.

### Instruções de Leitura

Utilizamos, para leitura, o predicado `read/1`, que unifica o termo escrito como input com o termo argumento. Para além de na _prompt_ termos de utilizar o ponto final, temos de o escrever também no input.

Interações básicas:

```prolog
?- read(a).
|: a.
true.
?- read(a).
|: b.
false.
?- X = 5, read(X).
|: 3+2.
false.
?- X = +(3,2), read(X).
|: 3+2.
X = 3+2.
?- read(X).
|: 3 mais 2.
ERROR: Stream user_input:0:72 Syntax error:Operator expected
?- read(X).
|: mais(3,2).
X = mais(3, 2).
```

**Um objetivo que utilize o predicado read só tem sucesso uma vez, isto é, qualquer tentativa posterior será falhada**.

```prolog
% par(X) - X é par.
par(X) :- X mod 2 =:= 0.
% le_e_verifica_par - o número lido é par.
le_e_verifica_par :- read(X), par(X).

?- par(8).
true.
?- le_e_verifica_par.
|: 5.
false.
?- le_e_verifica_par.
|: 6.
true.
```

### Instruções de escrita

Temos, para efeitos de escrita, três predicados pré-definidos: `write/1`, que escreve o valor do seu argumento e **não muda de linha**, `writeln/1` que escreve o valor do seu argumento **e muda de linha** e `nl/0` que muda de linha.

Interações básicas:

```prolog
?- write(a),write(5).
a5.
true.
?- writeln(a),write(5).
a
5.
true.
?- write(a),nl,write(5).
a
5.
true.
?- read(X),writeln(X + 5).
|: 2.
2+5
X = 2.
?- read(X),Y is X + 5,writeln(Y).
|: 2.
7
X = 2,
Y = 7.
```

## Estruturas

Já vimos anteriormente vários tipos elementares de dados - átomos, números, variáveis, etc.. Contudo, podemos ainda combinar tipos de dados elementares para construir tipos de dados mais complexos, estruturados. Em Prolog, representá-los-emos através de termos compostos, sendo estes considerados **estruturas**.

De volta aos velhinhos TADs, sabemos que um tipo de dados tem, por norma, de ter definidos construtores, seletores, reconhecedores e testes.

Tentemos criar uma estrutura chamada `data`. Essa estrutura poderá ter, por ex., um construtor, `faz_data` e seletores, `ano_de`, `mes_de` e `dia_de`. Em termos abstratos, podemos considerar a `data` como um termo de três argumentos, onde `data` é uma espécie de `functor`. Assim sendo, a estrutura poderá ser algo do género `data(A, M, D)`, cujos ano, mês e dia são, respetivamente, A, M e D. Com base nesta ideia, podemos construir alguns predicados:

```prolog
% construtor
faz_data(A, M, D, data(A, M, D)).

% seletores
% para cada seletor, só nos interessa um "atributo", pelo que o resto pode ser
% representado por uma variável anónima
ano_de(data(A, _, _), A).
mes_de(data(_, M, _), M).
dia_de(data(_, _, D), D).

% podemos ainda definir alguns modificadores
% o atributo atual é irrelevante dado que o queremos mudar, pelo que pode
% ser representada por uma variável anónima
muda_ano(A, data(_, M, D), data(A, M, D)).
muda_mes(M, data(A, _, D), data(A, M, D)).
muda_dia(D, data(A, M, _), data(A, M, D)).
```

Ora, tal como em FP, a utilidade dos TADs por si só não se cinge aos tipos em concreto, mas sim aos programas que com eles podemos criar. No exemplo seguinte, podemos ver precisamente um exemplo disso mesmo, onde utilizamos os TADs definidos anteriormente para alterar uma data:

```prolog
% prox_ano(Hoje, Futuro) - data equivalente a hoje do próximo ano

prox_ano(Hoje, Futuro) :-
  ano_de(Hoje, A),
  NextYear is A + 1,
  muda_ano(NextYear, Hoje, Futuro).

% interação possível:

?- prox_ano(data(2014, 4, 2), Futuro).
Futuro = data(2015, 4, 2).
```

Nos slides há um exemplo giro do problema do homem, do lobo, da cabra e da couve, e no livro há um semelhante mas sobre três casas coloridas se quiserem ver mais coisas deste género.
