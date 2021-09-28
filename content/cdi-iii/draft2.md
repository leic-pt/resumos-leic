A ordem das notas está pela ordem que o prof fez os exs

(Notas 1.1)

- no ex 1.1 2) a parte das séries foi só para demonstrar que se pode fazer (e que de vez em quando é útil), mas não devem pedir

- Dizer sempre o intervalo onde estamos a resolver a equação -> por ex, 1.1 4) (com o x^2 - 1 no denominador)

- Dizer "`intervalo` ou `intervalo`" em vez de uma união de intervalos, porque "uma união de intervalos não é um intervalo"

- No final verificar as soluções obtidas para cada intervalo (tem a ver com módulos dentro de logaritmos e etc)

- Parece-me (?) que nestes (sem valor inicial) não mexemos no c (da primitiva)

(Notas 1.2)

- Aqui sim já vamos mexer no c, porque com o valor inicial podemos obtê-lo (e na solução final _temos_ de ter o c substituído)

- na resposta final, incluir o intervalo que estamos a tratar (p ex no 1.2 3) temos o intervalo ]-1, 1[ porque é y(0), portanto queremos o intervalo que inclui 0))

(Notas 1.4)

a explicação desta parte da matéria anda pela página 108~ das notas teóricas

- este exercício tem a ver com a fórmula y' + a(t)y = b(t) (ou fórmula equivalente); usar o fator de integração ($\mu$) parece ser a forma indicada de o fazer (?); este exercício não contém problemas de valor inicial (aka não é para descobrir o c)

- na parte onde temos (t^2 - 1)/(t^2 + 1), podíamos ser giga smart e ver logo (como o prof fez) ou fazer divisao de polinómios default

- há 2 maneiras de resolver (uma pelo $\mu$ e outra pela fórmula), a primeira parece mais fácil e o próprio prof diz para irmos pela primeira maneira (por ser mais simples e haver menos sítios para nos enganarmos)

(Notas 1.3)

- notar que, no 1.3 5), estamos a primitivar y\*y' com y sendo uma função, não uma variável independente (exemplo que o prof us -> derivar $u^2(x) = 2*u(x)*u'(x)$)

- Notar que na parte das eqs separáveis estamos a usar a derivada da composta

---

Equações Separáveis

$y(t_0) = y_0$
$y' = \frac{g(t)}{f(y)}, f(y_0) \ne 0$, com $f$ e $g$ contínuas numa vizinhança de $y_0$

Então existe uma única solução definita implicitamente por $F(y) = G(t) + c$ com $c=F(y_0) - G(t_0)$

demonstração:

$f(y) y' = g(t)$

Existe $F$ tal que $F'(x) = f(x)$ e $G$ tal que $G'(x) = g(x)$

$F'(y(t)) y'(t) = g(t)$
$(F(y(t)))' = g(t)$

$F(y) = G(t) + c$

$F'(y0) = f(y_0) \ne 0$
$F$ é invertível numa vizinhança de $y_0$

Exemplo:

$$
\frac{\d y}{\d t} = (\cos^2 y) \cos t, y(0) = \pi
$$

$$
\begin{darray}{c}
\frac{1}{cos^2 y} \frac{\d y}{\d t} = \cos t\\
\Leftrightarrow \tan y = \sin t + c
\end{darray}
$$

$$
\begin{darray}{c}
\tan \pi = \sin (0) + c\\
\Leftrightarrow c = 0
\end{darray}
$$

Assim temos que:

$$
\tan y = \sin t
$$

A função tangente não é invertível, pelo que temos de atender ao domínio e à condição $y(0) = \pi$

$y = \pi + \arctan(\sin t), t \in \R$

Exemplo 2:

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = \frac{t}{\cos y} & y(0) = \pi
\end{darray}
$$

$$
\begin{darray}{c}
\cos y \frac{\d y}{\d t} = t\\
\sin y = \frac{t^2}{2} + c\\
\sin \pi = c, \implies c = 0\\
\sin y = \frac{t^2}{2}
\end{darray}
$$

Temos assim como solução $y = \pi - \arcsin \frac{t^2}{2}$, atendendo que o domínio tem de ser tal que a derivada da expressão seja contínua.

Assim, precisamos que $\frac{t^2}{2} \in ]-1, 1[$, ou seja, $t \in ]-\sqrt{2}, \sqrt{2}[$

Exemplo 3:

$$
\begin{darray}{cc}
y^2 \frac{\d y}{\d t} = 3 t^8 & y(0) = 0
\end{darray}
$$

$$
\begin{darray}{c}
\frac{y^3}{3} = \frac{t^9}{3} + c\\
0 = 0 + c \implies c = 0\\
\frac{y^3}{3} = \frac{t^9}{3}
\end{darray}
$$

Temos assim:

$$
\begin{darray}{c}
\frac{y^3}{3} = \frac{t^9}{3}\\
y^3 = t^9\\
y = \sqrt[3]{t^9}\\
y = t^3
\end{darray}
$$

Exemplo 4:

$$
\begin{darray}{c}
\frac{\d y}{\d t} = t(y^2 - 1)\\
\frac{1}{y^2 - 1}\frac{\d y}{\d t} = t\\
\int \frac{1}{2} \left(\frac{1}{y-1}- \frac{1}{y+1} \right) \d y = \frac{t^2}{2} + c\\
\frac{1}{2} \log |\frac{y-1}{y+1}| = \frac{t^2}{2} + c\\
\frac{y-1}{y+1} = \pm e^{t^2 + 2c}\\
\frac{y-1}{y+1} = (\pm e^{2c}) e^{t^2}
\end{darray}
$$

Considerando $k = \pm e^{2c}, k \ne 0$, temos:

$$
\begin{darray}{l}
\frac{y-1}{y+1} = k e^{t^2}\\
y(1- k e^{t^2}) = k e^{t^2} + 1
\end{darray}
$$

$$
\begin{cases}
y(t) = \frac{1+k e^{t^2}}{1-k e^{t^2}}, k \in \R\\
y(t) \equiv -1, \forall t \in \R
\end{cases}
$$

é a solução geral $t \in \R$

FROM GASPA:

- no caso de ter funcoes trigonometricas, ver onde sao invertiveis (principalmente tg), ter cuidado com as vizinhanças

- depois if possible tenta explicar onde é que vai parar o dy/dt ao integrar $(dy/dt * 1/cos²t)$ -> o prof disse que passavamos o dt para o outro lado e depois integrávamos ambos os lados acho eu

- não é só a função que tem de estar bem definida, a derivada também tem (ex arcsin(t²/2), temos de dizer que t²/2 tem de estar no domínio do arco-seno)

- relevante -> equações são lineares quando podem ser escritas tal que y' + a(t)y = b(t)

- não esquecer -> ver o sinal, tem de se olhar para o valor inicial (no caso de se ter uma situação +-) ISTO SÓ QUANDO TEMOS UM VALOR INICIAL, se quisermos a solução geral deixamos o +-
