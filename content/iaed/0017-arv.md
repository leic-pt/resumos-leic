---
title: Árvores Binárias
description: Árvores de Procura Binárias (BST).
path: /iaed/arvores-binarias
type: content
---

# Árvores Binárias

```toc

```

## Árvores de Procura Binárias (BST)

As _binary search trees_, BSTs, têm por base uma lógica bastante simples: considerando o nó atual como sendo a raiz de uma árvore, todos os nós que partem do seu filho [_esquerdo_](color:green) (inclusive) têm chave menor que a sua, e todos os nós que partem do seu filho [_direito_](color:red) (inclusive) têm chave maior que a sua. Estamos, portanto, perante uma abordagem recursiva ao problema, já que cada nó é a raiz de uma sub-árvore da árvore "maior", e cada sub-árvore tem de respeitar também este princípio.

![BST 1](./assets/0017-arv2.png#dark=1)

A [**pesquisa**](color:purple) de um dado nó pela árvore é sempre iniciada a partir da raiz. Verifica-se necessariamente uma de três situações:

- A chave do nó atual é **menor** que a chave pesquisada. Nesse caso, a pesquisa continua a partir do filho **direito** do nó atual;
- A chave do nó atual é **maior** que a chave pesquisada. Nesse caso, a pesquisa continua a partir do filho **esquerdo** do nó atual;
- A chave do nó atual é **igual** a chave pesquisada. Nesse caso, o nó atual é o nó desejado, e podemos parar a procura.

Caso cheguemos ao nó nulo, `NULL` em C, nenhum nó na árvore tem a chave pretendida, pelo que a pesquisa não teve sucesso.

[**Inserir**](color:blue) um nó na árvore tem uma lógica-base semelhante, com alguns _twists_ pelo meio. Iniciamos uma espécie de "procura" na raiz, e o objetivo será **percorrer a árvore de cima para baixo**, até encontrarmos o lugar certo para introduzir o novo elemento. Este **lugar certo** será o local onde tivermos encontrado `NULL`. Tal deve-se a à própria procura, tal como explicada acima, acabar por indiretamente descobrir o sítio correto de inserção da chave a procurar caso esta não seja encontrada: procurámos o caminho certo para encontrar a chave, caso ela estivesse na árvore, e não a encontrámos; se não está lá, então este será o local correto para a inserirmos!

[**Remover**](color:red) um elemento é bastante simples. Realizamos uma procura normal, e assim que encontrarmos o nó pretendido (seja esse nó $x$):

- Caso $x$ não tenha filhos, basta apenas apagá-lo;
- Caso $x$ tenha apenas um filho, redirecionamos o pai de $x$ para o seu filho e apagamos $x$.
- Caso $x$ tenha dois filhos, substituímo-lo pelo maior dos elementos à sua esquerda e apagamo-lo da sua posição original.

:::info[Elementos Máximo e Minímo]

Para encontrar o elemento com chave mais elevada, devemos procurar o **elemento mais à direita** da árvore; pelo contrário, para encontrar o elemento com chave mais baixa, devemos procurar o **elemento mais à esquerda**.

```c
link max(link h) {
  if (h == NULL || h->r == NULL) {
      return h;
  } else {
      return max(h->r);
  }
}

link min(link h) {
  if (h == NULL || h->l == NULL) {
    return h;
  } else {
    return min(h->l);
  }
}
```

:::

## Travessias pela Árvore

![BST 2](./assets/0017-arv2.png#dark=1)

### Travessia Pre-Order

Numa **travessia pre-order**, visitamos sempre a raiz **antes** de visitar os seus filhos (com visita entenda-se "guardar/imprimir o valor do nó"). Pegando na árvore acima, uma travessia pre-order pela mesma produziria um output `20, 12, 8, 2, 9, 18, 32, 23, 45`.

### Travessia In-Order

Numa **travessia in-order**, visitamos sempre a raiz depois de visitar o filho à esquerda e antes de visitar o filho à direita. Pegando na árvore acima, uma travessia in-order pela mesma produziria um output `2, 8, 9, 12, 18, 20, 23, 32, 45`. Em BSTs, esta travessia produzirá um output [**ordenado de forma crescente**](color:green)!

### Travessia Post-Order

Numa **travessia post-order**, visitamos sempre a raiz **depois** de visitar os seus filhos. Pegando na árvore acima, uma travessia post-order pela mesma produziria um output `2, 9, 8, 18, 12, 23, 45, 32, 20`.

## Árvores Binárias Equilibradas

As pesquisas em árvores de procura binária são, por norma, realizadas de forma eficiente ($O(\log{n}))$. O pior caso, contudo, é linear: basta olhar para o caso em que inserimos, por esta ordem, `1, 2, 3, 4, 5, 6`. Nesse caso, ficamos com uma árvore deste tipo:

![BST - Pior caso](./assets/0017-pior-caso.png#dark=2)

Esta árvore é, claro, **desiquilibrada**, podendo assim ficar até atrás de vetores ordenados (quando acompanhados de pesquisa binária). Assim sendo, fará sentido encontrar maneiras de **equilibrar** a árvore.

Árvores equilibradas têm como principal objetivo reduzir a complexidade temporal no pior caso de pesquisa na mesma, a troco de complexidade adicional na construção e manutenção das mesmas (através da técnica de **reequilibragem**).

As BSTs equilibradas mais comuns são as Red-Black e as AVL, sendo que em IAED abordamos por norma estas últimas.

### Árvores AVL (Adelson-Velsky and Landis)

![Árvore AVL](./assets/0017-arv2.png#dark=1)

Nas árvores AVL, **todas as operações** têm complexidade temporal associada $O(\log{n})$, dado serem árvores equilibradas. Este equilíbrio é atingido através de um princípio relativamente simples: [**para todo o nó da árvore, a altura/profundidade de cada filho difere em no máximo 1 unidade**](color:green). A noção de profundidade está aqui associada à **distância** (quantidade de nós) **até à folha da árvore mais _profunda_** (passo a redundância). Normalmente, referimo-nos a esta diferença entre as alturas dos filhos como [**_Balance Factor_**](color:purple), ou Fator de Equilíbrio, dado trivialmente por `height(left) - height(right)`.

A cada inserção e remoção de um nó da árvore AVL, há a possibilidade da árvore ficar **desiquilibrada**: para o combater, cada vez que uma dessas operações é executada temos de verificar possíveis desiquilíbrios que tenham sido criados, e aplicar [**rotações**](color:orange) (algo que vamos explorar mais à frente) para os resolver. Esta necessidade frequente de rotações e equilíbrios adiciona uma camada adicional de complexidade à implementação da árvore, pelo que em casos onde tempos logarítmicos não são um _must_, é frequente utilizar uma implementação _naíve_ de árvores binárias.

### [Inserir um nó na árvore AVL](color:green)

Inserir um elemento numa árvore AVL é uma operação separada em duas fases: uma primeira, a de **procura** do lugar onde inserir o elemento, realizada tal como se de uma árvore binária "normal" se tratasse; uma segunda, onde temos de verificar se a inserção do elemento na árvore causou desiquilíbrios (e caso tal tenha acontecido, corrigi-los).

O processo de correção é iniciado a partir da folha que acabou de ser inserida na árvore. Vamos procurar **subir** na árvore, até encontrar um nó onde o fator de equilíbrio seja maior que $1$ (em módulo). Quando tal ocorrer, vamos realizar uma **rotação**, simples ou dupla, no nó em "incumprimento" para corrigir o desiquilíbrio. **Assim que equilibrarmos o nó**, podemos parar de subir - todo o resto da árvore para cima estará também em cumprimento.

Apesar de parecer óbvio mesmo sem o mencionar, podemos notar que caso consigamos subir da folha até à raiz sem necessidade de rotações, podemos dizer que a inserção do novo elemento não desiquilibrou a árvore.

---

Já falámos várias vezes de rotações, mas ainda não nos demos ao trabalho de as definir: continua a ser uma incógnita como funcionam e como de facto conseguem equilibrar as nossas árvores binárias. Vamos, portanto, apresentar dois pares de rotações, simples e duplas:

:::info[Rotação Simples - Left]

![Rotação à Esquerda](./assets/0017-esq.png#dark=1)

Precisamos de fazer uma **rotação à esquerda** quando inserimos um nó na sub-árvore direita de uma sub-árvore direita.

```c
link rotL(link h) {
  link x = h->r;
  h->r = x->l;
  x->l = h;
  return x;
}
```

:::

:::tip[Rotação Simples - Right]

![Rotação à Direita](./assets/0017-dir.png#dark=1)

Precisamos de fazer uma **rotação à direita** quando inserimos um nó na sub-árvore esquerda de uma sub-árvore esquerda.

```c
link rotR(link h) {
  link x = h->l;
  h->l = x->r;
  x->r = h;
  return x;
}
```

:::

As rotações duplas são utilizadas quando uma só rotação não chega para voltar a colocar a árvore em equilíbrio.

:::info[Rotação Dupla - Left-Right]

![Rotação Left-Right](./assets/0017-lr.png#dark=1)

Consiste em fazer duas rotações simples de seguida, primeiro uma à esquerda e outra à direita (realizamos uma primeira rotação, mas o _balance factor_ continua maior que $1$). Fazemos esta operação caso tenhamos inserido um nó na sub-árvore direita de uma sub-árvore esquerda.

![LR 2](./assets/0017-left-right.svg#dark=1)

:::

:::tip[Rotação Dupla - Right-Left]

![Rotação Right-Left](./assets/0017-rl.png#dark=1)

Consiste em fazer duas rotações simples de seguida, primeiro uma à direita e outra à esquerda. Fazemos esta operação caso tenhamos inserido um nó na sub-árvore esquerda de uma sub-árvore direita.

![RL 2](./assets/0017-right-left.svg#dark=1)

:::

### [Remover um nó da árvore AVL](color:red)

A remoção inicia-se tal como numa BST normal: fazemos a pesquisa inicial para encontrar o nó pretendido e removê-lo. O que difere é o que vem a seguir - aqui, não basta apenas ligar o pai do nó removido a um dos seus filhos (já que tal pode, sem mais verificações, resultar em árvores desiquilibradas). O processo será, aqui, semelhante ao da inserção de um nó na AVL: subimos até à raiz com vista a encontrar nós em desiquilíbrio, equilibrando-os sempre que necessário. Contudo, ao contrário da inserção, [**vamos sempre subir até à raiz**](color:yellow), independentemente de já termos equilibrado nós mais abaixo ou não - aqui, poderá ser necessário equilibrar sub-árvores ascendentes.

### [Desempenho em AVLs](color:blue)

Tal como referido no início desta sub-secção, todas as operações principais são feitas em tempo logarítmico. Tal é verdade, já que temos:

- **Equilibragem** (rotações simples e duplas) - $O(1)$.
- **Pesquisa** - $O(\log{n})$.
- **Inserção** - $O(\log{n})$. Temos que a procura inicial é realizada em tempo logarítmico e que subir pela árvore leva também $\log{n}$ operações no pior caso (e a equilibragem é feita em tempo constante).
- **Remoção** - $O(\log{n})$. Temos que a procura inicial é realizada em tempo logarítmico e que subir pela árvore leva também $\log{n}$ operações no pior caso. Sendo que, no pior caso, todos os nós terão de ser equilibrados, subir _e_ equilibrar os nós levará tempo $2\log{n}$ (que, claro, continua a ser logarítmico).
