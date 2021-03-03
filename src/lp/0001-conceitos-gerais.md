# Aula 1 - Conceitos Gerais

O objetivo da UC é fornecer conhecimento sobre o que é uma lógica - quais os seus componentes, como desenvolver provas no sistema dedutivo, como utilizar o sistema semântico e como relacionar estes dois últimos. Iremos ainda perceber os conceitos subjacentes ao raciocínio automático e programar com o paradigma da programação em lógica (em _Prolog_).

## Conceitos Básicos

A lógica estuda métodos para distinguir a validade dos argumentos. Lida com **frases declarativas**, frases que fazem uma afirmação, verdadeira ou falsa.

- **Proposição** - frase declarativa à qual podemos associar um valor lógico. Qualquer proposição é verdadeira ou falsa.

- **Argumento** - par composto por um conjunto de proposições, as **premissas**, e por uma proposição particular, a **conclusão**. Podem ser válidos, inválidos, ou sem validade conhecida.

::: details Exemplo - Argumento

Todos os homens são mortais.  
Sócrates é um homem.  
∴ Sócrates é mortal.  
::: tip
O símbolo "∴" lê-se "logo".  
:::

- **Validade** - um argumento é válido caso seja _impossível_ que as premissas sejam verdadeiras e a conclusão falsa. Um argumento válido é um argumento onde as premissas implicam semanticamente a conclusão.

É importante não confundir veracidade com validade - a veracidade está associada às proposições, enquanto que a validade está associada aos argumentos.

:::details Exemplos - Validade de Argumentos

---

| Valores lógicos das premissas e da conclusão |                                      Argumento válido                                      |                        Argumento Inválido                         |
| :------------------------------------------: | :----------------------------------------------------------------------------------------: | :---------------------------------------------------------------: |
|           (Verdadeiro, Verdadeiro)           |       Todos os homens são mortais. <br>Sócrates é um homem. <br>∴ Sócrates é mortal.       | Todas as pessoas são humanos. <br>∴ Todos os humanos são pessoas. |
|             (Verdadeiro, Falso)              |                                        (Não existe)                                        |    Todos os cães são animais. <br>∴ Todos os animais são cães.    |
|             (Falso, Verdadeiro)              | Todas as aves são humanos. <br> Todos os humanos têm penas. <br>∴ Todas as aves têm penas. |    Todos os animais são cães. <br>∴ Todos os cães são animais.    |
|                (Falso, Falso)                | Todos os cães são felinos. <br>Todos os felinos têm penas. <br>∴ Todos os cães têm penas.  |      Todos os gatos são cães. <br>∴ Todos os cães são gatos.      |

:::

- **Princípio da Irrelevância do Valor Lógico** - A veracidade das proposições é irrelevante para determinar a validade de um argumento, exceto quando as premissas são verdadeiras e a conclusão falsa.

Temos que uma proposição pode conter **termos lógicos** ("e", "ou", "então",...) e **termos específicos de um domínio** ("humanos", cão,...). Esta última noção é particularmente importante ao falar da _forma de um argumento_.

- **Forma de um argumento** - argumento em que os termos específicos de cada uma das proposições que o constituem são substituídos por um símbolo associado à sua _categoria gramatical_.

::: details Exemplo - Forma de um Argumento

O argumento:

O Benfica está fora da Champions.  
Quem está fora da Champions não recebe muito dinheiro. <br>
∴ O Benfica não recebe muito dinheiro.

é da forma:

O $\boxed A$ está $\boxed B$ . <br>
Quem $\boxed B$ não $\boxed C$ . <br>
∴ O $\boxed A$ não $\boxed C$ .

**Vários argumentos podem ter a mesma forma**.

:::

- **Princípio da forma** - se dois argumentos têm a mesma forma, partilham a sua validade.

### Metodologia da Lógica

Dado um qualquer argumento, o primeiro passo para inferir a sua validade é lançar um _palpite_ sobre a mesma, quer seja considerar que é válido como inválido. A partir daí, procurar provar o argumento (demonstrando que é impossível que as premissas sejam verdadeiras e a conclusão falsa), no caso de o nosso palpite ser que o argumento é válido, ou encontrar um contra-argumento (que prove precisamente o oposto), caso consideremos que o argumento é inválido. Caso encontremos uma prova, o argumento é **sabido válido**. Por outro lado, caso encontremos um contra-argumento, é **sabido inválido**. Existe, ainda, uma terceira possibilidade - a de não encontrar nem um nem outro. Aqui, procuramos mudar o nosso palpite para o inverso, e tentar provar esse novo palpite. Caso esta tentativa também não tenha sucesso, a validade do argumento diz-se **desconhecida**.

## Lógica Proposicional - Introdução

Apresenta uma linguagem muito simples, sendo que o nível mais elementar é o **símbolo de proposição** - uma proposição pode ser representada por uma letra do alfabeto latino.

### Símbolos Lógicos

- Símbolos de pontuação: ( )

- Símbolos lógicos: $\neg$, que corresponde à **negação**; $\wedge$, que corresponde à conjunção; $\vee$, que corresponde à disjunção inclusiva, vulgo OR; $\to$, que corresponde à implicação.

- Símbolos de proposição - $P_{i}$, $i \geq 1$. O conjunto de todas as proposições da lógica proposicional é dado por $\mathcal{P}$.

### Componentes de uma Lógica

- **Fórmula bem formada (_fbf_)** - qualquer lógica tem uma linguagem, linguagem esta composta por um conjunto de frases válidas. A essas frases dá-se o nome de _fórmulas bem formadas_, ou _fbfs_. Em relação a estas, temos que: os símbolos de proposição são chamados _fbfs atómicas_, que se $\alpha$ é uma _fbf_ então $\neg\alpha$ é uma _fbf_ e que qualquer combinação de _fbfs_ atómicas utilizando os símbolos lógicos acima mencionados também é uma _fbf_.

::: details Exemplo - Fórmula bem formada
$\neg$P  
P $\wedge$ Q  
(P $\wedge$ Q) $\to$ R

:::

A linguagem da lógica proposicional, $\mathcal{L}_{LP}$, é composta por todas as _fbfs_ construídas a partir do conjunto dos símbolos lógicos acima referidos.

- **Argumento** - par ($\Delta, \alpha$), no qual $\Delta$ é um conjunto de frases da linguagem e $\alpha$ é uma frase da linguagem.

### Sistema Dedutivo

Especifica as **regras de inferência**, regras que permitem a manipulação de _fbfs_ e a introdução de novas _fbfs_ a partir de _fbfs_ existentes.

- **Deducão Natural:**

Nos sistemas abordados por dedução natural existem por norma duas regras de inferência por cada símbolo lógico - a **regra de introdução**, que diz como introduzir uma _fbf_ que utiliza um dado símbolo lógico, e a **regra de eliminação**, que diz como usar uma _fbf_ que contém o símbolo lógico.

Aqui, não existem _axiomas_ - _fbfs_ que se aceitam como verdadeiras.

- Prova - sequência finita de linhas numeradas, cada uma das quais contendo uma premissa ou uma _fbf_ que é adicionada à prova recorrendo a uma das regras de inferência e utilizando as _fbfs_ das linhas anteriores. Em cada linha da prova existe uma justificação da introdução da mesma. Uma **prova de $\alpha$ a partir de $\Delta$** é uma prova cuja última linha contém $\alpha$ e cujas restantes linhas contêm ou uma _fbf_ em $\Delta$ ou uma _fbf_ obtida a partir das linhas anteriores recorrendo a uma regra de inferência. Caso exista uma prova de $\alpha$ a partir de $\Delta$, dizemos que ** $\alpha$ é **derivável\*\* a partir de $\Delta$.
