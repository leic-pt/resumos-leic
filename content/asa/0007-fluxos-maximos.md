---
title: Fluxos Máximos
description: Definição de Fluxo Máximo.
  Método de Ford-Fulkerson.
  Algoritmo genérico de Ford-Fulkerson.
  Algoritmo de Edmonds-Karp.
  Emparelhamento bipartido máximo.
  Algoritmos Baseados em Pré-Fluxo.
  Algoritmo Push-Relabel.
  Algoritmo Relabel-To-Front.
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

O **corte mínimo** de uma rede será, então, o corte com a menor capacidade de entre todos os cortes da mesma.

Pegando ainda na imagem anterior, teríamos que a capacidade do corte referido seria igual a $12 + 14 = 26$.

Temos ainda algumas afirmações a fazer quanto aos cortes:

- Dado um fluxo $f$ para uma rede $G$, o fluxo líquido de qualquer corte da rede é o mesmo, sendo igual a $|f|$.

- O valor de qualquer fluxo $f$ numa rede $G$ é majorado pela capacidade de qualquer corte da rede.

:::details[Prova do primeiro ponto]

Temos que $V = T \cup S$, e então $f(S, V) = f(S, T \cup S) = f(S, T) + f(S, S) = f(S, T) + 0 = f(S, T)$, já que $f(S, S) = 0$.

Tendo $f(S, V) = f(S, T)$, e com $|f| = f(S, T) = f(S, V)$, podemos começar a construir a prova pretendida:

$$
\begin{aligned}|f| &= f(S, V) = f(s, V) + f(S - \{s\}, V)\\
\\
&= \sum_{v \in V}f(s, v) - \sum_{v \in V}f(v, s) + \sum_{u \in S - \{s\}}(\sum_{v \in V}f(u, v) - \sum_{v \in V}f(v, u)) \\
\\
&= \sum_{v \in V}(f(s, v) + \sum_{u \in S - \{s\}}f(u, v)) - \sum_{v \in V}(f(v, s) + \sum_{u \in S - \{s\}}f(v, u)) \\
\\
&= \sum_{v \in V}\sum_{u \in S}f(u, v) - \sum_{v \in V}\sum_{u \in S}f(v, u)
\end{aligned}
$$

Ora, visto que $V = S \cup T \wedge S \cap T = \emptyset$, podemos simplificar a soma acima mais ainda (em função de $S$ e $T$ em vez de $S$ e $V$):

$$
\begin{aligned}|f| &= \sum_{v \in S} \sum_{u \in S}f(u, v) + \sum_{v \in T} \sum_{u \in S}f(u, v) - \sum_{v \in S} \sum_{u \in s}f(v, u) - \sum_{v \in T} \sum_{u \in S}f(v, u) \\
\\
&= \sum_{v \in T} \sum_{u \in S}f(u,v) - \sum_{v \in T} \sum_{u \in S}f(v, u) + (\sum_{v \in S}\sum_{u \in S}f(u, v) - \sum_{v \in S}\sum_{u \in S}f(v, u))
\end{aligned}
$$

Esta última diferença entre parêntesis anula-se, pela conservação do fluxo, pelo que ficamos com:

$$
\begin{aligned}|f| &= \sum_{v \in T} \sum_{u \in S}f(u,v) - \sum_{v \in T} \sum_{u \in S}f(v, u) \\
\\
&= f(S, T)
\end{aligned}
$$

:::

Seja $(S, T)$ um corte de $G$ e $f$ um qualquer fluxo da rede. Temos, pela afirmação provada imediatamente acima, que $|f| = f(S, T)$. A partir daí, podemos facilmente deduzir:

$$
\begin{aligned}|f|&=f(S, T)\\
&= \sum_{u \in S} \sum_{v \in T} f(u, v) - \sum_{u \in S} \sum_{v \in T} f(v, u)\\
&\leq \sum_{u \in S} \sum_{v \in T} f(u, v)\\
&\leq \sum_{u \in S} \sum_{v \in T} c(u, v)\\
&= c(S, T)
\end{aligned}
$$

Assim sendo, podemos extrair que o valor do fluxo mínimo é majorado pelo valor de qualquer corte da rede. Mais ainda, **o valor do fluxo máximo de uma rede é majorado pela capacidade do corte mínimo da mesma**, afirmação particularmente útil para o Teorema apresentado abaixo:

:::info[Teorema do Fluxo Máximo - Corte Mínimo]

Seja $f$ o fluxo de uma rede $G$ com fonte $s$ e sumidouro $t$. Para uma rede assim apresentada, as seguintes proposições são equivalentes:

- $f$ é o fluxo máximo da rede.

- A rede residual $G_f$ não contém caminhos de aumento.

- $|f| = c(S, T)$ para algum corte $(S, T)$ na rede.

:::

A equivalência das três afirmações pode ser provada através de uma **implicação cíclica** entre elas. Procuremos prová-las:

:::details[Prova do teorema]

[**$(1) \implies (2)$**](color:orange) indica que se $f$ for o fluxo máximo da rede, então $G_f$ não contém caminhos de aumento. Suponhamos o oposto: que $G_f$ contém caminhos de aumento, mesmo considerando $f$ como um fluxo máximo da rede. Nesse caso, haveria pelo menos um caminho $p$ tal que $|f| + |f_p| > |f|$, uma contradição, já que $f$ já é máximo.

[**$(2) \implies (3)$**](color:yellow) indica que se $G_f$ for uma rede residual sem caminhos de aumento, então $|f| = c(S, T)$ para algum corte $(S, T)$ na rede. Tenhamos $S = \{v | G_f \text{ tal que há um caminho de s para v} \}$, $T = V - S$. Por contradição, suponhamos que $|f| \neq c(S, T)$ para todo o corte da rede. Isso implicaria, claro, que $f(S, T) < c(S, T)$ para todo o corte, já que é impossível ter o contrário. Agora das duas uma:

- Existe um arco $(u, v)$ tal que $c_f(u, v) > 0$; caso tal acontecesse, esse arco estaria na rede residual, pelo que não pode ser verdade.

- Existe um arco de refluxo; contudo, se tal acontesse seria possível chegar a $u$ a partir de $t$, o que também não pode acontecer.

A proposição fica então provada.

Por fim, [**$(3) \implies (1)$**](color:red). Temos, claro, que $|f| \leq c(S, T)$ para todo o corte da rede. Tendo $|f| = c(S, T)$, temos obrigatoriamente que $|f|$ terá de ser o fluxo máximo da rede, visto que caso não fosse, $|f| > c(S, T)$ para um qualquer corte na rede, o que não pode acontecer.

A implicação cíclica fica assim provada, pelo que as afirmações são necessariamente equivalentes.

:::

### Implementação Genérica de Ford-Fulkerson

Depois de explicada a teoria por detrás do método de Ford-Fulkerson, chegou então a altura de mostrar a sua implementação:

```rust
FordFulkerson(G, s, t)
  for each edge e in G.E
    e.f = 0 // fluxo pelo arco = 0 inicialmente
  while (existe um caminho p de s para t na rede residual)
    c_f(p) = min{c_f(u, v) | (u, v) in p} // capacidade residual de p
    for each edge e in p
      if e in E_f
        e.f += c_f(p) // incrementa fluxo pelo arco
      else
        e.f -= c_f(p) // decrementa fluxo pelo arco
```

Começamos por inicializar o fluxo de todos os arcos da rede a $0$. De seguida, procuramos sucessivamente encontrar caminhos de aumento na rede residual (até estes deixarem de existir), e atualizamos os arcos que formam cada caminho de acordo com o fluxo a aumentar: se o arco pertence a $E$, o fluxo é aumentado; caso não corresponda a um arco da rede original, o fluxo é subtraído pela quantidade indicada.

Encontra-se abaixo um exemplo da aplicação do algoritmo de Ford-Fulkerson:

:::details[Exemplo da aplicação do Algoritmo]

Consideremos uma rede $G$, inicialmente vazia, com capacidades tais que:

![Capacidades da rede](./assets/0007-ff-capacidade.png#dark=1)

O primeiro caminho de aumento encontrado é o que se segue. Podemos notar que neste primeiro instante não se vêem arestas com sentido contrário, já que todas têm fluxo $0$ atualmente:

![Caminho de aumento - 1](./assets/0007-ff-caminho-1.png#dark=1)

Foi encontrado mais um caminho de aumento, e agora já podemos notar as tais "arestas contrárias" a aparecer:

![Caminho de aumento - 2](./assets/0007-ff-caminho-2.png#dark=1)

Os passos seguintes seguem todos a mesma lógica, até que não existam mais caminhos de aumento.

![Caminho de aumento - 3](./assets/0007-ff-caminho-3.png#dark=1)

![Caminho de aumento - 4](./assets/0007-ff-caminho-4.png#dark=1)

![Caminho de aumento - 5](./assets/0007-ff-caminho-5.png#dark=1)

Chegámos, por fim, a uma rede sem caminhos de aumento restantes. O valor do corte mínimo corresponde, então, ao valor do fluxo máximo da rede: $23$.

Podemos dizer, aqui, que um corte mínimo seria tal que $S = \{s, v_1, v_3, v_4\} \wedge T = \{v_2, t\}$. Os arcos que cruzam o corte têm necessariamente de estar saturados (ou seja, o fluxo deles é igual à capacidade máxima do arco). Mais ainda, **a soma do fluxo que atravessa o corte é igual ao valor do fluxo**. Abaixo podemos observar o corte mínimo na rede:

![Corte Mínimo](./assets/0007-ff-corte-minimo.png#dark=1)

:::

Em relação à análise da complexidade temporal do algoritmo, podemos afirmar que:

- o loop inicial leva $\Theta(E)$ tempo;

- calcular a capacidade residual mínima do caminho pode levar $O(E)$ tempo;

- atualizar o fluxo do arco $e$ em $p$ leva $O(1)$ tempo; é realizado no máximo $E$ vezes por ciclo.

Resta, então, falar sobre a complexidade do ciclo `while` em si: encontrar um caminho leva $O(E)$ tempo, recorrendo a uma DFS/BFS adequada. O ciclo em si, contudo, pode ser executado até $|f^*|$ vezes (onde $f^{*}$ é o fluxo máximo da rede), tornando a complexidade temporal do algoritmo $O(|f^{*}|E)$. A razão para ter de ser executado até $|f^{*}|$ vezes, da maneira que está construído atualmente, pode ficar mais aparente ao olhar para o exemplo seguinte:

![Complexidade Ford-Fulkerson](./assets/0007-ff-complexidade.png#dark=1)

Considerando uma rede como a que está acima, temos que $|f^{*}|$ = $2000000$. Na pior das hipóteses, teremos de realizar igual quantidade de caminhos que passem pelo arco $(u, v)$, o que pode tornar a aplicação do algoritmo impraticável. Assim sendo, vamos estudar o algoritmo de Edmonds-Karp, que permite uma majoração da complexidade de $O(VE^2)$, bastante melhor na vasta maioria dos casos.

## Algoritmo de Edmonds-Karp

O algoritmo de Edmonds-Karp tem por base o método de Ford-Fulkerson, procurando uma majoração diferente para a complexidade temporal do mesmo.

O objetivo aqui passa por encontrar sempre o [**caminho de aumento mais curto**](color:orange), isto é, com menos arcos, não menos pesado, presente na rede residual $G_f$. Para tal, o algoritmo recorre a uma **BFS** com origem em $s$ e destino em $t$ - a procura pára assim que encontrar um caminho de aumento que os una. O algoritmo termina quando não existem mais caminhos de aumento - isto é, quando a BFS não consegue encontrar mais caminhos de aumento que unam $s$ e $t$.

:::info[Monotonia de Edmonds-Karp]

É interessante definir [**distância de Edmonds-Karp**](color:yellow): $\delta_f(s, t)$, a distância do caminho mais curto entre $s$ e $t$ em $G_f$.

Mais ainda, é relevante notar que, visto que a BFS vai sempre encontrando os caminhos de aumentado _atualmente_ mais curtos (e que estes vão desaparecendo), podemos afirmar com segurança que, durante o decorrer de Edmonds-Karp, $\delta_f(s, t)$ terá uma **tendência crescente** (não estritamente, claro).

:::

Abaixo segue um exemplo bastante simples do decorrer do algoritmo sobre uma rede:

:::details[Exemplo da aplicação do Algoritmo]

Começemos com uma rede que inicialmente se encontra assim:

![Rede inicial](./assets/0007-ek-inicial.png#dark=1)

Podemos notar que inicialmente o fluxo que passa por todas as arestas é 0, e que portanto a respetiva capacidade residual é igual à capacidade máxima do arco.

Nas BFSs abaixo, os números acima de cada vértice correspondem à distância percorrida desde $s$ até ao vértice em questão. Podemos, nesta primeira procura, notar que há 2 caminhos de aumento de tamanho $3$. Escolhemos um deles (por exemplo $s \to c \to d \to t$), e, ao escolhê-lo, verificamos que a capacidade residual mínima de entre as arestas do caminho é $4$ - o fluxo em todos os arcos é incrementado em $4$ unidades.

![BFS 1](./assets/0007-ek-passo-1.png#dark=1)

De seguida, vamos ao outro caminho de aumento com 3 unidades (descoberto anteriormente), $s \to a \to b \to t$. Aqui, a menor capacidade residual dos seus arcos é $12$, e o fluxo em todos os arcos é incrementado em $12$.

![BFS 2](./assets/0007-ek-passo-2.png#dark=1)

Explorados todos os caminhos de aumento de tamanho $3$, a BFS seguinte encontra um caminho de tamanho $4$. A menor capacidade residual de um dos seus arcos é $7$, e o fluxo em todos os arcos é incrementado em $7$.

![BFS 3](./assets/0007-ek-passo-3.png#dark=1)

A partir daqui não existe uma procura que encontre um caminho de aumento para a rede, pelo que o algoritmo termina.

Temos que o fluxo máximo encontrado é igual à soma dos fluxos que saem da fonte, que é igual à soma dos fluxos que chegam ao sumidouro e à soma dos fluxos que atravessam o corte mínimo da rede, $23$:

![Corte](./assets/0007-ek-corte.png#dark=1)

Podemos notar que todos os arcos que atravessam o corte no sentido "positivo", da partição de $s$ para a de $t$ estão saturados. Mais ainda, e apesar de não ser aqui percetível, é relevante verificar que o fluxo dos arcos que cruzam o corte no sentido "negativo" contribui negativamente para o fluxo máximo da rede: se tivéssemos um arco que cruzasse aqui o corte no sentido contrário com fluxo $4$, o fluxo máximo da rede seria $23 - 4 = 19$.

Por fim, é interessante verificar que o fluxo máximo pode também ser dado pela quantidade de fluxo aumentada a cada BFS realizada: é óbvio, claro, a cada BFS o fluxo é aumentado, nunca decrescido. Aqui, verifica-se com $4 + 12 + 7 = 23$.

:::

Podemos notar que as distâncias de Edmonds-Karp podem variar entre $1, ..., |V| - 1$: um caminho de aumento pode ter no mínimo 1 aresta (se o grafo ligar diretamente $s$ a $t$), e no máximo $|V| - 1$ arcos (tal como o exemplo de seguida demonstra):

![Distância de Edmonds-Karp](./assets/0007-ek-max-arcos.png#dark=1)

Ora, temos ainda que podemos ter $|E|$ caminhos de aumento até $\delta_f(s, t)$ aumenta (podemos ter um caminho que contenha todas as arestas, onde uma aresta vai ficando saturada de cada vez), e assim podem existir $O(|V|\cdot|E|)$ caminhos de aumento numa rede.

Visto que cada caminho de aumento pode ser encontrado em $O(|V| + |E|) = O(|E|)$ tempo (via BFS), temos que a complexidade temporal de Edmonds-Karp é $O(|V|\cdot|E|^2)$.

:::danger[A complexidade pode enganar]

Não nos podemos esquecer que o algoritmo de Edmonds-Karp não é mais que uma implementação do método de Ford-Fulkerson, partilhando assim a sua majoração temporal ($O(|f^*| |E|)$). Assim sendo, dependendo da topologia do grafo, a realização do algoritmo pode até levar tempo inferior a $V E^2$ a terminar! Este tipo de perguntas pode sair em exame, e é bastante útil ter em mente: o algoritmo tem ambas as majorações temporais, consideramos a que for menor perante a topologia da rede apresentada.

:::

:::warning[Página em Construção]

O conteúdo restante (algoritmos baseados em pré-fluxo, correspondência bipartida máxima) será adicionado assim que possível.

:::

---

<!-- TODO - ADD TEACHER'S NOTES -->

- [Slides - Algoritmos Baseados em Caminhos de Aumento](https://drive.google.com/file/d/1swL85O4Fu1XuMBdWEJksVsrcFxF6iYeT/view?usp=sharing)
- [Slides - Algoritmos de Pré-Fluxo](https://drive.google.com/file/d/1OqY6-EqfHIU5W1ho5pigFTjKl7IbZDcA/view?usp=sharing)
- [Notas Ford-Fulkerson - Prof. José Fragoso](https://drive.google.com/file/d/13Ua5JJ6mJZUhEImbcAMGrCBG5iPiUxN3/view?usp=sharing)
- [Notas Edmonds-Karp/CBM - Prof. José Fragoso](https://drive.google.com/file/d/1YRzHWWA4glyzkYj2eshiLtD2XNWw8fmw/view?usp=sharing)
- [Notas Pré-Fluxos - Prof. José Fragoso](https://drive.google.com/file/d/13_3-tNuxZuiHZNPZXiXUL8hVudvSO4uC/view?usp=sharing)
