---
title: Introdução
description: >
  Introdução a Sistemas Distribuídos.

  Caracterização de Sistemas Distribuídos.

  Modelos Fundamentais.
path: /sd/introducao
type: content
---

# Introdução

```toc

```

## Introdução a Sistemas Distribuídos

Considera-se um **Sistema Distribuído** aquele em que componentes de hardware ou software localizados em computadores ligados em rede, comunicam e coordenam suas ações através de troca de mensagens.

Computadores nesta rede podem estar separados por qualquer distância física, seja continental ou na mesma sala.

Esta definição resulta nas seguintes características:

- **Há concorrência** - Diferentes nós do sistema executam em concorrência.
- **Não há relógio global** - A comunicação entre nós é feita através de mensagens, que podem ser atrasadas. Não existe uma única noção global de tempo.
- **As falhas são (normalmente) independentes** - Falhas em um nó não afetam necessariamente outros nós.

### Acesso a Recursos - Serviços e Servidores

Um dos principais motivadores para a criação de sistemas computacionais (não só os distribuídos) é a necessidade de acesso a recursos.
Utilizadores esperam poder aceder a uma página web, desconhecendo o disco rígido onde a mesma se encontra.

As diferenças nos requisitos destes sistemas levam a que seja necessário definir mecanismos para o acesso.
Usa-se o termo **Serviço** para designar uma parte distinta de um sistema computacional que gere um conjunto de recursos e apresenta a sua funcionalidade a utilizadores e aplicações.

Por exemplo, um serviço de ficheiros apresenta operações de _escrita_, _leitura_ e _remoção_ sobre um conjunto de ficheiros.

Serviços restringirem o acesso a recursos através de um conjunto bem definido de operações, reflete a organização de sistemas distribuídos, em específico a comunicação por mensagens.
É necessário que os recursos sejam geridos por um processo que esponha uma interface de comunicação.

Um **Servidor** é um processo num computador numa rede que aceita pedidos de outros processos para cumprir um serviço e devolve uma resposta.
Os processos que fazem pedidos são chamados **Clientes** e podem estar em qualquer computador da rede.

### Desafios

Conforme referido anteriormente, os sistemas distribuídos apresentam algumas características que os tornam mais complexos, resultando em desafios que devem ser enfrentados. Os principais sendo:

- **Heterogeneidade** - Sistemas distribuídos são compostos por diferentes tipos de computadores, em redes diferentes, com diferentes arquiteturas, sistemas operativos e linguagens de programação. Protocolos Internet de comunicação são chave para esconder a diferença entre redes e middleware pode lidar com as diferenças restantes.
- **Abertura (Openness)** - Para uma dada definição de serviço podem existir várias implementações.
- **Segurança** - Um sistema distribuído seguro requer confidencialidade (proteção contra acesso por indivíduos não autorizados), integridade (proteção contra alteração ou corrupção) e disponibilidade (proteção contra interferência com os meios de acesso aos recursos).
- **Escalabilidade** - Um sistema distribuído escalável deve ser capaz de acompanhar o crescimento da sua utilização, sem que a sua performance se degrade ou que o seu custo aumente de forma exponencial.
- **Tratamento de Faltas** - Qualquer processo, computador ou network pode falhar independentemente dos outros. Portanto cada componente deve conhecer as possíveis falhas dos componentes em que depende e ser capaz de lidar com cada uma dessas falhas apropriadamente.
- **Concorrência** - A presença de múltiplos utilizadores num sistema distribuído é uma fonte de pedidos concorrentes aos seus recursos. Cada recurso deve ser desenhado para ser seguro num ambiente concorrente.
- **Transparência** - O objetivo da transparência é abstrair certos aspetos da distribuição, tornando desenvolvimento de aplicações mais simples.

## Modelos Fundamentais

**Modelos Fundamentais** de um sistema destilam as características essenciais necessárias para compreender o sistema. Permitem:

- Tornar explicitas todos os pressupostos relevantes sobre o sistema a ser modelado.
- Generalizar o que é possível ou impossível, dados esses pressupostos. Estas generalizações podem ser a garantia de propriedades desejadas, demonstradas através de análise lógica ou provas matemáticas.

Os aspetos do comportamento de sistemas distribuídos que são modelados são:

- **Interação** - O modelo de interação reflete a forma como a comunicação entre processos é realizada.
- **Faltas** - O modelo de faltas reflete a falibilidade dos componentes do sistema, definindo e classificando as faltas que podem ocorrer. Com base neste modelo, é possível analisar o potêncial impacto das faltas e definir como lidar com elas.
- **Segurança** - O modelo de segurança reflete a susceptibilidade do sistema a ataques, definindo e classificando os ataques que podem ocorrer. Com base neste modelo, é possível encontrar os riscos que corre o sistema e definir como o defender de ataques.

### Modelo de Interação

Processos interagem para realizar toda a atividade de um sistema distribuido.
Cada processo tem o seu estado, constituído pelo conjunto de dados que pode aceder e atualizar.
O estado de cada processo é completamente privado, ou seja, não pode ser acedido ou atualizado por outro processo.

Sendo assim, mensagens são transmitidas entre processos para transferir informação entre eles e coordenar a sua atividade.
A taxa na qual cada processo prossegue e o _timing_ de transmissão de mensagens entre eles não pode, em geral, ser previsto.
Também é difícil descrever todos os estados de um algoritmo distribuído, porque ele deve lidar com as falhas de um ou mais dos processos envolvidos ou a falha de transmissões de mensagens.

É preciso então modelar a interação entre processos de forma a que seja possível compreender o comportamento do sistema.

#### Características dos Canais de Comunicação

Independentemente do modo como os canais de comunicação são implementados, comunicação numa rede de computadores tem sempre as seguintes **propriedades de desempenho**:

- **Latência** - O tempo entre o começo da transmissão de uma mensagem num processo e o começo da sua receção no destino.
- **Largura de Banda** - A quantidade total de informação que pode ser transmitida num canal num dado intervalo de tempo.
- **Jitter** - A variação no tempo que leva a transmitir uma série de mensagens.

Outras considerações importantes para além das de desempenho:

- **Ordem de mensagens** - Se o canal assegura que as mensagens são recebidas na mesma ordem em que foram enviadas.
- **Repetição de mensagens** - Se o canal assegura que as mensagens são recebidas apenas uma vez.

#### Relógios

Cada computador num sistema distribuido tem o seu próprio relógio, que pode ser usado por processos para obter o tempo atual.
No entanto, mesmo que dois processos em computadores diferentes obtenham valores para o tempo atual ao mesmo tempo, não é garantido que os valores sejam iguais.

Isto é causado pelo facto de que os relógios, com o passar do tempo, se afastam do tempo real e a taxa a que este afastamento ocorre varia de computador para computador.
Mesmo que inicialmente os relógios do sistema distribuido estejam sincronizados, eventualmente irão divergir.

A **driva do relógio** é a taxa a que o relógio se afasta do tempo real.

#### Duas Variantes do Modelo de Interação

Na prática, é dificil colocar limites no tempo de execução de processos, latência ou na driva de relógios.
Sendo assim, usamos os dois casos extremos para criar variantes simples do modelo.

- **Sistema Distribuido Síncrono** - O tempo de execução de cada passo de um processo, a latência **e** a driva do relógio têm todos **limites superiores e inferiores conhecidos**. Simplificam os problemas a resolver, mas são pouco comuns na prática.
- **Sistema Distribuido Assíncrono** - O tempo de execução do processo, a latência **ou** a driva do relógio são **arbitrários**. Na prática, a maioria dos sistemas distribuidos são deste tipo.

Se um sistema distribuído não é síncrono, então é assíncrono.

### Modelo de Faltas

Em sistemas distribuidos, tanto os processos como os canais de comunicação podem falhar.
O modelo de faltas define os tipos de faltas que podem ocorrer de forma a permitir compreender os efeitos de cada.

#### Faltas Silenciosas (Omissão)

Uma falha silenciosa ocorre quando um componente do sistema distribuido deixa de realizar a sua função.

As faltas silenciosas podem tanto ocorrer em processos como em canais de comunicação.

Uma **falta silenciosa de processo** ocorre quando um processo pára e não responde a nenhum estímulo externo.
Caso seja detetável por outros processos é designada por **fail-stop**, caso contrario é designada por **crash**.

Num sistema distribuido **síncrono**, todas as faltas silenciosas de processo são **detetáveis** por _timeouts_ dado que é conhecido o limite superior do tempo de execução e da latência.
Ou seja, são do tipo fail-stop.

Por outro lado, num sistema distribuido **assíncrono**, é muito díficil distinguir se um processo falhou ou se apenas ocorreu um atraso (na execução ou na transmissão).

Uma **falta silenciosa de comunicação** ocorre quando um canal de comunicação não transmite uma mensagem.
Isto pode ocorrer em 3 etapas distintas do processo de comunicação, ilustrado na figura abaixo.

```mermaid
flowchart LR
    snd[Processo Emissor]
    snd-b[Buffer de Emissão]
    rcv-b[Buffer de Receção]
    rcv[Processo Recetor]
    snd-->snd-b-->|Canal de comunicação|rcv-b-->rcv
```

Caso a mensagem seja perdida antes de chegar ao buffer de emissão, é designada por **send-omission**.

Caso seja perdida depois de chegar ao buffer de receção, mas antes de chegar ao processo recetor, é designada por **receive-omission**.

Por fim, se for perdida no próprio canal de comunicação, trata-se de uma **channel-omission**.

#### Faltas Arbitrárias (Bizantinas)

As faltas préviamente abordadas são comuns e consideradas **benignas**, por outro lado, faltas arbitrárias são o pior cenário possível, em que qualquer erro pode ocorrer.

Uma **falta arbitrária de processo** não responde ou responde de forma errada a um estímulo, ou quando um processo responde sem receber qualquer estímulo.
Não é garantido que a falta ocorra de forma consistente, tornando a deteção destas faltas muito difícil.

Uma **falta arbitrária de comunicação** ocorre quando um canal de comunicação altera os conteúdos de uma mensagem, quando uma mensagem é repetida, ou quando é entregue uma mensagem que não existe. Como será visto já de seguida, estas faltas são mais simples de mascarar do que as de processo.

#### Mascarar Faltas

Cada componente de um sistema distribuido é geralmente construído de um conjunto de outros componentes.
É possível construir componentes confiáveis a partir de componentes que exibem faltas.

Conhecendo as características das faltas de cada componente, permite que um novo serviço mascare as faltas dos componentes subjacentes.
Define-se **mascarar** como esconder por completo a falta ou torná-la noutra falta mais aceitável.

Alguns exemplos de serviços que mascaram faltas:

- **Checksums** podem ser usadas para detetar corrupção de mensagens, e **números de sequência** para detetar repetição de mensagens. Mascarando assim faltas arbitrárias de comunicação.
- O protocolo [**TCP**](/rc/transporte) mascara faltas silenciosas de comunicação, garantido que as mensagens são entregues através de retransmissões.

### Modelo de Segurança

Este modelo será abordado mais tarde.

## Referências

- Coulouris et al - Distributed Systems: Concepts and Design (5th Edition)
  - Secções 1.1, 1.4, 1.5 e 2.4
- Departamento de Engenharia Informática - Slides de Sistemas Distribuídos (2022/2023)
  - 1 Introdução, 4a Tolerância a Faltas
