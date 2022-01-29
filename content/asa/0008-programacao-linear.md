---
title: Programação Linear
description: Programação Linear.
  Algoritmo Simplex.
  Algoritmos e modelação de problemas com restrições lineares.
  Formulações Standard e Slack.
  Dualidade.
path: /asa/programacao-linear
type: content
---

# Programação Linear

```toc

```

:::tip[Motivação]

No quotidiano de uma empresa, os gestores são confrontados com opções a tomar: dadas certas restrições e limitações quanto a recursos disponíveis, precisam de escolher rumos que maximizem o lucro da mesma - produzir mais circuitos de um tipo do que outro por serem mais rentáveis, por exemplo.

Da mesma forma, um partido político pode ter de escolher entre "secções estratégicas" a incluir no seu programa eleitoral - cada uma destas secções pode agradar a uma parte do eleitorado e ser pior aceite por outra parte, tendo então de haver uma escolha baseada nos efeitos esperados da inclusão de cada secção no programa.

A programação linear procura desconstruir e chegar a uma resposta concreta para estes problemas, maximizando o ganho consosante um dado conjunto de restrições.

:::

O exemplo dos partidos políticos referido acima é bastante fácil de explicar com a ajuda de uma tabela. Tenhamos os seguintes efeitos da inclusão de certas políticas num programa eleitoral:

|                              | Urbano | Suburbano | Rural |
| ---------------------------- | ------ | --------- | ----- |
| Construção de Estradas       | $-2$   | $5$       | $3$   |
| Legalização das Drogas Leves | $8$    | $2$       | $-5$  |
| Subsídios Agrícolas          | $0$    | $0$       | $10$  |
| Impostos no Combustível      | $10$   | $0$       | $-2$  |

Aqui, cada coluna corresponde a um círculo eleitoral, enquanto que cada linha corresponde a uma política. Cada círculo eleitoral tem, claro, número diferente de eleitores: respetivamente cem mil, duzentos mil e cinquenta mil eleitores recenseados. Cada entrada na matriz corresponde aos ganhos (em milhares de eleitores) por cada $1000€$ gastos em publicidades.

Como podemos observar, diferentes círculos eleitorais reagem de forma diferente à mesma medida: subsídios agrícolas, por exemplo, são recebidos com enorme satisfação pela população rural, diretamente beneficiada pelos mesmos, enquanto que os setores urbano e suburbano reagem com indiferença, visto que não os afeta diretamente.

O objetivo passará, então, por tentar obter a maioria absoluta (pelo menos $50%$ dos votos) minimizando os custos. A resposta, claro, será obtida através da programação linear. Antes de introduzir o conceito em si, tentemos formalizar o problema:

Temos que as quantias a gastar por medida em publicidade são dados, respetivamente, por $x_1, x_2, x_3$ e $x_4$. O nosso objetivo passa, então, por minimizar $\sum_{i=1}^4 x_i$. Visto que queremos procurar satisfazer ao máximo o eleitorado, procuramos também que cada círculo eleitoral tenha, no mínimo, $50%$ dos votos. Assim sendo, iríamos procurar a solução que minimize os custos sujeita às restrições:

$$
-2x_1 + 8x_2 + 0x_3 + 10x_4 \geq 50\\
5x_1 + 2x_2 + 0x_3 + 0x_4 \geq 100\\
3x_1 - 5x_2 + 10x_3 + -2x_4 \geq 25\\
x_1, x_2, x_3, x_4 \geq 0.
$$

## Formulações

:::info[Formulação Geral - Programação Linear]

Procuramos, ao resolver problemas via programação linear, a otimizar uma função linear sujeita a um conjunto de restrições (desigualdades) lineares.

Dados um conjunto de números reais $[a_1, ..., a_n]$ e um conjunto de variáveis $[x_1, ..., x_n]$, podemos definir uma **função linear** para essas variáveis tal que:

$$
f(x_1, ..., x_n) = \sum_{i=1}^n a_i x_i.
$$

Uma função linear pode estar sujeita a um dado conjunto de **restrições lineares**, igualdades e/ou desigualdades lineares (em relação a um qualquer número real).

Temos que qualquer solução que satisfaça o conjunto de restrições de uma dada função é uma **solução exequível**, e que o conjunto de soluções deste género corresponde à **região exequível** da função. Por fim, diz-se que uma dada formulação é exequível se tiver pelo menos uma solução exequível (e não exequível caso contrário). Se atingir a solução levar tempo exponencial (vs tempo polinomial), a formulação diz-se **não limitada**.

:::

Tenhamos um conjunto de restrições tal que:

$$
4x_1 - x_2 \leq 8\\
2x_1 + x_2 \leq 10\\
5x_1 - 2x_2 \geq -2\\
x_1, x_2 \geq 0
$$

Temos que a aplicação destas restrições resulta num gráfico tal que:

![Região Exequível - Gráfico inicial](./assets/0008-regiao-exequivel-inicio.png#dark=1)

Ora, a interseção de todas estas restrições resulta num conjunto convexo como o que se apresenta na figura:

![Região Exequível - Região Convexa](./assets/0008-regiao-exequivel-regiao.png#dark=1)

Visto que temos que maximizar a função objetivo, $x_1 + x_2$, vamos considerar aqui várias linhas tal que $x_1 + x_2 = z$, onde $z$ é um número real. O objetivo será encontrar o maior número $z$ tal que a interseção da linha com o conjunto convexo apresentado acima não é vazio - aí, **maximizamos o objetivo**!

Observemos a imagem abaixo:

![Região Exequível - Linha](./assets/0008-regiao-exequivel-linha.png#dark=1)

Aqui, o valor máximo de $z$ tal que a interseção da linha com o conjunto convexo apresentado acima não é vazio é $8$: todas as retas "abaixo" dela têm valores menores, que não maximizam o objetivo, e nenhuma "acima" tem interseção não vazia com o conjunto convexo. Assim sendo, encontrámos a solução ótima: $x_1 = 2$ e $x_2 = 6$, com objetivo maximizado $x_1 + x_2 = 8$.

Importa realçar que as soluções ótimas para este tipo de problemas encontram-se **sempre** nos vértices do conjunto convexo. Mais ainda, se a interseção da linha que maximiza o objetivo com o conjunto convexo for um segmento de reta, então os vértices desse segmento são ambos soluções ótimas.

O conjunto convexo, a região que andamos a referir tantas vezes, chama-se **Simplex** - nome este que vamos ouvir bastante durante esta secção.

São estudadas duas formas de especificar programas lineares - as formas Standard e Slack. Diferem quanto à especificação das respetivas restrições: a primeira opta por especificar as restrições como **desigualdades**, enquanto a segunda opta por especificar as restrições como **igualdades** (exceto para os problemas que requerem variáveis necessariamente não negativas). Olhemos para ambas:

### [Forma Standard](color:green)

A forma standard procura maximizar $\sum_{i=1}^n a_i x_i$, tendo em conta um conjunto de restrições tal que:

$$
\sum_{i=1}^n a_{ij} x_j \leq b_i \quad \forall i \in \{1, ..., m\}.\\
x_j \geq 0 \quad \forall j \in \{1, ..., n\}.
$$

### [Forma Slack](color:yellow)

## [Algoritmo Simplex](color:orange)

## Dualidade

---

- [Slides]()
- [Notas]()
  $$
