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

Na [última secção](/ia/procura-cega) abordámos a procura cega, uma abordagem que explora
todo o espaço de procura sem qualquer indicação do quão longe se encontra dos nós-objetivo.
Ora, mas caso saibamos de antemão informações úteis sobre o objetivo, fará todo o sentido
usá-las a nosso favor, por forma a conseguir (idealmente) procuras mais eficientes.
É aqui que entram as estratégias de **procura informada**, abordagens que, de um modo geral,
baseiam-se na [**procura melhor primeiro**](color:green), uma estratégia de procura em árvore
(ou grafo) que recorre a uma função de avaliação, $f(n)$, para escolher a ordem de expansão dos nós.

A função de avaliação é modelada como uma estimativa do custo entre um nó, $n$, e o objetivo.
Por norma, é constituída por algumas componentes principais:

- $g(n)$, o custo do caminho percorrido desde o estado inicial até $n$;
- $h(n)$, uma estimativa do custo do melhor caminho desde $n$ até um objetivo;
- $h^*(n)$, o **custo real** do melhor caminho desde $n$ até o objetivo.

Dizemos que $h(n)$ é uma **função heurística**.

:::info[Função Heurística]

Uma função heurística [**estima**](color:green) o quão perto um dado estado está do nó objetivo mais próximo:
podemos pensar nela como uma espécie de detetor de metais, que apita cada vez mais alto à
medida que nos aproximamos de um objetivo. Não está diretamente associada ao algoritmo de
procura que estamos a usar - apenas refere se estamos perto ou não do objetivo, o algoritmo
é que depois há de ter o trabalho de saber o que fazer com essa informação.

Note-se que acima foi utilizada a palavra [**estimativa**](color:green): funções heurísticas
não são necessariamente representações fiéis do custo real de um nó ao objetivo, mas sim
aproximações que fazemos, [sempre por baixo](/ia/depois-adiciono) do mesmo.

**Se estivermos num nó objetivo**, a função heurística deve ser nula ($h(n) = 0$, portanto).

:::

![Heurística - Exemplo Árvore](imgs/0003-heuristica-arvore.svg#dark=2)

Funções heurísticas ajudam-nos, portanto, a decidir que caminho tomar (ou seja, que nó escolher),
procurando minimizar os custos até ao objetivo.

## Procura Melhor Primeiro (Genérica)

cenaas

---

Adicionamos que esta secção corresponde ao terceiro capítulo do livro que acompanha a cadeira
(_Solving Problems by Searching_), sub-secções 3.5 e 3.6.
