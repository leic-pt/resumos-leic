---
description: Repositório das fichas das aulas práticas de LP + resoluções.
---

# Exercícios de LP

## Material Útil

- [Livro de Exercícios](https://drive.google.com/file/d/1TnTYnaNwd5IKWs_DgCcmPjGJcUfuchK2/view?usp=sharing)

- [Dump Avaliações by Rafael Girão](https://s.rafael.ovh/dumpavaliacoes) - repositório de avaliações semanais passadas, por favor contribuam. **Entrem com o email do IST.**

## Fichas Aulas Práticas

As resoluções vão sendo adicionadas semanalmente (alguns exercícios estão no livro de exercícios, e as (re)soluções desses também estão lá).

- [Semana 1](https://drive.google.com/file/d/1hTp2IvH3uJ7rOfcnMvxWoA6ULzVD8q2t/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1LAR2DoqgrCfr2BtedGrhuQ2P1O6N-Jq3/view?usp=sharing)

- [Semana 2](https://drive.google.com/file/d/1M6lKs04JQcH-08As-ojF_vBiBul6VmKZ/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1LGRomhscW637ng_THnhGTOFPYS6N3Cb3/view?usp=sharing)

- [Semana 3](https://drive.google.com/file/d/1vbdUILHoIY9I7nt1VwVCbTdBZYMT8T5H/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1MHMXpa-cB6yKKI12uNldEOm9LsuHpo2T/view?usp=sharing)

- [Semana 4](https://drive.google.com/file/d/1mEbur70-2TbuVxMkIPmq4S0ADApP9Jis/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1Oz-I9sp7arjDGHixjCNzU-Vn3mmu-72-/view?usp=sharing)

- [Semana 5](https://drive.google.com/file/d/1u18nl2kB7YcMqz4--XNOLkN1u1eJFUn6/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1R77x8ghgq102edZtsi6-50H7Fn7sykmO/view?usp=sharing)  
    Nota: Os exercícios da ficha para a aula prática são só 4. Se quiserem e tiverem tempo, aconselho a que façam os exercícios do livro de exercícios para ficarem melhor preparados.

**Esta semana, sai o exercício 7.2.3 da semana 6 e _todos_ os da semana 7**.

- [Semana 6](https://drive.google.com/file/d/1s59jQGSErL69dXC_6R7E1YPMzcB-Tzc2/view?usp=sharing)

  - [Resolução do Ex. 7.2.3](https://drive.google.com/file/d/12PS2eMpoM0Lu1v238mngn6HF-BPzkBkd/view?usp=sharing)

- [Semana 7](https://drive.google.com/file/d/1OdnfTgMvX2SqIgvT4wpmQNP2vcm2h7CM/view?usp=sharing)

  ::: details Resolução

  Exercício 1

  ```prolog
  % nao_membro(X, L) - X não unifica com nenhum elemento de L

  % qualquer variável não é membro da lista vazia
  nao_membro(_, []).
  % caso X não unifique com Y e X não seja membro de R, X não é membro da lista
  % com primeiro elemento Y e resto R
  nao_membro(X,[Y | R]) :-
    X \= Y,
    nao_membro(X,R).
  % de notar que \= é equivalente a not(A = B), ou seja, não unificam
  ```

  Exercício 2

  ```prolog
  % insere_ordenado(X, L1, L2) - L2 é o resultado de inserir, ordenadamente, X em L1

  %  introduzir um elemento numa lista vazia não requer ordenação
  insere_ordenado(X, [], [X]).
  % caso X seja menor que o primeiro elemento P de uma lista com resto R
  % X passará a ser o primeiro elemento dessa mesma lista
  insere_ordenado(X, [P|R], [X, P|R]) :- X < P.
  % caso X seja maior ou igual que o primeiro elemento P de uma lista com resto R
  % a lista passará a ser P|Res, onde tentaremos inserir, desta feita,
  % X na lista resto (R)
  insere_ordenado(X, [P|R], [P|Res]) :-
    X >= P,
    insere_ordenado(X, R, Res).
  ```

  Exercício 3

  ```prolog
  % junta_novo_aleatorio(L1, L_Inf, L_Sup, L2)

  % começamos por criar um numero aleatorio entre LI e LS, N;
  % depois, verificamos se não é membro de L1 - se for, para e retorna false
  % caso contrário, insere-o ordenadamente em L1, sendo L2 o resultado
  junta_novo_aleatorio(L1, LI, LS, L2) :-
    random_between(LI, LS, N),
    nao_membro(N, L1),
    insere_ordenado(N, L1, L2).
  ```

  Exercício 4 (obrigado Tomás)

  ```prolog

  % n_aleatorios(N, LI, LS, L) :- n_aleatorios(N, LI, LS, [], L).

  % condição de paragem
  n_aleatorios(0, _, _, []).

  n_aleatorios(N, LI, LS, L) :-
    N > 0,
    NewN is N - 1,
    n_aleatorios(NewN, LI, LS, AuxL),
    junta_novo_aleatorio(AuxL, LI, LS, L).
  ```

  Exercício 5

  ```prolog

  % chave_euromilhoes(N, E)

  chave_euromilhoes(N, E) :-
    n_aleatorios(5, 1, 50, N),
    n_aleatorios(2, 1, 12, E).

  ```

  Exercício 6

  ```prolog
  % comp_maior_lista(L, C)

  comp_maior_lista([P | R], C) :-
    length(P, Len),
    comp_maior_lista(R, Len, C).

  comp_maior_lista([],C,C).

  comp_maior_lista([P | R], Curr, C) :-
    length(P, Len),
    Len > Curr,
    comp_maior_lista(R, Len, C).

  comp_maior_lista([P | R], Curr, C) :-
    length(P, Len),
    Len =< Curr,
    comp_maior_lista(R, Curr, C).
  ```

  Exercício 7

  ```prolog
  % duplica_elementos(L1, L2)

  % a) - RECURSIVO

  duplica_elementos([], []).

  duplica_elementos([P|R], [P, P | Aux]) :-
    duplica_elementos(R, Aux).

  % b) - ITERATIVO

  % desafio ao leitor pls no quiero mas ;-;
  ```

  :::

- [Semana 8](https://drive.google.com/file/d/1uYeclFgMh-BH_J8UVDFQ2iIpEnyxBvW4/view?usp=sharing)

  Nota importante: Os exercícios desta secção devem ser realizados com predicados de ordem superior (sem recursão, portanto). A secção dos meta-predicados sobre listas poderá ser útil para este propósito.

  Se esgotarem estes exercícios e quiserem fazer mais, [este site](https://www.ic.unicamp.br/~meidanis/courses/mc336/2009s2/prolog/problemas/) tem imensos exercícios de Prolog que podem querer fazer (ty Gonçalo Nunes 😄).

  ::: details Resolução
  Exercício 1

  ```prolog
  % insere_ordenado(E, L1, L2)

  insere_ordenado(E, L1, L2) :-
    findall(X, (member(X, L1), X < E), Menores),
    findall(X, (member(X, L1), X > E), Maiores),
    append(Menores, [E|Maiores], L2).
  ```

  Exercício 2

  ```prolog
  % junta_novo_aleatorio(L1, LI, LS, L2)

  % o predicado subtract retira todas as instancias de um ou mais elementos
  % da lista argumento - subtract(L1, L_E, L2); o(s) elementos(s) a verificar
  % têm de vir sob a forma de lista

  junta_novo_aleatorio(L1, LI, LS, L2) :-
    random_between(LI, LS, E),
    \+ member(E, L1),
    insere_ordenado(E, L1, L2).
  ```

  Exercício 3

  ```prolog
  % repete_el(E, N, L)

  repete_el(E, N, L) :-
    % afirmar que L, desconhecida, tem comprimento N
    length(L, N),
    % o predicado fará com que todos os espaços vazios sejam "unificados" com E
    maplist(=(E), L).
  ```

  Exercício 4

  ```prolog
  % duplica_elementos(L1, L2)

  duplica_elementos(L1, L2) :-
    findall([E, E], member(E, L1), AuxL),
    append(AuxL, L2).
  ```

  Exercício 5

  ```prolog
  % num_occ(L, E, N)

  num_occ(L, E, N) :-
    findall(X, (member(X, L), E =:= X), AuxL),
    length(AuxL, N).
  ```

  Exercício 6

  ```prolog
  % substitui_maiores(N, Sub, L1, L2)

  substitui_maiores_N(N, Subst, L1, L2) :-
    maplist(substitui_maiores_N_aux(N, Subst), L1, L2).
  substitui_maiores_N_aux(N, Subst, El, Subst) :-
    El > N.
  substitui_maiores_N_aux(N, _, El, El) :-
    El =< N.
  ```

  :::

- [Semana 9](https://drive.google.com/file/d/1RovEx8Zcles6lAy4pJlX5bSIanLjASAF/view?usp=sharing)

- Aritmética

  ::: details Resolução

  Exercício 1

  (Tentem fazer primeiro vocês próprios e verifiquem as respostas no fim)

  a) X = 3+2.  
  b) X = 5.  
  c) true.  
  d) false.  
  e) Erro - argumentos não suficientemente instanciados.  
  f) X = 3, Y = 8.  
  g) false.  
  h) true.

  Exercício 2

  ```prolog
  % suc(N, M)

  suc(N, M) :-
    M is N + 1.

  % ant(N, M)

  ant(N, M) :-
    M is N - 1.
  ```

  Exercício 3

  ```prolog
  % perimetro(R, P)

  perimetro(R, P) :-
    P is 2 * pi * R.
  ```

  Exercício 4

  ```prolog
  % divisor(D, N)

  divisor(D, N) :-
    N mod D =:= 0.
  ```

  Exercício 5

  ```prolog
  % aplica_op(Op, V1, V2, R)
  aplica_op(+, V1, V2, R) :-
    R is V1 + V2.

  aplica_op(-, V1, V2, R) :-
    R is V1 - V2.

  aplica_op(*, V1, V2, R) :-
    R is V1 * V2.

  aplica_op(/, V1, V2, R) :-
    R is V1 / V2.

  % Solução alternativa não hardcoded:
  aplica_op(Op, V1, V2, R) :-
    Lit =.. [Op, V1, V2],
    R is Lit.
  ```

  Exercício 6

  ```prolog
  % soma_digitos_rec(N, S)

  soma_digitos_rec(0, 0).

  soma_digitos_rec(N, NewSum) :-
    AddedSum is N mod 10,
    NewN is N // 10,
    soma_digitos_rec(NewN, S),
    NewSum is S + AddedSum.

  % soma_digitos_it(N, S)

  soma_digitos_it(N, S) :-
    soma_digitos_it(N, S, 0).

  soma_digitos_it(0, Res, Res).

  soma_digitos_it(N, S, Ac) :-
    N > 0,
    NewAc is Ac + (N mod 10),
    NewN is N // 10,
    soma_digitos_it(NewN, S, NewAc).
  ```

  Exercício 7

  ```prolog
  % inverte(N, I)

  inverte(0, 0).

  inverte(N, NewI) :-
    AuxI is N mod 10,
    NewN is N // 10,
    inverte(NewN, I),
    NewI is (I * 10) + AuxI.
  ```

  Exercício 8

  ```prolog
  % triangular(N)

  triangular(N) :-
    triangular(1, 0, N).

  triangular(_, N, N) :-
    % verifica se o acumulador é igual a ele próprio (exceto zero)
    N \== 0,
    !.

  triangular(M, Ac, N) :-
    NewAc is Ac + M,
    NewAc =< N,
    NewM is M + 1,
    triangular(NewM, NewAc, N).
  ```

  :::

- Instruções de Leitura e Escrita

  ::: details Resolução

  Exercício 1

  | Objetivo                    | Termo Introduzido | Resposta             |
  | --------------------------- | ----------------- | -------------------- |
  | read(X)                     | f(a, b)           | X = f(a, b).         |
  | read(a)                     | f(a, b)           | false.               |
  | read(f(X, Y)), R is Y mod X | f(2, 8)           | X = 2, Y = 8, R = 0. |
  | X = 3, read(X + 1)          | 3 + 1             | X = 3.               |
  | X = 3, read(X + 1)          | 2 + 1             | false.               |
  | read(X + 3)                 | +(9, 3)           | X = 9.               |

  Exercício 2

  | Objetivo                    | Escrito |
  | --------------------------- | ------- |
  | X = +(2,3), write(X)        | 2+3.    |
  | X is +(2,3), write(X)       | 5.      |
  | X = 3, write(X + 1)         | 3+1.    |
  | X = 3, Y = X + 1, write(Y)  | 3+1.    |
  | X = 3, Y is X + 1, write(Y) | 4.      |

  :::

- [Semana 10](https://drive.google.com/file/d/1Q_9vVqel8UUJ9ysYq3Gawoa19X1WfQT0/view?usp=sharing)

  - [Resolução](https://swish.swi-prolog.org/p/Aula%2010.pl)
    (Esta semana não tive tempo para compilar as minhas próprias resoluções, estas são de um professor que as fez noutro ano, dos mesmos exercícios, e que julgo que estão bem).

- [Semana 11](https://drive.google.com/file/d/1xGiiyjYWocO16JyfXUZqUCjpbHxItXq4/view?usp=sharing)

- [Semana 12](https://drive.google.com/file/d/1t-EzC5lgm_SbQgIn068VWy-gL9rDdWej/view?usp=sharing)

- [Semana 13](https://drive.google.com/file/d/104wc2uUZb3cmMSJ8KKKsKuug-_3MQS_1/view?usp=sharing)
