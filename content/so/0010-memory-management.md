---
title: Gestão de Memória
description: >-
	// TODO
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
