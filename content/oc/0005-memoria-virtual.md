---
title: Memória Virtual
description: >-
  Memória Virtual.
  Tradução do Endereço.
  Tabelas de Página (page tables).
  Tabelas Invertidas (inverted tables).
  Translation Lookaside Buffer (TLB).
  Proteção de Memória.
path: /oc/memoria-virtual
type: content
---

# Memória Virtual

```toc

```

Usando a memória principal como uma ["cache" para o armazenamento secundário](color:pink)
(no disco), esta tem que ser gerida tanto pelo _hardware_ do CPU como pelo
sistema operativo (OS). Assim, cada programa é compilado para o seu próprio espaço de
endereçamento, um [espaço de endereçamento virtual](color:purple). Nos programas que
partilham a memória principal, cada um tem direito a um espaço de endereçamento físico
privado que é frequentemente usado para código e dados, assim como é protegido dos
outros programas. O CPU traduz o endereço virtual para um enderço físico,
tendo, por isso, a VM um "bloco" que se chama [página](color:pink) e em vez de
dizermos que houve um _"miss"_ dizemos que houve uma [_page fault_](color:pink).

Quando dois programas [partilham memória física](color:orange), isto significa que o
espaço de endereçamento de um programa está divido em páginas (todas de um tamanho
fixo) ou em segmentos (de tamanho variável). O início da localização de cada página,
quer seja na memória principal ou secundária, é contido na tabela de página do programa.

![Memória virtual](./assets/0005-memoriavirtual.png#dark=3)

## Tradução do Endereço

O [endereço virtual](color:pink) é traduzido num [endereço físico](color:purple)
através de uma combinação de _hardware_ e _software_. Desta forma, cada pedido de
memória precisa de, **primeiro que tudo**, um espaço físico. Quando há uma _miss_ na
memória vitual, isto é, quando a página não está na memória física, é o que chamamos
de [_page fault_](color:red).

![Tradução de endereço](./assets/0005-traducao.png#dark=3)

Sempre que a cache acomoda um subcojunto de posições da memória principal, a memória
principal acomoda um subconjunto de posições da memória virtual. Cada
[bloco corresponde a uma página](color:pink). A [dimensão](color:pink) é geralmente
bastante elevada de modo a aumentar a eficiência quando o disco é acedido, e também
reduz a dimensão da tabela de tradução; porém, quanto maior for a página, maior é a potencial
perda de memória (em média, 50% da dimensão da página); valores típicos de página são os 4
ou 8 Kbytes.

Uma página pode ser posicionada em qualquer [espaço de memória](color:purple) visto a memória principal ter associatividade total.

![Tradução usando tabela de página](./assets/0005-traducao2.png#dark=3)

## Tabelas de Páginas

As [tabelas de páginas](color:pink) guardam o posicionamento da informação num array
de entradas todas indexadas pelo número da página virtual. A tabela de páginas
regista o endereço de memória física para onde aponta a página do endereço virtual
além de outros bits de estado (_dity_, _referenced_, ...);
caso contrário, o [PTE](color:pink) pode referir outra localização em troca de espaço no disco.

### Trocas e Escritas

Tal como já tinhamos visto em memória física, ao fazermos uma
[troca em memória virtual](color:pink), de modo a reduzirmos o número de _page faults_
é preferível usar o método LRU. Assim, temos que ter um _reference bit_ na PTE que
está a 1 quando temos acesso à página e é **periodicamente limpo a 0** pelo OS. Se o
_reference bit_ está a zero quer dizer que [já não é usado há algum tempo](color:purple).

A escrita em disco demora milhões de ciclos, visto que vamos fazendo um bloco de cada
vez e não localizações individuais, o que torna o _write-through_ imprático. Por isso
temos que usar o _write-back_ sendo que o [_dirty bit_ é definido](color:purple)
quando a página é escrita.

### Tamanho das Tabelas de Página

Um problema comum na paginação de sistemas é que a dimensão de uma tabela de página
não é obrigada a traduzir os endereços: apenas precisa de alocar numa
[região contida](color:pink) a memória física. Por exemplo, se temos um espaço virtual
com $2^{32}$ bytes e páginas com 4 kbytes, ou seja $2^{12}$ bytes, temos uma tabela com
$2^{20}$ entradas visto que $32-12=20$, ou seja temos 1 milhão entradas!

### Hierarquia das Tabelas de Página

Contudo, a questão vem: como é que podemos hierarquizar as nossas tabelas de páginas?
Uma solução comum para este problema é [implementar a tradução](color:pink) com a
hierarquia da tradução das tabelas.

![Hierarquia](./assets/0005-hierarquia.png#dark=3)

:::tip[Exemplos]

Para mais exemplos de cálculos com hierarquia de memória é recomendada a
realização da 5ª ficha das aulas práticas ou ver a sua resolução.

:::

## Tabelas Invertidas

A tradução de endereços é baseada em [_hash tables_](color:purple). Uma qualquer
função hash H(x) é aplicada ao endereço virtual de modo a encontrar uma fila
particular de descriptores composta pelos pares [página virtual - página física](color:pink)
, que correspondem a endereços virtuais dando origem ao mesmo valor da função hash H(x)
em termos de colisões. Assim, o endereço físico necessário pode, ou não, estar presente
nessa mesma fila de descriptores.

![Tabela invertida](./assets/0005-tabelainvertida1.png#dark=3)

![Tabela invertida](./assets/0005-tabelainvertida2.png#dark=3)

Sabemos, ainda, que o tamanho da tabela de página invertida é [proporcional](color:pink)
ao tamanho do espaço de endereçamento físico.

Assim, é necessária [memória extra](color:blue) para aceder a tradução de VA para PA.
Isto faz com que os acessos à memória sejam ainda mais caros, e a maneira de resolver
o problema de _hardware_ é através de um [_Translation Lookaside Buffer_](color:pink)
isto é, uma **TLB**, que corresponde a uma cache mais pequena que acompanha os endereços
acedidos de modo a evitar ter que recorrer à tabela de página para os encontrar.

## _Translation Lookaside Buffer_ ou TLB

![TLB](./assets/0005-TLB.png#dark=3)

Tal como em qualquer outra cache, a TLB pode ser organizada de modo a ser totalmente
associativa, ou diretamente mapeada. O tempo de acesso à TLB é extremamente menor que
o tempo de acesso à cache visto que as TLBs são muito menores e são desenhadas para ser rápidas!

![TLB](./assets/0005-TLBmem.png#dark=3)

Assim, quando ocorre um [TLB _miss_](color:pink), é necessário reconhecer como _miss_
antes que o registo do destino seja sobrescrito, dando origem a uma exceção. Assim
o _handler_ copia o PTE da memória para a TLB, reiniciando a instrução e, caso a página
não esteja presente, irá ocorrer uma _page fault_.

No caso de uma [_page fault_](color:pink), é utilizado um endereço de memória virtual
falhado para encontra o PTE, localiza a página do disco, escolhe a página que pretende
repôr (caso seja _dirty_ escreve no disco primeiro), a página é lida para memória e
a tabela de página é atualizada fazendo com que o processo possa funcionar novamente, e
por isso, a instrução que falha é reiniciada.

![Exemplo](./assets/0005-exemplo.png#dark=3)

### Interação entre a TLB e a Cache

![Interação](./assets/0005-interaction.png#dark=3)

Se a tag da cache usa um endereço de memória, é necessário traduzir antes de ir
procurar a cache. Uma alternatica é usar uma tag de endereço de memória virtual,
contudo, tal pode ser complicado graças a _aliasing_, isto é, diferentes endereços
virtuais para endereços físicos partilhados.

Mas, porque é que a [cache não é virtualmente endereçada](color:pink)? Uma cache
virtualmente endereçada apenas necessitaria da tradução de endereços em caso de haver
cache _miss_. Porém, dois programas que estão a partilhar memória têm que ter dois
endereços de memória virtual diferentes para o mesmo endereço físico (_aliasing_),
desta forma, tem que haver duas cópias dos dados partilhados na cache e em duas
entradas na TLB o que podem dar origem a problemas de coerência. Para isto, é
necessário atualizar todas as entradas da cache com o mesmo endereço físico ou a
memória torna-se inconsistente.

### Redução do Tempo de Tradução

Sabendo a interpretação de endereços virtuais pela TLB é representada da seguinte forma:

| Virtual page index | Virtual offset |
| :----------------: | :------------: |

E a interpretação dos endereços físicos pela cache é representada da seguinte forma:

| Tag | Index | Offset |
| :-: | :---: | :----: |

Como é que podemos paralelizar o acesso? O campo do _offset_ do endereço virtual não
participa no processo de tradução dos endereços, assim, se o offset do endereço
virtual é maior ou igual ao index mais o offset, o campo do index da cache está
incluido no offset do endereço virtual. Por isso, a cache pode ser lida em
[paralelo com o teste da TLB](color:pink).

Este acesso paralelo pode originar uma sobreposição entre o acesso à cache e o acesso
à TLB, visto que funciona em bits de ordem superior do VA que são usados para aceder à
TLB enquanto os bits de ordem inferior são usados como index para a cache.

![Paralelo](./assets/0005-paralelo.png#dark=3)

![Paralelo](./assets/0005-paralelo2.png#dark=3)

Por isso, um dos seguintes cenários pode ocorrer:

- [_Hit_ tanto na TLB como na cache](color:yellow): tempo de acesso parecido ao tempo
  de acesso à cache;
- [_Hit_ na TLB mas _miss_ na cache](color:orange): tempo de acesso parecido ao acesso
  à memória principal e o cache _miss_;
- [_Miss_ na TLB](color:red): é necessário esperar pela tradução, pela hierarquia ou
  pela tabela invertida, assim como não existe um ganho muito elevado no acesso à cache.

## Proteção de Memória

Como é evidente, diferentes tarefas podem partilhar partes dos seus espaços de
endereçamento virtual, mas é necessário [proteger contrar acessos errantes](color:pink).
Para tal, precisamos de ajuda do OS.

Visto que o suporte _hardware_ para porteção do OS, temos um modo supervisor
previlegiado, isto é, o [_kernel mode_](color:purple), instruções previlegiadas,
tabelas de páginas e outros estados de informação que só podem ser acedidos com o modo
supervisor e uma chamada de exceção do sistema.

### Hierarquia de Memória

Se tivermos a ver em termos de panorama geral, os princípios comuns aplicam-se a todos
os níveis da hierarquia de memória, baseado nas noções de _caching_. Assim, a cada
nível de hierarquia temos:

- [_Block placement_](color:yellow): determinado pela associatividade; é mapeado
  diretamente (só tem uma escolha de posicionamento), tem uma associatividade
  com um set de _n_ sentidos (tem _n_ escolhas dentro de um set), ou é totalmente
  associativo (pode ir para qualquer localização). Quanto maior for a associatividade,
  menor é o _miss rate_, aumenta a complexidade, custo e tempo de acesso.

- [_Finding a block_](color:orange): tem caches _hardware_ que reduzem a comparação
  de modo a reduzir o custo assim como memória virtual numa tabela de procura de
  associatividade total fazível e tem um _miss rate_ reduzido.

- [_Replacement on a miss_](color:red): escolha de entrada para substituir em caso de
  miss que pode ser através da política LRU ou aleatório; em termos de memória
  virtual o LRU tem uma aproximação com o suporte de _hardware_.

- [_Write Policy_](color:pink): como já tinhamos visto anteriormente, podemos ter
  _write-throughs_ que atualizam tanto os níveis superiores como inferiorese
  simplificam a troca mas precisam de um _buffer_ de escrita; ou _write-backs_ que apenas atualizam os níveis superior e só atualizam os inferiores quando o bloco é
  resposto, ou seja, é necessário manter mais estado. Assim, em termos de memória
  virtual, só o _write-back_ é fazível, visto que existe uma latência de escrita no
  disco.

[_Cache Design Trade-offs_](color:green)
![_Cache Design Trade-offs_](./assets/0005-design.png#dark=3)
