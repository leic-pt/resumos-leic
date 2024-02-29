---
title: Coordenação e Consenso
description: >
  Exclusão mútua distribuída.

  Coordenação.

  Consenso.

  Eleições.
path: /sd/coordenacao-e-consenso
type: content
---

# Coordenação e Consenso

```toc

```

## Exclusão mútua distribuída

Já fomos introduzido ao problema da exclusão mútua em
[**Sistemas Operativos (SO)**](/so/programação/), que tem como objetivo garantir
que dois processos/_threads_ não acedem concorrentemente ao mesmo recurso
(ex: ficheiro, bloco de memória, ...), uma vez que tal pode causar incoerências
(ao tentarmos ler e escrever no mesmo espaço por ex.).

Em **Sistemas Distríbuidos** existe o mesmo problema: é necessário coordenar
os processos de forma a garantir que não acedem simultaneamente ao mesmo recurso,
mas com a diferença de que agora a **exclusão mútua é distribuída, baseando-se
na troca de mensagens**.

### Algoritmos de exclusão mútua

Consideramos um sistema de $N$ processos $p_i, i = 1, 2, ..., N$, que não
partilham variáveis. Os processos acedem a recursos comuns, mas fazem-no numa
secção crítica.

Os requisitos essenciais para exclusão mútua são:

- ME1 (_safety_): apenas um processo pode estar na secção crítica
- ME2 (_liveness_): os pedidos para entrar e sair da secção crítica eventualmente
  são bem sucedidos (esta condição previne _deadlocks_ e _starvation_)
- ME3 (_happened-before ordering_): se um pedido para entrar na secção crítica
  ocorreu antes de outro, então a entrada é concedida nessa ordem.

### Algoritmo do servidor central

Esta é a forma mais simples de alcançar a exclusão mútua, utilizando um
servidor que concede permissão para entrar na secção crítica.

Para entrar na secção crítica, um processo envia um pedido ao servidor e
aguarda uma resposta deste. Conceptualmente, a resposta é uma chave que
significa permissão para entrar na secção crítica. Se nenhum outro processo
tiver a chave, então o servidor responde imediatamente, concedendo a chave.
Se a chave estiver detida por outro processo, então o servidor não responde,
mas coloca o pedido numa fila de espera. Quando um processo sai da secção crítica, envia
uma mensagem ao servidor, devolvendo-lhe a chave.

![Algoritmo do servidor central](./assets/0004-central-server.png#dark=3)

Desvantagens:

- Pode existir sobrecarga do servidor.
- Se o servidor falhar, o sistema fica bloqueado.
- É necessário entregar a "chave" ao servidor para que este depois a passe a
  outro cliente (entregar diretamente ao próximo cliente seria muito mais eficiente)

Devemos assim tentar implementar uma solução descentralizada!

### Algoritmo baseado em anel

Uma das formas mais simples de estabelecer exclusão mútua entre $N$ processos
sem utilizar um processo adicional é organizá-los num anel lógico. Isto apenas
requer que cada processo $p_i$ tenha um canal de comunicação com o próximo
processo no anel, $p_{(i+1) \op{mod} N}$.

A ideia é que a exclusão mútua é concebida passando a chave de processo para
processo numa única direção (por exemplo, no sentido horário) ao redor do anel.
Se um processo não precisa de entrar na secção crítica quando recebe a chave,
encaminha-a para o seu vizinho. Um processo que precise da chave espera até
recebê-la (e retém-a após receber). Para sair da secção crítica, o processo
encaminha a chave para o seu vizinho.

![Algoritmo baseado em anel](./assets/0004-ring-based.png#dark=3)

### Algoritmo de Ricart and Agrawala

Este algoritmo utiliza 3 estados:

- `HELD`: significa que temos acesso exclusivo à região crítica
- `WANTED`: não temos acesso mas queremos obtê-lo
- `RELEASED`: não precisamos de aceder à região crítica

Se um processo deseja aceder à região, deve enviar _requests_ a todos os outros
clientes e esperar obter "OK" de todos estes. Se todos responderem afirmativamente,
o processo recebe acesso exclusivo à região.

```php
On initialization
  state := RELEASED;

To enter the section
  state := WANTED;
  Multicast request to all processes; // É omitido o processamento dos requests
  T := request’s timestamp;
  Wait until (number of replies received = (N – 1)); // Espera receber N-1 OK's
  state := HELD; // Temos acesso

On receipt of a request <T_i, p_i> at p_j (i != j)
  // Se (já temos acesso) ou (queremos ter e enviámos o pedido há mais tempo),
  // colocamos os pedidos em espera
  if (state = HELD or (state = WANTED and (T, p_j) < (T_i, p_i)))
  then
      queue request from p_i without replying;
  else
      reply immediately to p_i;
  end if

To exit the critical section
  state := RELEASED;
  reply to any queued requests;
```

:::details[Exemplo]

![Exemplo Ricart and Agrawala](./assets/0004-ricart-and-agrawala.png#dark=3)

Para ilustrar o algoritmo, considere uma situação envolvendo três processos,
$p_1$, $p_2$ e $p_3$, conforme mostrado na figura. Vamos supor que $p_3$ não
está interessado em entrar na secção crítica, e que $p_1$ e $p_2$ solicitam
entrada simultaneamente. O _timestamp_ do pedido de $p_1$ é 41, e o de $p_2$ é 34.

Quando $p_3$ recebe os pedidos, responde imediatamente. Quando $p_2$ recebe o
pedido de $p_1$, verifica que o seu próprio pedido tem _timestamp_ menor e,
portanto, não responde, mantendo $p_1$ em espera. No entanto, $p_1$ verifica que
o pedido de $p_2$ tem um _timestamp_ menor do que o seu próprio pedido e,
portanto, responde imediatamente. Ao receber esta segunda resposta, $p_2$ pode
entrar na secção crítica. Quando $p_2$ decidir sair da secção crítica, responderá
ao pedido de $p_1$ e concederá a sua entrada.

:::

Este algoritmo já permite que a "chave" seja passada diretamente para outro cliente,
mas tem 2 problemas:

- Não é tolerante a faltas
- Em vez de sobrecarregar o servidor, sobrecarrega todos os processos!

:::warning[Cuidado]

Poderíamos pensar que uma alternativa seria basear este algoritmo em
prioridades em vez de timestamps, mas isto não funciona!
Vejamos o seguinte exemplo:

![Ricart and Agrawala baseado em prioridades](./assets/0004-priority-based.svg#dark=3)

Em (\*), o processo com prioridade 0 responde com "OK" apesar de ter feito o pedido
antes, visto que a sua prioridade é inferior à do cliente que pediu acesso.
Desta forma, ambos recebem $N-1 = 2$ OK's e têm acesso "exclusivo" à zona crítica.

:::

### Algoritmo de Maekawa

Maekawa observou que, para um processo entrar numa secção crítica, não é necessário que todos os seus _peers_ concedam o acesso (só precisa de obter permissão de um subconjunto destes).

Este algoritmo associa um **_voting set_** $V_i$ (também chamados **quóruns**) a
cada processo $p_i$ $(i = 1,2,...,N)$, onde $V_i \subseteq \{p_1, p_2, ..., p_N\}$.
Os _sets_ $V_i$ são escolhidos de forma a que, para todo $i,j = 1,2,...,N$:

- $p_i \in V_i$ (atenção que um processo pode pertencer a mais que um _voting set_)
- $V_i \cap V_j \neq \varnothing$ – há pelo menos um membro comum entre quaisquer
  dois _voting sets_
- $|V_i| = K$ – de forma a ser justo, todos os _voting sets_ têm o mesmo tamanho
- Cada processo $p_j$ está contido em $M$ dos _voting sets_ $V_i$

:::tip[Nota]

Maekawa demonstrou que a solução ótima (que minimiza $K$ e permite que os
processos alcancem a exclusão mútua) tem $K \sim \sqrt{N}$ e $M = K$. Como não é
trivial calcular os _sets_ ótimos $R_i$, uma forma simples de derivar estes
_sets_ tal que $|R_i| \sim 2 \sqrt{N}$, é colocar os processos numa matriz
$\sqrt{N}$ por $\sqrt{N}$ e $V_i$ ser a união da linha e coluna que contém $p_i$.

:::

Cada processo pode votar num pedido de acesso à região crítica, mas não pode votar
em mais que um em simultâneo, o que origina a seguinte propriedade:

:::info[Propriedade fundamental]

Em qualquer par de quóruns, há sempre interseção em pelo menos um processo, o que
implica que dois pedidos concorrentes nunca podem ambos receber os votos de quóruns
completos.

:::

```php
K = |V_i| ~ sqrt(N)
On initialization
  state := RELEASED;
  voted := FALSE;

For p_i to enter the critical section
  state := WANTED;
  Multicast request to all processes in V_i;
  Wait until (number of replies received = K);
  state := HELD;

On receipt of a request from p_i at p_j
  if (state = HELD or voted = TRUE)
  then
    queue request from p_i without replying;
  else
    send reply to p_i;
    voted := TRUE;
  end if

For p_i to exit the critical section
  state := RELEASED;
  Multicast release to all processes in V_i;

On receipt of a release from p_i at p_j
  if (queue of requests is non-empty)
  then
    remove head of queue – from p_k, say;
    send reply to p_k;
    voted := TRUE;
  else
    voted := FALSE;
  end if
```

Este algoritmo consegue distribuir a carga, ou seja, não existe um processo que
recebe todos os pedidos, mas tem um grande problema: **sofre de interbloqueio**
(_deadlock-prone_).

:::info[_deadlock-prone_]

Considere 3 processos, $p_1$, $p_2$ e $p_3$, com $V_1 = \{p_1, p_2\}$,
$V_2 = \{p_2, p_3\}$ e $V_3 = \{p_3, p_1\}$. Se os três processos solicitarem
simultaneamente acesso à seção crítica, então é possível que:

- $p_1$ responda a si mesmo e meta $p_2$ em espera
- $p_2$ responda a si mesmo e meta $p_3$ em espera
- $p_3$ responda a si mesmo e meta $p_1$ em espera

Desta forma, cada processo recebeu apenas uma resposta (de dois pedidos), e
nenhum pode prosseguir.

:::

:::tip[Nota]

O algoritmo pode ser adaptado de forma a tornar-se _deadlock-free_. No protocolo
adaptado, os processos colocam na fila de espera pedidos pendentes em ordem
_happened-before_, garantindo assim que o requisito
[ME3](/sd/coordenacao-e-consenso/#algoritmos-de-exclusão-mútua) também seja satisfeito.

:::

### Comparação dos algoritmos

Terminologia:

- _**Bandwith usage**_ : total de mensagens trocadas entre _enter_ /_exit_ por um mesmo cliente
- _**Client delay**_ : tempo para um processo entrar numa secção crítica livre
- _**Synchronization delay**_ : tempo entre _exit_ por um processo e _enter_ por outro que
  estava à espera

|      Algoritmo      |        _Bandwith usage_        | _Client delay_ |      _Synchronization delay_      |
| :-----------------: | :----------------------------: | :------------: | :-------------------------------: |
|    Centralizado     |              $3$               |      $2$       |                $2$                |
| Ricart and Agrawala |        $2 \times (N-1)$        |      $2$       |                $1$                |
|       Maekawa       | $3 \times \text{quorum\_size}$ |      $2$       | $2 \smartcolor{yellow}{\text{*}}$ |

[\*](color:yellow) assumindo que os 2 quóruns se intercetam em apenas 1 processo

Distribuição de carga:

- Centralizado: tudo passa pelo servidor, possível sobrecarga
- Ricart and Agrawala: todos os processos são sobrecarregados
- Maekawa: cada pedido apenas afeta um subconjunto de processos (quórum)

Tolerância a falhas:

- **Todos assumem rede fiável! Nenhum tolera perdas de mensagens**
- Centralizado: não tolera falha do servidor, mas tolera falha de cliente
  em estado `RELEASED`
- Ricart and Agrawala: nenhum processo pode falhar
- Maekawa: cada pedido tolera falhas dos processo que não estejam no quórum

## Referências

- Coulouris et al - Distributed Systems: Concepts and Design (5th Edition)
  - Secções 15.1 e 15.2
- Departamento de Engenharia Informática - Slides de Sistemas Distribuídos (2023/2024)
  - SlidesTagus-Aula03a
