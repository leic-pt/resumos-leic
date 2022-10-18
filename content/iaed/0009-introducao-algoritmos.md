---
title: Introdução à Análise de Algoritmos
description: Análise de Algoritmos. Crescimento de Funções. Notação Assimptótica.
path: /iaed/introducao-algoritmos
type: content
---

# Introdução à Análise de Algoritmos

```toc

```

## Análise de Algoritmos

:::info[]
Por algoritmo depreendemos um **procedimento computacional bem definido**, que aceita uma dada entrada e produz uma dada saída. Corresponde, portanto, a uma ferramenta que permite resolver um problema computacional bem definido, seja ele calcular uma média, ordenar um vector, entre outros.
:::

Uma das principais preocupações que vamos ter em IAED (para passar os malfadados testes com [_time limit exceeded_](color:yellow)) é **como reduzir o _runtime_ do nosso programa**. Durante esta secção, vamos procurar arranjar maneiras de defini-lo (usando **notação assintótica**) em função do tamanho do _input_ que usamos. Ainda assim, e antes de começar com definições mais teóricas, podemos pensar em pontos fracos habituais de programas que podemos melhorar.

Observemos o trecho de código abaixo: temos duas funções que fazem exatamente o mesmo: transformam toda uma cadeia de caracteres na sua versão _lower case_. Diferem na **condição de ciclo do seu loop**. Na função de acima, `strlen(s)` é calculada em todas as iterações: sendo que a implementação da mesma consiste em [**iterar pela string até ao fim**](color:red), podemos perceber como tal poderá levar a maiores tempos de execução da mesma. A função de baixa é inegavelmente mais eficiente (podem experimentar correr ambos os trechos localmente para testarem vocês mesmos), e a única diferença é guardar o comprimento da string numa variável, efetivamente eliminando cálculos desnecessários!

`embed:assets/0008-maiusculas-minusculas.c`

:::tip[Eficiência]

Podemos medir a eficiência/complexidade dos nossos programas em relação ao [**tempo**](color:green) e ao [**espaço**](color:orange) que gastam: nem todos os algoritmos têm a mesma rapidez temporal, e nem todos os algoritmos usam a mesma "_quantidade espacial_" de memória!

:::

## Crescimento de Funções

A **complexidade** de um algoritmo, seja ela temporal ou espacial, está associada a um _crescimento_ da função que a define (em função do seu input). As funções de crescimento com que mais tipicamente nos vamos deparar serão:

[**$1$**](color:red) - O número de instruções de um programa/o espaço ocupado por um programa é um número constante e/ou limitado.

[**$\log{n}$**](color:red) - O número de instruções de um programa/o espaço ocupado por um programa é logarítmico: dividimos continuamente o input ao meio (como na pesquisa binária, por exemplo).

[**$n$**](color:red) - O número de instruções de um programa/o espaço ocupado por um programa é linear: existe algum tipo de processamento para cada elemento de entrada.

[**$n\log{n}$**](color:red) - O número de instruções de um programa/o espaço ocupado por um programa está associado, tipicamente, à resolução de um conjunto de sub-problemas. As sub-soluções são por norma posteriormente combinadas (temos o exemplo do _merge sort_, que vamos abordar no futuro, como exemplo clássico).

[**$n^2$**](color:red) - O número de instruções de um programa/o espaço ocupado por um programa é quadrático. Quando a dimensão da entrada duplica, o tempo aumenta em 4 vezes.

[**$2^n$**](color:red) - O número de instruções de um programa/o espaço ocupado por um programa é exponencial. Quando a dimensão da entrada duplica, o tempo aumenta para o quadrado!

Pegando novamente no exemplo indicado mais acima, podemos finalmente perceber (em termos mais formais) o que está a acontecer: o trecho de cima tem complexidade temporal quadrática, já que `strlen(s)`, uma operação linear, é executada uma vez por cada iteração do `for`, linear também. O trecho de baixo é, claro, linear!

`embed:assets/0008-maiusculas-minusculas.c`

:::info[Análise de Algoritmos]
Ao analisar algoritmos, costumamos sempre pensar no **pior caso** dos mesmos: deste modo, pensamos no [**limite superior**](color:red) do tempo de execução dos mesmos, o que nos vai permitir evitar surpresas desagradáveis no futuro. Podemos, contudo, calcular o **melhor caso** e o **caso médio** de problemas, que também têm a sua utilidade em diversas situações.
:::

## Notação Assimptótica

A notação assimptótica permite estabelecer taxas de crescimento dos tempo de execução dos algoritmos em função dos tamanhos das entradas (_input_). Aqui, as constantes multiplicativas e aditivas são irrelevantes: tanto um algoritmo que leva $n$ a correr como um que leva $4n$ a correr são lineares - perde-se o rigor, mas este acaba por não ser relevante para determinar o comportamento assimptótico do algoritmo.

- A notação $O$ (Ó grande) corresponde ao [**limite assimptótico superior**](color:purple). Permite aferir a complexidade no pior caso.
- A notação $\Omega$ (Ómega) corresponde ao [**limite assimptótico inferior**](color:orange). Permite aferir a complexidade no melhor caso.
- A notação $\Theta$ (Téta) corresponde ao [**limite assimptótico apertado**](color:green). Corresponde às situações em que os melhor e pior casos têm a mesma complexidade.

Transpondo estas definições para exemplos práticos, podemos pensar nos problemas de pesquisa de elementos num vetor vs imprimir todos os valores presentes num vetor.

O primeiro problema tem melhor caso $1$, constante, caso o valor a procurar se encontre logo na primeira posição/o vetor esteja vazio: $\Omega(1)$. Tem, por outro lado, $O(n)$ como pior caso, já que pode ser preciso percorrer o vetor todo para o fazer. O segundo problema, contudo, tem melhor e pior casos com igual número de operações, linear: não podemos imprimir todos os valores de um vetor sem o percorrer completamente, $\Theta(n)$.
