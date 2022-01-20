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

### Redes Residuais

Uma rede residual, $G_f$, de uma rede de fluxo $G$ com fluxo $f$ indica-nos como podemos mudar o fluxo nas arestas de $G$. Temos que cada arco pode ter uma capacidade residual associada, $c_f(u, v)$, igual à diferença entre a capacidade do arco e o fluxo que o atravessa atualmente. $G_f$ indicará, portanto, a capacidade residual de cada arco de $G$ tal que $c_f(u, v) = c(u, v) - f(u, v) > 0$ (os arcos já com capacidade máxima não nos interessam aqui). Formalizando, temos:

$$
c_f(u, v) = \begin{cases}
  c(u, v) - f(u, v) & \text{se } (u, v) \in E\\
  f(v, u) & \text{se } (v, u) \in E
\end{cases}
$$

O segundo ponto é particularmente relevante, e podemos observá-lo na imagem abaixo: para uma aresta no "sentido contrário", consideramos que a sua capacidade residual corresponde ao próprio fluxo que o arco transporta. A definição deverá ficar mais clara com a imagem-exemplo da secção abaixo.

### Caminhos de Aumento

Dado um grafo com respetivas redes de fluxo $f$ e residual $G_f$, temos que um **caminho de aumento** $p$ corresponde a um caminho simples de $s$ para $t$ em $G_f$. Podemos, em $p$, aumentar o fluxo em todo o arco de $p$ com uma quantidade até $c_f$, a **capacidade residual** de $p$, tal que:

$$

c_f(p) = \min{c_f(u, v): (u, v) \in p}


$$

Significa, então, que podemos aumentar o fluxo em todo o arco de $p$ por uma quantidade igual à menor capacidade residual dos arcos que o compõem. Abaixo podemos ver um exemplo:

![Caminhos de Aumento](./assets/0007-augmentation-path.png#dark=1)

O caminho destacado em $(b)$ corresponde a um caminho de aumento $p$ para a rede em $(a)$. Temos que $c_f(p) = \min\{5, 5, 5\} = 5$, pelo que podemos aumentar o fluxo em todo o caminho de aumento $p$ por $5$.

De realçar que podemos aqui observar a rede residual, e as noções de caminhos residuais devem então ficar mais claras: existem arcos nos dois sentidos do arco de $G$, respeitando a definição proposta acima para $c_f(u, v)$. Os arcos que já transportam capacidade máxima de fluxo apenas apresentam arco numa direção.

Podemos, claro, visto que estamos a trabalhar com capacidades e fluxos não negativos, afirmar que:

$$

f' = f + f_p \wedge |f'| = |f| + |f_p| > |f|


$$

Ou seja, que o fluxo da rede após a aplicação do aumento à rede, $f'$ é estritamente maior que o fluxo da rede original, $f$. Consideramos para este efeito que $f_p = c_f(p) > 0$.

### Cortes em Redes de Fluxo

Os cortes em redes de fluxo correspondem a uma partição de $V$ tal que $(S, V-S)$, com $T = V-S$, tal que $s \in S \wedge t \in T$.
Seja $f$ um fluxo, o **fluxo líquido de um corte** corresponde a:

$$

f(S, T) = \sum_{u \in S} \sum_{v \in T} f(u, v) - \sum_{u \in S} \sum_{v \in T} f(v, u)


$$

A imagem abaixo poderá tornar o conceito mais claro:

![Fluxo Líquido - Exemplo](./assets/0007-net-flow-example.png#dark=1)

Na rede da imagem, consideramos $S = \{s, v_1, v_2\} \wedge T = \{v_3, v_4, t\}$. Os arcos que cruzam o corte são $(v_1, v_2), (v_3, v_2)$ e $(v_2, v_4)$.
Como a definição acima indica, **o sentido dos arcos é relevante** para a determinação do fluxo líquido do corte: voltando a olhar para a imagem-exemplo dos caminhos de aumento, temos que:

$$
f(v_1, v_3) = 12, f(v_2, v_4) = 11, f(v_3, v_2) = 4 \implies f(S, T) = 12 + 11 - 4 = 19
$$

Assim sendo, o fluxo líquido do corte associado à rede acima é $19$. Realça-se ainda que $f(S, T)$ foi aumentado segundo os arcos que cruzavam o corte de $S$ para $T$ e diminuído segundo os que o cruzavam no sentido contrário, tal como a definição indica.

Por fim, a **capacidade de um corte** corresponde à soma das capacidades residuais dos arcos que cruzam o corte de $S$ para $T$, isto é:

$$
c(S, T) = \sum_{u \in S} \sum_{v \in T} c(u, v)
$$

Pegando ainda na imagem anterior, teríamos que a capacidade do corte referido seria igual a $12 + 14 = 26$.

### Implementação Genérica de Ford-Fulkerson

## Algoritmo de Edmonds-Karp

---

<!-- TODO - ADD TEACHER'S NOTES -->

- [Slides - Algoritmos Baseados em Caminhos de Aumento](https://drive.google.com/file/d/1swL85O4Fu1XuMBdWEJksVsrcFxF6iYeT/view?usp=sharing)
- [Slides - Algoritmos de Pré-Fluxo](https://drive.google.com/file/d/1OqY6-EqfHIU5W1ho5pigFTjKl7IbZDcA/view?usp=sharing)
- [Notas Prof.]()
  $$
