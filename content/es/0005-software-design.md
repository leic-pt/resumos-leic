---
title: Design de Software
description: >-
  Princípios e Padrões do Desenho de Software.
path: /es/software-design
type: content
---

# Design de Software

```toc

```

O desenho de software é uma parte crucial no desenvolvimento de software.
Alguns dos objetivos são facilitar a manutenção e evolução do software ao longo do tempo.

O custo de mudança é altamente impactado pela localidade e propagação da mudança.
É mais fácil mudar 100 linhas num módulo do que 1 linha em 100 módulos.

Então, é necessário ficarmos familiarizados com dois conceitos cruciais de bom desenho de software:

**Coesão**, ou _Cohesion_, é a métrica que avalia a localidade da mudança.
Um módulo altamente coeso, probabilisticamente falando, terá uma localidade de mudança alta.

**Ligação**, ou _Coupling_, é a métrica que avalia a propagação da mudança.
Um módulo com baixa ligação, probabilisticamente falando, terá menor propagação de mudanças.

Bom desenho de software deve ser desenvolvido com as seguites propriedades:

- Alta Coesão -> Aumentar localidade de mudança
- Baixa Ligação -> Diminuir propagação de mudança

## Princípios de Design de Software

Os princípios de desenho de software **SOLID** são:

**S**ingle Responsibility: Um módulo deve ter uma única responsabilidade.

**O**pen-Closed: Aberto a extensão, Fechado a modificação.

**L**iskov's Substitution Principle: Deve ser possível substituir completamente uma subclasse pelas suas abstrações sem gerar erros.

**I**nterface Segregation: Clientes devem usar interfaces mínimas que têm apenas o estritamente necessário para a sua interação.

**D**ependency Inversion: Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.

## Padrões de Design de Software

<!-- TODO: adicionar imagens de cada padrão, para conseguirem ser explicados melhor -->

### Command

_Invoker_ interage com uma abstração de um comando. O cliente define um comando concreto, que implementa a interface abstrata do comando.

Propriedades:

- Baixa ligação entre o _invoker_ e cada comando concreto
- Fácil de extender com novos tipos de comandos
- Comandos concretos são altamente

### Template Method

Define o esqueleto do programa num algoritmo e delega alguns passos para as subclasses. Mantém a estrutura do algoritmo, com a liberdade de poder alterar os seus passos.

Propriedades:

- Ligação alta entre subclasses e superclass devido à estrutura do algoritmo
- Estrutura do algoritmo é coesa na superclasse
- Partes do algoritmo são coesas nas subclasses

### Composite

Compõe objetos em estruturas de árvore, com maior liberdade na representação de hierarquias.

Propriedades:

- Baixa ligação entre o cliente e o _composite_, pois o cliente depende de uma interface comum a todos os membros
- Membros usam a mesma interface na comunicação, e é fácil extender com novos tipos de membros
- Alta coesão visto que cada membro contém resposabilidades associadas à sua função

### State

Encapsula comportamentos variados no mesmo objeto, com base num estado interno.
Um _State_ é uma interface abstrata usada pelo contexto, e cada _Concrete State_ é uma subclasse desta abstração.

Propriedades:

- Baixa ligação entre o contexto e o _State_
- Um _Concrete State_ tem uma coesão alta relativamente ao seu set de operações
- Operações têm baixa coesão, visto que estão divididas pelos múltiplos possíveis _Concrete States_
