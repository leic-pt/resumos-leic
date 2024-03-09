---
title: Replicação e Tolerância a Faltas
description: >
  Tipos de registos.

  Memória partilhada.

  Espaço de tuplos.
path: /sd/replicacao-e-tolerancia-a-faltas
type: content
---

# Replicação e Tolerância a Faltas

```toc

```

## Introdução a sistemas replicados

A replicação consiste no processo de **manter cópias de dados e software** de um
serviço em **várias máquinas**.

![Diagrama de uma replicação](./assets/0005-replication-example.svg#dark=3)

### Benefícios de replicar um sistema

- melhor **disponibilidade**: mesmo que alguns nós falhem ou fiquem indisponíveis
  devido a falhas na rede, o sistema continua disponível
- melhor **desempenho e escalabilidade**:
  - Podem existir cópias mais próximas do cliente
  - Algumas operações não precisam de ser executadas sobre todo o sistema, podendo
    ser executadas apenas sobre algumas cópias (distribuindo assim a carga e
    aumentando a escalabilidade)

### Linearizabilidade

Uma das garantias essenciais que um sistema replicado tem que assegurar é a
**coerência**.
O ideal seria um cliente ler a **versão mais recente** do recurso
sempre que lê de uma réplica (mesmo que essa versão tenha sido escrita noutra réplica).
Um critério de coerência que podemos utilizar é a **linearizabilidade**.
Antes de definirmos o que é, é necessário ter em conta o seguinte quanto à ordenação
de operações:

- As operações realizadas sobre um sistema replicado **não são instantâneas**:
  - A operação é invocada por um cliente, executada durante algum tempo e o cliente
    só recebe a resposta mais tarde.
- Se uma operação X começa depois de outra operação Y acabar, então X ocorre depois de Y
- Se uma operação X começa antes de outra operação Y acabar, então X é concorrente com Y

:::details[Exemplo]

![Exemplo de ordenação de operações](./assets/0005-operation-sorting-example.svg#dark=3)

- A concorrente com B
- A anterior a C
- B anterior a C
- C concorrente com D
- C anterior a E
- D concorrente com E

:::

:::info[Definição]

Um sistema replicado diz-se **linearizável** se e só se:

1. Existe uma **serialização virtual** que respeita o **tempo real** em que as
   operações foram invocadas, isto é:

   - Se $op_1$ ocorre antes de $op_2$ (em tempo real), então $op_1$ tem de aparecer
     antes de $op_2$ na serialização virtual. (se $op_1$ e $op_2$ forem concorrentes,
     a serialização pode ordená-las de forma arbitrária)

2. A execução observada por cada cliente é coerente com essa serialização (para
   todos os clientes), ou seja:
   - Os valores retornados pelas leituras feitas por cada cliente refletem as
     operações anteriores na serialização

:::

:::details[Exercício]

> Considere os seguintes exemplos em que um cliente escreve sobre um inteiro replicado.
> Quais das execuções são serializáveis?
>
> Exemplo 1:
> ![Exemplo 1 de serialização](./assets/0005-serialization-example-1.svg#dark=3)
>
> Exemplo 2:
> ![Exemplo 2 de serialização](./assets/0005-serialization-example-2.svg#dark=3)
>
> Exemplo 3:
> ![Exemplo 3 de serialização](./assets/0005-serialization-example-3.svg#dark=3)

**R**: Apenas o 1º exemplo:

![Solução exemplo 1](./assets/0005-serialization-example-1-sol.svg#dark=3)

:::

## Registos partilhados e replicados

Um registo suporta duas operações:

- Escrita:
  - uma escrita substitui o valor da anterior
  - apenas um cliente pode escrever no registo num dado instante, ou seja, as
    escritas são ordenadas
- Leitura:
  - múltiplos clientes podem ler do registo ao mesmo tempo

### Tipos de registos

Lamport definiu três modelos de coerência para registos:

- **Safe**:

  - Se uma leitura não for concorrente com uma escrita, lê o último valor escrito
  - Se for, pode retornar um valor arbitrário

- **Regular**:

  - Se uma leitura não for concorrente com uma escrita, lê o último valor escrito
  - Se for, ou retorna o valor anterior ou o valor que está a ser escrito
  - **NOTA**: este tipo de registo não é linearizável, já que enquanto decorre uma
    escrita, é possível que leituras seguidas leiam sequências incoerentes de
    valores (primeiro o novo valor e depois o antigo)

- **Atomic**:
  - Equivalente a linearizabilidade quando aplicada a registos
  - O resultado da execução é equivalente ao resultado de uma execução em que todas
    as escritas e leituras ocorrem instantaneamente num ponto entre o início e o
    fim da operação

:::details[Exemplos]

- registo "Unsafe":

![Exemplo de registo unsafe](./assets/0005-serialization-example-2.svg#dark=3)

- registo "Safe":

![Exemplo de registo safe](./assets/0005-safe-register-example.svg#dark=3)

- registo "Regular":

![Exemplo de registo regular](./assets/0005-serialization-example-3.svg#dark=3)

- registo "Atomic":

![Exemplo de registo atomic](./assets/0005-serialization-example-1-sol.svg#dark=3)

:::

:::tip[De onde surgiu a ideia de um registo "safe"?]

Considere um registo com o valor $0$ (em binário: $0000~0000$) e que se quer
escrever o valor $3$ (em binário: $0000~0011$). Se não existir um mecânismo de
sincronização que impeça o leitor de ler o registo durante a escrita, a leitura
pode retornar um dos seguintes valores:

- $0000~0000$ = $0$
- $0000~0001$ = $1$
- $0000~0010$ = $2$
- $0000~0011$ = $3$

(já que os bits são alterados individualmente em instantes diferentes)

:::

### Registos distribuídos

Uma forma de implementar registos distribuídos é a seguinte:

- Cada processo mantém uma cópia do registo
- Cada registo guarda um tuplo `<valor, versão>`
- Para executar uma operação (leitura ou escrita), os processos trocam mensagens
  entre si

É possível implementar este funcionamento de forma a que seja tolerante a faltas
e não bloqueante!

#### Algoritmo ABD

Registo regular (com um só escritor):

- Escrita:

  - O escritor incrementa o número de versão e envia o tuplo `<valor, versão>`
    para todos os processos.
  - Quando os outros processos recebem esta mensagem, atualizam a sua cópia do
    registo (caso seja uma versão mais recente que a local) e enviam uma confirmação
    ao escritor.
  - A operação termina quando o escritor receber resposta de uma maioria.

- Leitura:
  - O leitor envia uma mensagem a todos os processos solicitando o tuplo mais recente
  - Cada processo envia o seu tuplo `<valor, versão>`
  - Após receber resposta de uma maioria, retorna o valor mais recente e atualiza
    o valor local (caso necessário)

![Intuição do algoritmo](./assets/0005-ABD-algorithm-intuiton.svg#dark=3)

:::details[Exemplo]

![Exemplo de execução do algoritmo](./assets/0005-ABD-algorithm-example.svg#dark=3)

:::

:::warning[O algoritmo não é atómico]

![Diagrama que demonstra que o algoritmo não é atómico
](./assets/0005-ABD-algorithm-not-atomic-example.svg#dark=3)

Tal como ilustrado no diagrama, é possível obter leituras diferentes consoante
as réplicas que contactamos (lendo $v_1$, depois $v_0$ e $v_1$ novamente), violando o
princípio da [linearizabilidade](./#linearizabilidade).

:::

Registo atómico (com um só escritor):

- Escrita:

  - Idêntico ao anterior.

- Leitura:
  - Executa o algoritmo de leitura anterior **mas não retorna o valor**
  - Executa o algoritmo de escrita, **usando o valor lido**
  - **Retorna** o valor lido apenas **após a escrita ter terminado**

### Espaço de Tuplos

#### Espaço de Tuplos "Linda"

Consiste num espaço partilhado que contêm um conjunto de tuplos (ex: `<"A">`,
`<"A", 1>`, `<"A", "B">`) e que suporta 3 operações:

- `Put`: adiciona um tuplo (sem afetar os tuplos existentes) no espaço
- `Read`: retorna o valor de um tuplo (sem afetar o conteúdo do espaço)
- `Take`: também retorna um tuplo mas remove-o do espaço
- Tanto `Read` como `Take` são bloqueantes caso o tuplo não exista
- Tanto `Read` como `Take` aceitam _wildcards_: `Read(<"A", *>)` pode retornar
  `<"A", 1>` ou `<"A", "B">`

Como o `Take` é bloqueante, pode ser usado para sincronizar processos:

- Elege-se um tuplo especial, por ex. `<lock>`.
- Cada processo remove o tuplo do espaço antes de aceder à região crítica e volta
  a colocá-lo no fim, garantindo assim exclusão mútua
- Conseguimos assim através de uma única interface partilhar memória e sincronizar
  processos

Enquanto que nos registos uma escrita fazia _override_ do valor antigo, aqui o
processo equivalente é realizar um `Take` seguido de um `Put` (os tuplos são
imutáveis). O `Take` permite fazer operações que em memória partilhada requerem
uma instrução do tipo
[_**compare-and-swap**_](/so/implementation/#solu%C3%A7%C3%B5es-com-suporte-do-hardware).

:::tip[Nota]

Note que as operações `Put`, `Read` e `Take` são conhecidas como `out`, `rd` e
`in` no modelo Linda, usamos estes nomes mais descritivos como simplificação.

:::

#### _Xu-Liskov_

Muitas das implementações de espaços de tuplos adotam uma solução centralizada.
Isto tem vantagens em termos de simplicidade, mas tais soluções não são
tolerantes a falhas nem escaláveis.

_Xu-Liskov_ é uma implementação **distribuída e tolerante a faltas** do "Linda".

:::warning[Algumas observações prévias]

- A tolerância de faltas pressupõe um serviço de filiação que gere o grupo de
  réplicas:

  - **Quando uma réplica falha, a filiação do grupo é alterada**

- Sendo assim, quando o algoritmo **espera por "todas"** as respostas ou pela maioria
  delas, **refere-se à filiação do grupo** num dado instante.

- Esta alteração dinâmica da filiação é um problema bastante complexo por si só
  e portanto não vai ser abordado

- Os autores optam por usar [_**UDP**_](/rc/transporte/#udp---user-datagram-protocol)
  (portanto pode haver perda de mensagens), sendo o próprio algoritmo responsável
  por retransmitir mensagens.
  - Solução modular: usar [_**TCP**_](/rc/transporte/#tcp---transmission-control-protocol)

:::

O objetivo dos autores com este _design_ era obter a solução mais eficiente e com
o menor tempo de resposta possível, mas assegurando
[linearizabilidade](./#linearizabilidade).

:::info[Funcionamento do algoritmo]

`Put`:

1. The requesting site multicasts the `put` request to all members of the view;
2. On receiving this request, members insert the tuple into their replica and
   acknowledge this action;
3. Step 1 is repeated until all acknowledgements are received.
   For the correct operation of the protocol, replicas must detect and acknowledge
   duplicate requests, but not carry out the associated put operations.

`Read`:

1. The requesting site multicasts the `read` request to all members of the view;
2. On receiving this request, a member returns a matching tuple to the requestor,
3. The requestor returns the first matching tuple received as the result of the
   operation (ignoring others);
4. Step 1 is repeated until at least one response is received.

`Take`:

**Phase 1**: Selecting the tuple to be removed

1. The requesting site multicasts the `take` request to all members of the view;
2. On receiving this request, each replica acquires a lock on the associated tuple
   set and, if the lock cannot be acquired, the `take` request is rejected;
3. All accepting members reply with the set of all matching tuples;
4. Step 1 is repeated until all sites have accepted the request and responded with
   their set of tuples and the intersection is non-null;
5. A particular tuple is selected as the result of the operation (selected
   randomly from the intersection of all the replies);
6. If only a minority accept the request, this minority are asked to release their
   locks and phase 1 repeats.

**Phase 2**: Removing the selected tuple

1. The requesting site multicasts a remove request to all members of the view
   citing the tuple to be removed;
2. On receiving this request, members remove the tuple from their replica, send
   an acknowledgement and release the lock;
3. Step 1 is repeated until all acknowledgements are received.

:::

Visto que este algoritmo foi projetado para minimizar o _delay_ :

- Operações `read` apenas bloqueiam até que a primeira réplica responda ao pedido
- Operações `take` bloqueiam até o final da fase 1, quando o tuplo a ser excluído foi acordado
- Operações `put` podem retornar imediatamente

No entanto, isto introduz níveis inaceitáveis de concorrência. Por exemplo, uma
operação `read` pode aceder a um tuplo que deveria ter sido excluído na segunda
fase de uma operação `take`. Assim, são necessárias as seguintes restrições adicionais:

- As operações de cada _worker_ devem ser executadas em cada réplica na mesma ordem
  em que foram emitidas pelo _worker_
- Uma operação `put` não deve ser executada em nenhuma réplica até que todas as
  operações `take` anteriores, emitidas pelo mesmo _worker_, tenham sido concluídas
  em todas as réplicas (na visão do mesmo)

:::tip[Nota]

> Operações `take` bloqueiam até o final da fase 1, quando o tuplo a ser excluído foi acordado

Note que isto é uma otimização para minimizar a latência, no algoritmo original
o _worker_ fica bloqueado até o final da fase 2. Esta otimização não faz parte
do projeto.

:::

:::details[Exemplos]

`Read`:

![Exemplo de operação "Read"](./assets/0005-xu-liskov-read-example.svg#dark=3)

`Put`:

![Exemplo de operação "Put"](./assets/0005-xu-liskov-put-example.svg#dark=3)

`Take`:

![Exemplo de operação "Take"](./assets/0005-xu-liskov-take-example.png#dark=3)

:::

Imaginemos que o `Read` não era bloqueante, ou seja, ou retornava o tuplo
ou "_null_". O sistema continuaria a ser linearizável? **Não**, pois seria possível:

- Um cliente executa `Put` de um tuplo $t$
- Um cliente executa `Read(t)` várias vezes, concorrentemente com o `Put`
- Se o leitor recebe respostas de réplicas diferentes em cada `Read`, pode ler $t$
  e de seguida "_null_"

Quanto ao `Take`, é possível que dois processos tentem fazer `Take` do mesmo tuplo
concorrentemente e nenhum consiga a maioria (_deadlock_). Para resolver este problema
introduz-se um fator de aleatoriedade: cada processo repete o seu pedido um tempo
aleatório depois (solução não determinista).

## Teorema _CAP_

Este teorema defende que é impossível um sistema apresentar simultaneamente:

- _[**C**](color:orange)onsistency_ (coerência)
- _[**A**](color:green)vailability_ (disponibilidade)
- _[**P**](color:blue)artition-tolerance_ (tolerância a partições na rede)

pois apenas pode ter **2** destas propriedades (quaisquer duas).

![CAP theorem](./assets/0005-cap-theorem.svg#dark=3)

## Coerência fraca

### Garantias de sessão

- _**Read Your Writes**_:
  - Se um Read $R$ procede um Write $W$ numa sessão, então
    o valor de $W$ é incluído em $R$
- _**Monotonic Reads**_:
  - Se um Read $R1$ precede um Read $R2$ numa sessão, $R2$
    tem que incluir todos os Writes completos incluídos em $R1$ (mas pode ter
    alterações mais recentes)
- _**Writes Follow Reads**_:
  - Se um Read $R1$ precede um Write $W2$ numa sessão e
    $R1$ é executado no servidor $S1$, então qualquer servidor $S2$ que inclui
    $W2$ também inclui qualquer Write $W1$ incluido em $R1$ na ordem em que foram escritos
- _**Monotonic Writes**_:
  - Se um Write $W1$ precede um Write $W2$ numa sessão, então
    qualquer servidor $S2$ que inclua $W2$ também inclui $W1$ na ordem em que foram escritos

| Guarantee | Session state updated on | Session state checked on |
| :-------: | :----------------------: | :----------------------: |
|   _RYR_   |          Write           |           Read           |
|   _MR_    |           Read           |           Read           |
|   _WFR_   |           Read           |          Write           |
|   _MW_    |          Write           |          Write           |

:::details[Pseudocódigo de operações de escrita e leitura]

```php
Write(W,S) = {
  if WFR then
    check S.vector dominates read-vector
  if MW then
    check S.vector dominates write-vector
  wid := write W to S
  write-vector[S] := wid.clock
}

Read(R,S) = {
  if MR then
    check S.vector dominates read-vector
  if RYW then
    check S.vector dominates write-vector
  [result, relevant-write-vector] := read R from S
  read-vector := MAX(read-vector, relevant-write-vector)
  return result
}
```

:::

### Propagação epidémica (_gossip propagation_)

De forma a introduzir o conceito de propagação de informação, vamos pensar sobre
a forma menos coordenada possível de fazê-lo:

- Periodicamente, cada processo contacta os outros e envia-lhes informação/atualizações
- A informação é assim propagada como uma espécie de "rumor" (do inglês _gossip_)
- Apresenta a grande vantagem de ser totalmente descentralizada, balanceando a carga
  por todos os processos

Ao propagar informação desta forma surgem, naturalmente, duas questões essenciais:

- Por que ordem devem ser aplicadas as atualizações recebidas dos outros processos?
- Se um processo contacta primeiro uma réplica R1 e depois outra R2, que garantias
  mínimas devem ser existir?

Pensemos no exemplo em que existem três réplicas R1, R2 e R3 e que se está a
executar uma aplicação de prepaarção de slides de forma cooperativa:

- Em R1 um cliente executa a instrução "criar círculo", que é propagada para R2
- Em R2 outro cliente executa a instrução "pintar círculo", que é propagada para R3
- R3 recebe primeiro a instrução "pintar círculo" antes de "criar círculo", o que
  **pode gerar um erro**

Outro exemplo:

- Em R1 um cliente executa a instrução "label=distrib**úi**dos" e propaga-a para R2
- Em R2 um cliente aperebe-se da gralha e corrige-a: "label=distrib**uí**dos"
- R3 recebe primeiro a instrução executada em R2 e só depois a executada em R1
- Se aplicar as atualizações por esta ordem, **a correção da gralha fica sem efeito**

**A grande maioria dos sistemas de propagação epidémica aplica as atualizações de
forma a respeitar a relação [_aconteceu-antes_](/sd/tempo-e-sincronizacao/#eventos-e-relógios-lógicos), ou seja, respeita a ordem
causal dos acontecimentos.**

E no caso dos **clientes móveis**?

- Um cliente muda a sua _password_ na réplica R1
- Muda para a réplica R2 antes da alteração ser propagada
- **Não consegue utilizar a sua nova password**

Existem sistemas capazes de garantir a relação _aconteceu-antes_ para clientes móveis,
enquanto que outros oferecem **garantias ainda mais fracas** como as
[garantias de sessão](#garantias-de-sessão) apresentadas acima.

Todas estas garantias podem ser atingidas com o uso de [relógios
lógicos](/sd/tempo-e-sincronizacao/#eventos-e-relógios-lógicos) (pouco eficiente).

### _Lazy Replication_ - _gossip architecture_

Foi proposta em 1922 e inspirou muitos dos sistemas **fracamente coerentes** dos
dias de hoje. Tem como objetivo:

- garantir **acesso rápido** aos clientes
- mesmo quando existem **partições na rede**
- com o _trade-off_ de sacrificar a **coerência**

O nome _**gossip**_ vem de as réplicas propagarem as alterações periodicamente em
_background_, como se fossem boatos.

![lazy replication basic operation](./assets/0005-lazy-replication.png#dark=3)

O algoritmo oferece **coerência fraca**, mas assegura duas propriedades:

- _**Monotonic reads**_
  - mesmo que o cliente aceda a réplicas diferentes
- O estado das réplicas **respeitam a ordem causal** das alterações
  - se uma modificação $m_2$ depende de outra $m_1$, réplica nunca executa $m_2$
    antes de $m_1$

#### Interação cliente-réplica

- Cada cliente mantém um _timestamp_ vetorial denominado $prev$

  - vetor de inteiros, um por réplica
  - reflete a última versão acedida pelo cliente

- Em cada contacto com uma réplica, é enviado também o $prev$: (pedido, $prev$)
- A réplica devolve (resposta, $new$)

  - em que $new$ é o _timestamp_ vetorial que reflete o estado da réplica
  - se a réplica estiver atrasada em relação ao cliente, espera até se atualizar
    para devolver uma resposta

- Cliente atualiza $prev$ de acordo com $new$, confrontando cada entrada de
  $prev$ com a correspondente de $new$

  - se $new[i] \gt prev[i]$, $prev[i] = new[i]$

- Cada réplica mantém também localmente um _**update log**_
  - uma réplica pode já ter recebido uma modificação mas não a poder executar
    devido a ainda não ter recebido/executado dependências causais, pelo que a
    mantém em estado pendente no _log_
  - pode assim propagar modificações individuais para as outras réplicas, mantendo
    o _update_ no _log_ até receber confirmação de todas elas

![lazy replication basic operation](./assets/0005-lazy-replication-interaction.png#dark=3)

Quando uma réplica recebe um **pedido de leitura**:

- verifica se $pedido.prev \leq value~timestamp$
  - se sim, retorna o valor atual juntamente com o $value~timestamp$
  - se não, o pedido fica pendente até estar atualizada

Quando uma réplica $i$ recebe um **pedido de modificação**:

- verifica se já o executou e em caso afirmativo descarta-o
- incrementa a entrada $i$ do seu $replica~timestamp$ em uma unidade
- atribui à modificação um novo _timestamp_ calculado por:
  - $pedido.prev$ com a entrada $i$ substituída pelo novo valor calculado acima
    (gerando assim um _timestamp_ único para este update)
- adiciona a modificação ao _log_ e retorna o novo _timestamp_ ao cliente
- **espera até $pedido.prev \leq value~timestamp$** se verificar para executar o
  código localmente
  - garantindo assim que a execução respeita a ordem causal
- quando finalmente executar o pedido, atualiza o $value~timestamp$
  - para cada entrada $j$: se $replicaTS[j] \gt valueTS[j]$, $valueTS[j] = replicaTS[j]$

Para propagar as modificações:

- periodicamente, cada gestor de réplica $i$ contacta outro gestor $j$
- $i$ envia de forma ordenada a $j$ as modificações do seu _log_ que estima que
  $j$ não tenha
- para cada modificação que $j$ recebe:
  - se não for duplicada, adiciona ao seu _log_
  - atualiza o seu $replicaTS$
  - assim que $prev \leq value~timestamp$, executa a modificação

:::warning[_Aconteceu-antes_ vs protocolo _gossip_]

Enquanto que quando estudámos a relação [_aconteceu-antes_
](/sd/tempo-e-sincronizacao/#vector-clocks) vimos que 3 tipos de eventos
atualizavam as _timestamps_ vetoriais:

- Eventos locais genéricos
- Envio de uma mensagem
- Receção de uma mensagem

![Exemplo de vector clocks](./assets/0003-events-at-three-processes-vectors.png#dark=2)

no _gossip_ apenas existe um tipo de eventos que causa esta atualização: _**Updates**_

:::

:::details[Exemplo]

Imaginemos um sistema com 2 réplicas $R_0$ e $R_1$, em que ambas mantêm saldos de
contas bancárias. As contas da Alice e Bob começaram com saldo nulo e mais tarde
receberam transferências de uma conta $S$ (que assumimos que contava com saldo
suficiente para realizar ambas as transferências). Cada operação foi aceite
por uma réplica diferente:

$op_{~S \rarr Alice}$ : $\text{S.transferTo(Alice, 10)}$

- aceite por $R_0$ com $TS = \text{<1,0>}$ e $prevTS = \text{<0,0>}$

$op_{~S \rarr Bob}$ : $\text{S.transferTo(Bob, 20)}$

- aceite por $R_1$ com $TS = \text{<0,1>}$ e $prevTS = \text{<0,0>}$

Execução da primeira operação:

![Lazy replication - 1ª operação](./assets/0005-lazy-replication-example-write.png#dark=3)

Execução de reads de réplicas diferentes:

![Lazy replication - reads de réplicas diferentes](./assets/0005-lazy-replication-example-reads.png#dark=3)

:::

Existem outros tipos de algoritmos para suportar operações que requerem modelos
de coerência mais fortes, como por exemplo:

- **Forced** operations
- **Immediate** operations

mas não os abordamos nesta cadeira.

**TODO**: Não sei se queres dar aqui algum insightzinho, talvez descrever sucintamente
a base de cada tipo de operação, só para terem noção das garantias

### Algoritmo de _Bayou_

No sistema de _**Lazy Replication**_ assume-se que as **operações concorrentes são
comutativas**, ou seja, independentemente da ordem pela qual são aplicadas, o
resultado final é o mesmo (por ex: "desenhar círculo" e "alterar cor da linha").
Se as operações não forem comutativas, é necessário utilizar primitivas mais fortes
(forced/immediate).

O _Bayou_ introduz uma solução para reconciliar automaticamente réplicas divergentes:

- Ordenar operações concorrentes por uma **ordem total**
- **Cancelar** as operações que foram executadas por uma **ordem diferente**
- **Re-aplicar** estas operações pela **ordem total**, aplicando uma função de
  reconciliação que é específica da aplicação
- As operações podem ser codificadas de forma a facilitar a reconciliação automática

#### _Updates_: tentativo e _commit_

- Quando se faz um _update_, ele fica marcado como **tentativo**
  - podendo ainda sofrer alterações nesta fase
- Quando o _update_ é _**commited**_, a sua ordem já não pode ser alterada
  - quem decide a ordem é tipicamente uma réplica especial, o **primário**
  - quando um _update_ é _commited_, as outras réplicas podem por isso ter que o ordenar

![Bayou - updates tentativos e commited](./assets/0005-bayou-tentative-commited.png#dark=3)

:::details[Exemplo de operação]

```php
Bayou_Write(
  update = {insert, Meetings, 12/18/95, 1:30pm, 60min, "Budget Meeting"},
  dependency_check = {
    query = "SELECT key FROM Meetings WHERE day = 12/18/95
      AND start < 2:30pm AND end > 1:30pm",
    expected_result = EMPTY
  },
  mergeproc = {
    alternates = {{12/18/95, 3:00pm}, {12/19/95, 9:30am}};
    newupdate = {};
    FOREACH a IN alternates {
      # check if there would be a conflict
      IF (NOT EMPTY (SELECT key FROM Meetings WHERE day = a.date
        AND start < a.time + 60min AND end > a.time))
          CONTINUE;
      # no conflict, can schedule meeting at that time
      newupdate = {insert, Meetings, a.date, a.time, 60min, "Budget Meeting"};
      BREAK;
    }
    IF (newupdate = {}) # no alternate is acceptable
      newupdate = {insert, ErrorLog, 12/18/95, 1:30pm, 60min, "Budget Meeting"};
    RETURN newupdate;
  }
)
```

:::

:::tip[HEEEELP]

PLS IMPROVE BAYOU, SLIDES TÃO TIPO PROJETO DE ES DO CURTO :sob:

:::

### CRDTs (Conflict-Free Replicated Datatypes)

Foram apresentados em aula essencialmente como uma curiosidade e consistem em
estruturas de dados que facilitam _updates_ concorrentes em várias réplicas,
resolvendo os conflitos de forma automática (e determinística? n sei se é vdd **TODO**).

Pequeno exemplo de um CRDT de um contador que apenas suporta as operações
"_increment_" e "_read_":

```c
// Replica i

increment() {
  value[i]++;
}

read() {
  return SUM k: 1..N_REPLICAS (value[k])
}

merge_with_replica_j() {
  for k: 1..N_REPLICAS {
    i.value[k] = max(i.value[k], j.value[k])
  }
}
```

## Referências

- Coulouris et al - Distributed Systems: Concepts and Design (5th Edition)
  - Secção 6.5
- Departamento de Engenharia Informática - Slides de Sistemas Distribuídos (2023/2024)
  - SlidesTagus-Aula05 (informação + imagens)
  - SlidesAlameda-Aula05
- [D. B. Terry, A. J. Demers, K. Petersen, M. J. Spreitzer, M. M. Theimer and B. B. Welch,
  "Session guarantees for weakly consistent replicated data,"
  ](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=331722&isnumber=7843)
