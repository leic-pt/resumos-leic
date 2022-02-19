---
title: O Prolog como Linguagem de Programação
description: >-
  Prolog como Linguagem de Programação.
  Tipos, Mecanismos de Controlo, Predicados Dinâmicos.
path: /lp/prolog-linguagem-programacao
type: content
---

# O Prolog como Linguagem de Programação

```toc

```

Tal como referido anteriormente, o Prolog baseia-se no paradigma da programação em lógica. Ao contrário de outros paradigmas baseados em ciclos, recursões, entre outros, a programação em lógica baseia-se no princípio da resolução guiado pela unificação. Além disso, os outros paradigmas de programação que estudámos assumem que os dados de entrada são fornecidos ao programa, ao contrário da programação em lógica que não faz a distinção entre dados de entrada e saída - **polimodalidade**.  
Aqui, o programador define entidades, factos, relações e regras, e o programa infere conclusões em relação a determinados objetivos consoante o que "sabe"; não podemos, portanto, criar funções que retornam valores, apenas relações, relações estas com um argumento adicional em relação à definição usual de uma função, cujo propósito é ser a variável que representa o "valor de retorno".

Temos ainda mais uma diferença entre o Prolog e as linguagens convencionais: numa linguagem habitual, caso a execução não possa prosseguir, gera-se um erro de execução; em Prolog, há apenas um retrocesso até ao último "ponto de decisão", e o processo limita-se a continuar seguindo um caminho diferente.

- **Tipos de informação**

  Prolog é uma linguagem sem declaração de tipos, que pode utilizar estruturas de dados com flexibilidade; as variáveis têm, claro, um **domínio** ou _scope_ ondem podem ser utilizadas - a cláusula onde esta se encontra. O domínio de um nome, por outro lado, é todo o programa.
  Átomos e números são os **tipos elementares**, podendo criar tipos **estruturados** compondo tipos elementares; considerando estes últimos, a lista é um deles, pré-definido.

## Mecanismos de controlo

Aqui, os programas não especificam um algoritmo para atingir resultados - estes são obtidos através das entidades definidas, das suas propriedades e das suas relações.

**A ordem pela qual as cláusulas são escritas num programa é de extrema importância na execução do programa**, diferindo, portanto, da "lógica teórica". O Prolog verifica sempre as cláusulas pela mesma ordem - do início ao fim - pelo que devemos ter em conta este aspeto quando estamos a implementar o código. Este pormenor é particularmente relevante quando tentamos implementar _mecanismos de controlo_; não existindo "estruturas de seleção" usuais como `if-then` e `if-then-else`, podemos escolher cuidadosamente a ordem das cláusulas e combiná-las com o operador de corte para criar estruturas bastante semelhantes.

Interação exemplo:

```prolog
% estrutura de controlo: if teste then literal1 else literal2

condicional :- teste, !, literal1.
condicional :- literal2.
```

Esta mesma estrutura pode ainda ser sintetizada utilizando o operador `->`, equivalente a um `if-then-else` (funciona como algo do género `teste -> literais; fail.`, criando um nó falhado para proibir o retrocesso a partir daí).

:::warning

A professora não costuma gostar que se use este operador, por isso _proceed with caution_ - perguntem primeiro se o podem usar.

:::

A estrutura acima seria, então, algo deste género:

```prolog
condicional :- teste -> literal1; literal2.
```

Além disso, podemos ainda olhar para o predicado-exemplo no capítulo do operador de corte, `menor(X, Y, Z)`, e sintetizá-lo usando esta técnica:

```prolog
menor(X, Y, Z) :- X =< Y -> Z = X ; Z = Y.
```

Pode, no entanto, tornar o código mais ilegível, pelo que devemos continuar a dividir o código em "partes lógicas" em vez de ter tudo numa linha:

```prolog
menor(X, Y, Z) :-
    X =< Y
    ->
    Z = X;
    Z = Y.
```

Podemos ainda considerar outros mecanismos de controlo, os **geradores**, mecanismos que "simulam" ciclos em Prolog. Fazem com que uma expressão enumere múltiplos valores quando solicitados. Um gerador pode ser, por exemplo, um ciclo que escreve os `N` primeiros inteiros, como o abaixo:

```prolog
% começa sempre em 1
inteiro(1).
% após começar em 1, vai aumentar até chegar a N
inteiro(N) :-
    inteiro(M),
    N is M+1.

% o corte só é executado quando I unificar com N
ciclo_inteiros(N) :-
    inteiro(I),
    writeln(I),
    I = N, !.

% este programa fica bastante claro quando o corremos com o trace
% enquanto I < N, a unificação falha e o retrocesso gera uma
% "alternativa adicional"; quando unificam, o corte é executado
```

## Homoiconicidade

- **Homoiconicidade** - propriedade de algumas linguagens de programação, onde a representação dos programas corresponde à principal estrutura de dados da linguagem (em Prolog o **termo composto**, aplicação de um _functor_ a um certo número de argumentos), permitindo que o programa se modifique a si próprio. A primeira linguagem a apresentar este comportamento foi o velhinho [Lisp](https://en.wikipedia.org/wiki/Lisp_programming_language), já de 1958, comportamento este apresentado por todas as propriedades que dele derivaram.

Existem alguns predicados _built-in_ em Prolog que nos permitem criar/extrair informação de termos compostos:

- `functor/3`, ou `functor(T, F, Ar)`, aplica o functor F ao termo composto T com aridade Ar.

- `arg/3` ou `arg(N, T, Arg)`, afirma que Arg é o N-ésimo argumento do termo T.

- `=..(T, L)` afirma que o primeiro elemento da lista L é o functor de T e que o resto dos elementos são os seus argumentos.

:::details[Exemplos]

```prolog
?- functor(ad(pedro_I, joao_I), ad, 2).
true.
?- functor(ad(pedro_I, joao_I), F, Ar).
F = ad,
Ar = 2.
?- functor(T, ad, 2).
T = ad(_313, _314).
% neste último exemplo, foi criado um termo composto dados o functor e a aridade
% assim sendo, as variáveis criadas são aquelas "variáveis aleatórias"

?- arg(1, ad(marge, bart), marge).
true.
?- arg(2, ad(marge, bart), Arg2).
Arg2 = bart.
?- arg(1, ad(X, Y), marge).
X = marge.

?- T =.. [ad, marge, bart].
T = ad(marge, bart).
?- ad(marge, bart) =.. [P | R].
P = ad,
R = [marge, bart].
% a interação acima é igual a:
?- =..(ad(marge, bart), [P | R]).
P = ad,
R = [marge, bart].
```

:::

Temos ainda o predicado `call/1`, que só tem sucesso se o seu argumento também tiver sucesso (i.e `call(member(3, [1,2,4]))` não tem sucesso, mas `call(member(3, [1,2,3]))` tem). É usualmente implementado em combinação com os 3 predicados referidos acima.  
Um exemplo possível da aplicação deste predicado será que tentar fazer algo do género `..., L =.. [P, X, Y], call(L), ...` não gera erro, visto que assim podemos chamar L como sendo `P(X, Y)`, mas chamar `P(X, Y)` por si só gera um erro.

## Predicados Dinâmicos

Todo o predicado definido num programa é dinâmico (pode ser alterado durante a execução de um programa) ou estático (não pode ser alterado). Temos que todos os predicados _built-in_ são **estáticos**.  
Podemos definir um predicado dinâmico escrevendo `:- dynamic <átomo>/<aridade>`, onde `<átomo>` é o nome do predicado e `<aridade>` é a aridade do mesmo.

Exemplo:

```prolog
% predicado dinâmico de nome superliga que aceita 12 argumentos
:- dynamic superliga/12
```

Para verificar a definição de um dado predicado (i.e as cláusulas que o constituem), podemos escrever `listing(<nome>).`. Esta interação pode ser útil em predicados dinâmicos, particularmente para quando lhes queremos adicionar e/ou retirar cláusulas.

- **Adicionar Cláusulas**

  Para adicionar cláusulas a um dado predicado, podemos recorrer aos predicados _built-in_ `asserta/1` e `assertz/1`.

  - `asserta(X)`: origina a adição da cláusula X como a **primeira linha** do procedimento correspondente à cabeça da cláusula X. O efeito não é removido durante a fase de retrocesso.

  - `assertz(X)`: origina a adição da cláusula X como a **última linha** do procedimento correspondente à cabeça da cláusula X. O efeito não é removido durante a fase de retrocesso.

- **Remover Cláusulas**

  Para remover cláusulas a um dado predicado, podemos recorrer ao predicado _built-in_ `retract/1`.

  - `retract(X)`: origina a remoção da cláusula X do procedimento correspondente à cabeça da cláusula X.

Peguemos no exemplo da função de Ackermann:

$$
A( x) =\begin{cases}
n + 1 & \text{se } m = 0\\
A(m - 1, 1) & \text{se } m > 0 &\text{e } n = 0\\
A(m - 1, A(m, n - 1)) & \text{se } m > 0 &\text{e } n > 0
\end{cases}
$$

Em Prolog, pode ser definida deste modo:

```prolog
a(0, N, V) :- V is N + 1.
a(M, 0, V) :-
    M > 0,
    M_menos_1 is M - 1,
    a(M_menos_1, 1, V).
a(M, N, V) :-
    M > 0,
    N > 0,
    M_menos_1 is M - 1,
    N_menos_1 is N - 1,
    a(M, N_menos_1, V1),
    a(M_menos_1, V1, V).
```

Este programa, contudo, gera muitos cálculos repetidos. Assim sendo, será útil criar um predicado que memorize os valores calculados, `memoriza/1`:

```prolog
% de realçar que esta chamada dynamic faz parte do próprio programa
:- dynamic(a/3).

% sem alterações
a(0, N, V) :- V is N + 1.

% chamamos memoriza para guardar o valor da chamada de a(M, 0, V)
% o valor pretendido, V, é guardado como argumento, pelo que
% nunca mais será preciso realizar a chamada total da função outra vez
a(M, 0, V) :-
    M > 0,
    M_menos_1 is M - 1,
    a(M_menos_1, 1, V),
    memoriza(a(M, 0, V)).

% funciona tal como no trecho acima
a(M, N, V) :-
    M > 0,
    N > 0,
    M_menos_1 is M - 1,
    N_menos_1 is N - 1,
    a(M, N_menos_1, V1),
    a(M_menos_1, V1, V),
    memoriza(a(M, N, V)).

% memoriza(L) - utiliza asserta(adiciona a cláusula na primeira linha)
% para utilizar o predicado asserta como uma regra, precisamos de um
% nível adicional de parênteses
memoriza(L) :- asserta((L :- !)).
```

Mas como é que o programa em si funciona?  
Bem, a cada chamada do predicado `a/3` com uns dados argumentos, o Prolog vai verificar se essa mesma chamada é passível de unificação com uma das cláusulas do início do programa (as que guardámos com `assert/1`). Caso não unifiquem, chama a função normalmente e memoriza a cláusula no sistema, com um operador de corte para o programa não procurar mais cláusulas. Caso unifiquem, o programa já conhece o valor pretendido (está, aqui, no terceiro argumento do predicado) e limita-se a fazer a devida unificação, sem cálculos desnecessários já realizados. O operador de corte trata, depois, de não deixar a pesquisa de novas cláusulas avançar.  
Em baixo podemos observar uma chamada do predicado `a/3`, seguido de um `listing(a)` que demonstra que houve, de facto, cláusulas memorizadas no programa.

```prolog
% interação inicial
?- a(2, 2, V).
V = 7.

% chamada listing
?- listing(a).
% o procedimento dinâmico continua a ser a "verdadeira" primeira linha
:- dynamic a/3.
% cláusulas memorizadas, com a mais recente primeiro
a(2, 2, 7) :- !.
a(1, 5, 7) :- !.
a(1, 4, 6) :- !.
a(2, 1, 5) :- !.
a(1, 3, 5) :- !.
a(1, 2, 4) :- !.
a(2, 0, 3) :- !.
a(1, 1, 3) :- !.
a(1, 0, 2) :- !.

a(0, N, V) :-
    V is N+1.

a(M, 0, V) :-
    M>0,
    M_menos_1 is M+ -1,
    a(M_menos_1, 1, V),
    memoriza(a(M, 0, V)).

a(M, N, V) :-
    M>0,
    N>0,
    M_menos_1 is M+ -1,
    N_menos_1 is N+ -1,
    a(M, N_menos_1, V1),
    a(M_menos_1, V1, V),
    memoriza(a(M, N, V)).

true.
```
