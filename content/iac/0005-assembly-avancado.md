---
title: Assembly Avançado
description:
path: /iac/assembly-avancado
type: content
---

# Assembly avançado

```toc

```

## Do baixo para o alto para o baixo nível

Quando estamos a programar com uma linguagem do género Assembly, é muito difícil estarmos a encontrar um erro, visto ser uma linguagem de muito baixo nível. Sendo assim, estamos muito mais propícios a errar e passar mais tempo a preocupar sobre onde é que o nosso programa está a falhar.

Assim, para começarmos a programar com esta linguagem temos que primeiro que tudo estabelecer uma correspondência com o mundo real. Começamos, evidentemente, por estabelecer uma relação com linguagens de alto nível, por isso [comparamos um código em Assembly com um código em C](color:pink):

Em C, nós estabelecemos **variáveis** fazendo

            a = 2;
            b = a;

e o nosso compilador é que [escolhe se as coloca em registos ou na memória](color:orange). Contudo, não funciona da mesma forma em Assembly. Nesta linguagem temos dois processos diferentes para registos e para memória. Em termos de [registos](color:pink) temos que fazer

            MOV     R1, 2
            MOV     R2, R1

Atribuindo, desta forma, primeiro o valor de 2 a R1 (equivalente a _a_) e de seguida fazemos a atribuição do valor de R1 a R2 (equivalente a atribuir o valor de _a_ a _b_).

Em termos de [memória](color:pink), teremos que fazer os seguintes comandos:

            MOV     R1, 2
            MOV     [A], R1
            MOV     R1, [A]
            MOV     [B], R1

Em escrita corrente, essencialmente o que estamos a fazer é atribuir o valor de 2 a _a_ e colocando A como o endereço da variável _a_. Depois, lemos _a_ da memória para um registo e colocamos B como o endereço da variável B, obtendo o nosso $b=a$.

Assim, conseguimos, de forma similar, obter vetores na nossa linguagem de baixo nível. Como é sabido, podemos [inicializar vetores](color:pink) em C da seguinte forma:

            int x[5];
            x[3] = x[3] + 4;

Passando para Assembly, [vetores](color:pink), são obtidos através de:

            MOV     R1, X       ; endereço de base de x
            MOV     R2, [R1+6]  ; x[3]
            ADD     R2, 4       ; x[3] + 4
            MOV     [R1+6], R2  ; x[3] = x[3] + 4

![Vetores](./assets/0005-vetores.png#dark=3)

Contudo, a questão coloca-se: como é que tratamos de vetores com índice variável?

                MOV R1, X       ; endereço de base de x
                MOV R3, 0       ; inicializa índice i
        L1:     MOV R2, [R1+R3] ; x[i]
                ADD R2, 4       ; x[i] + 4
                MOV [R1+R3], R2 ; x[i] = x[i] + 4
                ADD R3, 2       ; i++ (i+=2 para usar o i como índice)
                MOV R4, 10      ; 5*2 (5 elementos, mas há 10 bytes)
                CMP R3, R4      ; i != 5 (10 em endereço)
                JNZ L1          ; volta para trás enquanto i != 5 instruções a seguir ao for

### Instrução _if_

A instrução _if_ em qualquer linguagem de alto nível dá-nos a opção de obter mais do que um resultado diferente numa parte do nosso código, criando assim [diferentes percursos](color:pink) que o nosso programa pode percorrer. Em Assembly também é possível criar esta instrução através do comando _JZ_.

Este comando funciona calculando uma [expressão que afeta o bit de estado Z](color:orange), se a expressão booleana for falsa, o programa não irá executar as instruções seguintes e em vez disso salta para outra porção do código, como podemos ver no exemplo seguinte:

                ...
                JZ OUT
                instruções
        OUT:    ...

### Instrução _if-else_

Também conseguimos, em qualquer programa, forçar a percorrer dois caminhos já predefinidos pelo programador através da instrução _if-else_. Esta instrução origina duas condições diferentes, que podem originar mais do que dois caminhos diferentes (ou seguem o if, ou seguem o else, ou há erro).

Como já sabemos, em C podemos implementar esta instrução através de:

            if {expressão-booleana}
                {instruções 1}
            else
                {instruções 2}

Da mesma forma como já vimos acima, podemos fazer esta instrução em Assembly atrravés das mesmas instruções utilizadas na instrução _if_ mas com apenas mais alguns detalhes, como podemos ver abaixo.

                expressão       ; calcula expressão (afeta bit de estado Z)
                JZ ALT          ; se expressão booleana for falsa, salta
                instruções 1    ; código das instruções dentro do if
                JMP OUT         ; não pode executar instruções 2

        ALT:    instruções 2   ; código das instruções da cláusula else

        OUT:    ...            ; instrução a seguir ao if

### Expressões booleanas no _if_

Agora que já sabemos como podemos realizar a instrução _if_ ou _if-else_ em Assembly, quais são as expressões que podemos utilizar nestas condições?

Uma das principais expressões que podemos usar é em termos de expressões booleanas. Isto é, fazemos comparações entre os nossos valores e vemos se cumpre ou não os nossos requisitos. O PEPE tem instruções para [suportar os vários casos relacionais possíveis](color:pink), por exemplo, <, <=, >, >=, =. Esta comparação entre os valores é dada pela instrução [CMP](color:orange), que pode ser utilizada como descrito em baixo:

                CMP Ra, Rb      ; afeta bit de estado N
                JGE OUT         ; se a>=b, bit de estado N estará a 0
                            ; ou então: JNN OUT
                instruções      ; código das instruções dentro do if
        OUT:    ...            ; instruções a seguir ao if

### Ciclos

Como já sabemos, é possível gerar casos diferentes em Assembly, assim, evidentemente também será possível criar ciclos dentro do nosso programa. Este ciclos são, tal como o nome indica, um bloco de código que se executa um [certo número de vezes](color:pink). Estes blocos de código podem ser [fixos (ou incondicionais)](color:purple), como é o caso do _for_ ou podem ser [condicionais](color:purple), como vemos no caso do _while_ e _do-while_.

Para o caso de **ciclos incondicionais (_for_)**, podemos representá-los em _assembly_ da seguinte forma:

                MOV R1, 0
        LOOP:   MOV R2, N
                CMP R1, R2
                JGE OUT
                instruções
                ADD R1, 1
                JMP LOOP

        OUT:    ...

Essencialmente, o que estamos a fazer neste ciclo é inicializar a variável de índice (i=0), de seguida vemos se i é menor que N, se i for maior ou igual, então já terminámos o nosso ciclo e saímos do nosso ciclo, se não, executamos umas instruções, incrementamos o valor de R1, e voltamos a executar o loop.

Para o caso de **ciclos condicionais (_while_)**, o código em _assembly_ é relativamente parecida, com a única diferença que não vamos fazendo comparações para ver se já chegamos ao número de iterações que pretendíamos. Assim, para executar estes ciclos, teremos que implementar as seguintes instruções:

        LOOP:   expressão
                JZ OUT
                instruções
                JMP LOOP

        OUT:    ...

Como podemos ver acima, o que estamos a fazer é ter um código para calcular a expressão, se esta for falsa então saimos do ciclo, caso contrário, percorremos o código de instruções dentro do while e voltamos a percorrer o ciclo desde o começo.

Da mesma forma, para **ciclos condicionais (_do-while_)**, vamos implementar um código extremamente parecido com o de ciclos _while_:

        LOOP:   instruções
                expressão
                JNZ LOOP

        OUT:    ...

A única diferença destes ciclos para os de cima é que mantemos sempre uma expressão em mente, se esta expressão for verdadeira continuamos o nosso ciclo, caso contrário passamos a instrução a seguir ao _do-while_.

Ter estes conhecimentos de instruções relativamente fáceis nesta linguagem de baixo nível permite-nos conseguir chegar a comandos de níveis muito superiores, nomeadamente conseguimos implementar métodos de ordenação de vetores como o _Bubblesort_.

## Apontadores

Algo muito importante em qualquer linguagem de programação são **apontadores**. Estes são usados para [referência a blocos de memória](color:pink) criados dinamicamente ou para fazer [passagem de parâmetros por referência](color:pink) a funções. Em casos como no **Bubblesort** tem um custo muito menor usar apontadores!

Assim, podemos admitir que estas abstrações introduzem muitas vezes um custo ao nível de desempenho e, por esse motivo, tem que haver um compromisso entre abstrações amigáveis para o programador e eficiência da computação. O nosso compilador ideal consegue o [compromisso ótimo](color:orange) entre estas duas variáveis, por isso é que é fundamental ter um conhecimento profundo da arquitetura dos computadores.

## Rotinas

![Rotinas](./assets/0005-rotinas.png#dark=3)

Ao programarmos em linguagens de baixo nível temos que nos focar em conceitos de extrema importância, nomeadamente rotinas. Para tal. temos que começar por nos questionar como podemos chamar ou retornar de uma rotina.

Visto que rotinas não savem de onde são chamadas, temos que usar o par CALL-RET para podermos passar de uma parte do nosso código a uma rotina automaticamente. A pilha memoriza o enderço que está a seguir ao CALL (valor do PC), ficamos assim com:

        SP <- SP - 2
        M[SP] <- PC
        PC <- endereço da rotina

Ao retornarmos ficamos com:

        PC <- M[SP]
        SP <- SP + 2

![Chamada de rotinas](./assets/0005-chamada-rotinas.png#dark=3)

Já que já chamamos a nossa rotina, podemos agora questionar-mos-nos como é que evitamos que a rotina "estrague" os valores dos registos no programa principal? Visto que uma rotina nunca sabe aonde é que é chamada, se usamos registos temos que, primeiro, salválos na pilha antes de os usar, e, de seguida, restaurá-los pela ordem inversa antes de retornar ao código principal.

Antes de guardar quaisquer valores na pilha temos que ter em atenção que é necessário verificar o tamanho máximo previsível para a pilha e [reservar espaço suficiente](color:pink), geralmente 100H palavras é suficiente; também é necessário inicializar o SP com o endereço seguinte à área reservada para a pilha.

### Pilha (_stack_)

Ao colocarmos seja o que for numa pilha, o nosso SP aponta para a última posição ocupada da pilha, ou seja no topo da pilha, isto é, fazemos:

        PUSH Ri     ; SP <- SP-2 , M[SP] <- Ri
        POP Ri      ; Ri <- m[SP] , SP <- SP + 2

![Pilha](./assets/0005-pilha.png#dark=3)

### Recursividade

Linguagens de baixo nível não são exceção no que toca a recursividade. Uma rotina [pode-se chamar a ela própria](color:pink), sendo que vai guardando o endereço de retorno e eventuais registos PUSHed. É de realçar que tem que haver uma **condição de terminação** que permite regressar das N instâncias da rotina, e, a [profundidade](color:pink) da pilha pode ser atingida dependendo do caso concreto (cada chamada recursiva substitui uma iteração na versão iterativa do algoritmo).

## Passagem de valores

A última questão que nos falta responder é como é que podemos passar parâmetros de uma parte da função para outra. Quando chamamos uma função temos que colocar os parâmetros [num local combinado](color:orange) com a função, e o mesmo tem que ser feito para o valor de retorno.

### Passagem de valores pela pilha

| [**Vantagens**](color:pink)                     | [**Desvantagens**](color:pink)                                                                    |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Genérico, dá para qualquer número de parâmetros | Pouco eficiente, muitos acessos à memória                                                         |
| Recursividade fácil, já se usa a pilha          | É preciso cuidado com os PUSHes e POPs, tem de se "consumir os parâmetros e os valores de retorno |

### Passagem de valores por registos

| [**Vantagens**](color:pink)                                                                            | [**Desvantagens**](color:pink)                                      |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Eficiente, registos                                                                                    | Menos geral, número de registos limitado, não suporta recursividade |
| Registo de saída de uma função pode ser logo o registo de entrada noutra, não é preciso copiar o valor | Estraga registos, pode ser preciso guardá-los na pilha              |

## Exceções e interrupções

Uma [exceção](color:pink) corresponde a um qualquer evento que pode ocorrer de **forma inesperada** para o programa que está a correr; são situações que não são práticas de se estar sempre a testar se algo tiver acontecido e nem sempre podemos saber como reagir ou tratar o evento logo que este ocorra. Para além disto a origem de uma exceção pode ser causada por vários fatores diferentes, nomeadamente pleo próprio programa (são **síncronas** em relação ao programa), ou pela ativação de um pino extremo (interrupções, são **assíncronas** face ao programa, sendo imprevisível a instrução em que ocorrem).

A solução é implementar [interrupções](color:pink). Ao interromper o programa normal e invocar uma rotina de tratamento da exceção.

![Interrupções](./assets/0005-interrupcoes.png#dark=3)

O processo tem vários [pinos de interrupção](color:pink) que podem ligar a relógios (temporizadores), botões, sensores, etc.

![Interrupções](./assets/0005-int.png#dark=3)

### Rotinas de interrupção

As rotinas de interrupção podem ser invocadas a qualquer momento usando um [sinal externo](color:pink). Este sinal muda o valor do flanco (de 0 para 1, que é o caso mais comum, ou de 1 para 0) e tem um dado valor de nível que pode ser 0 ou 1. É necessário manter em mente que não podemos alterar nada do estado do processador nem mesmo os bits de estado. A invocação da rotina de interrupção [guarda automaticamente na pilha](color:orange), ou seja faz o equivalente a dois PUSHs, o nosso endereço de retorno, que vai ser o endereço da próxima instrução na altura em que a interrupção aconteceu, e o registo dos bits de estado.

A instrução [RFE (Return From Exception)](color:pink) faz o **equivalente a dois POPs** pela ordem inversa, repondo os bits de estado e fazendo o retorno. [**Atenção que RET e REF NÃO SÃO equivalentes**!!](color:orange).

Se a rotina de interrupção alterar qualquer registo, tem de o guardar primeiro na pilha e restaurá-lo antes do RFE.

As rotinas de interrupção são, mecanismos de baixo nível que devem ser **muito curtos** e, por regra, não devem permitir ser interrompidas, contudo, há sempre tal possibilidade. O seu papel e **essencialmente assinalar a ocorrência** da interrupção desencadeando ações a executar por software de mais alto nível, e não diretamente por elas.

### Tabela de exceções

![Tabela de exceções](./assets/0005-excecoes.png#dark=3)

### Bits de estado IE

Um programa pode estar a executar operações críticas que **não devem ser interrompidas**, por isso, existe um [bit de estado (IE) que quando está a 0 impede o processador](color:pink) de atender interrupções. É fácil manipular este bit através de duas instruções:

- **EI** (Enable Interrupts), faz IE <- 1
- **DI** (Disable Interrupts), faz IE <- 0

A própria rotina de interrupção pode ser crítica e não permitir interrupções a ela própria. Por isso, IE é colocado a 0 **automaticamente** quando uma interrupção é atendida. O bit IE é automaticamente reposto no RFE, porque o registo das flags é reposto.

![Funcionamento das interrupções](./assets/0005-ints.png#dark=3)

### Fluxograma

Os fluxogramas são uma notação gráfica usada para especificar o comportamento de uma rotina, tendo como construções fundamentais as seguintas figuras:

![Fluxograma](./assets/0005-fluxo.png#dark=3)

Assim, podemos implementar um tratamento de interrupções com o seguinte fluxograma:

![Fluxograma](./assets/0005-fluxograma.png#dark=3)

E, também podemos obter um para o retorno de interrupções (RFE):

![Fluxograma](./assets/0005-flux.png#dark=3)

É necessário sublinhar que todas as rotinas de interrupção têm de [terminar com RFE](color:orange).

## Programação concorrente

A programação concorrente, tal como o nome nos indica, refere-se a um processador que tenta correr muitos programas diferentes tal como acontece com os computadores modernos. Precisamos de arranjar um forma de programar **várias atividades** de forma independente. Na prática, um [sistema operativo](color:pink) implementa a **mudança de processos** por meio de interrupção (assíncrona). Contudo, o PEPE é demasiado lento para implementar um sistema operativo, assim, para compensar, o simulador tem **suporte** para processos.

### Espera bloqueante

Um dos principais problemas que temos com a programação concorrente é a [espera bloqueante](color:pink). Um exemplo de uma rotina com **espera bloqueante**, como pode ser o exemplo em que estamos à espera em que o nosso utilizador carregue numa tecla para inicar o programa. Ou seja, temos um programa do género:

        espera:     lê a posição de memória ou periférico
                    CMP valor pretendido    ;vê se o valor é o esperado
                    JNZ espera              ; se ainda não é, vai tentar de novo
                    ...                     ; faz algo caso o valor seja o esperado
                    RET                     ; acabou, regressa

Contudo, o que se deve fazer [sem suporte](color:pink) para processos é o seguinte:

        espera:     lê a posição de memória ou periférico
                    CMP valor pretendido    ; vê se o valor é o esperado
                    JNZ sai                 ; se ainda não é, há de tentar de novo
                    ...                     ; faz algo caso o valor seja o esperado
        sai:        RET                     ; iteração do ciclo principal

Ou seja, o nosso programa principal deve ter um **ciclo que chama repetidamente as rotinas** de todos os processos. A nossa espera à rotina deve ser [externa](color:pink) e não interna. Se nenhuma espera tiver ciclos bloqueantes, então todas correm à vez.

### Espera não bloqueante

Já que já vimos a espera bloqueante, temos agora que ver exemplos de [espera não bloqueante](color:pink). Começamos por analisar uma rotina com espera bloqueante **com suporte** para processos cooperativos, neste caso vemos uma mudança é controlada pelo programador:

        espera:     indica ao sistema que aqui pode mudar para outro processo
                    lê posição de memória ou periférico
                    CMP valor pretendido    ; vê se valor é o esperado
                    JNZ espera              ; se ainda não é, vai tentar de novo
                    ...                     ; faz algo caso o valor seja o esperado
                    RET                     ; acabou, regressa

Embora a espera seja bloqueante, tem sempre um [ponto de fuga](color:pink), ou seja há uma mudança de processo, caos haja outros processos. Isto permite ao programador programar como se **houvesse um sistema operativo** que fizesse a mudança automática de processos. Contudo o programador controla o ponto de mudança de processo, se não indicar, fica numa espera bloqueante.

A vantagem é que o [ciclo fica interno ao processo](color:orange), que se programa quase como se não houvesse outros, e não tem de memorizar o estado em que estava entre invocações sucessivas (pelo ciclo do programa principal).

### Como concretizar os processos

Existem duas formas de concretizar processos. A primeira opção é [concorrência baseada em interrupções](color:pink). Esta abordagem **sem suporte** para processos é possível no PEPE, o programador principal tem um ciclo infinito, onde trata, em sequência, as diversas atividades sem temporização de tempo real (CALLs a uma ou mais rotinas). Cada **rotina de interrupção** implementa cada uma das atividades concorrentes cuja execução deva ocorrer em instantes específicos do tempo, temporização de tempo real.

[Vantagens:](color:green)

- Permite correr **múltiplos programas** de forma concorrente

[Desvantagens:](color:red)

- Coloca mecanismos de \*\*baixo nível, interrupções, a executar tarefas de alto nível, atividades da apicação;
- O número de pinos de interrupção **limita** o número de programas concorrentes;
- Estas rotinas **não podem ter ciclos bloqueantes**, potencialmente infinitos, pois não permitiriam que as restantes rotinas fossem também executadas;
- **Difícil** de programar.

![Opção 1](./assets/0005-1.png#dark=3)

A segunda opção é [rotinas cooperativas](color:pink). Nesta abordagem, cada **rotina deve apenas assinalar o que occoreu**, por exemplo, alterando uma variável em memória.

[Vantagens:](color:green)

- Permite correr **múltiplos programas** de forma concorrente;
- Todo controlo é **feito em software**, isto é não depende de mecanismos de baixo nível, como as interrupções.

[Desvantagens:](color:red)

- Estas rotinas **não podem ter ciclos bloqueantes**, potencialmente infinitos, pois não permitiriam que as restantes rotinas fossem também executadas.
- Ainda se deixa muita da **responsabilidade** da gestão da concorrência nas mãos do programador.

![Opção 2](./assets/0005-2.png#dark=3)

A terceira opção é [processos cooperativos](color:pink). Nesta abordagem o sistema já permite criar processos, que executam de forma **autónoma e independente**, a tarefa principal é essencialmente criar os processos que depois correm de forma autónoma. Os processos têm de indicar em que ponto dos ciclos potencialmente bloqueantes é que o sistema pode mudar para outro processo, ou seja, os processos controlam onde é que podem largar o processador, por isso são **cooperativos**.

[Vantagens:](color:green)

- Permite correr **múltiplos programas** de forma concorrente;
- Todo o controlo é **feito em software**, isto é, não depende de mecanismos de baixo nível, como as interrupções;
- Já **podem ter ciclos bloqueantes**, potencialmente infintos.

[Desvantagens:](color:red)

- Processos têm de ser **bem-comportados**, mas têm suporte para o fazer;
- Ainda se deixa **responsabilidade** na gestão dos processos nas mãos do programador.

![Opção 3](./assets/0005-3.png#dark=3)

Por último, a nossa útlima opção é [processos "verdadeiro"](color:pink). Este processo não é possível no PEPE. Um sistema operativo muda automaticamente de processo quando chegar ao fim a sua fita de tempo de execução, o que pode ocorrer em qualquer ponto do conjunto das suas instruções. Um processo **não tem indicar** nenhum ponto onde a comutação de processo possa ocorrer e pode ser programado assumindo que tem o processador inteiramente para si.

[Vantagens:](color:green)

- Permite correr **múltiplos programas** de forma concorrente;
- Todo o controlo é **feito em software**;
- Já **podem ter ciclos bloqueantes**;
- Processos já não têm de ser **bem-comportados**;
- Já não se deixa **responsabilidade** na gestão dos processos nas mãos do programador.

[Desvantagens:](color:red)

- Um sistema operativo é um **software complexo** que exige um processador com alguma capacidade computacional.

![Opção 4](./assets/0005-4.png#dark=3)

### Processos cooperativos no PEPE

No simulador do PEPE, é possível usar-se a **diretiva PROCESS** antes de uma rotina, indicando o endereço após a pilha, para inicializar o SP.

        algures:    ...                    ; instruções algures no programa
                    CALL rotina            ; não invoca a rotina, cria o processo
                    ...                    ; mais instruções algures no programa
                    STACK 100H             ; declara pilha a usar pelo processo
        pilha_rotina:                      ; endereço inicial para o SP do processo

        PROCESS pilha_rotina               ; endereço para incializar o SP
        rotina:     ...                    ; instruções do processo (com YIELD, pode ter loops bloqueantes)
                    RET                    ; se chegar aqui, termina o processo

O **CALL** à rotina não a invoca, cria o processo, incializa o seu SP e coloca-o executável. O **RET** não retorna, termina o processo. Cada processo tem de ter a sua própria pilha, independente das restantes, que deve ser declarada com a [diretiva STACK](color:pink). A diretiva PROCESS [deve preceder o label](color:pink) da rotina que implementa o processo. A diretiva PROCESS precisa que se indique qual o valor com que o **SP** deste processo deve ser inicializado, o que é feito **automaticamente**. Cada processo fica com uma [cópia independente dos registos](color:pink), a "rotina" do processo não precisa de fazer PUSH nem POP. Dentro da rotina que implementa o processo pode ser colocada a [diretiva YIELD](color:pink), que indica que o simulador pode comutar para outro processo nesse ponto, tipicamente usa-se dentro de ciclos potencialmente bloqueantes.

### Contexto dos processos

Para [comutar de processo](color:pink), o simulador **guarda internamente todo o estado (contexto)** desse processo, todos os registos (PC, RO a R15), de seguida **determina qual o próximo** processo a executar (dos executáveis). Por último vai buscar o contexto desse processo, carrega-o nos registos e continua a execução, no ponto em que esse processo tinha ficado.

É por causa do contexto que cada processo [pode usufruir de uma cópia dos registos só para si](color:pink), sem ter de os partilhar com outros processos. Os valores dos registos na altura do "CALL" são copiados para o **contexto** e constituem, na prática, [parâmetros para o processo](color:orange). Fazendo vários "CALL"s à mesma rotina de processo, podem criar-se processos com o **mesmo código mas com dados diferentes**, número de instância, por exemplo.

### Comunicação e sincronização

Os processos **só podem comunicar através de variáveis**, um pode escrever numa WORD (ou BYTE) e outro ler essa word, isto quer dizer que há uma comunicação, mas não sincronização, pode dar origem a bugs complicados de detetar ou resolver.

A solução é simples: usar [variávies LOCK](color:pink). São idênticas a WORD, exceto que se um processo **ler** um LOCK, **bloqueia** e se um processo **escrever** num LOCK, **desbloqueia** todos os processos bloqueados, e a leitura nesses processos devolve o valor escrito. Este mecanismo serve assi, para [sincronização e comunicação](color:orange).

Exemplo:

![Exemplo](./assets/0005-exemplo.png#dark=3)

## Processo vs "device-drivers"

Interfaces com periféricos, por exemplo o teclado, e rotinas de interrupção são mecanismos de baixo nível (“device-drivers”), que devem ser **independentes das aplicações** de alto nível (processos) que os usam. Por isso, [não devem ter conhecimento das aplicações](color:pink) e devem-se limitar a interfaces com periféricos, ler ou escrever valores de e para os periféricos sem saber qual o seu significado e a rotinas de interrupções, assinalarem que a interrupção ocorreu.

Devem ser os [processos, alto nível, a ter semântica](color:pink) da aplicação. Para um processo esperar por uma dada informação "de baixo nível", por exemplo uma tecla carregada ou uma temporização; estas podem estar sempre a testar algo, o que é [má ideia](color:red), ou bloqueiam-se num LOCK o que é [melhor ideia](color:green).

## Otimização de polling

Mesmo assim, o processo teclado está **continuamente** a varrer o teclado ([polling](color:pink)), mesmo que nunguém esteja a carregar numa tecla. Os sistemas operativos têm mecanismos **para evitar** isto e funcionar **por eventos** (ocorrências). O simulador tem algo correspondente, embora muito mais simples: a diretiva [WAIT](color:orange).

É semelhante ao YIELD, a diferença é que faz o processador adormecer se não houver mais processos executáveis, e acorda com algum evento no sistema. Assim, o processador **só corre quando há eventos** e no resto do tempo fica em WAITING.
