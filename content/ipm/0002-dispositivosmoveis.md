---
title: Dispositivos moveis
description: Dark pattern.
  Especificidades dos dispositivos móveis.
  Interação em dispositivos móveis.
  O Futuro.
  Heurísticas de Usabilidade.
path: /ipm/dispositivosmoveis
type: content
---

# Dispositivos móveis

```toc

```

## Dark Pattern

Os padrões sombrios (mais conhecidos como _dark patterns_ em inglês) são truques utilizados em aplicações ou sites que nos obrigam a fazer coisas que nao pretendemos fazer, como comprar algo ou subscrever alguma coisa. 

Os **dark patterns** funcionam visto que, quando uma pessoa está a utilizar uma aplicação ou a percorrer um site, não costuma ler todas as frases, apenas percorre rapidamente o texto e retira conclusões. Desta forma, se uma empresa pretender enganar-nos a fazer algo, podem tirar proveito disto e fazer com que uma página pareça que diz uma coisa quando na verdade diz algo completamente diferente.

Alguns exemplos muito comuns de empresas que usam dark patterns são a **Amazon** (é muito difícil de se conseguir apagar a conta da Amazon), a **Windows** (quando saiu o update do Windows 10, ao aparecer o pop up sobre a atualização, quando se carregava na cruz para fechar o pop up, a atualização iniciava sem o consentimento do utilizador), **Facebook**, **Google**, entre muitos outras.

> "It's like a roach motel, very easy to get into, very hard to get out of." 

## Especifidades dos dispositivos móveis

:::tip[Dispositivo móvel]

Corresponde a um computador de bolso habitualmente equipado com um ecrã (_ouput_) e um teclado de letras ou numérico em miniatura (_input_). Estes dispositivos possuem um sistema operacional e são capazes de suportar aplicações móveis, podendo comunicar sem fios com outros dipositivos ou pela internet.

:::

Nos dias de hoje quando nos referimos a dispositivos móveis não estamos só a falar de telemóveis. Desde de smartwatched, a _tablets_ e a _e-readers_ estamos rodeados de dipositivos com que interagimos no dia a dia e fazem parte da nossa vida.

### Diferenças de IPM para Desktop

1. **Tamanho**
Vendo só a diferença entre computadores e telemóveis, a diferença entre ambos já e bastante significativa. Com a junção de _smartwatches_ e _fitness bands_ entre outros dispositivos _handheld_ podemos trabalhar com tecnologias de muito menor tamanho e mais práticos.

2. **Modalidades de Interação**
Quando olhamos para os nossos dispositivos hoje em dia conseguimos facilmente identificar diferentes maneiras de interagir com os mesmos. Sendo o toque (através do _touchscreen_) a forma de interação mais comum, também podemos adicionar à lista butões, comandos de voz, entre outros. Cada dispositivo tem uma grande incorporação destas modalidades, nunca somente uma.

:::tip[Hidden Markov Model]

**Hidden Markov Models (HMMs)** representam uma classe de modelos de probabilidades gráficas que nos permitem prever uma sequência desconhecida (escondida) de variáveis a partir de um padrão de variáveis observadas.
Este modelo pode ser utilizaado em diferentes modalidades de interação, especificamente com comandos de voz para que um dispositivo reconheça apenas a voz do seu utilizador e, caso esteja em público, ser apenas ativado pelo seu próprio utilizador.
:::

Em termos de modalidades de interações, os dispositivos móveis permitem poder utilizá-los de muitas outras formas para além do toque. Um grande exemplo disso é o famoso jogo **_Pokémon Go_** que permitia aos seus jogadores uma experiência muito para além da interação com a aplicação.

3. **Experiência integral de utilização**
Em relação à diferença entre UI (_User Interface_) e UX (_User Experience_), a usabilidade do utilizador e a experiência da pessoa têm um impacto muito elevado e marcam uma diferença muito acentuada entre IPM e Desktop.

4. **Contexto de Utilização**
Um dos maiores benefícios de dispositivos móveis refere-se à sua praticidade. Podemos levar connosco estes aparelhos para locais variados, dando uma maior abertura a uma atenção dividida, visto que podemos responder logo às notificacões a partir do momento em que as recebemos, entre outros; contudo temos que ter cuidado com as restrições sociais que estes dispositivos trazem e não só.

5. **Interações breves**
Visto podermos andar com os nossos dispositivos o dia todo, não precisamos de fazer tudo o que pretendemos um aparelho tecnológico de uma só vez, e, em vez disso, podemos ter interações curtas e muito mais regulares sempre que pretendemos concluir uma tarefa.

:::tip[Miniaturização não!]
Com os dispositivos móveis, o nosso principal objetivo não é ter uma versão menor do nosso desktop mas sim adaptar o que temos a aparelhos mais práticos. 
:::

## Interação em dispositivos móveis
Em termos de dispositivos móveis, visto que a maior parte das pessoas usam apenas o polegar em _touchscreen_, a interação com o dispositivo tem que ser facilitada para tal. Visto ser difícil de alcançar com o polegar ou apenas uma mão a parte superior do ecrã, é comum entre os browsers ter a barra de pesquisa na parte superirior de modo a não estar a estrovar a experiência do utilizador (**_Reachibility_**).

### Fat Finger Problem

O _Fat Finger Problem_ pode ser definido com a dificuldade que uma pessoa possa ter ao utilizar um website num ecrã táctil visto que os botões e as seccões são demasiado pequenas para a largura dos dedos. Algumas das soluções encontradas para resolver este problema referem-se a:

1. _Detached Overlay_;
2. _Autocorrect_;
3. _Swift-key_;
4. _Back-of-the-device_ (touchscreen na parte de trás do ecrã);
5. Gestos (_Drag_, _Swipe_, _Pinch_).

Porém tem que haver um conjunto de regras para estes gestos de modo a que os utilizadores possam ter uma experiência mais agradável:
- Permitir vários dedos;
- Gestos como atalhos;
- Dar feedback imediato;
- ter em atenção questões de descoberta.

### Tamanho, Espaçamentos...

Existe um tamanho e espaçamento específico para cada dispositivo (Android, IOS,...) pois, quanto mais pequeno for o aparelho, mais difícil será de se poder interagir com.

<a href='https://www.linkpicture.com/view.php?img=LPic623f2d82e541f2125134176'><img src='https://www.linkpicture.com/q/Screenshot-from-2022-03-26-15-12-19.png' type='image'></a>

### Novas técnicas de interação

Não só com dispositivos eletrónicos mas com todos os tipos de dispositivos precisamos sempre de os ir adaptando de modo a tornarem-se o mais práticos possível. Por exemplo, a invenção do relógio de pulso deveu-se aos pilotos queixarem-se da dificuldade de verem as horas ao pilotarem daí a Cartier ter inventado uma maneira mais simples de poderem ver as horas sem tirarem as mãos dos controlos.

Desta mesma forma, os dispositivos móveis também se vão sempre modificando de modo a tornarem-se mais práticos de se poderem interagir com. Um dos novos métodos mais utilizados atualmente e mais focados é na possibilidade de interagir com dispositivos sem ter que okhar para eles, ou seja, poder interagir com os dispositivos **_eyes-free_**. Isto facilitaria no _multitask_ ou na falta de retorno tátil. Ao interagir com um dispositivo _eyes-free_ poderiamos ainda estar em contacto com os nossos dispositivos móveis e responder a notificações enquanto estávamos a conduzir, entre outros exemplos.

## O Futuro

Com a evolução nos dias de hoje, também precisamos de ter em conta como é que o _input_ do utilizador pode ser facilitado.

### IPM + ML + Sensor Fusion

<a href='https://www.linkpicture.com/view.php?img=LPic623f2dcc026832033840193'><img src='https://www.linkpicture.com/q/Screenshot-from-2022-03-26-15-14-00.png' type='image'></a>

Para melhorar o _input_ do utilizador, os novos dispositivos ajudam o utilizador com **"previsões"** do que este poderá querer escrever. Por exemplo, quando estamos a escrever uma mensagem no telemóvel e o teclado da sugestões de palavras que possamos estar a escrever ou que vamos querer escrever depois.

:::tip[Quantified-self]
A interação com o utilizador não e totalmente direta: o dispositivo é "ensinado" a reconhecer certos padrões. Por exemplo se estamos a lavar as mãos durante tempo suficiente, os smartwatches controlam os nossos movimentos e o tempo para calcular se estamos os segundos recomendados a completar esta ação. Outro exemplo mais recente refere-se aos telemóveis que detetam a possibilidade do utilizador ter Covid através do microfone, captando os espirros e a tosse e comparando-os com os mesmos sintomas de doentes de Covid.
:::

## Heurísticas de Usabilidade


As heurísticas de usabilidade referem-se a um conjunto de _guidelines_ que ajudam os programadores e construirem uma melhor aplicação. Estas heurísticas funcionam quase como uma **checklist** que auxilia os designers a guiarem-se sobre o que devem fazer e os avaliadores para conseguirem avaliar a qualidade do trabalho realizado. Segundo Nielsen, existem **10 heurísticas**.


### H1: Tornar estado do sistema visível


A primeira heurística refere-se a dar a conhecer ao utilizador onde estão, isto é fazer com que o utilizador não tenha quaisquer dúvidas sobre em que zona da aplicação ou _website_ está e o que está a fazer ou como o está a realizar. Um bom exemplo desta heurística é quando acedemos ao site da Amazon e estamos a terminar uma compra, o site auxilia o utilizador na medida em que lhe mostra exatamente em que etapa da compra está para que não sujeite quaisquer questões do que falta/já fez. 


Outro exemplo desta heurística será por exemplo no _**Paint**_ quando o utilizador está a usar o lápis, a aplicação reforça o lápis tanto no rato como no menu para não surgir dúvidas.


### H2: Correspondência com o mundo real


A segunda heurística refere-se a “falar a linguagem do utilizador”, isto é utilizar terminologia que seja familiar ao utilizador evitando usar termos orientador ao sistema ou gíria técnica. Dois exemplos mais comuns desta heurística são nos _e-books_ quando o utilizador pode “passar a página” como dedo como se fosse um livro normal ou quando “dobra” o canto da página para  marcar em que zona está.


### H3: Utilizador controla e exerce livre arbítrio 


É normal o utilizador querer controlar tudo, ou praticamente tudo, o que ele faça numa aplicação. Deste modo, a terceira heurística refere-se à possibilidade do utilizador sair de situações inesperadas (erros) e não obrigar o utilizador a passar por caminhos inflexíveis. O utilizador tem controlo absoluto sobre o programa.


Esta heurística está presente quando no _G-mail_ o utilizador consegue cancelar o envio do e-mail, no _Netflix_ quando o utilizador tem a possibilidade de avançar para o próximo episódio ou voltar atrás. 


### H4: Consistência e adesão a normas

A quarta heurística refere-se a minimizar o fator de surpresa ou seja palavras, situações ou ações semelhantes têm significados semelhantes e palavras, situações ou ações diferentes implicam significados diferentes. Vemos a presença desta heurística nos botões de cancelar o enviar sempre do mesmo lado do ecrã, quando estamos perante uma lista se dermos _swipe_ num dos pontos conseguimos aceder a uma série de atalhos.


### H5: Evitar erros


Para um boa aplicação funcionar tem que ser difícil de cometer erros que possam ser prejudiciais, visto que melhor do que uma boa mensagem de erros. Por exemplo, o utilizador deve ser alertado se de facto quer fazer uma encomenda de 5000 livros, ou seja tem um espécie de _feeback_ para que não ocorra erros.


### H6: Reconhecimento em vez de lembrança 


Para o utilizador ter uma experiência mais calma e agradável numa qualquer aplicação é necessário auxilia-o a tornar os objetos, ações e indicações visíveis de modo a reduzir a carga cognitiva. O utilizador não é obrigado a lembrar de informação é por isso que as fontes no Word não aparece só o nome mas também como a fonte fica nas letras.


### H7: Flexibilidade e eficiência 


Existem aceleradores que permitem a realização mais eficiente das tarefas e permitem o utilizador realizar as tarefas de vários modos diferentes. Ou seja é requerido que as interfaces de adaptem ao utilizador. Um exemplo é no Instagram quando o utilizador pode fazer _double-click_ na foto ou carregar no coração para dar gosto.


### H8: Desenho estético e minimalista


Contudo, apesar de haver tanta informação e auxilio que o utilizador necessita é necessário apresentar apenas o que seja necessário àquele momento. É só necessário comunicar e não decorar: na Dropbox basta pôr um ficheiro numa pasta e pronto!


### H9: Ajudar a reconhecer, diagnosticar e a recuperar de erros


É necessário ser preciso (indicar claramente o problema), falar a linguagem do utilizador e evitar códigos e termos técnicos, dar ajuda construtiva quereres-te recuperar e evitar novos erros e ser cortes. Um exemplo claro desta heurística e quando fazemos uma pesquisa no Google em que escrevemos mal uma palavra, apenas nos aparece uma mensagem a perguntar se queríamos escrever outra coisa com uma sugestão por baixo.


### H10: dar ajuda e documentação 


A última heurística refere-se a ajuda ser usada apenas quando ha problemas e, tendo isso em consideração, oferecer acesso rápido à informação. Contudo a ajuda não substitui mau desenho da IU e o sistema não deve depender dela para ser utilizado! 


Alguns tipos diferentes de ajuda referem-se a:


- Documentação 
- _Onboarding_ ao abrimos uma app pela primeira vez
- Instruções passo-a-passo (_walkthrough_)
- _Tooltips_
- _Popovers_
- _Chatbots_
- Vídeos

