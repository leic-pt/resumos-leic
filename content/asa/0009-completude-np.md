---
title: Completude NP
description: Completude NP.
  Definições de P, NP e NPC.
  Redutibilidade Polinomial.
  Teorema de Cook-Levin.
path: /asa/completude-np
type: content
---

# Completude $NP$

```toc

```

Os algoritmos abordados até agora podem ser resolvidos em tempo polinomial - a sua complexidade temporal do pior caso é sempre do tipo $O(n^k)$, para alguma constante $k$. Contudo, nem todos os programas partilham esta propriedade: há problemas, como o clássico _Halting problem_ que não possuem qualquer solução:

::youtube{#macM_MtS_w4}

Além desses, há também problemas que se julgam apenas ter soluções em tempo superpolinomial, e será esse o foco desta secção: procurar provar que há problemas que são necessariamente difíceis, sem resolução eficiente (polinomial). É importante conseguir provar que há certos problemas sem resolução eficiente, mais não seja para evitar estar à procura de uma solução eficiente que não existe.

Temos, então, três principais classes de problemas:

- os problemas [$P$](color:orange), para os quais podemos encontrar uma solução de forma eficiente, em tempo polinomial.

- os problemas [$NP$](color:yellow), "Não-Determínisticos Polinomiais", que possuem solução (conhecida) superpolinomial, mas que são **verificáveis** em tempo polinomial: dado um [**certificado**](color:green), é possível verificar em tempo eficiente se o mesmo corresponde a uma solução para o problema. Aqui, dizemos que um certfificado corresponde a uma potencial solução para o problema: no caso de um programa que procura descobrir o caminho mais longo de um grafo, um _certificado-exemplo_ corresponderia a um qualquer caminho que fosse fornecido como i$np$ut. Podemos afirmar que $P \subseteq NP$: todos os problemas com solução em tempo polinomial também são, claro, verificáveis em tempo polinomial.

- os problemas [$NPC$](color:pink), ditos "$NP$-Completos". Um problema diz-se $NP$-Completo se for $NP$ _e_ for tão "difícil" quanto qualquer problema $NP$ - isto é, dado um problema $P$, se $P$ for $NP$ e qualquer problema $NP$ for redutível a $P$, então $P$ é $NP$-Completo. A noção de redutibilidade de um problema será clara mais à frente. Se alguma vez for descoberto que um problema $NP$-Completo pode ser resolvido em tempo polinomial, **todos os problemas $NP$** podem ser resolvidos em tempo polinomial, fazendo colapsar grande parte da criptografia moderna, bem como outras áreas da computação. Acredita-se, portanto, que $P \neq NP$.

Até agora, o nosso objetivo ao analisar algoritmos sempre foi procurar encontrar uma majoração, notação $O$, para a complexidade temporal que um dado algoritmo pode ter - um pior caso. Nos problemas $NPC$, vamos procurar fazer precisamente o oposto: tentar demonstrar que um dado problema é "pelo menos tão difícil" como outro que já sabemos ser díficil, algo semelhante à noção de $\Omega$, minorante da complexidade temporal.

## Redutibilidade de um Problema

Dados dois problemas $X$ e $Y$, podemos afirmar que $X$ é redutível em tempo polinomial a $Y$, $X \leq_p Y$, caso possamos reescrever $X$ como instância do problema $Y$ de forma a que qualquer solução para o problema $Y$ seja uma solução para o problema $X$. Formalmente, dizemos que tem de existir uma função $f: X \to Y$ tal que $X \leq_p Y$ se:

$$
\forall_{x \in X}, \quad X(x) = 1 \quad \text { se e só se } \quad Y(y) = Y(f(x)) = 1
$$

Dizemos que $f$ é uma **função de redução**, com respetivo **algoritmo de redução** associado $F$.

![Redução - Intuição](./assets/0009-np-reducao.png)

Acima podemos ver o exemplo de como a lógica funciona - pegamos numa instância de um problema, reduzimo-la numa instância de outro problema através de um algoritmo de redução que leva tempo polinomial, e a resposta ao problema reescrito será a mesma que a do problema original!

Intuitivamente, se podemos reduzir um problema $X$ a outro $Y$ em tempo polinomial, então $X$ não deverá ser "mais díficil" de resolver que $Y$.

Um problema diz-se **$NP$-Díficil** caso possamos reduzir qualquer problema $NP$ a ele próprio em tempo polinomial - nenhum dos outros será "mais díficil" que ele próprio. São também, portanto, **tão difíceis** quanto problemas $NP$-Completos. Não têm necessariamente de ser problemas em $NP$ - o _halting problem_ é $NP$-Díficil, já que é tão ou mais difícil de resolver que qualquer problema $NP$, mas nem sequer tem solução (nem polinomial nem superpolinomial).

**Se alguma vez for descoberta uma solução em tempo polinomial para um problema $NP$-Difícil, foi descoberta uma solução em tempo polinomial para todos os problemas $NP$**.

Podemos, agora, ter uma noção melhor das relações entre estas várias classes de problemas:

![Classes de problemas](./assets/0009-venn-np.png#dark=1)

Por fim, podemos afirmar que:

$$
X \in NP \wedge Y \in NPC \wedge Y \leq_p X \implies X \in NPC
$$

Isto é, se houver um problema que é $NP$-Completo (e, portanto, $NP$-Díficil), todos os problemas em $NP$ para os quais o podemos reduzir serão também $NP$-Completos, já que terão de ser _pelo menos tão difíceis_ quanto $Y$, que já é, por definição, $NP-Díficil$.

### Teorema de Cook-Levin

Ora, precisamos então de ter um problema raiz que seja $NP$-Completo para, a partir desse, conseguir extrair todos os outros: todos os outros problemas $NP$-Completos poderão ser reduzidos para esta raiz, provando-se então que também são $NP$-Completos.

O **teorema de Cook-Levin** diz-nos, de forma muito sucinta, que o [problema de SAT](../lp/algoritmos-sat), abordado em LP, é $NP$-Completo. A prova é bastante extensa, pelo que não será apresentada aqui. Contudo, tanto as notas do prof. Fragoso como o vídeo abaixo contêm excelentes explicações do mesmo!

::youtube{#LW_37i96htQ}

SAT é então a raiz da completude $NP$, e todos os problemas $NP$-Completos podem ser reduzidos a SAT. Contudo, nem sempre é simples fazê-lo, devido às diferenças que podem existir entre SAT e o outro problema em mãos. É então aí que entra a noção de **transitividade** na redução de problemas:

$$
X \leq_p Y \wedge Y \leq_p Z \implies X \leq_p Z.
$$

Esta propriedade permite-nos pegar em qualquer problema $NP$-Completo e dizer que é necessariamente redutível a SAT, mesmo que inicialmente tenhamos provado que é $NP$-Completo via outro problema $NPC$.

A prova da transitividade é bastante simples: voltando à noção de função de redução, e com

$$
X \leq_p Y \wedge Y \leq_p Z,
$$

temos necessariamente que

$$
x \in X \leftrightarrow f(x) \in Y \wedge y \in Y \leftrightarrow g(y) \in Z,
$$

onde $f$ e $g$ são as funções de redução associadas às reduções de $X$ a $Y$ e $Y$ a $Z$, respetivamente. Podemos, então, afirmar que:

$$
x \in X \leftrightarrow f(x) \in Y \leftrightarrow g(f(x)) \in Z,
$$

já que a composição de reduções continua a custar tempo polinomial!

## Reduções Clássicas

---

- [Slides]()
- [Notas]()
