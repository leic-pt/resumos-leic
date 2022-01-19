---
title: Fluxos Máximos
description: Definição de Fluxo Máximo.
  Método de Ford-Fulkerson.
  Algoritmo de Edmonds-Karp.
  Emparelhamento bipartido máximo.
path: /asa/fluxos-maximos
type: content
---

# Fluxos Máximos

```toc

```

:::tip[Motivação]

A EDP pretende construir uma nova central de distribuição de energia para a área Metropolitana de Lisboa na Serra de Montachique, visto que partindo de lá predispõe de uma rede de energia elétrica já construída.
Temos, claro, que cada ligação tem uma capacidade limite de energia que pode transportar.
Assim sendo, o engenheiro Paulo ficou encarregue de descobrir o **fluxo máximo** de energia que pode ser transportado num dado momento pela rede, distribuído pelas várias ligações da mesma.

O problema do fluxo máximo é utilizado para modelar soluções para vários problemas deste género, como redes de saneamento e água, transporte de partes por linhas de montagem, entre outras.
É um problema bastante presente na indústria!

:::

O problema do fluxo máximo consiste, então, em encontrar o melhor caminho, o caminho onde conseguimos levar mais material, de uma fonte a um destino/sumidouro sem violar a capacidade de nenhum arco da rede.

## Redes de Fluxos

Uma rede de fluxos corresponde a um grafo $G = (V, E)$ dirigido, onde cada arco do mesmo tem uma capacidade associada não negativa. O grafo é necessariamente ligado.
Consideremos sempre, claro, que há um caminho possível entre $s$ e $t$ que passe por qualquer outro vértice do grafo (caso contrário haveria vértices que não faria sentido aparecerem no grafo, não seriam úteis à rede).

Uma propriedade bastante importante destas redes é a **conservação do fluxo**:

$$
\forall {u \in V - \{s, t\}}, \sum_{v \in V} f(u, v) = 0
$$

Isto é, para todos os vértices da rede (exceto a fonte e o destino), a quantidade de material que sai tem de ser a mesma que entra. Observe-se o exemplo abaixo:

![Conservação do Fluxo - Exemplo](./assets/0007-conservacao-fluxo-exemplo.png#dark=1)

Podemos notar que para todo o vértice do grafo (exceto a fonte e o sumidouro) a quantidade de material que sai é igual à quantidade de material que entra. Por exemplo, no vértice $C$ temos $12 + 7 = 19$ material a entrar (via $B$ e $E$) e $15 + 4 = 19$ a sair (via $F$ e $D$).

Vale a pena realçar que **o fluxo que sai da fonte é necessariamente igual ao que entra no sumidouro**.
Também na imagem acima podemos verificar que tal se verifica: $11 + 8 = 15 + 4 = 19$, verificando-se, portanto, que _flow in equals flow out_. Diz-se que este valor é, então, o [**valor do fluxo**](color:orange) da rede.

Por fim, podemos olhar para redes de fluxo diferentes - redes que apresentam mais do que uma fonte e/ou sumidouro. Para estes casos específicos, definem-se:

- uma **super-fonte**, que liga (com capacidade $\infty$) a todos as fontes do grafo original;

- um **super-sumidouro**, ao qual ligam (com capacidade $\infty$) todos os sumidouros do grafo original.

Tanto a super-fonte como o super-sumidouro limitam-se a fornecer tanto fluxo quanto pretendido pelas fontes e a receber tanto quanto enviado pelos sumidouros originais, pelo que todas as propriedades referidas acima acabam por manter-se. Abaixo podemos observar um exemplo desta transformação:

![Transformação de Rede de Fluxos com Várias Fontes/Destinos - Exemplo](./assets/0007-transformacao-rede-fluxos-exemplo.png#dark=1)

## Método de Ford-Fulkerson

O **método de Ford-Fulkerson** transcende uma implementação de algoritmo especifíca - corresponde a uma combinação de ideias e implementações de outros algoritmos: redes residuais, caminhos de aumento e cortes. Será, contudo, abordada uma implementação para um algoritmo génerico de Ford-Fulkerson mais abaixo.

O método baseia-se na seguinte lógica:

```rust
FordFulkersonMethod(G, s, t)
  inicializar o fluxo f a 0
  enquanto existir um caminho de aumento p
    aumentar o fluxo f segundo p
  return f
```

Vamos, então, introduzir as três ideias fulcrais ao algoritmo.

:::warning[Incompleto]

O conteúdo abaixo encontra-se incompleto, será adicionado brevemente.

:::

### Redes Residuais

### Caminhos de Aumento

### Cortes

### Implementação Genérica de Ford-Fulkerson

## Algoritmo de Edmonds-Karp

---

<!-- TODO - ADD TEACHER'S NOTES -->

- [Slides - Algoritmos Baseados em Caminhos de Aumento](https://drive.google.com/file/d/1swL85O4Fu1XuMBdWEJksVsrcFxF6iYeT/view?usp=sharing)
- [Slides - Algoritmos de Pré-Fluxo](https://drive.google.com/file/d/1OqY6-EqfHIU5W1ho5pigFTjKl7IbZDcA/view?usp=sharing)
- [Notas Prof.]()
