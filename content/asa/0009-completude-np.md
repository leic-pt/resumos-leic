---
title: Completude NP
description: Completude NP.
  Definições de P, NP e NPC.
  Redutibilidade Polinomial.
  Teorema de Cook-Levin.
path: /asa/completude-np
type: content
---

# Completude NP

```toc

```

:::tip[Nota]

Esta secção tem a co-autoria do [João Rocha](https://github.com/calhau18).

:::

Os algoritmos abordados até agora podem ser resolvidos em tempo polinomial - a sua complexidade temporal do pior caso é sempre do tipo $O(n^k)$, para alguma constante $k$. Contudo, nem todos os programas partilham esta propriedade: há problemas, como o clássico _Halting problem_ que não possuem qualquer solução:

::youtube{#macM_MtS_w4}

Além desses, há também problemas que se julgam apenas ter soluções em tempo superpolinomial, e será esse o foco desta secção: procurar provar que há problemas que são necessariamente difíceis, sem resolução eficiente (polinomial). É importante conseguir provar que há certos problemas sem resolução eficiente, mais não seja para evitar estar à procura de uma solução eficiente que não existe.

Temos, então, duas principais classes de problemas:

- os problemas [$P$](color:orange), para os quais podemos encontrar uma solução de forma eficiente, em tempo polinomial.

- os problemas [$NP$](color:yellow), "Não-Determinísticos Polinomiais", que possuem solução (conhecida) superpolinomial, mas que são **verificáveis** em tempo polinomial: dado um [**certificado**](color:green), é possível verificar em tempo eficiente se o mesmo corresponde a uma solução para o problema. Aqui, dizemos que um certificado corresponde a uma potencial solução para o problema: no caso de um programa que procura descobrir o caminho mais longo de um grafo, um _certificado-exemplo_ corresponderia a um qualquer caminho que fosse fornecido como input. Podemos afirmar que $P \subseteq NP$: todos os problemas com solução em tempo polinomial também são, claro, verificáveis em tempo polinomial (basta procurar a solução, que é feita em tempo polinomial).

Até agora, o nosso objetivo ao analisar algoritmos sempre foi procurar encontrar uma majoração, notação $O$, para a complexidade temporal que um dado algoritmo pode ter - um pior caso. Nos problemas $NPC$, vamos procurar fazer precisamente o oposto: tentar demonstrar que um dado problema é "pelo menos tão difícil" como outro que já sabemos ser difícil, algo semelhante à noção de $\Omega$, minorante da complexidade temporal.

## Redutibilidade de um Problema

Dados dois problemas $X$ e $Y$, podemos afirmar que $X$ é redutível em tempo polinomial a $Y$, $X \leq_p Y$, caso possamos reescrever uma instância de $X$ como instância do problema $Y$ de forma a que qualquer solução para o problema $Y$ seja uma solução para o problema $X$. Formalmente, dizemos que tem de existir uma função $f: X \to Y$ tal que $X \leq_p Y$ se:

$$
\forall_{x \in X}, \quad X(x) = 1 \quad \text { se e só se } \quad Y(y) = Y(f(x)) = 1
$$

Dizemos que $f$ é uma **função de redução**, com respetivo **algoritmo de redução** associado $F$.

![Redução - Intuição](./assets/0009-np-reducao.svg#dark=2)

Acima podemos ver o exemplo de como a lógica funciona - pegamos numa instância de um problema, reduzimo-la numa instância de outro problema através de um algoritmo de redução que leva **necessariamente** tempo polinomial, tendo que a resposta ao problema reescrito terá de ser a mesma que a do problema original!

Intuitivamente, se podemos reduzir um problema $X$ a outro $Y$ em tempo polinomial, então $X$ não deverá ser "mais difícil" de resolver que $Y$.

Um problema $x$ diz-se **$NP$-Difícil** ($NPH$, de $NP$_-hard_) caso possamos reduzir qualquer problema $NP$ a $x$ em tempo polinomial - nenhum dos outros será "mais difícil" que $x$. Não têm necessariamente de ser problemas em $NP$ - o _halting problem_ é $NP$-Difícil, mas nem sequer tem solução (nem polinomial nem superpolinomial), não fazendo portanto parte de $NP$.

Aos problemas que são tanto $NP$ como $NP$-difíceis, damos o nome de **$NP$-completos** ($NPC$). Estes são portanto, problemas cuja solução pode ser verificada em tempo polinomial, que são no máximo tão difíceis como qualquer problema $NP$ (isto é, a solução eficiente para qualquer problema $NP$ implica solução eficiente para este problema).

:::tip[P vs NP]

Em 2000, o [Clay Mathematics Institute](https://en.wikipedia.org/wiki/Clay_Mathematics_Institute) estabeleceu 7 problemas matemáticos como os "Millenium Prize Problems". Estes 7 problemas são considerados como alguns dos problemas mais difíceis e importantes por resolver em matemática, e qualquer pessoa que os resolva é premiada com um prémio de 1,000,000\$.

Um destes problemas é conhecido como ["P versus NP"](https://en.wikipedia.org/wiki/P_versus_NP_problem). Este problema consiste em provar ou refutar que qualquer problema $NP$ é também de classe $P$.

Considerando a definição que oferecemos para problemas $NPH$, concluímos que para provar que $P = NP$ basta encontrar um problema $NPH$ com solução em tempo polinomial. Esta descoberta teria inúmeras consequências nas áreas da matemática, criptografia, filosofia, economia, medicina, etc. Contudo, há mais de 50 anos que os investigadores mais brilhantes do mundo não conseguem encontrar tal solução, pelo que é [genericamente acreditado que $P \neq NP$](https://www.newscientist.com/article/dn21578-poll-consensus-on-million-dollar-logic-problem/) (no entanto, também ainda ninguém o conseguiu provar).

:::

Podemos, agora, ter uma noção melhor das relações entre estas várias classes de problemas:

![Classes de problemas](./assets/0009-venn-np.svg#dark=2)

Por fim, podemos afirmar que:

$$
X \in NP \wedge Y \in NPC \wedge Y \leq_p X \implies X \in NPC
$$

Isto é, se houver um problema que é $NP$-Completo (e, portanto, $NP$-Difícil), todos os problemas em $NP$ para os quais o podemos reduzir serão também $NP$-Completos, já que terão de ser _pelo menos tão difíceis_ quanto $Y$, que já é, por definição, $NP$-Difícil.

### Teorema de Cook-Levin

Ora, precisamos então de ter um problema raiz que seja $NP$-Completo para, a partir desse, conseguir extrair todos os outros. Assim, provar a conjetura $P$ vs $NP$, por exemplo, reduz-se a provar que esse algoritmo é ou não é de classe $P$.

O **teorema de Cook-Levin** diz-nos, de forma muito sucinta, que o [problema de SAT](../lp/algoritmos-sat), abordado em LP, é $NP$-Completo. A prova é bastante extensa, pelo que não será apresentada aqui. Contudo, tanto as notas do prof. Fragoso como o vídeo abaixo contêm excelentes explicações do mesmo!

::youtube{#LW_37i96htQ}

SAT é então a raiz da completude $NP$, e SAT pode reduzir-se a todos os outros problemas $NPC$ (por definição de problemas $NPC$, qualquer problema $NP$ - incluindo o SAT - pode ser reduzido a eles). Contudo, nem sempre é simples fazê-lo, devido às diferenças que podem existir entre SAT e o outro problema em mãos.

Introduzimos agora a noção de **transitividade** na redução de problemas:

$$
X \leq_p Y \wedge Y \leq_p Z \implies X \leq_p Z.
$$

Esta propriedade permite-nos provar a $NP$-Completude de um problema apenas provando que esse problema é redutível ao SAT.

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

já que a composição de reduções continua a custar tempo polinomial (corresponderia a uma soma de reduções que levam todas tempo polinomial).

## Reduções Clássicas

Há um conjunto de reduções clássicas entre vários problemas $NPC$, problemas estes abordados nas aulas teóricas e que são úteis ter em mente:

![Reduções Clássicas](./assets/0009-reducoes-classicas.svg#dark=2)

Todos os problemas acima mencionados são $NPC$. Nesta secção vão ser abordadas algumas destas reduções clássicas.

### [Redução de CNF-SAT para 3CNF-SAT](color:yellow)

Numa primeira fase, devemos definir CNF-SAT e 3CNF-SAT.

:::tip[CNF-SAT]

Temos que uma _fórmula_ está na forma CNF SAT, _conjunctive normal form_ (equivalente à [forma clausal](../lp/logica-proposicional-sc#forma-clausal) abordada em LP) se corresponde a uma conjunção de disjunções. Cada sub-conjunto de disjunções diz-se uma cláusula, e cada um dos seus elementos diz-se um literal - uma variável ou a negação de uma variável.

:::

A forma 3CNF-SAT é praticamente igual a esta última, com um _twist_: cada cláusula deve conter **exatamente** 3 literais. Sendo assim, para reduzir CNF-SAT a 3CNF-SAT, teremos de arranjar um algoritmo que nos transforme um dado conjunto de cláusulas noutro conjunto equivalente, mas em que cada cláusula contenha agora 3 literais. Mais ainda, se $\phi$ é uma fórmula na forma CNF-SAT e $\phi'$ é a mesma fórmula, reescrita na forma 3CNF-SAT, temos que $\phi$ só é satisfazível caso $\phi'$ também o seja.

Primeiro, devemos provar que 3CNF-SAT é $NP$ - para tal, podemos referir que tendo um certificado (uma dada função de valoração para o conjunto de variáveis da fórmula em 3CNF-SAT), podemos verificar o valor lógico da fórmula em tempo polinomial (e podemos). De seguida, teremos então de verificar se conseguimos reduzir CNF-SAT a 3CNF-SAT - sendo CNF-SAT $NP$-Completo, 3CNF-SAT seria também $NP$-Completo (tendo em conta ser $NP$).

Para reescrever uma cláusula de CNF-SAT para 3CNF-SAT, teremos então de considerar quatro casos:

- a cláusula contém 1 literal;
- a cláusula contém 2 literais;
- a cláusula contém 3 literais;
- a cláusula contém 4 ou mais literais.

O algoritmo irá funcionar **cláusula-a-cláusula**, em vez de olhar logo para o conjunto de todas as cláusulas e procurar reescrever outro equivalente.

O caso onde a cláusula contém 3 literais é, claro, bastante simples: não tocamos na cláusula, visto que já está na forma que pretendemos.

Para os próximos casos iremos utilizar **variáveis auxiliares**, de controlo: consideremos que temos em mãos uma cláusula do tipo $x \vee y$. Não podemos simplesmente adicionar uma variável qualquer à cláusula e dizer "tem 3 literais, estamos bem" - se o valor lógico dessa variável for $T$, verdadeiro, essa cláusula acabará por ter sempre valor lógico verdadeiro, algo que não queremos. Temos então duas opções:

- A clássica abordada em aula: reescrever a cláusula sob a forma da conjunção de duas novas cláusulas: $(x \vee y \vee z) \wedge (x \vee y \vee \neg z)$. A introdução de outra cláusula com a negação de $z$ é bastante interessante: desta forma, e como se trata de uma **conjunção**, torna-se impossível ter $x$ e $y$ falsos com a conjunção verdadeira, tornando $z$ uma mera formalidade.

- A mencionada pelo [Pedro Chaparro](https://github.com/PedroChaps), bastante mais simples, que consiste apenas em adicionar uma das variáveis em duplicado à cláusula. $x \vee y$ tornar-se-ia $x \vee y \vee y$, por exemplo. **Não tenho a certeza se esta forma de resolver é aceite em contexto de avaliação**, apesar de ser correta.

Consideremos agora que temos uma cláusula com apenas 1 literal, $x$. Podemos, claro, aplicar o segundo método acima referido e ficar com $x \vee x \vee x$, que está correto. A forma clássica, contudo, seria ter duas variáveis de controlo, formando quatro novas cláusulas:

$$
(x \vee y \vee z) \wedge (x \vee y \vee \neg z) \wedge (x \vee \neg y \vee z) \wedge (x \vee \neg y \vee \neg z)
$$

Tal como no caso dos 2 literais, $y$ e $z$ não passam aqui de uma formalidade, já que o seu valor lógico acaba por ser irrelevante quando olhando para o valor da conjunção das 4 cláusulas.

O caso das cláusulas com 4 ou mais literais é o menos trivial. Consideremos que temos uma cláusula inicial do tipo $(x_1 \vee \neg x_2 \vee x_3 \vee \neg x_4 \vee x_5)$. A estratégia utilizada para transformar a cláusula num conjunto de cláusulas de 3 literais passa, mais uma vez, por **variáveis de controlo**. Seguimos um padrão, tal que a cláusula em questão é equivalente a:

$$
x_1 \vee \neg x_2 \vee y_1\\
\neg y_1 \vee x_3 \vee y_2\\
\neg y_2 \vee \neg x_4 \vee x_5
$$

Ou seja, as cláusulas das "pontas" terão ambas 2 literais da cláusula original, enquanto que todas as outras terão apenas 1, procurando ir "cortando" os valores das variáveis de controlo.

Desta forma, se a cláusula inicial for verdadeira, será possível encontrar uma função de valoração que torne todas as cláusulas resultantes também verdadeiras. Caso contrário, isto é, se a cláusula inicial for falsa, não haverá tal função de valoração (note-se que há $n-1$ variáveis de controlo (com $n$ sendo o novo número de cláusulas), pelo que a existência de um literal verdadeiro na cláusula inicial é condição necessária e suficiente para que haja tal função de valoração).

A lógica pode não ser aparente assim de repente, por isso experimentemos atribuir valores lógicos às variáveis originais.

- Tenhamos $x_1 = x_3 = x_5 = F \wedge x_2 = x_4 = T$. Podemos facilmente reparar que a cláusula original teria valor lógico $F$. Experimentemos olhar para o comportamento das três novas cláusulas:

  - Com $x_1$ e $\neg x_2$ a possuírem valor lógico $F$, $y_1$ terá que ter valor lógico verdadeiro para a conjunção das cláusulas também o ter;

  - Com $\neg y_1$ e $x_3$ com valor lógico $F$, $y_2$ terá agora que ter também valor lógico $V$;

  - $\neg y_2, \neg x_4, x_5$ têm todas valor lógico falso, pelo que a conjunção das cláusulas representa também o valor lógico $F$. Bate certo!

- Tenhamos agora $x_1 = T \wedge x_3 = x_5 = x_2 = x_4 = F$. A cláusula original possui valor lógico verdadeiro, pelo que:

  - Com $x_1$ verdadeiro, $y_1$ poderá possuir qualquer valor lógico. Deixemos a variável em _standby_;

  - $y_2$ terá de ficar igualmente em _standby_, já que o seu valor lógico requerido poderá depender da próxima cláusula (e de $y_1$);

  - Na última cláusula, verificamos que $y_2$ tem de ter valor lógico $F$. Assim sendo, $y_1$ terá igualmente de o ter, tornando a conjunção das 3 cláusulas verdadeira, tal como pretendido!

Mais uma vez, aqui o valor lógico das próprias variáveis de controlo não é "relevante", acabando por ser o valor lógico das variáveis originais a ditar o valor da conjunção das cláusulas em 3CNF-SAT.

Podemos então dizer que encontrámos um algoritmo, com 4 casos distintos, para reescrever uma fórmula CNF-SAT na forma 3CNF-SAT, tal que a fórmula na forma CNF-SAT só é satisfazível caso a mesma na forma 3CNF-SAT o seja.

Para analisar o **custo da redução**, e verificar se o mesmo é polinomial, é relevante indicar o número de cláusulas _criadas_ pelo algoritmo por cláusula original (tenhamos aqui $n =$ número de literais da cláusula original):

$$
\begin{cases}
  4 &\quad n = 1\\
  2 &\quad n = 2\\
  1 &\quad n = 3\\
  n - 2 &\quad n > 3
\end{cases}
$$

Considerando que originalmente teríamos $m$ cláusulas, a aplicação do algoritmo reescreve a fórmula noutra que, na pior das hipóteses, possui $O(mn)$ cláusulas. O custo de redução é, portanto, polinomial, e CNF-SAT é redutível a 3CNF-SAT.

:::warning

O professor disse nas aulas teóricas que uma pergunta-exemplo semelhante a algo que podia sair em exame seria "provar que 4CNF-SAT é $NP$-Completo". A estratégia passaria, então, por procurar reduzir 3CNF-SAT a 4CNF-SAT (e encontrar um algoritmo que o consiga fazer em tempo polinomial): sendo 3CNF-SAT redutível a 4CNF-SAT, não deverá ser mais difícil que 4CNF-SAT. Contudo, sendo 3CNF-SAT $NP$-Completo, poderíamos afirmar que 4CNF-SAT seria $NP$-Completo!

:::

### [Redução de 3CNF-SAT para Clique](color:purple)

:::info[Clique]

Seja $G$ um grafo não dirigido. $V'$ diz-se um **clique** de $G$ caso $\forall_{x, y \in V'}, (x, y) \in E$ - todos os vértices de $V'$ "vêem" todos os outros, têm uma aresta direta para todos os outros que também pertencem a $V'$. Corresponde, portanto, a um **subgrafo completo** de $G$.

Abaixo podemos observar um clique de tamanho 3:

![Clique - Exemplo 1](./assets/0009-clique-exemplo-1.svg#dark=2)

O clique corresponde a $V' = \{A, B, C\} = V$, e $|V'| = 3$ - todos os vértices têm arestas que os ligam aos outros em $V'$.

De seguida apresenta-se outro exemplo, onde aqui há dois cliques de tamanho máximo (3):

![Clique - Exemplo 2](./assets/0009-clique-exemplo-2.svg#dark=2)

Os dois cliques são, então, $V' = \{A, B, C\}$ e $V' = \{B, C, D\}$, ambos com tamanho 3.

:::

Seguindo a cadeia de reduções inicial, procuraremos agora reduzir 3CNF-SAT ao problema Clique - dados um grafo $G$ e um inteiro $k$, verificar se existe um clique de tamanho $k$ em $G$.

Primeiro, devemos referir que Clique é $NP$: o certificado aqui corresponde a um clique, e a sua verificação ocorre em tempo polinomial - basta verificar se existem arestas entre cada par de vértices de $V'$.

De seguida, teremos de provar que podemos então reduzir 3CNF-SAT ao problema Clique em tempo polinomial. Num primeiro momento, será relevante notar que as fórmulas na forma 3CNF-SAT são tal que $C_1 \wedge C_2 \wedge ... \wedge C_k$, onde $C_i = l_{i1} \vee l_{i2} \vee l_{i3}$. Temos, claro, que a fórmula só tem valor lógico verdadeiro se houver pelo menos um literal em cada cláusula com valor lógico verdadeiro. O paralelismo com o problema Clique entra exatamente aqui: iremos organizar um grafo $k$-partido, onde cada partição corresponde a uma cláusula, e vamos ligar todos os literais de uma cláusula - os vértices de uma partição - a todos os outros das outras cláusulas que não sejam a respetiva negação: podemos ligar $x_2$ a $x_2$ (uma instância dele próprio noutra cláusula) e a $x_3$, mas não a $\neg x_2$. Um **clique** neste grafo corresponderá, então, a um conjunto de valores lógicos de literais que permitem satisfazer a fórmula, já que haverá ligações diretas entre todas as cláusulas (as partições) do grafo! Caso não exista qualquer clique no grafo, a fórmula não é satisfazível.

É sem dúvida mais simples transmitir a ideia através de suporte visual. Tenhamos o conjunto de cláusulas $C_1, C_2, C_3$ tal que:

$$
C_1 = x_1 \vee \neg x_2 \vee \neg x_3\\
C_2 = \neg x_1 \vee x_2 \vee x_3\\
C_3 = x_1 \vee x_2 \vee x_3
$$

A construção do grafo tripartido equivalente levaria a:

![Clique - Grafo Tripartido](./assets/0009-clique-tripartido.svg#dark=2)

Um clique possível seria, aqui, tornar $\neg x_2$ e $x_3$ verdadeiros, e podemos reparar que independentemente do valor lógico de $x_1$, a fórmula é satisfazível. **Uma fórmula na forma 3CNF-SAT é satisfazível apenas se houver um clique no grafo $n$-partido correspondente.**

Resta provar que o algoritmo de redução é polinomial. Tendo $n$ cláusulas, podemos ter no máximo $\frac{3n*3(n - 1)}{2}$[**\***](color:yellow) arestas, caso se trate de um grafo completo, pelo que a redução de 3CNF-SAT a Clique é polinomial, e podemos afirmar finalmente que Clique é $NPC$.

[**\***](color:yellow) Temos $3n$ vértices, cada um deles pode estar ligado a, no máximo, $3(n-1)$ vértices (estar ligado a todos os outros das outras partições). Como não queremos contar arestas nos dois sentidos, dividimos o produto por $2$.

### [Redução de Clique para Cobertura de Vértices](color:pink)

Diz-se que a **cobertura de vértices** de um grafo $G = (V, E)$ é um subconjunto de $V$, $V'$, tal que para todo o arco $(u, v)$ de $E$ ou $u$ ou $v$ estão representados em $V'$:

$$
\forall_{(u, v) \in V}, \quad u \in V' \vee v \in V'
$$

O problema associado a esta noção prende-se precisamente na existência (ou não) de uma cobertura de vértices em $G$ com um dado tamanho $k$. Corresponde a um dos [21 Problemas $NP$-Completos de Karp](https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems).

Abaixo encontram-se dois exemplos de duas coberturas diferentes em grafos diferentes:

![Cobertura de Vértices - Exemplo](./assets/0009-vcover-example.svg#dark=2)

O objetivo será aqui provar, sabendo que Clique é $NP$-Completo, que a cobertura de vértices também o é.

Num primeiro momento, teremos de provar que o problema está em NP, prova essa trivial: basta passar por todas as arestas do grafo e verificar se pelo menos um dos vértices do arco está na cobertura, realizável facilmente em tempo polinomial ($O(E)$).

Pretendemos então reduzir o problema Clique ao problema Cobertura de Vértices. Para tal, vamos recorrer à noção de **grafo complementar**: dado um grafo $G = (V, E)$, o seu complementar, $\overline{G} = (V, \overline{E})$ corresponde a um grafo tal que todas as ligações presentes em $E$ são removidas e todas as ligações não presentes são adicionadas. Encontra-se abaixo o exemplo de um grafo e respetivo complementar:

![Grafo Complementar - Exemplo](./assets/0009-complementar-example.svg#dark=2)

A redução inicia-se precisamente com a criação de um grafo complementar ao grafo dado, facilmente realizável em tempo polinomial (verificam-se todos os pares de vértices e criam-se arestas caso estas não existam no grafo original, $O(V^2)$). Afirmamos então que um grafo só tem um clique de tamanho $k$ se o grafo complementar tiver uma cobertura de vértices de tamanho $|V| - k$.

Para o provar, consideremos que $A$ corresponde a um clique de tamanho $k$ em $G$, e que $\overline{A}$ corresponde a uma cobertura de tamanho $|V| - k$ em $\overline{G}$, tal que $\overline{A} = V - A$. De seguida, peguemos numa qualquer aresta $(u, v)$ de $\overline{E}$ (aresta esta não presente em $E$, portanto). Temos, necessariamente, que pelo menos um dos vértices entre $u$ e $v$ não pertence a $A$ - caso contrário, **teriam necessariamente de estar ambos ligados no mesmo**, por definição de clique, e essa ligação teria de existir em $E$. Ao mesmo tempo, pelo menos um dos vértices terá de estar contido em $\overline{A}$, já que a cobertura tem de passar por todos os arcos de $\overline{E}$. Assim sendo:

- o conjunto $\overline{A}$ forma uma cobertura de vértices de tamanho $|V| - k$, "capturando" todos os vértices que no grafo original tinham "ligações em falta";

- o conjunto $A$ forma um clique de tamanho $k$.

O exemplo abaixo torna esta ideia mais aparente:

![VCover - Exemplo Pós-Teoria](./assets/0009-vcover-graph.svg#dark=2)

Pegando em todos os arcos do grafo complementar, podemos verificar que pelo menos um dos seus elementos não está no clique de tamanho $4$ do grafo original.

A redução foi feita em tempo polinomial, pelo que podemos afirmar que o problema da Cobertura de Vértices é $NP$-Difícil; aliado a estar em $NP$, podemos então admitir que o problema é $NP$-Completo.

---

Por fim, no vídeo abaixo encontram-se mais alguns exemplos de reduções que podem ser interessantes para uma melhor compreensão das estratégias que devemos tomar para as fazer.

::youtube{#u5W32YxmnL8}

---

- [Notas Prof. José Fragoso - Completude NP](https://drive.google.com/file/d/1tIOEeyIF2SpV08aihCva-fkUqjtX8dFp/view?usp=sharing)
- [Notas Prof. José Fragoso - Redutibilidade](https://drive.google.com/file/d/1weBRRJPjoqDzfmUZt8rH1Mmk4KdosG0i/view?usp=sharing)
