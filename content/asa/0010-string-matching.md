---
title: String Matching
description: String Matching.
  Naive Approach.
  Rabin Karp.
  Knuth Morris Pratt.
path: /asa/string-matching
type: content
---

# String Matching

```toc

```

:::tip[Motivação]

- Identificação de padrões dentro de um texto
- Identificação de sequências de DNA semelhantes
- Deteção de cópias
- Filtros de spam

:::

:::tip[Definição do Problema]

Dado um determinado texto de tamanho $$n$$ e um padrão de tamanho $$m$$, queremos encontrar uma ocorrência do padrão dentro desse texto.

:::

## Naive Approach

- A naive approach geralmente utilizada seria algo do género:

  - Comparar o padrão com cada substring do texto e verificar se são iguais

A implementação deste algoritmo seria algo do género:

```rust
Naive(text, pattern)
  let n := length(text)
  let m := length(pattern)
  for i = 0 to n - m do
    let j := 0
    while j < m and text[i + j] == pattern[j] do
      j += 1
    if j == m then
      return i // indice a partir de qual todos os caracteres deram match
  return -1
```

Esta approach tem uma complexidade temporal de $$\Theta(nm)$$

## Rabin-Karp

O algoritmo Rabin-Karp utiliza uma rolling hash function para fazer comparações eficientes entre padrão e substrings do texto.

- Na sua essência o algoritmo funciona da seguinte forma:

  - Hash function: Dada uma hash function calculamos o hash value do padrão.

  - À medida que se percorrem as substrings do texto, calcula-se o hash value da substring e compara-se com o do padrão.

  - Se derem match então comparam-se os caracteres um a um para verificar se houve padrão encontrado, ou foi match espúrio (match por acaso)

Uma possivel implementação deste algoritmo seria algo do género:

```rust
RabinKarp(text, pattern)
  let n := length(text)
  let m := length(pattern)
  let h := hash(pattern)
  for i = 0 to m - n do
    let substring := text[i, i + n]
    if hash(substring) == h then
      if pattern == substring then
        return i
  return -1
```

A complexidade do Rabin-Karp depende da qualidade da hash function.

Uma má hash function resulta em complexidade $$O(nm)$$, semelhante a approach naive.

Uma boa hash function resulta em complexidade $$O(n + m)$$, pois evita maior parte dos matches espúrios.

A tipica hashfunction utilizada resulta da aplicação da [Regra de Horner](https://en.wikipedia.org/wiki/Horner%27s_method) em conjunto com o operador módulo (para evitar valores demasiado grandes). O número pelo qual a divisão é feita é geralmente um número primo razoavelmente grande, mas que permita efetuar todas as operacões em tempo essencialmente constante.

## Knuth-Morris-Pratt (KMP)

O KMP é um algoritmo semelhante ao naive approach, mas que evita comparações desnecessárias ao fazer um pré-processamento do padrão.

São necessárias algumas noções básicas para compreender o funcionamento deste algoritmo, como prefixos e sufixos.
Uma cadeia de caracteres de tamanho x diz-se prefixo de outra cadeia y (y > x) se os primeiros x caracteres da cadeia y coincidirem exatamente com a cadeia x.
Um sufixo é quando esta cadeia x corresponde exatamente aos últimos x caracteres da cadeia y.


O pré-processamento consiste em analisar o padrão e ver que parte do padrão é que podem ser reutilizadas na próxima comparação caso haja um mismatch de caracteres, o que evita comparações repetidas que já se sabem dar match.

A função de pré-processamento essencialmente preenche uma tabela com um número associado a cada caracter do padrão. Este número representa a posição de onde podemos recomeçar as comparações, devido às anteriores já estarem corretamente comparadas.
O algoritmo pode efetuar isto pois a forma de calcular estes números é encontrar o maior prefixo do padrão que também é sufixo.

- O algoritmo consiste em:

  - Pré-processamento, ao calcular a função de prefixos: $$O(m)$$.

  - Aplicação do KMP-Matcher: $$O(n + m)$$.

Complexidade global: $$O(n + m)$$.
