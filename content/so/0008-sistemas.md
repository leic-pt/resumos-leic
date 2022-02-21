---
title: Organização do Sistema Operativo
description: >-
  Constituição do Sistema Operativo.
  Iniciação de um Sistema Operativo.
  Estruturas Comuns de Sistemas Operativos.
path: /so/sistemas
type: content
---

# Organização do Sistema Operativo

```toc

```

## Constituição do Sistema Operativo

O utilizador típico de um computador não é um programador com conhecimento profundo de como a memória, processos e outros recursos do computador funcionam.
Desta forma, permitir que o utilizador típico de um computador tivesse acesso a estes recursos podia ser bastante destrutivo para a "segurança do computador".
Desta forma, o Sistema Operativo deve ser uma interface de proteção dos recursos essenciais do computador.  
Entre outros, o SO deve garantir que:

- os processos não interferem diretamente com recursos físicos do computador;
- os processos não interferem uns com os outros.

Para responder a esta necessidade, qualquer Sistema Operativo distingue dois modos de execução:

[**Modo Utilizador**](color:green)

Processos em modo utilizador **não têm privilégios**.
Isto é, não conseguem aceder diretamente à memória, periféricos, ficheiros, etc (os recursos bloqueados em modo utilizador dependem do SO).  
A maioria das aplicações que correm no nosso computador estão em modo utilizador.
O espaço de endereçamento acessível a um processo neste modo está limitado e deve ser disjunto do dos outros processos (para que estes não comuniquem entre si).
Podem aceder às suas variáveis e executar operações aritméticas, entre outros, mas estão proibidas de executar operações "perigosas" sobre os recursos físicos.

Quando um processo em modo utilizador pretende aceder a um recurso lógico, pede ao Sistema Operativo através de uma [**chamada de sistema**](color:purple).
É da responsabilidade do SO aceder ao recurso pretendido de forma segura e oferecer ao processo a resposta.

[**Modo núcleo**](color:red)

Modo priveligiado em que o código do Sistema Operativo é executado, de forma a poder interagir diretamente com os recursos físicos.
É responsável por disponibilizar aos processos que correm em [modo utilizador](color:green) uma biblioteca de funções sistema que lhes permitam aceder a recursos físicos de forma segura.  
Só o código do SO pode correr neste modo (de outra forma, estariamos a dar privilégios a processos que não os deviam ter).

Todas as atividades do modo núcleo são desencadeadas por [exceções](color:orange).
Estas podem ser:

- **assíncronas**: provocadas por algo ortogonal ao programa em execução (exemplos: timer, falta de energia, etc). Estas excepções também são frequentemente designadas por **interrupções**;
- **síncronas**: provocadas por um acontecimento relacionado com o programa em execução (exemplos: divisão por zero, acesso a zona de memória proíbida, [chamada de sistema](color:purple), etc);

Quanto à origem, podemos classificar as interrupções como:

- **Desencadeadas por Hardware**: relógio e periféricos (teclado, rato, etc);
- **Desencadeadas por Software (_traps_)**: para chamadas a funções de sistema;
- **Outras exceções**: por exemplo exceções de aritmética (divisão por zero) e acesso a memória indevido.

:::warning[Informação Conflituosa]

A informação nos últimos dois parágrafos contradiz-se mutualmente.
É assim que é apresentada num dos recursos da cadeira e estamos à espera de clarificação dos professores.

:::

![Visão de Alto Nível do SO](./imgs/0008/so.png#dark=1)

O SO deve então oferecer às aplicações uma implementação segura de:

- Gestão de processos;
- Input/output com periféricos;
- Gestão de atividades paralelas dentro de um processo;
- Gestão de memória;
- Sistema de ficheiros;
- Comunicação pela rede;
- Gráficos e gestão de janelas;
- Autenticação e segurança;
- Etc.

:::details[Exemplo: Interação com Periférico]

Para exemplificar o que acontece quando um processo faz uma [chamada de sistema](color:purple), vamos ver o que acontece quando um processo quer fazer algo sobre um periférico:

- Processo pede (através de [_syscall_](color:purple)) ação sobre um periférico;
- O núcleo (através do Gestor de Periféricos) envia pedido ao periférico e bloqueia o processo;
- Quando o pedido for servido, o periférico lança uma interrupção;
- Consequentemente, o núcleo (mais concretamente, o Gestor de Periféricos) é ativado, entrega a resposta ao processo e torna-o executável;

:::

## Iniciação de um Sistema Operativo

Quando o nosso computador está desligado, não passa de um objeto inanimado.
Contudo, quando carregamos num botãozinho, esse objeto inanimado converte-se numa caixa mágica capaz de fazer as mais diversas operações.
Vamos agora ver como é que isso é possível.

Quando uma máquina recebe energia, o PC (_Program Counter_) aponta para um programa na _Boot ROM_.
Nos computadores pessoais este programa pode ser o **BIOS** (_Basic Input/Output System_) ou a **UEFI** (_Unified Extensible Firmware Interface_).
Este programa faz algumas verificações sobre o computador (nomeadamente seestá em condições de ser iniciado) e, de seguida,
copia o bloco de código do disco para a RAM e salta para a primeira instrução desse programa, chamado _bootloader_.

O _bootloader_, por sua vez, carrega o programa do núcleo em RAM e salta para a rotina de inicialização do núcleo.
A inicialização do núcleo passa por:

- incializar as suas estruturas de dados;
- copiar rotinas de tratamento de cada interrupção para RAM;
- preencher a tabela de interrupções em RAM;
- lançar os processos inicias do sistema, incluindo o processo de login;

## Estrutura do Sistema Operativo

O Sistema Operativo não passa de um pedaço (muito grande) de código.
Consequentemente, a implementação do SO vem acompanhada das preocupações normais com projetos de código grandes.
Nomeadamente, a organização interna do SO deve facilitar a sua manutenção e evolução.  
Abaixo vamos estudar organizações comuns em sistemas operativos que garantem estas propriedades.

### Estrutura Monolítica

![Estrutura Monolítica](./imgs/0008/monolitic.png#dark=1)

- Um único sistema

- Internamente organizado em módulos

- Estruturas de dados globais

- Problema: como dar suporte à evolução

  - Em particular, novos periféricos

- Solução para este caso particular: gestores de dispositivos (device
  drivers)
- Problemas?

### Sistemas em Camadas

![Sistema em Camadas](./imgs/0008/onion.png#dark=1)

- Cada [camada](https://youtu.be/-FtCTW2rVFM?t=44) usa os serviços da camada precedente

- Fácil modificar código de uma camada

- Mecanismos de protecção $\rightarrow$ maior segurança e robustez

- Influenciou arquitecturas como Intel

### Micro-núcleo

- Propostas de investigação à separação entre:

Um micro-núcleo de reduzidas dimensões e que só continha o
essencial do sistema operativo:

- Gestão de fluxos de execução - threads
- Gestão dos espaços de endereçamento
- Comunicação entre processos
- Gestão das interrupções
- Servidores sistema que executavam em processos independentes a
  restante funcionalidade:
  - Gestão de processos
  - Memória virtual
  - Device drivers
  - Sistema de ficheiro

![Micro-Núcleo](./imgs/0008/nucleo.png#dark=1)

### Micro-Núcleo vs Monolítico

![VS](./imgs/0008/vs.png)

---

Slides:

- [Slides 6](https://drive.google.com/file/d/1FgdQU7hYV-WhvOQq9uUzElgzeeXp9Shc/view?usp=sharing)
