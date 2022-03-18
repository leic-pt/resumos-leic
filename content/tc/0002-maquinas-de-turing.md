---
title: Maquinas de Turing
description: 'Maquinas de Turing'
path: /tc/maquinas-de-turing
type: content
---

# Maquinas de Turing

Formalmente, uma [**máquina de Turing**](color:red) é um tuplo $(\Gamma, \Sigma, Q, q_{in}, q_{ac}, q_{rj}, \delta)$ em que:

- $\Gamma$ é um **alfabeto de trabalho**, que inclui um símbolo $\square$, a que damos o nome de símbolo vazio;
- $\Sigma$ é um **alfabeto de entrada/saída**, $\Sigma \subset \Gamma \backslash \{ \square \}$;
- $Q$ é um conjunto de estados de controlo;
- $q_{in} \in Q$ é um estado inicial;
- $q_{ac}, q_{rj} \notin Q$ são dois estados denominados **estado de aceitação** e **estado de rejeição**, respetivamente. Ambos estes estados dizem-se **estados de terminação**. Denominamos $\hat{Q} = Q \cup \{ q_{ac}, q_{rj} \}$;
- $\delta : Q \times \Gamma \to \hat{Q} \times \Gamma \times \{ L, R \}$ é uma **função de transição**.

Uma [máquina de Turing](color:red) deve ser entendida da seguinte forma:  
Temos uma fita com posições que "guardam" símbolos num alfabeto $\Sigma$ - o alfabeto de entrada/saída.
À medida que vamos fazer a nossa computação, podemos subsituir os símbolos na fita com símbolos num alfabeto $\Gamma$ - o nosso alfabeto de trabalho.
// TODO square
Note-se que $\Sigma \subset \Gamma$, ou seja, o alfabeto de trabalho pode ter símbolos que não estão no alfabeto de entrada de saída. Então, podemos usar símbolos à nossa vontade para representar posições que nos sejam convenientes.  
Temos um conjunto de estados de controlo $Q$. Tal como nos AFD's e AFND's, este será o nosso mecanismo principal de **memória**. Isto vai ser mais claro à frente.
O estado $q_{in}$ é, como nos autómatos, o estado em $Q$ em que começamos as transições.  
Os estados de aceitação e rejeitação indicam se a nossa computação foi sucedida ou não. Isto é, se criarmos uma máquina de Turing para resolver um dado problema, o nosso problema tem resposta afirmativa se chegar a um estado aceitação, e negativa se chegar a um estado de rejeição. Em ambos os casos, a computação termina nesse momento.  
A função $\delta$ atua sobre a fita, e sobre o conjunto de estados:

- na fita:
  - lemos um símbolo, que podemos substituir por outro símbolo em $\Gamma$;
  - andamos para a esquerda ($L$) ou direita ($R$).

Este mecanismo é um modelo computacional que nos permite:

- decidir uma linguagem - aceitar as suas palavras e rejeitar as restantes;
- calcular uma função - aceitar inputs num certo domínio e calcular o respetivo output para esses inputs.

Para perceber exatamente como uma máquina de Turing funciona, vamos ver alguns exemplos.

:::details[Exemplo 1 - Reconhecimento de Linguagem]

Começamos por um exemplo muito simples.
Na verdade nem é necessária uma máquina de Turing para reconhecer esta linguagem, pelo que este exemplo é puramente ilustrativo.

Considere-se a linguagem formada pelas palavras sobre o alfabeto $\{ 0, 1 \}$ que são alternantes, isto é, em que cada símbolo (sem ser o primeiro) é diferente do que o antecede.

:::

:::details[Exemplo 2 - Reconhecimento de Linguagem]

// TODO

:::

:::details[Exemplo 3 - Cálculo de uma Função]

// TODO

:::
