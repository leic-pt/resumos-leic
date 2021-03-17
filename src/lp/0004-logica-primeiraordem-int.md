---
description: Lógica de primeira ordem, quantificadores, regras de inferência.
---

# Lógica de Primeira Ordem - Introdução

[[toc]]

Lógica cuja linguagem nos permite considerar o "interior" (ao qual não podemos aceder) das proposições, isto é, as proposições elementares deixam de ser um todo e passam a ter uma estrutura, na qual podem existir constantes, variáveis e funções.
Contém dois símbolos adicionais em relação à lógica proposicional, os **quantificadores existencial e universal**.

## Componentes da linguagem

### Variáveis

Símbolos que desempenham o papel de designações (sem ser propriamente designações). A noção de variável está associada ao conceito de função à frente apresentado, mais concretamente ao seu domínio - uma variável pode tomar todos os valores do domínio de uma dada função, no contexto dessa função. Só por si não correspondem a entidades.

### Funções

No contexto estudado, corresponde a um conjunto de pares ordenados, potencialmente infinito, que não contém dois pares distintos com o mesmo primeiro elemento (um pouco com a noção de dicionários e chaves em Python). Tal como na matemática, as funções têm um domínio (conjunto de todos os primeiros elementos dos pares) e um contradomínio (segundos elementos dos pares). Recebem um elemento do domínio, o _argumento_ da função, e calculam o elemento correspondente do contradomínio, o _valor_ da função.
Sendo que correspondem a transformações, podemos utilizar funções para descrever entidades.

A **aridade** de uma função é a quantidade de argumentos que esta recebe. Uma função de aridade 0 é considerada uma **constante**.

Apesar de usualmente irmos estudar funções que recebem um argumento - que formam pares ordenados - é importante realçar que essa não é a única aridade possível de uma função. De um modo geral, em vez de consideramos que funções são conjuntos de _pares ordenados_, consideramo-las sim conjuntos de _tuplos ordenados_. Uma função que recebe $n$ argumentos é um conjunto de tuplos ordenados que não contém 2 tuplos com os mesmos n primeiros elementos.

::: details Exemplo - Função

A expressão designatória de uma função pode ser, por exemplo:

$$
capital(x)=\text{a capital de }x\\
n(x)=\text{o ano de nascimento de }x\\
s(x) = x + 1
$$

Sendo que os conjuntos de pares ordenados têm, por norma, este aspeto:

$$
\{(Portugal, Lisboa), (França, Paris), (Espanha, Madrid),\dots\}\\
\{(Augustus\_De\_Morgan, 1806), (Alonzo\_Church, 1903),\dots\}\\
\{(1,2),(2,3),(3,4),\dots\}
$$

:::

### Relações

Palavra utilizada para representar qualquer relação entre elementos de conjuntos. Não são funções, visto que um primeiro elemento pode estar associado a mais que um segundo elemento. É usualmente definida através da especificação dos conjuntos aos quais os primeiro e segundo elementos pertencem, juntamente com uma expressão proposicional que faz uma afirmação sobre a sua relação.
Relações com apenas um argumento também se chamam **classes** ou **propriedades**.

::: details Exemplo - Relação

Relação correspondendo ao conjunto dos países que partilham fronteira terrestre:

$$
\{(Portugal, Espanha), (Espanha, Portugal), (Espanha, França),\dots\}
$$

_Como podemos observar, Espanha é primeiro elemento duas vezes, pelo que não pode ser uma função._

A relação pode ser definida tal que:

$$
Tem\_fronteira(x,y)=x\text{ tem fronteira terrestre com }y
$$

onde _tem fronteira terrestre com_ é a tal **expressão designatória**.

:::

### Alfabeto básico da linguagem

- Símbolos de pontuação: , ( ) [ ]

- Símbolos lógicos:

  - $\neg$, que corresponde à **negação**;
  - $\wedge$, que corresponde à **conjunção**;
  - $\vee$, que corresponde à **disjunção inclusiva**, vulgo OR;
  - $\to$, que corresponde à **implicação**.
  - $\exists$, que corresponde ao **quantificador existencial**.
  - $\forall$ que corresponde ao **quantificador universal**.

- $f^{n}_{i}$, para $n \geq 0, i \geq 1$ - funções de aridade $n$. Funções com aridade 0 ($n = 0$) são constantes. A i-gésima função diz-se com _n argumentos_. Começam com letra minúscula.

- $P^{n}_{i}$, para $n \geq 0, i \geq 1$ - letras de predicado com aridade $n$. Uma letra de predicado com $n$ argumentos representa uma relação _n-ária_ (por exemplo, a relação de fronteira entre 2 países é uma relação binária). Começam com letra maiúscula.

- Variáveis individuais, $x_{i}$, como as usuais $x, y, z$.

### Termos

Correspondem às entidades sobre as quais queremos falar, o menor conjunto definido recursivamente através das seguintes regras de formação:

- cada letra de constante é um termo;

- cada variável é um termo;

- se $t_{1}, \dots, t_{n}$ são termos, então a função que aceita esses argumentos também é um termo.

Um **termo fechado/chão** é um termo que não contém variáveis.

:::details Exemplo - Termos

$$
\begin{array}{c}
Portugal\\
Augustus\_De\_Morgan\\
capital(Portugal)\\
pai(Augustus\_De\_Morgan)\\
pai(pai(pai(Augustus\_De\_Morgan)))\\
x\\
capital(x)\\
pai(x)
\end{array}
$$

_Os cinco primeiros termos são fechados. Os seguintes não são._

:::

### Fórmulas bem formadas

O conceito de fórmula bem formada, _fbf_, é redefinido para a lógica de primeira ordem.
Corresponde ao menor conjunto definido através das seguintes regras de formação:

- se $t_{1}, \dots, t_{n}$ são termos, então o predicado que aceita esses argumentos é uma _fbf_, sendo que esta _fbf_ é **atómica**;

- Se $\alpha$ é uma _fbf_, $\neg\alpha$ é também uma _fbf_; a conjunção, disjunção e implicação de _fbfs_ é também uma _fbf_;

- Se $\alpha$ é uma _fbf_, então $\forall x[\alpha]$ e $\exists x[\alpha]$ são também _fbfs_.

Uma _fbf_ sem variáveis é uma _formula chã_.

Resta notar que, sempre que possível, tentamos abreviar uma sequência de quantificadores do mesmo tipo numa só ocorrência do mesmo - por exemplo, $\forall x[\forall y[\dots]]$ é igual a $\forall x, y[\dots]$.

::: details Exemplo - Fórmulas bem formadas

Em relação ao seguinte exemplo, é relevante relembrar que o que começar por **letras minúsculas** corresponde a funções e por **maiúsculas** a relações.

$$
\neg P (a,g(a,b,c))\\
P(a,b)\rightarrow \neg Q(f(d))\\
R \wedge S
$$

No próximo exemplo, a primeira _fbf_ é uma formula chã, visto que não tem variáveis, mas sim termos concretos.

$$
Tem\_fronteira(Portugal, Espanha)\\
Tem\_fronteira(x,y)\\
\forall x\ [\forall y\ [Tem\_fronteira(x,y) \rightarrow \exists g\ [Travaram\_guerra(g,x,y)]]]\\
Vive\_em(x,capital(Portugal))
$$

:::

Nas _fbfs_ $\forall x[\alpha]$ e $\exists x[\alpha]$, $\alpha$ é o **domínio do quantificador**. Diz-se que o quantificador **liga** a variável $x$.  
Uma ocorrência da variável $x$ diz-se _ligada_ numa _fbf_ caso esta ocorrência apareça dentro do domínio do quantificador que a introduz. Caso contrário, a variável diz-se _livre_. Uma _fbf_ sem variáveis livres diz-se _fechada_ - basta uma livre para não o ser. Caso não ocorram quantificadores no âmbito da variável em questão (caso falemos de uma relação, por exemplo), a variável é livre.

::: details Exemplo - Variáveis livres/fechadas

A $fbf$ $P(x) \rightarrow \exists x [Q(x)]$ contém uma ocorrência livre
de $x$, em $P(x)$, e uma ocorrência ligada de $x$ em $Q(x)$.

:::

### Substituição

Conjunto finito de pares ordenados $\{t_{1}/x_{1}, \dots, t_{n}/x_{n}\}$, em que cada $x_{i}$ é uma variável individual e cada $t_{i}$ é um termo. Numa substituição, **todas as variáveis individuais são diferentes** e **nenhuma variável individual é igual ao termo correspondente**. Cada um dos pares $t_{i}, x_{i}$ é uma **ligação**.

::: details Exemplo - Substituição

Podem ser consideradas substituições, visto que todas as variáveis individuais são diferentes e não há termos iguais à variável associada:

$\{f(x)/x, z/y\}$  
$\{a/x, g(y)/y, f(g(h(b)))/z\}$

Por outro lado, não podem ser substituições:

$\{x/x, z/y\}$  
(visto que o termo $x$ está ligado à variável $x$ - iguais, não representando portanto uma substituição)  
$\{a/x, g(y)/y, b/x\}$  
(visto que a variável individual $x$ aparece 2 vezes).

:::

Existem dois casos especiais de substituições:

- **Substituição chã** - substituição na qual nenhum dos termos contém variáveis.

- **Substituição vazia** - substituição que corresponde ao conjunto vazio. Representada por $\epsilon$.

A ideia subjacente ao conceito de substituição é que cada variável individual será substituída pelo termo que lhe está associado. É aplicada substituindo todas as **ocorrências livres** de variáveis individuais pelo termo a elas associado. Qualquer ocorrência ligada de uma variável não pode ser substituída.

Escrevemos $\alpha(x_{1}, \dots, x_{n})$ para indicar que a _fbf_ $\alpha$ tem $x_{1}, \dots, x_{n}$ como variáveis livres.

::: details Exemplo - Aplicação da Substituição

$P(x, f(a, y)) \cdot \{a/x, f(a, b)/y\} = P(a, f(a, f(a, b))).$

Como podemos observar, as ocorrências das variáveis individuais $x$ e $y$ são substituídos pelos termos a que estão ligados, sendo que todas as ocorrências dessas variáveis são ambas livres.

$(A(x) \to \exists x[B(x)]) \cdot \{a/x, f(a,b)/y\} = A(a) \to \exists x[B(x)].$

Aqui, só uma das ocorrências da variável $x$ é livre, e só nessa é que pode ocorrer substituição. Ora, não ocorrer substituição em todas as ocorrências pode originar problemas futuros, abordados à frente.

:::

- **Termo livre para uma variável** - se $\alpha$ for uma _fbf_ e $t$ um termo, dizemos que $t$ é _livre_ para $x$ em $\alpha$ caso nenhuma ocorrência livre de $x$ em $\alpha$ ocorrer dentro do domínio de um quantificador em ordem $y$, onde $y$ é uma variável em $t$. Um termo sem variáveis é sempre livre para qualquer variável em qualquer _fbf_.

::: details Exemplo - Termo livre para uma variável

O termo $g(y, f(b))$ é livre para $x$ na _fbf_ $P(x, y)$, mas não o é na _fbf_ $\forall y[P(x, y)]$.

:::

## Sistema dedutivo

O sistema dedutivo da Lógica de Primeira Ordem difere do da Lógica Proposicional no que às regras de inferência diz respeito. Todas as regras de inferência introduzidas anteriormente (conjunção, disjunção, negação, implicação) são aqui aplicáveis, contudo iremos adicionar mais algumas.

### Regras para o quantificador universal

::: tip Introdução do quantificador universal

Abreviada por $I\forall$, pode ser utilizada quando uma propriedade arbitrária, $\alpha(t)$, for provada para $t$. Utilizamos, para tal, uma técnica semelhante à regra da introdução da implicação, criando um novo "contexto" no qual aparece um novo termo, que nunca apareceu na prova, e tentamos provar que esse termo tem essa propriedade. A regra afirma, portanto, que se numa prova iniciada pela introdução da variável $x_{0}$ pudermos derivar a _fbf_ $\alpha (x_{0})$, então podemos escrever $\forall x[\alpha(x)]$.

  <img src="./assets/0004-int-univ1.png" alt="Int. Quantificador Universal 1" class="invert-dark">

Resta notar que aqui não estamos a trabalhar diretamente com as usuais provas hipotéticas, mas com um contexto iniciado por um qualquer termo (podemos, contudo, iniciar provas hipotéticas dentro desse contexto sem qualquer problema). A sua apresentação é também diferente, tal como pode ser observado acima.

:::

::: tip Eliminação do quantificador Universal

Abreviada por $E\forall$, indica que a partir de $\forall x[\alpha(x)]$ podemos inferir $\alpha(t)$, onde $t$ é qualquer termo.

  <img src="./assets/0004-el-univ1.png" alt="El. Quantificador Universal 1" class="invert-dark">

:::

::: details Exemplo - Introdução/Eliminação do quantificador universal

Prova do argumento $({\forall x[P(x) \to Q(x)], \forall x[Q(x) \to R(x)]}, \forall x[P(x) \to R(x)])$ (de notar que há mais que uma maneira de fazer esta prova):

<img src="./assets/0004-ex-univ.png" alt="Exemplo Universal" class="invert-dark">

:::

### Regras para o quantificador existencial

::: tip Introdução do quantificador existencial

Abreviada por $I\exists$, afirma que a partir de uma propriedade arbitrária $\alpha(t)$, podemos inferir $\exists x[\alpha(x)]$.

  <img src="./assets/0004-int-exi1.png" alt="Int. Quantificador Existencial 1" class="invert-dark">

:::

::: tip Eliminação do quantificador existencial

Abreviada por $E\exists$, é, porventura, a mais complicada das quatro regras introduzidas. Temos, a partir de $\exists x[\alpha(t)]$ que existe pelo menos uma entidade que satisfaz a propriedade $\alpha$ - só não sabemos qual. Como não sabemos nada sobre essa entidade, nada podemos afirmar sobre ela, para além de $\alpha(t)$. Na prova, o objetivo será criar um "contexto" em que surge uma entidade nunca mencionada anteriormente; se dentro desse contexto formos capazes de derivar uma _fbf_ $\beta$, que não menciona $t$, então $\beta$ verificar-se-á independentemente de $t$.

  <img src="./assets/0004-el-exi1.png" alt="El. Quantificador Existencial 1" class="invert-dark">

:::

::: details Exemplo - Introdução/Eliminação do quantificador existencial

Prova de $\exists x[P(x)] \to \neg\forall x[\neg P(x)]$:

<img src="./assets/0004-ex-exi.png" alt="Exemplo Existencial" class="invert-dark">

:::
