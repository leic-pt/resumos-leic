---
title: Introdução aos Sistemas Operativos
description: 'Breve introdução da UC'
path: /so/introducao
type: content
---

# Introdução aos Sistemas Operativos

```toc

```

## O que é um Sistema Operativo?

O SO define funcionalmente o uso do computador.
É o SO que caracteriza a "máquina informática" que usamos e a "operação" baseia-se numa interface que a o SO disponibiliza.

![abs](./imgs/0001/0001-abs.png#dark=1)

O Sistema Operativo cria uma máquina virtual totalmente independente do hardware onde se executa que:

- Virtualiza praticamente todos os mecanismos de hardware;
- Gere os recursos: Seria difícil às aplicações controlar todos os aspetos da máquina física (interrupções, organização da memória, dispositivos, ...). O SO abstrai então os recursos físicos, oferecendo às aplicações um conjunto de recursos lógicos;
- As aplicações com os seus dados são o que realmente tem valor para as organizações;
- As grandes vantagens de ter uma aplicações que "corre" em Unix/Linux/Windows/MacOS:
  - Temos a certeza de a conseguir manter e fazer evoluir neste SO
  - O SO cria uma máquina virtual segura, fiável e otimizada
- Os sistemas disponibilizam uma interface que permite a qualquer programador estender o seu ambiente de programação permitindo-lhe criar aplicações muito sofisticadas, que beneficiam de:
  - Paralelismo
  - Otimização da memória
  - Persistência
  - Comunicação entre processos, local ou distribuída
  - Tratamento de erros
  - Novos periféricos, protocolos, etc.

### Recursos Lógicos vs Físicos

| Recursos Lógicos                      | Recursos Físicos Virtualizados              |
| ------------------------------------- | ------------------------------------------- |
| Processos                             | CPU                                         |
| Espaços de endereçamento virtuais     | Memória RAM, Unidade de Gestão de Memória   |
| Ficheiros                             | Discos e dispositivo de memória de massa    |
| Periféricos virtuais                  | Periféricos físicos                         |
| Comunicação entre processos           | Partilha de memória, redes de dados         |
| Utilizadores, permissões, privilégios | Mecanismos de segurança físicos do hardware |

## "Interfaces" do Sistema Operativo

### Interface Operacional

Destinada a ser utilizada pelo utilizador, quer seja uma interface gráfica como
uma interface de texto (i.e. terminal).

![Exemplos de Interfaces Operacionais](./imgs/0001/operational_interface.png#dark=3)

### Interface Programática

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
  - Detetar um conjunto de faltas
  - Tolerar um conjunto de erros
- **Interface de programação completa e simples**
  - Facilitar a conceção das aplicações, a sua manutenção e portabilidade
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
