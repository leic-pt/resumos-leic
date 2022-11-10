---
title: Conexionistas
description: >-
  Perceptron
  Gradient Descent
  Multi-Layer Perceptron
path: /apre/connectionists
type: content
---

# Conexionistas

```toc

```

Responsáveis pela origem do _deep learning_, os conexionistas defendem uma
aprendizagem conseguida pela simulação do funcionamento do cérebro humano.
Assim, existe uma representação computacional do cérebro, mais concretamente
dos neurónios e das ligações entre eles. A aprendizagem dá-se no processo de
mudança gradual na força das ligações entre os neurónios.

Um neurónio recebe o estímulo através das suas dendrites, processando os sinais
e transmitindo os resultados a outros neurónios através do amónio. Contudo, o
sinal só é transmitido se os estímulos recebidos ultrapassarem um determinado
valor mínimo.

<!-- TODO remove background -->

![Neurónio](./assets/0010-neuron.png#dark=3)

## Perceptron

Cada neurónio é representado como uma função de $D$ variáveis, com o nome de
**entradas**. O resultado é designado por **saída**. De modo a emular o
funcionamento do neurónio, que dispara ou não dispara, é calculada uma **função
de ativação** aplicada à _net_, que corresponde a uma soma ponderada das
entradas. O objetivo do percetrão é, então, classificar uma entrada como
pertencente a uma de duas classes: $C_1 = 1$ ou $C_2 = -1$.

$$
\text{net} = \sum_{j = 0}^{d}{w_j \cdot x_j} \\
\hat{z} = \text{sign}(\text{net}) = \begin{cases}
    -1 & \text{se net } \geq 0\\
    1  & \text{se net } < 0
\end{cases}
$$

### Processo de Treino

O processo de treino corresponde, então, ao ajuste gradual dos pesos $w_i$, de
modo à saída corresponder à classe do registo representado pelas $D$ entradas,
minimizando uma função de erro. Na verdade, os parâmetros dos pesos
correspondem a um hiperplano em $D$ dimensões. Este hiperplano separa as duas
classes dos dados, que são representadas como pontos em $D$ dimensões,
correspondentes aos registos dos dados.

A atualização dos pesos é feita de acordo com a regra seguinte, em que $0 <
\eta \leq 1$ corresponde à _learning rate_, que determina o tamanho da variação
efetuada aos pesos.

$$
w^{new} = w^{old} + \Delta w \\
\Delta w = \eta (z - \hat{z}) \cdot x \\
$$

Note-se que $(z - \hat{z})$ representa o erro, $\delta_k = z_k - \hat{z}_k$ que
pode tomar valores 2, -2 ou 0.

$$
\delta_k = \begin{cases}
    2   & \text{se } z_k = 1 \text{ e } \hat{z}_k = -1 \\
    -2  & \text{se } z_k = -1 \text{ e } \hat{z}_k = 1 \\
    0   & \text{se } z_k = \hat{z}_k \\
\end{cases}
$$

### Algoritmo

O algoritmo de treino do percetrão, abaixo descrito, converge para uma
classificação correta se o conjunto de treino for linearmente separável e
$\eta$ for suficientemente pequeno. É de notar que um valor demasiado pequeno
de $\eta$ faz com que o algoritmo não tanto em tenha em conta a contribuição de
observações seguintes. Por outro lado, uma valor de $\eta$ demasiado grande
pode desvalorizar as observações anteriormente consideradas. É necessário
equilibrar estes dois conflitos.

1. Inicializar os pesos com valores arbitrários.
2. Escolher um registo $x_k$.
3. Calcular o valor de net.
4. Calcular o valor do output = $f$(net), em que $f$ é a função de ativação.
5. Calcular $\Delta w$ e atualizar os pesos.
6. Repetir a partir de 2. até não ser realizada nenhuma atualização aos pesos.

### Limitações

É de notar que este modelo apenas consegue representar conjuntos que sejam
separáveis por uma linha, denominados conjuntos linearmente separáveis. Por
exemplo, este é incapaz de aprender a operação de ou exclusivo (_XOR_), pois
não há uma linha no plano que separe as classes correspondentes aos valores
lógicos V e F.

<!-- TODO change to SVG -->

![Perceptron de Operações Lógicas](./assets/0010-logical-operations-perceptron.png#dark=3)

### Funções de Ativação

Existem várias funções de ativação. As mais relevantes encontram-se listadas a
seguir.

- _Sign Function_
  $$
  f(x) = \begin{cases}
      1 & \text{se } x \geq 0 \\
      0 & \text{se } x < 0
  \end{cases}
  $$
- _Sigmoid Function_
  $$
  f(x) = \frac{1}{1 + e^{-ax}}
  $$
- _Hyperbolic Tangent_
  $$
  f(x) = \frac{1 - e^{-2x}}{1 + e^{-2x}}
  $$
- _Softmax_
  $$
  f(x_i) = \frac{e^{x_i}}{\sum\limits_{j=1}^{N} e^{x_j}}
  $$

### Cross-Entropy

A função sigmóide, para o valor de $a = 1$, converte a sua entrada numa
probabilidade, sendo o seu contradomínio $[0, 1]$. Assim, podemos converter o
valor de _net_ numa probabilidade. Pois na tarefa de classificação apenas
existem duas classes, podemos realizar a seguinte interpretação:

$$
P(c_1 \mid x) = \sigma\left(\sum_{j=0}^{N} w_j \cdot x_j\right) = \sigma(w^T \cdot x) \quad \text{ e } \quad P(c_2 \mid x) = 1 - P(c_1 \mid x)
$$

Assim, os neurónios disparam com uma probabilidade $P(c_1 \mid x_i)$ e não
disparam com uma probabilidade $1 - P(c_1 \mid x_i)$. Logo, o neurónio segue
uma distribuição de Bernoulli.

$$
P(z_i \mid w, x_i) \sim \text{Ber}(P(c_1 \mid x_i))
$$

Assumindo independência no conjunto de dados, podemos estimar os pesos do
modelo tal que o _likelihood_ seja maximizada. Assim, chegamos à expressão da
função de erro da _cross-entropy_.

$$
E[w] = -\log(P(z \mid w)) = -\sum_{i=1}^{N} (z_i \log \hat{z}_i + (1 - z) \log(1 - \hat{z}_i))
$$

## Gradient Descent

Este é um método numérico utilizado para determinar o mínimo da funções que não
podem ser determinados algebricamente. O algoritmo começa por receber uma
função a minimizar, $E[w]$ e escolhe um vetor de pesos inicial, $w^{initial}$
e, a cada iteração, soma este vetor a outro com sentido $- \nabla E[w]$.

Assim, cada coordenada do vetor vê-se incrementada de acordo com a seguinte
regra.

$$
w_j^{new} = w_j^{old} + \Delta w_j \quad \text{ onde } \Delta w_j = -\eta \cdot \dfrac{\partial E}{\partial w_j}
$$

O processo continua até que o algoritmo convirja para um solução ($\eta$ tem de
ser pequeno o suficiente), pois o erro definido por $E[w]$ contém apenas um
mínimo global. Para um valor de $\eta$ muito grande, poderíamos sobrestimar o
passo e passar para lá deste mínimo global.

### Vertentes de Gradient Descent

Enquanto que o método de **gradient descent** atualiza os pesos depois de
considerar todas as observações do conjunto de treino, calculando o erro
acumulado, o método do **stochastic gradient descent** atualiza os pesos a cada
observação do conjunto de treino.

## Multi-Layer Perceptron

### Motivação

De modo a conseguir que o percetrão consiga modelar a função XOR, podemos
adicionar ao percetrão várias camadas, ditas intermédias ou escondidas (pois
não conseguimos ver qual a sua saída), de modo a emular comportamentos mais
complexos. A composição de percetrões são organizadas em camadas, em que as
saídas de uma camada influenciam as entradas da camada seguinte. Daí este
modelo ser conhecido como _feed forwards network_.

Contudo, múltiplas camadas de unidades lineares não deixam de poder apenas
representar funções lineares. Para representar funções não lineares,
necessitamos de funções de ativação não lineares. Assim, um percetrão multi
camada com camadas escondidas consegue aproximar qualquer região contínua com
um erro arbitrariamente pequeno. A camada de saída deste modelo pode ser
treinada como se tratasse de um percetrão de uma só camada.

O percetrão simples apenas conseguia realizar classificação binária. Com várias
camadas é agora possível realizar tarefas de classificação (com mais de duas
classes) e regressão.

O objetivo passa por estimar um matrizes de pesos, $w$, de modo a minimizar uma
função de erro $E[w]$.

<!-- TODO change to SVG -->

![Perceptron Multi Camada](./assets/0010-multi-layer-perceptron.png#dark=3)

### Notação

A primeira e última camada são a camada de entrada e a camada de saída,
respetivamente. A camada de entrada recebe o índice 1. As entradas da primeira
camada correspondem aos valores $x_1$ a $x_n$, sendo $n$ o número de entradas.
Existe também um termo de _bias_ correspondente a $x_0 = 1$. Na camada de
saída, temos os valores das $k$ saídas, $\hat{z}_1$ até $\hat{z}_k$.

Entre cada duas camadas adjacentes, existem ligações entre todos as unidades.
Os valores destas ligações correspondem aos pesos. Define-se $w_{ab}^{[n]}$
como a ligação entre as unidades $a$, da camada $n-1$ e $b$, cada camada $n$.
Os pesos da que ligam as unidades da camada $n-1$ à camada $n$ são
representados por uma matriz, $w^{[n]}$, com dimensões $b \times a$ onde $a$
corresponde ao número de unidades da camada $n-1$ e $b$ corresponde ao número
de unidades da camada $n$.

De maneira semelhante, define-se $a_{k}^{[n]}$ como o k-ésimo elemento do vetor
de output, $a^{[n]}$, da camada $n$.

Os valores de _bias_ são representados separadamente, por razões práticas, em
vetores $b^{[n]}$, onde $n$ corresponde ao número da camada.

<!-- TODO change to SVG -->

![Notação Multi Camada](./assets/0010-multi-layer-notation.png#dark=3)

### Forward Propagation

Este corresponde ao processo de, dada uma entrada, calcular a saída da última
camada. Dada uma observação $x$, a primeira camada escondida recebe uma
entrada dada por

$$
net^{[1]} = w^{[1]} \cdot x + b^{[1]}
$$

e calcula uma saída dada por

$$
a^{[1]} = f(net^{[1]})
$$

onde $f$ representa a função de ativação escolhida.

De uma forma geral, este processo pode ser escrito na seguinte fórmula geral,
em que consideramos os valores de entrada, a observação $x$ como a saída da
camada 0, $a^{[0]}$.

$$
net^{[n]} = w^{[n]} \cdot a^{[n-1]} + b^{[n]}
$$

$$
a^{[n]} = f(net^{[n]}) = f(w^{[n]} \cdot a^{[n-1]} + b^{[n]})
$$

O _output_ da camada de saída, $a^{[n]}$, num percetrão de $n$ camadas,
corresponde à classificação final.

### Backward Propagation

Este processo corresponde a, calculada a saída correspondente a uma entrada,
calcular o erro da classificação e ajustar as várias matrizes de pesos
adequadamente. Para tal, é aplicada um algoritmo de _gradient descent_, pois
$E[w]$ é diferenciável se a função de ativação $f$ também o for.

### Transformações do Conjunto de Dados

As camadas escondidas deste modelo conseguem realizar transformações lineares
ao conjunto de dados. Assim, além de aprender quais os melhores valores para o
vetor de pesos, o modelo também aprende qual a melhor transformação a realizar
ao conjunto de dados, de modo a minimizar a função de erro. Isto faz com que o
_MLP_ seja um modelo com bastante poder expressivo.

### Overfitting

De modo a evitar o _overfitting_ do _MLP_ ao conjunto de dados, pode ser
implementada uma política de _early stoppng_, onde o processo de treino é
terminado antes que o modelo sofra de _overfitting_. As observações de treino
são então divididas num conjunto de treino e noutro conjunto de validação. O
processo de treino é interrompido quando o erro de teste aumenta durante
iterações consecutivas.

Outra solução para este problema passa por adicionar um termo de regularização
à função de erro.
