---
title: Normalização
description: >-
  Motivação: anomalias
  Teoria da Normalização.
  Dependências funcionais (FD).
  1ª Forma Normal.
  2ª Forma Normal.
  3ª Forma Normal.
  Forma Normal Boyce-Codd.
  Decomposição de relações.
path: /bd/normalization
type: content
---

# Normalização

```toc

```

<!-- TODO: FALTAM BUÉ EXEMPLOS, DEPOIS NO RECURSO ADICIONAM-SE -->

## Motivação: anomalias

Por vezes, ao desenhar uma base de dados, as relações são definidas de maneira tal que a informação
é guardada de maneira redundante. Vejamos o seguinte exemplo:

Dada a relação:

> info_conta(num_conta, saldo, nome_cliente, cidade_cliente, nome_agencia, cidade_agencia)

Podemos construir a seguinte tabela de exemplo:

| `num_conta` | `saldo` | `nome_cliente` | `cidade_cliente` | `nome_agencia` | `cidade_agencia` |
| ----------- | ------- | -------------- | ---------------- | -------------- | ---------------- |
| A-101       | 500     | Hayes          | Harrison         | Downtown       | Brooklyn         |
| A-101       | 500     | Johnson        | Palo Alto        | Downtown       | Brooklyn         |
| A-201       | 900     | Johnson        | Palo Alto        | Perryridge     | Horseneck        |
| A-215       | 700     | Smith          | Rye              | Mianus         | Horseneck        |
| A-444       | 625     | Smith          | Rye              | North Town     | Rye              |

Rapidamente percebemos que há informação repetida:

- a informação (num_conta, saldo) está repetida para cada cliente que participa nessa conta.
- a informação (nome_cliente, cidade_cliente) está repetida em cada conta em que ele participa.
- a informação (nome_agencia, cidade_agencia) está repetida para cada conta registada nessa agencia.

Esta repetição da mesma informação é propensa a erros, como iremos ver.

### Tipos de anomalias

Podemos enquadrar as anomalias em vários tipos:

- [**Anomalias de inserção**](color:green), quando para inserir um novo item na
  base de dados temos que inserir outros items, que não deviam estar relacionados.

- [**Anomalias de atualização**](color:pink), quando para atualizar um item temos
  de atualizar outros items, que não deviam estar relacionados.

- [**Anomalias de remoção**](color:yellow), quando para remover um item temos que
  remover outros itens que não deviam estar relacionados.

- [**Anomalias de consulta**](color:blue), para operações mais demoradas que o suposto,
  vamos ter maior consumo de largura de banda e mais memória gasta.

:::details[Exemplo]

No caso do exemplo anterior, podemos ver que existem as seguintes anomalias:

- quando se quer inserir uma conta para um cliente existente, temos que voltar a inserir a cidade do cliente.
- quando se quer alterar o saldo da conta A-101 tem que se atualizar em várias linhas.
- quando se quer apagar a conta A-101, também se vai estar a apagar o cliente Hayes (o que pode não ser desejado).

:::

Estas anomalias são causadas pela redundância de informação na base de dados, que advém de falhas
no seu desenho: a base de dados [**não está normalizada**](color:red), portanto.

:::info[Teoria da Normalização]

Os objetivos da normalização da informação passam por:

- **reduzir a redundância** de informação, evitando ter informação repetida na base de dados.
- guardar dados independentes de maneira independente, procurando não criar dependências
  desnecessárias nem apagar dependências que fazem sentido.
- garantir que os dados podem ser facilmente consultados, reduzindo a complexidade é reduzida ao mínimo.

Vamos abordar, entre outros conceitos da Teoria da Normalização, as [**dependências funcionais**](color:blue),
as [**formas normais**](color:green), e a [**decomposição de relações**](color:pink).

:::

## Dependências funcionais (FD)

Dada uma relação $r(XY)$, em que $X$ e $Y$ são subconjuntos de atributos, diz-se que
$X$ determina Y, ou que $Y$ é dependente de $X$, se cada valor de $X$ está associado a
[**um único**](color:orange) valor de $Y$. Neste caso, dizemos que $X \to Y$!

### Propriedades das dependências

As dependências funcionais obedecem às propriedades esperadas:

- [**Refletividade**](color:blue): se $Y \subseteq X$, então $X \to Y$.
- [**Aumentação**](color:yellow): se $X \to Y$, então $XZ \to YZ, \forall{Z}$.
- [**Transitividade**](color:green): se $X \to Y$ e $Y \to Z$, então $X \to Z$.

Destes axiomas, podemos ainda derivar mais propriedades:

- $X \to X$ é, claro, universal.
- [**Decomposição**](color:pink): se $X \to YZ$, então $X \to Y$ e $X \to Z$.
- [**União**](color:purple): se $X \to Y$ e $X \to Z$, então $X \to YZ$.
- [**Composição**](color:red): se $X \to Y$ e $A \to B$, então $XA \to YB$.

:::info[Fecho de Atributos]

O fecho, $\alpha^+$, de um conjunto de atributos $\alpha$, corresponde ao
conjunto de atributos $\beta$ que dependem de $\alpha$ - isto é, $\alpha \to \beta$.

Caso o fecho de $\alpha$ inclua todos os elementos da relação, dizemos que
$\alpha$ é uma [**super-chave**](color:orange) da mesma.

$\alpha^+$ pode ser computado iterativamente, como mostrado abaixo:

:::details[Exemplo]

A título de exemplo, considerando a seguinte relação:

> r(A, B, C, G, H, I)

Com o seguinte conjunto de dependências:

> $A \to B$, $A \to C$, $CG \to H$, $CG \to I$, $B \to H$

O fecho de $AG$, $(AG)^+$, pode ser computado tal que:

- começamos com um fecho que corresponde ao próprio $AG$;
- pegando em $A \to B$ (porque $A \subset AG$), podemos adicionar $B$ ao fecho,
  ficando então com o fecho $ABG$;
- pegando em $A \to C$ (porque $A \subset AG$), podemos adicionar $C$ ao fecho,
  ficando então com o fecho $ABCG$;
- pegando em $CG \to H$ (porque $G \subset AG$), podemos adicionar $H$ ao fecho,
  ficando então com o fecho $ABCGH$;
- pegando em $CG \to I$ (porque $G \subset AG$), podemos adicionar $I$ ao fecho,
  ficando então com o fecho $ABCGHI$.

Chegámos agora a um ponto em que todos os atributos da relação estão no fecho
do conjunto inicial, pelo que podemos afirmar que $AG$ é uma [**super-chave**](color:orange).

:::

É ainda interessante definir [**dependência total**](color:orange): dizemos que um
conjunto de atributos $Y$ é [**totalmente dependente**](color:orange) de outro
conjunto $X$ caso $X \to Y$ [**e**](color:red) não haja nenhum subconjunto
de $X$ que também determine $Y$. Isto é:

$$
\nexists_{S \subset X}: S \to Y
$$

Por fim, podemos agora definir [**chave candidata**](color:green): corresponde a uma
chave em que nenhum dos seus subconjuntos é uma chave - isto é, um subconjunto de
atributos $X$ de uma relação $R$ tal que $X \to R - X$.
Podendo haver mais que uma chave candidata, damos o nome de [**chave
primária**](color:red) à chave candidata escolhida pelo designer da BD para identificar unicamente tuplos numa relação.

## Formas Normais

Correspondem a formas estandardizadas de representar a informação na base de dados,
por forma a evitar (tanto quanto possível) a redundância da mesma, procurando ainda
manter a coerência dos dados. Baseiam-se na noção de **dependência funcional**
explorada mais acima.

### 1ª Forma Normal

Dizemos que uma relação está na 1ª Forma Normal quando todos os atributos são valores atómicos: isto é,
cada atributo da relação pode ter apenas um valor por tuplo. Esta é, aliás,
uma das definições necessárias para estarmos na presença de uma relação, já
que precisamos que o nosso modelo seja consultável.

![1ª Forma Normal](assets/0007-1fn.svg#dark=2)

Esta forma normal é a mais simples, e portanto também bastante limitada: não
faz qualquer verificação quanto à (in)dependência dos atributos, por exemplo.
É aqui que entra a 2ª forma normal.

### 2ª Forma Normal

Dizemos que uma relação está na 2ª Forma Normal caso esteja na 1ª Forma Normal, e
cada atributo não-chave dependa de [**todos os atributos-chave**](color:orange)
da relação em que se encontra.

Se tivermos a relação:

> maquina(<u>modelo, id</u>, voltagem)

Com as seguintes dependências:

> $id \to modelo$, $modelo \to voltagem$

Como a voltagem depende totalmente do modelo (não é preciso id para se saber qual o seu valor),
então não está a respeitar a 2ª FN.
Essa informação deveria estar representada noutra tabela.

Temos, contudo, que esta FN continua sem evitar por completo a redundância, dado
que pode haver dependências entre atributos não chave. É aqui que entra
a utilidade da 3ª Forma Normal.

### 3ª Forma Normal

Diz-se que uma relação está na 3ª Forma Normal quando está na 2ª Forma Normal e
todos os atributos não-chave são [**independentes entre si**](color:orange).

:::details[Exemplo]
Se alterarmos o exemplo anterior e passarmos a ter:

> maquina(<u>id</u>, modelo, voltagem)

Com as mesmas dependências:

> $id \to modelo$, $modelo \to voltagem$

Neste caso já respeita a 2ª FN, pois tanto $id \to modelo$ como $id \to voltagem$, e portanto, por transitividade, $id \to modelo \to voltagem$ -
temos, assim, todos os atributos não-chave a depender de atributos chave.

No entanto, a voltagem não é independente do modelo ($modelo \to voltagem$), pelo que esta relação não respeita a 3ª FN.
:::

### Forma Normal de Boyce-Codd

Chegámos, finalmente, a uma forma normal que evita qualquer tipo de redundâncias,
a [**forma normal de Boyce-Codd**](color:orange). Diz-se que uma relação está na FNBC quando
está na 3ª Forma Normal e [**todos os atributos**](color:orange)
(independentemente de serem ou não chaves) são totalmente dependentes de uma chave candidata.

:::details[Exemplo]
Vamos considerar o caso de querermos guardar informação sobre alunos, disciplinas e professores.
Neste caso, cada professor só pode estar associado a uma única disciplina.

Temos a relação:

> aula(<u>aluno, disciplina</u>, professor)

As chaves candidatas são:

- (aluno, professor)
- (aluno, disciplina)

Temos ainda as seguintes dependências:

> $(aluno, professor) \to disciplina$, $(aluno, disciplina) \to professor$, $(professor) \to disciplina$

Esta relação está na 3ª FN, pois só há um atributo não-chave, e esse atributo depende de ambos os atributos-chave.
No entanto, não está na FNBC, uma vez que disciplina é totalmente dependente de professor, e professor não é uma chave candidata.

:::

A FNBC é diferente da 3ª FN sempre que:

- há mais que uma chave candidata;
- as chaves são formadas por múltiplos atributos.

A FNBC já garante que [**não há redundância de informação**](color:orange) detetáveis por dependências
funcionais, logo previne anomalias.

## Decomposição de relações

O objectivo da decomposição de relações é pegar numa ou várias relações que não estão na FNBC e
subdividir noutras relações de maneira a que estas já estejam.

No entanto, decomposição de relações, se não for bem feita, pode gerar
perda de informação e/ou de dependências.
Dizemos que a decomposição de uma relação é [**_lossless_**](color:yellow) (sem
perdas) quando a relação original consegue ser obtida através do
`NATURAL JOIN` das relações resultantes da decomposição.

:::info[Teorema de Heath]

Dada uma relação $r(XYZ)$, em que $X$, $Y$, $Z$ são conjuntos de atributos, a
decomposição de $r$ em $r_1(XY)$ e $r_2(XZ)$ diz-se _lossless_ caso $X \to Y$ ou $X \to Z$.

:::

Podemos, caso se verifique o teorema de Heath, e dada uma relação $r(XYZ)$ onde $X \to Y$ é uma dependência que viola a FNBC, então, fazer o seguinte:

1. Decompor $r(XYZ)$ em $r_1(XY)$ e $r_2(XZ)$;
2. Verificar se $r_1$ e $r_2$ estão na FNBC, e repetir o processo recursivamente até todas as "sub-relações" criadas estarem na FNBC.
