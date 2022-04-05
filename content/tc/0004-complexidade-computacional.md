---
title: Complexidade Computacional
description: 'Complexidade Computacional'
path: /tc/complexidade-computacional
type: content
---

# Complexidade Computacional

```toc

```

A computação é uma tarefa que consome recursos.
Os recursos que mais usualmente são considerados são o tempo (a duração da computação) e o espaço (uma medida da informação que é armazenada/consumida durante a computação), mas também é possível considerar outras quantidades, como a energia (necessária para executar a computação).  
A complexidade computacional consiste no estudo dos recursos necessários para resolver um problema.

Podemos calcular a eficiência de uma máquina de Turing (que seja um classificador) relativamente ao tempo e ao espaço, de forma relativamente simples, se tomarmos o número de passos de cada computação como uma medida do tempo, e o número de células de memória lidas/escritas ao longo de cada computação como uma medida de espaço.

:::tip[Definição]

Para uma máquina classificadora $M$ definimos as funções $time_M, space_M : \mathbb{N} \to \mathbb{N}$ da seguinte forma:

- $time_M(n)$ é o comprimento máximo - ou seja, o número de passos máximo - de uma computaçao de $M$ sobre um input $\omega$ com $|\omega| \leq n$;
- $space_M(n)$ é o número máximo de células de memória lidas/escritas durante uma computação de $M$ sobre um input $\omega$ com $|\omega| \leq n$.

:::

Para cada $n \in \mathbb{N}$, $time_M(n)$ e $space_M(n)$ dão-nos uma avaliação do pior caso, em termos de duração da computação ou da quantidade de memória necessária, respectivamente, para processar inputs de tamanho limitado por $n$.  
Mais do que a expressão exacta das funções $time_M$ e $space_M$ associadas a um classificador $M$, estamos interessados em avaliar o seu crescimento. Por essa razão é usual usar notação assintótica, nomeadamente a notação $O$ [como visto em cadeiras anteriores](/iaed/introducao-algoritmos#limite-assimpt%C3%B3tico-superior-o) como IAED ou ASA).

### Classes de Complexidade

Agrupamos problemas, de acordo com a sua dificuldade relativa, em classes de complexidade.

:::tip[Definição]

Seja $f : \mathbb{N} \to \mathbb{R}_0^+$ uma funçao. Definiem-se as seguintes classes de linguagens:

- $\mathbf{TIME}(f(n)) = \{ L : \text{ existe uma máquina } M \text{ que decide } L \text{ com } \\ time_M(n) = O(f(n)) \}$;
- $\mathbf{SPACE}(f(n)) = \{ L : \text{ existe uma máquina } M \text{ que decide } L \text{ com } \\ space_M(n) = O(f(n)) \}$;

:::

Em certas áreas de estudo, são consideradas como eficientes as máquinas cujo comportamento é limitado por um polinómio.
Por outro lado, o protótipo das máquinas ineficientes é precisamente o crescimento exponencial.
Estas considerações levam à definição das seguintes classes de complexidade.

:::tip[Definição]

Definem-se as seguintes classes de linguagens, relativamente ao tempo:

- $\mathbf{P} = \bigcup_{k \in \mathbb{N}} \mathbf{TIME}(n^k)$;
- $\mathbf{EXPTIME} = \bigcup_{k \in \mathbb{N}} \mathbf{TIME}(2^{n^k})$;
  analogamente, para o espaço, definimos
- $\mathbf{PSPACE} = \bigcup_{k \in \mathbb{N}} \mathbf{SPACE}(n^k)$;
- $\mathbf{EXPSPACE} = \bigcup_{k \in \mathbb{N}} \mathbf{SPACE}(2^{n^k})$;

:::

:::tip[Relação entre função tempo e espaço]

Para uma máquina classificador $M$, tem-se que $time_M$ e $space_M$ são funções monótonas e, para qualquer, $n \in \mathbb{N}$:

1. $space_M(N) \leq time_M(n)$
2. $time_M(n) \leq 2^{O(space_M(n))}$.

:::

:::details[Prova]

// TODO

:::

:::tip[Corolário]

$P \subset PSPACE \subset EXPTIME \subset EXPSPACE$

:::

### Variantes
