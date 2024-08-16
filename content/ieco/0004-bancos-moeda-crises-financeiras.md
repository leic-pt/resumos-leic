---
title: Bancos. Moeda e o Mercado de Crédito. Crises Financeiras e Globalização
description: >-
  Bancos.
  Moeda e o Mercado de Crédito.

  Crises Financeiras.
  Globalização.
path: /ieco/bancos-moeda-crises-financeiras
type: content
---

# Bancos. Moeda e o Mercado de Crédito. Crises Financeiras e Globalização

```toc

```

## Moeda, Empréstimos e Consumo

:::tip[Moeda]

É o **meio de troca** usado para comprar bens e serviços.

Permite a **transferência de poder de compra** entre agentes.

Uma moeda só cumpre a sua função se for **aceite por todos os agentes envolvidos** numa interação.

:::

Se quisermos consumir um bem no presente em vez de no futuro, mas não temos
poder de compra suficiente, podemos pedir um **[empréstimo](color:yellow)**.
O **custo de oportunidade** de [ter mais bens agora é ter menos no futuro](color:red).

A dinâmica de pedir emprestado e emprestar permite-nos reorganizar a nossa capacidade
de comprar bens e serviços ao longo do tempo.

**[Taxa de juro](color:purple) ($r$)**: Preço de adiantar algum poder de compra no tempo.

- Quanto mais alto for $r$, mais consumo futuro temos de abdicar.
- No contexto de um [empréstimo](color:orange), corresponde ao **preço do empréstimo**.
- No contexto de um [depósito](color:green), corresponde à **remuneração pelo dinheiro depositado**.

$$
  \text{Juro} = \text{Preço do dinheiro}
$$

A propensão para um consumidor contrair um empréstimo depende dos seguintes fatores:

- **Suavização do consumo**: um consumidor pode escolher distribuir o seu consumo para evitar grandes variações de consumo.
- **Impaciência**:
  - **Miopia** (Visão curta): tendência para valorizar a satisfação presente em vez da satisfação mais tardia;
  - **Prudência**: tendência para consumir no imediato devido à incerteza do futuro.
- **Decisões ótimas**: decisões que podem levar alguém a contrair/ceder um empréstimo.
  - **Taxa de Desconto/_Discount Rate_ ($\rho$)**: é uma medida de impaciência.
  - Um indivíduo deve pedir emprestado o montante onde **$\rho = r$** e deve pedir mais quantia se $\rho > r$.
  - É preferível emprestar dinheiro com juros em vez de simplesmente guardá-lo.

## Bancos

Os bancos são empresas que fazem lucro ao **emprestar** e **pedir emprestado**.

![Curva de Phillips](./assets/0004-devedor-banco-depositario.png#dark=2)

O seu negócio é receber empréstimos das famílias (taxa passiva), isto é, depósitos, e depois
dão empréstimos com uma taxa de juro superior (taxa ativa), fazendo assim lucro.

$$
  r_\text{depósitos} < r_\text{empréstimos}
$$

No fundo, um depósito consiste num empréstimo ao banco.

O balanço de um banco consiste em:

- **Ativos**: empréstimos feitos pelo banco.
- **Passivos**: empréstimos recebidos pelo banco.
- **Valor Líquido/Capital Próprio** $= \text{Ativos} - \text{Passivos}$
  - É o que o banco deve aos acionistas.
  - Se for negativo, diz-se que o banco é **insolvente**.

### Banco Central

O Banco Central é o **"banco dos bancos comerciais"**, ou seja, os bancos
comerciais emprestam, pedem emprestado e têm contas no Banco Central
(embora os bancos comerciais também façam trocas entre si).
Geralmente, o Banco Central pertence ao Governo.
Pode também criar moeda ao creditar nas contas dos bancos comerciais.

- **[_Base Money_](color:green)** (base monetária): Notas e Moedas.
  Dinheiro como moeda legal (**_legal tender_**), isto é, tem de ser
  aceite, por lei, como meio de pagamento.

  - O Banco Central é o único que pode criar _legal tender_.

- **[_Bank Money_](color:pink)**: dinheiro criado pelos bancos que não é _legal tender_.
  - É a moeda usada na concessão de empréstimos por parte dos bancos comerciais.

Definimos assim o **agregado monetário lato** (_broad money_).

$$
\text{Broad Money} = \text{Base Money} + \text{Bank Money}
$$

::youtube{#8xzINLykprA}

**[Taxa de Juro de Política Monetária](color:orange)**: taxa de juro definida pelo Banco Central.

- Afeta todas as despesas num economia. Juros mais altos desincentivam e implicam
  uma diminuição das despesas no presente.
- **Alavancagem**: dependência de uma empresa face à dívida que contraiu.
  $$
    \text{Alavancagem} = \frac{\text{Total de Ativos}}{\text{Valor Líquido}}
  $$
- A taxa referência no mercado monetário da Zona Euro é a **[Euribor](color:green)**, que consiste na média das taxas de
  juro dos empréstimos interbancários nesses países.

### Risco de Default, Risco de Liquidez e Crises Bancárias

:::tip[Liquidez]

É a facilidade de converter em meio de pagamento sem haver perda de valor.

:::

Os bancos prestam dois tipos de serviços, que carregam consigo riscos:

[**Transformação de Maturidades**](color:orange):

- Os depósitos podem ser levantados a qualquer momento
- Os empréstimos só precisam de ser reembolsados após um certo período

Isto revela-se um problema porque o banco pode não ter (e usualmente não tem)
dinheiro suficiente para liquidar todos os depósitos dos seus clientes.

[**Transformação de Liquidez**](color:yellow):

- Os depósitos são líquidos
- Os empréstimos são ilíquidos (para quem empresta)

Isto tem dois riscos: **Risco de Default** (os empréstimos não são pagos)
e **Risco de Liquidez** (o banco não tem liquidez para satisfazer os levantamentos
dos clientes).

Se todos os clientes quiserem, ao mesmo tempo, levantar o seu dinheiro depositado no banco,
o banco pode não ter liquidez suficiente e ir à falência.
A esta situação chama-se [**corrida aos bancos**](color:blue).
Esta situação pode também resultar de maus investimentos, ou seja, empréstimos não pagos.
O Governo pode intervir nesta situação, visto que a falência de um banco
pode derrubar todo o sistema financeiro.

## Problema Principal-Agente e Racionamento de Crédito

:::tip[Problema Principal-Agente]

Quando decorre um empréstimo, pode ocorrer um conflito de interesses
entre o principal (quem empresta) e o agente (quem recebe o empréstimo),
relativo a uma **ação ou atributo oculto** do agente, que não pode ser imposta
nem/ou garantida através de um contrato vinculativo.

:::

Se o montante emprestado não for pago, pode levar a **[racionamento de crédito](color:red)**.
Isto ocorre quando aqueles com menos rendimentos, ao pedir um empréstimo, são recusados ou recebem-no
em condições comparativamente desfavoráveis, aumentando a [desigualdade](/ieco/inflacao-desemprego-desigualdade/#desigualdades).

:::info[Exemplo]
Ao financiar um projeto, o principal corre o risco de não receber
o dinheiro de volta, caso o projeto falhe.  
Não é possível assinar um contrato que garanta o sucesso do projeto.
:::

Para resolver este conflito de interesses, existem múltiplas opções:

- **Capital Próprio**: o principal pode exigir que o agente coloque parte
  da sua riqueza no projeto, de forma a incentivar o seu sucesso.
- **Colateral**: o agente deve reservar bens que serão transferidos para
  o principal se o empréstimo não for pago, dando assim uma garantia ao principal.

## Globalização

A globalização é o processo no qual as economias se tornam mais integradas
através da **circulação livre** de bens, investimento, capital e mão-de-obra
entre fronteiras.

A globalização tem impacto nos seguintes níveis:

- **[Mercados internacionais de bens e serviços](color:blue)**: o comércio total (exportações e importações)
  contribui mais significativamente para o PIB.
- **[Mercados de capitais internacionais](color:red)**: em geral, as diferenças entre países tendem a diminuir ao
  longo do tempo.
  - A **Lei do Preço Único** tem como objetivo reduzir os _price gaps_ entre países,
    dizendo que o preço para um mesmo bem se deve tentar igualar entre países
    (excluindo custos de transporte).
    - Uma das consequências a curto prazo da globalização é a **convergência dos preços**
      para a média mundial.
  - A **Balança de Pagamentos** regista as fontes e a utilização e moeda estrangeira:
    - **Investimento de portfólios**: compra de ações/títulos estrangeiros;
    - **Investimento direto estrangeiro**: propriedade de ativos físicos estrangeiros.
- **[Mercados de trabalho internacionais](color:orange)**: não tem sido tão afetado, tendo em conta que os
  salários ainda diferem muito entre países.

### Vantagens e Desvantagens

A globalização traz benefícios ou malefícios consoante a **escassez relativa de fatores**:

- Um fator **abundante** dentro de um país é barato, mas se abrir ao resto do mundo,
  o seu preço **aumenta**, convergindo para a média mundial;
- Por outro lado, um fator **escasso** é caro, mas vai convergir para um preço mais **barato**.

Assim, a existência de um mercado livre global tende para a **especialização** na produção.

::::info[Especialização]

Imaginemos um país abundante em capital e outro país abundante em mão-de-obra.

Com a abertura dos mercados, cada país especializa-se nos seus fatores abundantes.

No país com abundância de capital, os donos desse capital ganham mais com o mercado global do
que os trabalhadores, aumentando a desigualdade.

No país com abundância de mão-de-obra, são os trabalhadores que ganham mais com a globalização,
diminuindo a desigualdade.

::::

Um país tem **vantagem comparativa** na produção de um bem se a sua produção possuir
**menor custo de oportunidade**.

A especialização de acordo com a vantagem comparativa tem efeitos semelhantes aos do progresso tecnológico,
tais como o aumento da produtividade, a diminuição de emprego a curto prazo e o crescimento das indústrias
de exportação a longo prazo.

::::info[Vantagem comparativa e Vantagem absoluta]

Imaginemos dois estudantes, o Afonso e o Miguel, que realizam um trabalho de grupo:

- O Afonso demora 3 horas a fazer a parte 1 do trabalho e 4 horas a fazer a parte 2;
- O Miguel demora 5 horas a fazer a parte 1 do trabalho e 6 horas a fazer a parte 2;

O Afonso tem vantagem absoluta nas duas partes do trabalho (menos horas de trabalho), mas tem vantagem
comparativa na parte 1 porque:

- 3/4 = 0.75 < 5/6 = 0.833, ou seja, para fazer a parte 1 o Afonso sacrifica 75% do tempo de realização
  da parte 2 (custo de oportunidade de 1 em termos de 2), enquanto que o Miguel sacrifica 83.3%.
- 4/3 = 1.33 > 6/5 = 1.2, ou seja, o Afonso tem o custo oportunidade maior de fazer a parte 2 do
  trabalho comparativamente ao Miguel.

Logo o Afonso deve fazer a parte 1 e o Miguel a parte 2.

::::

### Intervenção dos Governos

- **Imposição de tarifas**: discriminação de produtos estrangeiros.
- **Políticas de imigração**: regulamentação do movimento de pessoas entre países.
- **Controlo de capitais**: limitação da transferência de ativos financeiros entre países.
- **Políticas monetárias**: alteração da taxa de câmbio e, consequentemente, do preço
  relativo dos bens importados e exportados.

### Crescimento Económico

A globalização pode promover o crescimento económico através de:

- **Concorrência** com empresas estrangeiras;
- **Economias de escala**, provindas de procura externa.

No entanto, pode também impedi-lo, através de:

- **Especialização desvantajosa**, em setores de baixa inovação;
- **Learning by doing** em indústrias crescentes, o que pode necessitar de proteção temporária.
