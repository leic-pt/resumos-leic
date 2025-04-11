---
title: Arquitetura de Software
description: >-
  Arquitetura de Software, Padrões Arquiteturais, Arquiteturas de Aplicações, Engenharia de Requisitos
path: /es/software-architecture
type: content
---

# Arquitetura de Software

```toc

```

## Views

A arquitetura de software tem o objetivo de fazer um design de alto nível do desenvolvimento de software. Deve demonstrar as qualidades do sistema e satisfazer os requisitos dos _stakeholders_.

Pode ser vista de diferentes perspetivas:

### Lógica (Logical view)

A _Logical view_ foca-se na estrutura funcional do sistema, representando os principais componentes e a forma como interagem para satisfazer os requisitos funcionais. Esta perspetiva é essencial para compreender como o sistema responde às necessidades dos _end users_ e _stakeholders_, utilizando diagramas de classes, objetos ou outros modelos que descrevem o comportamento lógico da aplicação.

### Física (Physical view)

A _Physical view_ aborda a disposição física dos componentes de software no _hardware_, incluindo servidores, redes e dispositivos. Esta vista é importante para garantir que o sistema será executado de forma eficiente e segura no ambiente de produção, considerando fatores como a escalabilidade, redundância e distribuição geográfica dos recursos.

### Desenvolvimento (Development view)

A _Development view_ (também conhecida como _Implementation view_) descreve a organização do código fonte e os módulos de desenvolvimento. Esta perspetiva é crucial para os programadores e equipas técnicas, pois define a estrutura do sistema em termos de pacotes, bibliotecas e dependências, facilitando a manutenção, reuso e evolução do software.

### Processo (Process view)

A _Process view_ trata dos aspetos dinâmicos do sistema, nomeadamente a forma como os processos interagem, comunicam e garantem o desempenho e a disponibilidade. Esta perspetiva considera elementos como concorrência, sincronização, _throughput_ e tolerância a falhas.

## Padrões Arquiteturais

### MVC

- Divide a aplicação em três componentes principais: _Model_, _View_ e _Controller_.
- O _Model_ representa os dados e a lógica de negócio.
- A _View_ é responsável pela interface com os _end users_, apresentando os dados.
- O _Controller_ atua como intermediário, recebendo as interações dos _end users_ e atualizando o _Model_ e a _View_ em conformidade.

### Layered

- Organiza o sistema em camadas, cada uma com uma responsabilidade bem definida.
- As camadas comuns incluem: apresentação, lógica de negócio, acesso a dados e base de dados.
- Facilita a substituição e reutilização de componentes.
- Promove uma arquitetura modular e com baixo acoplamento.

### Repository

- Centraliza o acesso e manipulação de dados através de um repositório comum.
- Os componentes de lógica de negócio comunicam com o repositório para persistência e recuperação de dados.
- Permite desacoplar a lógica de acesso a dados da lógica de negócio.
- Facilita a substituição de fontes de dados (ex: mudar de uma base de dados relacional para uma _API_ externa).

### Client-Server

- Divide a aplicação entre dois papéis principais: _client_ e _server_.
- O _client_ envia pedidos e apresenta os dados aos _end users_.
- O _server_ processa os pedidos, executa lógica de negócio e retorna as respostas.
- Promove a escalabilidade e separação de responsabilidades.

### Pipe and Filter

- Organiza o processamento de dados como uma cadeia de filtros interligados por _pipes_.
- Cada _filter_ realiza uma transformação sobre os dados e passa o resultado ao próximo.
- Os _pipes_ funcionam como canais de comunicação entre os _filters_.
- Facilita a reutilização e composição de funcionalidades.

## Arquiteturas de Aplicações

As arquiteturas de aplicações definem as estruturas fundamentais que organizam e suportam os sistemas informáticos, garantindo que os processos de negócio sejam executados de forma eficiente e fiável. Cada arquitetura é desenhada para responder a necessidades específicas, podendo variar desde o processamento transacional até à interpretação de dados em linguagem natural.

### Transaction Processing Systems

Os _Transaction Processing Systems_ são sistemas concebidos para gerir transações de forma atómica e garantir a integridade e a consistência dos dados.

- **Atomicidade:** Cada transação é tratada como uma unidade indivisível, que deve ser concluída na sua totalidade ou revertida.
- **Consistência:** As transações mantêm o estado do sistema consistente, aplicando regras de integridade definidas.
- **Isolamento:** As operações executadas em simultâneo não interferem entre si, prevenindo conflitos.
- **Durabilidade:** Uma vez confirmada uma transação, os seus efeitos são persistentes, mesmo em caso de falhas no sistema.

### Information Systems

Os _Information Systems_ (Sistemas de Informação) são encarregados de recolher, processar, armazenar e disseminar dados, transformando-os em informação útil para a tomada de decisões.

- **Armazenamento de Dados:** Utilização de bases de dados para guardar e recuperar informações de forma organizada.
- **Processamento de Dados:** Conjunto de operações que transformam dados brutos em informação significativa para o negócio.
- **Interfaces de Utilizador:** Ferramentas que permitem aos _end users_ interagir com o sistema de forma intuitiva e eficaz.
- **Relatórios e Análise:** Módulos para a apresentação de dados e suporte à decisão, frequentemente integrados com _Business Intelligence_.

### Language Processing Systems

Os _Language Processing Systems_ são projetados para interpretar, processar e gerar linguagem humana, recorrendo a técnicas avançadas de _Natural Language Processing (NLP)_.

- **Análise de Sentimentos:** Identificação e classificação de emoções ou opiniões expressas em textos.
- **Reconhecimento de Fala:** Conversão da linguagem falada em texto, permitindo uma interface mais natural com o utilizador.
- **Tradução Automática:** Processos automáticos para traduzir textos entre diferentes línguas.
- **Chatbots e Assistentes Virtuais:** Sistemas que utilizam _NLP_ para interagir com os utilizadores, respondendo a perguntas e executando tarefas.

## Engenharia de Requisitos

A Engenharia de Requisitos estabelece a base sobre a qual o sistema será concebido e implementado. Este processo visa garantir que as necessidades dos diversos intervenientes sejam corretamente identificadas, analisadas e documentadas, permitindo um desenvolvimento orientado para resultados fiáveis e de qualidade.

### Qualidades dos Requisitos

Para que os requisitos sejam eficazes, devem possuir as seguintes qualidades:

- **Completude (Completeness):** Todos os aspetos essenciais para o funcionamento do sistema devem estar definidos, evitando lacunas que possam comprometer a solução.
- **Consistência (Consistency):** Os requisitos não devem conter contradições nem conflitos entre si, permitindo uma interpretação clara e uniforme.
- **Mensurabilidade (Measurability):** É crucial que os requisitos sejam formulados de modo a permitir a sua verificação de forma objetiva, facilitando testes e avaliações de desempenho.

### Processo de Engenharia de Requisitos

O processo de Engenharia de Requisitos pode ser estruturado nas seguintes fases:

1. **Elicitação e Análise:**  
   Nesta etapa, são identificadas e recolhidas as necessidades dos _end users_, _stakeholders_ e de outras partes interessadas.

2. **Validação:**  
   Após a recolha, os requisitos são revistos em conjunto com todos os intervenientes para confirmar a sua aderência às necessidades de negócio e à viabilidade técnica.
