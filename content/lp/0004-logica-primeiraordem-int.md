---
title: Lógica de Primeira Ordem - Introdução
description: >-
  Lógica de primeira ordem.
  Quantificadores.
  Regras de inferência para quantificadores.
path: /lp/logica-primeira-ordem-intro
type: content
---

# Lógica de Primeira Ordem - Introdução

```toc

```

Lógica cuja linguagem nos permite considerar o "interior" (ao qual não podemos aceder)
das proposições. As proposições elementares deixam de ser um todo e passam
a ter uma estrutura, na qual podem existir constantes, variáveis e funções.
Contém dois símbolos adicionais em relação à lógica proposicional, os **quantificadores
existencial e universal**, que já conhecemos da matemática: $\exists$ e $\forall$, respetivamente.

## Componentes da linguagem

A linguagem abordada nesta secção é constituída por algumas componentes novas,
diferentes das da lógica proposicional.

:::tip[Variáveis]

Símbolos que desempenham o papel de designações (sem ser propriamente designações).
A noção de variável está associada ao conceito de função à frente apresentado, mais
concretamente ao seu domínio - uma variável pode tomar todos os valores do domínio
de uma dada função, no contexto dessa função. Só por si não correspondem a entidades.

:::

:::info[Funções]

No contexto estudado, corresponde a um conjunto de pares ordenados, potencialmente infinito,
que não contém dois pares distintos com o mesmo primeiro elemento - não existe aqui
"não determinismo", mapear uma função a um dado valor corresponde sempre ao mesmo resultado.
Tal como na matemática, as funções têm um domínio (conjunto de todos os primeiros
elementos dos pares) e um contradomínio (segundos elementos dos pares). Recebem
um elemento do domínio, o _argumento_ da função, e calculam o elemento correspondente
do contradomínio, o _valor_ da função. Sendo que correspondem a transformações,
podemos utilizar funções para descrever entidades.

A [**aridade**](color:orange) de uma função corresponde à quantidade de argumentos que esta recebe.
Uma função de aridade 0 diz-se uma [**constante**](color:green), claro.

Apesar de usualmente irmos estudar funções que recebem um argumento - que formam
pares ordenados - é importante realçar que essa não é a única aridade possível de
uma função. De um modo geral, em vez de consideramos que funções são conjuntos de
_pares ordenados_, consideramo-las sim conjuntos de _tuplos ordenados_. Uma função
que recebe $n$ argumentos é um conjunto de tuplos ordenados que não contém 2
tuplos com os mesmos $n$ primeiros elementos!

:::

A expressão designatória de uma função pode ser, por exemplo:

$$
capital(x)=\text{a capital de }x\\
n(x)=\text{o ano de nascimento de }x\\
s(x) = x + 1
$$

Exemplos de conjuntos de pares ordenados que correspondem a "aplicações" das
funções acima são, respetivamente:

$$
\{(\text{Portugal}, \text{Lisboa}), (\text{França}, \text{Paris}), (\text{Espanha}, \text{Madrid}),\dots\}\\
\{(\text{Augustus\_De\_Morgan}, 1806), (\text{Alonzo\_Church}, 1903),\dots\}\\
\{(1,2),(2,3),(3,4),\dots\}
$$

:::tip[Relações]

Servem para representar qualquer relação (passo a redundância) entre elementos de conjuntos.
[**Não são funções**](color:red), visto que um primeiro elemento pode estar associado a mais que um
segundo elemento. É usualmente definida através da especificação dos conjuntos aos
quais os primeiro e segundo elementos pertencem, juntamente com uma expressão proposicional
que faz uma afirmação sobre a sua relação.
Relações com apenas um argumento também se chamam **classes** ou **propriedades**.

:::details[Exemplo - Relação]

A relação correspondendo ao conjunto dos países que partilham fronteira terrestre
podia ter, por exemplo:

$$
\{(Portugal, Espanha), (Espanha, Portugal), (Espanha, Franca),\dots\}
$$

Como podemos observar, Espanha é primeiro elemento duas vezes, pelo que não podemos estar
na presença de uma função!

Esta relação pode ser definida tal que:

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

- $f^{n}_{i}$, para $n \geq 0, i \geq 1$ - funções de aridade $n$. Funções com aridade
  $0$ ($n = 0$, portanto) são constantes. A i-gésima função diz-se com $n$ _argumentos_. Começam com letra minúscula.

- $P^{n}_{i}$, para $n \geq 0, i \geq 1$ - letras de predicado com aridade $n$.
  Uma letra de predicado com $n$ argumentos representa uma relação $n$_-ária_ (por exemplo,
  a relação de fronteira entre 2 países é uma relação binária). Começam com letra maiúscula.

- Variáveis individuais, $x_{i}$, como as usuais $x, y, z$.

---

Depois de apresentadas as principais componentes da linguagem da LPO, podemos então
começar a falar dos seus termos, das suas _fbfs_, e daí prosseguir.

:::info[Termos]

Correspondem às entidades sobre as quais queremos falar.

- cada **letra de constante** é um termo;

- cada **variável** é um termo;

- se $t_{1}, \dots, t_{n}$ são termos, então a função que aceita esses argumentos é também um termo.

Um [**termo fechado/chão**](color:yellow) é um termo que não contém variáveis.

Exemplos de termos fechados seriam, por exemplo:

$$
\begin{array}{c}
Portugal\\
Augustus\_De\_Morgan\\
capital(Portugal)\\
pai(Augustus\_De\_Morgan)\\
pai(pai(pai(Augustus\_De\_Morgan)))
\end{array}
$$

Enquanto que termos que aceitam variáveis poderiam ser:

$$
\begin{array}{c}
x\\
capital(x)\\
pai(x)
\end{array}
$$

:::

:::tip[Fórmulas bem formadas]

O conceito de fórmula bem formada, _fbf_, é redefinido para a lógica de primeira ordem.
Corresponde ao menor conjunto definido através das seguintes regras de formação:

- se $t_{1}, \dots, t_{n}$ são termos, então o predicado que aceita esses argumentos
  é uma _fbf_, sendo que esta _fbf_ é **atómica**;

- Se $\alpha$ é uma _fbf_, $\neg\alpha$ é também uma _fbf_; a conjunção, disjunção e
  implicação de _fbfs_ é também uma _fbf_;

- Se $\alpha$ é uma _fbf_, então $\forall x[\alpha]$ e $\exists x[\alpha]$ são também _fbfs_.

Dizemos que uma _fbf_ sem variáveis é [**chã**](color:orange).

:::

Resta notar que, sempre que possível, tentamos abreviar uma sequência de quantificadores
do mesmo tipo numa só ocorrência do mesmo - por exemplo, $\forall x[\forall y[\dots]]$
é igual a $\forall x, y[\dots]$.

:::details[Exemplo - Fórmulas bem formadas]

Apresenta-se, de seguida, um conjunto de fórmulas bem formadas.
Note-se que os terceiro e quartos exemplos correspondem a [**fórmulas chãs**](color:orange)!

$$
\neg P (a,g(a,b,c))\\
P(a,b)\rightarrow \neg Q(f(d))\\
R \wedge S\\
Tem\_fronteira(Portugal, Espanha)\\
Tem\_fronteira(x,y)\\
\forall x\ [\forall y\ [Tem\_fronteira(x,y) \rightarrow \exists g\ [Travaram\_guerra(g,x,y)]]]\\
Vive\_em(x,capital(Portugal))
$$

:::

Nas _fbfs_ $\forall x[\alpha]$ e $\exists x[\alpha]$, $\alpha$ é o **domínio do quantificador**.
Diz-se que o quantificador **liga** a variável $x$.  
Uma ocorrência da variável $x$ diz-se _ligada_ numa _fbf_ caso esta ocorrência apareça
dentro do domínio do quantificador que a introduz. Caso contrário, a variável diz-se
_livre_. Uma _fbf_ sem variáveis livres diz-se _fechada_ - basta uma livre para não o ser.
Caso não ocorram quantificadores no âmbito da variável em questão (caso falemos de uma
relação, por exemplo), a variável é livre.

A título de exemplo, podemos dizer que a $fbf$ $P(x) \rightarrow \exists x [Q(x)]$
contém uma ocorrência livre de $x$, em $P(x)$, e uma ocorrência ligada de $x$, em $Q(x)$.

### Substituição

Conjunto finito de pares ordenados $\{t_{1}/x_{1}, \dots, t_{n}/x_{n}\}$, em que
cada $x_{i}$ é uma variável individual e cada $t_{i}$ é um termo. Numa substituição,
[**todas as variáveis individuais são diferentes**](color:red), e [**nenhuma variável individual
é igual ao termo correspondente**](color:red). Cada um dos pares $t_{i}, x_{i}$ é uma **ligação**.

Podem ser consideradas substituições, visto que todas as variáveis individuais são
diferentes e não há termos iguais à variável associada:

$$
\{f(x)/x,\hspace{0.1cm} z/y\}\\
\{a/x,\hspace{0.1cm} g(y)/y,\hspace{0.1cm} f(g(h(b)))/z\}
$$

Por outro lado, não podem ser substituições:

$$
\{x/x,\hspace{0.1cm} z/y\}
$$

(visto que o termo $x$ está ligado à variável $x$ - iguais, não representando portanto uma substituição)

$$
\{a/x,\hspace{0.1cm} g(y)/y,\hspace{0.1cm} b/x\}
$$

(visto que a variável individual $x$ aparece 2 vezes).

Existem dois casos especiais de substituições:

- [**Substituição chã**](color:orange), caso nenhum dos termos contenha variáveis.

- [**Substituição vazia**](color:yellow), correspondendo ao conjunto vazio. Representada por $\epsilon$.

A ideia subjacente ao conceito de substituição é que cada variável individual será
substituída (lá está) pelo termo que lhe está associado. É aplicada substituindo todas as
**ocorrências livres** de variáveis individuais pelo termo a elas associado. [**Qualquer
ocorrência ligada de uma variável não pode ser substituída**](color:yellow)!

Escrevemos $\alpha(x_{1}, \dots, x_{n})$ para indicar que a _fbf_ $\alpha$ tem
$x_{1}, \dots, x_{n}$ como variáveis livres.

:::details[Exemplo - Aplicar uma substituição]

Consideremos:

$$
P(x, f(a, y)) \cdot \{a/x,\hspace{0.1cm} f(a, b)/y\} = P(a, f(a, f(a, b)))
$$

Como podemos observar, as ocorrências das variáveis individuais $x$ e $y$ são substituídas
pelos termos a que estão ligados, sendo que todas as ocorrências dessas variáveis são ambas livres.

$$
(A(x) \to \exists x[B(x)]) \cdot \{a/x, f(a,b)/y\} = A(a) \to \exists x[B(x)]
$$

Aqui, só uma das ocorrências da variável $x$ é livre, e só nessa é que ocorre
substituição. Ora, o facto da substituição não ocorrer sempre pode originar
problemas futuros, abordados mais à frente.

:::

Dizemos, finalmente, que temos em mãos um [**termo livre $t$ para uma variável $x$ numa _fbf_ $\alpha$**](color:orange)
caso nenhuma ocorrência livre de $x$ em $\alpha$ ocorra dentro do domínio de um
quantificador em ordem $y$ (onde $y$ é uma variável em $t$). Um termo sem variáveis
é, claro, sempre livre para qualquer variável em qualquer _fbf_. O termo $g(y, f(b))$
é livre para $x$ na _fbf_ $P(x, y)$, por exemplo, mas não o é na _fbf_ $\forall y[P(x, y)]$.

## Sistema dedutivo

O sistema dedutivo da Lógica de Primeira Ordem difere do da Lógica Proposicional
no que às regras de inferência diz respeito. Todas as regras de inferência introduzidas
anteriormente (conjunção, disjunção, negação, implicação) são aqui aplicáveis - iremos
apenas adicionar regras de inferência adicionais, sobre os quantificadores introduzidos
pela LPO.

### Regras para o quantificador universal

:::tip[Introdução do quantificador universal]

Abreviada por $I\forall$, pode ser utilizada quando uma propriedade arbitrária,
$\alpha(t)$, for provada para $t.$ Utilizamos, para tal, uma técnica semelhante
à **regra da introdução da implicação**, criando um novo "contexto" no qual aparece
um novo termo, que nunca apareceu na prova, e tentamos provar que esse termo arbitrário tem
essa propriedade. A regra afirma, portanto, que se numa prova iniciada pela introdução
da variável $x_{0}$ pudermos derivar a _fbf_ $\alpha (x_{0})$, então podemos escrever $\forall x[\alpha(x)]$,
[**precisamente porque o termo introduzido é arbitrário**](color:green)!

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & x_0 \bigg\vert\\
  \vdots & \enspace\enspace\bigg\vert\enspace\vdots\\
  m & \enspace\enspace\bigg\vert\enspace \alpha (x_0)\\
  m + 1 & \forall x[\alpha (x)] && I\forall, (n, m)
\end{array}
$$

Resta notar que aqui não estamos a trabalhar diretamente com as usuais provas
hipotéticas, mas com um contexto iniciado por um qualquer termo (podemos, contudo,
iniciar provas hipotéticas dentro desse contexto sem qualquer problema). A sua
apresentação é também diferente, tal como pode ser observado acima.

:::

:::tip[Eliminação do quantificador Universal]

Abreviada por $E\forall$, indica que a partir de $\forall x[\alpha(x)]$ podemos
inferir $\alpha(t)$, onde $t$ é qualquer termo.

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \forall x[\alpha (x)]\\
  \vdots & \vdots\\
  m & \alpha (t) && E\forall, n
\end{array}
$$

:::

Recorrendo às duas regras descritas acima, conseguimos agora provar o argumento

$$
({\forall x[P(x) \to Q(x)], \forall x[Q(x) \to R(x)]}, \forall x[P(x) \to R(x)]).
$$

Note-se que há mais que uma maneira de fazer esta prova!

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \forall x[P(x) \to Q(x)] && Prem\\
  2 & \forall x[Q(x) \to R(x)] && Prem\\
  3 & x_0 \bigg\vert\enspace\bigg\vert\underline{\enspace P(x_0) \enspace} && Hip\\
  4 & \enspace\enspace\bigg\vert\enspace\bigg\vert\enspace \forall x[P(x) \to Q(x)] && Rei, 1\\
  5 & \enspace\enspace\bigg\vert\enspace\bigg\vert\enspace P(x_0) \to Q(x_0) && E\forall , 4\\
  6 & \enspace\enspace\bigg\vert\enspace\bigg\vert\enspace Q(x_0) && E\to, (3, 5)\\
  7 & \enspace\enspace\bigg\vert\enspace\bigg\vert\enspace \forall x[Q(x) \to R(x)] && Rei, 2\\
  8 & \enspace\enspace\bigg\vert\enspace\bigg\vert\enspace Q(x_0) \to R(x_0) && E\forall, 7\\
  9 & \enspace\enspace\bigg\vert\enspace\bigg\vert\enspace R(x_0) && E\to, (6, 8)\\
  10 & \enspace\enspace\bigg\vert\enspace P(x_0) \to R(x_0) && I\to, (3, 9)\\
  11 & \forall x[P(x) \to R(x)] && I\forall, (4, 10)
\end{array}
$$

### Regras para o quantificador existencial

:::tip[Introdução do quantificador existencial]

Abreviada por $I\exists$, afirma que a partir de uma propriedade arbitrária $\alpha(t)$,
podemos inferir $\exists x[\alpha(x)]$ - se provámos a propriedade para um termo,
provámos que existe pelo menos um termo para a qual esta se aplica.

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha (t)\\
  \vdots & \vdots\\
  m & \exists x[\alpha (x)] && I\exists, n
\end{array}
$$

:::

:::tip[Eliminação do quantificador existencial]

Abreviada por $E\exists$, é, porventura, a mais complicada das quatro regras introduzidas.
Temos, a partir de $\exists x[\alpha(t)]$, que existe pelo menos uma entidade que satisfaz
a propriedade $\alpha$ - só não sabemos qual. Como não sabemos nada sobre essa entidade,
nada podemos afirmar sobre ela, para além de $\alpha(t)$. Na prova, o objetivo será criar
um "contexto" em que surge uma entidade nunca mencionada anteriormente; se dentro
desse contexto formos capazes de derivar uma _fbf_ $\beta$, que não menciona $t$,
então $\beta$ verificar-se-á independentemente de $t$.

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \exists x[\alpha (x)]\\
  m & x_0 \bigg\vert\underline{\enspace \alpha(x_0) \enspace} && Hip\\
  \vdots & \enspace\enspace\bigg\vert\enspace\vdots\\
  k & \enspace\enspace\bigg\vert\enspace\beta\\
  k + 1 & \enspace\beta && E\exists, (n, (m, k))
\end{array}
$$

:::

A prova de $\exists x[P(x)] \to \neg\forall x[\neg P(x)]$ passa por algo deste género:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \bigg\vert\underline{\enspace \exists x[P(x)] \enspace} && Hip\\
  2 & \bigg\vert\enspace x_0 \bigg\vert\underline{\enspace P(x_0) \enspace} && Hip\\
  3 & \bigg\vert\enspace\enspace\enspace\bigg\vert\enspace\bigg\vert\underline{\enspace \forall x[\neg P(x)] \enspace} && Hip\\
  4 & \bigg\vert\enspace\enspace\enspace\bigg\vert\enspace\bigg\vert\enspace P(x_0) && Rei, 2\\
  5 & \bigg\vert\enspace\enspace\enspace\bigg\vert\enspace\bigg\vert\enspace \neg P(x_0) && E\forall, 3\\
  6 & \bigg\vert\enspace\enspace\enspace\bigg\vert\enspace \neg\forall x[\neg P(x)] && I\neg, (3, (4, 5))\\
  7 & \bigg\vert\enspace \neg \forall x[\neg P(x)] && E\exists, (1, (2, 6))\\
  8 & \exists x[P(x)] \to \neg\forall x[\neg P(x)] && I\to, (1, 7)
\end{array}
$$
