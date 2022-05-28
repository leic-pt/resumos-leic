---
title: Problemas de Satisfação de Restrições
description: # TODO
path: /ia/satisfacao-restricoes
type: content
---

# Problemas de Satisfação de Restrições

```toc

```

Até agora, abordámos dois estilos de procura distintos: as procuras **cega** e **informada**.
Ambas as abordagens partilham uma base entre si: a ideia do estado ser algo atómico,
possuindo apenas as funções de avaliação e de sucessores, e podendo responder a um
teste objetivo, contudo sem uma _estrutura interna_ adicional. Ora, esta parece ser uma
falha relativamente relevante nas abordagens anteriores, já que um estado pode potencialmente
armazenar pormenores bastante importantes para a (re)solução do problema: se pegarmos
no problema das 8 rainhas, o estado em si pode até guardar as linhas e colunas das peças
colocadas no tabuleiro, por exemplo.

Nesta secção, vamos então aprofundar esta ideia de estados não atómicos, com conteúdo
no seu interior, um **conjunto de variáveis**: dizemos que chegámos a uma solução
para o problema proposto quando todas as variáveis estiverem associadas a valores que
satisfaçam as restrições impostas pelo mesmo. Dizemos que os problemas resolvidos desta
forma são [**Problemas de Satisfação de Restrições**](color:orange) (do inglês
[**_Constraint Satisfaction Problems_**](color:orange), CSP). Idealmente, algoritmos
de procura que assentem nesta ideia irão progressivamente eliminando ramos da nossa
árvore de procura, tornando-a assim mais eficiente.

## Definir CSPs

:::info[CSP]

Podemos definir um CSP como um conjunto de três componentes:

- um conjunto de variáveis: seja ele $X = \{X_1, X_2, \cdots, X_n\}$;
- um conjunto de domínios, onde um domínio corresponde ao conjunto de valores que podem ser
  associados a uma variável: seja ele $D = \{D_{x_1}, D_{x_2}, \cdots, D_{x_n}\}$;
- um conjunto de restrições, que especifica todas as combinações possíveis de valores
  que podemos ser associados às variáveis ao mesmo tempo numa solução correta:
  seja ele $C$.

Temos ainda que as restrições podem ser [**explícitas**](color:yellow), quando especificam diretamente
todas as combinações possíveis de valores que podem ser associados às variáveis, ou
[**implícitas**](color:green), quando o fazem através de expressões matemáticas ou equivalente.

Um exemplo relativamente simples é o de, num problema binário (ou seja, onde o
domínio é $\{0,1\}$ para duas variáveis $X_1$ e $X_2$), se quisermos que a solução
para o problema seja "estas duas variáveis têm de ter valores diferentes", podemos
fazê-lo de duas maneiras: uma, afirmando explicitamente que os pares de atribuições
possíveis são $\{0, 1\}$ e $\{1, 0\}$, e outra recorrendo a notação formal: $X_1 \neq X_2$.

Um estado será, portanto, definido como um conjunto de correspondências entre variáveis
e valores, correspondências essas que não deverão violar qualquer das restrições
impostas pelo problema. Estas correspondências, ou **atribuições**, podem ser **parciais**
ou **completas**, claro: uma atribuição diz-se completa caso todas as variáveis em $X$ tenham
um valor associado. Mais ainda, diz-se **consistente** caso todas as atribuições
respeitem respeitem o conjunto $C$. Dizemos que temos em mãos uma solução para o
CSP quando temos uma atribuição **completa e consistente**: não existem variáveis sem
atribuições, estando todas elas atribuídas de acordo com o que o problema nos impõe.

:::

---

Adicionamos que esta secção corresponde ao sexto capítulo do livro que acompanha a cadeira
(_Constraint Satisfaction Problems_).
