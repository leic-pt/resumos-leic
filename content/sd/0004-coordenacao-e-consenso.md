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
processo no anel, $p_{(i+1) mod N}$.

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

On receipt of a request <Ti, pi> at pj (i != j)
  // Se (já temos acesso) ou (queremos ter e enviámos o pedido há mais tempo),
  // colocamos os pedidos em espera
  if (state = HELD or (state = WANTED and (T, pj) < (Ti, pi)))
  then
      queue request from pi without replying;
  else
      reply immediately to pi;
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

Em (*), o processo com prioridade 0 responde com "OK" apesar de ter feito o pedido
antes, visto que a sua prioridade é inferior à do cliente que pediu acesso.
Desta forma, ambos recebem $N-1 = 2$ OK's e têm acesso "exclusivo" à zona crítica.

:::

### Algoritmo de Maekawa

Este algoritmo funciona a partir da organização de processos em subconjuntos
chamados **quóruns** ($V_0, V_1$), que seguem as seguintes regras:

- Um processo pode pertencer a 1 ou mais **quóruns**
- A interseção de qualquer par de **quóruns** não pode ser vazia
  ($V_i \cap V_j \neq \varnothing$)

Cada processo pode votar num pedido de acesso à região crítica, mas não pode votar
em mais que um em simultâneo, o que origina a seguinte propriedade:

:::info[Propriedade fundamental]

Qualquer par de quóruns se interceta em pelo menos 1 processo, logo 2 pedidos
concorrentes nunca conseguem, cada um, receber os votos de quóruns inteiros.

:::

```php
K = |Vi| ~ sqrt(N)
On initialization
  state := RELEASED;
  voted := FALSE;

For pi to enter the critical section
  state := WANTED;
  Multicast request to all processes in Vi;
  Wait until (number of replies received = K);
  state := HELD;

On receipt of a request from pi at pj
  if (state = HELD or voted = TRUE)
  then
    queue request from pi without replying;
  else
    send reply to pi;
    voted := TRUE;
  end if

For pi to exit the critical section
  state := RELEASED;
  Multicast release to all processes in Vi;

On receipt of a release from pi at pj
  if (queue of requests is non-empty)
  then
    remove head of queue – from pk, say;
    send reply to pk;
    voted := TRUE;
  else
    voted := FALSE;
  end if
```

O algoritmo consegue distribuir a carga, ou seja, não existe um processo que
receba todos os pedidos e fique sobrecarregado, mas tem um grande problema:
**sofre de interbloqueio**.

### Comparação dos algoritmos

Terminologia:

- _**Bandwith usage**_ : total de mensagens trocadas entre enter/exit por um mesmo cliente
- _**Client delay**_ : tempo para um processo entrar em secção crítica livre
- _**Synchronization delay**_ : tempo entre exit por um processo e enter por outro que
  estava à espera

|      Algoritmo      | _Bandwith usage_  | _Client delay_ | _Synchronization delay_ |
| :-----------------: | :---------------: | :------------: | :---------------------: |
|    Centralizado     |        $3$        |       2        |            2            |
| Ricart and Agrawala |    $2 * (N-1)$    |       2        |            1            |
|       Maekawa       | $3 * quorum_size$ |       2        |           2\*           |

\* assumindo que os 2 quóruns se intercetam em apenas 1 processo

Distribuição de carga:

- **Centralizado**: tudo passa pelo servidor, possível sobrecarga
- **Ricart and Agrawala**: todos os processos são sobrecarregados
- **Maekawa: cada pedido**: apenas afeta um subconjunto de processos (**quórum**)

Tolerância a falhas:

- **Todos assumem rede fiável! Nenhum tolera perdas de mensagens**
- **Centralizado**: não tolera falha do servidor, mas tolera falha de cliente
  em estado `RELEASED`
- **Ricart and Agrawala**: nenhum processo pode falhar
- **Maekawa: cada pedido**: tolera falhas dos processo que não estejam no **quórum**

## Referências

- Coulouris et al - Distributed Systems: Concepts and Design (5th Edition)
  - Secções 15.1 e 15.2
- Departamento de Engenharia Informática - Slides de Sistemas Distribuídos (2023/2024)
  - SlidesTagus-Aula03a
