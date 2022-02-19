---
title: Gestão de Memória
description: >-
	Gestor de Memória.
	Endereçamento Virtual.
	Segmentaçao e paginação.
	Otimização de tradução de endereços.
	Tabelas de Páginas Multi-nível.
	Partilha de memória entre processos.
	Algoritmos de gestão de memória.
	Comparação entre paginação e segmentação
path: /so/memory-management
type: content
---

# Gestão de Memória

```toc

```

## Gestor de Memória

Definimos **espaço de endereçamento** como o conjunto de posições de memória que um processo pode referenciar. 
Mais uma vez, é a função do SO oferecer ao utilizador uma interface que lhe permita aceder indiretamente à memória, de forma segura. 
Esta interface deve então impedir um processo de aceder a posições que não pertencem ao seu espaço de endereçamento (lançando uma exceção, e resolvendo-a apropriadamente - tipicamente terminando o processo).

O gestor de memória deve também ter em consideração que a memória é constituída por: 

- **Memória Principal (física ou primária)**:
-- tempo de acesso reduzido;
-- bom desempenho com acessos aleatórios;
-- custo elevado;
-- reduzida dimensão;
-- informação volátil;
-- RAM + caches [ + registos ].

- **Memórias secundárias (ou de disco)**
-- tempo de acesso elevado;
-- pior desempenho com acessos aleatórios (entre blocos diferentes);
-- custo reduzido;
-- mais abundante;
-- informação persistente.

O gestor de memória tem então a responsabilidade de gerir o espaço de endereçamento dos processos de forma que:

- assegurar que cada processo dispõe da memória que precisa;
- garantir que cada processo só acede à memória a que tem direito;
- optimizar desempenho dos acessos.

## Endereçamento Virtual

Os endereços referenciados por um processo não correspondem diretamente ao espaços em memória onde a informação está guardada.
A unidade de gestão de memória (UGM) estabelece um filtro que converte os endereços virtuais em endereços reais.
Para minimizar a informação necessária à conversão, a memória virtual é logicamente dividida em blocos contíguos. 
Um endereço virtual corresponde então a um par (bloco, deslocamento). 

A maioria dos acessos a memória são traduzidos e servidos pela UGM, sendo que um processo em modo utilizador mantém-se nesse modo.
O núcleo só se envolve na tradução quando:
- comuta para outro processo;
- a página acedida não está presente (vamos ver mais à frente);
- acesso é ilegal (fora dos limites ou sem permissões)

Devido às limitações da memória principal, nem todos os blocos podem residir lá. 
Desta forma é relevante tentar prever que blocos vão ser acedidos num futuro príxmo. 
Para isto é usado o **princípio da localidade de referência**: 
se um certo endereço é acedido, a probabilidade de haver um acesso a um endereço primo num futuro próximo é mais elevada.

Um bom gestor de memória deve ainda evitar **fragmentação**:
- **interna**: desperdício de memório __dentro__ de um bloco;
- **externa**: desperdício de memório __entre__ blocos.

Vamos então estudar dois modelos de gestão de memória: segmentação e paginação.

### Segmentos 

A **segmentação** consiste na divisão dos programas em segmentos lógicos que refletem a sua estrutura funcional (rotinas, módulos, código, dados, pilha, etc). 
Assim, a conversão de endereços virtuais é linear em cada segmento.
O programador pode ter que se preocupar com a gestao de memória quando escreve um programa.
Nesta solução, o segmento torna-se a unidade de carregamento em memória e de proteção.
A dimensão dos segmentos fica então limitada: nomeadamente não pode exceder a dimensão da memória principal.

// insert image (slide 11)

A memória virtual segmentada tem a seguinte proteção:
- verificação de limites de endereçamento intra-segmentos;
- verificação e limitação dos tipos de acesso ao segmento: leitura, escrita e execução;
- processos diferentes têm tabelas de segmentos diferentes: espaços de endereçamento disjuntos e inacessíveis a terceiros.

Este tipo de gestão é muito suscetível a fragmentação externa.

### Páginas

A **paginação** consiste em constituir a memória por blocos de tamanho fixo, chamados **páginas**.

// insert images (slide 14)

Nesta solução, os segmentos lógicos do espaço de endereçamento passam a ser compostos por múltiplas páginas, sendo possível um segmento lógico estar parcialmente presente.
Se uma instrução do processador aceder a endereços em mais que uma página, a instrução pode encontrar uma falta de página a meio da execução.
Desta forma, as instruções do processador têm de ser recomeçáveis.

Nesta solução, é relevante discutir qual a melhor dimensão para as páginas. Esta deverá ter em conta que influencia:
- a fragmentação interna;
- o número de faltas de páginas;
- tempo de transferência de páginas;
- a dimensão das tabelas de páginas e listas de páginas mantidas pelo sistema operativo.

Hoje em dia, o valor típico para o tamanho de páginas é 4 KBytes.

A memória paginada tem a seguinte proteçao:
- verificação dos tipos de acesso: leitura, escrita e execução;
- processos diferentes têm tabelas de páginas diferentes: espaços de endereçamento disjuntos e inacessíveis a terceiros.

## Otimização de tradução de endereços

Para tornar o acesso a páginas o mais rápido possível, a UGM guarda uma **tabela de tradução de endereços** ou **TLB** (__translation lookaside buffer__).
Esta tabela permite acesso bastante mais rápido às páginas pois está guardada em hardware, tal como a UGM.

// inserir imagem (slide 20)

A ideia é que as próximas páginas a que um programa aceda estejam nesta tabela. 
Como é impossível prever isso, mais uma vez, a UGM toma o comportamento recente do programa como uma boa previsão do seu futuro próximo.
A dimensão desta tabela é pequena, em geral (64, 128 entradas), uma vez que o seu custo é elevado.
A sua dimensão é testada de forma a obter percentagens de sucesso muito elevadas (90-95%).

Um fator que também influencia a dimensão da TLB é o quantum dos processos.
A TLB é limpa em cada comutação de processos pelo que quanto maior for o quantum, maior é o número de páginas acedidas, o que leva à necessidade de ter mais entradas na TLB.

O carregamento das páginas na TLB é feito de acordo com o seguinte diagrama:

// inserir imagem (slide 21)

## Tabelas de páginas multi-nível

Assumindo que o espaço de endereçamento virtual tem endereços de 64 bits e páginas de 4 Kbytes ($2^12$ bytes), temos que o espaço de endereçamento virtual consegue guardar $\frac{2^{64}}{2^{12}} = 2^{52}$ páginas.
Se uma entrada na tabela de páginas ocupar 4 bytes, temos que a tabela de páginas terá então $2^2 \cdot 2^{52} = 2^{54}$ bytes, ou seja 16 Petabytes.

Ora, isto é muita memória. É então necessária uma forma de endereçar as páginas sem consumir tanta memória. É então usada uma **tabela de páginas multi-nível**.
Existe uma tabela de páginas de nível 1, que endereça páginas que, elas próprias, consistem em tabelas de páginas.
Isto permite, entre outros, que só estejam em memória tabelas de páginas correspondentes às páginas que estão de facto a ser utilizadas pelo processo correspondente.

// inserir imagem (slide 25)

// TODO acabar isto

## Partilha de memória entre processos

Para partilhar memória entre processos, basta ter, nas tabelas de páginas dos processos em causa, entradas com a mesma base.
Os blocos (virtuais) partilhados não precisam de ser mapeados nos mesmos endereços virtuais em ambos os processos.

Partilhando memória entre processos, conseguimos ser mais eficientes a criar processos novos.
Note-se que o fork() duplica o contexto de um processo pai.
No entanto, não é feita nenhuma cópia física de memória no momento do fork.
As páginas só são copiadas se e quando for necessário. 
Isto acontece se e só se algum dos segmentos de memória (do pai ou do filho) for alterado.
Nesse caso, então, a memória é copiada e o bloco relevante é alterado para registar a alteração.
A esta noção dá-se o nome de **_copy on write_**.
Quando ocorre um fork() o gestor de memória:
- aloca uma nova tabela de páginas para o processo filho e copia o conteúdo da tabela do pai;
- nas entradas da tabela (tanto da do filho como da do pai) com permissão de escrita (dados e pilha), retira permissão de escrita e ativa bit CoW;
- quando o pai ou o filho tentam escrever numa página partilhada por CoW, ocorre uma exceção (pois não há permissão de escrita). Então, o núcleo acorda e:
-- aloca uma nova página, para onde copia o conteúdo da página partilhada;
-- atualiza a entrada da tabela do processo onde ocorreu a exceção com a base (endereço físico) da nova página e novas permissões (escrita ativada, CoW desativado);
-- caso a página original já só seja referenciada por um processo, atualiza a entrada na tabela de páginas que lhe corresponde, atualizando as permissões (escrita ativada, CoW desativado).

## Algoritmos de Gestão de Memória

Como já sabemos, a memória principal é escassa pelo que temos de a gerir eficazmente. Isto implica tomar decisões em relação aos conteúdos que lá são guardados, nomeadamente decisões de:
- alocação: onde colocar um bloco na memória primária;
- transferência: quando transferir um bloco de memória secundária para memória primária e vice-versa;
- substituição: qual o bloco a retirar da memória.

Vamos estudar algoritmos que tratam estas três situações.

### Alocação

Alocar memória em sistemas com paginação é muito simples: 
basta encontrar uma págia livre, o que normalmente pode ser feito consultando uma lista de páginas livres guardada pelo SO.

Para segmentaçao, o tamanho variável dos segmentos torna mais complexa a reserva de espaço para um segmento.
Na libertação de memória é necessário recompactar os segmentos.

Para a reserva de segmentos, podemos usar vários critérios de escolha:
- **_best-fit_** (o menor possível):
-- gera elevado número de fragmentos;
-- em média percorre-se metade da lista de blocos livres na procura (com lista ordenada por tamanho);
-- a lista tem de ser percorrida outra vez para introduzir o fragmento.

- **_worst-fit_** (o maior possível):
-- pode facilmente impossibilitar a reserva de blocos de grandes dimensões;
-- a lista de blocos livres tem de ser percorrida para introduzir o fragmento.

- **_first-fit_** (o primeiro possível):
-- minimiza tempo gasto a percorrer a lista de blocos livres;
-- gera muita fragmentação externa;
-- acumula muitos blocos pequenos no início da lista, ficando para o fim os blocos maiores.

- **_next-fit_** (o primeiro possível, a seguir à pesquisa anterior):
-- espalha os blocos pequenos por toda a memória.

### Transferência

Há três abordagens para a transferência de segmentos:
- a pedido (**on request**): o programa ou o sistema operativo determinam quando se deve carregar o bloco em memória principal (normalmente usado na memória segmentada);
- por necessidade (**on demand**): o bloco é acedido e gera-se uma falta (de segmento ou de página), sendo necessário carregá-lo para a memória principal (normalmente usado na memória paginada);
- por antecipação (**prefetching**): o bloco é carregado na memória principal pelo sistema operativo porque este considera fortemente provável que ele venha a ser acedido nos próximos instantes.

**Transferência de Segmentos**

A transferência de segmentos faz-se usalmente a pedido: em arquiteturas que suportem a falta de segmentos, certos segmentos de um programa podem ser transferidos para memória principal por necessidade.

Normalmente, para executar um processo são necessários em memória pelo menos um segmento de código, de dados e de stack.
Caso haja escassez de memória, os segmentos de outros processos que não estejam em execução são transferidos na íntegra para disco (**_swapping_**).
Os segmentos são guardados numa zona separada do disco chamada área de transferência (**_swap area_**).
Quando são transferidos todos os segmentos de um processo diz-se que o processo foi transferido para disco (**_swapped out_**).

**Transferência de Páginas**

O mecanismo normal de transferência de páginas é por necessidade.
Desta forma, páginas de um programa que não sejam acedidas durante a execução de um processo não chegam a ser carregadas em memória principal.
Usam-se ainda políticas de transferência por antecipação para diminuir o número de faltas de páginas e otimizar os acessos a disco.
As páginas retiradas de memória principal são guardadas numa zona separada do disco chamada área de paginação (apenas se ainda não existir uma cópia atualizada da página em disco).
As páginas modificadas são transferidas em grupos para memória secundária de modo a otimizar os acessos disco.

Quando é necessário libertar espaço na memória física, o SO copia páginas para disco, guardando-as na _swap area_.
As páginas que vão para disco são aquelas que o SO prevê que não serão acedidas num futuro próximo.
Neste contexto, estabelecemos uma diferença entre **_swapping_** - guardar todas as páginas de um processo em disco - e **_paging_** - guardar páginas individuais em disco.
Mais uma vez, para minimizar latência, o SO faz _pre-fetching_ quando faz _swapping_ das páginas de um processo.

Possíveis critérios para decidir qual o processo a transferir para disco:
- estado e prioridade do processo: processos bloqueados e pouco prioritários são candidatos preferenciais;
- tempo de permanência na memória principal: um processo tem que permanecer um determinado tempo a executar-se antes de ser novamente enviado para disco;
- dimensão do processo.

Definimos o **espaço de trabalho** de um processo como o conjunto de páginas acedidas pelo mesmo num intervalo de tempo. 
O espaço de trabalho de um processo tende a ter dimensão constante e muito menor que o seu espaço de endereçamento.
Se o SO estimar essa dimensão, pode evitar colocar o processo em execução enquanto não existirem suficientes páginas disponíveis em RAM.

### Substituição

Analisaremos apenas soluções de substituição para sistemas com paginação.
A heurística para o algoritmo de substituição ótimo é que devemos (mais uma vez) retirar a página cujo próximo pedido seja mais distante no tempo.
Para estimar isto, vamos medir o uso recente das páginas.
Para isto podemos usar um de dois sistemas:

Sistema **NRU** (_Not Recently Used_):
- em cada entrada da tabela de páginas são mantidos bits **R** e **M**;
- a UGM coloca R=1 quando há leitura na página e M=1 quando há escrita;
- o paginador percorre regularmente as tabelas de páginas e coloca o bit R a 0;
- obtemos assim 4 grupos de páginas:
-- 0 (R = 0, M = 0): Não referenciada, não modificada;
-- 1 (R = 0, M = 1): Não referenciada, modificada;
-- 2 (R = 1, M = 0): Referenciada, não modificada;
-- 3 (R = 1, M = 1): Referenciada, modificada;
- libertam-se primeiro as páginas dos grupos de número mais baixo.

Sistema **LRU** (_Least Recently Used_):
- eficaz segundo o princípio de localidade de referência;
- latência associada à sua implementação é rigorosa;
- em cada entrada na tabela de páginas é mantido um bit **R**;
- a UGM coloca R=1 quando a página é acedida (leitura ou escrita);
- gestor de memória do núcleo mantém um contador por página que indica a que "grupo etário" ela pertence:
-- atualizado regularmente pelo paginador;
-- quando R=0, grupo etário incrementa;
-- quando R=1, volta ao grupo etário inicial, recolocando R=0.
- quando atingir um grupo etário máximo, a página passa para a lista das livres mas modificadas.

## Comparação entre paginação e segmentação

**Segmentação**

Vantagens:
- adapta-se à estrutura lógica dos programas;
- permite a realização de sistemas simples sobre hardware simples;
- permite realizar eficientemente as operações que agem sobre segmentos inteiros.

Desvantagens:
- o programador tem de ter sempre algum conhecimento dos segmentos subjacentes;
- os algoritmos tornam-se bastante complicados em sistemas mais sofisticados;
- o tempo de transferência de segmentos em memória principal e disco torna-se incomportável para segmentos muito grandes;
- a dimensão máxima dos segmentos é limitada.

**Paginação**

Vantagens:
- o programador não tem que se preocupar com a gestão de memória;
- os algoritmos de reserva, substituição e transferência são mais simples e eficientes;
- o tempo de leitura de uma página de disco é razoavelmente pequeno;
- a dimensão dos programas é virtualmente ilimitada.

Desvantagens:
- o hardware é mais complexo que o de memória segmentada (por exemplo, instruções precisam de ser recomeçáveis);
- operações sobre segmentos lógicos são mais complexos e menos elegantes, pois têm de ser realizadas sobre um conjunto de páginas;
- o tratamento das faltas de páginas representa uma sobrecarga adicional de processamento;
- tamanho potencial das tabelas de páginas.
