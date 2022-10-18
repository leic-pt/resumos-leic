---
title: Memória
description: >-
  Memória.
  Hierarquia de Memória.
  Caches.
  Caches de Mapeamento Direto.
  Tamanho de Bloco.
path: /oc/memoria-caches
type: content
---

# Memória

```toc

```

## Tipos de Memória

Antes de falar de memória é importante distinguir a [diferença entre o CPU e RAM](color:purple).
A RAM é a memória primária enquanto que o processador faz os cálculos/computações.
Pegando num exemplo, se tivermos um carpinteiro a arranjar uma cadeira e este tiver
uma caixa com ferramentas, num dado momento só um certo número de ferramentas
é que está a ser usado para consertar a cadeira.
Estas ferramentas encontrar-se-ão mais próximo do carpinteiro,
por exemplo no seu cinto, enquanto o resto estará na caixa.
Usar as ferramentas que estão no seu cinto é mais rápido do que tirar uma
ferramenta da caixa e usá-la.
Se o carpinteiro for esperto, irá ter no seu cinto as ferramentas que precisa
mais frequentemente para a tarefa que está a fazer no momento e deixará na
caixa as ferramentas menos utilizadas.
Assim, aplicando esta analogia a um computador, o [carpinteiro é o CPU](color:red),
as [ferramentas que estão no cinto são a RAM](color:pink) e
[as ferramentas que estão na caixa são o disco rígido](color:purple).

Nos últimos anos, a disparidade do aumento da velocidade dos processadores vs RAM
tem vindo a aumentar, como se pode verificar na imagem seguinte:

![Processor vs DRAM](./assets/0004-processador-dram.png#dark=3)

Isto implica que o tempo de execução de um programa acaba por depender bastante
mais na velocidade a que a RAM consegue enviar os dados para o CPU
do que a velocidade do CPU.
Portanto, mesmo que tenhas o computador mais rápido do mundo com o mais recente
processador, a sua velocidade vai estar limitada pela velocidade da tua RAM.
Isto significa que é necessário um bom design de hierarquia de memória e que
este problema é cada vez mais importante.
Mas quais são os diferentes tipos de tecnologias de memória?

- [Static RAM (SRAM)](color:yellow), 0.5ns – 2.5ns, €1000 – €1000 per GB;
- [Dynamic RAM (DRAM)](color:orange), 50ns – 70ns, €10 – €20 per GB;
- [Flash memory](color:red), 5μs – 50μs, €0.5 – €1 per GB;
- [Magnetic disk](color:pink), 5ms-20ms, €0.05 – €0.5 per GB;
- [Ideal memory](color:purple), tempo de acesso à SRAM, capacidade e custo/GB do disco.

### Típica Hierarquia de Memória

Tirando vantagem do [principio de localidade](color:pink) para mostrar ao utilizador
o máximo de memória que há disponível na tecnologia mais **barata** à velocidade
oferecida pela tecnologia mais rápida, temos:

![Hierarquias de memória](./assets/0004-hierarquia-memoria.png#dark=3)

:::tip[Princípio da Localidade]

O [princípio da localidade](color:pink), também conhecido como a **localidade de referência**,
diz-nos que o programa de computador só requer acesso a uma percentagem muito
pequena de espaço de memória a qualquer momento durante a execução.

:::

| [**SRAM**](color:pink)                                                           | [**DRAM**](color:purple)                                                                                    |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| usado por [caches](color:yellow) para velocidade e compatibilidade de tecnologia | usado pela [memória principal](color:orange) para tamanho (densidade)                                       |
| [rápida](color:red) (acesso típico demora 0.5 a 2.5 ns)                          | [lento](color:pink) (acesso típico demora 50 a 70 ns)                                                       |
| [densidade menor](color:purple) (6 células de transístores)                      | [densidade maior](color:blue) (1 célula de transístor)                                                      |
| maior consumo (potência)                                                         | menor consumo (potência)                                                                                    |
| mais caro                                                                        | mais barato                                                                                                 |
| estático, o conteúdo fica para "sempre" enquanto estiver ligado                  | dinâmico, precisa de ser "refrescado" regularmente (a cada 8 ms), consome 1% a 2% dos ciclos ativos da DRAM |

Para além disso, os endereços da DRAM são [divídido em 2 metades](color:pink), linha e coluna:

- [RAS (_Row Access Strobe_)](color:orange) que aciona o decodificador de linha;
- [CAS (_Columm Access Strobe_)](color:green) que aciona o selecionador de coluna.

### Como Funciona a Hierarquia de Memória?

É importante sabermos como, e porquê, é que a hierarquia de memória funciona.

O desenho desta hierarquia tem em mente dois grandes princípios:
o princípio de [localidade temporal](color:yellow) e o de [localidade espacial](color:blue).

A [localidade temporal](color:yellow) pressupõe que se uma certa localização de memória
é referenciada num dado instante, então é bastante provável que volte a ser referenciada
outra vez em breve.  
Um exemplo disto são variáveis dentro de um loop, que são referenciadas várias vezes
durante a execução do mesmo.

A [localidade espacial](color:blue) pressupõe que se uma localização de memória
for referenciada, então é bastante provável que os endereços vizinhos sejam
referenciados em breve.  
Um exemplo disto é o acesso a vetores/_arrays_.

Assim, ao termos uma hierarquia de memória, vamos guardando tudo no disco,
copiamos os items recentemente acedidos (e mais próximos) do disco para a
memória DRAM mais pequena ([memória principal](color:pink)) e por último
copia estes items do DRAM para uma memória SRAM mais pequena
([memória cache](color:pink)) que está conectada ao CPU.

### Níveis de Hierarquia de Memória

![Níveis de hierarquias de memória](./assets/0004-hierarquia.png#dark=3)

Como podemos ver na imagem acima, dentro da memória existem vários níveis que a ajudam a trabalhar como deve.
Por vezes a memória pode estar agrupada em [blocos](color:pink) (linhas), que é a unidade que é
copiada entre níveis da hierarquia, e que pode ser composta por várias palavras.

Se tentarmos aceder a dados e estes estão disponíveis no nível mais alto da hierarquia,
temos um [**_hit_**](color:green), caso contrário teremos um [**_miss_**](color:red)
e teremos de ir buscar os dados a um nível inferior.

Podemos ainda calcular o [**_hit rate_**](color:purple) de multiplos acessos através da seguinte fórmula:

$$
\op{\text{Hit Rate}}
= \frac{\text{Hits}}{\text{Accesses}}
$$

Quando ocorre um [_**miss**_](color:red), o bloco é copiado para um nível mais baixo
e os dados acedidos são fornecidos de um nível superior.
Temos, portanto, tempo perdido a repôr o bloco nesse nível, chamado [**_miss penalty_**](color:pink),
com o bloco de nível inferior correspondente.

Podemos calcular o [̣**_miss rate_**](color:purple) através da seguinte fórmula:

$$
\op{\text{Miss Rate}}
= \frac{\text{Misses}}{\text{Accesses}}
= 1- \text{Hit Rate}
$$

O [**_hit time_**](color:orange) é equivalente ao tempo de acesso ao bloco num
certo nível, mais o tempo que é necessário para determinar se ocorre um _hit/miss_.  
Podemos, portanto, inferir, que o nosso _hit time_ é, geralmente,muito inferior ao _miss penalty_.

## Memória Cache

A memória cache corresponde ao nível de hierarquia de memória mais perto do CPU.

### Mapeamento Direto

Uma das formas de organizar a cache é o [mapeamento direto](color:green).
Este método define que cada endereço de memória está associado a um, e apenas um,
índice na cache.

:::info[Analogia]

Imaginemos que temos 10 cadeiras onde se podem sentar alunos do Técnico.
No entanto, cada aluno só se pode sentar na cadeira que corresponde ao
último dígito do seu número de aluno.

O que acontece se os alunos 99211 e 99311 se quiserem ambos sentar nas cadeiras?  
**Não dá!** Ambos os alunos teriam de se sentar na mesma cadeira, o
que não é possível.
**Mesmo que existam outras cadeiras disponíveis**, estes alunos só estão autorizados
a sentar-se na cadeira 1.

O que acontece é que quando um se quer sentar, o outro tem de ceder o lugar.

É assim que funcionam as [**cache de mapeamento direto**](color:green):
cada endereço na memória está associado a um índice na cache (definido por um certo
conjunto de bits no seu endereço), e quando este é colocado em cache, quaisquer
dados que já lá estejam têm de ser descartados, mesmo que existam outros blocos livres.

:::

![Mapeamento direto](./assets/0004-mapeamento-direto.png#dark=3)

Esta é a forma mais simples de mapeamento. A posição do bloco na cache depende do
seu endereço na memória principal, pelo que cada palavra possui uma posição (_index_) fixa.

Mas como é que sabemos se um bloco em particular está guardado na cache?
Afinal de contas, existem vários endereços que podem estar presentes no
mesmo índice.
Quando guardamos o bloco na cache, guardamos também o restante do endereço.
A isto chamamos [_tag_](color:yellow).
Quando queremos verificar se um endereço está guardado em cache, vamos ao índice
correspondemos e comparamos a _tag_ guardada com a _tag_ do endereço a que queremos
aceder. Se corresponderem, o bloco em cache é o bloco a que queremos aceder.  
Além disso poderemos ter de testar se o _valid bit_ está ativo (1), caso
contrário a entrada em cache apenas contém "lixo".

![Mapeamento direto exemplo](./assets/0004-mapeamento-direto-exemplo.png#dark=3)

:::tip[Exemplos de cache]

Para exemplos de como trabalhar com exercícios de caches é recomendada a resolução das fichas práticas.

:::

### Tamanho de Blocos

Se tivermos 256 blocos com 16 palavras por bloco, como é que podemos descobrir qual é o bloco que o endereço 19200 (em decimal) mapeia?

![Exemplo](./assets/0004-exemplo.png#dark=3)

Começamos por remover o [offset](color:pink), que podemos fazer ao dividir por $2^{2+4}$.

$$
\frac{19200}{2^{2+4}} = 300
$$

Agora que já removemos o offset, podemos calcular o nosso número de bloco (índice)!
Sabendo que o índice ocupa **8 bits**, podemos fazer

$$
300 \op{mod} 2^8 = 44
$$

que nos dá o [índice](color:purple).

Podemos por isso concluir que blocos maiores [deviam reduzir](color:yellow)
o _miss rate_ devido à localidade espacial.
No entanto, numa cache de tamanho fixo, [blocos maiores implicam menos blocos](color:red),
o que pode resultar num _miss rate_ mais elevado.
Além disso, blocos maiores também implicam um maior _miss penalty_, dado
que demoram mais tempo a ser transferidos.
Iremos mais à frente ver políticas de escrita que podem atenuar estas desvantagens.

Por esta razão, é preciso encontrar um ponto de equilíbrio entre tamanho do bloco e _miss rate_.

### Miss Rate vs Block Size vs Cache Size

![Comparação](./assets/0004-comparacao.png#dark=3)

Como podemos ver no gráfico acima, a _miss rate_ sobe quando o tamanho do bloco
ocupa uma fração mais significativa do tamanho da cache, visto que o número de
blocos que pode ser contido simultaneamente na cache é menor.
Isto resultará num aumento de [_capacity misses_](color:red).
