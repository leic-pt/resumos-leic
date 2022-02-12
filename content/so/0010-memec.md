---
title: Mecanismos de Gestão de Memória
description: Mecanismos de Gestão de Memória
path: /so/memec
type: content
---

# Mecanismos de Gestão de Memória

```toc

```

## Espaço de Endereçamento

- Conjunto de posições de memória que um
  processo pode referenciar
- E se referenciar outras posições de memória?
  - Hardware de gestão de memória desencadeia excepção
  - Tratada pelo SO (tipicamente termina processo)

### Hierarquia de Memória

- Memória principal (física ou primária):
  - tempo de acesso reduzido
  - bom desempenho com acessos aleatórios
  - custo elevado à reduzida dimensão
  - informação volátil
  - RAM + caches [ + registos ]
- Memórias secundárias (ou de disco):
  - tempo de acesso elevado
  - pior desempenho com acessos aleatórios (entre blocos diferentes)
  - custo reduzido, logo mais abundante
  - informação persistente

### Gestão de Memória - Obje:vos

- Gerir o espaço de endereçamento dos
  processos
  - assegurar que cada processo dispõe da memória
    que precisa
  - garantir que cada processo só acede à memória a
    que tem direito (protecção)
  - optimizar desempenho dos acessos

### Espaço de Endereçamento Virtual

![Endereçamento Virtual](./imgs/0010/virtual.png#dark=1)

### Endereços Reais vs. Virtuais

![Endereçamento Real vs Enderaçamento Virtual](./imgs/0010/realvirtual.png#dark=1)

### Endereçamento Virtual

- Espaço de endereçamento dos processos não
  linearmente relacionado com a memória física
- Endereços virtuais são sempre convertidos (pela UGM)
  para endereços reais
- Para minimizar a informação necessária à conversão, a
  memória virtual é logicamente dividida em blocos
  contíguos:
  - Endereço virtual = (bloco, deslocamento)
- Dois tipos de blocos:
  - Segmentos - dimensão variável.
  - Páginas - dimensão constante.
- Alguns blocos podem não residir em memória principal

## Princípio da Localidade de Referência

### Fragmentação

- Interna
  - Memória desperdiçada dentro de um bloco em
    memória
- Externa
  - Memória desperdiçada entre blocos em memória

### Segmentação

- Divisão dos programas em segmentos lógicos que
  reﬂectem a sua estrutura funcional:
  - roInas, módulos, código, dados, pilha, etc.
  - conversão de endereços virtuais linear em cada segmento
  - o programador pode ter que se preocupar com a gestão de
    memória quando escreve um programa
- Segmento é a unidade de:
  - carregamento em memória (eﬁciência)
  - proteção
- Dimensão dos segmentos: limitada pela arquitetura e
  não pode exceder a dimensão da memória principal

### Tradução de Endereços Virtuais em Memória Segmentada

![Memória Segmentada](./imgs/0010/segm.png#dark=1)

### Memória Virtual Segmentada

- Proteção:
  - veriﬁcação de limites de endereçamento intra-
    segmentos
  - veriﬁcação e limitação dos Kpos de acesso ao
    segmento: leitura, escrita e execução
  - processos diferentes têm tabelas de segmentos
    diferentes: espaços de endereçamento disjuntos e
    inacessíveis a terceiros
- Pode sofrer de fragmentação? De que :po?

### Paginação

- Blocos de tamanho fixo, chamados páginas

[Vídeo interessante](https://www.youtube.com/watch?v=-3Rt2_9d7Jg)

### Tradução de Endereços Virtuais em Memória Paginada

![Memória Paginada](./imgs/0010/pag.png#dark=1)

### Paginação: consequências

- Espaço de endereçamento virtual linear, i.e.,
  conRguo:
  - o programador não “vê” a gestão de memória
- Segmentos lógicos do espaço de endereçamento
  passam a ser compostos por múlKplas páginas
  - Passa a ser possível um segmento lógico estar
    parcialmente presente
  - Se uma instrução do processador aceder a endereços em
    mais que uma página, a instrução pode encontrar uma
    falta de página a meio da execução
- As instruções do processador têm de ser recomeçáveis

**Dimensão de Páginas**

- A dimensão das páginas (constante) é
  normalmente muito menor que a da memória
  principal e influencia:
  - A fragmentação
- Externa ou interna?
  - O número de faltas de páginas
  - Tempo da sua resolução (transferência)
  - A dimensão das tabelas de páginas e listas de
    páginas mantidas pelo sistema operativo
- Valor típico hoje em dia: 4 Kbytes

**Protecção**

- Verificação dos tipos de acesso: leitura, escrita e
  execução.
- Processos diferentes têm tabelas de páginas
  diferentes: espaços de endereçamento disjuntos e
  inacessíveis a terceiros

**Equipa UGM/núcleo do SO**

- A maioria dos acessos a memória são
  traduzidos e servidos pela UGM
  - Se processo está em modo uKlizador, mantém-se
    nesse modo
- Núcleo só se envolve na tradução nestes
  momentos:
  - Quando comuta para outro processo
  - Quando página acedida não está presente
  - Quando acesso é ilegal (endereço fora dos limites
    ou sem permissões)

## Tabela de Tradução de Endereços (Translation Lookaside Buffer, TLB)

![TLB](./imgs/0010/tlb.png#dark=1)

![TLB2](./imgs/0010/tlb2.png#dark=1)

- O ideal seria guardar na TLB não as últimas, mas as
  próximas páginas a que o programa irá aceder.
- Como isso é impossível de prever:

  - toma-se o funcionamento recente do programa como uma
    boa previsão para o que ele fará no futuro próximo.
  - se um programa acedeu a uma página, é expectável que os
    próximos acessos sejam dentro da mesma página.

- A dimensão destas tabelas é pequena, em geral (64,
  128 entradas), pois o seu custo é elevado:
  - a sua dimensão é cuidadosamente testada de forma a
    obter percentagens de sucesso muito elevadas (90-95%)
  - um factor que também influencia a dimensão da TLB é o
    quantum dos processos.
    - a TLB é limpa em cada comutação de processos
    - quanto maior for o quantum, maior é o número de
      páginas acedidas, o que leva à necessidade de ter mais
      entradas na TLB.

### Quanto ocupa a tabela de páginas?

![Tabela de Páginas](./imgs/0010/tabela.png#dark=1)

- Assumindo endereços de 64 bits e páginas de 4 Kbytes,
  quantas páginas pode ter o espaço de endereçamento
  de um processo?
  - 264/212=252 páginas
- Assumindo que cada entrada na tabela de páginas
  (PTE) ocupa 4bytes, qual a dimensão da tabela de
  páginas?
  - 22\*252=254 bytes=16 Petabytes
- Irrealista assumir que tabela de páginas caberá sempre
  em memória primária!

### Tabelas de Páginas Multi-Nível

![Multi Nível](./imgs/0010/multi.png#dark=1)

- Vantagem: apenas estão
  em memória as tabelas de
  páginas correspondentes
  às páginas que estão de
  facto a ser utilizadas pelo
  processo correspondente

![Níveis](./imgs/0010/nivel.png#dark=1)

## Partilha memória entre processos

- Basta ter, nas tabelas de páginas dos
  processos em causa, PTEs com a mesma base
- Os segmentos/páginas (virtuais) partilhados
  não precisam ser mapeados nos mesmos
  endereços virtuais em ambos os processos
- Consequências?

![Optimização](./imgs/0010/optim.png#dark=1)

### Criação de um Processo

- fork: duplica os segmentos de código, dados e
  pilha do pai
- Mas não é feita nenhuma cópia física de
  memória no momento do fork!
- As páginas só são copiadas se e quando tal for
  necessário
  - Copy on write

### Copy on write

- Quando ocorre o fork:
  - Aloca nova tabela de páginas para o processo filho
    e copia o conteúdo da tabela do pai
  - Nas PTEs com permissão de escrita (dados e
    pilha), retira permissão de escrita e ativa bit CoW
- Na tabela do pai e do filho

- Quando pai ou filho tentam escrever numa página
  partilhada por CoW, ocorre excepção
  - Pois não há permissão de escrita na PTE
- Núcleo acorda e:
  - Aloca nova página e copia para lá o conteúdo da página
    partilhada
  - Atualiza a PTE do processo onde ocorreu a excepção com:
- A base (endereço físico) da nova página
- Permissão de escrita ativada, CoW desativado
  - Caso a página original já só seja referenciada por um
    processo, atualiza a sua PTE também:
- Permissão de escrita ativada, CoW desativado

### Tratamento do Copy on Write

![Copy on Write](./imgs/0010/copy.png#dark=1)

### Unix e Linux

#### Unix: Primeiras Versões

- Primeiras implementações (até versão 7) executavam-
  se no PDP-11:
  - arquitectura segmentada com 16 bits
  - espaço de endereçamento de 64 Kbytes, dividido em oito
    segmentos de 8 Kbytes cada
- Gestão de memória muito simples:
  - Processos carregados na sua totalidade em memória
  - caso não houvesse espaço disponível em memória, o
    sistema operativo transferia para memória secundária os
    processos que estivessem bloqueados ou com menor
    prioridade
  - A transferência de processos era feita por um processo
    denominado swapper

#### Unix: versões Atuais

- Principalmente sobre arquitecturas paginadas
  - A versão Unix 3 BSD foi a primeira a suportar
    memória virtual paginada tal como a conhecemos
    hoje
- Na evolução introduzida pelo Unix V:
  - espaço de endereçamento dividido em três
    regiões: código, dados e pilha.
  - novas regiões podem ser criadas dinamicamente
    durante a execução dos programas
  - Cada região contém tabela de páginas própria

**Linux**

![linux](./imgs/0010/linux.png#dark=1)

- Tabelas de páginas
  mulKnível com três
  níveis
- Tabela de mais alto
  nível é designada por
  Page Global Directory
  (PGD)
- Tabelas de nível
  intermédio são
  designadas por Page
  Middle Directory (PMD)

---

Slides:

- [Slides 8](https://drive.google.com/file/d/1Y9PnNOpOngB3ofY7XQBn9noqTWUQaBTq/view?usp=sharing)
