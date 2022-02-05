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

:::info[Redutibilidade]

Dados dois problemas $X$ e $Y$, podemos afirmar que $X$ é redutível em tempo polinomial a $Y$, $X \leq_p Y$, caso possamos reescrever $X$ como instância do problema $Y$ de forma a que qualquer solução para o problema $Y$ seja uma solução para o problema $X$. Formalmente, dizemos que tem de existir uma função $f: X \to Y$ tal que $X \leq_p Y$ se:

$$
\forall_{x \in X}, \quad X(x) = 1 \quad \text { se e só se } \quad Y(y) = Y(f(x)) = 1
$$

Dizemos que $f$ é uma **função de redução**, com respetivo **algoritmo de redução** associado $F$.

Intuitivamente, se podemos reduzir um problema $X$ a outro $Y$ em tempo polinomial, então $X$ não deverá ser "mais díficil" de resolver que $Y$.

Um problema diz-se **$NP$-Díficil** caso possamos reduzir qualquer problema $NP$ a ele próprio em tempo polinomial - nenhum dos outros será "mais díficil" que ele próprio. São também, portanto, **tão difíceis** quanto problemas $NP$-Completos. Não têm necessariamente de ser problemas em $NP$ - o _halting problem_ é $NP$-Díficil, já que é tão ou mais difícil de resolver que qualquer problema $NP$, mas nem sequer tem solução (nem polinomial nem superpolinomial).

**Se alguma vez for descoberta uma solução em tempo polinomial para um problema $NP$-Difícil, foi descoberta uma solução em tempo polinomial para todos os problemas $NP$**.

:::

Podemos, agora, ter uma noção melhor das relações entre estas várias classes de problemas:

![Classes de problemas](./assets/0009-venn-np.png#dark=1)

<!-- ## Problemas Resolúveis em Tempo Polinomial -->

<!-- ## Problemas Verificáveis em Tempo Polinomial -->

<!-- ## Redutibilidade e Completude $NP$ -->

### Teorema de Cook-Levin

---

- [Slides]()
- [Notas]()
