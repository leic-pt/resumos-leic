---
title: Pipelines
description: >-
  Pipelines.
  Pipeline Hazards.
  Exeções e Interrupções.
path: /oc/pipelines
type: content
---

# Pipelines

```toc

```

De modo a aumentar a rapidez do processador podemos implementar
uma técnica conhecida como _[pipelining](color:pink)_.
A ideia é manter cada parte do processador sempre ocupada, dividindo as instruções em
fases sequenciais ou etapas, permitindo que estas possam ser processadas por cada
unidade do processador em **paralelo**. Incorporando este método conseguimos obter um
[maior throughput](color:yellow) mas a latência das instruções não muda visto que o
tempo para executar uma instrução não é reduzido.

A Pipeline do MIPS tem [5 etapas](color:pink) (stages):

- **[IF](color:green): Instruction Fetch** - a instrução é lida
- **[ID](color:green): Instruction Decode** - leitura de registos envolvidos
- **[EX](color:green): Execute** - a operação aritmética é executada ou o endereço é calculado
- **[MEM](color:green): Memory** - acesso à memória
- **[WB](color:green): Write-Back** - escrever o resultado num registo

![Divisão de Etapas da Pipeline](./assets/0006-pipeline.png#dark=1)

São mantidos registos entre os andares do pipeline, para controlo. A cada ciclo de relógio, a execução
passa de um andar da pipeline para outro. Tal significa que o tempo de duração de um ciclo corresponde
ao [tempo de execução do andar mais lento](color:pink). Por exemplo, se todas as etapas demorarem 200ps e
a etapa de MEM tiver uma duração de 250ps, cada ciclo de relógio levaria 250ps. É de notar que caso não
houvesse pipelining, cada ciclo de relógio corresponderia à soma da duração de todas as etapas, neste caso 1050ps.

Existe assim, uma redução susbstancial do tempo total de execução ao permitir a realização de
várias instruções (com diferentes fases) simultaneamente. Assim que a pipeline estiver cheia, uma instrução
é completada a cada ciclo, o que nos dá um CPI de 1. Se todas as etapas tiverem balanceadas, i.e. demorarem todas o mesmo tempo:

$$
\text{TimeInstructions}_{\text{pipelined}} = \frac{\text{TimeInstructions}_{\text{non pipelined}}}{\text{Number of Stages}}
$$

## ISA do MIPS & Pipeline

O Instruction-Set Architecture (**ISA**) do MIPS foi desenhado para pipelining. Logo:

1. Todas as instruções são do mesmo tamanho (32-bits) - mais fácil fazer fetch e decode num ciclo.
2. Existem [poucos formatos de instrução](/oc/linguagem-computador/#categorias-de-instruções) - mais fácil fazer decode e ler registos numa etapa.
3. Apenas ocorrem operações de memória em _Loads_ e _Stores_ - podemos usar o passo de execução para calcular endereços de memória.
4. Cada instrução escreve no máximo 1 resultado - nos últimos andares da pipeline (MEM ou WB)
5. Operandos têm que estar alinhados em memória - uma transferência de dados leva apenas a um acesso à memória de dados

## Problemas de Pipelining

Apesar das pipelines nos ajudarem imenso em termos de eficiência, existem situações em
que o começo da próxima instrução no ciclo de relógio seguinte é impedido. A estas situações
chamamos **[Pipeline Hazards](color:yellow)** e existem 3 tipos:

- **[Structural Hazards](color:green)**: tentativa de 2 instruções diferentes usarem o mesmo recurso simultaneamente.

- **[Data Hazards](color:green)**: a instrução seguinte depende do resultado da instrução anterior.

- **[Control Hazards](color:green)**: uma decisão pode ser tomada antes da condição ter sido
  avaliada por uma instrução anterior (como acontece nos _branches_).

Normalmente, estes problemas conseguem ser resolvidos através de _stalls_, isto é, a introdução de um atraso
entre a execução de duas instruções, de forma a evitar estes _hazards_. No entanto, _stalls_ são indesejados
dado que aumentam o tempo de execução e diminuem a eficiência do processador. A unidade de controlo
da pipeline é responsável por detetar estes problemas e resolvê-los.

## Structural Hazards

Quando há conflito no uso de um recurso. Por exemplo no caso da pipeline do MIPS com uma única
memória: instruções _Load/Store_ acedem a dados, pelo que o fetch da instrução deveria
ter que usar um _stall_ para esse ciclo.

## Data Hazards

Uma instrução depende do acesso a dados realizado por uma instrução anterior. Existem vários tipos
de data hazards mas o mais abordado na cadeira é o _RAW_ (Read After Write), onde uma instrução
tenta ler um registo que ainda não foi escrito por outra anterior.

![Data Hazard](./assets/0006-datahazard.png#dark=1)

Como solucionar este problema?

### Forwarding

Para resolver o problema das dependências de dados podemos usar o resultado assim que estiver
disponível, não sendo necessário esperar que seja colocado num registo, através de ligações
adicionais no datapath.

Olhemos para o seuinte exemplo:

![Data Hazard](./assets/0006-dataforwarding.png#dark=1)

Na primeira instrução, o valor do registo `$s0` irá ser determinado no andar EX, como em
qualquer outra instrução aritmética. Se forwarding não fosse usado, teríamos de esperar
até que este valor fosse escrito no registo `$s0`, no andar WB, para que a segunda instrução
pudesse usar esse valor, o que nos obrigaria a usar _stalls_ que [degradariam a performance](color:pink)
do CPU. Em vez disso podemos simplesmente propagar o valor (fazer _forwarding_) logo após este
ser calculado, partilhando-o entre etapas.

É importante ter em conta que apesar de bastante útil, esta sofisticação pode não ser
adequada em certos casos visto que não podemos fazer forwarding para ciclos que ocorreram
anteriormente ao ciclo em que o valor foi calculado.

![Exemplo de Data Forwarding](./assets/0006-dataforwardingeg.png#dark=1)

:::info[Exemplos]

É recomendado a resolução da ficha prática de _pipelining_ para melhor compreensão do conceito de _data forwading_.

<!-- TODO add examples -->

:::

## Control Hazards

Um branch determina o fluxo de controlo, sendo necessário esperar pelo seu resultado.
Nem sempre o pipeline consegue fazer fetch da instrução correta. Existem varias soluções:

- _**Stalling**_: lento e forte impacto negativo no CPI
- Fazer a decisão o mais cedo possível no pipeline (reduzindo ciclos afetados por _stall_)
- Adiar a decisão (necessário apoio do compilador)
- **Prever o resultado** (e esperar que corra bem)

### Delayed Branch

Se o branch hardware for movido para a etapa de _ID_, então é possível eliminar
todos os branch stalls com **[delayed branches](color:pink)**. Com esta técnica,
executamos sempre a próxima instrução sequencial depois da instrução branch,
sendo que o branch só é efetuado após essa instrução.

Em processadores mais sofisticados, com pipelines maiores, o branch delay começou
a precisar de mais que um slot.

### Branch Prediction

Fazer uma **[previsão do resultado do branch](color:pink)**, apenas havendo um _stall_
caso esta previsão esteja errada. No MIPS é possível prever que o branch não é feito,
o que permite ir buscar a instrução a seguir ao branch sem delay. Caso, afinal, o branch
seja efetuado, é necessário fazer **[flush](color:yellow)** das instruções que entretanto
tinham sido entretanto feitas, i.e. substituí-las por um _nop_.

Existem dois tipos de _branch prediction_.

#### Static Branch Prediction

Os control hazards são resolvidos assumindo sempre um dado resultado e procedendo sem
esperar para ver o resultado final. Os dois tipos de Static Prediction mais comuns são:

**Predict Branch Not Taken** - assume-se sempre que [o branch não é tomado](color:pink) (é feito flush caso seja tomado)

**Predict Branch Taken** - assume-se sempre que [o branch é tomado](color:pink) (é feito flush se não for tomado)

#### Dynamic Branch Prediction

O hardware mede o comportamento do branch, tendo em conta o seu historial das últimas decisões.
Assume que no futuro, o comportamento se vai manter, atualizando o historial quando estiver errado
ou for necessário. Por outras palavras segue-se a _moda_.

Um mecanismo que incorpora esta ideia é o **2-Bit Predictor**, que muda a sua escolha caso
ocorram duas escolhas erradas sucessivas.

![2-Bit Predictor](./assets/0006-2bitpredictor.png#dark=1)

## Exceções e Interrupções

Até agora vimos a utilidade do _pipelining_ e as diversas formas que temos de
[resolver dependências entre instruções](color:yellow). Mas é imperativo que quando surjam
eventos inesperados na execução, estes sejam tratados pelo CPU. Estes eventos podem ser geralmente
categorizados em duas categorias:

- **[Exceção](color:green)** - evento gerado pelo **CPU** e por ser causado por um overflow, opcode inválido, erro de floating point, ...

- **[Interrupção](color:green)** - eventos gerados por um **controlador externo**, como por exemplo um _IO device_.

No MIPS existe um coprocessador que lida com as exceções (**Coprocessador de Controlo de Sistema**):

1. Guarda o PC da instrução (**Exception Program Counter**). Na verdade guarda-se o PC incrementado mas o handler tem isto em conta.

2. Guarda a causa do problema num registo dedicado.

3. Salta para um handler genérico:
   - Lê-se a causa.
   - Chama-se outro handler (se existir). Se o problema for remediável, são feitas as correções necessárias e retorna-se ao EPC.
   - Termina o programa, se não houver alternativa.

Caso surjam múltiplas exceções de uma só vez podemos resolvê-las por ordem
cronológica ou podemos usar métodos mais complexos como completar as instruções desordenadamente,
no caso de pipelines mais complexas. Todavia o uso de pipelines dificulta este processo.
