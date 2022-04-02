---
title: Teoria da Computabilidade
description: 'Teoria da Computabilidade'
path: /tc/teoria-da-computabilidade
type: content
---

# Teoria da Computabilidade

```toc

```

## Computabilidade e decibilidade

Os problemas relevantes que estudamos são problemas de decisão e reconhecimento de linguagens, ou cálculo de funções.
É então relevante definir formalmente o que significa reconhecer/decidir uma linguagem e calcular uma função.

Para um alfabeto $\Sigma$, uma linguagem $L \subset \Sigma^*$ e uma função $f: \Sigma^* \to \Sigma^*$.  
A linguagem $L$ diz-se **reconhecível** se existe uma máquina de Turing $M$ com alfabeto de entrada/saída $\Sigma$ tal que $L_{ac}(M) = L$.
Denotamos por $\mathcal{R}^\Sigma$ o conjunto de todas as linguagens reconhecíveis sobre o alfabeto $\Sigma$.  
A linguagem $L$ diz-se **decidível** se existe uma máquina de Turing $M$ com alfabeto de entrada/saída $\Sigma$ tal que $L_{ac}(M) = L$ e $L_{rj}(M) = \overline{L}$.
Denotamos por $\mathcal{D}^\Sigma$ o conjunto de todas as linguagens decidíveis sobre o alfabeto $\Sigma$.  
A função $f$ diz-se **computável** se existe uma máquina de Turing $M$ com alfabeto de entrada/saída $\Sigma$ tal que $f = \phi_M$.
Denotamos por $\mathcal{C}^\Sigma$ o conjunto de todas as funções computáveis sobre o alfabeto $\Sigma$.

O seguinte resultado diz-nos que podemos concentrar-nos apenas em reconhecer/decidir linguagens:

:::tip[Proposição]

Seja $\Sigma$ um alfabeto. Sejam $f: \Sigma^* \to \Sigma^*$ uma função e $G_f = \{ x \text{\textdollar} y : f(x) = y \}$, com $\text{\textdollar} \notin \Sigma$. Então:

1. $f$ é computável se e só se $G_f$ é reconhecível;
2. se $f$ é total, $f$ é computável se e só se $G_f$ é decidível.

:::

:::details[Prova]

**Prova de 1**

Suponha-se que $f$ é computável e considere-se a máquina de Turing $M_f$ que computa $f$.
Criamos uma máquina de Turing com duas fitas que:

- copia $x$ para a segunda fita;
- computa $f$ (usando $M_f$) sobre $x$;
- compara o output de $M_f$ com $y$, aceitando se estes forem iguais.
  Evidentemente que esta máquina reconhece $G_f$.

Agora suponha-se que $G_f$ é reconhecível e seja $R$ a máquina de Turing que a reconhece.
Considere-se a máquina de Turing com 3 fitas tal que:

1. na primeira fita está o input $x$;
2. escolhe não-deterministicamente uma palavra $y \in \Sigma^*$ - uma palavra que vamos verificar se é o resultado de $f(x)$ - e coloca-a na fita 3;
3. coloca na segunda fita $x \text{\textdollar} y$;
4. executa $R$ sobre a segunda fita: se $R$ aceitar a palavra na fita 2, termina, caso contrário volta ao passo 2.

Esta máquina calcula $f$: quando termina (pois $R$ aceitou a palavra na segunda fita), a palavra $y$ (o output esperado) está na última fita (onde o output deve estar).

Observe-se que, para cada $x \in \Sigma^*$ , existe no máximo uma palavra do tipo $x\text{\textdollar}y$ que é reconhecida por $R$.
Logo, a árvore de computações desta máquina para o input $x$ tem no máximo uma computação de aceitação.

A **prova de 2** é semelhante.

:::

### Propriedades

:::tip[]

Seja $\Sigma$ um alfabeto e $L, L_1, L_2 \subset \Sigma^*$ linguagens decidíveis.
Então,

1. $\emptyset$,
2. $\Sigma^*$,
3. $\overline{L}$
4. $L_1 \cap L_2$,
5. $L_1 \cup L_2$,
6. $L_1 \backslash L_2$
   são linguagens decidíveis.

:::

:::details[Prova]

(1) Basta considerar que a máquina de Turing que ao receber qualquer input vai para o estado de rejeição reconhece $\emptyset$;

(2) Basta considerar que a máquina de Turing que ao receber qualquer input vai para o estado de aceitação reconhece $\Sigma^*$;

(3) Se $M$ for a máquina de Turing que decide $L$, basta trocar os estados de aceitação e rejeição para decidir $\overline{L}$.

(4) Sejam $M_1$ e $M_2$ máquinas de Turing que reconhecem $L_1$ e $L_2$, respetivamente.
Considere-se a máquina de Turing $M$ com duas fitas.
A máquina começa por copiar o input para a segunda fita.
Então, executa $M_1$ na fita 1:

- se $M_1$ aceitar o input, $M$ termina no estado de aceitação; caso contrário, executa $M_2$ na fita 2:
- se $M_2$ aceitar o input, $M$ termina no estado de aceitação; caso contrário, $M$ termina no estado de rejeição.

(5) Basta observar que $L_1 \cup L_2 = \overline{\overline{L_1} \cap \overline{L_2}}$.
Como $L_1$ e $L_2$ são decidíveis, $\overline{L_1}$ e $\overline{L_2}$ também o são.
Então, segundo 4., $\overline{L_1} \cap \overline{L_2}$ também é decidível e, mais uma vez, $\overline{\overline{L_1} \cap \overline{L_2}}$.

(6) Basta observar que $L_1 \backslash L_2 = L_1 \cap \overline{L_2}$.
Como $L_2$ é decidível, $\overline{L_2}$ é decidível e segundo 4. $L_1 \cap \overline{L_2}$ é decidível.

:::

:::tip[]

Seja $\Sigma$ um alfabeto e $L, L_1, L_2 \subset \Sigma^*$ linguagens reconhecíveis.
Então,

1. $\emptyset$,
2. $\Sigma^*$,
3. $L_1 \cap L_2$,
4. $L_1 \cup L_2$,
   são linguagens reconhecíveis.

:::

:::details[Prova]

(1) $\emptyset$ é decidível e todas as linguagens decidíveis são reconhecíveis;

(2) $\Sigma^*$ é decidível e todas as linguagens decidíveis são reconhecíveis;

(3) Sejam $M_1$ e $M_2$ máquinas de Turing que reconhecem $L_1$ e $L_2$, respetivamente.
Definimos a máquina de Turing $N$ que escolhe não deterministicamente entre executar $M_1$ e $M_2$.
Se a computação de uma destas máquinas terminar em aceitação, $N$ termina também em aceitação.
$N$ reconhece $L_1 \cup L_2$ pelo que esta linguagem é reconhecível.

(4) Sejam $M_1$ e $M_2$ máquinas de Turing que reconhecem $L_1$ e $L_2$, respetivamente.
Considere-se a máquina de Turing $N$ com duas fitas que, ao receber $\omega \in \Sigma^*$ como input, copia $\omega$ para a fita 2 e, de seguida, executa alternadamente um passo da execução de $M_1$ na fita 1 e um passo da execução de $M_2$ na fita 2.
Se uma das execuções terminar, então $N$ prossegue a execução da outra máquina no caso de ter terminado aceitando, e $N$ rejeita em caso contrário.
Se a execução da outra máquina terminar, então $N$ aceita no caso de ter terminado aceitando, e rejeita em caso contrário.
A máquina $N$ reconhece $L_1 \cap L_2$ pelo que esta linguagem é reconhecível.

:::

:::tip[]

Se $L_1$ for reconhecível e $L_2$ for decidível, então $L_1 \backslash L_2$ é reconhecível.

:::

:::details[Prova]

Se $L_2$ é decidível, $\overline{L_2}$ é também decidível e, consequentemente, reconhecível.
Como vimos a cima, se $L_1$ e $\overline{L_2}$ são reconhecíveis, então $L_1 \cap \overline{L_2} = L_1 \backslash L_2$ é reconhecível.

:::

:::tip[NOTA]

Note-se como já não é verdade que se $L$ é reconhecível então $\overline{L}$ também o é: basta que haja uma palavra em $\overline{L}$ cuja computação não termine na máquina que reconhece $L$ para que isto não seja verdade.

:::

:::tip[]

Seja $L$ uma linguagem sobre o alfabeto $\Sigma$. Então, $L$ é decidível se e só se $L$ e $\overline{L}$ forem reconhecíveis.

:::

:::details[Prova]

Se $L$ for decidível, então $L$ e $\overline{L}$ são decidíveis e portanto reconhecíveis.

Sejam agora $L$ e $\overline{L}$ linguagens reconhecidas por máquinas de Turing $R_1$ e $R_2$, respetivamente.
Seja $D$ a máquina de Turing com duas fitas que copia o input da primeira fita para a segunda e executa, alternadamente, $R_1$ na primeira fita e $R_2$ na segunda.
Como $L$ e $\overline{L}$ são reconhecíveis, uma destas computações acaba eventualmente.
Se for a computação na primeira fita, aceitamos, caso contrário, rejeitamos.  
De qualquer forma a computação termina e $L$ é decidível.

:::

### Redução Computável

Nas provas a cima e no capítulo anterior, por vezes pegamos em máquinas de Turing que já conheciamos para criar máquinas de Turing que resolviam problemas que ainda nao tinhamos resolvido.
A ideia de [**redução computável**](color:orange) consiste exatamente nisso:

Sejam $L_1$ e $L_2$ linguagens sobre os alfabetos $\Sigma_1$ e $\Sigma_2$, respetivamente.
Dizemos que há uma [redução computável](color:orange) de $L_1$ para $L_2$, ou simplesmente que [$L_1$ se reduz a $L_2$](color:orange), o que denotamos por [$L_1 \leq L_2$](color:orange) se existe uma função total computável $f: \Sigma_1^* \to \Sigma_2^*$ tal que, para cada $\omega \in \Sigma_1^*$,

$$
\omega \in L_1 \Leftrightarrow f(\omega) \in L_2
$$

:::tip[Proposição]

Sejam $L_1$ e $L_2$ linguagens sobre $\Sigma_1$ e $\Sigma_2$, respetivamente. Se $L_1 \leq L_2$ e $L_2$ é decidível (respetivamente conhecível) então $L_1$ é decidível (resp. reconhecível).

:::

:::details[Prova]

// TODO

:::

A proposição a cima não é no entanto suficiente para verificar se uma linguagem **não é** computável.

Dado uma alfabeto $\Sigma$ distinguimos as seguintes linguagens:

- $\mathcal{L}_{ac}^\Sigma = \{ M \text{\textdollar} \omega : M \in \mathcal{M}^\Sigma, \omega \in L_{ac}(M) \}$ - o **problema da aceitação**;
- $\mathcal{L}_{rj}^\Sigma = \{ M \text{\textdollar} \omega : M \in \mathcal{M}^\Sigma, \omega \in L_{rj}(M) \}$ - o **problema da rejeição**;
- $\mathcal{L}_{su}^\Sigma = \mathcal{L}_{ac}^\Sigma \cup \mathcal{L}_{rj}^\Sigma$ - o **problema da computação bem sucedida**;
- $\mathcal{L}_{ab}^\Sigma = \{ M \text{\textdollar} \omega : M \in \mathcal{M}^\Sigma \text{ e a computação de } M \text{ sobre } \omega \text{ aborta } \}$ - o **problema do abortamento**;
- $\mathcal{L}_{te}^\Sigma = \mathcal{L}_{su}^\Sigma \cup \mathcal{L}_{ab}^\Sigma$ - o **problema da terminação**.

:::tip[Proposição]

Para um alfabeto $\Sigma$, as linguagens $\mathcal{L}_{ac}^\Sigma$, $\mathcal{L}_{rj}^\Sigma$, $\mathcal{L}_{su}^\Sigma$, $\mathcal{L}_{ab}^\Sigma$ e $\mathcal{L}_{te}^\Sigma$ são reconhecíveis mas não são decidíveis.

:::

:::details[Prova]

// TODO

:::

:::tip[Corolário]

Para um alfabeto $\Sigma$, as linguagens $\overline{\mathcal{L}_{ac}^\Sigma}$, $\overline{\mathcal{L}_{rj}^\Sigma}$, $\overline{\mathcal{L}_{su}^\Sigma}$, $\overline{\mathcal{L}_{ab}^\Sigma}$ e $\overline{\mathcal{L}_{te}^\Sigma}$ não são reconhecíveis.

:::

### Teorema de Rice

O seguinte teorema é uma ferramenta bastante genérica para demonstrar a indecidibilidade de linguagens constituídas por máquinas de Turing cujas linguagens satisfaçam alguma propriedade não-trivial.

:::tip[Teorema de Rice]

Sejam $\Sigma$ um alfabeto e $L \subset \mathcal{M}^\Sigma$ tal que se $M_1 \in L$ e $M_1 \equiv M_2$, então $M_2 \in L$.
Se $\emptyset \neq L \neq \mathcal{M}^\Sigma$ então $L$ é indecidível.

:::
