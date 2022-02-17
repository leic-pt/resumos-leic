---
title: Camada de Aplicação
description: Camada de Aplicação - Modelo Internet
path: /rc/aplicacao
type: content
---

# Camada de Aplicação

```toc

```

## Arquiteturas de Aplicações de Rede

- Cliente-Servidor
- Peer-to-peer (P2P)
- Híbrido

### Arquitetura Cliente-Servidor

**Servidor**: Sempre ligado, com endereço IP permanente e escalável com _server farms_.

**Clientes**: Comunicam com o servidor, não precisam de estar conectados continuamente, podem utilizar IPs dinâmicos e não comunicam diretamente entre eles.

### Arquitetura Peer-to-peer

Não há servidor sempre ligado, _peers_ comunicam entre si diretamente. _Peers_ não precisam de estar conectados continuamente e podem mudar de IP. Bastante escalável, mas díficil de gerir.

### Híbrido

Exemplo do Skype: Servidor dá aos clientes os endereços, mas chamadas voz são feitas diretamente entre os clientes utilizando uma aplicação _Voice-over-IP_ P2P.

## API de sockets
Um processo envia ou recebe mensagens a partir do seu socket. O API permite escolher o protocolo de transporte e definir alguns parâmetros.

### Endereçar um processo
Para um processo receber mensagens precisa de ter um identificador. Cada *host* tem um endereço IPv4 (32 bits) e/ou IPv6 (128 bits) único.

Como cada *host* pode correr vários processos, este endereço não é suficiente para identificar um processo, por isso o identificador incluí também um número de um porto associado ao processo.

Exemplos de números de portos:
- Servidor HTTP: 80
- Servidor mail: 25

### Protocolo da camada de aplicação
O protocolo da camada de aplicação define o tipo de mensagens trocadas (por exemplo, se é um pedido ou uma resposta), a sintaxe das mensagens, a semântica e regras para quando e como os processos de aplicação enviam e respondem a mensagens.

Procolos de domínio público (definidos em RFCs):
- Exemplos: HTTP, SMTP

Procolos de proprietários:
- Exemplo: Skype

#### Utilização da camada de transporte
Diferentes aplicações diferem naquilo que necessitam da camada de transporte.

**Perda de dados**: Algumas aplicações toleram alguma perda de dados (por exemplo, áudio), enquanto outras aplicações precisam de um transferência de dados completamente fiável.

__**Throughput**__: Algumas aplicações precisam de um valor mínimo de __throughput__ para funcionarem de forma eficiente.

**Segurança**: Encriptação, integridade de dados, ...

**Atraso**: Aplicações de chamadas áudio precisam de um atraso mínimo para funcionar bem.