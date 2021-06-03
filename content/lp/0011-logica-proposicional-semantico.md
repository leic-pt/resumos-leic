---
description: Lógica Proposicional, Sistema Semântico, Funções de Valoração, Correção e Completude, Satisfação.
path: /lp/logica-proposicional-semantico
---

# Lógica Proposicional - Sistema Semântico

```toc

```

## Sistema Semântico

Se no sistema dedutivo abordámos as regras de inferência, que _falam sobre_ as entidades da linguagem, no sistema semântico vamos abordar as _fbfs_ e os símbolos lógicos sob o ponto de vista do seu **significado**. O sistema baseia-se no conceito de interpretação, conceito este que neste contexto é definido a partir de uma **função de valoração**.

::: tip DEFINIÇÃO

Uma **função de valoração** é uma função $v$ que atribui valores lógicos (verdadeiro ou falso) a um conjunto de símbolos de proposição.

$$v: P \mapsto \{V, F\}$$

Uma função de valoração pode ser tal que:

$$v(P) = V.$$  
$$v(Q) = F.$$

Isto é, a proposição P tem **valor verdadeiro**, enquanto que a proposição Q tem **valor falso** (segundo esta função).
:::

Associada ao conceito de função de valoração temos a _interpretação_:

::: tip DEFINIÇÃO

Dada uma função de valoração $v$, uma **interpretação** é uma função $I_{v}$ que atribui valores lógicos a um conjunto de _fbfs_.
$$I_{v}:\mathcal{L}_{LP} \mapsto \{V, F\}$$
A interpretação é tal que:

- Caso $\alpha$ seja uma _fbf_ atómica, $I_{v}(\alpha) = v(\alpha)$;
- Caso $\alpha$ seja uma _fbf_ não atómica, $I_{v}$ é definida através de uma tabela de verdade, como por exemplo:

| $I_{v}(\alpha)$ | $I_{v}(\beta)$ | $I_{v}(\alpha \wedge \beta)$ | $I_{v}(\alpha \vee \beta)$ | $I_{v}(\alpha \to \beta)$ |
| --------------- | -------------- | ---------------------------- | -------------------------- | ------------------------- |
| V               | V              | V                            | V                          | V                         |
| V               | F              | F                            | V                          | F                         |
| F               | V              | F                            | V                          | V                         |
| F               | F              | F                            | F                          | V                         |

(De recordar que uma _fbf_ atómica é um simples símbolo de proposição).

Por abuso de linguagem, referir-nos-emos a partir de agora à interpretação $I_{v}$ através de $I$.

:::

Outro conceito interessante a ter em conta é o da **satisfação**. Dadas uma _fbf_ $\alpha$ e uma interpretação $I$, podemos dizer que **$I$ satisfaz $\alpha$ caso $I(\alpha) = V$**, ou que $\alpha$ é verdadeira segundo a interpretação $I$. Caso contrário, claro, dizemos que $I$ não satisfaz $\alpha$/que $\alpha$ é falsa segundo $I$. A título de exemplo, podemos afirmar que a função de valoração acima satisfaz $P \wedge Q$ mas não $\neg P \wedge Q$.

::: details Tabela de Verdade + Satisfação

| $P$ | $Q$ | $P \wedge Q$ | R   | $(P \wedge Q) \to R$ |
| --- | --- | ------------ | --- | -------------------- |
| V   | V   | V            | V   | V                    |
| V   | V   | V            | F   | F                    |
| V   | F   | F            | V   | V                    |
| V   | F   | F            | F   | V                    |
| F   | V   | F            | V   | V                    |
| F   | V   | F            | F   | V                    |
| F   | F   | F            | V   | V                    |
| F   | F   | F            | F   | V                    |

Através da tabela acima, podemos afirmar que a _fbf_ $(P \wedge Q) \to R$ apenas não é verdadeira no caso de ambos os símbolos de proposição P e Q serem verdadeiros e R falso - a _fbf_ não é **satisfeita** por nenhuma interpretação onde $I(P) = V, I(Q) = V, I(R) = F$.

:::

Uma _fbf_ diz-se **satisfazível** caso exista pelo menos uma interpretação que a satisfaça. Assim sendo, a _fbf_ do exemplo acima é satisfazível, visto que existem 7 interpretações que a satisfazem (e 1 que não a satisfaz, mas que para este efeito é irrelevante). Dentro do mesmo conceito, podemos olhar para as _fbfs_ **falsificáveis**, precisamente opostas às satisfazíveis - existe pelo menos uma interpretação que não as satisfaz. O exemplo acima é também falsificável, visto que, lá está, existe 1 interpretação para a qual é falsa. Podemos, então, afirmar que uma _fbf_ pode ser satisfazível e falsificável ao mesmo tempo. Temos, por fim, que uma _fbf_ é satisfazível apenas se a sua negação for falsificável.

Podemos ainda olhar para uma _fbf_ e comentar a sua tautologia - uma _fbf_ diz-se **tautológica** (ou, por abuso de linguagem, **válida**) caso seja verdadeira para qualquer interpretação. Tal como com as últimas definições, podemos encontrar a oposta de uma _fbf_ tautológica, uma _fbf_ **contraditória** - caso não seja satisfeita por qualquer interpretação. Uma _fbf_ $\alpha$ é tautológica caso a sua negação, $\alpha$, seja contraditória. A _fbf_ $P \wedge \neg P$, por exemplo, é contraditória.

A tabela de verdade abaixo mostra que a _fbf_ $(P \wedge (P \to Q)) \to Q$ é tautológica:

| $P$ | $Q$ | $P \to Q$ | $P \wedge (P \to Q)$ | $(P \wedge (P \to Q)) \to Q$ |
| --- | --- | --------- | -------------------- | ---------------------------- |
| V   | V   | V         | V                    | V                            |
| V   | F   | F         | F                    | V                            |
| F   | V   | V         | F                    | V                            |
| F   | F   | V         | F                    | V                            |

![Diagrama Tautologias](./assets/0011-venn.png#dark=1)

Podemos ainda aplicar estas lógicas a **conjuntos de _fbfs_**.

Um conjunto de _fbfs_ diz-se **satisfazível** caso exista pelo menos uma interpretação que satisfaça todas as _fbfs_ desse conjunto. Diz-se, por outro lado, **contraditório** caso nenhuma interpretação satisfaça todas as _fbfs_ desse conjunto. O conjunto $\{P, Q, P \to Q\}$, por ex., é satisfazível, visto que há uma interpretação ($I(P) = V, I(Q) = V$) que satisfaz todas as _fbfs_ do conjunto.

- **Modelo do conjunto de fórmulas** - dado um conjunto de _fbfs_ $\Delta$, um modelo desse conjunto é qualquer intepretação que satisfaz todas as _fbfs_ do conjunto.

Um argumento $(\Delta, \alpha)$ diz-se válido caso não exista nenhuma interpretação que torne todas as proposições de $\Delta$ verdadeiras e $\alpha$ falsa - nesse caso, podemos escrever $\Delta \models \alpha$, ou "$\alpha$ é **consequência semântica** de $\Delta$". Podemos também dizer que $\Delta \models \alpha$ caso todos os modelos de $\Delta$ satisfaçam $\alpha$.

Por exemplo, dado o argumento $(\{P \wedge Q, R\}, P \wedge R)$, podemos verificar que o argumento é válido, visto que não existe nenhuma interpretação que torne as premissas verdadeiras e a conclusão falsa.

| $P$ | $Q$ | $R$ | $P \wedge Q$ | $P \wedge R$ |
| --- | --- | --- | ------------ | ------------ |
| V   | V   | V   | V            | V            |
| V   | V   | F   | V            | F            |
| V   | F   | V   | F            | V            |
| V   | F   | F   | F            | F            |
| F   | V   | V   | F            | F            |
| F   | V   | F   | F            | F            |
| F   | F   | V   | F            | F            |
| F   | F   | F   | F            | F            |

- **Teorema da refutação** - Dado um conjunto de _fbfs_ $\Delta$ e uma _fbf_ $\alpha$, $\Delta \models \alpha$ se e só se $\Delta \cup \{\neg \alpha\}$ não for satisfazível.

(No exemplo abaixo, os espaços marcados como irrelevantes devem-se às premissas não serem todas verdadeiras, pelo que nada podemos extrair em relação à validade do argumento).

| $P$ | $Q$ | $R$ | $P \to R$ | $Q \to R$ | $P \vee Q$ | $(P \vee Q) \to R$ |
| --- | --- | --- | --------- | --------- | ---------- | ------------------ |
| V   | V   | V   | V         | V         | V          | V                  |
| V   | V   | F   | F         | F         | --         | --                 |
| V   | F   | V   | V         | V         | V          | V                  |
| V   | F   | F   | F         | V         | --         | --                 |
| F   | V   | V   | V         | V         | V          | V                  |
| F   | V   | F   | V         | F         | --         | --                 |
| F   | F   | V   | V         | V         | F          | V                  |
| F   | F   | F   | V         | V         | F          | V                  |

Acima, podemos ver o exemplo do argumento $\{P \to Q, Q \to R\} \models (P \vee Q) \to R$. As colunas 4 e 5 são as das premissas, a 7 a da conclusão - como podemos notar, **não existe nenhuma interpretação onde as premissas sejam todas verdadeiras e a conclusão falsa**. Podemos, portanto, dizer que o argumento é válido.

Podemos ainda demonstrar tautologias:

| $P$ | $Q$ | $\neg(P \wedge Q)$ | $\neg P \vee \neg Q$ | $\neg(P \wedge Q) \leftrightarrow (\neg P \vee \neg Q)$ |
| --- | --- | ------------------ | -------------------- | ------------------------------------------------------- |
| V   | V   | F                  | F                    | V                                                       |
| V   | F   | V                  | V                    | V                                                       |
| F   | V   | V                  | V                    | V                                                       |
| F   | F   | V                  | V                    | V                                                       |

Aqui, podemos afirmar que $\neg(P \wedge Q) \leftrightarrow (\neg P \vee \neg Q)$ é uma tautologia, ou seja, que $\models \neg(P \wedge Q) \leftrightarrow (\neg P \vee \neg Q)$

## Correção e Completude

A lógica proposicional é **correta e completa**.

- **Correção** - Para quaisquer _fbfs_ $\alpha_{1}, \cdots, \alpha_{k}$ e $\beta$, se pudermos derivar $\beta$ de $\{\alpha_{1}, \cdots, \alpha_{k}\}$, ou seja, se $\{\alpha_{1}, \cdots, \alpha_{k}\} \vdash \beta$, então $\{\alpha_{1}, \cdots, \alpha_{k}\} \models \beta$. Qualquer argumento demonstrável é válido de acordo com a semântica.

- **Completude** - Para quaisquer _fbfs_ $\alpha_{1}, \cdots, \alpha_{k}$ e $\beta$, se pudermos afirmar que $\beta$ é consequência semântica de $\{\alpha_{1}, \cdots, \alpha_{k}\}$, ou seja, se $\{\alpha_{1}, \cdots, \alpha_{k}\} \models \beta$, então $\{\alpha_{1}, \cdots, \alpha_{k}\} \vdash \beta$. Qualquer argumento válido de acordo com a semântica é demonstrável.

Podemos, então, voltar a olhar para a relação entre os sistemas dedutivo e semântico.

![Dedutivo vs Semântico](./assets/0011-dedsem.png#dark=1)
