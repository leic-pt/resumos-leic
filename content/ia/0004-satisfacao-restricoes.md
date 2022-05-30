---
title: Problemas de Satisfação de Restrições
description: # TODO
path: /ia/satisfacao-restricoes
type: content
---

# Problemas de Satisfação de Restrições

```toc

```

Até agora, abordámos dois estilos de procura distintos: as procuras **cega** e **informada**.
Ambas as abordagens partilham uma base entre si: a ideia do estado ser algo atómico,
possuindo apenas as funções de avaliação e de sucessores, e podendo responder a um
teste objetivo, contudo sem uma _estrutura interna_ adicional. Ora, esta parece ser uma
falha relativamente relevante nas abordagens anteriores, já que um estado pode potencialmente
armazenar pormenores bastante importantes para a (re)solução do problema: se pegarmos
no problema das 8 rainhas, o estado em si pode até guardar as linhas e colunas das peças
colocadas no tabuleiro, por exemplo.

Nesta secção, vamos então aprofundar esta ideia de estados não atómicos, com conteúdo
no seu interior, um **conjunto de variáveis**: dizemos que chegámos a uma solução
para o problema proposto quando todas as variáveis estiverem associadas a valores que
satisfaçam as restrições impostas pelo mesmo. Dizemos que os problemas resolvidos desta
forma são [**Problemas de Satisfação de Restrições**](color:orange) (do inglês
[**_Constraint Satisfaction Problems_**](color:orange), CSP). Idealmente, algoritmos
de procura que assentem nesta ideia irão progressivamente eliminando ramos da nossa
árvore de procura, tornando-a assim mais eficiente.

## Definir CSPs

:::info[CSP]

Podemos definir um CSP como um conjunto de três componentes:

- um conjunto de variáveis: seja ele $X = \{X_1, X_2, \cdots, X_n\}$;
- um conjunto de domínios, onde um domínio corresponde ao conjunto de valores que podem ser
  associados a uma variável: seja ele $D = \{D_{x_1}, D_{x_2}, \cdots, D_{x_n}\}$;
- um conjunto de restrições, que especifica todas as combinações possíveis de valores
  que podemos ser associados às variáveis ao mesmo tempo numa solução correta:
  seja ele $C$.

Temos ainda que as restrições podem ser [**explícitas**](color:yellow), quando especificam diretamente
todas as combinações possíveis de valores que podem ser associados às variáveis, ou
[**implícitas**](color:green), quando o fazem através de expressões matemáticas ou equivalente.

Um exemplo relativamente simples é o de, num problema binário (ou seja, onde o
domínio é $\{0,1\}$ para duas variáveis $X_1$ e $X_2$), se quisermos que a solução
para o problema seja "estas duas variáveis têm de ter valores diferentes", podemos
fazê-lo de duas maneiras: uma, afirmando explicitamente que os pares de atribuições
possíveis são $\{0, 1\}$ e $\{1, 0\}$, e outra recorrendo a notação formal: $X_1 \neq X_2$.

Um estado será, portanto, definido como um conjunto de correspondências entre variáveis
e valores, correspondências essas que não deverão violar qualquer das restrições
impostas pelo problema. Estas correspondências, ou **atribuições**, podem ser **parciais**
ou **completas**, claro: uma atribuição diz-se completa caso todas as variáveis em $X$ tenham
um valor associado. Mais ainda, diz-se **consistente** caso todas as atribuições
respeitem respeitem o conjunto $C$. Dizemos que temos em mãos uma [**solução**](color:green) para o
CSP quando temos uma atribuição [**completa e consistente**](color:green): não existem variáveis sem
atribuições, estando todas elas atribuídas de acordo com o que o problema nos impõe.

:::

Tal como o exemplo Arad-Bucareste acompanhou as secções das procuras cega e informada,
o exemplo seguinte - colorir um mapa australiano com cores diferentes, sem que duas
regiões adjacentes partilhem uma cor - acompanhar-nos-á ao longo desta secção.

Considere-se o seguinte mapa da Austrália (que está obviamente realista e não está
assim só porque dava jeito ter um SVG):

![Mapa Austrália Exemplo](imgs/0004-australia-map.svg#dark=3)

Podemos considerar o problema de [**colorir o mapa australiano**](color:yellow) como um CSP:
aqui, temos que $X$ corresponderá ao conjunto de regiões do mapa, $D$ corresponderá
ao conjunto de cores disponíveis para as pintar, e $C$ corresponde ao conjunto de
restrições impostas. Teríamos, portanto, algo como:

$$
X = \{WA, NT, Q, SA, NSW, V, T\} \\
D = \{\{vermelho, verde, azul\}, \{vermelho, verde, azul\}, \cdots, \{vermelho, verde, azul\}\} \\
C = \{SA \neq WA, SA \neq NT, \cdots\}
$$

Pode ser útil procurar visualizar este tipo de problemas sob o ponto de vista de um
[**grafo de restrições**](color:purple). Se olharmos para o grafo abaixo, as restrições
que envolvem um dado par de nós, as variáveis, correspondem a arcos entre os mesmos.

![Grafo de Restrições - Austrália](imgs/0004-australia-constraint-graph.svg#dark=2)

Seguindo as restrições impostas, uma solução possível para o problema seria:

![Mapa Australiano Colorido (Solução)](imgs/0004-australia-map-colored.svg#dark=2)

:::tip[Porquê usar CSP's]

Bem, em primeiro lugar é importante realçar que muitos dos problemas que vamos querer
resolver são, por natureza, modelados à volta de restrições: o problema das $8$ rainhas,
por exemplo, baseia-se nas restrições "uma rainha não pode atacar a outra", não podendo,
portanto, partilhar linha, coluna ou diagonal.

Mais ainda, tal como referido na introdução desta secção, algoritmos baseados em CSPs
são, na prática, [**mais eficientes que algoritmos de procura tradicionais**](color:green), já que podem
ignorar rapidamente ramos da árvore de procura que não satisfazem as restrições requeridas.
Basta pensar no exemplo do mapa australiano, onde se a nossa primeira opção for colorir
_South Australia_ com verde, estamos a eliminar a possibilidade de $5$ outras regiões
serem pintadas com verde - passamos a contar ao todo com $2^5 = 32$ possibilidades restantes,
ao invés de $3^5 = 243$, um _pruning_ substancial feito à árvore!

Mais, se numa procura clássica a única análise qualitativa que fazíamos eram testes-objetivo,
sendo tudo o resto quantitativo, em CSPs tal não é o caso: podemos claramente inferir não
só que $n$ ramos podem ser descartados da procura, como o porquê de tal acontecer!

:::

Podemos ter restrições **unárias**, **binárias** e **de ordem superior**. As duas primeiras
são relativamente simples - restrições unárias relacionam uma variável com valores do
respetivo domínio que podem ou não tomar (como `South Australia != verde`), e
restrições binárias relacionam duas variáveis (aqui seria algo como `South Australia != Tasmania`).
As restrições de ordem superior, que envolvem 3 ou mais variáveis, podem não ser tão intuitivas;
mais, se as quisermos representar sob a forma de grafo, vamos precisar de um
[**hipergrafo de restrições**](color:orange), uma generalização do grafo de restrições tradicional
onde podemos, através de um nó auxiliar, ligar mais que dois vértices.

Pensemos, por exemplo, no Sudoku: todas as variáveis de uma linha/coluna/diagonal vão
ter de tomar valores diferentes. Assim sendo, podemos representar essa restrição de
ordem superior (ordem $9$ para o sudoku clássico) da seguinte forma:

![Hipergrafo de Restrições - Sudoku](imgs/0004-constraint-hypergraph-sudoku.svg#dark=2)

A restrição utilizada acima é a `allDiff`, uma das mais comuns quando abordamos
hipergrafos de restrições - corresponderia a algo como $X_i \neq X_j, \forall_{i, j}$.

Podemos ainda ter [**restrições de preferências**](color:purple), que diferem das três
anteriores por não serem absolutas - todas as anteriores eram **invioláveis**, e qualquer
solução teria de as respeitar; restrições de preferências ajudam a modelar o problema
em volta de um conjunto de coisas que _gostávamos que acontecessem_ (e damos um peso a cada
coisa, conforme sejamos mais ou menos firmes quanto a que tal aconteça ou não), mas
cuja obrigatoriedade não está _set in stone_.

Podemos pensar, por exemplo, no problema da organização de horários dos professores
de Inteligência Artificial: temos, claro, restrições invioláveis, como o facto de
um professor não poder duas aulas presenciais ao mesmo tempo. Existem, contudo,
conjuntos de restrições que idealmente se verificariam, mas caso tal não seja possível
a solução não deixa de ser aceitável. Temos, claro, o facto de professores idealmente
não terem horários em que num dia terminam as aulas às 20h e no dia seguinte têm
logo uma aula às 8h - pode ter de acontecer, mas idealmente não. Cada professor poderá
ainda preferir aulas em certos dias da semana, ou em certos horários (manhã/tarde), e todas
essas preferências poderão ser introduzidas num conjunto à parte, o **conjunto de restrições
de preferências do problema**, onde cada uma destas preferências seria devidamente pesada
e resolvida como um **problema de otimização de restrições**.

## Inferência

Os algoritmos abordados para as procuras cega e informada limitavam-se a andar pela
árvore de procura, à procura da "melhor solução" possível para o problema em mãos.
No caso de algoritmos baseados em CSPs, para além de podermos fazer uma procura clássica,
temos ainda a noção de [**restrições**](color:yellow); mais importante ainda, temos a
noção de [**propagação de restrições**](color:green), uma forma de _fazer **inferência**_
quanto a uma dada situação, atualizando progressivamente os caminhos que podemos tomar.
Temos como exemplo mais direto desta propagação o caso do mapa australiano, onde à medida
que íamos colorindo o mapa íamos ficando progressivamente com cada vez menos opções
que satisfizessem as restrições impostas, tendo em conta o que já foi feito. As restrições
podem ser-nos úteis logo no pré-processamento inicial do problema, podendo inclusive
fazer com que não tenha de haver procura: num Sudoku _fácil_, por exemplo, existe sempre
um movimento "obrigatório" (leia-se "aquele número **tem** de estar ali") à medida que vamos
avançando no jogo, pelo que o pré-processamento leva a uma propagação sucessiva de restrições
que levam a uma solução direta, sem recorrer a procura/tentativas sem garantias.

A propagação tem por objetivo, assim, utilizar as restrições a seu favor por forma
a [**reduzir o tamanho dos domínios das variáveis**](color:orange) (idealmente a $1$, nunca a $0$),
garantindo assim que "aquela variável tem de estar associada àquele valor para uma solução consistente".
Vai, aqui, voltar a ser relevante aquela visualização do problema como um grafo mencionada
mais acima.

### Consistência de Nó

Dizemos que uma variável é [**nó-consistente**](color:green) caso todos os valores
no seu domínio satisfaçam as suas restrições unárias. Pensando no exemplo do mapa
australiano, caso pintemos _South Australia_ de verde, _Western Australia_ vai deixar
de poder ser pintada com essa cor, pelo que para esta ser nó-consistente vamos ter de
"atualizar" o seu domínio, removendo verde. [Mais, dizemos que um **grafo** é nó-consistente
caso todas as suas variáveis também o sejam](color:yellow).

### Consistência de Arcos

Dizemos que uma variável é [**arco-consistente**](color:green) caso todos os valores
no seu domínio satisfaçam as suas restrições binárias. Dizemos que uma variável
$X$ é **consistente em arco** para $Y$ caso para todas os valores no domínio de $X$
exista um valor no domínio de $Y$ que satisfaça a restrição binária que as liga.
O exemplo clássico é a restrição $Y = X^2$, onde com domínios tais que:

$$
D_X = \{0, 1, 2, 3\}\\
D_Y = \{0, 1, 4, 9\}
$$

vamos ter $X$ consistente em arco para $Y$: para $0$, $1$, $2$ e $3$ existem, respetivamente,
$0$, $1$, $4$ e $9$ como valores no domínio de $Y$ que satisfazem a restrição binária para
o respetivo valor de $X$.

[Temos que um **grafo** é arco-consistente caso qualquer variável seja arco-consistente
com todas as outras variáveis](color:yellow).

O algoritmo mais conhecido para tratar a consistência de arcos é o
[$\text{AC-3}$](https://en.wikipedia.org/wiki/AC-3_algorithm). É utilizado mais frequentemente
que outros algoritmos dentro do mesmo âmbito, já que os seus antecessores são muito menos
eficientes e os seus sucessores têm implementações bastante mais complexas.

O seu funcionamento é relativamente simples: mantemos um _set_ de arcos (que inicialmente
tem todos os arcos do CSP em questão), e vamos aleatoriamente removendo um arco do _set_
(seja o arco $(X, Y)$); fazemos com que $X$ seja consistente em arco com $Y$, e daí
vamos ter três cenários possíveis:

- Caso $D_X$ **não tenha sido alterado**, $X$ já era consistente em arco com $Y$, pelo
  que o arco é só removido e não acontece nada;
- Caso $D_X$ **tenha visto o seu tamanho reduzido** (com $|D_X \neq 0$), adicionamos todos
  os outros arcos $(X, X_j)$ de volta ao _set_ - temos restrições adicionais, pelo que
  podemos agora encontrar outras maneiras de reduzir o tamanho do domínio de $X$;
- Caso $D_X$ tenha visto o seu domínio reduzido ao **conjunto vazio**, podemos afirmar que
  não existe solução consistente para o problema, pelo que o algoritmo retorna _failure_.

O algoritmo termina ou quando verifica que o domínio de uma das variáveis passa a ser
o conjunto vazio, retornando _failure_, ou quando o _set_ de arcos fica vazio, retornando
_true_. Note-se, contudo, que este algoritmo não resolve por si só o problema: pode ajudar
(bastante até) dado que reduz o tamanho dos domínios das variáveis o mais que consegue,
mas por vezes termina sem que todos os domínios fiquem com tamanho $1$: nesse caso,
vamos precisar de métodos adicionais para resolver os problemas em mãos.

:::details[Exemplo $\text{AC-3}$: Sudoku]

Tenha-se o seguinte tabuleiro de Sudoku:

![Sudoku - Tabuleiro Inicial (AC-3)](imgs/0004-sudoku-grid-ac3.png#dark=3)

Se quisermos modelar "preencher o tabuleiro" como um CSP, vamos ter:

$$
X = \{A_1, A_2, \cdots, I_8, I_9\} \\
D = \{D_{A_1}, D_{A_2}, \cdots, D_{I_8}, D_{I_9}\}, D_{A_1} = D_{A_2} = \cdots = \{1, \cdots, 9\} \\
C = \text{allDiff}(A_1, \cdots, A_9), \text{allDiff}(A_1, \cdots, I_1), \cdots
$$

Procuremos ver como 2 passos de $\text{AC-3}$ permitem reduzir o tamanho dos domínios
de 2 variáveis.

- Escolhendo a variável $E_6$ (que corresponde ao arco $(E, 6)$), vamos ter:

  - Quanto à coluna, $E_6$ não vai poder tomar os valores $5, 6, 2, 8, 9, 3$;
  - Quanto à linha, $E_6$ não vai poder tomar os valores $7, 8$;
  - Quanto à "caixa", $E_6$ não vai poder tomar os valores $1, 2, 7, 8$;

  Temos, portanto, que para $E$ ser consistente em arco com $6$, o domínio de $E_6$
  deve ser reduzido para $D_{E_6} = \{4\}$. Chegámos, portanto, a um "movimento
  obrigatório" aqui! O que faríamos de seguida era adicionar todas as variáveis
  $E_j, j \neq 6$ ao _set_ de arcos mantidos pelo algoritmo, para ver se podíamos
  reduzir mais domínios.

- Escolhendo a variável $I_6$ (que corresponde ao arco $(I, 6)$), vamos ter:

  - Quanto à coluna, $I_6$ não vai poder tomar os valores $5, 6, 2, \smartcolor{red}{4}, 8, 9, 3 \smartcolor{yellow}{^*}$;
  - Quanto à linha, $I_6$ não vai poder tomar os valores $5, 1, 3$;
  - Quanto à "caixa", $I_6$ não vai poder tomar os valores $1, 2, 3, 6, 9$;

  [\*](color:yellow)Note-se que devido a termos descoberto que $E_6$ apenas pode tomar
  o valor $4$, $4$ é adicionado às restrições de todas as variáveis da sexta coluna.

  Temos, portanto, que para $I$ ser consistente em arco com $6$, o domínio de $I_6$
  deve ser reduzido para $D_{I_6} = \{7\}$. Chegámos a mais um movimento "obrigatório"!

Podíamos, realizando os vários passos a que $\text{AC-3}$ nos levaria, resolver de
uma assentada o problema, sem recorrer a procuras adicionais. O resultado final seria o seguinte:

![Sudoku - Tabuleiro Resolvido (AC-3)](imgs/0004-sudoku-grid-solved-ac3.png#dark=3)

Como referido anteriormente, há problemas em que o algoritmo $\text{AC-3}$ não resolve
sozinho o problema - nem todos os tabuleiros Sudoku conseguem ser completados seguindo
unicamente este algoritmo, por exemplo - pelo que para resolver problemas mais complexos
precisamos de misturar procura com inferência, procurando propagar restrições através
de "tentativas" (i.e "não sei se $6$ é o valor certo aqui, mas é bastante possível
por isso vou tentar"), ou até mesmo usando outros algoritmos de consistência.

:::

Considerando $c$ como o total de restrições binárias do problema e $d$ o tamanho máximo do
domínio de uma variável, podemos afirmar que a consistência de um arco pode ser analisada
em tempo $d^2$ - na pior das hipóteses, verificamos cada par de variáveis $1$ a $1$. Mais,
como um arco pode ser inserido no _set_ de arcos no máximo $d$ vezes (já que o
domínio só tem $d$ valores que podem ser removidos, e no pior caso são removidos $1$ a $1$),
havendo $c$ restrições binárias, vamos ter que

$$
\text{TIME(AC-3)} \in O(c \cdot d \cdot d^2) = O(c \cdot d^3).
$$

### Consistência de Caminhos

Como verificámos acima, há problemas para os quais a consistência de arcos é imensamente
útil. Temos, contrastando, problemas em que esta noção acaba por ser praticamente
irrelevante: basta pensar no exemplo do mapa australiano, onde os domínios têm $2$
em vez de $3$ cores. É claro que é impossível resolver o problema com apenas $2$
cores: se pensarmos no tridente $\text{SA} - \text{WA} - \text{NT}$, vamos ter que ter necessariamente
$3$ cores diferentes (visto que são todos adjacentes entre si) para obter uma solução
consistente para o problema. Ora, mas a consistência de arcos não nos permite aferir
nada quanto a isso: se formos a ver, as variáveis acabam por ser consistentes em arco
umas com as outras, não retornando _failure_ (como idealmente aconteceria); mais, também
não ocorre redução de domínio, pelo que efetivamente terminamos a execução do algoritmo
tal como começámos. Precisamos, portanto, de uma noção extra de consistência, que nos permita
tratar este tipo de problemas: vamos recorrer à [**consistência de caminhos**](color:orange).

Se ao falar na consistência em nó tocámos em restrições unárias, e na consistência
em arco abordámos as restrições unárias, parece fazer todo o sentido que aqui abordemos
restrições de ordem superior. Bem, sim e não: de facto, vamos tocar em restrições que
envolvem mais que $2$ variáveis ($3$, neste caso), mas não sob o contexto de restrições
ternárias diretamente.

:::tip[Consistência de Caminhos]

Dizemos que um par de variáveis $(X_i, X_j)$ é consistente em caminho para uma terceira
variável, seja ela $X_k$, caso qualquer atribuição possível que seja consistente
com as restrições que envolvem $(X_i, X_j)$ seja também consistente
com as restrições que englobam $(X_i, X_k)$ e $(X_k, X_j)$. Falamos em [**caminho**](color:green)
porque, se pensarmos bem, é de um caminho que se trata: estamos a criar um caminho
entre $X_i$ e $X_j$ que passa por $X_k$, e a dizer que "tudo o que está entre elas
tem de bater certo".

:::

Bem, já que acima referimos que $\text{AC-3}$ não era adequado para o exemplo
do mapa australiano com $2$ cores, faz sentido que verifiquemos se a consistência
de caminhos é adequada para o mesmo. Considerem-se novamente as variáveis $\text{WA, SA}$ e $\text{NT}$,
sendo que vamos querer verificar se $(\text{WA, SA})$ é consistente em caminho para $\text{NT}$.
Tal como referido acima, vamos verificar se **todas as combinações de atribuições
consistentes em arco também o são em caminho**:

$$
\{\{\text{WA = vermelho, SA = azul}\}, \{\text{WA = azul, SA = vermelho}\}\}
$$

Ora, peguemos na primeira atribuição: para $(\text{WA, SA})$ ser consistente em caminho
com $\text{NT}$, esta atribuição terá de respeitar todas as restrições em $(\text{WA, NT})$ e $(\text{NT, SA})$.
Ora, para $\text{WA = vermelho}$ ser consistente em arco com $\text{NT}$, teremos de ter $\text{NT = azul}$;
[**contudo**](color:yellow), da mesma maneira, para $\text{NT = azul}$ ser consistente em arco com $\text{WA}$,
teremos de ter $\text{WA = vermelho}$: [**não é o caso, nesta atribuição**](color:red), já
que $\text{WA = azul}$, por premissa. Assim sendo, esta atribuição é removida do conjunto
de atribuições consistentes em caminho possíveis; mais, o mesmo verifica-se para a outra atribuição,
pelo que são ambas removidas, e assim sendo podemos [**garantir**](color:4green) que não existe solução
consistente para este problema!

Para a consistência de caminhos, temos um algoritmo bastante semelhante a $\text{AC-3}$,
o $\text{PC-2}$.

### Consistência K

Podemos generalizar as noções de consistência supra-abordadas através da noção de
[**$k$-consistência**](color:orange) - um problema diz-se $k$-consistente se para
todo o conjunto de $k-1$ variáveis (seja esse conjunto $K$), para qualquer atribuição consistente
para as suas variáveis podemos sempre atribuir um valor que não torne o problema inconsistente
a uma nova variável $k$. A consistência em nó é, portanto, a $1$-consistência, a consistência
em arco é a $2$-consistência, etc.

Temos ainda a noção de [**CSP fortemente $k$-consistente**](color:purple): todo o
CSP que seja $k$-consistente, e $(k-1)$-consistente, ..., $1$-consistente diz-se
**fortemente $k$-consistente**. É bastante importante, já que se tivermos um
CSP com $n$ variáveis e este for $n$-consistente, então podemos facilmente
atingir a solução: basta escolher um valor consistente para $X_1$, qualquer que seja $X_1$;
como o CSP é $2$-consistente, podemos escolher um valor consistente para $X_2$; como é
$3$-consistente, também o vamos poder fazer para $X_3$, e assim sucessivamente.

Existe, contudo, um _catch_: tornar um CSP $k$-consistente é um processo moroso, com
complexidade exponencial (tanto temporal como espacial). Assim sendo, acabamos por usar
a abordagem acima indicada apenas quando conseguimos verificar empiricamente a $k$-consistência
do grafo, já que caso contrário "acaba por nem valer a pena".

### Restrições Globais

Restrições globais, ou de ordem superior, não são mais do que formas de exprimir relações entre um
número arbitrário de variáveis ([**não confundir com precisar de envolver todas as variáveis**](color:red)).
Não são muito diferentes do que vimos até agora, acabando por conseguir capturar muitas
vezes pormenores sobre a natureza do problema - `allDiff` é uma restrição global, por exemplo,
que captura a essência do Sudoku de forma extremamente concisa: _todas estas variáveis têm
de tomar valores diferentes_. Mais importante, através de restrições globais podemos
detetar inconsistências claras facilmente: se tivermos um conjunto de $m$ variáveis envolvidas
numa restrição global e $n$ valores que podem tomar, então será impossível atingir uma solução
consistente (tal como no caso de colorir o mapa australiano com $2$ cores, abordado mais acima).

Existe ainda um algoritmo que nos permite resolver restrições `allDiff` de forma relativamente
simples: passa por ir removendo progressivamente da restrição todas as variáveis com
domínio de tamanho unitário, apagando o valor presente no domínio de todos os outros domínios
que ainda existam. Vamos fazendo estas remoções sucessivamente, parando quando:

- deixar de haver variáveis por remover, retornando _sucesso_ (e conseguindo até devolver
  a solução consistente);
- houver uma variável que fica com domínio vazio - chegámos aqui a uma inconsistência,
  e o CSP não tem solução, retornando _failure_.

É efetivamente isto que fazemos "a olho" quando resolvemos Sudoku's fáceis: vamos vendo
"esta posição só pode tomar este valor", e colocar esse valor nessa posição surte _efeito dominó_
sobre os valores que outras posições podem tomar.

Existem também outras restrições globais clássicas, como a `atmost` ou _restrição de recursos_,
que tal como o nome indica restringe os valores das variáveis a "as variáveis têm de ter atribuições
que, somadas, não ultrapassem este valor".

## Procura em CSPs

Nem sempre conseguimos resolver CSPs utilizando exclusivamente inferência - basta pensar no
problema das $8$ rainhas, onde inicialmente acabamos por ter que **"atirar ao calhas"** e tentar
proceder a partir daí (fazendo uma procura, portanto). Temos, claro, diferentes maneiras de
fazer as procuras, cada uma delas com as respetivas vantagens e desvantagens - vamos, nesta secção,
procurar entender maneiras boas e más de aliar procuras às nossas estratégias de resolução
de problemas, tentando simultaneamente perceber porque é que funcionam melhor em certos
contextos em comparação com outras.

Procuras mais básicas (pensemos, por exemplo, numa $DFS$ limitada) têm o defeito de [**ignorar
o contexto do problema**](color:red), acabando por não se aperceber de padrões repetitivos na árvore de
procura, levando a travessias redundantes: pensando no caso de um CSP com
$n$ variáveis, onde o respetivo domínio pode ter até $d$ valores, vamos ter uma árvore
de procura com ramificação no primeiro nível igual a $nd$, definitivamente longe do ideal. Mais, cada nível
da árvore vai apenas removendo uma variável do conjunto de variáveis por atribuir, pelo que
o nível seguinte terá ramificação de ordem $(n - 1)d$, e assim sucessivamente. Vamos, portanto,
poder afirmar que uma árvore de procura _naive_ que procure resolver um CSP poderá ter
$n!d^n$ folhas! Ora, a [**redundância**](color:red) entra precisamente aqui: porque é que
havemos de precisar de $n!d^n$ folhas na nossa árvore, quando só existem $d^n$ atribuições completas
possíveis[\*](color:yellow)? Esta procura não parece, portanto, aperceber-se da possibilidade de variáveis
atribuídos por ordens diferentes poderem ir dar a um conjunto de atribuições final igual - basta
ver o exemplo abaixo, onde três caminhos da mesma árvore vão dar ao mesmo, sendo a única diferença
a ordem da atribuição das variáveis:

![Exemplo - Procura Básica is bad, and you should feel bad](imgs/0004-basic-search-example.svg#dark=4)

[\*](color:yellow) Basta pensar que se tivermos $5$ caixinhas que podem ser preenchidas
com $0$ ou $1$, vamos ter $2^5$ atribuições completas diferentes (e posteriormente
generalizar para $n$ caixinhas com $d$ valores possíveis).

Parece que voltámos ao secundário, quando aprendemos a diferença entre permutações e combinações:
CSPs são comutativos, e como tal a ordem das atribuições é irrelevante, tal como nas combinações.
Idealmente devemos conseguir remover esta redundância das nossas árvores de procura, efetivamente
fazendo um _pruning_ bastante significativo das mesmas - removemo-la passando a considerar
apenas uma variável por nível da árvore, conseguindo assim eliminar os tais ramos desnecessários
da nossa árvore, tendo no máximo $d^n$ folhas. Adaptando o exemplo acima, ficaríamos com algo como:

![Exemplo - Procura Básica sem redundâncias](imgs/0004-basic-search-example-without-redundancies.svg#dark=4)

De realçar que aqui todas as soluções estão a [**profundidade $n$**](color:orange), já que
cada nível trata de todas as atribuições possíveis para $1$ variável!

### Procura com Retrocesso (_Backtracking Search_)

Mais uma abordagem de procura bastante simples, funciona como uma DFS que vai avançando
pela árvore atribuindo valores à variável correspondente ao nível em que está, verificando
sempre se a solução é consistente - se não for, parte para um dos seus irmãos (e caso
não haja irmãos restantes, retrocede para o nível anterior). Dizemos que [**não existe solução
completa consistente para o problema**](color:yellow) caso tenhamos de retroceder de volta à raiz.

![Procura com Retrocesso](imgs/0004-backtracking-search-example.svg#dark=2)

Esta procura é, contudo, [**cega**](color:red), tal como as que vimos inicialmente no contexto de
Inteligência Artificial: fará, portanto, sentido introduzir [**heurísticas**](color:green)
às nossas procuras, por forma a que sejam (idealmente) mais eficientes. No contexto de CSPs,
contudo, e tentando manter o padrão de "abstração de implementação" quando ao domínio que
tentamos tentado manter nestas procuras, vamos querer utilizar também heurísticas
independentes do problema em mãos: heurísticas que sabemos que estão mais que testadas,
e que devemos (em princípio) poder utilizar à confiança. Podemos dividir a "abordagem
das heurísticas" consoante o respetivo foco: servem para escolher a [**próxima variável**](color:purple)
a ser atribuída, ou o [**próximo valor**](color:purple) a atribuir?
Ambas as abordagens têm o seu mérito, pelo que vamos de seguida tentar perceber as vantagens
de cada uma (e os métodos mais comuns de o fazer).

### Escolher a Próxima Variável

Numa árvore de procura como as supra-mencionadas, não existe uma "ordem pré-determinada"
para cada nível corresponder a uma dada variável específica - tanto podemos só respeitar
a ordem pelas quais estão definidas em $X$, como podemos associar cada nível à variável
que preferirmos - esta escolha é bastante poderosa, podendo tornar as nossas procuras
substancialmente mais eficientes.
Encontram-se abaixo dois exemplos da mesma procura, que seguem ordenações das variáveis
por nível diferentes, por forma a ilustrar as diferenças que pequenas alterações podem surtir.
Note-se que, para o mesmo problema (problema este relativamente simples, com poucas variáveis
e restrições), conseguimos um ganho de $50\%$ em desempenho: conseguimos cortar metade dos testes de
consistência realizados!

![Escolher a ordem das variáveis é relevante](imgs/0004-choosing-variables-matters.svg#dark=2)

Uma das heurísticas clássicas para fazer esta escolha é, a cada instante, [**escolher a variável
que apresenta atualmente o menor número de possibilidades**](color:yellow), e delegar todo
o nível à "expansão" dessa variável. Esta é a [**Heurística dos Valores Remanescentes Mínimos**](color:purple),
$\text{MRV}$, que tem por base a lógica de que "quanto menos valores possíveis tiver para tratar, mais rápido
começo a falhar", acabando assim por fazer _pruning_ da árvore mais cedo (e evitando
pelo meio processamento desnecessário) - se um passo mais acima tiver falhado, em
princípio fico a saber mais cedo se estou a ir por um caminho errado ou não.
Esta heurística não ajuda, contudo, em todas as nossas procuras:
em casos onde as restrições iniciais não permitam ter variáveis mais restringidas que
outras, podemos utilizar uma heurística adicional, a [**Heurística do Maior Grau**](color:green),
por forma a **procurar reduzir o fator de ramificação da árvore no futuro**.
Tal como tínhamos notado mais acima ao falar do exemplo do mapa australiano, [**colorir
_South Australia_**](color:yellow) leva a que um grande número de variáveis fiquem de repente
com o respetivo domínio mais pequeno, já que tem um grande número de adjacências. Esta
heurística pega nessa lógica e formaliza-a: a cada nível, escolhemos a variável envolvida
no maior número de restrições (num grafo, a variável com **maior grau**), já que atribuir
valores a essa variável deverá criar um "efeito dominó" sobre uma área maior do problema.

Note-se, claro, que podemos usar estas heurísticas em conjunto no mesmo problema:
por norma, aplicamos $\text{MRV}$ primeiro, utilizando a de maior grau como forma de desempate.

### Escolher o Próximo Valor

Escolhida a variável, podemos ainda escolher a ordem do [**valor que pretendemos atribuir
primeiro**](color:orange) - da mesma maneira que há escolhas de variáveis que nos permitem
fazer um _pruning_ antecipado à árvore, também deverão haver heurísticas para escolhas
de valores que permitam procuras mais eficientes.

Ora, se o $\text{MRV}$ pretendia que se "falhasse" tão cedo quanto possível, por forma a nunca
ter de avançar muito pela árvore sem ser o teoricamente necessário, aqui vamos querer
precisamente o oposto: vamos sempre escolher os valores que nos levem a **falhar o menos
possível** - isto porque não só queremos detetar falhas tão cedo quanto possível, também
vamos querer sempre entrar no ramo mais promissor. Esta dicotomia é explicada
da seguinte forma por [Max Welling](https://staff.fnwi.uva.nl/m.welling/):

> In all stages of the searching for one solution, we want to **enter the most promising branch, but we also want to detect inevitable failure sooner**.
>
> $\text{MRV}$: **the variable that is most likely to cause failure in a branch is assigned first**. The variable must be assigned at some point, so if it is doomed to fail, we’d better found out soon.
>
> $\text{LCV}$[\*](color:yellow): **tries to avoid failure by assigning values that leave maximal flexibility for the remaining variables**. We want our search to succeed as soon as possible, so given some ordering, we want to find the branch that is more likely to succeed.

[Nesta _thread_](https://cs.stackexchange.com/questions/98075/aren-t-most-constraining-variable-and-least-constraining-value-the-exact-opposit)
podem encontrar uma resposta mais detalhada sobre o porquê de utilizar estas heurísticas
(escrita melhor do que eu a conseguiria escrever).

[\*](color:yellow) $\text{LCV}$, de _Least Constraining Value_, corresponde à heurística
que, entre os valores passíveis de atribuição a uma variável, escolhe aquele que tem menos
restrições impostas (eliminando, portanto, menos valores dos domínios de outras variáveis).

Adiciona-se ainda o seguinte trecho do livro que acompanha a cadeira, que também pode
ser útil (página $217$, secção $6.3.1$):

> Why should variable selection be [**fail-first**](color:green), but value selection be [**fail-last**](color:red)?
> It turns out that, for a wide variety of problems, a variable ordering that chooses a variable
> with the minimum number of remaining values helps minimize the number of nodes in the search tree
> by pruning larger parts of the tree earlier. For value ordering, the trick is that we only need
> one solution; therefore it makes sense to look for the most likely values first. If we wanted to
> enumerate all solutions rather than just ﬁnd one, then value ordering would be irrelevant.

## Procura e Inferência

Até agora, vimos como utilizar a inferência a nosso favor no pré-processamento de um CSP.
De seguida, vimos como boas procuras (com boas heurísticas) podem fazer um _pruning_
antecipado e cuidado da árvore de procura, levando a que encontremos soluções completas
e consistentes. Chegou, agora, a altura de combinar ambas estas noções, por forma
a chegar a soluções verdadeiramente ótimas para estes problemas: a inferência já
consegue ser de grande utilidade para pré-processar o nosso problema, mas consegue ser
ainda mais útil logo após um passo numa procura: se conseguirmos, descendo apenas um nível,
determinar que tudo o que está para baixo vai levar a soluções inconsistentes, é da maior
relevância usar essas estratégias a nosso favor. Uma das formas de inferência clássicas
utilizadas neste contexto é [**_forward checking_**](color:orange).

:::info[Forward Checking]

À medida que vamos atribuindo valores a variáveis, fazemos com que todas as outras sejam
consistentes em arco com ela própria. Se uma das variáveis ficar com domínio vazio, ou experimentamos
um valor diferente para a variável em mãos, ou fazemos _backtrack_. Temos, claro, que
se fizermos _backtrack_ até à raiz, deduzimos que não existe solução completa e consistente
para o problema. Adiciona-se ainda que, como estamos apenas a verificar sucessivamente a
consistência de arco de várias variáveis, caso esse tipo de pré-processamento (via $\text{AC-3}$,
por exemplo) já tenha sido feito, não haverá utilidade em fazê-lo enquanto procuramos.

Abaixo podemos ver o exemplo de um cenário em que
[_forward checking_](<https://en.wikipedia.org/wiki/Look-ahead_(backtracking)>) leva a que encontremos
inconsistências relativamente rápido:

:::details[Exemplo]

![Exemplo Forward Checking](imgs/0004-forward-checking-example.svg#dark=2)

:::

Geralmente, combinamos _forward checking_ com o $\text{MRV}$ - vamos sucessivamente
restringindo os domínios das variáveis e escolhendo as variáveis mais restritas!

Existe, contudo, um problema com este tipo de abordagem: não consegue detetar inconsistências
para lá do "passo diretamente a seguir". Basta pensar, por exemplo, que quando acima
pintámos _Western Australia_ de vermelho e _Queensland_ de verde, podíamos empiricamente
notar que tínhamos uma inconsistência em mãos, já que _South Australia_ e _Northern Territory_
são adjacentes e os respetivos domínios são constituídos exclusivamente pela cor azul. É aqui
que entra o algoritmo $\text{MAC}$, de _Maintaining Arc Consistency_.

:::info[Maintaining Arc Consistency]

:::

---

Adicionamos que esta secção corresponde ao sexto capítulo do livro que acompanha a cadeira
(_Constraint Satisfaction Problems_).
