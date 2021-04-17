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

  _work in progress_

  :::

- [Semana 8](https://drive.google.com/file/d/1uYeclFgMh-BH_J8UVDFQ2iIpEnyxBvW4/view?usp=sharing)

- [Semana 9](https://drive.google.com/file/d/1RovEx8Zcles6lAy4pJlX5bSIanLjASAF/view?usp=sharing)

- [Semana 10](https://drive.google.com/file/d/1Q_9vVqel8UUJ9ysYq3Gawoa19X1WfQT0/view?usp=sharing)

- [Semana 11](https://drive.google.com/file/d/1xGiiyjYWocO16JyfXUZqUCjpbHxItXq4/view?usp=sharing)

- [Semana 12](https://drive.google.com/file/d/1t-EzC5lgm_SbQgIn068VWy-gL9rDdWej/view?usp=sharing)

- [Semana 13](https://drive.google.com/file/d/104wc2uUZb3cmMSJ8KKKsKuug-_3MQS_1/view?usp=sharing)
