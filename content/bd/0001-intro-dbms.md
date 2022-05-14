---
title: Introdução aos SGBD
description: >-
  Introdução aos Sistemas de Gestão de Bases de Dados - SGBD, ou Database Management System - DBMS - em inglês.
path: /bd/intro-dbms
type: content
---

# Introdução aos Sistemas de Gestão de Bases de Dados

```toc

```

## BD vs SGBD

Embora possam ser confundidos (incorretamente) no dia-a-dia, existe uma clara diferença
entre [**bases de dados**](color:green) e [**sistemas de gestão de bases de dados**](color:yellow).

Uma [**base de dados**](color:green) é, como o próprio nome indica, um conjunto de dados
que estão interligados entre si.
Frequentemente descreve organizações que existem no mundo real.  
Por exemplo, numa instituição como o Ténico, é preciso associar professores a um
departamento. Teremos então duas [**entidades**](color:pink): professores e departamentos.
Estas duas entidades estão [**relacionadas**](color:purple): o professor X pertence ao departamento Y.

Por outro lado, um [**sistema de gestão de bases de dados**](color:yellow) é um pacote de
software que está desenhado para guardar e gerir bases de dados.
Existem diferentes SGBDs, como veremos mais à frente.  
Os SGBD têm de uma grande quantidade de funcionalidades para facilitar a vida a
quem usa as bases de dados (e.g. programadores), como garantias de consistência,
controlo de acessos, gestão de concorrência (_transactions_), e muito mais.  
Estas são também as vantagens da utilização de SGBDs em vez de [**ficheiros**](color:red),
visto que um programador necessitaria de programar estas funcionalidades do zero
todas as vezes.

![Exemplos de SGBDs relacionais](./assets/0001-dbms-examples.png#dark=3)

Hoje em dia existem vários [**sistemas de gestão de bases de dados**](color:yellow),
cada um com as suas vantagens e desvantagens, entre os quais já devem conhecer alguns:
MySQL, MariaBD, PostgreSQL, SQLite, Microsoft SQL Server, Oracle Database, H2,
Microsoft Access, e muitos outros.  
Todos estes são exemplos de SGBDs relacionais. Existem outros tipos de SGBDs,
entre os quais NoSQL, os quais iremos explorar no futuro.

Hoje em dia existem também serviços cloud que nos dão acesso a bases de dados
de uma forma extremamente simples e escalável, como a Amazon Web Services e
a Azure Cloud.

## Vantagens e Desvantagens de SGBDs

[**Vantagens**](color:green)

Já referenciámos algumas das vantagens de SGBDs, no entanto existem muitas mais.

- **Independência dos dados**

  Existe uma camada de abstração entre a representação dos dados quando são armazenados
  e ao que as aplicações têm acesso. Uma aplicação não tem de saber (nem sabe)
  como é feito o armazenamento dos dados.  
  Podemos, por exemplo, tanto por razões de _performance_ como de resiliência,
  ter os dados armazenados em discos diferentes ou até máquinas diferentes.
  As nossas aplicações nunca precisam de ter isto em conta.

- **Acesso Eficiente aos Dados**

  A nível de armazenamento, os SGBDs usam várias técnicas sofisticadas para tornar
  o armazenamento e recolha de dados num processo eficiente.

  A nível de interface, conseguimos inferir certos dados a partir de informação
  já existente, assim como representar relações complexas.

- **Integridade dos Dados e Segurança**

  Quando estamos a modelar dados do mundo real, por vezes existem restrições a que temos
  de obedecer para assegurar que os dados são válidos. A este processo chama-se
  garantir a integridade dos dados, e é algo que os SGBDs fazem por nós.  
  Por exemplo, no Técnico queremos garantir que um aluno não está a fazer mais
  de 42 ECTS por semestre. Podemos dar esta regra ao nosso SGBD e não temos
  de nos preocupar com esta restrição no desenvolvimento da aplicação.

  Ao contrário de outras formas de armazenamento de dados, como ficheiros, os SGBDs
  dão-nos uma granularidade de permissões muitíssimo elevada de forma a controlar
  os acessos para cada utilizador.

- **Armazenamento Persistente**

  Quando usamos um SGBD temos a certeza que quando acabamos de executar uma instrução
  (e.g. inserir, atualizar, apagar, etc.) essa instrução foi executada e guardada
  persistentemente. Caso haja uma falha imediatamente após a execução desta instrução,
  temos a garantia que não perdemos estes dados.

- **Administração dos Dados**

  Permite a separação de funções: quem desenvolve a aplicação não necessita de
  ser a mesma pessoa que administra a base de dados.
  Assim, pode-se ter um profissional muito mais experiente só focado no SGBD,
  melhorando o armazenamento e recolha de dados.

- **Acesso Concorrente e Recuperação de Falhas**

  Os SGBDs proporcionam ferramentas (_transactions_) para minimizar o tempo perdido
  por acessos concorrentes, minimizando também as falhas que podem ocorrer.

- **Redução do Tempo de Desenvolvimento de Aplicações**

  Com todas as ferramentas disponibilizadas pelos SGBDs, assim como linguagens
  próprias de interrogação, dedicadas a dados (e.g. SQL), o trabalho dos programadores
  é imensamente facilitado.
  Estas linguagens dão uma interface de alto nível para os dados, que tal como já
  vimos, permitem criar várias abstrações que simplificam o desenvolvimento de aplicações.

[**Desvantagens**](color:red)

Embora sejam muitas as vantagens dos SGBDs, existem algumas (embora poucas) desvantagens.

- **Aplicações Muito Complexas**

  Por vezes podemos ter aplicações muito complexas em que não é possível modelar
  os nossos dados num sistema relacional.

- **Desempenho Inaceitável (e.g. para aplicações de tempo-real)**

  Para algumas aplicações, como uma bolsa, os dados são alterados tão rapidamente
  que o desempenho dos SGBDs não é suficiente.

- **Falta de Análise Flexível para Certos Tipos de Dados**

  Maioritariamente para texto, em que podemos querer fazer pesquisas avançadas
  (_full text search_/_fuzzy search_) que a maioria dos SGBDs não suportam.

- **Falta de Necessidade**

  Para aplicações extremamente simples ou com dados maioritariamente imutáveis,
  pode não fazer sentido a introdução de um SGBD, por mais pequeno que seja
  o _overhead_ de o fazer hoje em dia.
  Uma aplicação deste tipo não beneficiaria de um SGBD.
