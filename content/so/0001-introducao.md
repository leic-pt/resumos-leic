---
title: Introdução aos Sistemas Operativos
description: 'Breve introudução da UC'
path: /so/introducao
type: content
---

# Introdução aos Sistemas Operativos

```toc

```

## O que é um Sistema Operativo?

O SO define funcionalmente o uso do computador:

- É o SO que caracteriza a "máquina informática" que usamos
- A "operação" baseia-se numa interface que a o SO disponibiliza

O Sistema Operativo cria uma máquina virtual totalmente independente
do hardware onde se executa

- O Sistema Operativo virtualiza praticamente
  todos os mecanismos de hardware e cria uma
  nova máquina

- Gerir Recursos

  - Seria difícil às aplicações controlar todos os aspetos da máquina física (interrupções,
    organização da memória, dispositivos, ...)
  - Abstrair os recursos físicos, oferecendo às aplicações um conjunto de recursos lógicos

- As aplicações com os seus dados são o que realmente tem valor para as organizações
- As grandes vantagens de ter uma aplicações que "corre" em Unix/Linux/Windows/MacOS:
  - Temos a certeza de a conseguir manter e fazer evoluir neste SO
  - O SO cria uma máquina virtual segura, fiável e otimizada

## Recursos Lógicos vs Físicos

| Recursos Lógicos                      | Recursos Físicos Virtualizados              |
| ------------------------------------- | ------------------------------------------- |
| Processos                             | CPU                                         |
| Espaços de endereçamento virtuais     | Memória RAM, Unidade de Gestão de Memória   |
| Ficheiros                             | Discos e dispositivo de memória de massa    |
| Periféricos virtuais                  | Periféricos físicos                         |
| Comunicação entre processos           | Partilha de memória, redes de dados         |
| Utilizadores, permissões, privilégios | Mecanismos de segurança físicos do hardware |

## Missão do Sistema Operativo

![abs](./imgs/0001/0001-abs.png#dark=1)

- Criar uma máquina virtual sobre a máquina física que ofereça
  os recursos lógicos básicos necessários ao desenvolvimento das
  aplicações

- Independente do hardware onde se executa

- Os sistemas disponibilizam uma interface que permite a qualquer programador estender o
  seu ambiente de programação permitindo-lhe criar aplicações muito sofisticadas,
  que beneficiam de:
  - Paralelismo
  - Optimização da memória
  - Persistência
  - Comunicação entre processos, local ou distribuída
  - Tratamento de erros
  - Novos periféricos, protocolos, etc.

## "Interfaces" do Sistema Operativo

### Interface Operacional

Destinada a ser utilizada pelo utilizador, quer seja uma interface gráfica como
uma interface de texto (i.e. terminal).

![Terminal](./imgs/0001/0001-term.png)

![Windows Explorer](./imgs/0001/0001-windows.png#dark=1)

### Interface programática

Bibliotecas de funções do sistema.  
A sua documentação pode ser consultada com o comando `man <nome da função/biblioteca>`

![APIs de sistema - man read](./imgs/0001/0001-man.png)

## Critérios de Qualidade do SO

![so](./imgs/0001/0001-so.png#dark=1)

Para um sistema operativo ser útil e ser considerado de qualidade, necessita de ser bom nos seguintes aspetos:

- **Desempenho**
  - Gestão eficiente dos recursos físicos que suportam os recursos lógicos.
  - Pequeno tempo de resposta, Débito, Previsibilidade, Justiça (distribuir os recursos justamente).
- **Segurança**
  - Isolamento dos Utilizadores
  - Permitir partilha segura de recursos lógicos
- **Fiabilidade e Disponibilidade**
  - Detectar um conjunto de faltas
  - Tolerar um conjunto de erros
- **Interface de programação completa e simples**
  - Facilitar a concepção das aplicações, a sua manutenção e portabilidade
- **Interface de operação e gestão dos recursos lógicos fácil de utilizar**
- **Portabilidade**
  - Das aplicações e do próprio SO
- **Adoção**

### Unix/Linux

Abaixo encontra-se a "árvore genealógica" da família de sistemas operativos Unix _(clica na imagem para ver com mais detalhe)_.

![Família de Sistemas Operativos Unix](./imgs/0001/0001-unix.png)

O Unix foi um sistema fundamental em toda a evolução da informática:

- O Unix é simples - interfaces simples, centradas no conceito de ficheiro
- O Unix e os seus programas utilitários estão escritos em C
  - Exemplo de como se consegue conceber um programa que com, muitas evoluções, vive há 4 décadas

---

**Slides:**

- [Slides 1](https://drive.google.com/file/d/1fO2-sTbu5bdwxVxBbaItqKj9ZWY65_GR/view?usp=sharing)
- [BREAD](https://i0.wp.com/confessionsofparenting.com/wp-content/uploads/2020/04/IMG_1537.jpg)
