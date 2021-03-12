...

O que é $o(x) x\to 0$? É simplesmente uma função de $x$ que dividida por $x$ tende para $0$ quando $x \to 0$.

ex:

$f(x) = 0$, $\frac{f(x)}{x}=\frac{0}{x}=0\to 0$

$f(x) = x^2$, $\frac{f(x)}{x}=\frac{x^2}{x}=x\to 0$

$f(x) = x\sin x$, $\frac{f(x)}{x}=\frac{x\sin x}{x}=\sin x \to 0$

$g(x) = x$, $\frac{g(x)}{x}=\frac{x}{x}=1 \not\to 0$ esta não é $o(x)$

$f$ é diferenciável em $a$ <=> $f(a+h)-f(a)-f'(a)h=o(h)$
$f(a+h)-f(a)=f'(a)h+o(h)$
A variação da função quando me afasto $h$ de $a$
é proporcional a $h$ a menos de $o(h)$ quando $h\to 0$

Observação: A variável aqui é o $h$ pois o $f$ e o $a$ foram fixados no principio da conversa.

Temos aqui uma função $L_a(h) = f'(a)h$ (constante)
Que tipo de função é esta?

Isto é uma transformação linear $L_a: \R \to \R$
Espaço vetorial de dimensão 1

Então, estamos prontos para a definição em dim > 1.

$f: D \subseteq \R^n \to \R^m$ é diferenciável em $a \in D$ <=>
existe transformação linear $L_a: \R^n\to \R^m$ tal que (transformação linear de derivada f em a)
$f(a+h)-f(a)=L_a(h)+o(h)$ quando $h\to 0$

Relembrar da Álgebra Linear:

1. Uma transformação linear $T:\R^n \to \R^m$ é univocamente representada
   por uma matriz (m\*n) uma vez que se fixem bases em $\R^n$ e $\R^m$.

2. Quais são as bases preferidas?

- A base canónica ...
- Alguma base que torne a matriz diagonal (ou "quase")

Por defeito, usamos aqui a base canónica.

3. $T:\R \to \R$ é representada pela matriz $[c]$ onde $c$ é constante.

Exemplos de funções diferenciáveis:

1. Função constante $f:\R^n \to \R^m$, $x\to (2,2,\dots, 2)$;
   seja $a \in \R^n$ $a = (a_1, a_2,\dots, a_n)$, $\vec h \in \R^n$ $\vec h=(h_1,h_2,\dots, h_n)$

\$f(a+h) - f(a) = (2,2,\dots, 2) - (2,2,\dots, 2) = (2-2,2-2,\dots,2-2) = (0,0,\dots,0)= ...

Portanto como $a \in \R^n$ é genérico, então $f$ é diferenciável e a derivada em $a$ é $L_a = \tilde? \tilde? 0$

2. Função identidade $f: \R^n\to \R^n$ $x \to x$
   Seja $a \in \R^n$, $\vec h \in \R^n$

\$f(a+h)-f(a) = a+h-a=h=(h_1,h_2,\dots,h_n)=...

Portanto $f$ é diferenciável em $\R^n$; a derivada em qualquer $a \in \R^n$ é a identidade.

3. Função projeção $p_1: \R^n\to \R $ $x=(x_1,x_2,\dots, x_n)\to x_i$
   seja $a \in \R^n, h\in \R^n$

p_i(a+h)-p_i(a)=a_i+h_1-a_i=h_1=(0, \dots, 0, 1, 0, \dots, 0)(h_1,h_2,\dots,h_i,\dots,h_n)+(0,0,\dots,0)

Portanto as funções projeção são diferenciáveis

Matrix jacobiana?

Obs: a matriz que representa a transformação linear de derivada relativamente às bases canónicas chama-se matriz jacobiana.

4. $f: \R^2 \to \R f(x,y) = x^2+y^2, a = (a_1, a_2) h=(h_1, h_2)$ é dif em $a$? TPC

---

No entanto, por vezes poderá ser importante calcular derivadas segundo direções especiais - ou saber quais são essas direções especiais. Por exemplo, dada uma função $f$ e um ponto $a$ do seu domínio, ao longo de que direção e sentido me devo afastar de $a$ de forma a sentir a variação máxima da função. ou mínima?

Def.
A derivada de $f: \R^n \to \R$ no ponto $a \in \R^n$ segundo o vetor $v \in\R^n$ é o limite (se existir)

$$
\lim_{t\to 0} \frac{f(a+tr)-f(a)}{t} (=\frac{\partial t}{\partial r}(a))
$$

obs:

1. convem por vezes que $||v|| = 1$ !

2. se $v = \vec{e^i}=...$ então ...
   chamada derivada parcial em ordem a $x_1$ em $a$.

Exemplos:

$f(x, y)=x^2y v=(1,2)$, ...

...

Proposição:
Se $f$ é diferenciável em $a$ (isto é, se existe transformação linear $L_a: \R^n\to \R^m$ tal que $f(a+h)-f(a)=L_a(h)+o(h)$)

então:

1. $f$ é contínua em $a$
2. para todo o $v \in \R^n\backslash \{\vec 0 \}$ existe ...

demonstração 1:
$f(a+h)=f(a)+L_a(h)+o(h), h\to 0$, então

$$
f(a)+ \lim_{h\to \vec 0} L_a(h)+\lim_{h\to \vec 0} \frac{o(h)}{||h||}||h||
=f(a)+L(\lim\_{h\to \vec 0} (h)) + \vec 0 =
= f(a) + \vec 0 + \vec 0= f(a)
$$

i.e. $f$ é contínua em $a$.

demonstração 2:

...

Corolário:

Se a função $f$ é diferenciável em $a$ então a transformação linear derivada é única.
Fixadas as bases canónicas, a matriz que a transformação linear representa é chamada jacobiana e tem por entradas as derivadas parciais em $a$.

...
matriz jacobiana de $f$ em $a$

demonstração:

como vimos $L_a(\vec v) = ...$, portanto é única
Fixadas as bases canónicas, $L_a(\vec {e_i}) = ...$
i-ésima coluna da matriz acima
