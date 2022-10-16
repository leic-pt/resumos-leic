---
title: 'Instruções: Linguagem de um Computador'
description: >-
  ISA: Instruction Set Architecture
  MIPS-32 ISA
  Operações Aritméticas em Assembly
  MIPS: Registos
  Operações Lógicas
  Instruções de Acesso a Memória
  Instruções de Controlo
path: /oc/linguagem-computador
type: content
---

# Instruções: Linguagem de um Computador

```toc

```

## ISA: _Instruction Set Architecture_

Como já tinhamos visto anteriormente, os computadores funcionam através de sets
de instruções e diferentes computadores têm diferentes conjuntos de instruções.
Contudo estes conjuntos têm muitos aspetos em comum.
Assim, temos que introduzir o conceito de [ISA (_Instruction Set Architecture_)](color:pink)
que se refere à interface abstrata entre o _hardware_ e o _software_ de nível mais baixo,
que engloba toda a informação necessária para escrever um programa em linguagem máquina.

### CISC vs RISC

Contudo, para os diferentes computadores também precisamos de diferentes arquiteturas,
então como é que as podemos distinguir, qual delas é a mais favóravel ao nosso objetivo final?
Existem duas arquiteturas nos quais nos vamos focar nesta cadeira: [CISC](color:pink),
_Complex Instruction-Set Computer_, e [RISC](color:pink), _Reduced Instruction-Set Computer_.
Nas arquiteturas mais recentes, o ISA é uma mistura das duas,
que são [regularizadas através de uma pipeline](color:orange).

Mas o que diferencia estas duas arquiteturas?

<!-- TODO compare the two according to the properties below -->

- [Número](color:yellow) de instruções;
- [Complexidade](color:orange) das operações que são implementadas por uma única instrução;
- [Número de operandos](color:red);
- [Modos de endereçamento](color:pink);
- [Acesso à memória](color:purple).

## MIPS-32 ISA

Nesta cadeira vamos usar o [**processador** MIPS](https://en.wikipedia.org/wiki/MIPS_architecture)
como o principal exemplo de um processador.
Este processador foi desenvolvido por parte do programa de investigação VLSI em
_Standford University_ no início da década de 80.
O objetivo do MIPS era ter um processador cuja arquitetura pudesse representar
como se baixava o compilador para o nível do _hardware_ em vez de se elevar
o _hardware_ ao nível do _software_.
Assim, este processador implementa um _set_ de instruções mais pequeno e mais simples que,
através de [_pipelining_](color:pink) produzem um processo mais eficiente de instruções.

Assim, conseguimos obter um processador que:

- [Favorece simplicidade](color:purple) através de um tamanho
  definido de instruções, um número pequeno de formato de instruções e
  um _opcode_ sempre definido nos pirmeiros 6 _bits_;

- [Acredita que mais pequeno é mais rápido](color:purple) através de um _set_
  limitado de instruções, número limitado de registos no ficheiro de registos
  e número limitado de modos de endereçamento;

- [Bom _design_ implica bons compromissos](color:purple) visto que temos três
  formatos de instruções (Instruções R, I, J);

- [_Make the common case fast_](color:purple) já que as nossas operações
  aritméticas estão no ficheiro de registos (_load-store machine_) e
  permite que as instruções contenham um operando imediato;

Este último já tinha sido referido ao ser dada a [**Lei de Amdahl**](/oc/metricas-performance#lei-de-amdahl)
e um bom exemplo de termos este princípio em mente é se, por exemplo,
num programa fizermos mais somas.
Como grande parte da execução do programa é passada a somar valores,
devemos otimizar estas operações.
Porém, se tivermos apenas uma multiplicação que corre num tempo muito maior a
comparar com as somas, podemos pensar que nos rende otimizarmos estas operações
em vez da nossa soma, mas estaríamos errados.
Isto porque se fazemos mais somas que multiplicações, digamos que as nossas multiplicações
ocupam 3% dos nossos cálculos enquanto as somas 97%, não vale a pena estarmos a otimizar
a multiplicação, sabendo que otimizar a operação de soma seria muito mais vantajoso.

### Categorias de Instruções

Tal como já tinha sido visto em [IAC](/iac) e com o Assembly,
temos diferentes categorias de instruções para conseguirmos escrever código:

- Computacional;
- _Load/Store_;
- _Jump_ e _Branch_;
- _Floating Point_;
- _Memory Management_;
- Especial.

<!-- TODO replace with SVG -->

![Formato das instruções](./assets/0002-formato-instrucoes.png#dark=3)

Como podemos ver acima, existem três tipos de instruções que têm cada uma um formato diferente.
Algumas dos conceito que se devem saber são:

- [op](color:pink), operação que estamos a realizar;
- [rs, rt e rd](color:pink), registos (source, t (letra seguinte a s), destination) com valores que vamos usar;
- [funct](color:pink), função auxiliar a alguns opcodes;
- [immediate](color:pink), uma constante.
- [jump target](color:pink), endereço para qual queremos saltar.

O [PC](color:purple) refere-se a **Program Counter** que indica o endereço de
memória no qual o processador está a ler a intrução atual.
Este é incrementado sempre de 4 em 4 bytes (por uma instrução ocupar $2^5 = 32$ bits).

## Operações Aritméticas em Assembly

Tal [como já tínhamos visto em IAC](/iac/programacao-em-assembly),
há várias operações que podemos fazer no nosso programa.

### Adição e Subtração

Para fazermos estas duas operações aritméticas temos que usar [três operandos](color:purple),
dois que nos indicam os valores e um onde vamos guardar o valor final.
Todas as [operações aritméticas](color:pink) têm esta forma:

`a = b + c;` → `add a, b, c` a recebe b + c

`d = a - e;` → `sub d, a, e` d recebe a - e

### Tarefa complexa em C

```c
# C code
f = (g + h) - (i + j);
```

```mips-asm
# Assembly code
add $t0, $s0, $s1   # variável temporária t0 contém g + h
add $t1, $s2, $s3   # variável temporária t1 contém i + j
sub $t2, $t0, $t1   # t2 recebe t0 - t1
```

## MIPS - Registos

<!-- TODO replace with SVG -->

![Registos](./assets/0002-registos.png#dark=3)

O MIPS tem [32 registos](color:red).
O banco de registos tem [2 portas de leitura](color:pink) e
[1 porta de escrita](color:purple), o que nos permite ler valores de dois registos
e, simultaneamente, escrever um valor num registo.
Cada registo armazena uma palavra de 32-bits, isto é, 4 bytes.

Uma grande vantagem dos registos é a sua velocidade de acesso, que é muito superior
à da memória princial, ou mesmo às caches (como veremos mais à frente).
No entanto, é preciso efetuar _trade-offs_ quanto ao número de registos, pois
o tempo de acesso aumenta com o número de registos.
Por exemplo, num banco de registos que guarda 64 registos
[pode ser até 50% mais lento](color:red) que um que guarde apenas 32.
O mesmo se aplica à quantidade de portas de leitura e escrita, dado que adicionar
mais portas aumentaria o tempo de acesso de forma quadrática.

Outra vantagem dos registos é o seu pequeno endereço.
Como existe um número muito reduzido de registos, são necessários poucos
bits para os endereçar (num banco de 32 registos, são necessários $\log_2(32) = 5$ bits).
Isto reduz o tamanho das instruções e aumenta a densidade do código, dado que
também não é necessário efetuar `LOAD` e `STORE` como na memória.

![Ficheiro de registos](./assets/0002-ficheiro-registos.jpg#dark=3)

No MIPS existe a seguinte convenção de registos:

| Nome          | Número do Registo | Descrição                                | Preservado num JAL/interrupção? |
| ------------- | ----------------- | ---------------------------------------- | ------------------------------- |
| `$zero`       | 0                 | é uma constante, vale sempre zero        | n.a.                            |
| `$at`         | 1                 | reservado para o _assembler_             | n.a.                            |
| `$v0` a `$v1` | 2 a 3             | valores de retorno                       | [no](color:red)                 |
| `$a0` a `$a3` | 4 a 7             | argumentos de funções                    | [yes](color:green)              |
| `$t0` a `$t7` | 8 a 15            | registos temporários                     | [no](color:red)                 |
| `$s0` a `$s7` | 16 a 23           | valores a guardar                        | [yes](color:green)              |
| `$t0` a `$t9` | 24 a 25           | valores temporários                      | [no](color:red)                 |
| `$k0` a `$k1` | 26 a 27           | reservados para tratamento de exceções   | [no](color:red)                 |
| `$gp`         | 28                | ponteiro global (_global pointer_)       | [yes](color:green)              |
| `$sp`         | 28                | ponteiro da pilha (_stack pointer_)      | [yes](color:green)              |
| `$fp`         | 28                | [_frame pointer_][frame-pointer-explain] | [yes](color:green)              |
| `$ra`         | 28                | endereço de retorno                      | [yes](color:green)              |

### Instruções com Formato R

![Instruções com formato R](./assets/0002-formato-r.png#dark=3)

- `op`: código de operação - opcode
- `rs`: primeiro número de registo
- `rt`: segundo número de registo
- `rd`: número de registo de destino
- `shamt`: quantidade de shift (00000 por agora)
- `funct`: código de função - extensão do opcode

:::info[Exemplo]

![Exemplo R](./assets/0002-exemplo-r.png#dark=3)

Olhando para a imagem acima, podemos fazer a soma dos dois registos,
guardando o valor em t0, através do comando:

```mips-asm
add $t0, $s1, $s2
```

Assim, obtemos a nossa instrução em código máquina, 02324020 em base hexadecimal.

:::

### Operandos Imediatos

![Instruções com formato I](./assets/0002-formato-i.png#dark=3)

Sempre que temos uma constante estamos perante um operando [I (imediato)](color:pink).
Como indica o formato da instrução, a constante é guardada mesmo na instrução.
Isto resulta num tamanho máximo de 16 bits, ou seja, de $-2^{15}$ até $2^{15}$ (quando signed).

:::info[Exemplos]

```mips-asm
addi $s3, $s3, 4 # adiciona 4 ao registo $s3
```

![Exemplo I](./assets/0002-exemplo-i.png#dark=3)
:::

:::tip[Subtração Imediata]
Não existe subtração imediata, pelo que temos que usar uma adição imediata
com uma [constante negativa](color:purple).

```mips-asm
addi $s2, $s1, -1 # guarda em $s2 o valor de $s1 - 1
```

:::

### Load de Constantes de 32 bits

Como as instruções de tipo I (_immediate_) apenas suportam constantes de
16-bits, necessitamos de duas instruções para carregar valores de 32-bits.

1. Carregamos os bits de ordem superior (16 a 31) primeiro, com a instrução _load upper immediate_.

   ```mips-asm
   lui $t0, 0b1010101010101010
   ```

   Neste momento, temos `$t0 = 1010 1010 1010 1010 0000 0000 0000 0000`.

2. Carregamos os bits de ordem inferior (0 a 15) em segundo lugar, com a instrução _or immediate_.

   ```mips-asm
   ori $t0, $t0, 0b0101010101010101
   ```

   Ficamos assim com `$t0 = 1010 1010 1010 1010 0101 0101 0101 0101`.

:::warning[Números binários]

Nesta cadeira, tal como em IAC, vamos ver números binários.
Para tal, é recomendado rever [essa matéria](/iac/mundo-binario#bases-de-numera%C3%A7%C3%A3o)
na _tab_ dos resumos de Introdução à Arquitetura de Computadores.

Para realizarmos uma operação sem complemento para 2,
temos que adicionar um u (unsigned) ao nome da operação.  
São exemplos disto `addu`, `addiu`, `subu`, etc...

:::

## Operações Lógicas

| Operação    | C       | Java    | MIPS         |
| ----------- | ------- | ------- | ------------ |
| Shift left  | `<<`    | `<<`    | `sll`        |
| Shift right | `>>`    | `>>>`   | `srl`        |
| Bitwise AND | `&`     | `&`     | `and`,`andi` |
| Bitwise OR  | `\|`    | `\|`    | `or`, `ori`  |
| Bitwise NOR | `~(\|)` | `~(\|)` | `nor`        |

Estas operações são usadas na manipulação de _bits_
e são úteis para extrair ou inserir grupos de _bits_ numa palavra.

## Operações de Deslocamento

![Operações _shift_](./assets/0002-shift-operations.png#dark=3)

É importante referir que o [_shamt_](color:purple) corresponde ao número de
posições que pretendemos avançar ou recuar.

O [_shift left_](color:purple) ajuda-nos a fazer multiplicações de $2^i$
pois avança $i$ casas para a esquerda e adiciona os 0 que faltam;
o [_shift right_](color:purple) ajuda-nos a fazer divisões de $2^i$
pois avança $i$ casas para a direita e adiciona os 0 que faltam.

:::info[Exemplo]

Imaginemos que queremos multiplicar um valor por 8 ($2^3$).

Então, podemos fazer o seguinte shift:

```mips-asm
sll $t0, $t0, 3
```

:::

## Instruções de Acesso a Memória

O MIPS tem duas instruções básicas de transferir dados para aceder a memória:

```
lw $t0, 4($s3) # load word from memory

sw $t0, 8($s3) # store word to memory
```

O nosso número no segundo registo pode ser negativo ou positivo desde que tenha $2^{15}$ bits.
Para além disso, o _offset_ diz-nos quantos bits podemos ir tanto
para a esquerda como para a direita.

![Acesso a memória](./assets/0002-acesso-memoria.png#dark=3)

### Operandos de Memória

A memória principal é usada para a [composição de dados](color:pink),
nomeadamente _arrays_, estruturas e dados dinâmicos.
Para efetuar operações aritméticas temos que dar
[_load_ dos valores da memória](color:pink) para os registos e no final
temos que dar [_store_ do resultado do registo](color:pink) para a memória.
A memória é [endereçada em bytes](color:pink) e cada endereço é identificado
por um valor de 8 bits;
as palavras são alinhadas em memória com um endereço que seja um [múltiplo de quatro](color:pink).

O MIPS é um [Big Endian](color:purple), isto quer dizer que o byte mais
significativo está no endereço mais baixo de uma palavra.
Da mesma forma, [Little Endian](color:purple) significa que o byte menos
significativo está no endereço mais baixo.

Assim, ficamos com:

`lb rt, offset(rs)` `lh rt, offset(rs)` : sinal extendido para 32 bits em rt

`lbu rt, offset(rs)` `lhu rt, offset(rs)` : zero extendido para 32 bits em rt

`sb rt, offset(rs)` `sh rt, offset(rs)` : \_store\_\_ no ponto mais à direita de um byte

![Acesso a memória](./assets/0002-memoria.png#dark=3)

## Instruções de Controlo

Como já vimos acima com as operações lógicas e aritméticas,
também temos que ver as [instruções de controlo](color:pink).

![Jump](./assets/0002-jump.png#dark=3)

Começando por avaliar a função _Jump_ ([j ou jal](color:purple)).
Salta para um endereço direto.
Um _Jump register_ ([jr](color:purple)) copia o registo para o PC.

### Operações condicionais

As operações condicionais [não têm _flags_](color:pink).
Um _branch_ salta para uma instrução se a condição for verdadeira,
caso contrário continua sequencialmente.

_branch if equal_: `beq rs, rt, L1`

_branch if not equal_: `bne rs, rt, L1`

_if (rs < rt) rd = 1; else rd = 0_: `slt rd, rs, rt`

_if (rs < constant) rt = 1; else rt = 0_: `slti rt, rs, constant`

_less than_ `blt $s1, $s2, Label`

_less than or equal to_ `ble $s1, $s2, Label`

_greater than_ `bgt $s1, $s2, Label`

_great than or equal to_ `bge $s1, $s2, Label`

Um _branch_ é sempre específicado por um _opcode_, dois registos e um
endereço para o qual queremos ir.

![Branch](./assets/0002-branch.png#dark=3)

Ao fazermos um _branch_. o nosso endereço vai sempre para o $$PC + offset*4$$,
visto que o Pc é sempre incrementado 4 valores de cada vez.

![Sumário](./assets/0002-sumario1.png#dark=3)
![Sumário](./assets/0002-sumario2.png#dark=3)

:::tip[Jump e Branch]

Apesar de um _Branch_ e um _Jump_ fazerem sensivelmente a mesma coisa,
um _Jump_ refere-se a um [salto incondicional](color:pink) enquanto um Branch
é um [salto condicional](color:pink).
Para além disso, não podemos fazer saltos **muito longos**, pois faltam-nos bits
para indicar a instrução para qual saltar.
Assim no MIPS apenas podemos fazer _Jump_ no quadrante de código onde estamos,
em alternativa podemos usar um _Branch_.

Se queremos fazer um _branch_ para L1 mas este está muito longe:

```
beq $s0, $s0, L1
```

Temos que fazer:

```
bne $s0, $s1, L2
j L1
L2: ...
```

:::

## Compilar em Assembly

Tal como vimos nas outras linguagens de programação, existem vários códigos
simples que conseguimos recriar em Assembly mesmo sem as palavras específicas.

### _If statements_

![If statement](./assets/0002-if.jpg#dark=3)

Código em C seria:

```c
if (i==j)
    f = g+h;
else
    f = g-h;

```

Como não existe _if_ em Assembly temos que fazer:

```
bne $s3, $s4, Else
add $s0, $s1, $s2
j Exit
Else: sub $s0, $s1, $s2
Exit: ...

```

### _Loop statements_

Código em C seria:

```c
while (save[i] == k)
    i += 1;

```

Como não existe _while_ em Assembly temos que fazer:

```
Loop: sll $t1, $s3, 2
add $t1, $t1, $s6
lw $t0, 0($t1)
bne $t0, $s5, Exit
addi $s3, $s3, 1
j Loop
Exit: ...

```

## Blocos básicos

Um bloco básico é uma sequência de instruções que não têm nem
[_branches_ embebidos](color:pink), exceto no final, nem
[_target branches_](color:pink), exeto no início.
Um compilador identifica blocos básicos para otimização e um
[processador avançado](color:purple) consegue acelerar a
execução de blocos básicos.

![Blocos básicos](./assets/0002-blocos.png#dark=3)

[frame-pointer-explain]: https://softwareengineering.stackexchange.com/questions/194339/frame-pointer-explanation#194341
