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
"atualizar" o seu domínio, removendo verde. Mais, dizemos que um **grafo** é nó-consistente
caso todas as suas variáveis também o sejam.

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

Temos que um grafo é arco-consistente caso qualquer variável seja arco-consistente
com todas as outras variáveis.

### Consistência de Caminhos

### Consistência K

---

Adicionamos que esta secção corresponde ao sexto capítulo do livro que acompanha a cadeira
(_Constraint Satisfaction Problems_).
