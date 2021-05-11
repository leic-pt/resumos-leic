---
description: Lógica de Primeira Ordem - Sistema Semântico, Conceptualização, Atribuição, Satusfação, Conceitos relacionados a fórmulas, Correção e Completude
---

# Lógica de Primeira Ordem - Sistema Semântico/Correção e Completude

[[toc]]

O propósito do sistema semântico é especificar em que condições as _fbfs_ de uma linguagem são verdadeiras ou falsas. Para tal, é necessário interpretar cada um dos seus símbolos de proposição, de forma a poder atribuir um valor lógico a cada um e, posteriormente, dar um significado à _fbf_. Por fim, verificar se o significado a que chegamos está de acordo com a situação que pretendemos descrever - se sim, a _fbf_ é verdadeira, caso contrário é falsa.

Este processo, contudo, precisa de ser formalizado para o podermos utilizar num sistema lógico - não podemos fazer inferências exclusivamente a partir da língua natural nem de figuras. Temos de definir **formalmente** como determinar se uma _fbf_ é verdadeira ou falsa. 

O primeiro passo passa por descrever um mundo ou situação através de uma **conceptualização**.

::: tip CONCEPTUALIZAÇÃO

Uma conceptualização é um triplo $(D, F, R)$, onde:

- $D$ é o conjunto de entidades que constituem o mundo sobre o qual vamos falar. Podem ser concretas (planetas, pessoas, ...), abstratas (conceitos como arte, beleza, ...) ou ficcionais (personagens, por ex.). **Só nos podemos referir a essas entidades** no nosso discurso;

- $F$ é o conjunto das funções que podemos aplicar a essas entidades; as funções podem ser parciais, não estando definidas para todas as entidades do universo de discurso;

- $R$ é o conjunto de relações/predicados que podemos aplicar a essas entidades.

O objetivo da conceptualização é **descrever formalmente o mundo**. Não existe uma única conceptualização para o mesmo mundo, escolhemo-la consoante os aspetos relevantes para a aplicação em causa.

:::

::: details Exemplo - Conceptualização

<!-- work in progress -->

:::

Podemos, então, passar ao conceito de **interpretação**

Uma interpretação é uma função, $I$, cujo domínio é a linguagem utilizada, com contradomínio $D \cup F \cup R$, cujo objetivo é definir, para cada _fbf_, o que é que significa dizer que "essa _fbf_ é verdadeira/satisfeita na conceptualização tratada". A ideia passa por afirmar que a _fbf_ é verdadeira numa conceptualização se o que afirma sobre os elementos de $D$ se verifica realmente. O problema vem com a introdução de variáveis livres.

