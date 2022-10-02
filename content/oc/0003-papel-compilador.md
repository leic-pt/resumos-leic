---
title: Papel de um compilador
description: >-

path: /oc/papel-compilador
type: content
---

# Papel de um computador

```toc

```

## Produzir um modelo de objeto

![Tradução e Startup](./assets/0003-traducao.png#dark=3)

O compilador traduz o porgrama para instruções de máquina, dando informação para construir um programa completo através de peças soltas:

- [_Header_](color:yellow): descreve as componentes de um modelo de objeto;
- [_Text segment_](color:orange): tradução das instruções;
- [_Static data segment_](color:red): dados alocados para dar vida ao programa;
- [_Relocation info_](color:pink): para componentes que dependem da localização absoluta do _loaded program_;
- [_Symbol table_](color:purple): definições globais e referências externas;
- [_Debug info_](color:blue): para associação com o código fonte.

### Ligar objetos modelos

Ao fazermos [linking](color:pink) de objetos modelos [produzimos uma imagem executável](color:purple) que converge segmentos, resolve _labels_, que determinam o seu endereço, e corrigem a localização-dependente e referências externas. Para além disso, não podemos deixar as dependências de localização para corrigirem a mudança de carregador, contudo, com memória vistual, tal não é necessário visto que o programa pode ser carregado para uma localização absoluta no espaço de memória virtual.

Mas como é que [carregamos um ficheiro imagem no disco para a memória](color:pink)? Há seis passos diferentes:

    1)  Leitura do _header_para determinar o tamanho dos segmentos;
    2)  Criação do espaço de endereçamento virtual;
    3)  Cópia do texto e inicialização dos dados para a memória:
            - Ou definição das entradas da tabela de páginas para que possam ser inseridas;
    4)  Configuração dos argumentos na pilha;
    5)  Inicialização dos registos (incluindo $sp, $fp, $gp);
    6) Salto para o início da rotina:
            - Copia dos argumentos para $a0, ... e chama a função main;
            - Quando a função main retorna, faz um syscall do exit.

### Dynamic Linking

À medida que vamos precisando, [temos que ir dando _link/load_ da nossa biblioteca](color:pink). Para este processo é obrigatório que o código seja realocado de modo a que a evitar que as imagens inchem por causa da ligação estática de todas as bibliotecas referênciadas. Assim, novas versões de bibliotecas são automaticamente apanhadas. Também podemos ter [_lazy linkage_](color:pink) é a ligação feita somente quando uma função é chamada, sabendo que só funções é que de facto podem ser ligadas.

![Lazy linkage](./assets/0003-lazy-linkage.png#dark=3)

![Aplicações Java](./assets/0003-java.png#dark=3)

É importante referir que no [_Just in time compiler_](color:pink) é um [tradutor _on the fly_](color:purple), ou seja, pega nas instruções Java e recompila em Assembly no momento.

## x86 Instruction Encoding

![x86 Instruction Encoding](./assets/0003-x86.jpg#dark=3)

O tamanho das variáveis que devem ser condificadas têm bytes postfix que especificam o modo de endereçamento e operações de bytes de prefixos.

### Implementação do IA-32

São conjuntos complexos de instrução que tornam a sua implementação difícil visto que o hardware traduz instruções para micro-operações mais simples, ou seja [instruções simples](color:pink) do género 1-1, ou [instruções complexas](color:pink) do género 1-muitos; micromotor parecido com RISC; e mercado de partilha que turna isto economicamente viável.

### Falácias

Existem diversas falácias sobre o nosso compilador: A primeira é que [instruções mais poderosas implicam execuções melhores](color:pink). Isto está incorreto visto que muito poucas instrução são necessárias mas instruções mais complexas são mais difíceis de implementar visto que podem desacelerar todas as instruções, incluindo as mais simples. Para além disso, também é sabido que compiladores são bons a fazerem código rápido a partir de instruções simples.

A segunda falácia é que [código Assembly é usado para execuções mais avançadas](color:purple). Contudo, compiladores modernos são melhores a lidar com processadores modernos e mais linhas de código implicam mais erros e menor produtividade.

:::warning[_Pitfalls_]

Sequências de palavras [não são](color:red) endereços sequenciados, incrementamos sempre a 4 e não a 1! Manter o [ponteiro numa variável automática](color:red) a seguir a um procedimento retornar, por exemplo passar um ponteiro através de um argumento, visto que o ponteiro se torna inválido quando o stack é libertado.

:::

## Memória

Antes de começarmos temos que relembrar a [diferença entre o CPU e RAM](color:purple). O RAM é a memória, o processador faz os cálculos/computações. Basicamente se tivermos um carpinteiro atrabalhar num banco e tivermos uma caixa com ferramentas, em qualquer momento só um certo número de ferramentas é que está a ser usado para consertar o banco, estas ferramentas encontram-se em cima do banco, o resto está na caixa. Usar só as ferramentas que já estão em cima do banco é mais rápido do que tirar uma ferramenta da caixa e usá-la. Assim, aplicando esta analogia a um computador, o [carpinteiro é o CPU](color:red), as [ferramentas que estão no banco são a RAM](color:pink) e [as ferramentas que estão na caixa são o disco rígido](color:purple).

Sabemos que a disparidade de velocidade de um Processador vs DRAM cresce continuamente da seguinte forma:

![Processor vs DRAM](./assets/0003-processador-dram.png#dark=3)

Isto significa que bom design de hierarquia de memória ([cache](color:pink)) é cada vez mais importante para o desempenho geral. Mas quais são os diferentes tipos de tecnologias de memória?

- [Static RAM (SRAM)](color:yellow), 0.5ns – 2.5ns, €1000 – €1000 per GB;
- [Dynamic RAM (DRAM)](color:orange), 50ns – 70ns, €10 – €20 per GB;
- [Flash memory](color:red), 5μs – 50μs, €0.5 – €1 per GB;
- [Magnetic disk](color:pink), 5ms-20ms, €0.05 – €0.5 per GB;
- [Ideal memory](color:purple), tempo de acesso à SRAM,, capacidade e custo/GB do disco.

### Típica hierarquia de memória

Tirando vantagem do [principio de localidade](color:pink) para mostrar ao utilizador o máximo de memória que há disponível na tecnologia mais **barata** à velocidade oferecida pela tecnologia mais rápida, temos:

![Hierarquias de memória](./assets/0003-hierarquia-memoria.png#dark=3)

:::tip[Princípio da localidade]

O [princípio da localidade](color:pink), também conhecido como a **localidade de referência**, diz-nos que o programa de computador só requer acesso a uma percentagem muito pequena de espaço de memória a qualquer momento durante a execução.

:::

| [**SRAM**](color:pink)                                                           | [**DRAM**](color:purple)                                                                                    |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| usado por [caches](color:yellow) para velocidade e compatibilidade de tecnologia | usado pela [memória principal](color:orange) para tamanho (densidade)                                       |
| [rápida](color:red) (acesso típico demora 0.5 a 2.5 ns)                          | [lento](color:pink) (acesso típico demora 50 a 70 ns)                                                       |
| [densidade menor](color:purple) (6 células de transístores)                      | [densidade maior](color:blue) (1 célula de transístor)                                                      |
| maior poder                                                                      | menor poder                                                                                                 |
| mais caro                                                                        | mais barato                                                                                                 |
| estático, o conteúdo fica para "sempre" enquanto estiver ligado                  | dinâmico, precisa de ser "refrescado" regularmente (a cada 8 ms), consome 1% a 2% dos ciclos ativos da DRAM |

Para além disso, os endereços da DRAM é [divídido em 2 metades](color:pink), linha e coluna:

- [RAS (_Row Access Strobe_)](color:pink) que aciona o decodificador de linha;
- [CAS (_Columm Access Strobe_)](color:purple) que aciona o selecionador de coluna.

### Como funciona hierarquias de memória?

É importante sabermos como é que estas hierarquias de memória funcionam. Em termos de [localidade temporal](color:pink), sabemos que representa se a localização de memória é referenciada então vai tender a ser referenciada outra vez em breve; manter os dados que foram referenciadas mais recentemente mais perto do processador, por exemplo, instruções em loop. Em termos de [localidade espacial](color:purple), sabemos que representa se uma localização de memória for localizada, então as localização de endereços mais perto tende a ser referenciados em breve; move blocos que consistem em palavras contínuas mais perto do processador, por exemplo, instruções de acesso sequenciais.

Assim, ao termos uma hierarquia de memória, vamos guardando tudo no disco, copiamos os items recentemente acedidos (e mais próximos) do disco para a memória DRAM mais pequena ([memória principal](color:pink)) e por último copia estes items do DRAM para uma memória SRAM mais pequena ([memória cache que está conectada ao CPU](color:pink)).

### Níveis de hierarquia de memória

![Níveis de hierarquias de memória](./assets/0003-hierarquia.png#dark=3)

Como podemos ver na imagem acima, dentro da memória existem vários níveis que a ajudam a trabalhar como deve. Em primeiro lugar temos os [blocos, a linha](color:pink) que é a unidade de cópia e pode ser definida por várias palavras. Se houver dados para serem acedidos nestes blocos, temos um [**_hit_**](color:purple), ou seja, há um acesso que é bem acedido num nível superior. Assim, podemos calcular o nosso [**_hit ratio_**](color:purple) através da seguinte fórmula:

$$
\op{\text{Hit Ratio}}
= \frac{\text{Hits}}{\text{Accesses}}
$$

Da mesma forma, se pretendemos aceder a dados não existentes temos um [_**miss**_](color:purple), o bloco é copiado para um nível mais baixo e os dados acedidos são fornecidos de um nível superior. Temos, portanto mais tempo perdido visto que temos uma penalidade para repôr o bloco nesse nível com o bloco de nível inferior correspondente. Logo, podemos calcular o [̣***miss ratio***](color:purple) através da seguinte fórmula:

$$
\op{\text{Miss Ratio}}
= \frac{\text{Misses}}{\text{Accesses}}
= 1- \text{Hit Ratio}
$$

E, por isso, temos que o nosso [**_hit time_**](color:pink) é equivalente ao tempo de acesso ao bloco mais o tempo que é necessário para determinar se é um _hit/miss_. Podemos, portanto, inferir, que o nosso _hit time_ é muito imferior ao _miss penalty_.

## Memória cache

A memória cache corresponde ao nível de hierarquia de memória mais perto do CPU. Dado os acessos $X \scriptsize 1$, ..., $X \scriptsize n-1$, $X \scriptsize n$, temos que:

![Memória cache](./assets/0003-cache.png#dark=3)

### Mapeamento direto

Quando estamos a aceder à cache podemos fazer através de [mapeamento direto](color:pink), isto significa que podemos aceder a apenas um bloco por linha, seja essa localização determinada pelo nosso endereço. Ou seja, temos apenas **uma possibilidade**.

![Mapeamento direto](./assets/0003-mapeamento-direto.png#dark=3)

Esta é a forma mais simples de mapeamento e a posição da nossa cache depende do endereço da palavra na memória princicpal, sabendo que cada palavra possui uma posição fixa. Assim, cada grupo de palavras esta mapeado na mesma posição da cache.

Mas como é que sabemos se um bloco particular está guardado na cache? O nosso bloco, para além de guardar os dados também guarda o [endereço](color:pink), isto significa que apenas precisamos dos nossos bits mais elevados. A isto chama-mos [tag](color:purple). Da mesma forma, conseguimos perceber se existe dados numa determinada localização através do seu [bit válido](color:purple), Inicialmente a zero, se estiver presente mudamos este bit para 1, caso contrário, mantém-se a 0 e significa que não está presente.

![Mapeamento direto exemplo](./assets/0003-mapeamento-direto-exemplo.png#dark=3)

:::tip[Exemplos de cache]

Para exemplos de como trabalhar com exercícios de caches é recomendada a resolução das fichas práticas, ou a sua [resolução](mete o link quando tiveres posto no site).

:::

### Tamanho de blocos

Se tivermos 256 blocos com 16 palavras por bloco, como é que podemos descobrir qual é o bloco que o endereço 19200 mapeia?

![Exemplo](./assets/0003-exemplo.png#dark=3)

Começamos por remover o [offset](color:pink) que é possível através da divisão

$$
\frac{19200}{(16*4)}
= 300
$$

Agora que já temos o offset, podemos calcular o nosso número de bloco! Através de 300 $mod$ 256, que nos dá 44, o nosso [_index_](color:pink).

Podemos por isso concluir que blocos maiores [deviam reduzir](color:purple) o _miss rate_ devido à localidade espacial, mas numa cache de tamanho fixo, [blocos maiores implica menos blocos](color:purple), o que signfica que mais competição implica um _miss rate_ mais elevado e portanto, blocos maiores implicam poluição. Por isso, uma maior penalidade de _miss_ pode dar _override_ ao benefício de um reduzido _miss rate_ e um recomeço mais cedo pode ajudar!

### Miss Rate vs Block Size vs Cache Size

![Comparação](./assets/0003-comparacao.png#dark=3)

Como podemos ver no gráfico acima, o _miss rate_ sobe quando o tamanho do bloco se uma fração mais significativa do tamanho da cache visto que o número de bloco que pode ser contido no mesmo tamanho de cache é mais pequeno, o que significa que [aumenta a capacidade de falhas](color:pink).
