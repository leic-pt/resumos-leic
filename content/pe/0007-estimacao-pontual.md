---
title: Estimação Pontual
description: >-
  Inferência Estatística. Conceitos base de estatística.
  Amostragem Aleatória.
  Estimadores. Enviasamento e Erro Quadrático Médio.
  Método da Máxima Verosimilhança.
  Distribuições amostrais.
path: /pe/estimacao-pontual
type: content
---

# Estimação Pontual

```toc

```

Como deverá ser sabido o nome da cadeira em estudo é **Probabilidade e Estatística**.
Nos capítulos anteriores vimos como atribuir probabilidades a determinados eventos.
Isto é, na primeira parte tratámos do estudo de probabilidades.  
A segunda parte vai então tratar da parte da estatística.

:::tip[Estatística]

Ramo da Matemática Aplicada que estuda como recolher, apresentar e interpretar dados relativos a fenómenos aleatórios, visando a caracterização desses fenómenos.

:::

Vamos introduzir alguns conceitos base da estatística:

- [**VA ou característica de interesse**](color:red) - característica crucial para o conhecimento do fenómeno aleatório em estudo;
- [**população**](color:blue) - conjunto de todos os indivíduos que têm em comum certa característica de interesse;
- [**unidade estatística**](color:green) - nome dado a cada elemento de certa população;
- [**amostra**](color:yellow) - subconjunto de uma população que se julga representativo da mesma;
- [**dado estatístico**](color:purple) - resultado observado em relação a uma característica de interesse e respeitante a cada unidade estatística duma amostra;
- [**amostragem**](color:orange) - conjunto de procedimentos estatísticos com objetivo de obter amostras;
- [**estatística descritiva**](color:brown) - conjunto de métodos que permitem tornar a informação retirada diretamente de uma amostra (caótica) num conjunto de inforrmações sumárias e mais relevantes;
- [**inferência estatística**](color:pink) - compreende um conjunto de métodos com o objetivo de usar a informação (dados/amostra) de modo a responder a questões sobre a população. Consiste então num método para tirar conclusões sobre uma população (geral) a partir de uma amostra (particular).

Na **estatística** estamos interessados em fazer afirmações sobre uma [característica de interesse](color:red) de uma dada [população](color:blue).
Contudo é frequente ser impossível analisar essa característica em todos os elementos da [população](color:blue) (em estatística, dá-se o nome de [unidade estatística](color:green) a cada elemento da [população](color:blue)).
É então relevante que sejamos capazes de selecionar uma porção da [população](color:blue) tal que, para essa porção já seja possível fazer a análise da tal característca.
A esta porção damos o nome de [amostra](color:yellow) e ao processo de seleção dá-se o nome de [amostragem](color:orange).
Em relação à amostra, já é possível fazer observações e apartir destas obter [dados estatísticos](color:purple)
A partir das observações, é agora importante ser capaz de obter informação sobre a população em geral.
Isto é feito através de uma [inferência estatística](color:pink).

![Amostragem e Inferência Estatística](./imgs/0007/populacao-amostra.png#dark=1)

:::details[Exemplo]

Admita-se que queremos fazer um estudo sobre a altura da população portuguesa.
Nesse caso, a característica que está em estudo - a [característica de interesse](color:red) é a altura, sendo a [população](color:blue) em estudo o conjunto dos portugueses.
Um exemplo de uma [unidade estatística](color:green) é o Cristiano Ronaldo, uma vez que este pertence ao conjunto dos portugueses.  
Como seria muito despendioso ir verificar a altura dos portugueses um a um, é importante obter um subconjunto desta população que se considere representativo da mesma - uma [amostra](color:yellow).
Um exemplo de uma [amostra](color:yellow) seria (Cristiano Ronaldo, João Pavão Martins, Quim Barreiros, Luís Humberto, Marco Almeida).
O processo para seleção desta [amostra](color:yellow) denomina-se de [amostragem](color:orange) (claro que a [amostragem](color:orange) que levou à [amostra](color:yellow) acim não teve nada de aleatório).
Em relação à amostra selecionada, podemos fazer a seguinte observação - a que damos o nome de [dados estatísticos](color:purple) - (1.87, 1.73, 1.54, 2.14, 1,82) corresponde às alturas dos elementos da amostra selecionada.  
Esta amostra é pequena, pelo que analisá-la não é demasiado difícil.
No entanto, para [amostras](color:yellow) maiores, processar toda a informação pode chegar a ser impossível.
É então importante tirar conclusões apartir do [dado estatístico](color:purple).
Isto é feito através de um conjunto de métodos enquadrados na [estatística descritiva](color:brown).
Um exemplo de algo que seria feito neste passo seria calcular a média dos valores observados.
No nosso exemplo verificamos que a média das alturas na nossa amostra é 1.82m.  
A partir dos dados obtidos podemos realizar uma [inferência estatística](color:pink) para obter informação sobre a altura dos portugueses no geral.
Podemos, por exemplo, sentir-nos tentados a concluir que, em média, os portugueses medem 1,82m.

:::

:::tip[Amostragem Aleatória]

De forma que as inferências tenham a maior precisão possível, exigimos que haja aleatoriedade (parcial ou total) no processo de amostragem.

- [**Amostra Aleatória (AA)**](color:orange) - Para um VA de interesse $X$ e VA's $X_1, X_2, \cdots, X_n$ i.i.d a $X$, dizemos que o vetor aleatório $\underline{X} = (X_1, X_2, \cdots, X_n)$ diz-se uma [amostra aleatória](color:orange) ([AA](color:orange)) de dimensão $n$, da VA/população $X$;
- [**Amostra**](color:yellow) - A uma observação particular de uma AA $\underline{X} = (X_1, X_2, \cdots, X_n)$ dá-se o nome de amostra e representa-se por $\underline{x} = (x_1, x_2, \cdots, x_n)$.  
  Temos que
  $$
  P(\underline{X} = \underline{x}) =
  \prod_{i=1}^n P(X_i = x_i) =
  \prod_{i=1}^n P(X = x_i)
  $$
  para $X$ discreta e
  $$
  f_{\underline{X}}(\underline{x}) =
  \prod_{i=1}^n f_{X_i}(x_i) =
  \prod_{i=1}^n f_X(x_i)
  $$
  para $X$ contínua.
- [**Estatística**](color:red) - medida descritiva de uma AA com o objetivo de sumariar alguma informação sobre a mesma.
  Eis alguns exemplos:
  - Mínimo: $X_{(1)} = \min_{i = 1, \cdots, n} X_i$
  - Máximo: $X_{(n)} = \max_{i = 1, \cdots, n} X_i$
  - Amplitude: $R = X_{(n)} - X_{(1)}$
  - Média: $\overline{X} = \frac{1}{n} \sum_{i=1}^n X_i$
  - Variância Corrigida: $S^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \overline{X})^2$
  - Variância não Corrigida: $(S')^2 = \frac{1}{n} \sum_{i=1}^n (X_i - \overline{X})^2 = \frac{n-1}{n}S^2$

:::

:::details[A média das alturas dos portugueses é 1,82m???]

Depois da introdução do conceito de [amostragem aleatória](color:orange), deve ser claro porque é que a conclusão a que chegamos no exemplo acima parece estranha: a nossa [amostragem](color:orange) não foi aleatória!  
A aleatoriedade da [amostragem](color:orange) é importante para prevenir o enviesamento da amostra para subconjuntos da população com certas características.
Nomeadamente, na nossa amostragem, a média pode estar algo puxada para cima visto que a [amostra](color:yellow) é composta apenas por homens (que são tendencialmente mais altos que mulheres) e por conter o Humberto (que é gigante).

:::

Atente-se na distinção entre [amostra](color:yellow) e [amostra aleatória](color:orange).
Pode-se pensar na [amostra](color:yellow) como num subconjunto da [população](color:blue), sendo a [amostra aleatória](color:orange) um conjunto de "_place holders_" para uma amostra.
Pensando no sentido contrário, podemos pensar na [amostra aleatória](color:yellow) como um conjunto de seleções aleatórias sobre a [população](color:blue), sendo uma [amostra](color:yellow) uma concretização dessa seleção.

## Estimadores

O objetivo principal da estatística é efetuar inferências sobre características de uma VA com base numa amostra.
Considera-se no geral que a distribuição de $X$ é:

- [parcialmente desconhecida](color:brown) se é conhecido o tipo de distribuição mas um ou mais parâmetros são desconhecidos.
  Inferências sobre este tipo de VA's dizem-se do tipo **paramétrico**.
- [totalmente desconhecida](color:pink) se nem a distribuição se conhece.
  Neste caso, as inferências dizem-se **não paramétricas**.

Um **parâmetro desconhecido** representa-se normalmente por $\mathbf{\theta}$ no caso unidimensional e por $\mathbf{\underline{\theta}}$ no caso multidimensional.
Ao espaço de valores que $\theta$ pode tomar dá-se o nome de [**espaço paramétrico**](color:orange) e representa-se por $\mathbf{\Theta}$.
Para uma VA $X$ que segue uma distribuição $dist$, damos o nome de [**modelo paramétrico**](color:red) de $X$ à família de distribuições $\{ dist(\theta), \theta \in \Theta \}$.

Os [**estimadores**](color:yellow) consistem em estatísticas que tentam "adivinhar" o valor de um parâmetro.
Mais precisamente, uma estatística diz-se um estimador do parâmetro desconhecido $\theta$ se o seu contradomínio estiver contido em $\Theta$.  
Ao valor observado de um estimador $T$ dá-se o nome de [**estimativa**](color:blue).

:::details[Exemplo]

À partida, podemos dizer que a distribuição da altura dos portugueses é [totalmente desconhecida](color:pink) uma vez que não sabemos qual a distribuição que segue.
Se assumirmos, no entanto, que a altura dos portugueses segue uma distribuição normal, passamos a ter uma VA [parcialmente desconhecida](color:brown), já que sabemos a distribuição, mas não sabemos os seus parâmetros ($\mu$ e $\sigma^2$).  
Se tivermos interessados em determinar o valor esperado da altura de um português, $\mu$ passa a ser o nosso parâmetro desconhecido.
O [espaço paramétrico](color:orange) é o conjunto de valores que o parâmetro pode tomar.
Neste caso, $\Theta = \R^+$, uma vez que uma pessoa pode tomar qualquer altura positiva (mais ou menos).
O [modelo paramétrico](color:red) vai então ser o conjunto de todas as distribuições (com parâmetro especificado) que a altura dos portugueses pode seguir.  
Um [estimador](color:yellow) para o valor esperado é por exemplo, o que usamos no exemplo inicial: a média $\underline{X} = \frac{1}{n}\sum_{i=1}^n X_i$.
Nesse exemplo, obtivemos como [estimativa](color:blue) o valor de 1,82m.

:::

### Enviasamento

:::danger[]

A definição de enviasamento não é leccionada no programa de 2021/22.

:::

Damos o nome de [**enviasamento**](color:green) de um estimador $T$ de $\theta$ ao valor

$$
bias_\theta[T(\underline{X})] = E(T(\underline{X})) - \theta
$$

Um estimador diz-se **centrado** se tiver enviasamento nulo e **enviasado** caso contrário.  
Um estimador será tanto melhor quanto menor o seu enviasamento.

:::tip[Nota]

A variância corrigida é centrada, ao contrário da não corrigida.
É por esta razão que frequentemente usamos a variância corrigida em vez da não corrigida.

:::

### Erro Quadrático Médio

:::danger[]

A definição de erro quadrático médio não é leccionada no programa de 2021/22.

:::

O [**erro quadrático médio**](color:purple) procura calcular quanto um estimador se dispersa em torno do verdadeiro valor do parâmetro desconhecido $\theta$.
Este é dado por

$$
EQM_\theta \left( T( \underline{X} ) \right) =
E \left[ (T(\underline{X}) - \theta)^2 \right] =
V(T(\underline{X})) + bias_\theta(T(\underline{X}))^2
$$

Um estimador será tanto melhor quanto menor o seu erro quadrático médio.  
Dizemos que um estimador $T_1$ é **mais eficiente** que outro $T_2$ se $EQM_\theta(T_1(\underline{X})) < EQM_\theta(T_2(\underline{X}))$.
Definimos a **eficiência relativa** de um estimador $T_1(\underline{X})$ em relação a um estimador $T_2(\underline{X})$ de parâmetro desconhecido $\theta$ como:

$$
e_\theta(T_1(\underline{X}), T_2(\underline{X})) = \frac{EQM_\theta(T_2(\underline{X}))}{EQM_\theta(T_1(\underline{X}))}
$$

Sendo assim, temos que o estimador $T_1(\underline{X})$ é mais eficiente que $T_2(\underline{X})$ se $e_\theta(T_1(\underline{X}), T_2(\underline{X})) > 1$.

## Método da Máxima Verosimilhança

O [**método da máxima verosimilhança**](color:yellow) ([MV](color:yellow)) consiste num método para obtero valor mais plausível/verosímel para um parâmetro desconhecido, de entre todos os valores possíveis para o mesmo, tendo em conta uma amostra.

Definimos a [**função verosimilhança**](color:orange) como a função $L(\theta | \underline{x} ) : \Theta \to \R$ tal que:

- $L(\theta | \underline{x}) = P(\underline{X} = \underline{x}) = \prod_{i=1}^n P(X_i = x_i | \theta)$ no caso discreto;
- $L(\theta | \underline{x}) = f_{\underline{X}}(\underline{x}) = \prod_{i=1}^n f_{X_i}(x_i | \theta)$ no caso contínuo;

Ou seja, a [função verosimilhança](color:orange) define a probabilidade de obtermos a amostra recolhida $\underline{x}$ assumindo a validade de um certo valor para o parâmetro desconhecido $\theta$.

Damos o nome de **estimativa de máxima verosimilhança** ao valor $\theta \in \Theta$ que maximiza $L(\theta | \underline{x})$ para a amostra $\underline{x}$.

Frequentemente é mais fácil encontrar máximos da função $\ln \left[ L(\theta | \underline{x}) \right]$ pois esta trabalha com somas ao invés de produtos.
A esta função dá-se o nome de [**log-verosimilhança**](color:red).

O máximo da função [verosimilhança](color:orange)/[log-verosimilhança](color:red) é obtido:

- por análise pontual, quando $\Theta$ é finito;
- recorrendo às ferramentas do cálculo, quando $\Theta$ é um conjunto que o permita (por exemplo, um intervalo nos reais).

:::details[Exemplo]

// TODO

:::

Este método dá-nos, em função de uma amostra $\underline{x}$, uma expressão para uma **estimativa de máxima verosimilhança**.
Substituindo uma amostra particular $\underline{x}$ por uma amostra aleatória $\underline{X}$ permite-nos obter um **estimador de máxima verosimilhança** para $\theta$ (que não depende de nenhuma amostra em particular).

Os estimadores de MV satisfazem as seguintes propriedades:

- **Invariância** - Se $EMV(\theta)$ é o estimador de MV de $\theta$ e $h$ uma função bijetiva, então $EMV(h(\theta)) = h(EMV(\theta))$;
- **Suficiência** - As estimativas de MV condensam toda a informação relevante, contida na amostra, sobre o parâmetro;
- **Consistência** - À medida que o tamanho da AA aumenta, o $EMV(\theta)$ dispersa-se cada vez menos do verdadeiro valor de $\theta$.

## Distribuições Amostrais

:::tip[Distribuição Amostral]

Distribuição seguida por uma estatística ou estimador.

:::

Exemplos:

- $F_{X_{(1)}}(x) = 1 - (1 - F_X(x))^n$
- $F_{X_{(n)}}(x) = (F_X(x))^n$

A média está de modo geral relacionada com o estimador de MV do valor esperado, pelo que é paraticularmente interessar estudar a sua distribuição amostral.
Como já vimos no capítulo anterior:

$$
X \sim \op{normal}(\mu, \sigma^2) \Rightarrow \overline{X} \sim \op{normal}(\mu, \frac{\sigma^2}{n}) \\
X \text{ com qualquer distribuição } \Rightarrow \overline{X} \sim \op{normal}(\mu, \frac{\sigma^2}{n}) \text{ para } n>> \text{ (segundo o TLC)}
$$
