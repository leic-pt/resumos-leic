---
title: Programação em Assembly
description: Estrutura de um computador
  Memória de dados
  Processador unidade de dados
  O meu primeiro computador
  Programação em baixo nível
path: /iac/programacao-em-assembly
type: content
---

# Programação em Assembly

```toc

```

## Programação do computador

Para escrevermos um programa começamos com a nossa linguagem natural para descrever o nosso objetivo seguido da sua tradução para linguagem de programação. Estes dois passos são obtidos pelos programadores. Assim que temos o nosso programa escrito, o compilador traduz para linguagem _assembly_ e, por último, o assemblador traduz tudo para código máquina.

![Traduções das linguagens](./assets/0004-traducoes.png#dark=3)

Mas como funciona a linguagem _assembly_? Começamos por ter uma instrução por linha, cada instrução tem uma formatação rígida, alguns comentários escritos logo durante o processo de transcrição para linguagem _assembly_ e instruções que [refletem diretamente](color:pink) os recursos do processador.

Se tivermos por exemplo

            conta:  ADD      R1, R2      ; soma ao saldo

Sabemos que **conta** representa a nossa [etiqueta](color:orange), **ADD** a [mnemónica](color:orange), **R1 e R2** são os [operandos](color:orange), e **soma ao saldo** é o nosso [comentário](color:orange) em relação ao que é que a nossa linha de comando faz.

### Comentários

Cada comentário no nosso programa deve ser iniciado pelo carácter **";"** eo comentário que se segue até ao final da linha. [Praticamente todas as linhas](color:pink) de _assembly_ devem ter um comentário a indicar o que está a ser feito, se não, o código torna-se praticamente impossível de ser entendido, visto que é uma linguagem de baixo nível.

![Sem comentários](./assets/0004-comentarios.png#dark=3)

Como podemos ver no exemplo, sem comentários a explicar-nos o que cada linha de código faz, não sabemos qual é o objetivo do programa nem o que está a ser feito.

### Registos do processador

Os registos do processador representam os recursos mais importantes que uma instrução pode manipular; são de [memória interna](color:pink), de **acesso muito mais rápido** que a memória externa e com instruções que manipulam alguns registos diretamente.

Se estivermos a avaliar em PEPE, temos dois tipos de registos distintos, cada qual com 16 bits (4 dígitos hexadecimais):

- [PC (Program Counter)](color:pink);
- 16 registos [(R0 a R15)](color:pink), alguns "especiais"

### Bits de estado (flags)

Dentro do Registo de estado (RE), podemos ter **flags** que nos fornecem indicações sobre o resultado da operação anterior, contudo é importante notar que nem todas as instruções os alteram. Estas **flags** podem influenciar o resultado da [operação seguinte](color:pink).

Podemos ter 4 tipos de _flags_ diferentes:

- **[(Z)](color:pink) Zero**: fica a 1 se o resultado de uma operação **for zero**;
- **[(C)](color:pink) Carry, transporte**: fica a 1 se o resultado de uma operação **tiver transporte**;
- **[(V)](color:pink) Overflow, excesso**: fica a 1 se o resultado de uma operação **não couber na palavra do processador**;
- **[(N)](color:pink) Negativo**: fica a 1 se o resultado de uma operação **for negativo**

### Classe de instruções

Podemos classificar cada instrução dentro de 5 classes diferentes: instruções **aritméticas**, instruções **lógicas**, instruções de **deslocamento**, instruções de **transferência de dados** e instruções de **controlo de fluxo**.

As [instruções aritméticas](color:orange) são todas as instruções que lidam com números em complemento para 2, nomeadamente ADD, SUB, CMP, MUL e DIV.

As [instruções lógicas](color:orange) representam as instruções que lidam com sequências de bits, como é o caso do AND, OR e SET.

As [instruções de deslocamento](color:orange) lidam com o deslocamento dos bits de um registo, ou seja, instruções como SHR e ROL.

As [instruções de transferência de dados](color:orange) são as instruções que nos permitem transferir dados entre dois registos ou entre um registo e a memória, como fazemos com o MOV e SWAP.

Por último, as [instruções de controlo de fluxo](color:orange) são as que controlam a sequência de execução de instruções, podendo tomar decisões, como JMP, JZ, JNZ, CALL e RET. Nestas operações, os valores dos registos são considerados **endereços sem sinal**, ou seja, qualquer valor de 0000H a FFFFH.

Para além disso, podemos referir-mo-nos a instruções com as lógicas e de deslocamento como [instruções de bit](color:purple). Nestas instruções, os registos são apenas um **conjunto de bits individuais**.

Ao representarmos números em _assembly_ temos que ter em atenção que nas instruções aritméticas, os valores estão em **complemento para 2**, ou seja representam qualquer valor entre 8000H e 7FFFH.

## Instruções aritméticas, lógicas e de deslocamento

Exemplo de instruções que implementam **operações aritméticas**:

![Operações aritméticas](./assets/0004-aritmeticas.png#dark=3)

Podemos também ter operações de **deslocamento**, como já foi referido acima. Estas instruções apenas [multiplicam](color:pink) (SHL) ou [dividem](color:pink) (SHR) por $2^n$, seja n o número dado na instrução. Estas operações efetuam-se da seguinte forma:

            SHL     a, n
            SHR     a, n

Também podemos usar as instruções ROL ou ROR quando fazemos uma multiplicação ou divisão mas o primeiro algarismo (bit mais significativo) passa a ser o último (ROL) na multiplicação, ou o último algarismo (bit menos significativo) passa a ser o primeiro (ROR) na divisão.

            ROL     a, n
            ROR     a, n

## Instruções de transferência de dados

### Transferências de dados (16 bits)

![Transferências de dados](./assets/0004-trans1.png#dark=3)

### Acesso à memória em 8 bits

![Transferências de dados](./assets/0004-trans2.png#dark=3)

### Swap

![Transferências de dados](./assets/0004-trans3.png#dark=3)

## Instruções de controlo de fluxo

Quando estamos a usar uma linguagem de alto nível, a execução das nossas instruções é feita de forma [sequencial](color:pink), exceto se temos uma **decisão** (quando temos um _if_ ou _switch_) ou se temos uma **interação**, quer seja incondicional, como é o caso do _for_, ou condicional, _while_. Este controlo de fluxo é obtido através de [bits de estado](color:purple) que indicam o resultado da instrução anterior, ou de [instruções específicas](color:purple), quer sejam de saltos (in)condicionais, de chamada de rotina ou até mesmo de retorno de rotina.

**Mas o que são instruções de salto?** Instruções de salto, tal como o nome indica, são instruções que nos deixam "saltar" de uma posição para outra, ou seja, na prática o que estamos a fazer é [alterar o PC](color:pink) em vez de o deixar incrementar normalmente. Estes saltos podem ser:

- **Incondicionais**
- **Condicionais**
- **Absolutos**
- **Relativos**

## Diretivas

Quando nos referimos a aspetos importantes de _assembly_ é necessário falar sobre as [diretivas](color:pink) que são uma espécie de pseudo-instruções pois servem apenas para o assembler e não para o microprocessador. Por outras palavras, as diretivas **não geram código executável**.

### EQU

A primeira diretiva a ser discutida é EQU. Esta diretiva, que não gera código, serve somente para definir o [valor de constantes](color:pink) simbólicas. Ou seja, esta diretiva permite-nos atribuir o valor que nos pretendemos às constantes que vamos usando ao longo do nosso programa.

            NOME    EQU   constante-literal

Exemplo:

            DUZIA    EQU   12

### PLACE

A diretiva PLACE ajuda o assembler a indicar o endereço a partir do qual as instruções ou variáveis seguintes devem ficar localizadas. Assim, até aparecer um PLACE, considera-se que há um [PLACE 0 implícito](color:pink), desde o inicio do programa.

            PLACE   endereço

:::tip
Após o _reset_, o PEPE inicializai o PC com o valor 0000H, por isso, tem de haver um PLACE 0000H algures no nosso programa, não sendo obrigatório estar logo no início do ficheiro.
:::

### WORD

Ao usarmos WORD estamos a reservar um espaço, define, para uma variável de 16 bits. A mesma diretiva pode definir várias variáveis de uma word consecutivas, contudo, cada variável gasta [2 bytes](color:pink).

            ETIQUETA:   WORD    constante{,constante}

Exemplo:

            VAR1:   WORD    1

Ficamos com uma variável inicializada a 1 que fica localizada no endereço atribuído pelo assemblador a VAR1. **WORD é diferente de EQU.**

### TABLE

Agora que já vimos o que é que a diretiva WORD faz, temos que saber o que é que a diretiva TABLE faz.

Ao usarmos TABLE estamos a definir, reservar espaço, para uma [tabela com várias variáveis de 16 bits](color:pink). É importante manter em conta que apenas reserva espaço, não a inicializa.

            ETIQUETA:   TABLE    constante

Exemplo:

            T1:   TABLE    1OH

Ficamos com um espaço para 16 words reservado, ou seja temos 32 bytes reservados. A primeira word fica reservada no endereço atribuído a T1, a segunda em T1+2, etc.

Esta diretiva é boa para reservar uma área que depois se pode ir escrevendo ao longo do programa, porém, para definir [tabelas de constantes](color:purple) é preferível definir os vários elementos da tabela com a diretiva WORD.

### BYTE

A última diretiva é BYTE, que define uma [variável de 8 bits](color:pink), ou seja, um [byte](color:pink). Para valores negativos, deve-se usar variáveis WORD e não BYTE pois estes precisam sempre dos bits todos num processador.

A mesma diretiva permite definir várias variáveis de um byte consecutivas.

            ETIQUETA:   BYTE    constante{,constante}

Exemplo:

            S1:   BYTE    'a', "ola", 12H

## Modos de endereçamento

![Modos de endereçamento](./assets/0004-modos-enderecamento.png#dark=3)

:::warning
Para ver exemplos de programas em Assembly, é recomendada a leitura dos slides das teóricas.
:::
