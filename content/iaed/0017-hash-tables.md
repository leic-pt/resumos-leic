---
title: Tabelas de Dispersão (Hash Tables)
description: Tabelas e Vetores.
path: /iaed/hash-tables
type: content
---

# Tabelas de Dispersão (Hash Tables)

```toc

```

## Tabelas de Dispersão

Ao longo do tempo, vamos encontrar situações em que **precisamos** que operações de procura, inserção e remoção de elementos seja feita, [em média](color:green), em tempo constante. Se os elementos não tiverem necessariamente de ter uma relação de ordem entre eles, podemos usar **tabelas de dispersão**, em inglês **_hash tables_**, para esse efeito. Já contactámos com _hash tables_, mesmo sem saber, na cadeira de FP - dicionários em Python são implementações de _hash tables_.

[![Tabelas de Dispersão - Imagem de Jorge Stolfi (Wikipedia)](./assets/0016-hashtable.svg#dark=3)](https://en.wikipedia.org/wiki/Hash_table#/media/File:Hash_table_3_1_1_0_1_0_0_SP.svg)

### Função de Dispersão (Hashing)

Como funciona então a dispersão - como é que conseguimos tempos, em média, tão bons?

Bem, estes tempos são atingidos através de **_hashing_**: uma técnica que recorre a uma função de dispersão, função essa que recebe um dado elemento e retorna um **índice** na _hash table_. Esta função deve, idealmente, ser:

- rápida de calcular: caso contrário, o tempo ganho ao usar tabelas de dispersão seria contrariado pelo _hashing_.
- envolver todos os bits da chave: idealmente, nenhum pedaço do input deve ser inutilizado, de forma a obter um _hashing_ que seja único para cada elemento.
- deve distribuir as chaves de forma uniforme e quase aleatória: numa **função de dispersão ideal**, a probabilidade de ocorrer uma [**colisão**](color:red) (a função devolver o mesmo índice para dois elementos distintos) deve ser $\frac{1}{M}$, onde $M$ é o tamanho da tabela.

Utilizamos, claro, funções de dispersão diferentes para elementos de tipos diferentes: um _hashing_ para cadeias de caracteres não será o mesmo do que o utilizado para números reais, por exemplo.

**Quando estamos a trabalhar com [números](color:purple)**, é usual a nossa _hash function_ trabalhar com o módulo (resto) do elemento, `k % M` - desta maneira, considerando no máximo $M$ elementos, não deverá haver colisões. Devemos idealmente fazer uma estimativa conservadora para o tamanho da tabela, de forma a não ser apanhados de surpresa com quantidades anormais de colisões.

```c
int hash_int(int value, int M) {
    return value % M;
}
```

Trabalhar com [**cadeias de caracteres**](color:blue) requer uma estratégia diferente - não existe o "módulo de uma _string_", pelo que temos de adaptar a nossa _hash function_. O nosso objetivo, aqui, passa por **calcular uma soma ponderada dos caracteres**: uma maneira de o fazer é, por exemplo:

```c
int hash_string(char *v, int M) {
    int h = 0, a = 127;

    for (; *v != '\0'; v++) {
        h = (a * h + *v) % M;
    }
    return h;
}
```

Notem-se que esta é uma **implementação possível** para uma _hash function_ que trabalha com cadeias de caracteres, estando longe de ser a única. Pela internet fora existem inúmeras outras implementações, pelo que sugiro que procurem outras caso esta não se adeque ao vosso problema. Mais ainda, resta referir que devemos sempre recorrer a "valores auxiliares" **primos**, já que estes reduzem bastante o risco de colisão.

Também podemos recalcular a base a cada iteração do loop principal, de modo a evitar anomalias com chaves altamente regulares:

```c
int hash_string_2(char *v, int M) {
    long int h, a = 31415, b = 27183;

    for (h = 0; *v != '\0'; v++, a = a * b % (M-1)) {
        h = (a * h + *v) % M;
    }
    return h;
}
```

### Como Resolver Colisões?

Já vimos que podem ocorrer [**colisões**](color:red), caso a _hash function_ retorne o mesmo índice para elementos diferentes. Não vimos, contudo, como resolvê-las - não podemos, claro, "substituir" o elemento que lá estava pelo novo, temos de arranjar maneira de ter ambos na tabela. Existem algumas maneiras diferentes de resolver este problema.

![Colisões numa hash table](./assets/0016-collisions.png#dark=2)

[\*](color:yellow) Os slides que acompanham a cadeira costumam conter o código utilizado para implementar estas estratégias de resolução de colisões (e implementações de _hash tables_ em geral). Dado serem trechos bastante extensos de código, não serão incluídos nesta página.

#### Resolução via Encadeamento Externo (Separate Chaining)

![Encadeamento Externo](./assets/0016-dir.png#dark=1)

Aqui, cada posição da tabela tem um **ponteiro para uma lista**: desta forma, as colisões são resolvidas juntando o novo elemento ao início da lista. As remoções são realizadas removendo o elemento da lista. Aqui, o comprimento médio das listas será $\alpha = \frac{N}{M}$, para $N = \#Elementos$ e $M = |Tabela|$. Apesar de o pior caso ser linear - acontece caso **todos** os elementos tenham o mesmo índice associado - este pior caso tem probabilidade baixíssima de ocorrer, pelo que **em média** mantêm-se tempos de acesso "baratos".

#### Resolução via Procura Linear (Linear Probing)

![Linear Probing](./assets/0016-linear-probing.gif#dark=2)

Aqui, cada posição da tabela guarda **no máximo** um elemento. Se calcularmos um índice mas a tabela já lá contiver um elemento, devemos continuar a mover-nos pela tabela até ao fim, até encontrar um espaço livre (inserindo-o nesse espaço). A procura e remoção de elementos funcionam todas desta maneira: calcula-se o índice e verifica-se se o elemento está lá; **caso não esteja**, continuamos a avançar pela tabela até encontrar uma posição vazia (caso encontremos uma posição vazia antes de encontrar o elemento pretendido, o elemento não está na tabela). No caso da remoção de um elemento, após remover o elemento, devemos reorganizar a tabela atualizando os índices dos seus elementos:

- Após achar o elemento a remover (caso exista) colocar essa posição a NULL (ou qualquer valor que sinalize a posição como livre) e reinserir todos os elementos adjacentes até encontrar uma posição vazia.

O exemplo seguinte pode ajudar a entender o que acontece. Removemos $14$ da posição $1$. Em seguida vamos reinserir todos os elementos adjacentes até à primeira posição vazia. Neste caso $72$ fica na mesma posição (pois já se encontra na posição do seu índice), contudo, após reinserirmos $70$ a sua posição muda, bem como a posição de $20$, isto acontece pois existiu libertação de posições na tabela com índices iguais ou posteriores aos dos índices destes elementos. A reorganização da tabela é terminada quando se encontra a primeira posição vazia, neste caso, a posição no índice $5$.

![via Procura Linear](./assets/0016-lin.png#dark=3)

**A estratégia em questão requer que se saiba o número de elementos a inserir _à priori_**! Caso contrário, podíamos ficar sem espaço para inserir elementos na tabela. Mais ainda, $\alpha = \frac{N}{M}$ tem de ser idealmente menor que $1$, já que o número de operações necessárias para encontrar um elemento na tabela é dado por:

- Hits: $\frac{1}{2}\left(1+\frac{1}{1- \alpha}\right)$

- Misses: $\frac{1}{2}\left(1+\frac{1}{(1- \alpha)^2}\right)$

O número de operações cresce rapidamente quando $\alpha \rightarrow 1.0$.

$$
\begin{array}{ c | c c c c }
\alpha & 0.5 & 0.667 & 0.75 & 0.9\\
\hline
\text{hit} & 1.5 & 2.0 & 3.0 & 5.5\\
\text{miss} & 2.5 & 5.0 & 8.5 & 55.5
\end{array}
$$

#### Resolução via Double Hashing

Tal como na procura linear, vamos sempre procurar guardar elementos na tabela em si, sem recorrer a estruturas auxiliares (como listas ou similares). Vamos, contudo, utilizar outra técnica para resolver conflitos: em vez de procurar sequencialmente a próxima posição vazia, vamos utilizar uma segunda _hash function_ para determinar o incremento ao índice originalmente obtido. Este incremento deverá ser sempre **primo relativamente ao tamanho da tabela**.

![Double Hashing](./assets/0016-double-hashing.gif#dark=2)

Esta estratégia permite diminuir o número de operações relativamente à procura linear, tendo apenas problemas quanto à sua eficiência caso a tabela esteja muito cheia (_load_ superior a $90\%$), já que vamos ter de calcular _hashes_ repetidos várias vezes. Tal como em _linear probing_, $\alpha = \frac{N}{M}$ deve ser menor que 1. O número de operações necessárias para encontrar um elemento é dado por:

- Hits: $\frac{1}{\alpha}\log\left(\frac{1}{1- \alpha}\right)$

- Misses: $\frac{1}{1- \alpha}$

$$
\begin{array}{ c | c c c c }
\alpha & 0.5 & 0.667 & 0.75 & 0.9\\
\hline
\text{hit} & 1.4 & 1.6 & 2.8 & 2.5\\
\text{miss} & 1.5 & 2.0 & 3.0 & 5.5
\end{array}
$$

Como podemos ver, mesmo para $\alpha$ perto de $1.0$, o número de _hits_ e _misses_ cresce de forma muito mais controlada que na procura linear!

### Tabelas de Dispersão Dinâmicas

Em _hash tables_ regular, o aumentar da _carga_ (isto é, o número de elementos) na tabela leva também a um aumento do custo de inserção e procura de elementos. Em tabelas com encadeamento externo, este aumento é gradual - começamos com operações em tempo constante, podendo atingir piores casos lineares. No caso da procura linear e _double hashing_, os custos vão também aumentando, à medida que vamos tendo de procurar por mais sítios diferentes para colocar os elementos.

Para evitar tempos incomportáveis de inserção, remoção e procura de elementos, é costume utilizar-se **tabelas de dispersão dinâmicas**: assim que a tabela estiver meio cheia, duplicamos o seu tamanho. **Esta duplicação não é uma operação barata** - temos de fazer _re-hash_ dos nossos elementos para os colocar na nova tabela. É, contudo, uma operação pouco frequente (isto considerando que inicializámos a tabela com um tamanho conservador), pelo que os ganhos acabam por superar essa perda.

---

As tabelas de dispersão concretizam, então, operações de inserção e procura em tempo constante (**em média**). [**Não têm, contudo, garantia de desempenho**](color:red): há sempre a possibilidade (ainda que pouco comum) de uma operação levar tempo linear a ser concretizada. O custo do _hashing_ pode ainda ser relativamente caro para o caso de chaves muito longas, e há obviamente o elefante na sala: estas tabelas ocupam por natureza **muito mais memória do que o necessário**, um _trade-off_ necessário para encurtar os tempos médios que as operações levam. Devemos, portanto, ter sempre em consideração se as especificações do problema que nos é proposto têm limitações apertadas de memória: se assim for, talvez seja boa ideia partir para outras estruturas, mesmo acabando por perder desempenho.

Em suma:

- A procura linear é a estratégia mais rápida, quando temos tabelas esparsas;
- O _double hashing_ acaba por ser o melhor compromisso tempo/memória, já que não só não utilizamos estruturas de dados auxiliares como não procuramos elementos sequencialmente;
- O encadeamento externo é o mais fácil de implementar, sofrendo contudo aumentos graduais de desempenho e acabando por ocupar bastante memória.

Podem ainda ler [este artigo sobre tabelas de dispersão dinâmicas](https://www.csd.uoc.gr/~hy460/pdf/Dynamic%20Hash%20Tables.pdf), que explora estas e outras estratégias de resolução de colisões em tabelas de dispersão.
