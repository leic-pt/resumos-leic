---
title: Básicos de R
description: >-
  Conceitos Básicos de R
path: /pe/guides/r-basics
type: guides
---

# Básicos de R

```toc

```

## Documentação do R

É possível abrir a documentação do R localmente no vosso computador.

Para isso, basta executar os seguintes comandos na consola de R (tanto `R` ou `radian`):

```R
options("browser" = "brave")    # (Opcional) Alterar o browser default para "brave"
help.start()                  # Ligar o servidor com a documentação
```

Alternativamente, também é possível ver a documentação de cada função (de forma
semelhante às _man pages_ do Unix):

```R
?solve
```

Ou até mesmo procurar por uma função:

```R
??solve
```

Na documentação online conseguem encontrar uma explicação semelhante à abaixo,
e mais completa.

Existe também um site, [R Documentation](https://rdocumentation.org/), que contém
referências de bibliotecas e funções.

## Bibliotecas/Pacotes

À medida que forem usando R, irão precisar de instalar determinadas bibliotecas
de forma a chegarem ao resultado pretendido.

Bibliotecas mais comuns:

- [`ggplot2` (docs)](https://www.rdocumentation.org/packages/ggplot2/): gráficos (histogramas, barras, etc)
- [`gganimate` (docs)](https://www.rdocumentation.org/packages/gganimate/): criar animações (GIFs) de gráficos
- [`openxlsx` (docs)](https://www.rdocumentation.org/packages/openxlsx/): importar dataframes de ficheiros xlsx
- [`dplyr` (docs)](https://www.rdocumentation.org/packages/dplyr/): tratamento de dados em dataframes
- [`tidyr` (docs)](https://www.rdocumentation.org/packages/tidyr/): tratamento de dados (_tidy your data_)
- [`plotly` (docs)](https://www.rdocumentation.org/packages/plotly/): gráficos interativos para a web
- [`gapmindner` (docs)](https://www.rdocumentation.org/packages/gapminder/): data source (países)
- [`IRkernel` (docs)](https://www.rdocumentation.org/packages/IRkernel/): kernel para Jupyter Notebooks

Para instalar uma biblioteca, usa-se a função `install.packages`:

```R
# Instalar uma única package
install.packages('nome_da_package')
# Instalar várias packages de uma vez
install.packages(c('nome_da_package1', 'nome_da_package2', ...))
```

Para utilizar as bibliotecas nos programas, usa-se a função `library`:

```R
library('nome_da_package')
```

## Vetores e Atribuição

Em R, um vetor é definido com a função `c` (_concatenate_), levando como argumento todos os elementos.

```R
c(10.4, 5.6, 3.1, 6.4, 21.7)

# [1] 10.4  5.6  3.1  6.4 21.7
```

Alternativamente, podemos definir um vetor como um intervalo de números:

```R
# Vetor com números entre 1 e 10 (inclusive)
c(1:10)

# [1]  1  2  3  4  5  6  7  8  9 10
```

Podemos obter certos valores do vetor com os seguintes seletores:

```R
y <- c(10.4, 5.6, 3.1, 6.4, 21.7)

y[1]       # [1] 10.4
y[1:4]     # [1] 10.4  5.6  3.1  6.4
y[y > 10]  # [1] 10.4 21.7
```

Como podemos observar, no exemplo acima começámos por atribuir um valor a uma variável.
Em $R$, existem várias formas de o fazer, pelo que o seguinte é equivalente:

```R
# Todas as expressões abaixo são equivalentes
y <- c(10.4, 5.6, 3.1, 6.4, 21.7) # Recomendada
c(10.4, 5.6, 3.1, 6.4, 21.7) -> y
y = c(10.4, 5.6, 3.1, 6.4, 21.7)
```

## Leitura de Ficheiros XLSX

Frequentemente vamos querer importar dados de ficheiros XLSX (que podem estar mal formatados e/ou incluir dados desnecessários).
Para isto, podemos utilizar a biblioteca `openxlsx`, que nos dá acesso
[à função `read.xlsx`](https://www.rdocumentation.org/packages/openxlsx/topics/read.xlsx):

```R
library('openxlsx')

df1 <- read.xlsx(xlsxFile = 'dataset.xlsx', sheet = 1)
df1
```

Existem vários parâmetros úteis que podemos passar à função, por exemplo para obtermos
apenas parte de uma folha do ficheiro. Todas as opções podem ser encontradas na
[documentação da função `read.xlsx`](https://www.rdocumentation.org/packages/openxlsx/topics/read.xlsx).

Note-se que esta função devolve um _dataframe_.

## DataFrames

Para guardarmos e analisarmos os dados, usamos uma estrutura chamada **dataframe**.  
Esta estrutura é semelhante a uma tabela, com linhas e colunas.  
Cada coluna tem um nome e cada linha tem um índice (numérico ou não).

Abaixo seguem alguns exemplos simples de como usar dataframes.

```R
# Criar um dataframe
df <- data.frame(
  name = c("Jon", "Bill", "Maria", "Ben", "Tina", "Joseph", "Peter"),
  age = c(18, 19, 18, 20, 18, 18, 19),
  gender = c("M", "M", "F", "F", "M", "F", "M"),
  os = c("Arch", "Ubuntu", "Fedora", "Windows", "MacOS", "Arch", "Arch")
)

#     name age gender      os
# 1    Jon  18      M    Arch
# 2   Bill  19      M  Ubuntu
# 3  Maria  18      F  Fedora
# 4    Ben  20      F Windows
# 5   Tina  18      M   MacOS
# 6 Joseph  18      F    Arch
# 7  Peter  19      M    Arch

# Obter uma coluna do dataframe
# Para colunas com caracteres não ASCII e/ou espacos,
# usar df$`nome da coluna`
df$name

# [1] "Jon"    "Bill"   "Maria"  "Ben"    "Tina"   "Joseph" "Peter"

# Obter um subset do dataframe (múltiplas colunas)
df[c("name", "os")]

#     name      os
# 1    Jon    Arch
# 2   Bill  Ubuntu
# 3  Maria  Fedora
# 4    Ben Windows
# 5   Tina   MacOS
# 6 Joseph    Arch
# 7  Peter    Arch

# Filtrar por valores de uma coluna (neste caso, age >= 19)
df[df$age >= 19, ]

#    name age gender      os
# 2  Bill  19      M  Ubuntu
# 4   Ben  20      F Windows
# 7 Peter  19      M    Arch

# Podemos adicionar mais condições.
# Entre os operadores disponíveis temos &, |, !, xor(), in, etc.
df[df$age >= 19 & df$gender == "M", ]

#    name age gender     os
# 2  Bill  19      M Ubuntu
# 7 Peter  19      M   Arch

# Alternativamente, podemos usar a função filter da biblioteca dplyr
library("dplyr")
filter(df, age >= 19 & gender == "M")

# Alternar/criar colunas a partir de outras
transform(df, gender_long = ifelse(gender == "M", "Male", "Female"))

#     name age gender      os gender_long
# 1    Jon  18      M    Arch        Male
# 2   Bill  19      M  Ubuntu        Male
# 3  Maria  18      F  Fedora      Female
# 4    Ben  20      F Windows      Female
# 5   Tina  18      M   MacOS        Male
# 6 Joseph  18      F    Arch      Female
# 7  Peter  19      M    Arch        Male

# Obter e renomear nomes de colunas
names(df)
# [1] "name"   "age"    "gender" "os"
names(df) <- c("Name", "Age", "Gender", "Operating System")


```

Relembrar que na maioria dos casos não foram feitas alterações à variável `df`.
Caso pretendessemos guardar estas alterações, teríamos de guardar novamente a
variável: `df <- ...`.

Referência das funções utilizadas:

- [`data.frame`](https://www.rdocumentation.org/packages/base/topics/data.frame)
- [Logical Operators](https://www.rdocumentation.org/packages/base/topics/Logic)
- [`match`, in](https://www.rdocumentation.org/packages/base/topics/match)
- [`filter` (dplyr)](https://www.rdocumentation.org/packages/dplyr/topics/filter)
- [`transform`](https://www.rdocumentation.org/packages/base/topics/transform)
- [`names`](https://www.rdocumentation.org/packages/base/topics/names)

## Operador Pipe

A [package `magrittr`](https://www.rdocumentation.org/packages/magrittr/) adiciona
um novo operador muito útil que nos ajuda a escrever código mais limpo e simples.

Quando fazemos "pipe" de um valor para uma função, esse valor é passado como
o primeiro argumento dessa função.
Podemos também definir um comportamento avançado para alterar a posição do
argumento ou até mesmo passar este argumento em várias posições.

A documentação da package é muito explícita no seu uso:

**Piping simples:**

- `x %>% f` é equivalente a `f(x)`
- `x %>% f(y)` é equivalente a `f(x, y)`
- `x %>% f %>% g %>% h` é equivalente a `h(g(f(x)))`

**Placeholder para o argumento:**

Como referido anteriormente, podemos definir também onde o argumento é colocado.

- `x %>% f(y, .)` é equivalente a `f(y, x)`
- `x %>% f(y, z = .)` é equivalente a `f(y, z = x)`

**Argumento em múltiplas posições:**

O `.` indica onde vai ser substituído o argumento, pelo que podemos utilizá-lo
várias vezes.

- `x %>% f(., y, .)` é equivalente a `f(x, y, x)`

É preciso ter cuidado quando estamos a usar funções dentro de funções, pois
o comportamento de altera. Se apenas tivermos `.` dentro de uma _nested expression_,
ainda será substituído o primeiro argumento.
Podemos alterar este comportamento com chavetas.

- `x %>% f(y = nrow(.), z = ncol(.))` é equivalente a `f(x, y = nrow(x), z = ncol(x))`
- `x %>% {f(y = nrow(.), z = ncol(.))}` é equivalente a `f(y = nrow(x), z = ncol(x))`

Vejamos agora um exemplo com um dataframe:

```R
library("dplyr")
library("magrittr") # A package dplyr também a importa

# O mesmo dataframe da secção anterior
df <- data.frame(...) %>%
  filter(age >= 19) %>%
  filter(gender == "M") %>%
  transform(gender_long = ifelse(gender == "M", "Male", "Female"))

#    name age gender     os gender_long
# 1  Bill  19      M Ubuntu        Male
# 2 Peter  19      M   Arch        Male

```

## Tratamento de Dados para Gráficos (Plotting)

Algo que nos é extremamente útil quando queremos gerar gráficos é
tornar um "wide dataframe" num "long dataframe".
Um "wide dataframe" contém muitas colunas e poucas linhas, enquanto que um
"long dataframe" contém poucas colunas e muitas linhas.

Quando estamos a fazer um gráfico apenas podemos usar um número limitado de
colunas (`x`, `y`, e às vezes `color`, `linetype`, `shape`, etc),
pelo que temos de trabalhar com um "long dataframe".

A função [`pivot_longer` da biblioteca `tidyr`](https://www.rdocumentation.org/packages/tidyr/topics/pivot_longer)
faz exatamente isto.

```R
library("tidyr")

df <- data.frame(
  player = c("A", "B", "C", "D"),
  year1 = c(12, 15, 19, 19),
  year2 = c(22, 29, 18, 12),
  year3 = c(54, 12, 34, 69)
)

df

#   player year1 year2 year3
# 1      A    12    22    54
# 2      B    15    29    12
# 3      C    19    18    34
# 4      D    19    12    69

df_tidy <- df %>%
  pivot_longer(c("year1", "year2", "year3"), names_to = "year",
               values_to = "points")

df_tidy

# # A tibble: 12 × 3
#    player year  points
#    <chr>  <chr>  <dbl>
#  1 A      year1     12
#  2 A      year2     22
#  3 A      year3     54
#  4 B      year1     15
#  5 B      year2     29
#  6 B      year3     12
#  7 C      year1     19
#  8 C      year2     18
#  9 C      year3     34
# 10 D      year1     19
# 11 D      year2     12
# 12 D      year3     69

```

:::tip[Dica]
Caso tenhamos muitas colunas, não é prático escrever o nome de todas.
Podemos recorrer à função `names()` para simplificar este processo:

```R
df_tidy <- df %>%
  pivot_longer(names(.)[c(2:4)], names_to = "year",
               values_to = "points")
```

:::

## Gráficos (Plotting)

Para gerar gráficos a partir de um dataset, utiliza-se a biblioteca `ggplot2`.

Recomendo a leitura do [R Graphics Cookbook](https://r-graphics.org/) que
tem vários exemplos de gráficos com o `ggplot2`, assim como explicações de
como funciona esta biblioteca.

Existe também uma [galeria com dezenas de gráficos diferentes e o respetivo código](https://r-graph-gallery.com/),
embora não com tantas explicações, pelo que recomendo a sua consulta.
