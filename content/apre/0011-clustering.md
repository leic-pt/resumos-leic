---
title: Clustering
description: >-
  K-Means Clustering
  EM Clustering
  Avaliação
path: /apre/clustering
type: content
---

# Clustering

```toc

```

Os algoritmos de clustering são um exemplo de _unsupervised learning_, em que o
conjunto de treino é constituído por observações de $D$ de variáveis, sem
nenhum rótulo. O objetivo é agrupar as observações de acordo com a sua
semelhança.

Os dois principais métodos de _clustering_ geram centros do _cluster_, chamados
_centroids_, que representam os pontos pertencentes a esse _cluster_. Dado que
o número $K$ de _clusters_ tende a ser muito mais pequeno do que o número de
pontos, acabamos com uma representação comprimida do mesmo conjunto de dados.

## K-Means Clustering

O conjunto de treino, $X = (x_1, x_2, ..., x_N)$, consiste em $N$ observações
sem rótulos. O objetivo é agrupar estas observações em $K$ grupos distintos,
chamados _clusters_. O modelo utiliza funções de distância, como a distância
euclidiana representada abaixo, para agrupar as observações em _clusters_.

$$
d_2(x, y) = \| x - y \| = \sqrt{\sum_{j=1}^{D}(x_j - y_j)^2}
$$

No final, obtemos $K$ conjuntos chamados _clusters_ $(C_1, C_2, ..., C_K)$, em
que onde o _cluster_ $C_k$ agrupa todos os pontos mais próximos de $c_k$ do que
todos os restantes _centroids_.

$$
C_k = \{x \mid d_2(x, y) = \min_{j=1,...,K} d_2(x, c_j)\}
$$

Obtemos também $K$ vetores chamados _centroids_ $(c_1, c_2, ..., c_K)$, que
correspondem ao valor médio dos pontos pertencentes ao _cluster_ $C_k$.

$$
c_k = \frac{1}{|C_k|} \cdot \sum_{x \in C_k} x
$$

Assim, podemos definir o erro da solução de _clustering_ de forma intuitiva.

$$
E = \sum_{k=1}^{K}(\sum_{x \in C_k} \|x - c_k \|^2) = \sum_{k=1}^{K}(\sum_{x \in C_k} d_2(x, c_k)^2)
$$

Derivando a expressão do erro, concluímos que os _centroids_ que minimizam o
erro são os pontos médios de cada um dos _clusters_.

$$
c_t = \frac{1}{|C_t|} \cdot \sum_{x \in C_t} x
$$

Contudo, não podemos simplesmente calcular cada _centroid_. Primeiramente,
temos de associar corretamente cada ponto a um _cluster_. Só aí o resultado
anterior se torna válido. Para tal, é aplicado o algoritmo especificado na
secção seguinte.

### Algoritmo

É utilizado um processo iterativo, em que, inicializando os _centroids_
com valores aleatórios, se associada cada ponto ao _centroid_ mais próximo. De
seguida, os novos _centroids_ são calculados através da expressão anteriormente
referida. O processo é repetido até se dar a convergência da solução.

```bash
Inicializar K centroids de forma aleatória;
do {
	Associar cada ponto x ao centroid mais próximo;
	Calcular os novos centroids;
}
until (|erro_novo - erro_velho| < threshold ou iterações máximas excedidas)
```

O _clustering_ final vai depender da inicialização. O valor de $K$ foi assumido
como sabido. Contudo, nem sempre sabemos qual o melhor valor de $K$. Assim, é
usual realizar o algoritmo diversas vezes para diferentes valores de $K$,
escolhendo o $K$ que produz o melhor resultado. Este método é bastante sensível
a _outliers_ e não é bom para descobrir _clusters_ com formas não convexas,
dado que apenas descobre _clusters_ com simetria esférica.

## EM Clustering

Este método descreve cada _cluster_ como uma distribuição multi variada.
Assim, cada observação tem uma probabilidade de pertencer a cada um dos
_clusters_. Este é um método de _soft clustering_, em contraste como os
métodos de _hard clustering_ (como o método anterior), pois permite que cada
observação pertence a mais do que um _cluster._ Este método permite também
saber qual a forma do _cluster_.

### Gaussian Mixture

Uma _gaussian mixture_ é uma combinação de distribuição normais multivariada,
em que cada uma destas tem um peso associado.

$$
p(x) = \sum_{k=1}^{K} (\pi_k \cdot \mathcal{N}(x \mid \mu_k, \Sigma_k)) \text{ em que } 0 \leq \pi_k \leq 1 \text { e } \sum_{k=1}^{K} \pi_k = 1
$$

A partir desta expressão, e com recurso ao teorema de Bayes, chegamos à
expressão do logaritmo da função de máxima verosimilhança.

$$
\log{P(X \mid \pi, \mu, \Sigma) = \sum_{\eta = 1}^{N} \log{(\sum_{k=1}^{K} \pi_k \cdot \mathcal{N}(x_{\eta} \mid \mu_k, \Sigma_k))}}
$$

### Algoritmo

O algortimo consiste, então, em maximizar a função de log-verosimilhança, com
respeito aos parâmetros dos vetores de médias, matrizes de covariância e
_mixing coefficientes_. Este compreende 4 etapas.

#### Inicialização

Nesta etapa escolhe-se o número de _clusters_ $K$ e inicializam-se os vetores
de médias $\mu_k$ (geralmente com valores arbitrários), as matrizes de
covariância $\Sigma_k$ (geralmente com o valor da matriz identidade) e os
_mixing coefficients_ $\pi_k$ (geralmente com o valor $\frac{1}{K}$, de modo a
dar a mesma importância a cada _cluster_).

#### Expectation

Nesta etapa computa-se o valor de $P(c_k \mid x_i)$ para cada ponto $x_i$ e
cada cluster $c_k$.

$$
\gamma_{ki} = P(c_k \mid x_i) = \frac{P(x_i \mid c_k) \cdot P(c_k)}{P(x_i)} = \frac{\mathcal{N}(x_i \mid \mu_k, \Sigma_k) \cdot \pi_k}{\sum_{k} (\pi_k \cdot \mathcal{N}(x_i \mid \mu_k, \Sigma_k))}
$$

Pois $P(x_i)$ é invariante entre as componentes, podemos simplesmente calcular

$$
P(c_k, x_i) = P(x_i \mid c_k) \cdot P(c_k) = \mathcal{N}(x_i \mid \mu_k, \Sigma_k) \cdot \pi_k
$$

e depois normalizar

$$
\gamma_{ki} = P(c_k \mid x_i) = \frac{P(c_k, x_i)}{\sum_j P(c_j, x_i)}
$$

#### Maximization

Cada observação $x_i$ contribui de modo a atualizar cada _cluster_ $c_k$,
através do parâmetro $\gamma_{ki}$.

$$
N_k = \sum_{i=1}^{N} \gamma_{ki} \\
\mu_k = \frac{1}{N_k} \sum_{i=1}^{N} \gamma_{ki} \cdot x_i \\
\Sigma_k = \frac{1}{N_k} \sum_{i=1}^{N} (\gamma_{ki} \cdot (x_i - \mu_k) \cdot (x_i - \mu_k)^T ) \\
\pi_k = P(c_k) = \frac{N_k}{N}
$$

#### Evaluate Maximum Likelihood

Nesta etapa avalia-se a função log verosimilhança e procura-se a convergência,
repetindo o processo se necessário.

## Avaliação

Existem várias métricas de validade que permitem avaliar uma solução de
_clustering_. Os critérios externos necessitam de informação externa, como os
rótulos das observações, enquanto que os critérios internos permitem avaliar a
qualidade da solução sem precisar deste tipo de informação.

### Purity

A _purity_ é um medida externa que avalia quantos dos _clusters_ contém apenas
uma única classe ou rótulo. Considerando $C = {c_1, c_2, ..., c_k}$ como o
conjunto de _clusters_ e $L = {l_1, l_2, ..., l_g}$ como o conjunto de rótulos
de cada uma das observações, definimos _purity_ como indicado abaixo.

$$
\text{purity}(C, L) = \frac{1}{N} \cdot \sum_{k=1}^{K} \max_{j}(|c_k \cap l_j|)
$$

Esta medida vê-se enviasada para os casos em que $K = N$, pois cada _cluster_
terá, obviamente, apenas uma obervação, pertencente a apenas uma classe.

### Silhouette

Esta é uma medida interna que avalia a coesão (cada membro de um _cluster_ deve
estar tão próximo dos outros membros do mesmo _cluster_ quanto possível) e a
separação (os _clusters_ devem estar distantes entre si). A medida é calculada
para um objeto $x_i$ e tem em conta o valor $a$ que representa a distância
média de $x_i$ aos pontos no mesmo _cluster_ e o valor $b$ que representa o
mínimo da distância média de $x_i$ aos pontos de um outro _cluster_.

$$
-1 \leq \text{silhouette} = \frac{b - a}{max\{a, b\}} \leq 1
$$

$$
a(i) = \frac{1}{|C_i| - 1} \sum_{j \in C_i, i \neq j} d(i, j)
$$

$$
b(i) = \min_{j \neq i} \frac{1}{|C_j|} \sum_{k \in C_j} d(i, j)
$$

Define-se a _silhouette_ de um _cluster_ como a média das _silhouettes_ dos
seus pontos e define-se a _silhouette_ da solução de _clustering_ como a média
das _silhouettes_ dos _clusterings_.
