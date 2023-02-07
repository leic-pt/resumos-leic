---
title: Papel de um Compilador
description: >-
  Produzir um Object Module.
  Dynamic Linking.
  Instruction Encoding.
path: /oc/papel-compilador
type: content
---

# Papel de um Compilador

```toc

```

## Produzir um _Object Module_

![Tradução e Startup](./assets/0003-traducao.png#dark=3)

O compilador traduz o programa para instruções de máquina, dando informação para construir um programa completo através de peças soltas:

- [_Header_](color:yellow): descreve os componentes de um _object module_;
- [_Text segment_](color:orange): tradução das instruções;
- [_Static data segment_](color:red): dados alocados para dar vida ao programa;
- [_Relocation info_](color:pink): para componentes que dependem da localização absoluta do _loaded program_;
- [_Symbol table_](color:purple): definições globais e referências externas;
- [_Debug info_](color:blue): para associação com o código fonte.

### Ligar _Object Modules_

Ao fazermos [linking](color:pink) de _object modules_
[produzimos uma imagem executável](color:purple) que converge segmentos,
resolve _labels_, que determinam o seu endereço, e corrigem a
localização-dependente e referências externas.
Para além disso, não podemos deixar as dependências de localização para
corrigirem a mudança de carregador, contudo, com memória vistual,
tal não é necessário visto que o programa pode ser carregado para uma
localização absoluta no espaço de memória virtual.

Mas como é que [carregamos um ficheiro no disco para a memória](color:pink)?
Há seis passos diferentes:

1. Leitura do _header_ para determinar o tamanho dos segmentos;
2. Criação do espaço de endereçamento virtual;
3. Cópia do texto e inicialização dos dados para a memória:
   - Ou definição das entradas da tabela de páginas para que possam ser inseridas;
4. Configuração dos argumentos na pilha;
5. Inicialização dos registos (incluindo `$sp`, `$fp`, `$gp`);
6. Salto para o início da rotina:
   - Copia dos argumentos para `$a0`, ... e chama a função main;
   - Quando a função main retorna, faz um syscall do exit.

### Dynamic Linking

À medida que vamos precisando, [temos que ir dando _link/load_ da nossa biblioteca](color:pink).
Para este processo é obrigatório que o código seja realocado de modo a
evitar que as imagens inchem por causa da ligação estática a todas as
bibliotecas referenciadas.
Assim, novas versões de bibliotecas são automaticamente apanhadas.
Também podemos ter [_lazy linkage_](color:pink): a ligação feita somente quando
uma função é chamada, sabendo que só funções é que de facto podem ser ligadas.

![Lazy linkage](./assets/0003-lazy-linkage.png#dark=3)

![Aplicações Java](./assets/0003-java.png#dark=3)

É importante referir que no [_Just in time compiler_](color:pink) é um
[tradutor _on the fly_](color:purple), ou seja, pega nas instruções Java
e recompila em Assembly no momento.

## x86 Instruction Encoding

![x86 Instruction Encoding](./assets/0003-x86.jpg#dark=3)

O tamanho das variáveis que devem ser condificadas têm bytes postfix que
especificam o modo de endereçamento e operações de bytes de prefixos.

### Implementação do IA-32

São conjuntos complexos de instrução que tornam a sua implementação difícil
visto que o hardware traduz instruções para micro-operações mais simples,
ou seja [instruções simples](color:pink) do género 1-1, ou
[instruções complexas](color:pink) do género 1-muitos;
micromotor parecido com RISC;
e mercado de partilha que turna isto economicamente viável.

### Equívocos Comuns

É fácil cair em conclusões precipitadas relativamente aos compiladores e processadores:

A primeira é que [ter instruções mais complexas implica execuções mais rápidas](color:pink).
Isto nem sempre é verdade visto que apesar de serem necessárias menos instruções,
estas são mais complexas e difíceis de implementar,
o que pode obrigar o processador a correr a uma frequência mais baixa,
"atrasando" todas as instruções, incluindo as mais simples.
Para além disso, os compiladores são extremamente bons a escrever código
eficiente a partir de instruções simples.

A segunda é que devemos [escrever trechos de código em Assembly](color:purple)
se queremos que sejam mais eficientes.
Pelo contrário, os compiladores modernos são bem melhores que qualquer um de nós a escrever Assembly.
O tempo desperdiçado a escrever 50 linhas de Assembly para uma função de
10 linhas em C é melhor utilizado a estudar para OC.
