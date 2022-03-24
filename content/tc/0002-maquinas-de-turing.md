---
title: Maquinas de Turing
description: 'Maquinas de Turing'
path: /tc/maquinas-de-turing
type: content
---

# Maquinas de Turing

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

// TODO

:::
