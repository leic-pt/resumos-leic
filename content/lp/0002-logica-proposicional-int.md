---
title: Lógica Proposicional - Introdução
description: >-
  Lógica Proposicional.
  Símbolos lógicos e Componentes de uma Lógica.
  Sistema dedutivo.
  Prova, Regras de inferência.
  Como construir uma Prova.
path: /lp/logica-proposicional-int
type: content
---

# Lógica Proposicional - Introdução

```toc

```

Apresenta uma linguagem muito simples. O nível mais elementar é o [**símbolo de proposição**](color:yellow):
uma proposição pode, assim, ser representada por uma letra do alfabeto latino.

Associado à lógica proposicional está também um conjunto de símbolos lógicos, que
nos permitem escrever um vasto leque de expressões proposicionais:

:::info[Símbolos Lógicos]

- Símbolos de pontuação: ( )

- Símbolos lógicos:

  - $\neg$, que corresponde à **negação**;
  - $\wedge$, que corresponde à **conjunção**;
  - $\vee$, que corresponde à **disjunção inclusiva** [\*](color:yellow);
  - $\to$, que corresponde à **implicação**.

- Símbolos de proposição: $P_{i}$, $i \geq 1$.  
  O conjunto de todas as proposições da lógica proposicional é dado por $\mathcal{P}$.

[\*](color:yellow) Importante reforçar que a disjunção **inclusiva** corresponde
ao **OR**, não ao **XOR** (nesse caso, teríamos a disjunção **exclusiva**).

:::

## Componentes de uma Lógica

- **Fórmula bem formada, _fbf_** - qualquer lógica tem uma linguagem, linguagem esta
  composta por um conjunto de frases válidas. A essas frases dá-se o nome de
  _fórmulas bem formadas_, ou _fbfs_. Em relação a estas, temos que:

  - os símbolos de proposição correspondem a _fbfs atómicas_;
  - se $\alpha$ é uma _fbf_, então $\neg\alpha$ também o é;
  - qualquer combinação de _fbfs_ atómicas utilizando os símbolos lógicos acima
    mencionados também é uma _fbf_.

Abaixo encontram-se vários exemplos de fórmulas bem formadas:

$$
\neg P\\
P \wedge Q\\
(P \wedge Q) \to R
$$

A linguagem da lógica proposicional, $\mathcal{L}_{LP}$, é composta por todas as
_fbfs_ construídas a partir do conjunto dos símbolos lógicos acima referidos.

- **Argumento** - par ($\Delta, \alpha$), no qual $\Delta$ é um conjunto de frases
  da linguagem e $\alpha$ é uma frase da linguagem.

## Sistema Dedutivo

Especifica as **regras de inferência**, regras que permitem a manipulação de _fbfs_
e a introdução de novas _fbfs_ a partir de _fbfs_ existentes.

:::info[Deducão Natural]

Nos sistemas abordados por dedução natural existem por norma duas regras de inferência
por cada símbolo lógico:

- A [**regra de introdução**](color:green), que nos diz como introduzir uma
  _fbf_ que utiliza um dado símbolo lógico
- A [**regra de eliminação**](color:red), que nos diz como usar uma _fbf_
  que contém o símbolo lógico em questão.

:::

Aqui, não existem _axiomas_, _fbfs_ que se aceitam como verdadeiras.

### Prova

Correspondem a sequências finitas de linhas numeradas, cada uma das quais contendo
uma premissa **ou** uma _fbf_ que é adicionada à prova recorrendo a uma das regras
de inferência (e utilizando as _fbfs_ das linhas anteriores). Em cada linha da
prova existe uma justificação da introdução da mesma.

Uma [**prova de $\alpha$ a partir de $\Delta$**](color:orange) é uma prova cuja
**última linha** contém $\alpha$ e cujas restantes linhas contêm ou uma _fbf_ em $\Delta$
ou uma _fbf_ obtida a partir das linhas anteriores recorrendo a uma regra de inferência.
Caso exista uma prova de $\alpha$ a partir de $\Delta$, dizemos que $\alpha$ é
**derivável** a partir de $\Delta$, ou, de outra maneira, $\Delta \vdash \alpha$.

Fará sentido, então, começar a falar das regras de inferência que vamos utilizar
nas nossas provas:

#### Regra da premissa

:::tip[Regra da Premissa]

Podemos, no decorrer da prova (e em qualquer altura desta), introduzir _fbfs_
correspondentes a premissas. A introdução de uma premissa tem sempre um aspeto deste género:

$$
\def\arraystretch{1.5}
\begin{array}{llll}
  n & \alpha && Prem \\
\end{array}
$$

:::

Caso o nosso objetivo passe por tentar provar que $\{P, Q\} \vdash P \wedge Q$,
vamos começar a prova a enunciar as premissas:

$$
\def\arraystretch{1.5}
\begin{array}{llll}
  1 & P && Prem \\
  2 & Q && Prem \\
\end{array}
$$

#### Regra da repetição

:::tip[Regra da Repetição]

Regra que afirma que qualquer _fbf_ pode ser repetida dentro de uma prova - ou seja,
se já existe uma _fbf_ numa linha anterior da prova, podemos reescrevê-la na linha atual,
justificando com a regra da repetição. É identificada por [$Rep, n$](color:orange),
onde $n$ representa a linha onde a _fbf_ em questão foi inicialmente introduzida.
A regra da repetição tem sempre um aspeto deste género:

$$
\begin{array}{llll}
  n & \alpha \\
  \vdots & \vdots \\
  m & \alpha && Rep, n
\end{array}
$$

:::

Procurando utilizar um exemplo mais concreto, e pegando no que foi descrito mais acima:

$$
\def\arraystretch{1.5}
\begin{array}{llll}
  \smartcolor{orange}{1} & P && Prem \\
  2 & Q && Prem \\
  3 & P && Rep, \smartcolor{orange}{1}
\end{array}
$$

#### Regras associadas à conjunção

:::tip[Introdução da Conjunção]
Diz-nos como introduzir (ou como construir) uma _fbf_ cujo símbolo lógico principal
é uma conjunção - aqui, uma conjunção de _fbfs_. Abreviada por $I\wedge, (n, m)$,
onde $n$ e $m$ representam, respetivamente, as linhas onde as primeira e segunda
_fbfs_ foram introduzidas.

É importante reter que as _fbfs_ têm de ter sido introduzidas **por ordem**,
caso contrário não podemos aplicar diretamente a regra, tendo de usar a regra da repetição.
Há professores que são particularmente rígidos com esta formalidade (apesar de
não haver qualquer "impacto" no quão correta a prova está), pelo que [**em contexto
de avaliação será importante ter este aspeto em conta**](color:green).

A introdução da conjunção deverá, então, ter um aspeto deste género:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha\\
  \vdots & \vdots\\
  m & \beta\\
  \vdots & \vdots\\
  k & \alpha\wedge\beta & I\wedge, (n,m)
\end{array}
$$

:::

:::details[Exemplo - Introdução da Conjunção]

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & P && Prem\\
  2 & Q && Prem\\
  3 & P \wedge Q && I\wedge, (1,2)
\end{array}
$$

Caso quiséssemos provar $Q \wedge P$, das duas uma: ou introduzíamos $Q$ e $P$ pela ordem contrária (primeiro $Q$) na prova, ou aplicávamos a regra da repetição:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & P && Prem\\
  2 & Q && Prem\\
  3 & P && Rep, 1\\
  3 & Q \wedge P && I\wedge, (2,3)
\end{array}
$$

:::

:::tip[Eliminação da Conjunção]

Diz-nos que, de uma _fbf_ cujo símbolo principal é uma conjunção, podemos derivar
tanto a _fbf_ da "esquerda" como a da "direita" - se temos uma conjunção com valor
lógico verdadeiro, então todos os seus membros terão de o partilhar também. Abreviada
por $E\wedge, n$, onde $n$ representa a linha onde a _fbf_ em causa foi introduzida.

A eliminação da conjunção tem sempre um aspeto deste género:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha\wedge\beta\\
  \vdots & \vdots\\
  m & \alpha && E\wedge, n
\end{array}
$$

ou

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha\wedge\beta\\
  \vdots & \vdots\\
  m & \beta && E\wedge, n
\end{array}
$$

:::

:::details[Exemplo - Eliminação da Conjunção]

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & P \wedge Q && Prem\\
  2 & R && Prem \\
  3 & P && E\wedge, 1\\
  4 & R && Rep, 2\\
  5 & P \wedge R && I\wedge, (3,4)
\end{array}
$$

De notar que começamos agora a ver várias aplicações de regras durante a prova.

:::

#### Regras para provas hipotéticas

:::tip[Regra da Hipótese]

Os sistemas de dedução natural usam o conceito de _prova hipotética_ - uma prova
iniciada com a introdução de uma hipótese. Essa prova hipotética consiste num
"ambiente local", um contexto diferente em que, para além das outras _fbfs_ da prova,
consideramos a hipótese que iniciou a prova, iniciada pela **regra da hipótese**:
a regra que afirma que, em qualquer ponto de uma prova, podemos introduzir qualquer
_fbf_ como uma hipótese, começando uma nova prova hipotética.

Uma vez iniciada uma prova hipotética, todas as linhas adicionadas pertencem à mesma
até que seja terminada.

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \bigg\vert\underline{\enspace \alpha \enspace} && Hip\\
  n + 1 & \bigg\vert\cdots
\end{array}
$$

:::

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & P \wedge Q && Prem\\
  2 & P && E\wedge, 1\\
  3 & \bigg\vert\underline{\enspace R \enspace} && Hip\\
  4 & \bigg\vert\enspace R && Rep, 3
\end{array}
$$

:::tip[Regra da Reiteração]

Temos ainda a [**regra da reiteração**](color:orange), uma regra de inferência especial,
específica às provas hipotéticas. Diz-nos que qualquer _fbf_ introduzida num ponto
da prova exterior à prova hipotética pode ser utilizado dentro da mesma.
[**O contrário não se aplica.**](color:red)

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha\\
  \vdots & \bigg\vert & \vdots\\
  & \bigg\vert\\
  m & \bigg\vert & \alpha && Rei, n
\end{array}
$$

:::

Vamos então tentar combinar a regra da hipótese com a regra da reiteração:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & P \to\lnot P & Prem\\
  2 & \bigg\vert\underline{\enspace \lnot Q \enspace} & Hip \\
  3 & \bigg\vert\enspace \bigg\vert\underline{\enspace P \enspace} & Hip \\
  4 & \bigg\vert\enspace \bigg\vert\enspace P \to\lnot P & Rei, 1
\end{array}
$$

Resta realçar algumas noções importantes:

- as provas iniciadas por hipóteses são, claro está, [**hipotéticas**](color:green),
  e as exteriores chamadas [**categóricas**](color:red);
- as _fbfs_ de uma prova hipotética são chamadas [**contingentes**](color:green),
  e as restantes também [**categóricas**](color:red).

#### Regras para a implicação

:::tip[Introdução da Implicação]

Afirma que se numa prova iniciada por uma hipótese $\alpha$ formos capazes de derivar
$\beta$, então podemos terminar a prova hipotética, podendo derivar $\alpha\to\beta$
na prova que contém a prova hipotética. Abreviada por $I\to, (n, m)$, onde $n$ e
$m$ são, respetivamente, a linha onde a hipótese foi introduzida e a _fbf_ associada derivada.

Voltando atrás e pensando no que é uma implicação, temos que, com premissas verdadeiras
e conclusão verdadeira, a implicação é válida. Ora, se a partir de $a$ é possível
provar $b$, então a implicação $a\to b$ é válida!

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \bigg\vert\underline{\enspace \alpha \enspace} && Hip\\
  \vdots & \bigg\vert\enspace\vdots\\
  m & \bigg\vert\enspace\beta\\
  m + 1 & \alpha\to\beta && I\to, (n, m)
\end{array}
$$

:::

:::details[Exemplo - Introdução da implicação]

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & R && Prem\\
  2 & \bigg\vert\underline{\enspace P \enspace} && Hip\\
  3 & \bigg\vert\enspace R && Rei, 1\\
  4 & P \to R && I\to, (2,3)
\end{array}
$$

:::

:::tip[Eliminação da Implicação]

Regra que nos diz que de uma prova que contém tanto uma _fbf_ $\alpha$ como uma
outra $\alpha\to\beta$ podemos derivar $\beta$. Abreviada por $E\to, (n, m)$,
onde $n$ e $m$ são, respetivamente, as linhas onde $\alpha$ e $\alpha\to\beta$
foram introduzidas.

Esta regra poderá fazer mais sentido se pensarmos mais uma vez no significado da
implicação: só podemos ter uma implicação válida caso, tendo as premissas verdadeiras,
a conclusão não possa ser falsa. Ora, se temos $a \to b$ e $a$ na prova, teremos
necessariamente que $a$ é verdadeiro, e seguindo este fio lógico, $b$ também
terá de o ser.

A eliminação da implicação tem um aspeto deste género:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha\\
  \vdots & \vdots\\
  m & \alpha\to\beta\\
  \vdots & \vdots\\
  k & \beta && E\to, (n, m)
\end{array}
$$

:::

:::details[Exemplo - Eliminação da implicação]

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & P \to Q && Prem\\
  2 & P && Prem\\
  3 & P \to Q && Rep, 1\\
  4 & Q && E\to, (2,3)
\end{array}
$$

:::

#### Regras para a negação

:::tip[Introdução da Negação]

Utiliza o conceito de _prova por absurdo_ - se a partir de uma dada hipótese podemos
derivar uma contradição, então rejeitamos essa mesma hipótese, **aceitando a sua
negação**, visto que caso contrário chegaríamos a uma conclusão absurda. Abreviada
por $I\neg, (n, (m, k))$, onde $n$, $m$ e $k$ representam, respetivamente, a
linha da introdução da hipótese, e as linhas correspondentes à contradição.

A introdução da negação tem sempre um aspeto deste género:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \bigg\vert\underline{\enspace \alpha \enspace} && Hip\\
  \vdots & \bigg\vert\enspace\vdots\\
  m & \bigg\vert\enspace\beta\\
  \vdots & \bigg\vert\enspace\vdots\\
  k & \bigg\vert\enspace\neg\beta\\
  l & \neg\alpha && I\neg, (n, (m, k))
\end{array}
$$

:::

:::details[Exemplo - Introdução da Negação]

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & P \to Q && Prem\\
  2 & \neg Q && Prem\\
  3 & \bigg\vert\underline{\enspace P \enspace} && Hip\\
  4 & \bigg\vert\enspace P \to Q && Rei, 1\\
  5 & \bigg\vert\enspace Q && E\to, (3,4)\\
  6 & \bigg\vert\enspace \neg Q && Rei, 2\\
  7 & \neg P && I\neg, (3, (5, 6))
\end{array}
$$

:::

:::tip[Eliminação da Negação]

Afirma que negar uma proposição duas vezes é o mesmo que a afirmar. Abreviada por
$E\neg, n$, onde $n$ é a linha onde apareceu a _fbf_ duplamente negada.

A eliminação da negação tem sempre um aspeto deste género:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \neg\neg\alpha\\
  \vdots & \vdots\\
  m & \alpha && E\neg, n
\end{array}
$$

:::

:::details[Exemplo - Eliminação da Negação]

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \bigg\vert\underline{\enspace P \wedge \neg P \enspace} && Hip\\
  2 & \bigg\vert\enspace\bigg\vert\underline{\enspace \neg Q \enspace} && Hip\\
  3 & \bigg\vert\enspace\bigg\vert\enspace P \wedge \neg P && Rei, 1\\
  4 & \bigg\vert\enspace\bigg\vert\enspace P && E\wedge, 3\\
  5 & \bigg\vert\enspace\bigg\vert\enspace \neg P && E\wedge, 3\\
  6 & \bigg\vert\enspace \neg\neg Q && I\neg, (2, (4, 5))\\
  7 & \bigg\vert\enspace Q && E\neg, 6\\
  8 & (P \wedge \neg P) \to Q && I\to, (1,7)
\end{array}
$$

:::

#### Regras para a disjunção

:::tip[Introdução da Disjunção]

Tem em conta o significado intuitivo de uma disjunção - esta apenas requer que um
dos elementos se verifique para ser verdadeira. Assim sendo, partindo de uma _fbf_
$\alpha$, podemos derivar tanto $\alpha\vee\beta$ como $\beta\vee\alpha$, sendo
$\beta$ qualquer _fbf_. Abreviada por $I\vee, n$, com $n$ sendo a linha onde a
_fbf_ $\alpha$ foi introduzida.

A introdução da disjunção tem sempre um aspeto deste género:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha\\
  \vdots & \vdots\\
  m & \alpha\vee\beta && I\vee, n
\end{array}
$$

ou

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha\\
  \vdots & \vdots\\
  m & \beta\vee\alpha && I\vee, n
\end{array}
$$

:::

:::details[Exemplo - Introdução da Disjunção]

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \bigg\vert\underline{\enspace \neg (P \vee \neg P) \enspace} && Hip\\
  2 & \bigg\vert\enspace\bigg\vert\underline{\enspace P \enspace} && Hip\\
  3 & \bigg\vert\enspace\bigg\vert\enspace P \vee \neg P && I\vee, 2\\
  4 & \bigg\vert\enspace\bigg\vert\enspace \neg (P \vee \neg P) && Rei, 1\\
  5 & \bigg\vert\enspace \neg P && I\neg, (2, (3, 4))\\
  6 & \bigg\vert\enspace P \vee \neg P && I\vee, 5\\
  7 & \bigg\vert\enspace \neg (P \vee \neg P) && Rep, 1\\
  8 & \neg\neg (P \vee \neg P) && I\neg, (1, (6, 7))\\
  9 & P \vee \neg P && E\neg, 8
\end{array}
$$

:::

:::tip[Eliminação da Disjunção]

"A regra mais complicada", segundo o prof. Pavão Martins. A partir dela, podemos
retirar que, tendo por base uma _fbf_ do tipo $\alpha\vee\beta$, caso sejamos capazes
de derivar uma terceira _fbf_ $\gamma$ a partir de provas hipotéticas iniciadas por
tanto $\alpha$ como por $\beta$, então certamente que $\gamma$ se verifica - voltando
à tal intuição associada à disjunção, se pelo menos um elemento é verdadeiro [**e**](color:orange)
podemos derivar uma _fbf_ tanto de um como de outro, então podemos garantidamente derivar
$\gamma$ de uma _fbf_ verdadeira, pelo que $\gamma$ verificar-se-á.

Abreviada por $E\vee, (n, (o, p), (r, s))$, onde $n$ representa a _fbf_ disjunta inicial,
$o$ e $r$ o início de cada hipótese e $p$ e $s$ a derivação da _fbf_ pretendida,
dentro da respetiva hipótese. A eliminação da disjunção tem sempre um aspeto deste género:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  n & \alpha\vee\beta\\
  o & \bigg\vert\underline{\enspace \alpha \enspace} && Hip\\
  \vdots & \bigg\vert\enspace\vdots\\
  p & \bigg\vert\enspace\gamma\\ \\
  r & \bigg\vert\underline{\enspace \beta \enspace} && Hip\\
  \vdots & \bigg\vert\enspace\vdots\\
  s & \bigg\vert\enspace\gamma\\
  \vdots & \vdots\\
  m & \gamma && E\vee, (n, (o, p), (r, s))
\end{array}
$$

:::

:::details[Exemplo - Eliminação da Disjunção]

Em relação a um exemplo mais concreto:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \bigg\vert\underline{\enspace (P \vee Q) \wedge \neg P \enspace} && Hip\\
  2 & \bigg\vert\enspace P \vee Q && E\wedge, 1\\
  3 & \bigg\vert\enspace \neg P && E\wedge, 1\\
  4 & \bigg\vert\enspace\bigg\vert\underline{\enspace P \enspace} && Hip\\
  5 & \bigg\vert\enspace\bigg\vert\enspace\bigg\vert\underline{\enspace \neg Q \enspace} && Hip\\
  6 & \bigg\vert\enspace\bigg\vert\enspace\bigg\vert\enspace P && Rei, 4\\
  7 & \bigg\vert\enspace\bigg\vert\enspace\bigg\vert\enspace \neg P && Rei, 3\\
  8 & \bigg\vert\enspace\bigg\vert\enspace \neg\neg Q && I\neg, (5, (6, 7))\\
  9 & \bigg\vert\enspace\bigg\vert\enspace Q && E\neg, 8 \\ & \bigg\vert \\
  10 & \bigg\vert\enspace\bigg\vert\underline{\enspace Q \enspace} && Hip\\
  11 & \bigg\vert\enspace\bigg\vert\enspace Q && Rep, 10\\
  12 & \bigg\vert\enspace Q && E\vee, (2, (4, 9), (10, 11))\\
  13 & ((P \vee Q) \wedge \neg P) \to Q && I\to, (1, 12)
\end{array}
$$

:::

---

Ora, estudámos agora as regras de inferência, e o modo como podemos provar (a partir
de um conjunto de premissas) uma dada _fbf_. Não abordámos, contudo, exemplos onde
não existem premissas - como é que devemos proceder nessas situações?
Bem, nem todas as provas têm de se iniciar com um conjunto de premissas: as _fbfs_
que se podem provar sem estes "pré-requisitos" dizem-se [**teoremas**](color:orange).

:::tip[Teorema]

Corresponde a uma _fbf_ que pode ser obtida a partir de uma prova que não contém
qualquer premissa, pode ser obtida "do nada". Seja $\alpha$ um teorema, podemos
escrever $\varnothing\vdash\alpha$ ou, até, de um modo mais simples, $\vdash\alpha$.

:::

A seguinte prova mostra que $P \to (Q \to P)$ é um teorema, visto que pode ser obtido sem premissas:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \bigg\vert\underline{\enspace P \enspace} && Hip\\
  2 & \bigg\vert\enspace\bigg\vert\underline{\enspace Q \enspace} && Hip\\
  3 & \bigg\vert\enspace\bigg\vert\enspace P && Rei, 1\\
  4 & \bigg\vert\enspace Q \to P && I\to, (2,3)\\
  5 & P \to (Q \to P) && I\to, (1, 4)
\end{array}
$$
