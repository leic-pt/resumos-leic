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

:::info[Exemplo de Alfabeto]

Um exemplo de um alfabeto é o conjunto $\{a,b,c\}$

:::

Definimos uma [**palavra**](color:yellow) sobre um alfabeto $\Sigma$ como uma sequência finita de elementos de $\Sigma$. O conjunto de todas as palavras constituídas pelos símbolos do alfabeto $\Sigma$ é representado por $\Sigma^*$.  
Todos os alfabetos contêm uma palavra, a que se dá o nome de palavra vazia. Esta costuma ser representada pela letra grega $\epsilon$.

:::info[Exemplo de Palavra]

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

Damos o nome de **linguagem complementar** de $L$ à linguagem $\overline{L} = \Sigma^* \setminus L$.  
Denotamos por $\mathcal{L}^\Sigma$ o conjunto de todas as linguagens sobre $\Sigma$.

Dadas duas linguagens $L_1, L_2 \in \mathcal{L}^\Sigma$, definimos a **concatenação** das linguagens como sendo a linguagem $L_1 . L_2 = \{ uv : u \in L_1, v \in L_2 \}$.

Definimos ainda o **fecho de Kleene** de uma linguagem $L$ à linguagem
$L^* = \{u_1 . u_2 . \cdots . u_n : n \in \mathbb{N}_0, u_1, u_2, \cdots, u_n \in L \}$

:::

:::details[Exemplo de Linguagem]

Um exemplo de uma linguagem sobre o alfabeto $\{0, 1\}$ é as palavras que acabam com exatamente três $1$'s.

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

Dizemos que um autómato é **total** se a função de transição estiver definida para todo o elemento em $Q \times \Sigma$, isto é, se a função de transição em cada estado estiver definida para todas as letras.  
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

Estas entidades são normalmente representadas e entendidas de acordo com grafos como o que mostramos abaixo. Para caractirizar rigorosamente esta linguagem é útil considerar a extensão a $\Sigma^*$ da função de transição do AFD.

![Grafo de um AFD](./imgs/0001/AFD_graph.png#dark=1)

Este gráfico representa o autómato cujo:

- alfabeto é $\{a,b,c\}$
- conjunto de estados é $\{q_{in}, q_1, q_2\}$;
- estado inicial é $q_{in}$;
- conjunto de estados finais é $\{q_1\}$;
- função de transição é tal que
  $$
  \begin{array}{c|ccc}
  \delta & a   &  b  &  c  \\
  \hline
  q_{in} & q_1 &     &     \\
  q_1    & q_1 & q_2 & q_2 \\
  q_2    & q_1 & q_2 & q_2
  \end{array}
  $$

Mais genericamente, a representação gráfica de um autómato é tal que:

- os estados correspondem aos vértices do grafo;
- o estado inicial é aquele em que entra a seta sem origem $\rightarrow$;
- os estados finais são os rodeados;
- as arestas (dirigidas) indicam a definição da função $\delta$.

:::

Uma linguagem $L \subset \Sigma^*$ diz-se [**regular**](color:brown) se existe um AFD $D$ com alfabeto $\Sigma$ tal que $L(D) = L$. Ou seja, uma linguagem é regular se for reconhecida por um AFD. Denota-se por $\mathcal{REG}^\Sigma$ o conjunto de todas as linguagens regulares com alfabeto $\Sigma$.  
Usa-se apenas $\mathcal{REG}$ em vez de $\mathcal{REG}^\Sigma$ sempre que o alfabeto esteja subentendido ou não seja importante o contexto.

### Equivalência e Minimização de AFD's

Dizemos que dois AFD's são equivalentes se reconhecerem a mesma linguagem.  
Para estudar a equivalência de AFD's, introduzimos as seguintes definições:  
Para um AFD $D = (\Sigma, Q, q_{in}, F, \delta)$ dizemos que um estado $q \in Q$ é:

- [**acessível**](color:yellow) se existe $\omega \in \Sigma^*$ tal que $\delta^*(q_{in}, \omega) = q$. Por outras palavras, um estado é [acessível](color:yellow) se for alcançável a partir da origem;
- [**produtivo**](color:orange) se existe $\omega \in \Sigma^*$ tal que $\delta^*(q, \omega) \in F$. Por outras palavras, um estado é [produtivo](color:orange) se for possível chegar a um estado final a partir dele;
- [**útil**](color:red) se for acessível e produtivo, [**inútil**](color:red) caso contrário.

Introduzimos abaixo o **algoritmo de procura de estados notáveis (APEN)**:

:::tip[APEN]

Apresentamos agora um algoritmo para a procura de **estados notáveis**.  
O algoritmo recebe como input um AFD $D = (\Sigma, Q, q_{in}, F, \delta)$ e dá como output um tuplo $(Ac, Prod, Ut, In)$ com, respetivamente, os estados acessíveis, produtivos, úteis e inúteis de $D$.

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
   2. $Aux := \bigcup_{a \in \Sigma} \{ p : \delta(p, a) \in Aux \}$;  
      [Estados produtivos determinados](color:orange)
7. $Ut := Ac \cap Prd$;
8. $In := Q \setminus Ut$.  
   [Estados úteis e inúteis determinados](color:red)

Temos que a execução deste algoritmo termina sempre e identifica corretamente os estados acessíveis ($Ac$), produtivos ($Prd$), úteis ($Ut$) e inúteis ($In$).

Vamos então tentar compreender o que o algoritmo acima está a fazer:

- Numa primeira fase (passos 1 a 3), vamos descobrir quais são os estados [acessíveis](color:yellow). Intuitivamente, podemos fazer isto começando em $q_{in}$ e fazendo uma procura (BFS) no grafo do AFD. À medida que o fazemos, colocamos esses estados no conjunto de estados [acessíveis](color:yellow);
- Numa segunda fase (passos 4 a 6), vamos determinar os estados [produtivos](color:orange). Estes são aqueles que vão levar a estados finais. Então, começamos exatamente nos estados finais e fazemos também uma procura (BFS), mas desta vez no sentido contrário das setas do grafo do AFD. À medida que descobrimos os estados [produtivos](color:orange), colocamo-los no conjunto apropriado.
- Finalmente, determinamos os estados [úteis](color:red) e [inúteis](color:red) de acordo com a sua definição.

Para facilitar a compreensão do algoritmo, pode ser útil vê-lo em prática no exemplo seguinte.

:::

:::details[Exemplo de aplicação do APEN]

Tenhamos um AFD tal que:

![Autómato Inicial - APEN](./imgs/0001/APEN_AUTOM_INI.png#dark=1)

Ora, procurando seguir os passos descritos na descrição acima:

- Descobrir os estados [acessíveis](color:yellow) passa por realizar uma BFS a partir do estado inicial, $q_{in}$ - todos os estados encontrados dizem-se [acessíveis](color:yellow):

  Começamos com o conjunto de estados acessíveis a conter apenas $q_{in}$:

  ![BFS - Estados acessíveis (1)](./imgs/0001/BFS_ACESSIVEIS_1.png#dark=1)

  Logo de seguida, começamos a **BFS** partindo desse mesmo estado:

  ![BFS - Estados acessíveis (2)](./imgs/0001/BFS_ACESSIVEIS_2.png#dark=1)

  Encontrámos, a distância $1$ do estado inicial, os estados $q_1, q_2, q_5$. A BFS continua então, partindo desses mesmos estados, tal que:

  ![BFS - Estados acessíveis (3)](./imgs/0001/BFS_ACESSIVEIS_3.png#dark=1)

  Podemos observar que a procura encontrou aqui $q_4$. Mais ainda, temos que **não há mais caminhos** por onde prosseguir. A procura termina, portanto, e o conjunto de estados acessíveis foi obtido.

- De seguida, determinar os estados [produtivos](color:orange): fazer BFS's, partindo de cada estado final, pelo "autómato transposto":

  Inicialmente, o grafo transposto encontra-se assim (os estados finais estão, claro, no conjunto dos estados produtivos):
  ![BFS's - Estados produtivos (1)](./imgs/0001/BFS_PRODUTIVOS_1.png#dark=1)

  Realizamos aqui o **primeiro passo** da BFS - partindo dos estados finais, $q_1$ e $q_4$, realizamos uma procura pelos estados a que podemos chegar a partir deles:
  ![BFS's - Estados produtivos (2)](./imgs/0001/BFS_PRODUTIVOS_2.png#dark=1)

  Repetimos o passo anterior, desta vez partindo dos estados que obtivemos acima: $q_{in}$ e $q_2$:
  ![BFS's - Estados produtivos (3)](./imgs/0001/BFS_PRODUTIVOS_3.png#dark=1)

  A partir dos estados acima obtidos, não podemos atingir qualquer outro estado, pelo que o algoritmo pára e temos determinado o conjunto de estados produtivos do autómato.

  Ora, temos então dois conjuntos em mãos:

$$
\text{Estados Acessiveis} = \{q_{in}, q_1, q_2, q_4, q_5\}\\
\text{Estados Produtivos} = \{q_{in}, q_1, q_2, q_3, q_4, q_5, q_6\}
$$

Pela definição da utilidade de um estado (um estado diz-se [útil](color:red) caso seja acessível e produtivo), podemos dizer que a interseção dos conjuntos acima corresponde ao conjunto dos estados úteis do autómato, e que portanto:

$$
\text{Estados Úteis} = Ac \cap Prd = \{q_{in}, q_1, q_2, q_4, q_5\}\\
\text{Estados Inúteis} = Q \setminus Ut = \{q_3, q_6, q_7\}
$$

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

O que o algoritmo acima faz é o seguinte:  
Para começar, determinar os estados distinguíveis de acordo com os 3 primeiros critérios.
Então, enquanto os houver, determinar mais estados distinguíveis de acordo com o 4º critério.
À medida que estes estados vão sendo encontrados, vão sendo agrupados no conjunto $Dst$.

A execução deste algoritmo termina sempre retornando exatamente o conjunto de pares de estados distinguíveis do AFD.

Para ajudar a compreender este algoritmo pode ser útil vê-lo em prática abaixo.

:::

:::details[Exemplo de aplicação do APED]

Consideremos um AFD tal que:

![AFD - APED](./imgs/0001/DISTINGUIVEIS-AFD.png#dark=1)

A nossa primeira tarefa será **preencher $\Delta$ segundo os três critérios iniciais**:

- Num primeiro momento, organizar pares onde um elemento é um estado final e o outro é um estado não final (a ordem é irrelevante) - temos, neste momento:

$$
\Delta = \{[p, q], [q, s], [q, r]\}
$$

- De seguida, criar pares onde um elemento é um estado produtivo e o outro não - fazendo a BFS mencionada [acima](./linguagens-e-automatos#equivalência-e-minimzação-de-AFDs), verificamos que todos os estados são produtivos, pelo que $\Delta$ permanece igual.

- Por fim, encontrar todos os pares tais que um dos vértices **transita, segundo um dado símbolo, para um estado produtivo**, e o outro não tem qualquer transição associada a esse símbolo. Verificar esta condição pode ser mais fácil seguindo algumas heurísticas:

  - Num primeiro momento, verificar **todos os estados** para os quais nem todos os símbolos têm uma transição definida - aqui, $p$ não tem transição definida para $b$ e $c$, e é o único nessa situação. Podemos a partir daqui depreender que qualquer par obtido através desta "procura" terá de envolver $p$.

  - Obtidos símbolos sem transição definida para $p$, aqui $b$ e $c$, procuramos os estados que têm transição definida para os mesmos **e onde essa transição leve a um estado produtivo**. Neste caso, $q$ tem transições segundo $b$ e $c$ para estados produtivos, tais como $r$ e $s$, pelo que podemos admitir que os pares criados por esta procura são $\{[p, q], [p, r], [p, s]\}$.

  No final destes três passos, ficamos com:

  $$
  \Delta = \{[p, q], [q, s], [q, r], [p, r], [p, s]\}.
  $$

O resto do algoritmo normalmente faz-se recorrendo a uma tabela, onde cada linha e coluna correspondem a um dos estados do autómato (só se utiliza **metade** da tabela, já que é simétrica). A tabela corresponde ao autómato em questão seria:

| $s$ |              |              |              | $\backslash$ |
| --- | ------------ | ------------ | ------------ | ------------ |
| $r$ |              |              | $\backslash$ | $\backslash$ |
| $q$ |              | $\backslash$ | $\backslash$ | $\backslash$ |
| $p$ | $\backslash$ | $\backslash$ | $\backslash$ | $\backslash$ |
|     | $p$          | $q$          | $r$          | $s$          |

Cada entrada na tabela corresponde a um dos **pares** de estados possíveis. Começamos por preencher a tabela com uma **cruz** em cada entrada que corresponde a um par em $\Delta$. Seria, portanto:

| $s$ | $\times$     | $\times$     |              | $\backslash$ |
| --- | ------------ | ------------ | ------------ | ------------ |
| $r$ | $\times$     | $\times$     | $\backslash$ | $\backslash$ |
| $q$ | $\times$     | $\backslash$ | $\backslash$ | $\backslash$ |
| $p$ | $\backslash$ | $\backslash$ | $\backslash$ | $\backslash$ |
|     | $p$          | $q$          | $r$          | $s$          |

Entramos aqui na secção porventura mais desagradável: percorrer **todos os pares de $\Delta$** (que tenham uma cruz na tabela, portanto), e para cada um deles, verificar se existe um par que não esteja em $\Delta$ tal que, segundo transições por um mesmo símbolo, chegam ao par de estados original (e adicionar qualquer estado encontrado à tabela). Assim que um par é (ou não) encontrado, a cruz na tabela é rodeada por um círculo (para anotar que já foi explorado).

Ora, procuremos então percorrer$\Delta$:

- todos os estados que incluem $p$ não adicionam pares a $\Delta$, já que não há qualquer estado a **transicionar** para $p$ sequer. A tabela fica, então:

| $s$ | $\textcircled\times$ | $\times$     |              | $\backslash$ |
| --- | -------------------- | ------------ | ------------ | ------------ |
| $r$ | $\textcircled\times$ | $\times$     | $\backslash$ | $\backslash$ |
| $q$ | $\textcircled\times$ | $\backslash$ | $\backslash$ | $\backslash$ |
| $p$ | $\backslash$         | $\backslash$ | $\backslash$ | $\backslash$ |
|     | $p$                  | $q$          | $r$          | $s$          |

- olhando para o estado $[q, r]$, podemos notar que não há qualquer par de estados que não esteja em $\Delta$ e em que, segundo o mesmo símbolo, leve ao estado $[q, r]$. Não existe qualquer estado segundo $a$ a transicionar para $r$, nem nenhum estado que segundo $b$ ou $c$ transicione para $q$, pelo que o estado dá-se por explorado sem adicionar nada de novo à tabela (sem ser circular a cruz respetiva a $[q, r]$).

| $s$ | $\textcircled\times$ | $\times$             |              | $\backslash$ |
| --- | -------------------- | -------------------- | ------------ | ------------ |
| $r$ | $\textcircled\times$ | $\textcircled\times$ | $\backslash$ | $\backslash$ |
| $q$ | $\textcircled\times$ | $\backslash$         | $\backslash$ | $\backslash$ |
| $p$ | $\backslash$         | $\backslash$         | $\backslash$ | $\backslash$ |
|     | $p$                  | $q$                  | $r$          | $s$          |

- por fim, resta explorar $[q, s]$. Não existe qualquer estado segundo $a$ a transicionar para $s$, nem nenhum estado que segundo $b$ ou $c$ transicione para $q$, pelo que o estado dá-se por explorado sem adicionar nada de novo à tabela (sem ser circular a cruz respetiva a $[q, s]$).

| $s$ | $\textcircled\times$ | $\textcircled\times$ |              | $\backslash$ |
| --- | -------------------- | -------------------- | ------------ | ------------ |
| $r$ | $\textcircled\times$ | $\textcircled\times$ | $\backslash$ | $\backslash$ |
| $q$ | $\textcircled\times$ | $\backslash$         | $\backslash$ | $\backslash$ |
| $p$ | $\backslash$         | $\backslash$         | $\backslash$ | $\backslash$ |
|     | $p$                  | $q$                  | $r$          | $s$          |

Todas as entradas com cruzes na tabela foram oficialmente exploradas. Os estados distinguíveis correspondem, então, às **entradas com cruzes** da tabela: podemos afirmar que todos os pares de estados do autómato, exceto $[r, s]$, são distinguíveis entre si.

:::

<!--
:::details[Prova da correção do APED]

// TODO

:::
-->

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

É relevante para o algoritmo acima notar que, para um conjunto $C$ de estados equivalentes:

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

Consideremos o seguinte autómato:

![AFD - Minimização](./imgs/0001/MINIMIZACAO-AFD.png#dark=1)

Apesar do decorrer do algoritmo de procura de estados distinguíveis não constar deste exemplo, consideremos que, aquando do concluir do mesmo, a tabela é tal que:

| $q_5$ | $\textcircled\times$ | $\textcircled\times$ | $\textcircled\times$ | $\textcircled\times$ |              | $\backslash$ |
| ----- | -------------------- | -------------------- | -------------------- | -------------------- | ------------ | ------------ |
| $q_4$ | $\textcircled\times$ | $\textcircled\times$ | $\textcircled\times$ | $\textcircled\times$ | $\backslash$ | $\backslash$ |
| $q_3$ | $\textcircled\times$ | $\textcircled\times$ | $\textcircled\times$ | $\backslash$         | $\backslash$ | $\backslash$ |
| $q_2$ | $\textcircled\times$ |                      | $\backslash$         | $\backslash$         | $\backslash$ | $\backslash$ |
| $q_1$ | $\textcircled\times$ | $\backslash$         | $\backslash$         | $\backslash$         | $\backslash$ | $\backslash$ |
| $q_0$ | $\backslash$         | $\backslash$         | $\backslash$         | $\backslash$         | $\backslash$ | $\backslash$ |
|       | $q_0$                | $q_1$                | $q_2$                | $q_3$                | $q_4$        | $q_5$        |

A tabela final tem, portanto, **dois pares de estados equivalentes**: $[q_1, q_2]$ e $[q_4, q_5]$. Ao desenhar o autómato minimizado, **os estados presentes em cada par terão de estar juntos**.

![AFD - Minimização](./imgs/0001/AFD_MINIMIZADO.png#dark=1)

Pode agora ser mais claro o porquê de considerarmos dois estados equivalentes/distinguíveis: os estados equivalentes têm, no autómato original, transições equivalentes (segundo o mesmo símbolo vão sempre para um estado num "grupo de estados equivalentes"). No caso de $q_1, q_2$, por exemplo, temos que:

- através de $a$ transicionam para o próprio estado em ambas as situações;
- através de $b$ transicionam, em ambos os casos, para $q_0$;
- através de $c$ transicionam, em ambos os casos, para um estado dentro do "par equivalente" $[q_4, q_5]$ - $q_1$ para $q_4$ e $q_2$ para $q_5$.

:::

### Autómatos Finitos Não Determinísticos

Introduzimos a notação $\wp(S)$ como o conjunto dos subconjuntos do conjunto $S$. Também se diz que este é o **conjunto das partes** de $S$.

:::info[Exemplo de um Conjunto de Partes]

Temos, por exemplo, que $\wp(\{0,1\}) = \{\emptyset, \{0\}, \{1\}, \{0,1\}\}$.

:::

:::tip[Tamanho do conjunto das partes]

Se um conjunto $S$ tem $n$ elementos, o conjunto $\wp(S)$ tem $2^n$ elementos.

:::

:::details[Prova]

Isto é uma consequência de cada conjunto estar unicamente determinado pelos elementos que têm.
Ora, para cada elemento, ele ou está, ou não está num dado conjunto - isto é, cada elemento tem 2 opções em relação a um dado conjunto.
Sendo assim, deve haver $2^n$ subconjuntos de um conjunto de $n$ elementos.

Esta prova pode ser formalizada por indução.

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
  \begin{array}{c|cccc}
  \delta & a   &  b  &  c & \epsilon \\
  \hline
  q_{in} & \emptyset & \emptyset & \emptyset & \{ q_1, q_3 \} \\
  q_1 & \{ q_2 \} & \{ q_1 \} & \{ q_1 \} & \emptyset \\
  q_2 & \{ q_1 \} & \{ q_2 \} & \{ q_2 \} & \{ q_5 \} \\
  q_3 & \{ q_3 \} & \{ q_3 \} & \{ q_3, q_4 \} & \{ q_4 \} \\
  q_4 & \emptyset & \emptyset & \{ q_5 \} & \emptyset \\
  q_5 & \emptyset & \emptyset & \emptyset & \emptyset
  \end{array}
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

- a concatenação dos símbolos das transições entre esses estados resulte na palavra em questão;
- a sequência acabe num estado final.

:::details[Exemplo de Palavra Aceite num AFND]

Consideremos o AFND que aceita todas as palavras com **número ímpar de $a$'s** ou que **terminam em $c$**:

![Palavra Aceite por um AFND](./imgs/0001/PALAVRA_ACEITE_AFND.png#dark=1)

Ora, tentemos então verificar se algumas palavras são ou não aceites por este autómato:

- tenhamos $abcab$; não deve ser aceite: **não tem número ímpar de $a$'s nem termina em $c$**. As imagens abaixo procuram seguir a **sequência de estados** da palavra. [**Nenhuma delas termina num estado final**](color:orange), pelo que a palavra não é aceite (como esperado).

  ![Palavra não aceite por um AFND 1](./imgs/0001/PALAVRA1_PASSO_1.png#dark=1)
  ![Palavra não aceite por um AFND 2](./imgs/0001/PALAVRA1_PASSO_2.png#dark=1)
  ![Palavra não aceite por um AFND 3](./imgs/0001/PALAVRA1_PASSO_3.png#dark=1)
  ![Palavra não aceite por um AFND 4](./imgs/0001/PALAVRA1_PASSO_4.png#dark=1)
  ![Palavra não aceite por um AFND 5](./imgs/0001/PALAVRA1_PASSO_5.png#dark=1)
  ![Palavra não aceite por um AFND 6](./imgs/0001/PALAVRA1_PASSO_6.png#dark=1)

- por outro lado, consideremos $acbaa$ - a palavra deve ser aceite, já que tem número ímpar de $a$'s. Vejamos então o caminho percorrido ao ler a palavra:

  ![Palavra aceite (1) por um AFND 1](./imgs/0001/PALAVRA1_PASSO_1.png#dark=1)
  ![Palavra aceite (1) por um AFND 2](./imgs/0001/PALAVRA2_PASSO_2.png#dark=1)
  ![Palavra aceite (1) por um AFND 3](./imgs/0001/PALAVRA2_PASSO_3.png#dark=1)
  ![Palavra aceite (1) por um AFND 4](./imgs/0001/PALAVRA2_PASSO_4.png#dark=1)
  ![Palavra aceite (1) por um AFND 5](./imgs/0001/PALAVRA2_PASSO_5.png#dark=1)
  ![Palavra aceite (1) por um AFND 6](./imgs/0001/PALAVRA2_PASSO_6.png#dark=1)

  Como último passo, lemos aqui o símbolo vazio - podemos sempre lê-lo, e transitamos assim para o estado final desejado!

  ![Palavra aceite (1) por um AFND 7](./imgs/0001/PALAVRA2_PASSO_7.png#dark=1)

:::

A **linguagem reconhecida** por um AFND é o conjunto das palavras aceites por esse AFND, isto é, o conjunto $L(A) = \{ \omega \in \Sigma^* : \delta^*(q_{in}, \omega) \cap F \neq \emptyset \}$.

:::details[Exemplo de Linguagem Reconhecida por um AFND]

![AFND depois de remover movimentos-epsilon](./imgs/0001/AFND-sem-movimentos-epsilon.png#dark=3)

Por exemplo, a linguagem reconhecida pelo AFND acima é a linguagem das palavras sobre o alfabeto $\{a,b,c\}^*$ que têm um número ímpares de $a$'s ou acabam em $c$.

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

Vamos compreender as alterações acima:

- Se podermos alcançar um estado final através de um movimento-$\epsilon$, então se considerarmos esse estado como sendo também final, as palavras reconhecidas pelo nosso AFND não mudam;
- Para cada estado $q \in Q$ vamos ver que estados conseguimos alcançar usando apenas a letra $a \in \Sigma$. O conjunto de estados que conseguimos alcançar só com $a$ corresponde ao resultado de aplicar $a$ a todos os estados em $q^\epsilon$ e depois tirar o fecho-$\epsilon$ do resultado. Isto é, pego em todos os estados a que consigo chegar com $\epsilon$, vejo onde consigo chegar com $a$, e finalmente aplico $\epsilon$ outra vez.

![Fecho epsilon de um estado](./imgs/0001/fecho_epsilon.png#dark=3)

Por exemplo, na imagem acima, estão assinalados que podem ser obtidos a partir de $q_{in}$ com a letra $b$.
Todas as transições a partir de $q_{in}$ passam por:

- ver onde é possível chegar com movimentos-$\epsilon$. Na nossa imagem, estes primeiros movimentos estão assinalados a [verde](color:green). O estado $q_4$, apesar de estar em $q_{in}^\epsilon$ não está marcado com seta verde pois não há nenhum transição a partir de $q_4$ com $b$.
- depois, fazemos então as transições que usam a letra $b$, transições estas que estão assinaladas com setas [vermelhas](color:red).
- finalmente, podemos ainda fazer mais movimentos-$\epsilon$, que estão assinalados a [azul](color:blue).

Os estados que conseguimos obter a partir de $q_{in}$ com apenas um $b$ são os [vermelhos](color:red) e os [azuis](color:blue) - $\{ q_1, q_3, q_4 \}$.

:::

:::details[Prova da equivalência entre $A$ e $A'$]

A definição de função de transição estendida para o AFND $A'$ será

$$
\delta'^*(q, \omega) =
\begin{cases}
q & \text{se } \omega = \epsilon \\
\bigcup_{q' \in q^\epsilon} \left( \bigcup_{q'' \in \delta'(q', a)} \delta'^*(q'', \omega') \right) & \text{se } \omega = a.\omega'
\end{cases}
\\ =
\begin{cases}
q & \text{se } \omega = \epsilon \\
\bigcup_{q' \in \delta'(q,a)} \delta'^*(q', \omega') & \text{se } \omega = a. \omega'
\end{cases}
\\ =
\begin{cases}
q & \text{se } \omega = \epsilon \\
\bigcup_{q' \in q^\epsilon} \left(
\bigcup_{q'' \in \delta(q',a)} \left(
\bigcup_{q''' \in q''^\epsilon}
\delta'^*(q''', \omega') \right) \right) & \text{se } \omega = a. \omega'
\end{cases}
$$

em que em cima consideramos o fecho-$\epsilon$ de $q$ em $A'$, mas em baixo consideramos o fecho-$\epsilon$ de $q$ em $A$.

Ou seja, a função de transição estendida de $A'$ é tal que, dada uma letra $a \in \Sigma$ e um estado $q \in Q$, podemos alcançar todos os estados que podiamos em $A$ com essa letra (e possivelmente com movimentos-$\epsilon$).  
Indutivamente, se dermos uma palavra $\omega \in \Sigma^*$ a $A'$, obtemos o mesmo conjunto de estados que obtiamos em $A$.
Consequentemente, uma palavra é aceite em $A'$ se e só se for aceite em $A$.

Cuidado! Esta prova é indutiva com caso base $|\omega|=1$, pelo que só funciona para palavras com pelo menos uma letra.
Isto é, falta provar a equivalência para $\epsilon$.  
Ora, $\delta(q, \epsilon)$ é aceite em $A$ se e só se $q^\epsilon \cap F \neq \emptyset$.
Ora, isto equivale a $q$ ser um estado final em $A'$, pelo que $\epsilon$ também é aceite em $A'$ se e só se for aceite em $A$.

:::

:::details[Exemplo da remoção de movimentos-$\epsilon$]

Em relaçao à imagem mostrada acima, vamos construir um AFND equivalente sem movimentos-$\epsilon$ que vamos denominar $A'$.

Começamos por ver que a partir de $q_{in}$ podemos:

- usando $a$ chegar a $q_2$ (a partir de $q_1$), $q_5$ (também a partir de $q_1$, usando depois um movimento-$\epsilon$), $q_3$ (através de $q_3$) e finalmente $q_4$ (através de $q_3$, usando depois um movimento-$\epsilon$).
- usando $b$ chegar a $\{ q_1, q_3, q_4 \}$ (como vimos acima).
- usando $c$ chegar a $\{ q_1, q_3, q_4, q_5 \}$.

O processo de remoção dos movimentos-$\epsilon$ não passa de identificar estes conjuntos para todos os estados e assinalar as tranisções correspondentes no novo autómato $A'$.
Desta forma, vamos então obter o autómato apresentado abaixo.

![AFND depois de remover movimentos-epsilon](./imgs/0001/AFND-sem-movimentos-epsilon.png#dark=3)

Note-se que o estado $q_2$ também passou a ser final, como tinha sido dito na teoria.
Isto, como já foi explicado, acontece já que todas as palavras que terminem em $q_2$ são aceites (pois podem terminar em $q_5$ com mais um movimento-$\epsilon$).

:::

Agora que já não temos movimentos-$\epsilon$, passamos o AFND para um AFD:  
Dado um AFND $A = (\Sigma, Q, q_{in}, F, \delta)$, temos que o AFD $D = (\Sigma, \wp(Q), {q_{in}}, F', \delta')$ em que:

- $F' = \{ C \subset Q : C \cap F \neq \emptyset \}$;
- $\delta': \wp(Q) \times \Sigma \to \wp(Q)$ é tal que, para cada $C \subset Q$ e $a \in \Sigma$
  $$
  \delta'(C, a) = \bigcup_{q \in C} \delta(q,a)
  $$
  reconhece a mesma linguagem que $A$

:::tip[]

Observe-se que a função $\delta$, por ser uma função, está bem definida **e é determinística** para todo o input.
Isto é, para qualquer input, só pode ter um output.  
A questão é que, como vimos na definição, este output está definido em $\wp(Q)$ e não em $Q$.
O segredo para arranjar um AFD $D$ equivalente a um AFND $N$ será então identificar os estados de $D$ com conjuntos de estados de $N$.

:::

:::details[Prova da equivalência entre $A$ e $D$]

Vamos definir a função de transição estendida de $D$

$$
\delta'^*(C, \omega) =
\begin{cases}
\delta'^*(C, \omega) = C & \text{se } \omega = \epsilon \\
\delta'^*(C, \omega) = \delta'^*(\delta'(C,a), \omega') & \text{se } \omega = a. \omega'
\end{cases}
\\ =
\begin{cases}
\delta'^*(C, \omega) = C & \text{se } \omega = \epsilon \\
\delta'^*(C, \omega) = \delta'^*(\bigcup_{q \in C} \delta(q,a), \omega') & \text{se } \omega = a. \omega'
\end{cases}
$$

Consequentemente, se houver $q, p \in Q$ tal que $\delta^*(q, \omega) = p$, temos que $p \in \delta'^*(C, \omega)$ para qualquer $C$ tal que $q \in C$.  
Verificamos então que se a função $\delta^*$ nos leva a um estado $q$, a função $\delta'^*$ leva-nos a um estado $C$ tal que $q \in C$.
Então, se $q$ for final em $A$, temos que $C \cap F \neq \emptyset$ e $C$ é final em $D$.

:::

:::details[Exemplo da passagem de AFND para AFD]

Como foi sugerido acima, a passagem para o determinsmo é feita através da identificação dos estados do AFD $D$ com conjuntos de estados do AFND $N$.

Voltando ao exemplo que temos visto, depois da remoção dos movimentos-$\epsilon$ ficámos com o AFND

![AFND depois de remover movimentos-epsilon](./imgs/0001/AFND-sem-movimentos-epsilon.png#dark=3)

No novo AFD $D$ vamos começar com um estado inicial que corresponde ao conjunto $\{ q_{in} \}$.  
A partir deste estado, com um $a$ é possível chegar aos estados em $P_1 = \{ q_2, q_3, q_4, q_5 \}$.
Desta forma, em $D$ vai haver um estado correspondente a este conjunto $P_1$ de forma que $\delta(a, \{ q_{in} \}) = P_1$.  
De forma semelhante, haverá estados $P_2 = \{ q_1, q_3, q_4 \}$ e $P_3 = \{ q_1, q_3, q_4, q_5 \}$ de forma que $\delta(\{q_{in}\}, b) = P_2$ e $\delta(\{q_{in}\}, c) = P_3$.

O algoritmo de transição de $N$ para $D$ limita-se então a repetir este processo para todos os estados que vão aparecendo, até que todos os estados tenham transições definidas para as letras do alfabeto que se justificam.

Geralmente, procuramos usar uma **tabela** para nos ajudar na conversão. Os estados representados no AFD final correspondem a todos os estados a que podemos chegar a partir do estado inicial, ao olhar para a tabela.

![Tabela Conversão](./imgs/0001/AFND_to_AFD_TABELA.png#dark=1)

O preenchimento da tabela é muito simples: um par linha-coluna corresponde a um par estado-símbolo, onde o conteúdo da entrada da tabela correspondente está associado ao **conjunto de estados a que podemos aceder** partindo desse estado e transicionando através desse símbolo.

[**Não é preciso incluir todas as linhas da tabela que foram incluídas**](color:red): fizemo-lo por completude, mas só precisamos de representar os estados a que podemos chegar a partir do estado inicial.

Neste caso, por exemplo, após $q_{in}$ podíamos representar logo $\{q_2, q_3, q_4, q_5\}, \{q_1, q_3, q_4\}, \{q_1, q_3, q_4, q_5\}$ na tabela e não $q_1$, depois $q_2$, etc.

O autómato resultante desta conversão será o seguinte:

![AFD final](./imgs/0001/AFND_to_AFD_FINAL.png#dark=3)

:::

Acabamos só por reparar que enquanto os AFD's têm a vantagem de terem todas as transições bem determinadas, podem necessitar de bastante mais estados que um AFND equivalente.
Nomeadamente, se $A$ for um AFND com conjunto de estados $Q$ com $n$ elementos, o AFD mínimo $D$ que lhe corresponde pode ter até $2^n$ estados (o conjunto de estados de $D$ está contido em $\wp(Q)$).  
Desta forma, os AFND's podem ser frequentemente uma forma mais eficiente de representar a mesma linguagem.
No entanto, como temos algoritmos para converter AFND's em AFD's, podemos dizer ao computador para fazer esse trabalho chato.

## Propriedades das Linguagens Regulares

A classe das linguagens regulares é muito bem comportada, suportando uma quantidade de construções.
Comecemos por analisar as suas propriedades lógicas.

:::tip[Proposição]

Para um alfabeto $\Sigma$ e $L, L_1, L_2 \subset \Sigma^*$ linguagens regulares, temos que $\overline{L}$ e $L_1 \cap L_2$ são linguagens regulares.

:::

:::details[Prova]

Seja $D = (\Sigma, Q, q_{in}, F, \delta)$ um AFD que reconhece $L$.
Temos então que o AFD $\overline{D} = (\Sigma, Q, q_{in}, Q \backslash F, \delta)$ reconhece a linguagem $\overline{L}$, pelo que esta é também regular.
Ao AFD $\overline{D}$ damos o nome de **AFD dual** de $D$.

Sejam $D_1 = (\Sigma, Q_1, q_{in}^1, F_1, \delta_1)$ e $D_2 = (\Sigma, Q_2, q_{in}^2, F_2, \delta_2)$ AFD's tais que $L(D_1) = L_1$ e $L(D_2) = L_2$.  
Definimos o **AFD produto** $D_1 \times D_2 = (\Sigma, Q_1 \times Q_2, (q_{in}^1, q_{in}^2), F_1 \times F_2, \delta)$ como o AFD cuja função $\delta: Q_1 \times Q_2 \times \Sigma \to Q_1 \times Q_2$ tal que, para cada $(q_1, q_2) \in Q_1 \times Q_2$ e $a \in \Sigma$:

$$
\delta((q_1, q_2), a) =
\begin{cases}
(\delta_1(q_1, a), \delta_2(q_2, a)) & \text{se } \delta_1(q_1, a) \text{ e } \delta_2(q_2, a) \text{ estiverem definidos} \\
\text{indefinido} & \text{caso contrário}
\end{cases}
$$

É fácil de observar que $L(D_1 \times D_2) = L(D_1) \cap L(D_2)$.

:::

:::tip[Corolário]

É imediato a partir da proposição acima que se $L_1$ e $L_2$ são regulares, então, por exemplo, $L_1 \cup L_2$ e $L_1 \setminus L_2$ também o são.

:::

:::details[Prova]

$L_1 \cup L_2 = \overline{\overline{L_1} \cap \overline{L_2}}$.  
$L_1 \setminus L_2 = L_1 \cap \overline{L_2}$

:::

:::tip[Proposição]

Para um alfabeto $\Sigma$ e $L, L_1, L_2 \subset \mathcal{REG}^\Sigma$, temos que $L_1 . L_2$ e $L^*$ são também linguagens regulares.

:::

:::details[Prova para $L_1 . L_2$]

Sejam $D_1 = (\Sigma, Q_1, q_{in}^1, F_1, \delta_1)$ e $D_2 = (\Sigma, Q_2, q_{in}^2, F_2, \delta_2)$ AFD's tais que $L(D_1) = L_1$ e $L(D_2) = L_2$.  
Considere-se o AFND $A = (\Sigma, Q, q_{in}, F, \delta)$ com função de transição $\delta: Q \times (\Sigma \cup \{ \epsilon \}) \to \wp(Q)$ tal que,

$$
Q = Q_1 \cup Q_2 \cup \{ q_{in} \} \\
F = F_1 \cup F_2 \cup \{ q_{in} \}
$$

$$
\delta(q, a) =
\begin{cases}
\{ \delta_1(q,a) \} & \text{se } q \in Q_1, a \neq \epsilon \text{ e } \delta_1(q,a) \text{ estiver definido} \\
\{ \delta_2(q,a) \} & \text{se } q \in Q_2, a \neq \epsilon \text{ e } \delta_1(q,a) \text{ estiver definido} \\
\{ q_{in}^1, q_{in}^2 \} & \text{se } q \in \{ q_{in} \} \cup F_1 \text{ e } a = \epsilon \\
\{ q_{in}^2 \} & \text{se } q \in F_2 \text{ e } a = \epsilon \\
\emptyset & \text{caso contrário}
\end{cases}
$$

Podemos observar que $A$ reconhece $L_1. L_2$.

Entenda-se $A$ da seguinte forma:

- inicialmente estamos em $\{ q_{in} \}$. Podemos escolher começar por ler palavras em $L_1$, e vamos para $\{ q_{in}^1 \}$, ou em $L_2$, e vamos para $\{ q_{in}^2 \}$.
- Quando acabamos de ler uma palavra em $L_1$ podemos:
  - ir para $\{ q_{in}^1 \}$ se quisermos ler mais palavras em $L_1$;
  - ir para $\{ q_{in}^2 \}$ se quisermos começar a ler palavras em $L_2$.
- Sempre que acabamos de ler uma palavra em $L_2$:
  - ou acabamos e aceitamos a palavra lida;
  - ou voltamos para $\{ q_{in}^2 \}$ para ler mais uma palavra de $L_2.

:::

:::details[Prova para $L^*$]

Considere-se um AFD $D = (\Sigma, Q, q_{in}, F, \delta)$ que reconheça a linguagem $L$. Seja o AFND $A = (\Sigma, Q', s, F', \delta')$ para um estado $s \notin Q$ tal que

$$
Q' = Q \cup \{ s \} \\
F' = F \cup \{ s \}
$$

e $\delta'(q, a) : Q \times (\Sigma \cup \{ \epsilon \}) \to \wp(Q')$ é tal que, para cada $q \in Q'$ e $a \in \Sigma \cup \{ \epsilon \}$:

$$
\delta'(q,a) =
\begin{cases}
\{ \delta(q,a) \} & \text{se } q \in Q \wedge a \neq \epsilon \text{ e } \delta(q,a) \text{ estiver definida} \\
\{ q_{in} \} & \text{se } q \in F' \wedge a = \epsilon \\
\emptyset & \text{caso contrário}
\end{cases}
$$

É fácil de perceber que $A$ reconhece $L^*$, pelo que $L^*$ é regular.

Observe-se que o que o AFND $A$ oferece é um autómato que a $D$ acrescenta a possibilidade de começarmos a ler uma nova palavra reconhecida por $D$, sempre que estivermos num estado de aceitação (mudando para o estado $\{ q_{in} \}$).  
O estado $\{ s \}$ é de aceitação pois a palavra vazia também está em $L^*$.

:::

### Expressões Regulares

Para um alfabeto $\Sigma$ definimos o **conjunto das [expressões regulares](color:green)** sobre $\Sigma$ como o conjunto $R_\Sigma$ definido indutivamente como se segue:

- $\emptyset \in R_\Sigma$;
- $\omega \in R_\Sigma$ para cada $\omega \in \Sigma^*$;
- se $\alpha_1, \alpha_2 \in R_\Sigma$, então $(\alpha_1 + \alpha_2) \in R_\Sigma$ (soma);
- se $\alpha_1, \alpha_2 \in R_\Sigma$, então $(\alpha_1 . \alpha_2) \in R_\Sigma$ (concatenação);
- se $\alpha \in R_\Sigma$, então $(\alpha^*) \in R_\Sigma$ (fecho de Kleene).

Para simplificar vamos ocultar os parêntesis quando desnecessários, e vamos abreviar $\alpha . \beta$ por $\alpha \beta$.

Dada uma expressão regular $\alpha \in R_\Sigma$, definimos a **linguagem denotada** por $\alpha$ como o conjunto $L(\alpha) \subset \Sigma^*$ definido indutivamente como se segue:

- $L(\emptyset) = \emptyset$;
- $L(\omega) = \{ \omega \}$ para cada $\omega \in \Sigma^*$;
- $L(\alpha_1 + \alpha_2) = L(\alpha_1) \cup L(\alpha_2)$;
- $L(\alpha_1 . \alpha_2) = L(\alpha_1) . L(\alpha_2)$;
- $L(\alpha^*) = L(\alpha)^*$.

Duas [expressões regulares](color:green) dizem-se equivalentes ($\alpha_1 = \alpha_2$) se denotarem a mesma linguagem.

:::tip[Proposições para expressões regulares]

Sobre expressões regulares, verificam-se as segunites propriedades:

- $\alpha + \beta = \beta + \alpha$;
- $\alpha + (\beta + \gamma) = (\alpha + \beta) + \gamma$;
- $\alpha (\beta  \gamma) = (\alpha  \beta)  \gamma$;
- $\alpha \epsilon = \epsilon \alpha = \alpha$;
- $\alpha \emptyset = \emptyset \alpha = \emptyset$;
- $\alpha (\beta + \gamma) = \alpha \beta + \alpha \gamma$;
- $(\alpha +\beta) \gamma = \alpha \gamma + \beta \gamma$;
- $\alpha + \alpha = \alpha$;
- $\alpha \alpha^* = \alpha^* \alpha$;
- $\alpha + \emptyset = \alpha$;
- $\alpha^* + \epsilon = \alpha^*$;
- $\alpha^* + \alpha \alpha^* = \alpha^*$;
- $\epsilon + \alpha \alpha^* = \alpha^*$;
- $(\alpha \beta)^* = \epsilon + \alpha (\beta \alpha)^* \beta$;
- $\emptyset^* = \epsilon$;
- $(\alpha^*)^* = \alpha^*$.

:::

A relevância das expressões regulares neste contexto vem da seguinte proposição:

:::tip[Proposição]

Uma linguagem $L$ é regular se e só se houver uma expressão regular $\alpha$ que a denote.

:::

:::details[Prova]

Que a linguagem denotada por uma expressão regular é também regular é imediato a partir da definição de expressão regular, de linguagem denotada por expressão regular, e das propriedades em relação a operações sobre expressões regulares.  
Para qualquer AFD, é possível reescrevê-lo como um sitema de equações lineares, que podemos resolver como vamos ver a seguir.

:::

:::tip[Solução de uma Equação Linear com Expressões Regulares]

Para resolver sistemas de equações com expressões regulares, observamos que a equação

$$
X = \beta X + \gamma
$$

tem como solução a expressão regular $X = \beta^* \gamma$.

Desta forma, podemos resolver um sistema de $n$ equações com $n$ variáveis tal como fazemos nos números reais.  
Ver o exemplo abaixo para perceber como.

:::

:::details[Exemplo de Resolução de Sistemas de Equações]

Considere-se o seguinte AFD:

![Grafo de um AFD](./imgs/0001/AFD_graph.png#dark=1)

Podemos traduzir o AFD no seguinte sistema de equações:

$$
\begin{cases}
q_{in} = a q_1 \\
q_1 = a q_1 + b q_2 + c q_2 + \epsilon \\
q_2 = a q_1 + b q_2 + c q_2
\end{cases}
\Leftrightarrow
\begin{cases}
q_{in} = a q_1 \\
q_1 = a q_1 + (b+c) q_2 + \epsilon \\
q_2 = a q_1 + (b+c) q_2
\end{cases}
$$

Note-se como o sistema acima tem $n$ equações (uma para cada estado) e $n$ variáveis (também uma para cada estado).  
Vemos agora que a terceira equação é linear em $q_2$, pelo que podemos substituir diretamente pela solução.

$$
\begin{cases}
q_{in} = a q_1 \\
q_1 = a q_1 + (b+c) q_2 + \epsilon \\
q_2 = (b+c)^* a q_1
\end{cases}
\Leftrightarrow
\begin{cases}
q_{in} = a q_1 \\
q_1 = a q_1 + (b+c) (b+c)^* a q_1 + \epsilon \\
q_2 = (b+c)^* a q_1
\end{cases}
$$

$$
\Leftrightarrow
\begin{cases}
q_{in} = a q_1 \\
q_1 = (\epsilon + (b+c) (b+c)^*) a q_1 + \epsilon \\
q_2 = (b+c)^* a q_1
\end{cases}
\Leftrightarrow
\begin{cases}
q_{in} = a q_1 \\
q_1 = (b+c)^* a q_1 + \epsilon \\
q_2 = (b+c)^* a q_1
\end{cases}
$$

Ficamos agora também com uma equação linear em $q_1$:

$$
\begin{cases}
q_{in} = a q_1 \\
q_1 = ((b+c)^* a)^* \epsilon \\
q_2 = (b+c)^* a q_1
\end{cases}
\Leftrightarrow
\begin{cases}
q_{in} = a ((b+c)^* a)^* \\
q_1 = ((b+c)^* a)^* \\
q_2 = (b+c)^* a q_1
\end{cases}
$$

A expressão correspondente ao estado inicial é então $a((b+c)^* a)^*$, pelo que esta denota a linguagem reconhecida pelo AFD.

:::

### Lema de Pumping

Para mostrar que uma linguagem $L$ não é regular, há que garantir que não existe nenhum autómato finito que a reconheça, ou expressão regular que a denote. A seguinte proposição enuncia um resultado, conhecido como [**Lema de Pumping**](color:yellow) ou [**Lema da bombagem**](color:yellow) (para AFD's), que é útil para esse efeito:  
Se $L \subset \Sigma^*$ é uma linguagem regular, então existe $k \in \mathbb{N}$ tal que, se $\omega \in L$ é uma palavra com $| \omega | \geq k$ então $\omega = \omega_1 \omega_2 \omega_3$ em que $\omega_1, \omega_2, \omega_3 \in \Sigma^*$ são tais que:

- $\omega_2 \neq \epsilon$;
- $| \omega_1 . \omega_2 | \leq k$;
- $\omega_1 . \omega_2^t . \omega_3 \in L$ para cada $t \in \mathbb{N}_0$.

:::details[Prova]

Seja $L$ uma linguagem regular, onde $L=L(A)$, para um AFD $D = (\Sigma, Q, q_{in}, F, \delta)$.  
Seja $k = \#Q$ e $s$ uma palavra de $L$ com $|s| = n \geq k$.

Quando o autómato $A$ recebe a palavra $s$ lê $n$ letras e portanto passa por $n+1$ estados.

Se na leitura de $s$, passamos por pelo menos $n+1$ estados, temos que, segundo o [Teorema de Pombal](/md/principio-pombal), há um estado pelo qual passamos duas vezes.

Seja $q \in Q$ o primeiro estado que é repetido.
Chamemos então $\omega_1$ à palavra que é lida até à primeira ocorrência de $q$, $\omega_2$ à palavra que é lida entre as primeiras duas ocorrências de $q$, e $\omega_3$ à restante palavra.

Temos então que

- $|\omega_2| > 0$
- $| \omega_1 . \omega_2 | \leq p$, porque ainda não se repetiu estados
- $\omega_1 . \omega_2^t . \omega_3 \in L$, uma vez que podemos apenas repetir as transições de estados que acontecem entre as duas ocorrências de $q$ quantas vezes quisermos.

:::

:::details[Exemplo do Lema de Pumping]

Vamos usar o Lema de Pumping para provar que a linguagem $L = \{ a^n b^n : n \in \mathbb{N}_0 \}$ não é regular.  
Assuma-se que a linguagem é regular.

Segundo o Lema de Pumping, existem, para algum $k \in \mathbb{N}$, $\omega_1, \omega_2, \omega_3 \in \Sigma^*$ tal que $\omega = \omega_1 \omega_2 \omega_3$ tais que:

- $\omega_2 \neq \epsilon$;
- $|\omega_1 \omega_2 | \leq k$;
- $\omega_1 \omega_2^t \omega_3 \in L$ para cada $t \in \mathbb{N}_0$.

Considere-se uma palavra $\omega = a^l b^l$ com $l>k$.
Como $|\omega| = 2l > k$, esta palavra está na condição do Lema.
Como $|\omega_1 \omega_2| \leq k < l$, temos que $\omega_1 = a^x$ e $\omega_2 = a^y$ para $y \neq 0$.
Consequentemente, temos que $\omega_1 \omega_2^0 \omega_3 = a^{l-y} b^l$ também pertence à linguagem $L$.

Contudo isto é claramente um absurdo, pelo que a linguagem em questão não é regular.

:::

## Autómato de Pilha

Um [**autómato de pilha (AP)**](color:orange) (em inglês _push-down automaton_) é um tuplo $P = (\Sigma, \Gamma, Q, q_{in}, F, \delta)$ em que:

- $\Sigma$ é um alfabeto;
- $\Gamma$ é um alfabeto auxiliar;
- $Q$ é um conjunto finito não vazio de estados;
- $q_{in} \in Q$ é o estado inicial;
- $F \subset Q$ é o conjunto de estados finais;
- $\delta: Q \times (\Sigma \cup \{ \epsilon \}) \times (\Gamma \cup \{ \epsilon \}) \to \wp(Q \times (\Gamma \cup \{ \epsilon \}))$

Explicando de forma mais simples, um [autómato de pilha](color:orange) é um AFND ao qual se adiciona uma estrutura adicional: uma [pilha](https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29).
Nesta estrutura podemos, em cada transição, adicionar e remover um símbolo do alfabeto auxiliar $\Gamma$ (incluindo símbolos vazios).  
Desta forma, a função de transição $\delta$ deve ser entendida seguinte:
$(q', b') \in \delta(q, a, b)$ quer dizer que quando estamos num estado $q \in Q$, lemos uma letra $a \in \Sigma \cup \{ \epsilon \}$ na palavra e verificamos que se encontra um símbolo $b \in \Gamma \cup \{ \epsilon \}$, podemos transitar para o estado $q'$, substituindo o símbolo $b$ na pilha pelo símbolo $b'$.  
Se a letra lida na pilha for $\epsilon$, a transição de $q$ para $q'$ pode ser feita para qualquer estado da pilha. Devemos então colocar o símbolo $b'$ no topo da pilha.
Simetricamente, se $b' = \epsilon$, quer dizer que devemos apenas remover o símbolo que estava na pilha, sem colocar nenhum novo.

Vamos agora formalizar o conceito de palavra aceite por um AP.  
Compreendemos que a pilha acumula símbolos do alfabeto auxiliar $\Gamma$, pelo que podemos representá-la por uma palavra em $\Gamma^*$.  
Definimos então uma [**palavra aceite**](color:green) por um AP $P = (\Sigma, \Gamma, Q, q_{in}, F, \delta)$ como uma palavra $\omega \in \Sigma^*$ tal que:

- $\omega$ pode ser escrita como $a_1 a_2 \cdots a_m$, com $a_i \in \Sigma \cup \{ \epsilon \}, 1 \leq i \leq m$;
- existem uma sequência de estados $p_0 p_1 \cdots p_m$ e uma sequência de pilhas $\gamma_0 \gamma_1 \cdots \gamma_m$ com $p_j \in Q$ e $\gamma_j \in \Gamma^*$ para cada $0 \leq j \leq m$ tais que:
  - $p_0 = q_{in}$ e $\gamma_0 = \epsilon$;
  - $(p_{i+1}, b') \in \delta(p_i, a_{i+1}, b)$ com $\gamma_i = \gamma b$, $\gamma_{i+1} = \gamma b'$ para $0 \leq i < m$ e algum $\gamma \in \Gamma^*$;
  - $p_m \in F$.

A [**linguagem reconhecida**](color:green) por um AP $P$, denotada $L(P)$ corresponde ao conjunto de palavras aceites por $P$.

As linguagens que são reconhecidas por AP's são denominadas de [**linguagens independentes do contexto**](color:yellow), que abreviamos para $\mathcal{IND}^\Sigma$ ou apenas $\mathcal{IND}$ quando o alfabeto está subentendido ou é irrelevante no contexto.  
Temos que $\mathcal{REG} \subsetneq \mathcal{IND}$, isto é, todas as linguagens regulares são independentes de contexto, havendo linguagens que são independentes de contexto, mas não são regulares.

:::details[Prova]

Que $\mathcal{REG} \subset \mathcal{IND}$, uma vez que um autómato de pilha é uma generalização de um AFD. Para fazer um AP que reconheça qualquer $L \in \mathcal{REG}$ basta considerar o AP que é igual ao AFD que reconhece $L$, em que nenhuma transição mexe na pilha.  
Que $\mathcal{REG} \neq \mathcal{IND}$ é também evidente: já vimos acima pelo menos uma linguagem que é independente de contexto, mas não é regular (a linguagem das palavras $a^n b^n, n \in \mathbb{N}_0$).

:::

## Propriedades das Linguagens Independentes do Contexto

As linguagens independentes do contexto mantêm algumas boas propriedades
das linguagens regulares, mas perdem algumas. Vamos agora ver exatamente quais das propriedades são preservadas.

:::tip[Proposição]

Para um alfabeto e $L, L_1, L_2 \in \Sigma^* \subset \Sigma^*$ linguagens independentes do contexto, temos que $L_1 \cup L_2$, $L_1 . L_2$ e $L^*$ são linguagens independentes do contexto.

:::

:::details[Prova]

As provas passam, tal como fizemos nas linguagens regulares, por pegar em autómatos que reconhecem as linguagens $L$, $L_1$ e $L_2$, e construir um autómato que reconheça a linguagem que queremos provar que é independente de contexto.  
Resumidamente, ficam as ideias para construir os autómatos:

- Para $L_1 \cup L_2$, considerar como fizemos antes um autómato produto (fica para pensar o que é preciso fazer com a pilha);
- Para $L_1 . L_2$ considerar uma composição dos autómatos $P_1$ e $P_2$: quando estamos num estado final de $P_1$, podemos fazer um movimento-$\epsilon$ para o estado inicial de $P_2$, assinalando esta transição na pilha com um símbolo especial;
- Para $L^*$ considerar a composição acima do AP $P$ para si próprio: em cada estado final de $P$ adicionamos um movimento-$\epsilon$ para o estado inicial, marcando também esta transição na pilha com um símbolo especial.

Lamentamos a brevidade da prova. Aceitam-se contribuições.

:::

No entanto, no geral, a classe das linguagens independentes do contexto não é fechada para intersecções ou complementações.
Não temos ainda um método para verificar que uma linguagem não é independente do contexto.
Tal como para as linguagens regulares, isto é feito através do Lema de Pumping, mas desta vez da sua versão para autómatos de pilha.

### Lema de Pumping para Linguagens Independentes do Contexto

Se $L \subset \Sigma^*$ é uma linguagem do contexto, então existe $k \in \mathbb{N}$ tal que se $\omega \in L$ é uma palavra com $| \omega | \geq k$, então
$\omega = \omega_1 \omega_2 \omega_3 \omega_4 \omega_5$ em que $\omega_1, \omega_2, \omega_3, \omega_4, \omega_5 \in \Sigma^*$ satisfazem as seguintes condições:

- $\omega_2 \omega_4 \neq \epsilon$, ou seja $\omega_2 \neq \epsilon \vee \omega_4 \neq \epsilon$;
- $| \omega_2 \omega_3 \omega_4 | \leq k$;
- $\omega_1 \omega_2^i \omega_3 \omega_4^i \omega_5 \in L$, para qualquer $i \in \mathbb{N}_0$.

<!--
:::details[Prova]

// I don't want to do this, feel free if you want to.

:::
-->

:::details[Aplicação do Lema de Pumping]

Vamos usar o Lema de Pumping para Linguagens Independentes para provar que a linguagem $L = \{ a^n b^n c^n : n \in \mathbb{N}_0 \}$ não é independente.  
A prova é bastante semelhante à que $\{ a^n b^n : n \in \mathbb{N}_0 \}$ não é regular.
No entanto, aqui, vamos ter de considerar vários casos:
Para o $k$ cuja existência é garantida pelo Lema, consideramos a palavra $a^k b^k c^k$. Uma de três coisas acontece:

- $\omega_2 \omega_3 \omega_4$ tem apenas b's;
- $\omega_2 \omega_3 \omega_4$ tem pelo menos um a, e não tem nenhum c;
- $\omega_2 \omega_3 \omega_4$ tem pelo menos um c, e não tem nenhum a.
  Em qualquer um dos casos, podemos ver que a palavra $\omega_1 \omega_2^i \omega_3 \omega_4^i \omega_5$ não tem o mesmo número de a's, b's e c's, pelo que a linguagem não pode ser independente de contexto.

:::
