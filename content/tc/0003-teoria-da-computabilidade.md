---
title: Teoria da Computabilidade
description: 'Teoria da Computabilidade'
path: /tc/teoria-da-computabilidade
type: content
---

# Teoria da Computabilidade

```toc

```

## Computabilidade e decibilidade

Os problemas relevantes que estudamos são problemas de decisão e reconhecimento de linguagens, ou cálculo de funções.
É então relevante definir formalmente o que significa reconhecer/decidir uma linguagem e calcular uma função.

Para um alfabeto $\Sigma$, uma linguagem $L \subset \Sigma^*$ e uma função $f: \Sigma^* \to \Sigma^*$.  
A linguagem $L$ diz-se **reconhecível** se existe uma máquina de Turing $M$ com alfabeto de entrada/saída $\Sigma$ tal que $L_{ac}(M) = L$.
Denotamos por $\mathcal{R}^\Sigma$ o conjunto de todas as linguagens reconhecíveis sobre o alfabeto $\Sigma$.  
A linguagem $L$ diz-se **decidível** se existe uma máquina de Turing $M$ com alfabeto de entrada/saída $\Sigma$ tal que $L_{ac}(M) = L$ e $L_{rj}(M) = \overline{L}$.
Denotamos por $\mathcal{D}^\Sigma$ o conjunto de todas as linguagens decidíveis sobre o alfabeto $\Sigma$.  
A função $f$ diz-se **computável** se existe uma máquina de Turing $M$ com alfabeto de entrada/saída $\Sigma$ tal que $f = \phi_M$.
Denotamos por $\mathcal{C}^\Sigma$ o conjunto de todas as funções computáveis sobre o alfabeto $\Sigma$.

### Propriedades

:::tip[]

Seja $\Sigma$ um alfabeto e $L, L_1, L_2 \subset \Sigma^*$ linguagens decidíveis.
Então,

1. $\emptyset$,
2. $\Sigma^*$,
3. $\overline{L}$
4. $L_1 \cap L_2$,
5. $L_1 \cup L_2$,
6. $L_1 \backslash L_2$
   são linguagens decidíveis.

:::

:::details[Prova]

(1) Basta considerar que a máquina de Turing que ao receber qualquer input vai para o estado de rejeição reconhece $\emptyset$;

(2) Basta considerar que a máquina de Turing que ao receber qualquer input vai para o estado de aceitação reconhece $\Sigma^*$;

(3) Se $M$ for a máquina de Turing que decide $L$, basta trocar os estados de aceitação e rejeição para decidir $\overline{L}$.

(4) Sejam $M_1$ e $M_2$ máquinas de Turing que reconhecem $L_1$ e $L_2$, respetivamente.
Considere-se a máquina de Turing $M$ com duas fitas.
A máquina começa por copiar o input para a segunda fita.
Então, executa $M_1$ na fita 1:

- se $M_1$ aceitar o input, $M$ termina no estado de aceitação; caso contrário, executa $M_2$ na fita 2:
- se $M_2$ aceitar o input, $M$ termina no estado de aceitação; caso contrário, $M$ termina no estado de rejeição.

(5) Basta observar que $L_1 \cup L_2 = \overline{\overline{L_1} \cap \overline{L_2}}$.
Como $L_1$ e $L_2$ são decidíveis, $\overline{L_1}$ e $\overline{L_2}$ também o são.
Então, segundo 4., $\overline{L_1} \cap \overline{L_2}$ também é decidível e, mais uma vez, $\overline{\overline{L_1} \cap \overline{L_2}}$.

(6) Basta observar que $L_1 \backslash L_2 = L_1 \cap \overline{L_2}$.
Como $L_2$ é decidível, $\overline{L_2}$ é decidível e segundo 4. $L_1 \cap \overline{L_2}$ é decidível.

:::

:::tip[]

Seja $\Sigma$ um alfabeto e $L, L_1, L_2 \subset \Sigma^*$ linguagens reconhecíveis.
Então,

1. $\emptyset$,
2. $\Sigma^*$,
3. $L_1 \cap L_2$,
4. $L_1 \cup L_2$,
   são linguagens reconhecíveis.

:::

:::details[Prova]

(1) $\emptyset$ é decidível e todas as linguagens decidíveis são reconhecíveis;

(2) $\Sigma^*$ é decidível e todas as linguagens decidíveis são reconhecíveis;

(3) Sejam $M_1$ e $M_2$ máquinas de Turing que reconhecem $L_1$ e $L_2$, respetivamente.
Definimos a máquina de Turing $N$ que escolhe não deterministicamente entre executar $M_1$ e $M_2$.
Se a computação de uma destas máquinas terminar em aceitação, $N$ termina também em aceitação.
$N$ reconhece $L_1 \cup L_2$ pelo que esta linguagem é reconhecível.

(4) Sejam $M_1$ e $M_2$ máquinas de Turing que reconhecem $L_1$ e $L_2$, respetivamente.
Considere-se a máquina de Turing $N$ com duas fitas que, ao receber $\omega \in \Sigma^*$ como input, copia $\omega$ para a fita 2 e, de seguida, executa alternadamente um passo da execução de $M_1$ na fita 1 e um passo da execução de $M_2$ na fita 2.
Se uma das execuções terminar, então $N$ prossegue a execução da outra máquina no caso de ter terminado aceitando, e $N$ rejeita em caso contrário.
Se a execução da outra máquina terminar, então $N$ aceita no caso de ter terminado aceitando, e rejeita em caso contrário.
A máquina $N$ reconhece $L_1 \cap L_2$ pelo que esta linguagem é reconhecível.

:::

:::tip[]

Se $L_1$ for reconhecível e $L_2$ for decidível, então $L_1 \backslash L_2$ é reconhecível.

:::

:::details[Prova]

Se $L_2$ é decidível, $\overline{L_2}$ é também decidível e, consequentemente, reconhecível.
Como vimos a cima, se $L_1$ e $\overline{L_2}$ são reconhecíveis, então $L_1 \cap \overline{L_2} = L_1 \backslash L_2$ é reconhecível.

:::

:::tip[NOTA]

Note-se como já não é verdade que se $L$ é reconhecível então $\overline{L}$ também o é: basta que haja uma palavra em $\overline{L}$ cuja computação não termine na máquina que reconhece $L$ para que isto não seja verdade.

:::
