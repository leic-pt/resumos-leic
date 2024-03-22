---
title: Transações Distribuídas
description: >
  Transações.

  ACID.

  Atomicidade e Confirmação Atómica.
path: /sd/transacoes-distribuidas
type: content
---

# Transações Distribuídas

```toc

```

## Transações

Uma **transação** consiste numa sequência de instruções que é executada de forma
aparentemente **atómica**, ou seja, ou todas as instruções são executadas ou
nenhuma é (**é indivisível**).
Normalmente é delimitada por instruções específicas, como por exemplo:

- início: `begin-transaction`
- fim: `end-transaction`, `commit`, `abort`

Exemplo de uma transação:

```php
transferir(contaA, contaB, montante) {
  beginTransaction;
  bancoA.lerSaldo(contaA, saldoA);
  bancoB.lerSaldo(contaB, saldoB);
  bancoA.atualizarSaldo(contaA, saldoA - montante);
  bancoB.atualizarSaldo(contaB, saldoB + montante);
  commit;
}
```

### Propriedades _ACID_

Em Bases de Dados, é costume as transações oferecerem as seguintes propriedades:

- **A**tomicidade (_Atomicity_):

  - Ou a transação é executada na totalidade, ou não produz qualquer efeito (como
    se não tivesse existido)
  - Quando a transação é executada com efeito diz-se **confirmada** (_commited_)
  - Se não produz qualquer efeito, diz-se que **abortou**
    - uma transação pode abortar a pedido ou devido a problemas que ocorram
      durante a sua execução

  :::details[Exemplo]

  ```php
  transferir(contaA, contaB, montante) {
    beginTransaction;
    bancoA.lerSaldo(contaA, saldoA);
    bancoB.lerSaldo(contaB, saldoB);
    if (saldoA < montante) {
      abort;
    } else {
      bancoA.atualizarSaldo(contaA, saldoA - montante);
      bancoB.atualizarSaldo(contaB, saldoB + montante);
      commit;
    }
  }
  ```

  :::

- **C**oerência (_Consistency_):

  - A execução de uma transação não resulta na violação das invariantes que
    caracterizam o modelo de dados

- **I**solamento (_Isolation_):

  - Define como o sistema se comporta quando são executadas transações de forma
    concorrente que acedem aos mesmos dados
  - Alguns exemplos de isolamento (que não iremos estudar):
    - Serializabilidade Estrita
    - Serializabilidade
    - Isolamento Instantâneo (“snapshot isolation”)
    - Coerência transacional causal
  - **Serializabilidade de Transações**: o resultado da execução concorrente de
    um conjunto de transações deve ser equivalente ao resultado de as executar
    em série, uma de cada vez

- **D**urabilidade (_Durability_): os resultados da transação ficam registados de
  forma persistente na base de dados

Iremos analisar de seguida mecanismos para garantir a Atomicidade e Isolamento
das transações.

### Atomicidade: utilização do _"redo log"_

- Os resultados da transação **não são aplicados durante a execução**, apenas quando
  a transação é _commited_
- Antes de aplicar os **resultados**, estes são **escritos para um _log_ persistente**,
  juntamente com a informação de que a transação foi confirmada
- Começa-se a **aplicar os resultados apenas depois da persistência do _log_ ser
  garantida**
- Se ocorrer um erro/falha que interrompa a aplicação dos resultados, quando a
  máquina recuperar consulta o _log_ para continuar a partir do ponto de interrupção

### Isolamento: _strict 2-phase locking_ (controlo pessimista)

- Método pessimista de controlo de concorrência: **à medida que a transação executa**
  e é necessário aceder a um recurso, **é obtido o _lock_ associado ao mesmo**
- **Cada recurso tem _read-write locks_**
- Quando se **acede** pela primeira vez a um recurso **para leitura, tenta-se obter o
  _lock_ para leitura**
- Da mesma forma, quando se **acede** pela primeira vez **para escrita, tenta-se obter o
  _lock_ para escrita**
- Segue-se um modelo de **escritores-leitores**:
  - **Podem estar vários leitores concorrentemente** a utilizar o recurso (desde que
    não haja um escritor)
  - **Apenas pode estar um escritor** a utilizar o recurso (não é permitido existir
    leitores)
- Se uma transação não consegue obter o _lock_ pretendido, bloqueia
- Quando a transação termina, libera todos os _locks_
- Mecanismo sujeito a **_deadlocks_**:

  - É possível detetar _deadlocks_ através da construção de um grafo de dependências
    entre transações e detetando um ciclo, o que significa que de alguma forma
    uma transação está à espera que outra liberte um _lock_ mas que essa também
    espera o mesmo de um _lock_ que a primeira possui
  - A maneira mais comum de "detetar _deadlocks_" é através de _timeouts_: caso
    uma transação esteja bloqueada num _lock_ há demasiado tempo, aborta libertando
    todos os _locks_ que possui
  - Uma maneira de evitar _deadlocks_ é a partir do uso de prioridades:

    - cada transação tem uma prioridade (que geralmente é uma _timestamp_ física
      ou lógica, de forma a que a transação mais antiga tenha uma maior prioridade)
    - uma transação apenas se bloqueia num _lock_ caso este seja detido por outra
      mais prioritária
    - uma transação mais prioritária que pretenda um _lock_ detido por outra
      menos prioritária, força-a a abortar de forma a não ter de se bloquear
    - evitamos assim o _deadlock_ mas ao custo de por vezes abortar transações
      desnecessariamente

    :::details[Exemplo]

    ![Locking de transações com prioridades](./assets/0006-deadlock-priorities.svg#dark=3)

    :::

### Isolamento: controlo otimista

- A transação **lê os recursos sem tentar obter qualquer _lock_**
- Quando quer **fazer uma escrita, faz _buffer_** da mesma (não as aplica)
- Na confirmação da transação, é feita uma **validação**:
  - consiste em validar, de forma atómica, se os valores lidos não
    foram alterados entre a leitura e o momento da validação
- Se for **validada**, as **escritas vão ser aplicadas de forma atómica**
- Caso contrário, a **transação é abortada** (as escritas são descartadas)

## Transações Distribuídas

(**TODO**: Fix nome da secção, ao ter o mesmo nome q o title da pág, o link leva
sempre para o title pq aparece primeiro, n sei q nome diferente dar a isto ou ao title)

Quando queremos alterar dados que estão distribuídos por várias máquinas, torna-se
mais complicado realizar uma transação, já que temos que garantir que todas as
máquinas ou dão _commit_ ou _abort_.
Se quisermos transferir dinheiro do banco A para o banco B, não pode acontecer
o banco A confirmar a transferência mas o B abortar, iria-se "perder" dinheiro
(sistema incoerente).

Precisamos assim de garantir que todas as máquinas tomam a mesma decisão, ou seja,
que a confirmação da transação é **atómica**, o que envolve coordenação por parte
dos nós que participam na transação.
A solução mais simples para este problema é conhecida como **"confirmação
(atómica distribuída) em 2 fases" (_2-phase-commit_)**

### Confirmação em 2 fases (_2-phase commit_)

- Um dos participantes é eleito como **coordenador**
- O coordenador **envia uma mensagem especial _"prepare"_** para sinalizar o início
  do processo de confirmação
- **Caso o participante possa confirmar a transação** (transação executou sem abortar
  e o _"redo log"_ está salvaguardado em memória persistente), regista no _log_
  que vota favoravelmente e **envia "OK" ao coordenador**
- **Caso contrário**, regista no _log_ que vota desfavoravelmente e **envia "NOT-OK"
  ao coordenador**
- **Se o coordenador receber "OK" de todos os participantes, confirma a transação**,
  registando no seu _log_ essa informação e enviando-a a todos os participantes
  (que também registam no seu _log_ o resultado)
- **Se receber pelo menos um "NOT-OK", aborta a transação**, registando no seu
  _log_ essa informação e enviando-a a todos os participantes (que também registam
  no seu _log_ o resultado)
- Caso algum dos participantes não responda, o coordenador pode tentar conactá-lo
  de novo ou, se suspeitar que falhou, abortar a transação.
  **A ausência de resposta do participante é interpretada como um "NOT-OK"**

:::details[Exemplo]

![2-phase commit](./assets/0006-two-phase-commit.svg#dark=3)

:::

:::tip[NOTA]

**Este algoritmo é bloqueante caso o coordenador falhe**

- Depois de um participante responder "OK" já não pode alterar a sua decisão, pelo
  que tem de esperar pela decisão do coordenador, mantendo todos os _locks_
  associados aos recursos consultados/modificados até a transação terminar
- Se o coordenador falhar, os _locks_ vão permanecer bloqueados até que o coordenador
  recupere

:::

### Confirmação atómica tolerante a falhas

Uma maneira de obter uma versão tolerante a faltas da confirmação é através do uso
do consenso como módulo:

- inicia-se o algoritmo da mesma forma que no _2-phase commit_, em que o coordenador
  despoleta o processo de verificação em todos os participantes, **mas agora estes
  enviam a resposta para todos os outros participantes**
- todos os participantes guardam as respostas dos outros e invocam o consenso da
  seguinte forma:

  - Se um participante **recebe "OK" de todos os participantes**, inicia o consenso
    **propondo _"commit"_**
  - Se **recebe um "NOT-OK"**, inicia o consenso **propondo _"abort"_**
  - Se suspeita que **outro participante falhou**, inicia o consenso **propondo _"abort"_**
  - No fim, todos os participantes dão _commit_ ou _abort_ consoante o resultado
    do consenso

  :::details[Pseudocódigo]

  ```php
  Quando recebe "Prepare":
    Broadcast(OK / NOT-OK);

  Quando recebe OK de Px:
    númeroOKs++;
    Se númeroOKs == n:
      Ready = TRUE;
      Input = COMMIT;

  Quando recebe NOT-OK:
    Ready = TRUE;
    Input = ABORT;

  Quando Px falhou:
    Ready = TRUE;
    Input = ABORT;

  Quando Ready:
    Consenso.propoe(Input);
    result = Consenso.decide()
  ```

  :::

:::tip[Nota]

Dado que o consenso por definição pode decidir qualquer um dos valores propostos,
sem fazer distinção entre eles, caso um participante proponha _"abort"_ e outro
_"commit"_, qualquer uma das decisões é válida... Mas porque é que isto não é um
problema?

Para um processo propor _"abort"_ enquanto outro(s) propõe(m) _"commit"_, algum
participante $P$ teve que apenas enviar "OK" apenas para parte do grupo, de forma a
que os que receberam coletaram os "OK"s todos e propuseram _"commit"_, enquanto
que quem não recebeu achou que $P$ tinha falhado, propondo _"abort"_.

[Para apenas parte do grupo ter recebido "OK", podem ter ocorrido duas situações:
(**TODO**: Not sure about this)](TODO)

- $P$ falhou enquanto enviava as mensagens, mas para ter respondido "OK" já tinha
  toda a transação executada e tudo guardado num _log_ de forma persistente, pelo
  que é possível restaurar o estado quando recuperar e atualizar-se para saber a
  decisão tomada pelo coordenador
- A mensagem perdeu-se a caminho de alguns participantes, mas como $P$ está pronto
  para dar _"commit"_, caso o consenso decida _"commit"_, não há problema, e caso
  decida _"abort"_, a transação vai apenas ser abortada desnecessariamente, desperdiçando
  recursos

:::

## Referências

- Departamento de Engenharia Informática - Slides de Sistemas Distribuídos (2023/2024)
  - SlidesAlameda-Aula10
