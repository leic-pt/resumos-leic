---
title: Modelo EA
description: >-
  Modelo Entidade-Associação
path: /bd/er-model
type: content
---

# Modelo Entidade-Associação

```toc

```

## O que é?

O [Modelo Entidade-Associação](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model)
permite-nos exprimir as necessidades do domínio de uma aplicação.
Ao construir um Modelo E-A, conseguimos mais tarde determinar que tabelas e
colunas necessitamos na nossa base de dados.

Com este modelo conseguimos exprimir:

- Entidades
  - Entidades Fracas
- Atributos de Entidades
  - Chaves Primárias
- Associações (Relações)
- Agregações
- Generalizações/Especializações

## Entidades e Atributos

Uma [**entidade**](color:orange) pode conter vários [**atributos**](color:green),
sendo que alguns desses atributos podem ser a sua chave primária.  
Dizemos que os atributos que contituem a chave primária são os atributos
que **caracterizam** a entidade.

Exemplos de entidades são "Pessoa", "Produto", "Compra", etc.  
Exemplos de atributos, neste caso de uma "Pessoa", são "número cartão de cidadão",
"nome", "sexo", "data de nascimento", etc.

// TODO inserir exemplo

As [**entidades**](color:orange) são representadas por um retângulo, enquanto que
os [**atributos**](color:green) são representados por uma elipse.
Os atributos que são chave primária representam-se a sublinhado.

[**Pelo menos**](color:red) um atributo tem de ser uma chave primária.

## Associações (Relações)

Uma associação entre **duas ou mais** entidades representa a relação entre
elas.

Como exemplo simples, podemos pensar que uma "Compra" contém "Produtos", pelo
que estão relacionados.  
Podemos representar esta associação com a seguinte notação:

// TODO inserir exemplo

As associações têm normalmente um nome, único em todo o diagrama, que normalmente
é um verbo.

As associações são adirecionais, mas podemos utilizar os símbolos `>` e `<` para
desambiguar alguns casos.

Algumas associações podem também conter atributos. No entanto, é importante ter em
conta que se tivermos muitos atributos numa associação, pode valer a pena criar
uma nova entidade.

Tomemos um cenário em que temos uma relação Fornecedor-Loja, em que existe um
número máximo de produtos mensais que podem ser encomendados pela loja ao fornecedor.
A associação entre a entidade Fornecedor e a entidade Loja tem assim um atributo:
o número máximo de produtos mensais.  
Representamos uma associação com atributos das seguinte forma:

// TODO inserir exemplo

// TODO associações ternárias
