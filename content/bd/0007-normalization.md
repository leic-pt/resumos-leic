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

## Motivação: anomalias

Por vezes, ao desenhar uma base de dados, as relações são definidas de maneira tal que a informação
é guardada de maneira redundante. Vejamos o seguinte exemplo:

Dada a relação: info_conta(num_conta, saldo, nome_cliente, cidade_cliente, nome_agencia, cidade_agencia)

Podemos construir a seguinte tabela de exemplo:

| num_conta | saldo | nome_cliente | cidade_cliente | nome_agencia | cidade_agencia |
| --------- | ----- | ------------ | -------------- | ------------ | -------------- |
| A-101     | 500   | Hayes        | Harrison       | Downtown     | Brooklyn       |
| A-101     | 500   | Johnson      | Palo Alto      | Downtown     | Brooklyn       |
| A-201     | 900   | Johnson      | Palo Alto      | Perryridge   | Horseneck      |
| A-215     | 700   | Smith        | Rye            | Mianus       | Horseneck      |
| A-444     | 625   | Smith        | Rye            | North Town   | Rye            |

Rapidamente percebemos que há informação repetida:

- a informação (num_conta, saldo) está repetida para cada cliente que participa nessa conta
- a informação (nome_cliente, cidade_cliente) está repetida em cada conta em que ele participa
- a informação (nome_agencia, cidade_agencia) está repetida para cada conta registada nessa agencia

Esta repetição da mesma informação é propensa a erros, como iremos ver.

### Tipos de anomalias

As anomalias podem-se enquadrar em vários tipos:

- **Anomalias de inserção**

  Quando para inserir um novo item na base de dados temos que inserir outros items, que não deviam estar relacionados.

- **Anomalias de actualização**

  Quando para actualizar um item temos actualizar outros items, que não deviam estar relacionados.

- **Anomalias de remoção**

  Quando para remover um item temos que remover outros items, que não deviam estar relacionados.

- **Anomalias de consulta**

  Operações mais demoradas que o suposto, maior consumo de largura de banda, maior memória gasta.

:::details[Exemplo]
No caso do exemplo anterior, podemos ver que existem as seguintes anomalias:

- quando se quer inserir uma conta para um cliente existente, temos que voltar a inserir a cidade do cliente
- quando se quer alterar o saldo da conta A-101 tem que se actualizar em várias linhas
- quando se quer apagar a conta A-101, também se vai estar a apagar o cliente Hayes (o que pode não ser desejado)
  :::

Estas anomalias são causadas pela redundância de informação na base de dados, que advém de falhas
no seu desenho. A base de dados [**não está normalizada**](color:orange).

## Teoria da Normalização

Os objectivos da normalização consistem em:

- reduzir a redundância de informação (não ter a informação repetida da base de dados)
- guardar dados independentes de maneira independente (i.e. não criar dependências desnecessárias nem apagar dependências que fazem sentido)
- garantir que os dados podem ser facilmente consultados (a complexidade é reduzida ao mínimo)

Nesta disciplina, são abordados vários conceitos da Teoria da Normalização:

- dependências funcionais
- formas normais
- decomposição de relações

## Dependências funcionais (FD)

Dada uma relação r(XY), em que X e Y são subconjuntos de atributos, diz-se que
X determina Y, ou que Y é dependente de X, se cada valor de X está associado a
[**um único**](color:orange) valor de Y.

Neste caso dizemos que X ⇒ Y

### Propriedades das dependências

As dependências funcionais obedecem às seguintes propriedades:

- se Y ⊆ X, então X ⇒ Y
- se X ⇒ Y, então XZ ⇒ XY
- se X ⇒ Y e Y ⇒ Z, então X ⇒ Z

Destes axiomas podemos derivar mais propriedades:

- X ⇒ X
- se X ⇒ YZ, então X ⇒ Y e X ⇒ Z
- se X ⇒ Y e X ⇒ Z, então X ⇒ YZ
- se X ⇒ Y e A ⇒ B, então XA ⇒ YB

### Chaves

Tipos de chaves:

- **Super chave**

  Qualquer conjunto de atributos que identifica unicamente os tuplos de uma relação (pode ter mais
  atributos que o necessário).

- **Chave candidata**

  Qualquer conjunto mínimo de atributos que identifica unicamente os tuplos de uma relação.

- **Chave primária**

  É uma das chaves candidatas (escolhida para servir de chave na tabela da base de dados).

### Chaves e dependências funcionais

Dada uma relação r(R) e um subconjunto de atributos K ⊂ R, podemos dizer que:

- K é uma super chave de r(R) se K ⇒ R
- K é uma chave candidata de r(R) se e só se K ⇒ R e ∄(α ⊂ K): α → R, ou seja, nenhum subconjunto de K pode derivar R

### Dependência total

Sejam X e Y conjuntos de atributos tais que X ⇒ Y. Diz-se que Y depende totalmente de X se
não há nenhum subconjunto de X que determine Y (por oposição a depender apenas parcialmente).

Formalmente: ∄(S ⊂ X): S → Y

## 1ª Forma Normal

Diz-se que uma relação está na 1ª FN quando:

- todos os atributos são valores atómicos

Isto é, cada linha só pode conter [**um valor por coluna**](color:orange), não dá para ter uma lista de números, por exemplo.

## 2ª Forma Normal

Diz-se que uma relação está na 2ª FN quando:

- está na 1ª FN
- cada atributo não-chave depende de [**todos os atributos-chave**](color:orange)

:::info[Exemplo]
Se tivermos a relação: maquina(<u>modelo, id</u>, voltagem)

Com as seguintes dependências:

- id ⇒ modelo
- modelo ⇒ voltagem

Como a voltagem depende totalmente do modelo (não é preciso id para se saber qual o seu valor),
então não está a respeitar a 2ª FN.

Essa informação deveria estar representada noutra tabela.
:::

## 3ª Forma Normal

Diz-se que uma relação está na 3ª FN quando:

- está na 2ª FN
- todos os atributos não-chave são [**independentes entre si**](color:orange)

  :::info[Exemplo]
  Se alterarmos o exemplo anterior e passarmos a ter: maquina(<u>id</u>, modelo, voltagem)

  Com as mesmas dependências:

  - id ⇒ modelo
  - modelo ⇒ voltagem

  Neste caso já respeita a 2ª FN, pois tanto id ⇒ modelo como id ⇒ voltagem (pois id ⇒ modelo ⇒ voltagem).

  No entanto, a voltagem não é independente do modelo (modelo ⇒ voltagem), pelo que esta relação não respeita a 3ª FN.
  :::

## Forma Normal de Boyce-Codd

Diz-se que uma relação está na FNBC quando:

- está na 3ª FN
- [**todos os atributos**](color:orange) (independentemente de serem ou não chaves) são totalmente dependentes de uma [chave candidata](/bd/normalization#chaves)

:::details[Exemplo]
Vamos considerar o caso de querermos guardar informação sobre alunos, disciplinas e professores.
Neste caso, cada professor só pode estar associado a uma única disciplina.

Temos a relação: aula(<u>aluno, disciplina</u>, professor)

As chaves candidatas são:

- (aluno, professor)
- (aluno, disciplina)

Temos ainda as seguintes dependências:

- (aluno, professor) ⇒ disciplina
- (aluno, disciplina) ⇒ professor
- (professor) ⇒ disciplina

Esta relação está na 3ª FN, pois só há um atributo não-chave, e esse atributo depende de ambos os atributos-chave.
No entanto, não está na FNBC, uma vez que disciplina é totalmente dependente de professor, e professor não é uma [chave candidata](/bd/normalization#chaves).

:::

A FNBC é diferente da 3ª FN sempre que:

- há mais que uma [chave candidata](/bd/normalization#chaves)
- as chaves são formadas por múltiplos atributos

A FNBC já garante que [**não há redundância de informação**](color:orange), logo previne anomalias.

## Decomposição de relações

O objectivo da decomposição de relações é pegar numa ou várias relações que não estão na FNBC e
subdividir noutras relações de maneira a que estas já estejam.

No entanto, decomposição de relações, se não for bem feita, pode gerar os seguintes problemas:

- perda de informação
- perda de dependências

A decomposição de uma relação diz-se lossless (sem perdas) quando a relação original consegue ser obtida
através do NATURAL JOIN das relações resultantes da decomposição.

### Teorema de Heath

Dada uma relação r(XYZ), em que X, Y, Z são conjuntos de atributos, a decomposição de r em r1(XY) e
r2(XZ) é lossless se X ⇒ Y ou X ⇒ Z.

### Decomposição em FNBC

Dada uma relação r(XYZ), onde X -> Y é uma dependência que viola a FNBC, então:

1. decompomos r(XYZ) em r1(XY) e r2(XZ)
2. verificamos se r1 e r2 estão na FNBC, repetir recursivamente até estarem
