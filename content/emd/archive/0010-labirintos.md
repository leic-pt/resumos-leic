---
title: Labirintos
path: /emd/arquivo/labirintos
type: archive
---

# Labirintos

```toc

```

## Definições

### Atalhos Eulerianos

Atalhos que percorrem todos os vértices e arestas.  
**Relembrar** que um atalho nunca repete arestas.  
Os `Atalhos Eulerianos` também podem ser **fechados** (se acabarem no mesmo vértice) ou **abertos** (se não acabarem no mesmo vértice).

Um `atalho euleriano fechado` também se pode designar por `circuito euleriano` e um `atalho euleriano aberto` por `travessia euleriana`.

---

### Multigrafo Euleriano

Um `multigrafo euleriano` é um multigrafo que tem um `atalho euleriano fechado`.

---

### Multigrafo Atravessável

Um `multigrafo atravessável` é um multigrafo que tem um `atalho euleriano aberto`.

## Representar um Labirinto com Grafo

Seja uma encruzilhada um sítio no labirinto, onde se pode escolher vários caminhos.  
Podemos representar um `Labirinto` através de um grafo, onde todas as entradas, saídas, centros, encruzilhadas e becos sem sáida do labirinto são vértices e as arestas são os caminhos que existem entre cada vértice.

:::details[Exemplos]

![Labirinto Grafo1](./assets/s/s/s/0020-LabGraf1.png) ![Labirinto Grafo2](./assets/s/s/s/s/0020-LabGraf2.png)

:::

## Teoremas e Algoritmos

### Teorema de Euler-Hierholzer

Um multigrafo é euleriano se e só se é conexo e todo o seu vértice é par.  
**Relembrar**: Conexo significa que quaisquer dois vértices estão conectados (não há vértices isolados).

:::warning[AVISO]

No próximo teste haverá uma `Demontração`, segundo o professor, que também disse que a `Demonstração` seguinte é **Muito Importante**. Se esta não ficar clara, poderá ficar mais fácil assistir à `Prova` feita pelo professor em aula, uma vez que são usados vários desenhos explicativos. Esta pode ser encontrada [aqui](https://www.youtube.com/watch?v=-yBPgkOCJhE&list=PL1L11sDP8FKHvZYbgh7FdItSfBxsHyU0z&index=43) e começa em `47:10` e acaba em `1:04:20`.

:::

:::details[Demonstração]

1. **Condição Necessária**

Seja $g$ um `multigrafo euleriano`, então este terá um `atalho euleriano fechado` (passa por todos os vértices e arestas, sem repetir arestas e acabando no vértice por onde começamos). Aqui podemos concluir logo que $g$ é `conexo`.

Supondo que começávamos o atalho num vértice $v$, então, para todo o vértice do multigrafo $g$ diferente de $v$, vamos ter de, obrigatoriamente, "chegar" e depois "sair" do vértice, visto que temos de percorrer **todos** os vértices e não podemos terminar o atalho sem ser em $v$.  
Quando saímos (e entramos) num vértice, nunca pode ser por uma aresta já percorrida, porque o multigrafo $g$ é `euleriano`. Deste modo, é fácil reparar que todo o vértice **diferente** de $v$ terá grau par, porque saímos e entramos sempre por arestas diferentes (não importa quantas vezes).

Já se provou que todo o vértice diferente de $v$ (vértice inicial) é par, agora falta provar o mesmo para $v$.  
A única diferença, face aos restantes vértices, é que em $v$ saímos primeiro. Tal como nos outros vértices, também podemos entrar e sair de $v$, durante o atalho. Contudo, o seu grau também será par, porque no final regressamos a $v$, por uma aresta diferente.

2. **Condição Suficiente** - A parte mais **Importante**, segundo o professor

Seja $g$ um `multigrafo` conexo e com todos vértices são pares. Vamos tentar provar que $g$ é um `multigrafo euleriano`, por absurdo.

Sendo $Y$ o **maior** atalho fechado que podemos arranjar em $g$ onde $Y$ não é um `atalho euleriano fechado`. Deste modo, há arestas que não foram percorridas em $g$.  
Seja $C$ o grafo, que resulta de eliminar todas as arestas de $Y$. Se $Y$ não era um `atalho euleriano fechado`, então $C$ tem de ter arestas.  
Como $Y$ é um atalho fechado, vamos remover a cada vértice um número par de arestas, então em $C$ vamos continuar com os vértices todos pares (relembrar que $g$ tinha os vértices todos pares).  
Como $g$ era conexo, existe um vértice $u$ de $C$ onde passava o atalho $Y$, que não é isolado (relembrar que $C$ tem arestas). Esse vértice $u$ terá grau par $\geq 0$.  
Uma vez que os vértices têm todos grau par, será sempre possível "entrar" e "sair" de um vértice **e** se começarmos por sair de um, vamos, obrigatoriamente, ter de regressar ao mesmo, algures no atalho. Então existirá um `atalho fechado` a começar e acabar em $u$, que vamos designar por $U$

Finalmente, se existe um `atalho fechado` a começar e acabar em $u$, com arestas não pertencentes a $Y$, será possível juntar os dois atalhos num só. Repare-se que, se $Y$ é um `atalho fechado`, então podemos fazer um atalho semelhante, só que acaba e começa em $u$, **mas**, em vez de terminarmos, passamos a percorrer o atalho $U$, acabando finalmente em $u$.
Chegamos a um absurdo, afinal $Y$ **não é** o maior atalho fechado que podemos arranjar em $g$ se não for um `atalho euleriano fechado`.

QED

:::tip[NOTA]

É importante referir também que este processo é recursivo. Poderíamos voltar a considerar $C$ um novo grafo, mas que a agora seria o resultado de retirar o atalho "$Y+U$" e chegaríamos à mesma conclusão. Só terminará se $C$ for um grafo de vértices isolados (sem arestas) e nesse caso conclui-se que o `atalho fechado` era um `atalho euleriano fechado`.

:::

---

### Teorema 2

Um multigrafo é atravessável se e só se tem apenas dois vértices ímpares.  
Para além disso, o `atalho Euleriano aberto` começa e acaba nos vértices ímpares, onde o primeiro é diferente do último.

:::warning[AVISO]

Demonstração semelhante à anterior. Também é **Muito Importante**, segundo o professor e na aula o professor usou desenhos explicativos que podem ajudar a perceber.  
Podem encontrar a aula no mesmo [link](https://www.youtube.com/watch?v=-yBPgkOCJhE&list=PL1L11sDP8FKHvZYbgh7FdItSfBxsHyU0z&index=43) começa em `1:06:50` e acaba em `1:20:00`.

:::

:::details[Demonstração]

1. Condição Necessária

Seja $g$ um multigrafo atravessável, significa que, se eu partir de um vértice $u$, consigo percorrer um `atalho euleriano aberto` (`travessia euleriana`), ou seja, que percorre todas as arestas sem repetições e termina num vértice diferente, $v$.

Supondo que agora criávamos uma nova aresta de $u$ a $v$, de modo a que fosse possível percorrer um `circuito euleriano` (`atalho euleriano fechado`). Basta pensar na `travessia euleriana` que tinhamos e agora acrescenta-se uma aresta que liga $u$ a $v$.  
**NOTA:** $u$ e $v$ poderiam até já ter arestas que os interligassem, mas não eram suficientes para formar um `circuito euleriano`.

Como se sabe, um `circuito euleriano` tem todos os vértices pares. Então, se removermos a aresta que adicionámos $u$ e $v$ passaram a ter grau ímpar e serão os únicos, pois a aresta removida era comum aos dois. Os outros vértice permanecerão com grau par.

Logo, se $g$ é atravessável , então tem pelo apenas $2$ vértices com grau ímpar.

2. Condição Suficiente

(A ideia é quase igual à da Condição Necessária)

Seja $g$ um multigrafo com apenas $2$ vértices com grau ímpar.

Se unitrmos esses vértices com uma nova aresta, pelo [Teorema de Euler-Hierholzer](#teorema-de-euler-hierholzer) $g$ terá um `circuito euleriano`.  
Então, se eu remover a aresta adicionada, $g$ passará a ter uma `travessia euleriana`, logo será atravessável.

QED

:::tip[NOTA]

A prova para grafos (não multigrafos) é muito parecida. A única diferença é que temos de adicionar um vértice com duas arestas, uma que se liga a $u$ outra a $v$, porque podemos ter uma travessia como:

![Imagem Exceção](./assets/s/0020-excecao.png)

Como estamos a trabalhar com grafos, não podemos ter mais do que $1$ aresta a ligar $2$ vértices.  
Apesar desta exceção a prova é igual, só que retiramos/adicionamos $2$ arestas e $1$ vértice como descrito.

:::

---

### Teorema 3 - Teorema de Euler

Se tivermos um grafo que não seja `Euleriano`, podemos **duplicar** cada aresta e dessa maneira todos os vértices terão grau par, assim já é `Euleriano`.  
**NOTA**: Outra solução é percorrer cada aresta duas vezes, em vez de duplicar.

---

### Teorema 4 - Teorema de Lucas

Um multigrafo $\mathcal G$ **conexo** com $2n$ vértices _ímpares_ pode ser descrito por exatamente $n$ atalhos abertos que não partilham arestas.

---

### Algoritmo de Fleury

Com este Algoritmo consegue-se percorrer um `atalho euleriano fechado` num `multigrafo euleriano`.

1. Começa-se num vértice qualquer
2. Se houver mais que $1$ aresta possível a percorrer, escolhe-se uma que não seja `Ponte` (não interessa qual, desde que não seja uma `Ponte`)
3. Só se atravessam as `Pontes` em último caso (quando já não há mais arestas disponíveis).

**Relembrar:** `Ponte` é uma aresta que, se removida, cria uma nova componente.

:::details[Exemplo]

O exemplo encontra-se neste [link](https://drive.google.com/file/d/1XBts9Zbo54SCU7i_vXwlg4TbsxFp4IJJ/view?usp=sharing)

:::

#### Algoritmo Fleury - Multigrafo Atravessável

O `Algoritmo de Fleury` foi concebido para `multigrados eulerianos`.  
Mas, também o podemos aplicar, **informalmente**, em `multigrafos atravessáveis`.

Para isso, basta **começar num vértice ímpar**, é a única mudança no Algoritmo. Mas, neste caso, não vamos acabar no mesmo vértice, mas sim no outro vértice ímpar.
Reparem que, se, num `multigrafo atravessável`, ligarmos os dois vértices ímpares com uma aresta, ficamos com um `multigrafo euleriano`. Nesse caso, já poderíamos acabar no vértice inicial.

#### Desvantagens

Não funciona em Labirintos se não o conhecermos, uma vez que nesses caso não sabemos se um aresta (caminho do Labirinto) é `Ponte` ou não.

---

### Algoritmo de Trémaux

Com as regras deste Algoritmo, qualquer um pode sair de qualquer labirinto.

Passamos agora à descrição do Algoritmo:

1. Sempre que chegamos a um vértice não visitado anteriormente, seguimos por uma aresta também não percorrida, qualquer.
2. Sempre que chegarmos a um vértice através de uma aresta ainda não percorrida anteriormente, se chegarmos a um vértice já visitado ou a um beco sem saída, voltamos para o vértice de onde viemos pela aresta.
3. Sempre que chegarmos a um vértice através de uma aresta que já tinha sido percorrida anteriormente e chegarmos a um vértice já visitado, escolhemos a aresta ainda não percorrida que incide no vértice. Se não existir, escolhemos percorrer uma aresta que já tenha sido percorrida apenas **uma** vez.

:::details[Exemplo]

O exemplo encontra-se neste [link](https://drive.google.com/file/d/1oFosH-glbdQfcqJTKvz8mu6MIzrNi64O/view?usp=sharing)

:::

---

### Algoritmo de Tarry

Se chegarmos a um vértice, escolhemos continuar por qualquer aresta que não tenha sido percorrida $2$ vezes (dando prioridade às arestas ainda não percorridas), com exceção da aresta onde chegamos pela primeira vez ao vértice atual.  
Só percorremos essa aresta em último caso, ou seja, se for um beco sem saída, ou se as outras arestas já tiverem sido percorridas $2$ vezes.

:::details[Exemplo]

O exemplo encontra-se neste [link](https://drive.google.com/file/d/1mOAIvxcxbiRhYMEPEn_RCWLzCMYIRYqz/view?usp=sharing).

:::

#### Teorema de Tarry

Iniciando um caminho num grafo conexo qualquer, e seguindo as regras do `Algoritmo de Tarry`, regressaremos ao vértice inicial, depois de ter percorrido cada aresta do grafo $2$ vezes em sentidos opostos.
