---
prev: false
description: Proposições, argumentos, premissas, conclusão, validade de um argumento, princípio da irrelevância do valor lógico, forma de um argumento. Metodologia da lógica. Introdução a Lógica Proposicional.
---

# Conceitos Gerais

[[toc]]

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

| Valores lógicos das premissas e da conclusão | Argumento válido                                                                           | Argumento Inválido                                                |
| :------------------------------------------: | :----------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
|           (Verdadeiro, Verdadeiro)           | Todos os homens são mortais. <br>Sócrates é um homem. <br>∴ Sócrates é mortal.             | Todas as pessoas são humanos. <br>∴ Todos os humanos são pessoas. |
|             (Verdadeiro, Falso)              | (Não existe)                                                                               | Todos os cães são animais. <br>∴ Todos os animais são cães.       |
|             (Falso, Verdadeiro)              | Todas as aves são humanos. <br> Todos os humanos têm penas. <br>∴ Todas as aves têm penas. | Todos os animais são cães. <br>∴ Todos os cães são animais.       |
|                (Falso, Falso)                | Todos os cães são felinos. <br>Todos os felinos têm penas. <br>∴ Todos os cães têm penas.  | Todos os gatos são cães. <br>∴ Todos os cães são gatos.           |

:::

- **Princípio da Irrelevância do Valor Lógico** - A veracidade das proposições é irrelevante para determinar a validade de um argumento, exceto quando as premissas são verdadeiras e a conclusão falsa.

Temos que uma proposição pode conter **termos lógicos** ("e", "ou", "então", ...) e **termos específicos de um domínio** ("humanos", cão, ...). Esta última noção é particularmente importante ao falar da _forma de um argumento_.

- **Forma de um argumento** - argumento em que os termos específicos de cada uma das proposições que o constituem são substituídos por um símbolo associado à sua _categoria gramatical_.

::: details Exemplo - Forma de um Argumento

O argumento:

O Benfica está fora da Champions.  
Quem está fora da Champions não recebe muito dinheiro.  
∴ O Benfica não recebe muito dinheiro.

é da forma:

O $\boxed A$ está $\boxed B$ .  
Quem $\boxed B$ não $\boxed C$ .  
∴ O $\boxed A$ não $\boxed C$ .

**Vários argumentos podem ter a mesma forma**.

:::

- **Princípio da forma** - se dois argumentos têm a mesma forma, partilham a sua validade.

Associada a este princípio está a noção de **contra-argumento**. Um argumento é um contra-argumento a outro caso seja inválido e partilhe a forma do argumento que pretende contra-argumentar.

### Correção e Completude

Uma dada lógica é **correta** caso qualquer argumento demonstrável segundo a mesma seja válido de acordo com a sua semântica. É **completa** quando qualquer argumento válido de acordo com a semântica é demonstrável. Os sistemas dedutivo e semântico estão, portanto, intrinsecamente ligados nestas noções. As noções de correção e completude não são propriedades dos sistemas, mas sim uma relação entre eles.  
Numa lógica simultaneamente _correta_ e _completa_ os argumentos demonstráveis são exatamente os mesmos que os válidos.

### Metodologia da Lógica

Dado um qualquer argumento, o primeiro passo para inferir a sua validade é lançar um _palpite_ sobre a mesma, quer seja considerar que é válido como inválido.
A partir daí, procurar provar o argumento (demonstrando que é impossível que as premissas sejam verdadeiras e a conclusão falsa), no caso de o nosso palpite ser que o argumento é válido, ou encontrar um contra-argumento (que prove precisamente o oposto), caso consideremos que o argumento é inválido.
Caso encontremos uma prova, o argumento é **sabido válido**.
Por outro lado, caso encontremos um contra-argumento, é **sabido inválido**.
Existe, ainda, uma terceira possibilidade - a de não encontrar nem um nem outro.
Aqui, procuramos mudar o nosso palpite para o inverso, e tentar provar esse novo palpite.
Caso esta tentativa também não tenha sucesso, a validade do argumento diz-se **desconhecida**.

[Slides (até ao slide 23)](https://drive.google.com/file/d/10a-hns-uHSTWy8isSQwJfEOKxq955DM_/view?usp=sharing)
