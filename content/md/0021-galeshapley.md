---
path: /md/relacionamentos-gale-shapley
---

# Algoritmos de Gale-Shapley

## Definições

### Grafo k-partido

Um grafo diz-se $k$-partido $(k \in \N_2)$ se existe uma partição do conjunto dos seus vértices em $k$ conjuntos, nenhum deles contendo vértices adjacentes.  
Se $k=2$ pode-se chamar `bipartido`, se $k=3$ `tripartido` e para $k> 3$ multipartido.

:::details[Exemplo]

![Grafo Tripartido](./imgs/0021-TriPartido.png)

É um grafo `tripartido`. Repare-se que existe uma partição em $3$ conjuntos (azuis, verdes e vermelhos), e em cada conjunto não há vértices adjacentes.

:::

## Algoritmo da Estabilidade

### Relacionamento

Sejam $H$ e $M$ dois conjuntos finitos equipolentes (com o mesmo tamanho), que representam o conjunto de Rapazes e Raparigas, respetivamente. Seja $\operatorname{L}: H \rightarrow M$ uma bijeção, representa um `relacionamento` entre rapazes e raparigas que consiste numa lista de pares $(h,m)$, designada `Lista de Relacionamentos`.  
Como é uma bijeção, também podemos ter a relação inversa $\operatorname{W}: M \rightarrow H$.

### Bloqueio

Usando o exemplo do `Relacionamento` entre Rapazes e Raparigas, diz-se que o par $(h,m)$, $h \in M, m \in M$, é um `Bloqueio` na lista de relacionamentos, se não pertence à lista de relacionamentos, mas $h$ preferia estar com $m$ do que com $\operatorname{L}(h)$ e $m$ preferia estar com $h$ do que com $\operatorname{W}(m)$.

Uma Lista de Relacionamentos diz-se `Estável` se não existirem pares de bloqeuio em $\operatorname{L}$.

### Lista de Preferências

Usando mais uma vez o exemplo do `Relacionamento` entre Rapazes e Raparigas, cada Rapaz e cada Rapariga poderá ter uma `Lista de Preferências` onde apresenta os membros do conjunto oposto que prefere por ordem.

:::details[Exemplo]

Neste exemplo vamos trabalhar com o `Relacionamento` entre Rapazes e Raparigas, onde temos $4$ Raparigas e $4$ Rapazes.

A seguinte tabela é um exemplo de `Lista de Preferências`

$$
\begin{array}{|}
\text{Rapazes} & & & & & & & &\\
1&\quad &2 &> &4 &> &1 &> &3\\
2&\quad &3 &> &1 &> &4 &> &2\\
3&\quad &2 &> &3 &> &1 &> &4\\
4&\quad &4 &> &1 &> &3 &> &2\\
\hline
\text{Raparigas} & & & & & & & &\\
1&\quad &2 &> &1 &> &4 &> &3\\
2&\quad &4 &> &3 &> &1 &> &2\\
3&\quad &1 &> &4 &> &3 &> &2\\
4&\quad &2 &> &1 &> &4 &> &3\\
\end{array}
$$

**Exemplo de Lista de Relacionamentos Estável**:

- $\{(1,4),(2,1),(3,2),(4,3)\}$

**Exemplos de Listas de Relacionamentos Instáveis**:

- $\{(1,1),(2,3),(3,2),(4,4)\}$  
  Esta lista tem um `Bloqueio` $(1,4)$. Repare-se que o Rapaz $1$ prefere a Rapariga $4$ à Rapariga $1$ (o seu par na lista) **e** a Rapariga $4$ prefere o Rapaz $1$ ao Rapaz $4$ (o seu par na lista).

- $\{(1,1),(2,2),(3,4),(4,3)\}$  
  Esta lista tem $6$ `Bloqueios`: $(1,2),(1,4),(2,1),(2,4),(3,2),(4,4)$

:::

### Algoritmo da Estabilidade

Serve para verificar se uma `Lista de Relacionamentos` é estável ou instável.

O Algorimto é descrito pelo seguinte pseudo-código.

![Estabilidade Pseudo](./imgs/0021-pseudoEst.png)

## Algoritmo de Gale-Shapley

### Descrição Do Algoritmo

#### Informal

1. Cada Rapaz e Rapariga ou estão comprometidos ou livres
2. Cada Rapariga, assim que fica comprometida, continuará nesse estado durante o resto da execução do algoritmo. Poderá, eventualmente, trocar de par
3. Todo o Rapaz que pede em namoro mais do que uma vez, fica com namoradas cada vez menos desejáveis
4. As Raparigas ficam tanto mais favorecidas quanto maior for o número de trocas de namorado
5. Quando um Rapariga livre recebe uma proposta, aceita e fica comprometida
6. Quando uma Rapariga comprometida recebe nova proposta, compara o novo pretende com o namorado e escolhe ficar com o que lhe favorece mais
7. Cada Rapaz pede namora às Raparigas seguindo a sua ordem de preferência
8. Assim que um Rapaz é rejeitado, propõe-se imdiatamente à Rapariga seguinte na sua Lista de Preferências.

#### Pseudo-Código

![Gale-Shapley Pseudo](./imgs/0021-pseudoGS.png)

:::tip[NOTA]

Não importa qual a ordem das propostas dos Rapazes, o Algoritmo acabará sempre na mesma Lista

:::

---

### Correção Do Algoritmo de Gale-Shapley

Para toda a instância do problema do relacionamento estável, o algoritmo Gale-Shapley termina com uma lista de relacionamentos estáveis.

:::details[Demonstração]

1. Provar que cada Rapaz está associado a uma Rapariga

Como cada Rapariga aceita sempre uma proposta se estiver livre, se um Rapaz pedir namoro à última rapariga da sua `Lista de Preferências`, significa que as outras Raparigas têm par (namorado), a última só o rejeitará se também tiver namorado.  
Isso é impossível, pois só se confirmaria se o número de Rapazes fosse maior que o número de Raparigas, o que nunca se verifica.

Se um Rapaz chegar à última Rapariga ela aceita-o sempre.

2. Provar que o algoritmo termina.

Como nenhum rapaz se pode propor $2$ vezes à mesma Rapariga, o número máximo de propostas que poderá haver são $r^2$, onde $r = \#Rapazes = \#Raparigas$. Como é um número finito, o Algoritmo tem fim.

3. Provar que no final a Lista é Estável

Se o Rapaz acabou por não ficar relacionado com uma rapariga $m$, que preferia em relação à com quem ficou $\operatorname{L}(h)$, então é porque $m$ o rejeitou.  
Se $m$ o rejeitou foi porque tinha recebido uma proposta de um pretendente que preferia, não havendo assim `Bloqueio`.

Deste modo, será impossível encontrar `Bloqueios` na Lista final que resulta d eaplicar o Algoritmo.

QED
:::

### Exemplos da Emulação do Algoritmo

No teste só poderems usar $2$ Maneiras, ambas exemplificadas abaixo.

:::details[Maneira 1]

$$
\begin{array}{|}
\text{Rapazes} & & & & & & & &\\
1&\quad &3 &> &2 &> &1 &> &4\\
2&\quad &3 &> &2 &> &4 &> &1\\
3&\quad &3 &> &4 &> &1 &> &2\\
4&\quad &3 &> &2 &> &1 &> &4\\
\hline
\text{Raparigas} & & & & & & & &\\
1&\quad &1 &> &4 &> &3 &> &2\\
2&\quad &2 &> &3 &> &1 &> &4\\
3&\quad &4 &> &3 &> &1 &> &2\\
4&\quad &2 &> &3 &> &4 &> &1\\
\end{array}
$$

Resolução:

1. Rapaz $1$ propõe-se à Rapariga $3$; ela aceita
2. Rapaz $2$ propõe-se à Rapariga $3$; ela rejeita
3. Rapaz $3$ propõe-se à Rapariga $3$; ela aceita e rejeita o Rapaz $1$
4. Rapaz $4$ propõe-se à Rapariga $3$; ela aceita e rejeita o Rapaz $3$
5. Rapaz $1$ propõe-se à Rapariga $2$; ela aceita
6. Rapaz $2$ propõe-se à Rapariga $2$; ela aceita e rejeita o Rapaz $1$
7. Rapaz $1$ propõe-se à Rapariga $1$; ela aceita
8. Rapaz $3$ propõe-se à Rapariga $4$; ela aceita

A Lista de Relacionamentos obtida é $\{(1,1),(2,2),(3,4),(4,3)\}$ que é estável.
:::

:::details[Maneira 2]

$$
\begin{array}{|}
\text{Rapazes} & & & & & & & &\\
1&\quad &3 &> &2 &> &1 &> &4\\
2&\quad &3 &> &2 &> &4 &> &1\\
3&\quad &3 &> &4 &> &1 &> &2\\
4&\quad &3 &> &2 &> &1 &> &4\\
\hline
\text{Raparigas} & & & & & & & &\\
1&\quad &1 &> &4 &> &3 &> &2\\
2&\quad &2 &> &3 &> &1 &> &4\\
3&\quad &4 &> &3 &> &1 &> &2\\
4&\quad &2 &> &3 &> &4 &> &1\\
\end{array}
$$

Resolução:

$$
\begin{array}{c}
(1,3)&(2,)&(3,)&(4,)\\
(1,3)&(2,\cancel{3})&(3,)&(4,)\\
(1,\cancel{3})&(2,\cancel{3})&(3,3)&(4,)\\
(1,\cancel{3})&(2,\cancel{3})&(3,\cancel{3})&(4,3)\\
(1,2)&(2,\cancel{3})&(3,\cancel{3})&(4,3)\\
(1,\cancel{2})&(2,2)&(3,\cancel{3})&(4,3)\\
(1,1)&(2,2)&(3,\cancel{3})&(4,3)\\
(1,1)&(2,2)&(3,4)&(4,3)
\end{array}
$$

:::

### Consequências

#### Teorema 1

Todas as possíveis execuções do algoritmo de Gale-Shapley (tendo os rapazes como proponentes **\***) produzem o mesmo relacionamento estável, e, neste relacionamento estável, cada rapaz obtém a melhor das parceiras que pode ter em qualquer relacionamento estável.

**\*** são os Rapazes que se propõem às raparigas, como descrito inicialmente no Algoritmo. Se fossem as Raparigas as proponentes, os papeis invertiam-se.

:::details[Demonstração]

Sendo um `parceiro estável` de $h_0/m_0$, um $m_1/h_1$ par com $h_0/m_0$ numa dada Lista Estável.

Supondo que uma certa execução $E$ do [Algoritmo de Gale-Shapley](#algoritmo-de-gale-shapley) produz um Relacionamente estável $R_0$ que inclui o par $(h,m)$.  
Imaginemos que $R_0$ não é o Relacionamento estável que mais beneficia $h$, porque existe outro Relacionamento estável $R_1 \neq R_0$, onde $h$ está relacionado com $m'$, que prefere a $m$.  
Pelo Algoritmo, conclui-se que, numa dada iteração de $E$, $m'$ teve de rejeitar $h$ (Relembrar que os Rapazes vão se propondo às Raparigas segundo a sua preferência).  
Supondo que essa rejeição (de $m'$ face a $h$), foi a primeira vez em que uma rapariga rejeito um `parceiro estável`, pois $m'$ preferia outro Rapaz $h'$ a $h$.

Se nenhuma rapariga rejeitara um `parceiro estável` antes, então $h'$ não tem nenhuma parceira estável que prefira a $m'$.  
Então, como em $R_1$ temos o par $(h,m')$ e $h'$ está relacionado com uma Rapariga que não prefere, em relação a $m'$, é óbvio que o par $(m',h')$ é um bloqueio de $R_1$. Assim, este `Relacionamento` não é estável.

Conclui-se que, qualquer Relacionamento, onde um Rapaz $h$ fica com uma Rapariga $m'$ que prefere em relação ao seu par $m$ que resultou da Aplicação do [Algoritmo de Gale-Shapley](#algoritmo-de-gale-shapley), é **Instável**.

QED

:::

#### Teorema 2

No relacionamento estável optimal para os rapazes, cada rapariga obtém o pior parceiro que pode obter em qualquer relacionamento estável.

:::tip[NOTA]

`Relacionamento Estável Otimal` para Rapazes/Raparigas:  
Relacionamento Estável, onde os Rapazes/Raparigas obtêm o melhor parceiro possível.

:::

:::details[Demonstração]

Tentando provar por **absurdo**.

Vamos supor que o Teorema é Falso e que, sendo $R_0$ o relacionamento estável otimal para os Rapazes, que resulta do [Algoritmo de Gale-Shapley](#algoritmo-de-gale-shapley), existe outro relacionamento estável $R_1$, onde uma dada Rapariga $m$ fica com um rapaz $h_1$, que prefere **menos** em relação ao rapaz $h_0$ com que ficou em $R_0$.

Como $R_0$ é otimal para os Rapazes , em $R_1$ $h_0$ ficará com uma rapariga que prefere menos, em relação a $m$. Para além disso, $m$ também ficou com um Rapaz $h_1$ que prefere menos em relação ao $h_0$.  
Conclui-se que $(m,h_0)$ é um `Bloqueio` de $R_1$, logo $R_1$ não é estável.

QED

:::
