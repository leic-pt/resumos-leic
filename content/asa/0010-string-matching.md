---
title: String Matching
description: String Matching.
  Naive Approach.
  Automatos finitos.
  Rabin Karp.
  Knuth Morris Pratt.
path: /asa/string-matching
type: content
---

# String Matching

```toc

```

:::tip[Motivação]

- Identificacao de padroes dentro de um texto
- Identificacao de sequencias de DNA semelhantes
- Detecao de copias
- Filtros de spam

:::

:::tip[Definicao do Problema]

Dado um determinado texto de tamanho $$n$$ e um padrao de tamanho $$m$$, queremos encontrar uma ocorrencia do padrao dentro desse texto

:::

## Naive Approach

- A naive approach geralmente utilizada seria algo do genero:

  - Comparar o padrao com cada substring do texto e verificar se sao iguais

A implementacao deste algoritmo seria algo do genero:

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

O algoritmo Rabin-Karp utiliza uma rolling hash function para fazer comparacoes eficientes entre padrao e substrings do texto.

- Na sua essencia o algoritmo funciona da seguinte forma:

  - Hash function: Dada uma hash function calculamos o hash value do padrao.

  - A medida que se percorrem as substrings do texto, calcula-se o hash value da substring e compara-se com o do padrao.

  - Se derem match entao comparam-se os caracteres um a um para verificar se houve padrao encontrado, ou foi match espurio (match por acaso)

Uma possivel implementacao deste algoritmo seria algo do genero:

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

Uma ma hash function resulta em complexidade $$O(nm)$$, semelhante a approach naive.

Uma boa hash function resulta em complexidade $$O(n + m)$$, pois evita maior parte dos matches espurios.

A tipica hashfunction utilizada resulta da aplicacao da [Regra de Horner](https://en.wikipedia.org/wiki/Horner%27s_method) em conjunto com o operador modulo (para evitar numeros demasiado grandes). O numero pelo qual a divisao e feita e geralmente um numero primo razoavelmente grande, mas que permita efetuar todas as operacoes em tempo essencialmente constante.

## Knuth-Morris-Pratt (KMP)

O KMP e um algoritmo semelhante ao naive approach, mas que evita comparacoes desnecessarias ao fazer um pre-processamento do padrao.

O pre-processamento consiste em analisar o padrao e ver que parte do padrao e que podem ser reutilizadas na proxima comparacao caso haja um mismatch de caracteres, o que evita comparacoes repitidas que ja se sabem dar match.

- O algoritmo consiste em:

  - Pre-processamento, ao calcular a funcao de prefixos: $$O(m)$$.

  - Aplicacao do KMP-Matcher: $$O(n + m)$$.

Complexidade global: $$O(n + m)$$.
