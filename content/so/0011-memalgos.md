---
title: Algoritmos de Gestão de Memória
description: Algoritmos de Gestão de Memória
path: /so/memalgos
type: content
---

# Algoritmos de Gestão de Memória

```toc

```

## Tipos de Decisões que o SO tem de Tomar

- Alocação - Onde colocar um bloco na memória
  primária
- Transferência - Quando transferir um bloco de
  memória secundária para memória primária e
  vice-versa
- Substituição - Qual o bloco a retirar da memória
  primária.

## Algoritmos de Alocação

### Reserva de Memória Física

- Paginação
  - Muito simples:
    - Basta encontrar uma página livre
    - Normalmente existentes numa Lista de Páginas Livres
      do SO
- Segmentação
  - O tamanho variável dos segmentos torna mais
    complexa a reserva de espaço para um segmento
  - Na libertação de memória é necessário
    recompactar os segmentos

### Reserva de Segmentos:

**Critérios de Escolha de Blocos Livres**

- Best-Fit (o menor possível):

  - Gera elevado número de pequenos fragmentos
  - Em média percorre-se metade da lista de blocos livres
    na procura (com lista ordenada por tamanho)
  - A lista tem de ser percorrida outra vez para introduzir
    o fragmento

- Worst-Fit (o maior possível):

  - Pode facilmente impossibilitar a reserva de blocos de
    grandes dimensões
  - A lista de blocos livres tem de ser percorrida para
    introduzir o fragmento

- First-Fit (o primeiro possível):

  - Minimiza a tempo gasto a percorrer a lista de
    blocos livres
  - Gera muita fragmentação externa
  - Acumula muitos blocos pequenos no início da
    lista, ficando para o fim os blocos maiores

- Next-Fit (o primeiro possível a seguir à
  pesquisa anterior):
  - Espalha os blocos pequenos por toda a memória

### Algoritmo Buddy

- Procura um bom equilíbrio entre o tempo de
  procura e a fragmentação interna e externa
- Pedidos de alocação satisfeitos usando blocos de
  dimensão fixa $b^i, i=[min, max]$
  - Permite fragmentação interna
- Subdivide recursivamente os blocos livres até:
- Obter um bloco de tamanho mínimo para satisfazer o
  pedido de alocação
- Ou atingir o tamanho mínimo possível para os blocos
  alocados ($b^{min}$)
- Alocação e libertação de blocos têm custo logarítmico

- A memória livre é dividida em blocos de dimensão $b^n$
  - Se $b = 2$ então designa-se por buddy binário
- Para satisfazer um pedido de dimensão D percorre-se a
  lista à procura de um bloco de dimensão $2^k$ tal que $2^{k-1}
  < D ≤ 2^k$
  - Se não for encontrado procura-se um de dimensão $2^{k+i}$ , $i > 0$, que será dividido em duas partes iguais (buddies)
- Um dos buddies será subdividido quantas vezes for
  necessário até se obter um bloco de dimensão $2^k$
- Se possível, na libertação um bloco é recombinado com
  o seu buddy, sendo a associação entre buddies
  repetida até se obter um bloco com a maior dimensão
  possível

:::tip[Exemplo]
Existe um exemplo desta parte da matéria nos slides(págs 10 a 18)
:::

#### Conclusões

- Complexidade?
  - Reservar e libertar segmentos cresce
    logaritmicamente com o número de subdivisões de
    segmentos suportadas
  - e.g. 1MB até 64KB: 4 subdivisões
- Fragmentação Externa?
  - Sim (como todos os algoritmos de reserva para
    segmentação)
- Fragmentação Interna?
  - Sim! (ao contrário dos algoritmos anteriores)

## Algoritmos de Transferência

**Três abordagens para a transferência**

- A pedido (on request):
  o programa ou o sistema operativo determinam quando se
  deve carregar o bloco em memória principal
  - normalmente usado na memória segmentada
- Por necessidade (on demand):
  o bloco é acedido e gera-se uma falta (de segmento ou de
  página), sendo necessário carregá-lo para a memória
  principal
  - normalmente usado na memória paginada
- Por antecipação (prefetching):
  o bloco é carregado na memória principal pelo sistema
  operativo porque este considera fortemente provável que
  ele venha a ser acedido nos próximos instantes

### Transferência de Segmentos

- Normalmente um processo para se executar precisa de ter pelo
  menos um segmento de código, de dados e de stack em memória
- Caso haja escassez de memória os segmentos de outros processos
  que não estejam em execução são transferidos na íntegra para
  disco (swapping)
- Os segmentos são guardados numa zona separada do disco
  chamada área de transferência (swap area)
- Quando são transferidos todos os segmentos de um processo diz-se
  que o processo foi transferido para disco (swapped out)
- A transferência de segmentos faz-se usualmente a pedido:
  - Em arquitecturas que suportem a falta de segmentos, certos
    segmentos de um programa podem ser transferidos para memória
    principal por necessidade

### Transferência de Páginas

O mecanismo normal de transferência de páginas é por
necessidade:

- Páginas de um programa que não sejam acedidas durante a execução
  de um processo não chegam a ser carregadas em memória principal
- Usam-se também políticas de transferência por antecipação para:
  - Diminuir o número de faltas de página
  - Optimizar os acessos a disco
- As páginas retiradas de memória principal são guardadas numa
  zona separada do disco chamada área de paginação:
  - Apenas se ainda não existir uma cópia atualizada da página em disco
- As páginas modificadas são transferidas em grupos para memória
  secundária de modo a optimizar os acessos a disco

### Swapping / Paging

- Quando é necessário libertar espaço na memória
  física o SO copia páginas para disco
  - Escolhe aquelas que previsivelmente não irão ser
    usadas brevemente
  - Zona do disco que as contém - “swap area”
- Terminologia: swapping vs. paging
  - Granularidade: todas as páginas do processo (processo
    swapped out) vs. páginas individuais
- Minimizar latência: pre-fetching
  - Traz páginas antes de serem pedidas

#### Algoritmos de Swapping de Processos ou de Segmentos

- Possíveis critérios para decidir qual o processo a
  transferir para disco:
  - estado e prioridade do processo: processos
    bloqueados e pouco prioritários são candidatos
    preferenciais
  - tempo de permanência na memória principal: um
    processo tem que permanecer um determinado
    tempo a executar-se antes de ser novamente enviado
    para disco
  - dimensão do processo

### Quanto espaço deve estar reservado/ocupado em memória física por um processo?

#### Espaços de Trabalho (working sets)

Espaço de trabalho de um processo num dado intervalo de tempo é igual ao conjunto de páginas acedidas pelo processo nesse intervalo de tempo.

- O espaço de trabalho de um processo tende a
  ter dimensão constante e muito menor que o
  seu espaço de endereçamento
  - SO pode tentar estimar essa dimensão!

![Inversamente Porpocional](./imgs/0011/graph.png#dark=1)

- Se estimarmos que o espaço de trabalho de
  um processo é W, podemos
  - Evitar colocar o processo em execução enquanto
    não houver pelo menos suficientes páginas livres
    em RAM
  - Limitar o número de páginas do processo em RAM

## Algoritmos de Substituição

### Algoritmos de Substituição de Páginas

- Óptimo

  - Retira a página cujo próximo pedido seja mais
    distante no tempo
  - Requer conhecimento futuro
  - Usado como “benchmark”

- FIFO:

  - Associar a cada PTE um timestamp de quando
    esta foi colocada em RAM
  - Muito eficiente mas não atende ao grau de
    utilização das páginas
    - Apenas ao seu tempo de permanência em memória
      primária

- Não usada recentemente (Not Recently Used, NRU):

  - Bits R e M mantidos na tabela de páginas
  - UGM automaticamente coloca R=1 quando há leitura, M=1
    quando há escrita
  - O paginador percorre regularmente as tabelas de páginas
    e coloca o bit R a 0
  - Páginas ordenadas em 4 grupos:
    - 0: (R = 0, M = 0) Não referenciada, não modificada
    - 1: (R = 0, M = 1) Não referenciada, modificada
    - 2: (R = 1, M = 0) Referenciada, não modificada
    - 3: (R = 1, M = 1) Referenciada, modificada
  - libertam-se primeiro as páginas dos grupos de número
    mais baixo

- Menos usada recentemente (Least Recently Used, LRU):
  - eﬁcaz segundo o princípio de localidade de referência
  - latência associada à sua implementação rigorosa.
- Aproximação:
  - Bit R na tabela de páginas
    - colocado a 1 pela UGM quando página é acedida
  - Gestor de memória do núcleo mantém um contador por página
    que indica a que “grupo etário” ela pertence
    - Actualizado regularmente pelo paginador
    - Quando R=0, grupo etário incrementa
    - Quando R=1, volta ao grupo etário inicial
    - Bit R recolocado a 0
  - Quando atingir um grupo etário máximo, a página passa para a
    lista das livres ou das livres mas modiﬁcadas

### Comparação: Segmentação e Paginação

#### Segmentação:

- [Vantagens](color:green):
  - adapta-se à estrutura lógica dos programas
  - permite a realização de sistemas simples sobre hardware simples
  - permite realizar eficientemente as operações que agem sobre
    segmentos inteiros
- [Desvantagens](color:red):
  - o programador tem de ter sempre algum conhecimento dos
    segmentos subjacentes
  - os algoritmos tornam-se bastantes complicados em sistema mais
    sofisticados, p.e., alocação de segmentos na memória fisica
  - o tempo de transferência de segmentos entre memória principal e
    disco torna-se incomportável para segmentos muito grandes
  - a dimensão máxima dos segmentos é limitada

#### Paginação:

- [Vantagens](color:green):
  - o programador não tem que se preocupar com a gestão de memória
  - os algoritmos de reserva, substituição e transferência são mais simples
    e eficientes
  - o tempo de leitura de uma página de disco é razoavelmente pequeno
  - a dimensão dos programas é virtualmente ilimitada
- [Desvantagens](color:red):
  - o hardware é mais complexo que o de memória segmentada, p.e.,
    instruções precisam de ser recomeçãveis
  - operações sobre segmentos lógicos são mais complexos e menos
    elegantes, pois têm de ser realizadas sobre um conjunto de páginas
  - o tratamento das faltas de páginas representa uma sobrecarga
    adicional de processamento
  - Tamanho potencial das tabelas de páginas

## Unix - Gestão de Memória

- Unix implementado sobre arquitecturas diferentes
- Dois grupos de implementações:
  - Segmentação com swapping
  - Paginação

### Paginação

- Um processo tem inicialmente 3 regiões:
  código, dados e stack
- Cada região tem uma tabela de páginas
  própria

![Table](./imgs/0011/table.png#dark=1)

#### Tabela pfdata

- Permite a gestão eficaz das páginas de memória
  física
- Indexada pelo número da página física
- Contém:
  - Estado da página (livre, existe cópia na área de swap
    ou num ficheiro executável, operação de leitura
    pendente)
  - Contador com número de processos que referenciam
    a página
  - Número de device e bloco onde existe cópia da página

Significado dos campos das tabelas

- P - present - indica se a pagina está residente na
  memória primária
- R - referenced - foi acedida ou referenciada
- M - modified - modificada
- C/W - copy-on-write
- PROT - bits de protecção
- Idade - algoritmo do page stealer
- End. Físico da page frame
- Nº do Dispositivo | Nº do Bloco - disco e bloco
  onde se encontra
- Tipo - swap, demand fill, demand zero

#### Substituição de Páginas

- Aproximação ao algoritmo Menos Usada
  Recentemente (LRU)
- Idade da página é mantida na PTE
- Page-stealer é acordado quando o número de
  páginas livres desce abaixo de um dado limite
- Percorre as PTE incrementando o contador de
  idade das páginas
- Se a página for referenciada a sua idade é
  anulada
- Se a página atingir uma certa idade marca-a para
  ser transferida

---

Slides:

- [Slides 9](https://drive.google.com/file/d/1c3-GbQ6ORWBfyodPDP9NQzFM5zutHaF4/view?usp=sharing)
