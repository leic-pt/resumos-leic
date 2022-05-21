---
title: Procura Informada
description: Algoritmos de Procura Informada.
  Função Heurística.
  Procura Gananciosa.
  Procura A*.
  Procura IDA*.
  Procura Melhor Primeiro Recursiva.
  Heurísticas.
path: /ia/procura-informada
type: content
---

# Procura Informada

```toc

```

Na [última secção](/ia/procura-cega) abordámos a procura cega, uma abordagem que explora
todo o espaço de procura sem qualquer indicação do quão longe se encontra dos nós-objetivo.
Ora, mas caso saibamos de antemão informações úteis sobre o objetivo, fará todo o sentido
usá-las a nosso favor, por forma a conseguir (idealmente) procuras mais eficientes.
É aqui que entram as estratégias de **procura informada**, abordagens que, de um modo geral,
baseiam-se na [**procura melhor primeiro**](color:green), uma estratégia de procura que recorre a uma
função de avaliação, $f(n)$, para escolher a ordem de expansão dos nós.

A função de avaliação é modelada como uma estimativa do custo entre um nó, $n$, e o objetivo.
Por norma, poderá ser constituída por algumas componentes principais (correspondendo à soma/composição/... destas):

- $g(n)$, o custo do caminho percorrido desde o estado inicial até $n$;
- $h(n)$, uma [**estimativa**](color:green) do custo do melhor caminho desde $n$ até ao objetivo;
- $h^*(n)$, o [**custo real**](color:orange) do melhor caminho desde $n$ até ao objetivo.

Dizemos que $h(n)$ é uma **função heurística**.

:::info[Função Heurística]

Uma função heurística [**estima**](color:green) o quão perto um dado estado está do nó objetivo mais próximo:
podemos pensar nela como uma espécie de detetor de metais, que apita cada vez mais alto à
medida que nos aproximamos de um objetivo. Não está diretamente associada ao algoritmo de
procura que estamos a usar - apenas refere se estamos perto ou não do objetivo, o algoritmo
é que depois há de ter o trabalho de saber o que fazer com essa informação.

Note-se que acima foi utilizada a palavra [**estimativa**](color:green): funções heurísticas
não são necessariamente representações fiéis do custo real de um nó ao objetivo, mas sim
aproximações que fazemos, [sempre por baixo](/ia/nao-me-posso-esquecer-de-linkar-isto) do mesmo.

**Se estivermos num nó objetivo**, a função heurística deve ser nula ($h(n) = 0$, portanto).

:::

![Heurística - Exemplo Árvore](imgs/0003-heuristica-arvore.svg#dark=3)

Funções heurísticas ajudam-nos, portanto, a decidir que caminho tomar (ou seja, que nó escolher),
procurando minimizar os custos até ao objetivo.

## Procura Melhor Primeiro (Genérica)

Tal como referido mais acima, a procura melhor primeiro corresponde a uma estratégia baseia-se
na ideia de **função de avaliação**, que mapeia cada nó a uma estimativa: o quão perto estará
do objetivo mais próximo. Seguindo esta abordagem, vamos sempre tentar expandir o nó com o menor
valor de $f(n)$ na fronteira, já que idealmente será esse nó que nos aproximará de
forma ótima do objetivo (com algumas exceções, que vamos ver mais à frente). A fronteira em si
tem os nós ordenadados de forma crescente (através de uma _priority queue_) segundo a respetiva
função de avaliação.

Se pensarmos bem, acaba por ter uma lógica igual à da [procura custo uniforme](/ia/procura-cega#procura-de-custo-uniforme),
onde aqui $f$ corresponde ao custo do caminho percorrido nessa procura: podemos, portanto,
recorrendo à notação $g$ exposta mais acima, afirmar que na procura custo uniforme temos

$$
f(n) = g(n).
$$

Isto é, na procura custo uniforme, a função de avaliação foca-se exclusivamente no caminho percorrido
até agora, sem se preocupar com o caminho para a frente - se pensarmos bem, faz então sentido
que se encaixe nas procuras cegas, já que de facto não há informação útil que usemos sobre o
objetivo: apenas sabemos coisas sobre o que está para trás.

<!-- TODO: maybe adicionar pseudocódigo depois? não sei o quão útil será -->

## Procura Gananciosa

## Procura A$^*$

## Procura IDA$^*$

## Procura Melhor Primeiro Recursiva (RBFS)

---

Adicionamos que esta secção corresponde ao terceiro capítulo do livro que acompanha a cadeira
(_Solving Problems by Searching_), sub-secções 3.5 e 3.6.
