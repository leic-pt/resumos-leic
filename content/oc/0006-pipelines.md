---
title: Pipelines
description: >-
    Pipelines
path: /oc/pipelines
type: content
---

# Pipelines


De modo a aumetar a rapidez do processador podemos implementar
uma técnica conhecida como [Pipelining](color:purple). A ideia é manter cada parte do processador sempre ocupada, dividindo as instruções em
fases sequenciais, permitindo que estas possam ser processadas por cada unidade do processador em paralelo. Incorporando este método conseguimos obter um maior througput mas a latência das instruções não muda visto que o tempo para executar uma instrução não é reduzido.

A Pipeline do MIPS tem 5 etapas (stages):

    - IF: Instruction Fetch - a instrução é lida
    - ID: Instruction Decode - leitura de registos involvidos
    - EX: Execute - a operação aritemética é executada ou o endereço é calculado
    - MEM: Memory - acesso à memória
    - WB: Write-Back - escrever o resultado num registo


![Divisão de Etapas da Pipeline](./assets/0006-pipeline.png#dark=1)


São mantidos registos entre os andares do pipeline, para controlo. A cada ciclo de relógio, a execução passa de um andar da pipeline para outro. Tal significa que o tempo de duração de um ciclo corresponde ao tempo de execução do andar mais lento. Por exemplo, se todas as etapas demoram 200ps e a etapa de MEM tiver uma duração de 250ps, cada ciclo de relógio levaria 250ps. É de notar que caso não houvesse pipelining, cada ciclo de relógio corresponderia à soma da duração de todas as etapas, neste caso 1050ps.

Existe assim uma redução susbstancial do tempo total de execução ao permitir a realização de várias instruções (com diferentes fases) simultaneamente. Assim que a pipeline estiver cheia, uma instrução é completada a cada ciclo, o que nos dá um CPI de 1. Se todas as etapas tiverem balanceadas, i.e. demorarem todas o mesmo tempo: 

$$
TimeInstructions_{pipelined} = \frac{TimeInstructions_{non pipelined}}{Number of Stages}
$$


## ISA do MIPS & Pipeline 

O Instruction-Set Architecture do MIPS foi desenhado para pipelining. Logo:

1. Todas as instruções são de 32-bits - mais facil fazer fetch e decode num ciclo.
2. Existem poucos formatos de instrução - mais facil fazer decode e ler registos numa etapa.
3. Apenas ocorrem operações de memória em loads e stores - podemos usar o passo de execução para calcular endereços de memória.
4. Cada instrução escreve no máximo 1 resultado - nos últimos andares da pipeline (MEM ou WB)
5. Operandos têm que estar alinhados em memória - uma transferência de dados leva apenas a um acesso à memória de dados

## Problemas de Pipelining

Apesar das pipelines nos ajudarem imenso em termos de eficiência, existem situações que impedem o começo da próxima instrução no ciclo de relógio seguinte. A estas situações chamamos "Pipeline Hazards" e existem 3 tipos:

- Structural Hazards: tentativa de 2 instruções diferentes usarem o mesmo recurso simultaneamente.

- Data Hazards: a instrução seguinte depende do resultado da instrução anterior

- Control Hazards: uma decisão pode ser tomada antes de alguma instrução sair do pippeline (como acontece nos Jumps e Branches)

Normalmente, estes problemas conseguem ser resolvidos através de stalls. A unidade de controlo da pipeline é responsável por detetar estes problemas e resolvê-los.

### Structural Hazards

Quando há conflito no uso de um recurso. Por exemplo no caso da pipeline do MIPS com uma única memória: instruções Load/Store acedem a dados, pelo que o fetch da instrução deveria ter que usar um "stall" para esse ciclo. 

### Data Hazards 

Uma instrução depende do acesso a dados realizado por uma instrucão anterior. 

![Data Hazard](./assets/0006-datahazard.png#dark=1)

Como solucionar este problema? 

### Forwarding

Para resolver o problema das dependências de dados podemos usar o resultado assim que estiver disponível, não sendo necessário esperar que seja colocado num registo, através de ligações adicionais no datapath.

Olhemos para  o seguinte exemplo: SLIDE 32 - oc 11


