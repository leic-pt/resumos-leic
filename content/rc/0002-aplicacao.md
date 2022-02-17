---
title: Camada de Aplicação
description: Camada de Aplicação - Modelo Internet
path: /rc/aplicacao
type: content
---

# Camada de Aplicação

## Arquiteturas de Aplicações de Rede
- Cliente-Servidor
- Peer-to-peer (P2P)
- Híbrido

### Arquitetura Cliente-Servidor
**Servidor**: Sempre ligado, com endereço IP permanente e escalável com *server farms*.

**Clientes**: Comunicam com o servidor, não precisam de estar conectados continuamente, podem utilizar IPs dinâmicos e não comunicam diretamente entre eles.

### Arquitetura Peer-to-peer
Não há servidor sempre ligado, *peers* comunicam entre si diretamente. *Peers* não precisam de estar conectados continuamente e podem mudar de IP. Bastante escalável, mas díficil de gerir.

### Híbrido
Exemplo do Skype: Servidor dá aos clientes os endereços, mas chamadas voz são feitas diretamente entre os clientes utilizando uma aplicação *Voice-over-IP* P2P.