---
title: Introdução à Análise de Algoritmos
description: Análise de Algoritmos. Crescimento de Funções. Notação Assimptótica.
path: /iaed/introducao-algoritmos
---

# Introdução à Análise de Algoritmos

```toc

```

## Análise de Algoritmos

### Algoritmo

- Procedimento computacional bem definido que aceita
  uma dada entrada e produz uma dada saída
  - Ferramenta para resolver um problema computacional bem
    definido
    - Cálcular a média de um conjunto de valores
    - Ordenação de sequências de valores
    - Caminhos mais curtos em grafos orientados
    - etc

<<< @/src/iaed/assets/0008-masc.c

### Eficiência

- Medidas de eficiência & complexidade

  - TEMPO
  - ESPAÇO

  Nem todos os algoritmos têm a mesma rapidez e usam o mesmo espaço.

  E não existe o "melhor" algoritmo.

  Existem algoritmos melhores para ordenar quantidades grandes de elementos, mas que são piores para ordenar pequenas quantidades de elementos.

## Crescimento de Funções

### Padrões tipícos:

$$ 1 $$
Se o número de instruções de um programa for
executado um número limitado/constante de vezes

$$ log{} N $$
Tempo de execução é logarítmico quando se divide
continuamente o input ao meio (e.g. binary search)

$$ N $$
Tempo de execução de um programa é linear
quando existe algum processamento para
cada elemento de entrada

$$ N log{} N $$
Tipicamente, quando um problema é resolvido através
da resolução de um conjunto de sub-problemas, e
combinando posteriormente as suas soluções

$$ N^2 $$
Tempo de execução de um programa é quadrático;
quando a dimensão da entrada duplica, o tempo
aumenta 4x

$$ 2^N $$

Tempo de execução de um programa é exponencial;
quando a dimensão da entrada duplica, o tempo
aumenta para o quadrado!

### Exemplo

Assim vemos que a primeira função é quadrática porque executa `strlen(s)` todas as vezes que lê a condição e executa o corpo do `for`

E vemos que a segunda função é linear porque executa apenas o corpo do `for`

<<< @/src/iaed/assets/0008-masc.c

### Análise de Algoritmos

- O Pior Caso

  - Representa um limite superior no tempo de execução
    - Ocorre numerosas vezes
  - O valor médio é muitas vezes próximo do pior caso
  - É, geralmente, mais fácil de calcular
  - Evita surpresas!

- O Melhor Caso

- O Caso Médio

  - Importante em algoritmos probabilísticos
  - É necessário saber a distribuição dos problemas

## Notação Assimptótica

- A notação assimptótica permite estabelecer taxas de
  crescimento dos tempo de execução dos algoritmos
  em função dos tamanhos das entradas

- Constantes multiplicativas e aditivas tornam-se
  irrelevantes
  - E.g. tempo de execução de cada instrução não é essencial
    para o comportamento assimptótico de um algoritmo

### Limite Assimptótico Superior (O)

- Notação O (Ó grande): Limite Assimptótico Superior
- Permite aferir a complexidade no pior caso

### Limite Assimptótico Inferior (Ω)

- Notação Ω (ómega): Limite Assimptótico Inferior
- Permite aferir a complexidade no melhor caso

Podemos encontrar o melhor caso na primeira entrada, ou o pior no caso de ser a última. \
No exemplo de procurar um vetor, Ω (1) e O(N).

### Limite Assimptótico Apertado (Θ)

- Notação Θ: Limite Assimptótico Apertado
- Uma função f (n) diz-se Θ(g(n)) se e só se f (n) for O(g(n)) e Ω(g(n))

Por outras palavras é quando o melhor caso e o pior caso têm a mesma complexidade.\
Para lermos todas as entradas de um vetor, o melhor caso e o pior caso são os mesmos. Θ(N)

### Exercícios

- Se um algoritmo é $O(N^2)$ então também é $O(N^3)$.\
  Verdadeiro

- Se o tempo de execução de um algoritmo, no pior caso,
  escala com $3O(N^2)$ então é $O(N^2)$ .\
  Verdadeiro

- O tempo de execução do algoritmo G, escala com $2N^3+N$
  no pior caso e, no melhor caso, apenas com $N^3$.\
  Logo, G é Θ($N^3$).\
  Verdadeiro

Existem exemplos de exercícos de exame que se encontram no final do slide desta aula!

Slides:

- [Aula 8](https://drive.google.com/file/d/1ETqWl7mll9ljHI_8ix1Il30VKcIXGsmX/view?usp=sharing)
