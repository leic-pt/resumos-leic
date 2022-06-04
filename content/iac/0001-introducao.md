---
title: Introdução
description: Uma (r)evolução constante
  Os computadores estão em todo o lado
  Computadores
path: /iac/introducao
type: content
---

# Introdução

```toc

```

## Uma (r)evolução constante

[Arquitetura de Computadores](color:pink) é uma área que está constantemente a mudar e, neste momento, estamos perante uma destas mudanças. Esta área iniciou-se com a construção do [EDSAC I](https://pt.wikipedia.org/wiki/EDSAC), em 1948; este primeiro computador já tinha a possibilidade de guardar instruções em memória e abriu portas para um novo mundo da tecnologia.

Hoje em dia, podemos caracterizar a revolução dos computadores de duas formas diferentes:

- [Em declínio](color:orange) encontramos a **Lei de Moore**, que já está praticamente morta, e **Dennard Scaling**, que já está verdadeiramente morta;
- [Em crescimento](color:orange) encontramos os aceleradores. Neste momento podemos encontrar aceleradores para todas as áreas, quer seja para Machine Learning, para criptografia, entre outras.

Isto significa que estamos a tender para um mundo onde temos **aceleradores** para todas as áreas, por mais específicas que sejam e **processadores** por empresas específicas. Assim, precisamos de evoluir constantemente os nossos dispositivos eletrónicos e aplicações, por exemplo:

1. Indústria automóvel (Tesla)
2. Telemóveis (5G, 6G)
3. Bioinformática (genoma humano)
4. Internet (World Wide Web)
5. Motores de busca (Google, Bing)

## Os computadores estão em todo o lado

Vivemos numa era em que não interessa onde estamos pois haverá sempre computadores à nossa volta, quer seja nas aulas, na rua, em cafés, livrarias, entre outros, todos os espaços estão repletos de computadores de todos os tamanhos e formas.

### Lei de Moore

![Lei de Moore](./assets/0001-lei-de-moore.png#dark=3)

Na década de 60, Moore preveu que a cada 18 meses, a cada área de silício, iamos duplicar o número de transistores. De facto durante 20 anos, este crescimento exponencial foi visível. Contudo, por volta de 2003 começou-se a notar um declínio. Nos últimos 50 anos, a Lei de Moore comandou os avanços tecnológicos em termos de melhorias de desempenho/energia sem ter de mudar o software, ou seja tinhamos um processador **2x** mais rápido ao mesmo custo.

Contudo, notamos alguns desafios perante este declínio, nomeadamente em termos de eficiência energética, o paralelismo de instruções, latência de memória, entre outros.

Assim a única solução é começarmos a investir em [muitos processadores](color:pink).

### Dennard Scaling

Tal como na Lei de Moore, Dennard Scaling cria uma relação entre a energia que temos que dar ao sistema e o tamanho dos transistores. Resumidamente, esta lei diz-nos que à medida que os transistores vão diminuindo de tamanho, a sua potência por densidade mantém-se constante, de modo a que o uso desta potência mantenha-se proporcional à área. Contudo. atualmente, tal já não é visível, o que significa que cehgamos a uma estagnação da frequência dos relógios do CPU.

![Dennard Scaling](./assets/0001-dennard-scaling.png#dark=3)

Temos outras tecnologias atualmente, tal como CMOS, mas nenhuma funciona da mesma forma.

## Computadores

Sendo que as tecnologias vão evoluindo, os computadores que vamos utilizando também vão evoluindo, havendo diferentes computadores para diferentes especificações.

![Era pós-PC](./assets/0001-era-pos-pc.png#dark=3)

### Tipos de computadores

Os primeiros computadores que devem ser referidos são os [computadores pessoais (PCs)](color:pink). Estes computadores servem para um uso geral (_"general purpose"_) e têm uma grande variedade de software, havendo uma necessidade maior de [bom compromisso custo/desempenho](color:orange).

De seguida, temos os [servidores](color:pink) que são baseados em rede, têm uma elevada capacidade, desempenho e fiabilidade.

Os [supercomputadores](color:pink) têm servidores "especiais" para cálculos científicos e de engenharia altamente complexos, visto terem um [elevadíssimo desempenho](color:orange), só representam uma fração pequena do mercado global e são de custos muito mais elevados.

Por último, os [computadores embebidos](color:pink) são computadores "escondidos" como componentes de múltiplos sistemas, por exemplo, industriais, automóveis, IoT, etc. Estes computadores estão perante restrições muito fortes no que toca a [compromisso energia/desempenho/custo](color:orange).
