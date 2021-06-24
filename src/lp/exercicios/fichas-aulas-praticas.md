---
description: Repositório das fichas das aulas práticas de LP + resoluções.
---

# Exercícios de LP

## Material Útil

- [Livro de Exercícios](https://drive.google.com/file/d/1TnTYnaNwd5IKWs_DgCcmPjGJcUfuchK2/view?usp=sharing)

- [Dump Avaliações by Rafael Girão](https://s.rafael.ovh/dumpavaliacoes) - repositório de avaliações semanais passadas, por favor contribuam. **Entrem com o email do IST.**

## Fichas Aulas Práticas

::: tip

Para além dos exercícios das aulas práticas, o livro de exercícios indicado acima tem uma coleção de exercícios bastante vasta. Se quiserem treinar e estar ainda melhor preparados, aconselho vivamente a que dêem uma vista de olhos!

:::

- [Semana 1 (Lógica Proposicional $I$ )](https://drive.google.com/file/d/1hTp2IvH3uJ7rOfcnMvxWoA6ULzVD8q2t/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1LAR2DoqgrCfr2BtedGrhuQ2P1O6N-Jq3/view?usp=sharing)

- [Semana 2 (Lógica Proposicional $II$ )](https://drive.google.com/file/d/1M6lKs04JQcH-08As-ojF_vBiBul6VmKZ/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1LGRomhscW637ng_THnhGTOFPYS6N3Cb3/view?usp=sharing)

- [Semana 3 (Lógica de Primeira Ordem $I$ )](https://drive.google.com/file/d/1vbdUILHoIY9I7nt1VwVCbTdBZYMT8T5H/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1MHMXpa-cB6yKKI12uNldEOm9LsuHpo2T/view?usp=sharing)

- [Semana 4 (Lógica de Primeira Ordem $II$ )](https://drive.google.com/file/d/1mEbur70-2TbuVxMkIPmq4S0ADApP9Jis/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1Oz-I9sp7arjDGHixjCNzU-Vn3mmu-72-/view?usp=sharing)

- [Semana 5 (Programação em Lógica)](https://drive.google.com/file/d/1u18nl2kB7YcMqz4--XNOLkN1u1eJFUn6/view?usp=sharing)

  - [Resolução](https://drive.google.com/file/d/1R77x8ghgq102edZtsi6-50H7Fn7sykmO/view?usp=sharing)

- [Semana 6 (Prolog - Conceitos Gerais/Árvores SLD em Prolog)](https://drive.google.com/file/d/1s59jQGSErL69dXC_6R7E1YPMzcB-Tzc2/view?usp=sharing)

  - [Resolução do Ex. 7.2.3](https://drive.google.com/file/d/12PS2eMpoM0Lu1v238mngn6HF-BPzkBkd/view?usp=sharing)

- [Semana 7 (Prolog - Listas $I$ )](https://drive.google.com/file/d/1OdnfTgMvX2SqIgvT4wpmQNP2vcm2h7CM/view?usp=sharing)

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

- [Semana 8 (Prolog - Listas $II$ )](https://drive.google.com/file/d/1uYeclFgMh-BH_J8UVDFQ2iIpEnyxBvW4/view?usp=sharing)

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

- [Semana 9 (Prolog - Aritmética, I/O)](https://drive.google.com/file/d/1RovEx8Zcles6lAy4pJlX5bSIanLjASAF/view?usp=sharing)

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

- [Semana 10 (Prolog - Corte e Negação)](https://drive.google.com/file/d/1Q_9vVqel8UUJ9ysYq3Gawoa19X1WfQT0/view?usp=sharing)

  - [Resolução](https://swish.swi-prolog.org/p/Aula%2010.pl)

  ::: details Resolução

  7.11.1

  ```prolog
  a) Respostas ao objectivo p(X,Y)
  X=1, Y=a
  X=1, Y=b
  X=2,Y=a
  X=2,Y=b
  X=5, Y=z

  b) " " " mas com !
  X=1, Y=a
  X=1, Y=b
  X=2,Y=a
  X=2,Y=b

  c) " " " mas com ! depois do q(X)
  X=1, Y=a
  X=1, Y=b

  d) " " " mas com ! depois do r(Y)
  X=1, Y=a
  ```

  7.11.2

  ```prolog
  a) Resposta ao objectivo p(X,Y)
  X=2,Y=3
  X=1, Y=1
  X=1, Y=3
  X=2,Y=1
  X=2,Y=3
  X=3,Y=1
  X=3,Y=3

  b)
  p1(2,3) :- !.

  c)
  q1(1) :- !.

  d)
  q1(1) :- !.
  (...)
  r1(1) :- !.

  e)
  q1(2) :- !.
  ```

  7.11.3

  ```prolog
  classe(0, zero) :- !.
  classe(N, positivo) :- N > 0, !.
  classe(N, negativo) :- N < 0.
  ```

  7.13.4

  ```prolog
  pertence(E, [P|_]) :- E == P.
  pertence(E, [_|R]) :- pertence(E, R).

  intersecao1(L1, L2, I) :- intersecao(L1, L2, [], I).
  intersecao([], _, Acu, Acu):-!.
  intersecao([P|R], L2, Acu, I) :-
      pertence(P, L2) -> append(Acu, [P], Novo_acu), intersecao(R, L2, Novo_acu, I)
      ; intersecao(R, L2, Acu, I).

  intersecao(_,[],[]):- !.
  intersecao(L1,[P|L2],I):-
      \+ member(P,L1),!,
  intersecao(L1,L2,I).
  intersecao(L1,[P|L2],[P|I]):-
      intersecao(L1,L2,I).

  intersecao2([], _, []) :- !.
  intersecao2(_, [], []) :- !.
  intersecao2([P | R], L, [P | IRL]) :-
      membro(P, L),
      !,
      intersecao(R, L, IRL).
  intersecao2([P | R], L, IRL) :-
      \+ membro(P, L),
      intersecao(R, L, IRL).
  ```

  7.13.5

  ```prolog
  disjuntas([], _) :- !.
  disjuntas(_, []) :- !.
  disjuntas([El | _], L2) :-
      member(El, L2), !,
      fail.
  disjuntas([_ | L1], L2) :-
      disjuntas(L1, L2).

  %Usando a negação.
  disjuntas_n([],_):-!.
  disjuntas_n([P|L1], L2) :-
      \+member(P, L2),
      disjuntas_n(L1, L2).

  disjuntas2(L1,L2) :-
      \+ (member(E,L1),member(E,L2)).
  ```

  7.13.6

  ```prolog
  a) false.
  b) [Objetivo: pessoa(P), \+temJust(P, _). ]
     P = jaime;
     P = joana.
  ```

  :::

- [Semana 11 (Lógica Proposicional $I$ - Tabelas de verdade)](https://drive.google.com/file/d/1xGiiyjYWocO16JyfXUZqUCjpbHxItXq4/view?usp=sharing)

  ::: details Resolução

  2.3.1

  A afirmação A torna a afirmação incorreta. Temos que $\Delta$, um conjunto de cláusulas, é satisfazível se houver uma interpretação que satisfaça _todas_ as suas _fbfs_. Não precisamos que não satisfaça nenhuma em nenhum caso, apenas que, para qualquer interpretação, haja sempre uma _fbf_ falsa segundo a mesma. Assim sendo, B é uma afirmação que faz sentido, visto que, de facto, $\alpha_1 \wedge \alpha_2 \wedge \alpha_3$ apenas precisa de uma falsa para ser toda falsa. Além disso, a afirmação C também faz sentido neste contexto, pois caso $\Delta$ seja satisfazível não podemos dizer que a negação de uma das suas _fbfs_ é consequência semântica das outras.

  2.3.2

  (As resoluções em si estão marcadas como spoiler)

  a) Sempre Falsa

  > Uma _fbf_ tautológica é verdadeira para qualquer interpretação, o que vai diretamente contra a definição de _fbf_ falsificável (falsa para pelo menos uma interpretação).

  b) Possivelmente Verdadeira

  > Não é certo que toda a _fbf_ satisfazível seja falsificável (nem vice-versa), mas é possível que aconteça.

  c) Sempre falsa

  > Uma _fbf_ contrária é falsa para qualquer interpretação, indo diretamente contra a definição de _fbf_ satisfazível (verdadeira para pelo menos uma intepretação).

  d) Sempre Verdadeira

  > Uma _fbf_ tem de ser ou falsa ou verdadeira para uma dada interpretação, pelo que terá sempre de ser ou falsificável ou satisfazível.

  e) Possivelmente Verdadeira

  > Pode acontecer ser tautológica ou contraditória, mas não tem de acontecer sempre.

  2.3.3

  Neste tipo de exercícios podemos optar por procurar _modelos_ de $\Delta$ que não satisfaçam a _fbf_ em causa.  
  Aqui, querendo $P \to R$ falsa (para ajudar na prova que não é consequência semântica) só temos um caminho por onde ir - $I(P) = V$ e $I(R) = F$. Agora resta escolher uma interpretação para $Q$ tal que $Q \to R$ seja verdadeira, pois assim a _fbf_ de $\Delta$ seria verdadeira segundo esta interpretação mas $P \to R$ não - para tal, escolhemos $I(Q) = F$. Temos, portanto, que a interpretação $I(P) = V, I(Q) = F, I(R) = F$ é um modelo de $\Delta$ que não satisfaz $P \to R$, e $P \to R$ não é, portanto, consequência semântica de $\Delta$.

  2.3.4

  a)

  | Interpretação | $P$ | $Q$ | $\neg P$ | $\neg P \to Q$ | $\neg Q$ |
  | ------------- | --- | --- | -------- | -------------- | -------- |
  | $I_1$         | V   | V   | F        | V              | F        |
  | $I_2$         | V   | F   | F        | V              | V        |
  | $I_3$         | F   | V   | V        | V              | F        |
  | $I_4$         | F   | F   | V        | F              | V        |

  Esta _fbf_ só tem, portanto, um modelo ($I_2$), para o qual a única _fbf_ atómica que é sua consequência semântica é $P$ (é a _fbf_ atómica verdadeira segundo esta interpretação).

  b)

  | Interpretação | $P$ | $Q$ | $R$ | $(P \wedge Q) \to R$ | $\neg R$ |
  | ------------- | --- | --- | --- | -------------------- | -------- |
  | $I_1$         | V   | V   | V   | V                    | F        |
  | $I_2$         | V   | V   | F   | F                    | V        |
  | $I_3$         | V   | F   | V   | V                    | F        |
  | $I_4$         | V   | F   | F   | V                    | V        |
  | $I_5$         | F   | V   | V   | V                    | F        |
  | $I_6$         | F   | V   | F   | V                    | V        |
  | $I_7$         | F   | F   | V   | V                    | F        |
  | $I_8$         | F   | F   | F   | V                    | V        |

  Esta _fbf_ tem, portanto, apenas um modelo, $I_4$ (interpretação para a qual ambas as _fbfs_ do conjunto são verdadeiras). A partir desse modelo, podemos aferir que apenas $P$ é uma _fbf_ atómica que é consequência semântica do conjunto.

  c)

  | Interpretação | $P$ | $Q$ | $R$ | $P \to R$ | $Q \to R$ | $P \vee Q$ |
  | ------------- | --- | --- | --- | --------- | --------- | ---------- |
  | $I_1$         | V   | V   | V   | V         | V         | V          |
  | $I_2$         | V   | V   | F   | F         | F         | V          |
  | $I_3$         | V   | F   | V   | V         | V         | V          |
  | $I_4$         | V   | F   | F   | F         | V         | V          |
  | $I_5$         | F   | V   | V   | V         | V         | V          |
  | $I_6$         | F   | V   | F   | V         | F         | V          |
  | $I_7$         | F   | F   | V   | V         | V         | F          |
  | $I_8$         | F   | F   | F   | V         | V         | F          |

  Esta _fbf_ tem, portanto, 3 modelos: $I_1, I_3, I_5$, interpretações para as quais as 3 _fbfs_ do conjunto são verdadeiras. Podemos, a partir delas, aferir que apenas $R$ é uma _fbf_ atómica consequência semântica do conjunto, visto que é a única que se mantém constantemente verdadeira segundo os 3 modelos.

  2.3.5

  | $P$ | $Q$ | $R$ | $(P \wedge Q) \to R$ | $P \to R$ | $Q \to R$ | $((P \wedge Q) \to R) \to ((P \to R) \vee (Q \to R))$ |
  | --- | --- | --- | -------------------- | --------- | --------- | ----------------------------------------------------- |
  | V   | V   | V   | V                    | V         | V         | V                                                     |
  | V   | V   | F   | F                    | F         | F         | V                                                     |
  | V   | F   | V   | V                    | V         | V         | V                                                     |
  | V   | F   | F   | V                    | F         | V         | V                                                     |
  | F   | V   | V   | V                    | V         | V         | V                                                     |
  | F   | V   | F   | V                    | V         | V         | V                                                     |
  | F   | F   | V   | V                    | V         | V         | V                                                     |
  | F   | F   | F   | V                    | V         | V         | V                                                     |

  A _fbf_ é verdadeira segundo qualquer interpretação, pelo que podemos afirmar que esta é tautológica.

  2.3.6

  | Interpretação | $P$ | $Q$ | $R$ | $P \to R$ | $Q \to R$ | $P \vee Q$ | $(P \vee Q) \to R$ |
  | ------------- | --- | --- | --- | --------- | --------- | ---------- | ------------------ |
  | $I_1$         | V   | V   | V   | V         | V         | V          | V                  |
  | $I_2$         | V   | V   | F   | F         |           |            |                    |
  | $I_3$         | V   | F   | V   | V         | V         | V          | V                  |
  | $I_4$         | V   | F   | F   | F         |           |            |                    |
  | $I_5$         | F   | V   | V   | V         | V         | V          | V                  |
  | $I_6$         | F   | V   | F   | V         | F         |            |                    |
  | $I_7$         | F   | F   | V   | V         | V         | F          | V                  |
  | $I_8$         | F   | F   | F   | V         | V         | F          | V                  |

  (De notar que só foram marcados os espaços necessários, os outros não foram necessários porque é possível chegar à conclusão que a interpretação em questão não será modelo do conjunto, visto que uma das suas _fbfs_ já foi aferida como falsa segundo essa interpretação)

  Podemos notar que, para todos os modelos do conjunto, $(P \vee Q) \to R$ é verdadeira, pelo que é consequência semântica do conjunto.

  2.3.7

  Se $\Delta$ não for satisfazível, não tem modelos, pelo que não há nenhum modelo de $\Delta$ que não satisfaça $\alpha$.

  :::

- [Semana 12 (Lógica Proposicional $II$ - OBDDs)](https://drive.google.com/file/d/1t-EzC5lgm_SbQgIn068VWy-gL9rDdWej/view?usp=sharing)

- [Semana 13 (Lógica Proposicional $II$ - Algoritmos de SAT)](https://drive.google.com/file/d/104wc2uUZb3cmMSJ8KKKsKuug-_3MQS_1/view?usp=sharing)
