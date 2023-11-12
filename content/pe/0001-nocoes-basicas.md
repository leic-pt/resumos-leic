---
title: Noções Básicas
description: >-
  Noções Básicas de Probabilidades: Experiência Aleatória, Espaço de Resultados, Evento.
  Axiomática Probabilística.
  Probabilidade Condicionada.
  Acontecimentos Independentes.
  Probabilidade Composta.
  Probabilidade com Partições.
  Teorema de Bayes.
path: /pe/nocoes-basicas
type: content
---

# Noções Básicas

```toc

```

Começamos por introduzir umas definições essenciais para formalizar o trabalho com probabilidade.
Primeiro, é essencial definir exatamente em que consiste uma [**experiência aleatória**](color:red):

:::tip[Experiência Aleatória (EA)]

Dá-se o nome de [**experiência aleatória (EA)**](color:red) a qualquer experiência cujo resultado exato não pode ser predito antes da realização da mesma, devido à intervenção do acaso.

:::

Não se pode prever qual será o resultado de uma experiência aleatória. Contudo, deve ser sempre possível determinar o conjunto de todos os resultados possíveis:

:::tip[Espaço de Resultados]

Damos o nome de [**espaço de resultados**](color:green) ao conjunto de todos os resultados possíveis de uma EA.
Costumamos designar o espaço de resultados pela letra grega $\Omega$ (Omega).  
Dizemos que o espaço de resultados é:

- **discreto** se $\Omega$ for contável;
- **contínuo** se $\Omega$ não for contável.

:::

Para definir a probabilidade de um evento, precisamos ainda de definir em que consiste um evento.

:::tip[Evento]

Damos o nome de [**evento**](color:blue) a qualquer subconjunto $A \subset \Omega$ do espaço de resultados da EA em causa.

:::

:::details[Exemplo]

Um dos exemplos mais típicos de uma [experiência aleatória](color:red) é o lançamento de um dado: de facto, o resultado exato do lançamento de um dado não pode ser predito antes do mesmo, devido à interação do acaso.  
No entanto, é possível determinar um [espaço de resultados](color:green) - sabemos que o resultado do lançamento vai estar no conjunto $\Omega = \{1,2,3,4,5,6\}$.
Este [espaço de resultados](color:green) é [discreto](color:green) uma vez que é finito (e portanto contável).  
Exemplos de [eventos](color:blue) em relação a esta [EA](color:red) são:

- O resultado da EA é $6$;
- O resultado da EA é par;
- O resultado da EA é no máximo $2$.

Poderá ainda ser útil apresentar um exemplo de uma [EA](color:red) com um [espaço de resultados contínuo](color:green).
Um tal exemplo é o tempo em milissegundos que o dado lançado demora a parar na superfície da mesa (sobre a qual é lançado).
Neste caso, o espaço de resultados é $\Omega = \R^+$, que é um conjunto não contável.

:::

O estudo de **Probabilidade** prende-se então com a atribuição de valores que representem a confiança que temos em que um dado evento se concretize, dada uma certa experiência aleatória.

Esta atribuição de valores de probabilidade pode ser feita de várias formas, tendo cada uma as suas vantagens e desvantagens.
As mais comuns e simples são as seguintes:

- **Probabilidade Clássica de Laplace**: Se $\Omega$ for finito e constituído por eventos elementares (eventos que correspondem a conjuntos com um só elemento) e equiprováveis, então

  $$
  P(A) = \frac{\#A}{\#\Omega}
  $$

  para qualquer evento $A \subset \Omega$.  
  Esta noção é bastante limitada por várias razões: só trabalha com conjuntos finitos, e exige que os eventos sejam todos elementares e equiprováveis.

- **Probabilidade Frequencista**: Dada uma EA que foi realizada $N$ vezes, definimos **frequência** de um evento $A$ como o quociente $$ f_N(A) = \frac{n_N(A)}{N} $$ em que $n_N(A)$ é o número de vezes em que $A$ ocorre nas $N$ concretizações da EA realizada.  
  Definimos a probabilidade frequencista como
  $$
  P(A) = \lim_{N \to +\infty} f_N(A)
  $$
  Esta definição tem a desvantagem de requerer a realização repetida da experiência aleatória para aferir o valor de probabilidade de cada evento.
  Ora, por vezes, não é fácil ou mesmo possível realizar uma dada experiência aleatória um número considerável de vezes, quer por impossibilidade física ou limitação de recursos (monetários, humanos ou outros).

## Axiomática Probabilística

Devido às limitações das definições de probabilidade apresentadas acima, optamos por uma definição **axiomática**.
Definir axiomaticamente o conceito de probabilidade permite-nos fazer um estudo matemático bem definido da mesma.

:::warning[Não te assustes!]

A definição de axiomática de $\sigma$-álgebra ou de função de probabilidade nunca será pedida num trabalho/projeto/exame.
Esta noção é abstrata e pode ser difícil de compreender - não vale a pena ficar encravado nesta parte!
Se estiveres a ter dificuldade, finge que nunca leste esta parte e passa à frente.  
Note-se no entanto que para alunos que queiram ir a oral, poderá ser relevante saber o que é uma $\sigma$-álgebra.

:::

:::tip[sigma-Álgebra]

Dá-se o nome de [**$\sigma$-álgebra**](color:yellow) (sigma-álgebra) a uma coleção $\mathcal{A}$ de conjuntos tal que:

1. $\Omega \in \mathcal{A}$
2. $A \in \mathcal{A} \Rightarrow \overline{A} \in \mathcal{A}, \forall_{A \in \mathcal{A}}$
3. para qualquer coleção $\mathcal{C} = \{ A_1, A_2, \cdots \}$ contável de eventos em $\Omega$, temos que
   $$
   \mathcal{C} \subset \mathcal{A} \Rightarrow \bigcap_{i=1}^{\infty} A_i \in \mathcal{A}
   $$

Se pensarmos na aplicação desta noção ao estudo de probabilidade, esta definição garante-nos que $\mathcal{A}$ é um conjunto de eventos possíveis tais que:

- $\Omega \in \mathcal{A}$ - ou seja, é sempre possível que aconteça algo no espaço de resultados (de facto, como vamos ver, é sempre _certo_ que aconteça algo no espaço de resultados).
- $A \in \mathcal{A} \Rightarrow \overline{A} \in \mathcal{A}$ - ou seja, se um evento é possível, então é possível que esse evento não aconteça.
- o terceiro ponto diz-nos que se tivermos uma coleção de eventos possíveis, então também é possível que a sua disjunção se realize.

:::

Sobre uma $\sigma$-álgebra, definimos uma função de probabilidade da seguinte forma.

:::tip[Função de Probabilidade]

Para uma certa $\sigma$-álgebra $\mathcal{A}$ definimos uma **função de probabilidade** como uma função $P : \mathcal \to [0,1]$ tal que

1. $P(\Omega) = 1$
2. $0 \leq P(A) \leq 1 \, \forall {A \in \mathcal{A}}$
3. $P\left( \bigcup_{i=1}^{\infty} A_i \right) = \sum_{i=1}^{\infty} P(A_i)$ para qualquer coleção $\{ A_1, A_2, \cdots \} \subset \mathcal{A}$ tal que $A_i \cap A_j = \emptyset, \forall{i, j \in \mathbb{N}}$

Intuitivamente, o que isto nos diz é que:

- para qualquer EA, é sempre certo que o resultado esteja contido no espaço de resultados;
- a probabilidade é sempre um valor entre $0$ e $1$;
- a probabilidade da união de eventos disjuntos corresponde à soma das probabilidades de cada um.

:::

A partir da definição acima, podemos inferir as seguintes probabilidades:

1. $ P(\emptyset) = 0$
2. $ P(\overline{A}) = 1 - P(A) $
3. $ P(B \backslash A) = P(B) - P(A \cap B) $
4. $ P(A \cup B) = P(A) + P(B) - P(A \cap B) $
5. $ A \subset B \Rightarrow P(A) \leq P(B) $

:::details[Prova]

1. Segue diretamente de 2.
2. Como $A \cap \overline{A} = \emptyset$, temos, segundo o axioma 3, que $P(A) + P(\overline{A}) = P(A \cup \overline{A}) = P(\Omega) = 1$
3. Temos que $(B \backslash A) \cap (B \cap A) = \emptyset$, pelo que, segundo o axioma 3, $P(B \backslash A) + P(B \cap A) = P((B \backslash A) \cup (B \cap A)) = P(B)$
4. Como $A \cap (B \backslash A) = \emptyset$, temos, segundo o axioma 3, que $P(A) + P(B \backslash A) = P(A \cup (B \backslash A)) = P(A \cup B)$. Somando, então, $P(A)$ a ambos os lados da equação na propriedade 3, obtemos o resultado pretendido.
5. Se $A \subset B$, então $A \cap B = A$. Segundo 3, temos então que $P(A) = P(B) - P(B \backslash A) \leq P(B)$ já que $P(B \backslash A) \geq 0$ devido ao axioma 2.

:::

:::warning[]

Não é preciso saber as definições acima. No entanto, as propriedades e axiomas da função de probabilidade (apesar de muito simples e intuitivas) são importantes de saber!

:::

## Leis Probabilísticas

Vamos agora introduzir mais umas definições e proposições que facilitam o estudo de probabilidades.

:::tip[Probabilidade Condicionada]

Dada uma função de probabilidade $P$ sobre um espaço de resultados $\Sigma$, definimos **probabilidade condicionada** de A por B como

$$
P(A | B) = \frac{P(A \cap B)}{P(B)}, \forall_{A,B \in \Omega}
$$

:::

:::tip[Acontecimentos Independentes]

Dois eventos $A$ e $B$ dizem-se independentes e representa-se $A \indep B$ se

$$
P(A | B) = P(A) \Leftrightarrow P(B | A) = P(B) \Leftrightarrow P(A \cap B) = P(A) \cdot P(B)
$$

:::

:::tip[Probabilidade Composta]

De acordo com a definição acima, podemos ver que, indutivamente:

$$
P(A_1 \cap A_2 \cap \cdots \cap A_n) = P(A_1) \cdot P(A_2 | A_1) \cdot P(A_3 | A_1 \cap A_2) \cdots P(A_n | \bigcap_{i=1}^{n-1} A_i)
$$

:::

:::tip[Probabilidades com Partições]

Definimos uma **partição de $\Omega$** como uma coleção $P_\Omega$ de conjuntos $\{ A_1, A_2, \cdots \}$ tais que

- $A_i, A_j \in P_\Omega \Rightarrow A_i \cap A_j = \emptyset$ - os elementos de $P_\Omega$ são disjuntos;
- $\bigcup_{A \in P_\Omega} A = \Omega$ - a união dos elementos de $P_\Omega$ é $\Omega$;
- $P(A) > 0, \forall_{A \in P_\Omega}$ - os elementos de $P_\Omega$ são todos possíveis.

Temos então que, para qualquer partição de $\Omega$:

$$
P(B) = \sum_{A \in P_\Omega} P(B | A) \cdot P(A)
$$

:::

:::details[Prova]

Como todos os elementos $A$ de $P_\Omega$ são disjuntos dois a dois, temos que$(B \cap A_i) \cap (B \cap A_j) = \emptyset, \forall_{A_i, A_j \in P_\Omega}$.
Sendo assim,

$$
\sum_{A \in P_\Omega} P(B|A) \cdot P(A) = \sum_{A \in P_\Omega} P(A \cap B) = P\left( \bigcup_{A \in P_\Omega} A \cap B \right) \\
= P\left( \left( \bigcup_{A \in P_\Omega} A \right) \cap B \right) = P(\Omega \cap B) = P(B)
$$

:::

:::tip[Teorema de Bayes]

Para quaisquer eventos $A$ e $B$ possíveis, tem-se que

$$
P(A | B) = P(B | A) \cdot \frac{P(A)}{P(B)}
$$

:::

:::details[Prova]

Basta ver que

$$
P(A | B) \cdot P(B) = P(A \cap B) = P(B | A) \cdot P(A)
$$

:::
