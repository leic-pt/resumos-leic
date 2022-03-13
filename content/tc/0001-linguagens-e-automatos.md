---
title: Linguagens e Autómatos
description: 'Linguagens e Autómatos'
path: /tc/linguagens-e-automatos
type: content
---

# Linguagens e Autómatos

```toc

```

## Alfabetos, Palavras e Linguagens

Definimos um [**alfabeto**](color:orange) como um conjunto finito não-vazio (de símbolos). Um alfabeto costuma ser representado pela gregra letra $\Sigma$.

:::details[Exemplo de Alfabeto]

Um exemplo de um alfabeto é o conjunto $\{a,b,c\}$

:::

Definimos uma [**palavra**](color:yellow) sobre um alfabeto $\Sigma$ como uma sequência finita de elementos de $\Sigma$. O conjunto de todas as palavras constituídas pelos símbolos do alfabeto $\Sigma$ é representado por $\Sigma^*$.  
Todos os alfabetos contêm uma palavra, a que se dá o nome de palavra vazia. Esta costuma ser representada pela letra grega $\epsilon$.

:::details[Exemplo de Palavra]

O conjunto de palavras sobre o alfabeto $\{a,b,c\}$ contém, por exemplo, as palavras $a, ab, cccc, cbabca$. Contudo, não contém as palavras $d$, $abababae$, $ffffff$.

:::

:::tip[Nota]

Para um alfabeto $\Sigma$ com $n$ elementos, o número de palavras de tamanho $k$ sobre esse alfabeto é $n^k$.  
Nomeadamente, a única ($n^0 = 1$) palavra de tamanho $0$ é a palavra vazia $\epsilon$.

:::

:::tip[Operações sobre palavras]

Para uma palavra $\omega$ definimos a operação $\omega^R$ como a operação de **reversão** da palavra.  
Por exemplo, para $\omega = 1101$, temos que $\omega^R = 1011$.

Definimos ainda a operação binária de **concatenação** $\omega . \sigma$.  
Por exemplo, para $\omega = 1101$ e $\sigma = 010$ temos que $\omega . \sigma = 1101010$.  
Temos nomeadamente que, $\forall \omega \in \Sigma^*, \omega . \epsilon = \epsilon . \omega = \omega$.  
Note-se que esta operação não é comutativa, mas é associativa.

Para $n \in \mathbb{N}_0$, denotamos por $\omega^n$ à palavra que resulta da concatenação de $\omega$ consigo própria $n$ vezes. Mais precisamente,

$$
\omega ^n = \begin{cases}
\epsilon, & \text{se } n = 0 \\
\omega . \omega^{n-1}, & \text{se } n \neq 0
\end{cases}
$$

Usamos ainda a notação $| \omega |$ para representar o comprimento da palavra $\omega$.  
Por exemplo, $|010| = 3$ e $|\epsilon|=0$.  
Para qualquer $0 < n \leq |\omega|$, usamos $\omega_n$ para nos referir ao $n$-ésimo símbolo da palavra $\omega$.
Por exemplo, para $\omega = 010$ tem-se que $\omega_1 = 0$, $\omega_2 = 1$ e $\omega_3 = 0$.

:::

Uma [**linguagem**](color:green) sobre o alfabeto $\Sigma$ é qualquer conjunto $L \subset \Sigma^*$.

:::tip[Operações sobre Linguagens]

Damos o nome de **linguagem complementar** de $L$ à linguagem $\overline{L} = \Sigma^* / L$.  
Denotamos por $\mathcal{L}^\Sigma$ o conjunto de todas as linguagens sobre $\Sigma$.

Dadas duas linguagens $L_1, L_2 \in \mathcal{L}^\Sigma$, definimos a **concatenação** das linguagens como sendo a linguagem $L_1 . L_2 = \{ uv : u \in L_1, v \in L_2 \}$.

Definimos ainda o **fecho de Kleene** de uma linguagem $L$ à linguagem
$ L^\* = \{u_1 . u_2 . \cdots . u_n : n \in \mathbb{N}\_0, u_1, u_2, \cdots, u_n \in L \} $

:::

:::details[Exemplo de Linguagem]

Um exemplo de uma linguagem sobre o alfabeto $\{0, 1\}$ é as palavras que acabam com exatamente 3 $1$'s.

As linguagens no sentido mais corrente da palavra (Português, Inglês, Mandarim) ou mesmo as linguagens de programação são linguagens de acordo com esta definição.
Têm um alfabeto (no caso do português, corresponde às letras - minúsculas, maiúsculas, acentuadas e não acentuadas -, bem como outros símbolos - !, ?, ., por exemplo) que, quando de acordo com uma regra (muito complexa, claro) formam palavras "aceites", isto é, palavras que estão de acordo com as regras da linguagem.

:::

## Autómatos

### Autómatos Finitos Determinísticos

Um [**autómato finito determinístico (AFD)**](color:purple) é definido como um quíntuplo
$(\Sigma, Q, q_{in}, F, \delta)$ tal que

- $\Sigma$ é um alfabeto;
- $Q$ é um conjunto finito não vazio de **estados**;
- $q_{in} \in Q$ é o **estado inicial**;
- $F \subset Q$ é um conjunto de **estados finais**;
- $\delta: Q \times \Sigma \to Q$ é uma **função de transição**.

Cada AFD define uma liguagem sobre o seu alfabeto $\Sigma$.

Dizemos que um autómato é **total** se a funçao de transição estiver definida para todo o elemento em $Q \times \Sigma$, isto é, se a função de transição em cada estado estiver definida para todas as letras.  
Um autómato não total pode ser convertido num autómato total da seguinte forma:

- adiciona-se um estado não final $q'$;
- extende-se a função de transição tal que $\delta(q, a) = q'$ para todo o par $(q, a) \in Q \times \Sigma$ tal que a função de transição não fosse definida;
- define-se $\delta(q', a) = q'$, para todo o $a \in \Sigma$.
  É conveniente pensar neste estado $q'$ como um "estado lixo".

Para um AFD $(\Sigma, Q, q_{in}, F, \delta)$ definimos a **função de transição estendida** deste autómato como a função $\delta^* : Q \times \Sigma^* \to Q$ tal que

$$
\delta^*(q, w) = \begin{cases}
q, & \text{se } w = \epsilon \\
\delta^*(\delta(q,a), w') & \text{se } w=a.w'
\end{cases}
$$

para cada $q \in Q$, $a \in \Sigma$ e $w \in \Sigma^*$.  
Entenda-se esta função como a função que, dado um estado inicial e uma palavra, devolve o estado que resulta da aplicação da função de transição do autómato às sucessivas letras da palavra.

Dizemos que uma palavra $w \in \Sigma^*$ é **aceite por um AFD** se $\delta^*(q_{in}, w) \in F$.  
Ao conjunto das palavras aceites por um AFD $D$, $L(D) = \{w \in \Sigma^* : \delta^*(q_{in}, w) \in F\}$ damos o nome de **linguagem reconhecida** por esse AFD.

:::tip[Grafos de AFD's]

Estas entidades são normalmente representadas e entendidas de acordo com grafos como o que mostramos a baixo. Para caractirizar rigorosamente esta linguagem é útil considerar a extensão a $\Sigma^*$ da função de transição do AFD.

![Grafo de um AFD](./imgs/0001/AFD_graph.png#dark=1)

Este gráfico representa o autómato cujo:

- alfabeto é $\{a,b,c\}$
- conjunto de estados é $\{q_{in}, q_1, q_2\}$;
- estado inicial é $q_{in}$;
- conjunto de estados finais é $\{q_1\}$;
- função de transição é tal que
  $$
  \begin{matrix}
  \delta &|& a   &  b  &  c  \\
  -&-&-&-&- \\
  q_{in} &|& q_1 &     &     \\
  q_1    &|& q_1 & q_2 & q_2 \\
  q_2    &|& q_1 & q_2 & q_2
  \end{matrix}
  $$

Mais genericamente, a representação gráfica de um autómato é tal que:

- os estados correspondem aos vértices do grafo;
- o estado inicial é aquele em que entra a seta sem origem $\rightarrow$;
- os estados finais são os rodeados;
- os vértices (dirigidos) indicam a definição da função $\delta$.

:::

Uma linguagem $L \subset \Sigma^*$ diz-se [**regular**](color:brown) se existe uma AFD $D$ com alfabeto $\Sigma$ tal que $L(D) = L$. Denota-se por $\mathcal{REG}^\Sigma$ o conjunto de todas as linguagens regulares com alfabeto $\Sigma$.  
Usa-se apenas $\mathcal{REG}$ em vez de $\mathcal{REG}^\Sigma$ sempre que o alfabeto esteja subentendido ou não seja importante o contexto.

### Equivalência e Minimização de AFD's

Dizemos que dois AFD's são equivalentes se reconhecerem a mesma linguagem.  
Para estudar a equivalência de AFD's, introduzimos as seguintes definições:  
Para um AFD $D = (\Sigma, Q, q_{in}, F, \delta)$ dizemos que um estado $q \in Q$ é:

- [**acessível**](color:yellow) se existe $\omega \in \Sigma^*$ tal que $\delta^*(q_{in}, \omega) = q$;
- [**produtivo**](color:orange) se existe $\omega \in \Sigma^*$ tal que $\delta^*(q, \omega) \in F$;
- [**útil**](color:red) se for acessível e produtivo, [**inútil**](color:red) caso contrário;

Introduzimos a baixo o **algoritmo de procura de estados notáveis (APEN)**:

:::tip[APEN]

Apresentamos agora um algoritmo para a procura de **estados notáveis**.  
O algoritmo recebe como input um AFD $D = (\Sigma, Q, q_{in}, F, \delta)$ e dá como output um tuplo $(Ac, Prod, Ut, In)$ com os estados acessíveis, produtivos, úteis e inúteis de $D$.

1. $Ac := \{q_{in}\}$;
2. $Aux := \bigcup_{a \in \Sigma} \{ \delta(q_{in}, a) \}$;
3. enquanto $Aux \nsubseteq Ac$
   1. $Ac := Ac \cup Aux$;
   2. $Aux := \bigcup_{a \in \Sigma} \{ \delta(p, a) : p \in Aux \}$;  
      [Estados acessíveis determinados](color:yellow)
4. $Prd := F$;
5. $Aux := \bigcup_{a \in \Sigma} \{ p : \delta(p, a) \in F \}$;
6. enquanto $Aux \nsubseteq Prd$
   1. $Prd := Prd \cup Aux$;
   2. $Aux := \bigcup_{a \in \Sigma} \{ \delta(p, a) : p \in Aux \}$;  
      [Estados produtivos determinados](color:orange)
7. $Ut := Ac \cap Prd$;
8. $In := Q \backslash Ut$.  
   [Estados úteis e inúteis determinados](color:red)

Temos que a execução deste algoritmo termina sempre e identifica corretamente os estados acessíveis ($Ac$), produtivos ($Prd$), úteis ($Ut$) e inúteis ($In$).

Vamos então tentar compreender o que o algoritmo a cima está a fazer:

- Numa primeira fase (passos 1 a 3), vamos descobrir quais são os estados [acessíveis](color:yellow). Intuitivamente, podemos fazer isto começando em $q_{in}$ e fazendo uma procura (BFS) no grafo do AFD. À medida que o fazemos, colocamos esses estados no conjunto de estados [acessíveis](color:yellow);
- Numa segunda fase (passos 4 a 6), vamos determinar os estados [produtivos](color:orange). Estes são aqueles que vão levar a estados finais. Então, começamos exatamente nos estados finais e fazemos também uma procura (BFS), mas desta vez no sentido contrário das setas do grafo do AFD. À medida que descobrimos os estados [produtivos](color:orange), colocamo-los no conjunto apropriado.
- Finalmente, determinamos os estados [úteis](color:red) e [inúteis](color:red) de acordo com a sua definição.

Para facilitar a compreensão do algoritmo, pode ser útil vê-lo em prática no exemplo seguinte.

:::

:::details[Exemplo de aplicação do APEN]

// TODO

:::

:::details[Prova da correção do algoritmo APEN]

Resume-se essencialmente a: BFS funciona.

:::

Definimos agora dois estados $p,q \in Q$ de um AFD $D = (\Sigma, Q, q_{in}, F, \delta)$ como

- [**equivalentes**](color:green) se, para cada $\omega \in \Sigma^*$, temos que $\delta^*(p, \omega) \in F \Leftrightarrow \delta^*(q, \omega) \in F$;
- [**distinguíveis**](color:green) se não forem equivalentes. Neste caso existe pelo menos uma palavra $\omega \in \Sigma^*$ tal que $\delta^*(p, \omega) \in F \wedge \delta^*(q, \omega) \notin F$ (ou vice-versa). Dizemos que $\omega$ distingue $p$ e $q$;

Vamos agora identificar critérios para distinguir estados. A partir disto, poderemos descrever um algoritmo para encontrar estados equivalentes e, consequentemente, determinar um algoritmo que minimize um AFD.

Seja $D = (\Sigma, Q, q_{in}, F, \delta)$ um AFD e sejam $p,q \in Q$ e $a \in \Sigma$. Temos que:

1. Se $p \in F$, e $q \notin F$ então $p$ e $q$ são distinguíveis;
2. Se $p$ é produtivo e $q$ não, então $p$ e $q$ são distinguíveis;
3. Se $\delta(p,a)$ é produtivo e $\delta(q, a)$ não está definido, então $p$ e $q$ são distinguíveis;
4. Se $p'$ e $q'$ são estados distinguíveis, $\delta(p,a) = p'$ e $\delta(q,a) = q'$, então $p$ e $q$ são distinguíveis. Equivalentemente, se $p$ e $q$ são equivalentes, então $\delta(p,a)$ e $\delta(q,a)$ também o são para qualquer $a \in \Sigma$;

Ver a prova destas propriedades pode ajudar a compreendê-las.

:::details[Prova]

1. A palavra $\epsilon$ distingue os estados;
2. Se $p$ é produtivo, existe $\omega \in \Sigma^*$ tal que $\delta^*(p, \omega) \in F$. Contudo, como $q$ não é produtivo, $\delta^*(q, \omega) \notin F$, pelo que a palavra $\omega$ distingue os estados;
3. Sabemos que podemos adicionar um estado lixo ao AFD de forma que ficamos com um AFD equivalente. Se $\delta(q,a)$ não está definido, no autómato com estado lixo vamos ver que $\delta(q,a) = q_{lixo}$, que é um estado não produtivo. Podemos então aplicar a condição dois a $\delta(p, a)$ e $q_{lixo}$;
4. Seja $\omega$ uma palavra que distingue $p'$ e $q'$. Então, a palavra $a.\omega$ distingue $p$ e $q$.

:::

Definimos ainda $P_D$ como sendo o conjunto de todos os pares $\{p,q\} \subset Q$.

Tendo em conta estes critérios e este conjunto, introduzimos agora um **algoritmo de procura de estados distinguíveis (APED)**.

:::tip[APED]

O algoritmo recebe como input o AFD $D = (\Sigma, Q, q_{in}, F, \delta)$ e o seu output é um conjunto $Dst \subset P_D$ de pares de estados distinguíveis.

1. $$
   \begin{matrix*}[l]
   \Delta := &\{\{p,q\} \subset Q : p \in F, q \notin F \} \, \cup \\
    &\{\{p,q\} \subset Q : p \text{ produtivo e } q \text{ não produtivo} \} \, \cup \\
    &\{\{p,q\} \subset Q : \exists a \in \Sigma: \delta(p,a) \text{ produtivo e } \delta(q,a) \text{ não definido} \};
   \end{matrix*}
   $$
2. $Aux := \{ \{p,q\} \notin \Delta: \exists a \in \Sigma: \{\delta(p,a), \delta(q,a) \} \in \Delta \}$;
3. enquanto $\Delta \cup Aux \neq P_D$ e $Aux \neq \emptyset$
   1. $\Delta := \Delta \cup Aux$;
   2. $Aux := \{ \{p,q\} \notin \Delta: \exists a \in \Sigma: \{ \delta(p,a), \delta(q,a) \} \in Aux \}$;
4. $Dst := \Delta \cup Aux$.

O que o algoritmo a cima faz é o seguinte:  
Para começar, determinar os estados distinguíveis de acordo com os 3 primeiros critérios.
Então, enquanto os houver, determinar mais estados distinguíveis de acordo com o 4º critério.
À medida que estes estados vão sendo encontrados, vão sendo agrupados no conjunto $Dst$.

A execução deste algoritmo termina sempre retornando exatamente o conjunto de pares de estados distinguíveis do AFD.

Para ajudar a compreender este algoritmo pode ser útil vê-lo em prática a baixo.

:::

:::details[Exemplo de aplicação do APED]

// TODO

:::

:::details[Prova da correção do APED]

// TODO

:::

Além de permitir calcular o conjunto dos pares de estados distinguíveis de um AFD e, consequentemente, o conjunto dos seus pares de estados equivalentes, o APED pode também ser usado para determinar se dois AFD's $D1$ e $D2$ são ou não equivalentes.  
Isto é feito através do **algoritmo de teste à equivalência de AFD's (ATEQ)**:

:::tip[ATEQ]

O algoritmo recebe como input dois AFD's $D_1 = (\Sigma, Q_1, q_{in}^1, F_1, \delta_1)$ e $D_2 = (\Sigma, Q_2, q_{in}^2, F_2, \delta_2)$ tais que $Q_1 \cap Q_2 = \emptyset$, e o seu output é um booleano que indica se os AFD's são ou não equivalentes.

1. construir o AFD $D = (\Sigma, Q_1 \cup Q_2, q_{in}^1, F_1 \cup F_2, \delta)$ em que
   $$
   \delta(q, a) = \begin{cases}
   \delta_1(q,a) & \text{se estiver definido para } q \in Q_1 \\
   \delta_2(q,a) & \text{se estiver definido para } q \in Q_2 \\
   \text{indefinido} & \text{caso contrário}
   \end{cases}
   $$
2. $Dst := APED(D)$;
3. se $\{ q_{in}^1, q_{in}^2 \} \in Dst$ `return false`  
   caso contrário `return true`.

Este algoritmo termina sempre, identificando como equivalentes dois AFD's se e só se eles são equivalentes.

:::

:::details[Prova da correção do ATEQ]

Verifica-se que, se $q \in Q_1$, então $\delta(q, a) \in Q_1$, para qualquer $a \in \Sigma$.  
Indutivamente, temos então que para qualquer $\omega \in \Sigma^*$, se $q \in Q_1$, então $\delta^*(q, \omega) \in Q_1$.  
Consequentemente, se $\delta(q, \omega) \in F$ para $q \in Q_1$, então $\delta(q, \omega) \in F_1$.  
Estas propriedades verificam-se analogamente para $q \in Q_2$.

Podemos inferir então que $\{ q_{in}^1, q_{in}^2 \} \in Dst$ equivale a dizer que existe uma palavra $\omega \in \Sigma^*$ tal que apenas um dos dois se verifica:

- $\delta(q_{in}^1, \omega) \in F$;
- $\delta(q_{in}^2, \omega) \in F$.

consequentemente, já que $q_{in}^1 \in Q_1$ e $q_{in}^2 \in Q_2$, apenas um dos dois se verifica:

- $\delta(q_{in}^1, \omega) \in F_1$;
- $\delta(q_{in}^2, \omega) \in F_2$.

ou seja, a palavra $\omega$ é reconhecida exatamente num dos autómatos $D_1$ e $D_2$.

:::

Estamos agora prontos para resolver problemas de minimização de AFD's.  
Um AFD diz-se [**mínimo**](color:red) se não existir nenhum outro AFD que lhe seja equivalente e tenha menos estados.

Para determinar o AFD mínimo a um AFD $D$ definimos a **partição induzida pelos estados equivalentes** de $D$ como o conjunto $\{C[q] : q \in Q\}$ em que $C[q] = \{ q \} \cup \{ p \in Q : p, q \text{ são equivalentes} \}$, para cada $q \in Q$.  
Note-se como $C[q] \cap C[p] = \emptyset$ para $p$ e $q$ distinguíveis e
$\bigcup_{q \in Q} C[q] = Q$, pelo que o conjunto definido é de facto uma partição.

Estamos agora em posição de introduzir o algoritmo de minimização de um AFD:

:::tip[Minimização de AFD]

Dado um AFD $D = (\Sigma, Q, q_{in}, F, \delta)$ a minimização de $D$ é o AFD $m_D$ construído da seguinte forma:

- se $F = \emptyset$, então $m_D$ tem apenas um estado inicial não final, e a sua função de transição não está definida para qualquer letra;
- caso contrário, $m_D = (\Sigma, Q_m, q_{in}^m, F_m, \delta_m)$ em que:
  - $Q_m = \{ C_0, C_1, \cdots, C_n \}$ é a partição do conjunto dos estados úteis de $D$ induzida pelos estados equivalentes, com $q_{in} \in C_0$;
  - $q_{in}^m = C_0$;
  - $F_m = \{ C_i \in Q_m : C_i \cap F \neq \emptyset \}$;
  - $\delta_m : Q_m \times \Sigma \to Q_m$ é tal que:
    $$
    \delta_m(C_i, a) =
    \begin{cases}
    C_j & \text{se } \delta(q, a) \in C_j \text{ para algum } q \in C_i \\
    \text{indefinido} & \text{caso contrário}
    \end{cases}
    $$

:::

:::tip[Observações]

É relevante para o algoritmo a cima notar que, para um conjunto $C$ de estados equivalentes:

- Se existe um estado produtivo em $C$, então $C$ só tem estados produtivos. Assim sendo, ao ignorarmos estados inúteis não podemos ignorar estados inúteis por equivalência;
- Se $F \cap C \neq \emptyset$, então $C \subset F$. Isto é, se há um estado final em $C$, todos os estados de $C$ são finais. Isto é uma consequência direta do primeiro critério de distinção de estados e faz com que a definição de estados finais de $m_D$ seja não ambígua;
- Se $\delta(q,a) = p$ para $q, p \in Q$ e $a \in \Sigma$, então, para cada $q' \in C[q]$ temos que um dos dois se verifica:

  - $\delta(q', a)$ não está definido e $p$ não é produtivo;
  - $\delta(q', a) \in C[p]$.

  Isto faz com que a função $\delta_m$ esteja bem definida. Note-se que desta propriedade resulta que $\delta_m(C, a)$ não pode oferecer dois valores diferentes, nem pode ser indefinida para alguns valores e definida para outros (uma vez que em $m_D$ consideramos apenas estados úteis).

:::

:::details[Prova de equivalência de $m_D$ a $D$]

Seja $\omega \in \Sigma^*$ tal que $\delta^*(q, \omega) \in F$.  
Se $\omega = \epsilon$, então $\delta_m^*(C[q], \omega) \in F_m$.  
Caso contrário, $\omega = a.\omega'$ para $a \in \Sigma$ e $\omega' \in \Sigma^*$.  
Segundo o quarto critério de distinção de estados, temos que se $q' \in C[q]$ então $\delta(q', a) \in C[\delta(q, a)]$.  
Assim sendo, por indução, temos que se $\delta^*(q, \omega) \in F$, então $\delta_m^*(C[q], \omega) \in F_m$.  
Nomeadamente, uma palavra que seja aceite em $D$, será também aceite em $m_D$.

Explicado de uma forma menos rigorosa, o que estamos a constatar é que à medida que vai "lendo símbolos do alfabeto", o AFD $m_D$ está sempre num estado que corresponde à "classe de equivalência" do estado em que $D$ está depois de ler esses mesmos símbolos.  
Ora, se ao fim dessa leitura, $D$ está num estado final, e as classes de equivalência de estados finais em $D$ são estados finais em $m_D$, temos que ao fim dessa mesma leitura, $m_D$ também está num estado final.  
Quer isto dizer que qualquer palavra aceite por $D$ é também aceite por $m_D$.

:::

:::details[Exemplo da Minimização de um AFD]

// TODO

:::

### Autómatos Finitos Não Determinísticos

Introduzimos a notação $\wp(S)$ como o conjunto dos subconjuntos do conjunto $S$. Também se diz que este é o **conjunto das partes** de $S$.

:::details[Exemplo de um Conjunto de Partes]

Temos, por exemplo, que $\wp(\{0,1\}) = \{\emptyset, \{0\}, \{1\}, \{0,1\}\}$.

:::

:::tip[Tamanho do conjunto das partes]

Se um conjunto $S$ tem $n$ elementos, o conjunto $\wp(S)$ tem $2^n$ elementos.

:::

Um [**autómato finito não determinístico (AFND)**](color:pink) é definido como um quíntuplo $(\Sigma, Q, q_{in}, F, \delta)$ tal que:

- $\Sigma$ é um alfabeto;
- $Q$ é um conjunto finito de **estados**;
- $q_{in} \in Q$ é o **estado inicial**;
- $F \subset Q$ é um conjunto de **estados finais**;
- $\delta: Q \times \Sigma \to \wp(Q)$ é uma **função de transição**.

Note-se que a diferença entre um AFND e um AFD é que a função de transição num AFD **não é determinística**, na medida em que não define um e um só estado. Para cada par $(q, a) \in Q \times \Sigma$ temos que $\delta(q, a)$ define o subconjunto de $Q$ dos estados que podem resultar da transição por $a$ a partir de $q$.

Podemos ainda assinalar o autómato finito não determinístico como [**AFND$^\epsilon$**](color:pink) se a função de transição tiver como domínio $Q \times (\Sigma \times \{ \epsilon \})$. Ou seja, um AFND$^\epsilon$ é tal que pode haver transições que não são "causadas" por letra nenhuma. Nesta situação diz-se que o AFND tem **movimentos-$\epsilon$**.  
A distinção entre AFND e AFND$^\epsilon$ é negligenciada em contextos que não seja relevante. Para simplificar, pode-se assumir que um AFND está sempre dotado de movimentos-$\epsilon$.

:::tip[Grafo de um AFND]

![Grafo de um AFND](./imgs/0001/AFND_graph.png#dark=1)

Este gráfico representa o autómato cujo:

- alfabeto é $\{a,b,c\}$
- conjunto de estados é $\{q_{in}, q_1, q_2, q_3, q_4, q_5\}$;
- estado inicial é $q_{in}$;
- conjunto de estados finais é $\{q_5\}$;
- função de transição é tal que
  $$
  \begin{matrix}
  \delta &|& a   &  b  &  c & \epsilon \\
  -&-&--&--&---&--- \\
  q_{in} &|& \emptyset & \emptyset & \emptyset & \{ q_1, q_3 \} \\
  q_1 &|& \{ q_2 \} & \{ q_1 \} & \{ q_1 \} & \emptyset \\
  q_2 &|& \{ q_1 \} & \{ q_2 \} & \{ q_2 \} & \{ q_5 \} \\
  q_3 &|& \{ q_3 \} & \{ q_3 \} & \{ q_3, q_4 \} & \{ q_4 \} \\
  q_4 &|& \emptyset & \emptyset & \{ q_5 \} & \emptyset \\
  q_5 &|& \emptyset & \emptyset & \emptyset & \emptyset
  \end{matrix}
  $$

:::

Para isto, começamos por definir o **fecho-$\epsilon$** de um estado.  
Seja $A = (\Sigma, Q, q_{in}, F, \delta)$ um AFND. O fecho-$\epsilon$ de um estado $q \in Q$ é o conjunto $q^\epsilon \subset Q$ tal que:

- $q \in q^\epsilon$;
- $q' \in q^\epsilon \Rightarrow \delta(q', \epsilon) \subset q^\epsilon$.

Dado um subconjunto $C$ de $Q$, o seu fecho-$\epsilon$ é o conjunto $C^\epsilon = \bigcup_{q \in C} q^\epsilon$.  
Dito de forma corrente, o fecho-$\epsilon$ de um estado $q \in Q$ é o conjunto de estados que se conseguem obter a partir de $q$ apenas com movimentos-$\epsilon$.

Podemos então definir a **função de transição estendida** de um AFND $A = (\Sigma, Q, q_{in}, F, \delta)$ como a função $\delta^* : Q \times \Sigma^* \to \wp(Q)$ tal que, para cada $q \in Q$, $a \in \Sigma$ e $\omega \in \Sigma^*$:

$$
\delta^*(q, \omega) =
\begin{cases}
q^\epsilon & \text{se } \omega = \epsilon \\
\bigcup_{q' \in q^\epsilon} \left( \bigcup_{q'' \in \delta(q', a)} \delta^*(q'', \omega' ) \right) & \text{se } \omega = a.\omega'
\end{cases}
$$

Através desta função, podemos definir a **palavra aceite** por um AFND como qualquer palavra $\omega \in \Sigma^*$ tal que $\delta^*(q_{in}, \omega) \cap F \neq \emptyset$.  
Dito de forma corrente, uma palavra é aceite por um AFND se **houver uma** sequência de estados em $Q$ tal que:

- a concatenaçao dos símbolos das transições entre esses estados resulte na palavra em questão;
- a sequência acabe num estado final.

:::details[Exemplo de Palavra Aceite num AFND]

// TODO

:::

A **linguagem reconhecida** por um AFND é o conjunto das palavras aceites por esse AFND, isto é, o conjunto $L(A) = \{ \omega \in \Sigma^* : \delta^*(q_{in}, \omega) \cap F \neq \emptyset \}$.

:::details[Exemplo de Linguagem Reconhecida por um AFND]

// TODO

:::

### Conversão de AFND's em AFD's

Temos que todas as linguagens reconhecidas por AFND's são linguagens regulares.
Por outras palavras, seja qual for o AFND, existe um AFD que reconhece a mesma linguagem que o AFND de partida.
Vamos ver daqui para a frente como obter a partir de um AFND o seu AFD equivalente.

Primeiro, começamos por remover os movimentos-$\epsilon$:  
Dado um AFND $A = (\Sigma, Q, q_{in}, F, \delta)$, temos que o AFND $A' = (\Sigma, Q, q_{in}, F', \delta')$ é-lhe equivalente se

- $F' = \{q \in Q : q^\epsilon \cap F \neq \emptyset \}$;
- $\delta' : Q \times \Sigma \to \wp(Q)$ é tal que $\delta'(q,a) = \bigcup_{q' \in q^\epsilon} \left( \bigcup_{q'' \in \delta(q', a)} q''^\epsilon \right)$ para cada $q \in Q$ e $a \in \Sigma$.

Pode-se entender a função $\delta'$ como sendo $\delta^*$ aplicada a palavras com apenas uma letra.  
Desta forma, é claro que $\delta'^*(q, \omega) = \delta^*(q, \omega)$ (em $A'$, considerar os fechos-$\epsilon$ não tem efeito) pelo que os autómatos $A$ e $A'$ reconhecem a mesma linguagem.

:::tip[Remoção de movimentos-$\epsilon$]

Vamos compreender as alterações a cima:

- Se podermos alcançar um estado final através de um movimento-$\epsilon$, então se considerarmos esse estado como sendo também final, as palavras reconhecidas pelo nosso AFND não mudam;
- Para cada estado $q \in Q$ vamos ver que estados conseguimos alcançar usando apenas a letra $a \in \Sigma$. O conjunto de estados que conseguimos alcançar só com $a$ corresponde ao resultado de aplicar $a$ a todos os estados em $q^\epsilon$ e depois tirar o fecho-$\epsilon$ do resultado. Isto é, pego em todos os estados a que consigo chegar com $\epsilon$, vejo onde consigo chegar com $a$, e finalmente aplico $\epsilon$ outra vez.

:::

:::details[Prova da equivalência entre $A$ e $A'$]

// TODO

:::

:::details[Exemplo da remoção de movimentos-$\epsilon$]

// TODO

:::

Agora que já não temos movimentos-$\epsilon$, passamos o AFND para um AFD:  
Dado um AFND $A = (\Sigma, Q, q_{in}, F, \delta)$, temos que o AFD $D = (\Sigma, \wp(Q), {q_{in}}, F', \delta')$ em que:

- $F' = \{ C \subset Q : C \cap F \neq \emptyset \}$;
- $\delta': \wp(Q) \times \Sigma \to \wp(Q)$ é tal que, para cada $C \subset Q$ e $a \in \Sigma$
  $$
  \delta'(C, a) = \bigcup_{q \in C} \delta(q,a)
  $$
  reconhece a mesma linguagem que $A$

:::details[Prova da equivalência entre $A$ e $D$]

// TODO

:::

:::details[Exemplo da passagem de AFND para AFD]

// TODO

:::

## Propriedades das Linguagens Regulares

A classe das linguagens regulares é muito bem comportada, suportando uma quantidade de construções.
Comecemos por analisar as suas propriedades lógicas.

:::tip[Proposição]

Para um alfabeto $\Sigma$ e $L, L_1, L_2 \subset \Sigma^*$ linguagens regulares, temos que $\overline{L}$ e $L_1 \cap L_2$ são linguagens regulares.

:::

// TODO
