---
title: Máquinas de Turing
description: 'Máquinas de Turing'
path: /tc/maquinas-de-turing
type: content
---

# Máquinas de Turing

```toc

```

Formalmente, uma [**máquina de Turing**](color:red) é um tuplo $(\Gamma, \Sigma, Q, q_{in}, q_{ac}, q_{rj}, \delta)$ em que:

- $\Gamma$ é um **alfabeto de trabalho**, que inclui um símbolo $\square$, a que damos o nome de símbolo vazio;
- $\Sigma$ é um **alfabeto de entrada/saída**, $\Sigma \subset \Gamma \backslash \{ \square \}$;
- $Q$ é um conjunto de estados de controlo;
- $q_{in} \in Q$ é um estado inicial;
- $q_{ac}, q_{rj} \notin Q$ são dois estados denominados **estado de aceitação** e **estado de rejeição**, respetivamente. Ambos estes estados dizem-se **estados de terminação**. Denominamos $\hat{Q} = Q \cup \{ q_{ac}, q_{rj} \}$;
- $\delta : Q \times \Gamma \to \hat{Q} \times \Gamma \times \{ L, R \}$ é uma **função de transição**.

Uma [máquina de Turing](color:red) deve ser entendida da seguinte forma:  
Temos uma fita com posições que "guardam" símbolos num alfabeto $\Sigma$ - o alfabeto de entrada/saída.
Esta fita é infinita para a direita.  
À medida que vamos fazer a nossa computação, podemos subsituir os símbolos na fita com símbolos num alfabeto $\Gamma$ - o nosso alfabeto de trabalho.
O símbolo $\square$ representa uma posição na fita vazia.
Note-se que $\Sigma \subset \Gamma$, ou seja, o alfabeto de trabalho pode ter símbolos que não estão no alfabeto de entrada de saída. Então, podemos usar símbolos à nossa vontade para representar posições que nos sejam convenientes.  
Temos um conjunto de estados de controlo $Q$. Tal como nos AFD's e AFND's, este será o nosso mecanismo principal de **memória**. Isto vai ser mais claro à frente.
O estado $q_{in}$ é, como nos autómatos, o estado em $Q$ em que começamos as transições.  
Os estados de aceitação e rejeitação indicam se a nossa computação foi sucedida ou não.
Isto é, se criarmos uma máquina de Turing para resolver um dado problema, o nosso problema tem resposta afirmativa se chegar a um estado aceitação, e negativa se chegar a um estado de rejeição.
Em ambos os casos, a computação termina nesse momento.
Para uma computação terminar, não necessita de ler todos os símbolos que estavam inicialmente na fita - basta apenas que a computação leve a um estado terminação.  
A função $\delta$ atua sobre a fita, e sobre o conjunto de estados:

- na fita:
  - lemos um símbolo, que podemos substituir por outro símbolo em $\Gamma$;
  - andamos para a esquerda ($L$) ou direita ($R$).
- no conjunto de estados:
  - transitamos tal como faziamos nos autómatos.

Este mecanismo é um modelo computacional que nos permite fazer vários tipos de comutação, nomeadamente:

- reconhecer uma linguagem - aceitar as suas palavras;
- decidir uma linguagem - aceitar as suas palavras e rejeitar as restantes;
- calcular uma função - aceitar inputs num certo domínio e calcular o respetivo output para esses inputs.

Para perceber exatamente como uma máquina de Turing funciona, vamos ver um exemplo.

:::details[Exemplo 1 - Reconhecimento de Linguagem]

Começamos por um exemplo muito simples.
Na verdade nem é necessária uma máquina de Turing para reconhecer esta linguagem, pelo que este exemplo é puramente ilustrativo.

Considere-se a linguagem formada pelas palavras sobre o alfabeto $\{ 0, 1 \}$ que são alternantes, isto é, em que cada símbolo (sem ser o primeiro) é diferente do que o antecede.  
A seguinte máquina de Turing reconhece a linguagem:

![Turing Machine](./imgs/0002/turing-machine-recognize.png#dark=1)

A intuição por detrás da máquina é simples:  
A partir do estado inicial, lendo o input da esquerda para a direita, a máquina transita para $q_1$ quando lê 0, memorizando dessa forma que o próximo símbolo a ler terá de ser 1, e para $q_2$ quando lê um 1, registando que o próximo símbolo a ler deve ser 0.
A máquina vai então alternando entre os estados $q_1$ e $q_2$ até processar todo o input, o que acontece quando é lido um espaço.
Neste momento, a computação vai para o estado de aceitação, terminando.  
Caso dois símbolos consecutivos sejam iguais, a computação fica indefinida, já que não está representada nenhum transição a partir de $q_1$ quando o símbolo lido é 0, nem a partir de $q_2$ quando o símbolo lido é 1.

:::

:::details[Exemplo 2 - Decisão de Linguagem]

No exemplo 1 usamos, para além dos estados $Q = \{ q_{in}, q_1, q_2 \}$ usamos apenas o estado de aceitação, pois estávamos apenas interessados em _reconhecer_ a linguagem.
Para _decidir_ a linguagem, basta então adicionar um estado de rejeição e meter todas as transições não definidas do grafo anterior a apontar para lá.

![Turing Machine Decide](./imgs/0002/turing-machine-decide.png#dark=1)

:::

:::details[Exemplo 3 - Cálculo de uma Função]

Vamos continuar com a mesma linguagem.
Queremos agora uma máquina de Turing que, em vez de reconhecer/decidir essa linguagem, tenha output 1 se o input for reconhecido pela linguagem e 0 caso contrário.

No exemplo anterior vimos a máquina de Turing para decidir a linguagem. A única diferença aqui é que queremos:

- quando uma palavra é aceite, imprimir 1 e terminar a computação no estado de aceitação;
- quando uma palavra não é aceite, imprimir 0 e terminar a computação no estado de aceitação na mesma (a nossa função completou com sucesso, pois reconheceu que a palavra não é aceite).

Para isso, substituímos os estados $q_{ac}$ e $q_{rj}$ por estados $q_3$ e $q_4$ respetivamente, que indicam que já sabemos o resultado da nossa computação.
Neste ponto, para terminar a computação com sucesso basta então apenas imprimir o output adequado e ir para o estado de aceitação, como é feito a baixo.

![Turing Machine Function](./imgs/0002/turing-machine-function.png#dark=1)

Observe-se que o output deve ser imprimido só depois do input ser todo lido, pelo que no estado $q_4$ temos de ler o resto dos 0's e 1's.

:::

Vamos agora formalizar aquilo que vimos nos exemplos a cima.

Em cada momento, uma máquina de Turing está numa certa [**configuração**](color:purple). A [configuração](color:purple) é determinada por:

- os símbolos na fita;
- a posição da cabeça de leitura/escrita;
- o estado em que a máquina se encontra.
  Esta observação pode ser formalizada da seguinte forma:  
  Para uma máquina de Turing $M$, definimos a sua [configuração](color:purple) como o triblo $(u, q, v) \in \Gamma^* \times \hat{Q} \times \Gamma^*$ em que $u$ é a palavra à esquerda da cabeça de leitura/escrita, $q$ é o estado corrente e $v$ a palavra que se inicia na cabeça de leitura/escrita e se prolonga para a direita até uma sequência infinita de células vazias.  
  Uma configuração diz-se de aceitação (respetivamente, de rejeição) se o seu estado corrente for de aceitação (resp., de rejeição).  
  Observamos ainda que, para um input $\omega$, a configuração inicial de uma máquina de Turing é sempre $(\epsilon, q_{in}, \omega)$.

Definimos agora a função de [transição](color:pink) de configurações $\Delta : \Gamma^* \times \hat{Q} \times \Gamma^* \to \Gamma^* \times \hat{Q} \times \Gamma^*$ de uma máquina de Turing $M = (\Sigma, \Gamma, Q, q_{in}, q_{ac}, q_{rj}, \delta)$ tal que:

$$
\begin{matrix}
\Delta(u, q, a.v) = (u.b, s, v) & \text{se } \delta(q, a) = (s, b, R) \\
\Delta(u, q, \epsilon) = (u.b, s, \epsilon) & \text{se } \delta(q, \square) = (s, b, R) \\
\Delta(u.c, q, a.v) = (u, s, cb.v) & \text{se } \delta(q, a) = (s, b, L) \\
\Delta(u.c, q, \epsilon) = (u, s, cb) & \text{se } \delta(q, \square) = (s, b, L)
\end{matrix}
$$

para quaisquer $a,b,c \in \Gamma$, $u, v \in \Gamma^*$, $q \in Q$ e $s \in \hat{Q}$.

Com esta definição, podemos então entender uma [**computação**](color:green) como uma sequência (finita ou infinita) de configurações.
Nomeadamente, a configuração de uma máquina de Turing $M$ dado um input $\omega \in \Sigma^*$ corresponde à sequência de configurações obtida a partir da configuração inicial $(\epsilon, q_{in}, \omega)$ usando transições de configuração $\Delta$.  
Dizemos que a computação **termina** se sequência de configurações for finita, o que acontece se e só se for atingindo um estado de terminação (neste caso, a computação é bem sucedida) ou atingir uma configuração a partir da qual não está definida nenhuma transição (caso em que se diz que a computação aborta).
Se a computação não terminar, diz-se **divergente**.

Uma palavra $\omega \in \Sigma^*$ diz-se **aceite** por $M$ se a computação que lhe é associada termina num estado de aceitação, e diz-se **rejeitada** se terminar no estado de rejeição.
Usamos $L_{ac}(M), L_{rj}(M) \subset \Sigma^*$, respetivamente, para denotar as linguagens aceite e rejeitada pela máquina de Turing $M$.  
Caso $\omega$ seja aceite por $M$ tal que $(u, q_{ac}, v)$ é a configuração atingida pela computação, se $v = x.y$ com $x \in \Sigma^*$ e $y \in \{ \square \}^*$, dizemos que $x$ é o **output** da computação e denotamos $\phi_M(\omega) = x$. A função $\phi_M : \Sigma^* \to \Sigma^*$ demonia-se de **função calculada** por $M$.

Dizemos que duas máquinas de Turing são **equivalentes** se reconhecerem e decidirem a mesma linguagem, bem como calcularem a mesma função.

:::details[Exemplo 4]

Para oferecer um exemplo menos simples, vamos desenhar uma máquina de Turing que reconheça a linguagem sobre o alfabeto $\Sigma = \{ 0, 1 \}$ cujas palavras são palíndromos.

Num primeiro momento, é sempre importante verificar se a **palavra vazia** deve ser aceite - neste caso deve. Quando estamos na presença de um caso destes, _normalmente_ temos de ter especial cuidado a construir a nossa máquina.

Pensemos: um palíndromo é uma palavra cuja **palavra invertida é igual a si própria**. Parece então fazer sentido ir verificando as **pontas** da palavra, verificando se coincidem. Essa verificação terá de ser feita consecutivamente, "podando as pontas" da palavra até _dar a volta_ (verificando então que a palavra é um palíndromo) ou até as pontas não serem iguais (obtendo então que a palavra não é um palíndromo).

Este método de verificar e podar consecutivamente as pontas tem um defeito: por definição, não tem em conta **palíndromos de comprimento ímpar** - palavras onde eventualmente temos as pontas a "coincidir". Ao construir a máquina teremos, portanto, de ter esse caso em consideração (e já veremos abaixo que é uma modificação bastante simples à máquina).

![Máquina de Turing - Palíndromo](./imgs/0002/palyndrome.svg#dark=2)

Temos, então, a máquina de Turing que resolve o problema proposto acima.
Podemos notar as tais **transições auxiliares** para palavras de comprimento ímpar referidas acima, partindo de $q_1$ e $q_3$ para $q_{ac}$. Em $q_0$ e $q_2$, as iterações pela palavra até encontrar a próxima ponta, e em $B_1$ e $B_2$ o _backtracking_ até à primeira ponta, marcada a última.

Acabamos, então, esta secção a exemplificar o processamento de um par de palavras segundo esta máquina:

Consideremos, como primeiro exemplo, a palavra [**$10011$**](color:orange). Partindo do estado inicial, o primeiro $1$ é lido, sendo substituído por $x$ na fita.
Vamos, de seguida, **iterar pela fita** até encontrar a outra ponta da palavra - encontrada, verificamos que também é $1$, pelo que _até agora_ a palavra continua a poder ser um palíndromo. Marcamos esta ponta com $x$ e rebobinamos até à última ponta, e vamos agora passar a considerar a palavra [**$001$**](color:yellow). Marcamos $0$ com $x$ e prosseguimos até à próxima ponta. Descobrimos, aqui, que a outra ponta tem símbolo $1$, pelo que a palavra definitivamente não é um palíndromo. Sem transição associada, a palavra é rejeitada pela máquina, e o processamento termina.

De seguida, tenhamos a palavra [**$10101$**](color:green), palavra esta de **comprimento ímpar**. Vamos, mais uma vez, procurar sucessivamente marcar e podar as pontas da palavra. As 2 primeiras iterações correm da mesma forma que foi observada no primeiro exemplo: podamos as pontas $1$ e $0$, restando a palavra [**$1$**](color:yellow). A vida pregou-nos uma partida, e a palavra tem comprimento ímpar. Contudo, fomos inteligentes, e já mais atrás tínhamos notado e criado transições auxiliares para esta situação! Procurando seguir os estados associados a este processamento, partimos de $q_{in}$, seguindo para $q_2$ (estamos a ler $1$) e movendo o cursor para a direita.Lemos a palavra vazia, pelo que mudamos o cursor para a esquerda e trocamos de estado para $q_3$. Aqui, **tendo a tal transição auxiliar**, podemos aceitar a palavra (já que, movendo-nos para a esquerda, apenas encontrámos mais um $x$), sendo a palavra assim aceite.

:::

## Variantes

Há na literatura bastantes variações sobre a definição de máquina de Turing.
Analisamos de seguida algumas, que nos serão úteis.
Apesar de permitirem maior flexibilidade aparente, na verdade os modelos que analisaremos são essencialmente equivalentes ao modelo original, do ponto de vista da teoria da computabilidade.

### Máquinas com transições-$S$

Uma [**máquina com transições-$S$**](color:green) é uma máquina cuja função de transição tem como contradomínio $\hat{Q} \times \Gamma \times \{L,R,S\}$, em vez de $\hat{Q} \times \Gamma \times \{L,R\}$.
Este último elemento $S$ corresponde a um movimento em que a cabeça de leitura/escrita não muda de sítio.

As noções introduzidas na secção anterior são facilmente estendíveis a estas máquinas, sendo relevante apenas realçar a extensão da função de transição de configurações, que agora, além do apresentado a cima, satisfaz ainda:

$$
\Delta(u, q, a.v) = (u, s, b.v) \text{se } \delta(q,a) = (s,b,S)
$$

:::tip[]

Toda a máquina de Turing com transições-$S$ é equivalente a uma máquina de Turing tradicional.

:::

:::details[Prova]

Converter uma máquina com transições-$S$ numa máquina de Turing é razoavelmente simples.
Basta pegar em cada movimento $S$ e desdobrá-lo em dois movimentos, como apresentado em baixo:

![S-movement Conversion](./imgs/0002/s-movement.png#dark=1)

em que $q_a$ denota um novo estado da máquina, e $\gamma$ deve ser expandido para representar todas as letras do alfabeto $\Gamma$.  
É fácil de verificar que os dois segmentos a cima levam à mesma transição de configurações.

:::

### Máquinas bidirecionais

Uma [**máquina bidirecional**](color:blue) é como uma máquina de Turing, onde se assume que a fita é infinita em ambas as direções.  
Mais uma vez, a única diferença assinalável é na função de transição de configurações, que é agora definida de forma que:

$$
\begin{matrix}
\Delta(\epsilon, q, a.v) = (\epsilon, s, \square b.v) & \text{se } \delta(q, a) = (s, b, L) \\
\Delta(\epsilon, q, \epsilon) = (\epsilon, s, \square v) & \text{se } \delta(q, \square) = (s, b, L)
\end{matrix}
$$

Devem-se entender as transições a cima como "se não houver nada à esquerda e andarmos para a esquerda, vamos para uma célula vazia".  
Por contraste, as máquinas de Turing introduzidas inicialmente dizem-se **unidirecionais**.

:::tip[]

Toda a máquina de Turing bidireccional é equivalente a uma máquina de Turing unidirecional.

:::

:::details[Prova]

Note-se que mover uma palavra para a direita numa fita unidirecional é algo relativamente fácil.  
Para uma dada computação numa máquina bidirecional, delineamos a computação respetiva numa máquina de Turing unidirecional da seguinte forma:
Sempre que a computação da fita bidirecional determinar que é preciso um espaço à esquerda da palavra, movemos toda a palavra para a direita.
Desta forma, criamos um espaço na primeira posição onde podemos colocar o símbolo determinado pela computação da fita bidirecional.
Uma forma de saber quando precisamos de um espaço à esquerda é, antes da computação, movermos o input um espaço para a esquerda.
Assim, sempre que lermos um espaço em branco depois de fazermos um movimento para a esquerda, quer dizer que precisamos de mais um espaço à esquerda.

:::

### Máquina multifita

Definimos uma [**máquina de Turing multifita**](color:yellow) como uma máquina de Turing cuja função de transição é (para algum $k \in \mathbb{N}$) do tipo

$$
\delta : Q \times \Gamma^k \to \hat{Q} \times \Gamma^k \times \{ L, S, R \}^k
$$

Para uma máquina de Turing multifita, convenciona-se que o input é sempre colocado na primeira fita, e o output é sempre devolvido na última fita.

:::tip[]

Toda a máquina de Turing multifita é equivalente a uma máquina de Turing
com apenas uma fita.

:::

:::details[Prova]

Intuitivamente, se conseguirmos dividir a fita da máquina de Turing em $k$ secções "independentes", conseguimos arranjar uma equivalência entre a máquina de Turing tradicional.
Precisamos no entanto de:

- um símbolo para separar as diferentes secções da fita (que correspondem às várias fitas da máquina multifita) - vamos usar o símbolo $\#$;
- símbolos para demarcar o início e fim da fita - vamos usar $I$ e $F$;
- símbolos idênticos aos do nosso alfabeto de trabalho, mas que assinalem que a cabeça de escrita/leitura da respetiva fita está nessa posição - vamos chamar a este conjunto $\Gamma^\blacksquare$.
  Vamos então usar o alfabeto $\Gamma \cup \Gamma^\blacksquare \cup \{ \#, I, F \}$.  
  Vamos então tentar construir uma máquina de Turing $T$ tradicional que compute o mesmo que uma máquina multifita $M$.  
  A máquina $T$ começa por criar uma fita da seguinte forma:
- coloca $I$ na primeira posição;
- coloca na segunda posição a correspondente em $\Gamma^\blacksquare$ ao primeiro símbolo no input de $M$;
- coloca na fita a $\#$ seguido de $\square^\blacksquare$ uma vez por cada fita de $M$ ($k-1$ vezes);
- acaba por colocar o símbolo de terminação $F$.

![Conversão multifita para Turing](./imgs/0002/conversion.png#dark=1)

Com a fita de $T$ inicializada, podemos agora fazer as mudanças indicadas por $M$.
Isto é feito da seguinte forma: da esquerda para a direita, reconhecemos onde está a cabeça de escrita/leitura das correspondentes a cada uma das $k$ fitas, e fazemos a alteração necessária.
Note-se que poderá ser necessário mover símbolos para a direita para disponibilizar novos espaços para alguma fita.  
É importante realçar que, no final, de forma a que $T$ devolva o mesmo output que $M$, temos de converter o símbolo de $\Gamma^\blacksquare$ do espaço correspondente à última fita no correspondente símbolo de $\Gamma$, bem como remover o $F$ no final da fita.

:::

### Máquinas não-deterministas

Uma [**máquina de Turing não-determinista**](color:red) é como uma máquia de Turing tal que a função de transição é do tipo

$$
\delta: Q \times \Gamma \to \wp ( \hat{Q} \times \Gamma \times \{L,S,R\})
$$

Tal como com os autómatos, dizemos que uma máquina de Turing não-determinista aceita uma palavra se **existir uma** computação que aceite a palavra, dizendo-se que rejeita a palavra se todas as computações forem finitas e rejeitarem a palavra.
Note-se que uma máquina de Turing pode ter computações que entram em ciclos e portanto são infinitas.

:::tip[]

Toda a máquina de Turing não-determinista é equivalente a uma máquina de Turing determinista.

:::

:::details[Prova]

Vamos, mais uma vez, definir para uma máquina não-determinística $N$, definir uma máquina de Turing $D$ que lhe seja equivalente.  
A ideia será que $D$ terá 3 fitas:

- a primeira fita manterá o input do problema, sem o alterar;
- a segunda fita será usada para escolher o caminho a percorrer no grafo das possíveis transições de configurações;
- a terceira fita será usada para mexer no input para cada sequência na fita 2.
  A máquina $D$ começa por inicializar as fitas:
- na segunda fita coloca \$ para indicar o início do caminho, abre $d$ (depende do input) espaços vazios, e coloca $\#$ no final para indicar o fim do caminho.
- copia-se para a terceira fita o input.
  Então, executamos na fita 3 de acordo com o caminho 2 até que:
- cheguemos a um estado de aceitação: neste caso vamos para o estado de aceitação e terminamos a computação;
- cheguemos a um estado de rejeição: neste caso passamos ao próximo caminho na fita 2.
  Se nenhum dos caminhos na fita 2 aceitar a palavra, então a palavra deve ser rejeitada.

:::

## Máquina Universal

Podemos verificar que o alfabeto $\{ 0, 1 \}$ é suficiente para representar qualquer problema.  
Para uma máquina de Turing $M = (\Sigma, \Gamma, Q, q_{in}, q_{ac}, q_{rj}, \delta)$, podemos por exemplo considerar a seguinte representação, a que se dá o nome de **representação canónica**:

$$
11\cdots111 \, . \, 0 \, . \, 11\cdots1 \, . \, 0 \, . \, <\text{trans}~1> <\text{trans}~2> \cdots <\text{trans}~n>
$$

A representação pode ser descrita da seguinte forma:

- uma string de $n$ 1's: tantos quanto o número de estados na máquina de Turing, isto é, tantos quanto os estados em $\hat{Q} = Q \cup \{ q_{ac}, q_{rj} \}$: os $n$ estados são identificados da seguinte forma:

  $$
  \begin{aligned}
  q_1 = q_{in} &= 100 \cdots 00 \\
  q_2 &= 010 \cdots 00 \\
  q_3 &= 001 \cdots 00 \\
  & \vdots \\
  q_{n-1} = q_{ac} &= 000 \cdots 10 \\
  q_n = q_{rj} &= 000 \cdots 01
  \end{aligned}
  $$

- um 0 de separação;
- uma string de $k$ 1's: tantos quantos símbolos no alfabeto auxiliar $\Gamma = \Gamma \backslash \{ \square \} \cup \{ \square \} = k+1$: os $k+1$ símbolos são da seguinte forma:
  $$
  \begin{aligned}
  a_0 &= 000 \cdots 00 \\
  a_2 &= 100 \cdots 00 \\
  a_3 &= 010 \cdots 00 \\
  &\vdots \\
  a_{k-1} &= 000 \cdots 10 \\
  a_k &= 000 \cdots 01
  \end{aligned}
  $$
- um 0 de separação;
- uma sequência de strings que representam as transições dadas pela função $\delta$: cada string que representa uma transição $\delta(q_i, a_j) = (q_r, a_s, m)$ é uma palavra $trans_i = q_i a_j q_r a_s m \in \{ 0, 1 \}^*$ de comprimento $2n+2k+2$.

Esta representação permite-nos confundir uma máquina de Turing com uma palavra binária, quando apropriado.

:::details[Exemplo]

Consideremos por exemplo a seguinte máquina de Turing, que decide a linguagem das palavras sobre $\{0,1\}$ que começam com dois $0$'s consecutivos:

![Representação Canónica de uma Máquina de Turing - Máquina](./imgs/0002/chanonic-representation.png#dark=3)

A sua representação canónica é:

$$
\overbrace{1111}^{\text{4 estados}}~
0~
\overbrace{11}^{\text{2 símbolos}}~
0~
\overbrace{
  \underbrace{1000}_{q_1 = q_{\op{in}}}~
  \underbrace{10}_{a_1 = 0}~
  \underbrace{0100}_{q_2}~
  \underbrace{10}_{a_1 = 0}~
  \underbrace{1}_{R}
}^{\text{transição}}~
\overbrace{
  \underbrace{0100}_{q_2}~
  \underbrace{10}_{a_1 = 0}~
  \underbrace{0010}_{q_3=q_{\op{ac}}}~
  \underbrace{10}_{a_1 = 0}~
  \underbrace{1}_{R}
}^{\text{transição}}


$$

A máquina tem estados ($q_0 = q_{in}$, $q_1$, $q_2 = q_{ac}$ e $q_3 = q_{rj}$).  
O alfabeto de trabalho da máquina tem $2+1$ símbolos: $0$, $1$ e $\square$.  
A máquina tem duas transições, representadas a cima.

Nota: a representação acima só usa um bit para o movimento.
No entanto, se quisermos que a nossa máquina de Turing tenha movimentos $S$, precisamos de 2 bits para codificar essa informação, como referido a cima.

:::

Dado um alfabeto $\Sigma$, denotamos por $\mathcal{M}^\Sigma$ o conjunto das representações canónicas de máquinas de Turing com alfabeto de entrada/saída $\Sigma$.
Denotamos por $rep(\omega )$ a representação canónica de uma palavra $\omega \in \Sigma^*$.  
Por exemplo, para $\Gamma \backslash \{ \square \} = \{ a_1, a_2 \cdots, a_k \}$ temos que $rep(\square) = 000\cdots 00$, $rep(a_1) = 100\cdots 00$, $rep(a_2) = 010\cdots 00$ e por aí a diante.

:::tip[Proposição]

Existe uma máquina de Turing $U$, a que damos o nome de [**máquina Universal**](color:purple), que para qualquer $M \in \mathcal{M}^\Sigma$ e $\omega \in \Sigma^*$, tal que, para um símbolo \$ $ \notin \Sigma$

- U aceita (respetivamente rejeita) $M \text{\textdollar} rep(\omega )$ se e só se $M$ aceita (resp. rejeita) $\omega$;
- $\phi_U(M \text{\textdollar} rep(\omega ) ) = rep(\phi_M(\omega ))$.

:::

:::details[Prova]

Seja $U$ uma máquina de Turing com 6 fitas.

A máquina, ao receber um input $x$, começa por verificar se a palavra $x$ é da forma $M \text{\textdollar} rep(\omega)$ para alguma máquina de Turing $M \in \mathcal{M}^\Sigma$ e $\omega \in \Sigma^*$, rejeitando se este não for o caso.

Passada esta verificação, a máquina passa para a fase inicial:

- copia a sequência de $1$'s correspondente ao número de estados de $M$ para a fita 2;
- copia a sequência de $1$'s correspondente ao número de símbolos de $M$ para a fita 3;
- copia as transições de $M$ para a fita 4;
- coloca o estado inicial de $M$ na fita 5;
- copia $rep(\omega)$ para a fita 6;
- coloca as cabeças de leitura/escrita de cada fita no início destas palavras.

![Máquina Universal](./imgs/0002/universal-machine.png#dark=3)

Após a fase inicial, a máquina entra na fase de simulação.
Nesta fase, $U$ faz os seguintes passos repetidamente até $M$ abortar/terminar.

- lê o símbolo onde está posicionado a cabeça de leitura/escrita da fita 6;
- lê o estado atual de $M$ na fita 5;
- percorre a fita 3 à procura da transição de $M$ para este símbolo e estado. Se não encontrar transição, $U$ aborta. Se encontrar, $U$ altera o estado de $M$ na fita 5, o símbolo na fita 6 e a posiçao da cabeça de leitura/escrita conforme indicado na transição encontrada;
- Se o passo anterior levar a um estado de terminação de $M$, $U$ termina em acordância com $M$.

:::
