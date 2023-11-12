---
title: Lógica Proposicional aplicada a sistemas computacionais
description: >-
  Lógica Proposicional aplicada a sistemas computacionais.
  Resolução e Princípio da Resolução.
  Estratégias em resolução.
path: /lp/logica-proposicional-ii
type: content
---

# Lógica Proposicional aplicada a sistemas computacionais

```toc

```

Voltamos a considerar a lógica proposicional, desta vez feita sob a perspetiva
da sua utilização por sistemas computacionais, não por humanos.
A geração automática de provas utilizando sistemas de dedução natural não é fácil,
pelo que foram desenvolvidos métodos para a automatização da geração de provas.
Um deles é a [**resolução**](color:orange), conceito que vai acompanhar-nos durante
boa parte da cadeira.

## Resolução

Corresponde a uma abordagem ao sistema dedutivo baseada numa única regra de inferência:
o [**princípio da resolução**](color:green). A utilização
deste princípio obriga à transformação das _fbfs_ numa forma especial, a _forma clausal_,
que corresponde a uma **conjunção de cláusulas**.

### Forma clausal

- **Literal** - uma _fbf_ atómica ou (a sua negação) diz-se [**um literal**](color:blue). Um
  literal positivo é uma _fbf_ atómica não negada, correspondendo um negativo a uma _fbf_
  negada. Note-se que uma _fbf_ atómica corresponde a uma _fbf_ composta
  por um símbolo de proposição, [**não contendo quaisquer conectores lógicos**](color:red).

- **Cláusula** - um literal/[**disjunção**](color:orange) de literais. Caso consista em apenas um literal,
  dizemos que se trata de uma cláusula **_unitária_**. Pode ainda ser representada
  como um conjunto de literais, através do uso de chavetas.

:::details[Exemplo - Literais + cláusulas]

Sendo $P$ e $Q$ símbolos de proposição, $P$ e $\neg Q$ são literais (positivo e negativo,
respetivamente); $P$, $P\vee Q$, $\neg P\vee Q$ e $\neg Q$ são cláusulas, sendo
que a primeira e a última são cláusulas unitárias.

A cláusula unitária $P$ pode ser representada como um conjunto: $\{P\}$, por exemplo.
A cláusula $P\vee Q$ pode ser representada como um conjunto, $\{P, Q\}$.

:::

Uma _fbf_ diz-se na **forma conjuntiva normal** caso seja da forma
$\alpha\wedge\beta\wedge\dots\wedge\gamma$, onde $\alpha, \beta,\dots,\gamma$
são obrigatoriamente cláusulas, unitárias ou não.

:::details[Exemplo - Forma conjuntiva normal]

A _fbf_ $(P\vee\neg Q\vee R)\wedge(\neg P\vee S)$ está na forma conjuntiva normal.
A mesma _fbf_ pode ser representada como um conjunto tal que $\{\{P, \neg Q, R\}, \{\neg P, S\}\}$.

:::

### Transformação de uma _fbf_ em forma clausal

As _fbfs_ podem, contudo, não nos ser apresentadas inicialmente nesta forma de disjunção
de literais. É, portanto, importante ter e usar algoritmos e estratégias que nos
permitam passar _fbfs_ para o seu equivalente na forma clausal.

#### Passos para a transformação de uma _fbf_ em forma clausal

:::tip[Eliminar o símbolo $\to$]

Passo baseado na equivalência ($\alpha\to\beta$) $\leftrightarrow$ ($\neg\alpha\vee\beta$).

:::

Partindo de $P \to \neg(Q \vee ((R \wedge S) \to P))$, vamos tentar remover
uma implicação de cada vez:

$$
\neg P \vee \neg(Q \vee ((R \wedge S) \to P))\\
\neg P \vee \neg(Q \vee (\neg(R \wedge S) \vee P))
$$

:::tip[Reduzir o domínio do símbolo $\neg$]

Em forma clausal, nunca queremos que a forma final $\neg$ envolva a cláusula toda;
por outro lado, não há qualquer problema em negar literais, pelo que aproveitamo-nos
disso através de algumas regras úteis.

:::

- **Lei da Dupla Negação**:

  $$
  \neg\neg\alpha \leftrightarrow \alpha
  $$

- **Primeiras Leis de De Morgan**:

$$
\neg(\alpha\vee\beta) \leftrightarrow (\neg\alpha\wedge\neg\beta)\\
\neg(\alpha\wedge\beta) \leftrightarrow (\neg\alpha\vee\neg\beta)
$$

Partindo de $\neg P \vee \neg(Q \wedge \neg(\neg(R \wedge S) \vee P))$,
vamos primeiro procurar aplicar as leis de De Morgan:

$$
\neg P \vee \neg(Q \wedge (\neg\neg(R \wedge S) \wedge \neg P))
$$

De seguida, aplicar a lei da dupla negação:

$$
\neg P \vee \neg(Q \wedge ((R \wedge S) \wedge \neg P))
$$

:::tip[Obtenção da forma conjuntiva normal]

Baseia-se na equivalência $\alpha\vee(\beta\wedge\gamma)\leftrightarrow(\alpha\vee\beta)\wedge(\alpha\vee\gamma)$
para tornar disjunções em conjunções de disjunções, que estão na forma conjuntiva normal.

:::

Partindo de $(\neg P \vee \neg Q) \wedge (\neg P \vee ((R \wedge S) \wedge P))$:

$$
(\neg P \vee \neg Q) \wedge (\neg P \vee (R \wedge S)) \wedge (\neg P \vee P)\\
(\neg P \vee \neg Q) \wedge (\neg P \vee R) \wedge (\neg P \vee S) \wedge (\neg P \vee P)
$$

:::tip[Eliminar o símbolo $\wedge$]

Vamos, aqui, transformar a _fbf_ já na forma conjuntiva normal num conjunto de cláusulas.

:::

Partindo de $(\neg P \vee \neg Q) \wedge (\neg P \vee R) \wedge (\neg P \vee S) \wedge (\neg P \vee \neg P)$:

$$
\{\neg P \vee \neg Q, \neg P \vee R, \neg P \vee S, \neg P \vee \neg P\}
$$

:::tip[Eliminar o símbolo $\vee$]

Transformar cada cláusula num conjunto de literais.
Note-se que, tal como referido mais acima, cláusulas correspondem a literais
**ou a disjunções de literais**! Um conjunto de cláusulas poderá corresponder,
portanto, a uma conjunção de disjunções.

:::

Partindo de $\{\neg P \vee \neg Q, \neg P \vee R, \neg P \vee S, \neg P \vee \neg P\}$:

$$
\{\{\neg P, \neg Q\}, \{\neg P, R\}, \{\neg P, S\}, \{\neg P\}\}
$$

---

O princípio da resolução é, portanto, uma **regra de inferência derivada** que
é aplicável a cláusulas, gerando novas cláusulas.

:::info[Princípio da Resolução]

Sejam $\Psi$ e $\Phi$ duas cláusulas e $\alpha$ uma _fbf_ atómica, tal que $\alpha \in \Psi$
e $\neg\alpha \in \Phi$. Nesse caso, é possível inferir a cláusula
$(\Psi - \{\alpha\}) \cup (\Phi - \{\neg\alpha\})$.
A cláusula obtida diz-se o _resolvente_ das cláusulas $\Psi$ e $\Phi$, representado
por **Res($\Psi, \Phi$)**, as quais são designadas **cláusulas-mãe**.
Os literais $\alpha$ e $\neg\alpha$ designam-se [**literais em conflito**](color:red).

:::

Na teoria parece bastante mais confuso do que na prática, e o exemplo abaixo pretende desmistificar
qualquer dificuldade que possa aparecer associada a este princípio.

:::details[Exemplos - Princípio da resolução]

Considerando as cláusulas $\{\neg P, Q, S\}$ e $\{P, \neg Q\}$:

- O seu [**resolvente-P**](color:orange) é $\{Q, S, \neg Q\}$. Vamos, aqui, remover
  os literais $P$ e $\neg P$ em conflito.
- O seu [**resolvente-Q**](color:orange) é $\{\neg P, S, P\}$. Nesta situação, vamos
  procurar remover os literais $Q$ e $\neg Q$ em conflito.

---

Usando resolução, e procurando provar que $\{P, P \to Q\} \vdash Q$:

- Passamos primeiro à forma clausal: $\{P\}$, $\{\neg P, Q\}$ e $\{Q\}$;
- Aplicamos a resolução:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \{P\} && Prem\\
  2 & \{\neg P, Q\} && Prem\\
  3 & \{Q\} && Res(1, 2)
\end{array}
$$

---

Podemos ainda realizar resoluções mais extensas, como $\{\{\neg P, Q\}, \{\neg P, \neg Q\}, \{P\}\} \vdash \{\}$:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \{\neg P, Q\} && Prem\\
  2 & \{\neg P, \neg Q\} && Prem\\
  3 & \{P\} && Prem\\
  4 & \{Q\} && Res(1, 3)\\
  5 & \{\neg Q\} && Res(2, 3)\\
  6 & \{\} && Res(4, 5)
\end{array}
$$

[**Derivar a cláusula vazia corresponde à existência de uma contradição na nossa prova.**](color:red)
A prova torna-se, portanto, falsa, e o oposto é agora verdade. Neste caso, o oposto
corresponde a dizer que não podemos derivar a cláusula vazia partindo de
$\{\{\neg P, Q\}, \{\neg P, \neg Q\}, \{P\}\}$.

:::

Normalmente, a resolução aplica-se a [**provas por absurdo**](color:yellow). Quando
realizamos provas por absurdo recorrendo à resolução, dizemos
que estamos na presença de [**provas por refutação**](color:green).

:::tip[Provas por refutação]

Uma prova por refutação a partir de um conjunto de cláusulas $\Delta$ corresponde a uma
prova por resolução de $\{\}$ a partir de $\Delta$.

O último exemplo exposto na secção anterior corresponde precisamente a uma prova por refutação!

:::

### Estratégias em Resolução

Numa prova por resolução, a decisão sobre quais as cláusulas a utilizar em cada
passo da prova deve ser tomada recorrendo a uma **estratégia de resolução**.

#### Geração por saturação de níveis

Consiste em separar as cláusulas geradas em vários níveis, cada um dos quais
utiliza pelo menos uma das cláusulas existentes no nível anterior, procurando gerar todas
as cláusulas de um nível antes de começar a gerar as do próximo nível.

Posto de forma mais formal, partindo de um conjunto de cláusulas inicial $\Delta$,
vamos criar o conjunto seguinte de todos os resolventes possíveis $\Delta_{1}$, e
repetindo até gerar ou o objetivo ou a cláusula vazia.

Tem um ponto [**positivo**](color:green) bastante forte: **garante** encontrar uma solução, se
esta existir, e essa solução corresponderá ao menor número de aplicações do
princípio da resolução possível. [**Contudo**](color:green), acaba por gerar
muitas cláusulas que acabam por ser inúteis para a prova - no caso de provas
particularmente extensas (fora do âmbito de qualquer coisa que alguma vez
fôssemos tentar fazer à mão em LP) o _trade-off_ pode não fazer sentido.

:::details[Exemplo - Geração por saturação de níveis]

![Geração por saturação de níveis](./assets/0003-res-sat-niveis1.svg#dark=2)

:::

Para aumentar ainda mais a eficiência da geração de provas por resolução, foram desenvolvidas
estratégias que se dividem em estratégias de **eliminação** e de **seleção** de cláusulas.

#### Estratégias de Eliminação de Cláusulas

O objetivo, aqui, vai ser eliminar **teoremas, cláusulas não mínimas (ou subordinadas) e literais puros**.

:::tip[Eliminação de Teoremas]

Corresponde à eliminação das cláusulas que contenham tanto $\alpha$ como $\neg\alpha$.
Para quaisquer _fbfs_ $\alpha$ e $\beta$, ter $(\alpha \vee \neg\alpha) \vee \beta$
corresponde a ter um teorema. Ora, um teorema não afetará o resultado final: basta
pensar que a conjunção de qualquer coisa com algo que vai ser sempre verdade
depende sempre do valor dessa coisa, e nunca do que é sempre verdade.

Posto de forma formal, eliminamos teoremas porque:

$$
\Delta \cup {\tau} \vdash \gamma \implies \Delta \vdash \gamma
$$

:::

Antes de abordar a eliminação de cláusulas não mínimas, interessa olhar para a
definição de _subordinação_. Uma cláusula $\Psi$ subordina $\Phi$ caso $\Psi$ $\subseteq$ $\Phi$.

:::tip[Eliminação de cláusulas não mínimas]

Dado um conjunto de cláusulas, podemos eliminar todas as cláusulas subordinadas/não
mínimas por uma outra cláusula existente no conjunto.

:::

:::details[Exemplo - Eliminar teoremas/cláusulas não mínimas]

Considerando as cláusulas $\{\{\neg P, \neg Q, R\}, \{\neg P, \neg Q, Q\}, \{\neg P,\neg Q\}\}$,
podemos aplicar a eliminação de teoremas e ficar com $\{\{\neg P, \neg Q, R\}, \{\neg P, \neg Q\}\}$:
ter $Q$ e $\neg Q$ na mesma cláusula é inconclusivo, não ficamos a saber nada
sobre a mesma, já que será sempre verdadeira.

Posteriormente, podíamos ainda eliminar cláusulas não mínimas, ficando apenas com
$\{\{\neg P, \neg Q\}\}$. Esta eliminação segue a lógica de: se temos $\neg P \vee \neg Q$,
será irrelevante ter $\neg P \vee \neg Q \vee R$, porque temos "mais informação"
sobre os valores lógicos associados a literais concretos em cláusulas mais pequenas:
dizemos que é mais simples tentar descobrir qual dos literais em $A \vee B$ tem
valor lógico verdadeiro do que tentar descobrir o mesmo numa cláusula com $20$ literais
que também os inclua.

:::

Para olhar para a eliminação de _literais puros_, temos primeiro de definir
**literal puro** - um literal diz-se puro quando apenas o próprio literal (ou
apenas a sua negação) aparece num dado conjunto de cláusulas. Dado o conjunto de
cláusulas $\{\{P, Q, \neg R\}, \{P, \neg Q, \neg R\}\}$, $P$ e $R$ são literais puros.

Ora, se um literal é puro, não nos será útil durante provas por refutação, visto
que não o poderemos eliminar por resolução. Assim sendo, podemos remover as cláusulas que o contêm.

:::tip[Eliminação de Literais Puros]

Podemos remover todas as cláusulas que contenham literais puros. Esta estratégia
é, ao contrário das últimas duas, realizada apenas uma vez, **no início da prova por refutação**.

:::

#### Estratégias de Seleção de cláusulas

Processo que pretende controlar as cláusulas geradas numa prova por resolução,
impondo restrições às cláusulas que podem ser candidatas à aplicação do princípio
da resolução. Aqui, consideramos as resoluções **unitária** e **linear**.

:::tip[Resolução unitária]

Baseia-se no facto de que, quando utilizamos a resolução, tentamos por norma diminuir o
número de literais existentes nas cláusulas produzidas (mais evidente em provas
por refutação, onde tentamos chegar à cláusula vazia). Se uma das cláusulas envolvidas
numa aplicação do princípio da resolução apenas contiver um literal, uma _cláusula unitária_,
é então garantido que o resolvente tem menos literais do que a cláusula mãe com maior
número de literais. Esta estratégia consiste, portanto, em aplicar o princípio da
resolução utilizando sempre pelo menos uma cláusula unitária. **Nem todas as
proposições válidas podem ser provadas desta maneira**, visto que nem sempre
estamos na presença de cláusulas unitárias. Não é, portanto, um processo de inferência **completo**.

:::

A prova abaixo corresponde a uma aplicação de resolução unitária:

$$
\def\arraystretch{1.5}
\begin{array}{lll}
  1 & \{\neg P, \neg Q\} && Prem\\
  2 & \{\neg P, \neg Q\} && Prem\\
  3 & \{Q\} && Prem\\
  4 & \{P\} && Res(1, 3)\\
  5 & \{\neg P\} && Res(2, 3)\\
  6 & \{\} && Res(4, 5)
\end{array}
$$

![Resolução unitária 2](./assets/0003-res-unitaria2.svg#dark=2)

:::tip[Resolução Linear]

Começamos por selecionar uma cláusula entre as premissas, a _cláusula inicial_,
obtendo um resolvente entre a cláusula inicial e outra qualquer pertencente às premissas.
A partir daí, sempre que se aplica o princípio da resolução utiliza-se o último sucessor
da cláusula inicial. Qualquer sucessor da cláusula inicial chama-se _cláusula central_.
Geralmente, como cláusula inicial, escolhemos a que corresponde à negação da cláusula
que pretendemos provar, usando portanto a prova por refutação. Nesta prova por
refutação, adicionaríamos a negação da conclusão ao conjunto de premissas, e
tentaríamos derivar $\{\}$.

:::

Para provar que $\{\{\neg P, Q\}, \{\neg Q, R\}, \{\neg R, S\}, \{P\}\} \vdash \{S\}$,
utilizando resolução linear, começamos por transformar a prova em
$\{\{\neg P, Q\}, \{ \neg Q, R\}, \{\neg R, S\}, \{P\}, \{\neg S\}\} \vdash \{ \}$.  
Uma vez que estamos a tentar provar $S$, utilizamos $\{\neg S\}$ como cláusula inicial.

![Resolução linear](./assets/0003-res-linear.svg#dark=1)

---

:::info[Correção e completude da resolução]

A resolução é correta mas não completa. Não é possível demonstrar todos os
argumentos válidos. Contudo, a resolução é completa no que à **refutação**
diz respeito, visto que podemos sempre derivar a cláusula vazia caso o conjunto
inicial de cláusulas seja insatisfazível.

É normal, assim, que em contexto de avaliação o enunciado refira que é suposto
realizar sempre provas por refutação.

:::
