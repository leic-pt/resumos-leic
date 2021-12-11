---
title: Técnicas de Síntese de Algoritmos
description: TODO.
path: /asa/tecnicas-algoritmos
type: content
---

# Técnicas de Síntese de Algoritmos

```toc

```

Nesta cadeira são estudadas três principais técnicas para síntese de algoritmos:

- [**Dividir para Conquistar**](color:orange), abordada na [secção anterior](./teorema-mestre).
- [**Programação Dinâmica**](color:yellow), já abordada de relance na [secção introdutória](./introducao), aprofundada aqui.
- [**Algoritmos Greedy**](color:green), abordada pela primeira vez aqui.

## Programação Dinâmica

Vamos, então, aprofundar o tema da **programação dinâmica**.

:::info[Programação Dinâmica]

Corresponde a uma abordagem de resolução de problemas que transforma um problema bastante complexo em sequências de problemas mais simples (até, eventualmente, encontrar um caso base). O objetivo de estudar esta técnica passa por construir uma certa forma de olhar e analisar os problemas, com vista a encontrar padrões que nos ajudem a chegar a soluções ótimas para os mesmos.

Procuramos evitar repetir operações e resolver cada sub-problema uma única vez, por uma ordem ótima, geralmente guardando os dados que vamos obtendo numa dada estrutura - por exemplo, numa tabela.

:::

Pode ser útil rever o exemplo da [sequência de Fibonacci](./introducao#cálculo-dos-números-de-fibonacci) na secção introdutória destes resumos.

O problema sobre o qual nos vamos debruçar mais é o [**Problema da Mochila/Knapsack Problem**](color:orange). Trata-se de um problema clássico de introdução ao tema da programação dinâmica, dado que tem várias abordagens mais óbvias - e definitivamente não-ótimas - que são úteis de dissecar para perceber porque é que estão mal, e por onde podemos ir para obter uma abordagem melhor. Resta realçar que, nesta sub-secção, vamos apenas olhar para o problema da mochila **não fracionária** - não podemos colocar quantidades fracionárias de itens na mochila, ou se coloca todo ou não se coloca.

:::tip[Definição do problema]

Dados $n$ objetos (um objeto tem um valor, $v_i$, e um peso, $w_i$, associados) e uma mochila, como é que podemos maximizar o valor transportado pela mochila e respeitar o peso máximo, $W$, que a mochila pode guardar.

:::

### Problema da Mochila com Repetição

Vamos, primeiro, olhar para a versão do problema [**com repetição**](color:yellow) - o mesmo objeto pode ser adicionado à mochila mais do que uma vez - e para algumas estratégias que podiam, erradamente, ser escolhidas para o resolver.

:::details[Estratégia Errada 1 - Item de Maior Valor]

Tenhamos que a nossa mochila tem $W$ máximo 10, e 2 objetos:

- um primeiro objeto com 8kg e valor 8€;

- um segundo objeto com 5kg e valor 5€.

Numa tentativa inicial, podíamos pensar "bem, vamos adicionar os objetos por ordem decrescente do seu valor". Contudo, esta estratégia tem um contra-exemplo simples - considerando os objetos acima, e seguindo este raciocínio, adicionaríamos o objeto que vale 8€ à mochila. O algoritmo parava aí, porque não poderíamos adicionar mais nada sem exceder $W$. Contudo, essa não é a solução correta - dado que estamos na presença do problema com repetição, podíamos adicionar duas vezes o segundo objeto, ficando efetivamente com a mochila a guardar um valor maior, provando que a estratégia falha.

Pode não ter ficado claro, mas a estratégia não falha _só_ por estarmos na presença do problema com repetição - se tivéssemos um terceiro objeto, a pesar 4kg e a valer 4€, a estratégia também falharia, mesmo sem pensar em repetição.

:::

:::details[Estratégia Errada 2 - Item de Menor Peso]

Considerando, de novo, uma mochila com $W$ máximo 10, mas desta vez:

- um primeiro objeto com 1kg e a valer 1€;

- um segundo objeto com 10kg e a valer 20€.

Poderíamos, agora, pensar "vamos adicionar os objetos por ordem crescente de peso". Esta estratégia, contudo, também falha - aqui, ao adicionar sucessivamente o primeiro objeto, ficaríamos com a mochila a guardar 10€, e não os 20€ (a solução correta) caso tivéssemos optado por escolher uma vez o segundo objeto.

A estratégia falha também sem repetição - adicionando o primeiro objeto, de menor peso, já não podíamos adicionar mais nenhum, ficando a mochila a valer 1€, que claramente não é a solução correta.

:::

:::details[Estratégia Errada 3 - Item de Maior Densidade de Valor]

Por fim, consideremos uma mochila de $W$ máximo 5, e:

- um primeiro objeto com 3kg e a valer 6€;

- um segundo objeto com 4kg e a valer 7€.

Podíamos pensar "vamos adicionar os itens por ordem crescente de densidade de valor" - teoricamente, adicionaríamos os itens "mais importantes" de estarem na mochila primeiro. Contudo, não funciona bem assim - neste caso, adicionar-se-ia primeiro o primeiro objeto (a sua densidade é de 2€/kg, maior que a do segundo objeto), e não se poderia adicionar mais nenhum. Contudo, esta opção falharia, visto que assim a mochila ficaria com valor de 6€, quando a solução ótima seria a de escolher o segundo objeto uma vez, ficando a mochila a valer 7€.

:::

Como podemos observar, não aparenta haver uma [**escolha ótima**](color:orange) - não parece dar para afirmar "aquele objeto tem definitivamente de estar na mochila". Temos, portanto, de **olhar para todas as opções**.

Procuramos, em programação dinâmica, definir a quantidade que queremos recursivamente. Neste caso, será dado por $v[i, j]$, o valor máximo que é possível transportar se o peso limite é $j$, com $j \leq W$, e se apenas podem ser selecionados os objetos numerados de 1 a $i$. A solução ótima encontra-se em $v[n, W]$.

$$
v[i, j] = max(v[i - 1, j], v[i - 1, j - w_i] + v_i)
$$

Corresponde a algo como:

```cpp
#define max(a, b) (a > b ? a : b)

// Neste caso, a função retorna o valor máximo a colocar na mochila.
// Contudo, o algoritmo em si não implica retornar esse valor:
// Podíamos, por exemplo, fazer print da solução e retornar void.
int knapsack(std::vector<int> values, std::vector<int> weights, int maxWeight) {
  if (maxWeight == 0) return 0;

  int maxValue = 0;
  int numObjects = weights.size();
  for (int i = 0; i < numObjects; i++) {
    if (weights[i] <= maxWeight) {
      maxValue = max(maxValue, knapsack(values, weights, maxWeight - weights[i])) + values[i];
    }
  }

  return maxValue;
}

```

Esta é, contudo, uma solução péssima. Tendo $w$ como o peso máximo e $n$ como o número de objetos:

$$
T(w) \leq n \cdot T(w - 1) = n^2 \cdot T(w - 2) = ... = n^w
$$

<!-- Is this the correct way to put it? cc @diogotcorreia-->

Ou seja, a complexidade temporal da função é $O(n^w)$. Consideramos $T(w - 1), T((w - 1) - 1), \text{ etc }$ porque, no pior caso, estamos sempre a retirar objetos com peso 1 (considerando apenas peso naturais), e daí podemos retirar a natureza exponencial do problema. A primeira chamada pode correr $n$ vezes, mas cada uma das seguintes também pode correr $n$ vezes, e assim sucessivamente, $w$ vezes.

<!-- Is this the correct way to put it? cc @diogotcorreia-->

Ora, mas [**o número de sub-problemas distintos é $n \cdot W$**](color:yellow) (corresponde ao número de entradas numa possível tabela de resolução do problema com DP). Assim sendo, podemos definitivamente obter uma solução mais eficiente para o problema, **sem fazer os mesmos cálculos mais do que uma vez**, coisa que acontece na implementação acima.

```cpp
#define max(a, b) (a > b ? a : b)

int knapsack(std::vector<int> values, std::vector<int> weights, int maxWeight) {
  int numElements = weights.size();
  // inicializar um vetor para substituir as chamadas recursivas
  // todos os indices sao inicializados a 0
  std::vector<int> k = std::vector<int>(maxWeight + 1, 0);
  for (int w = 1; w <= maxWeight; w++) {
    k[w] = k[w - 1]; // o valor guardado na mochila nunca é menor que o anterior
    for (int i = 0; i < numElements; i++) {
      if (weights[i] <= w) {
        k[w] = max(k[w], k[w - weights[i]] + values[i]);
      }
    }
  }

  return k[w];
}

```

É possível que ver o vídeo seguinte e seguir o algoritmo ajude:

::youtube{#8LusJS5-AGo}

Este algoritmo corre exatamente $n \cdot W$ vezes - $\Theta (n \cdot W)$ - já que não temos nenhum `break` a meio do loops nem nenhuma chamada recursiva a meio. É, portanto, uma abordagem muito melhor do que a exponencial anterior.

### Problema da Mochila sem Repetição

O problema da mochila sem repetição permite-nos olhar para o problema de uma maneira diferente - aqui, vamos, na recursão, procurar o valor máximo que se consegue transportar na mochila _até a um certo índice $i$_ - no problema com repetição não podiamos fazê-lo, dado que um mesmo objeto podia ser contado duas vezes. Podemos, então, definir a quantidade recursiva como

$$
k(w, i) = \begin{cases}
0, &\text{ se } w = 0 \vee i = 0\\
max\{k(w, i - 1), k(w - w_i, i - 1) + v_i\} &\text{ caso contrário}
\end{cases}
$$

O segundo ramo corresponde a "vou ou não usar o elemento de índice $i$"?

Em código, corresponderia a algo deste género:

```cpp
#define max(a, b) (a > b ? a : b)

int knapsack(std::vector<int> values, std::vector<int> weights, int maxWeight) {
  int numElements = weights.size();
  std::vector<int> prevColumn = std::vector<int>(maxWeight + 1, 0);
  std::vector<int> currColumn = std::vector<int>(maxWeight + 1, 0);

  for (int i = 0; i < numElements; i++) {
    for (int w = 1; w <= maxWeight; w++) {
      if (weights[i] <= w) {
        currColumn[w] = currColumn[w - 1];
        currColumn[w] = max(
          prevColumn[w],
          prevColumn[w - weights[i]] + values[i]
        );
      }
    }
    prevColumn = currColumn;
  }

  return currColumn.back();
}
```

Aqui, o algoritmo volta a ser $\Theta(n \cdot W)$.

:::details[Exemplo da aplicação do algoritmo]

Consideremos um peso máximo de 8kg, e dois objetos:

- um primeiro com 5kg, a valer 6€;
- um segundo com 4kg, a valer 4€.

A tabela correspondente à aplicação do algoritmo seria:

|     | 0   | 1   | 2   |
| --- | --- | --- | --- |
| 0   | 0   | 0   | 0   |
| 1   | 0   | 0   | 0   |
| 2   | 0   | 0   | 0   |
| 3   | 0   | 0   | 0   |
| 4   | 0   | 0   | 4   |
| 5   | 0   | 6   | 6   |
| 6   | 0   | 6   | 6   |
| 7   | 0   | 6   | 6   |
| 8   | 0   | 6   | 6   |

Devemos calcular a matriz **por coluna** - se olharmos para o código, podemos observar que temos várias vezes $i - 1$ - só precisamos da coluna anterior para calcular a atual, o que poupa trabalho.

Para calcular $k(6, 2)$, por exemplo, teríamos de ver que se trata do segundo caso (nem $w$ nem $i$ são 0).  
De seguida, e já no segundo caso, teríamos então de ver o máximo entre $k(6, 2 - 1 = 1)$ e $k(6 - w_2, 2 -1) + v_2 = k(6 - 4 = 2, 1) + 4$. Temos que $(6,1)$, previamente calculado, é 6, e que $k(2, 1)$ é 0 - temos, então, de ver o máximo entre 6 e 0 + 4, e preenchemos a entrada com esse valor (6). O preenchimento de qualquer entrada segue uma lógica semelhante.

:::

Este problema podia, claro, ser resolvido recorrendo à [memoization](./introducao#implementação-2-memoization-e-programação-dinâmica), caso optássemos por passar a tabela como argumento da função e a fôssemos preenchendo. O trade-off seria que a memoization, apesar de só calcular o que realmente é necessário (que, no pior caso, é tudo), ocupa mais espaço $(\Theta(W) \text{ vs } \Theta(n))$.

### Maior Sub-sequência Comum (LCS)

:::info[Definição do problema]

Dadas duas sequências, $X$ e $Y$, encontrar a maior sub-sequência comum entre elas. **Não precisam de ser contíguas**, isto é, tendo "ABC" e "AC", a maior sub-sequência comum entre ambas as sequências é "AC", apesar de "A" e "C" não aparecerem consecutivamente na primeira sequência.

A solução para este problema é a chave para ferramentas como o [diff](https://www.man7.org/linux/man-pages/man1/diff.1.html), [git](https://en.wikipedia.org/wiki/Git), entre outras ferramentas que requerem comparação de dados.

:::

Não podemos, obviamente, verificar literalmente todas as sub-sequências possíveis - cada sequência tem $2^{length}$ sub-sequências, tornando-se impraticável fazer a comparação.

## Algoritmos Greedy

cenas

---

TODO - adicionar cenas
