Recapitulando: temos falado de limites e continuidade

$$
\lim_{x\to a} = b \iff \forall r > 0, \exists \epsilon > 0: || x-a|| < \epsilon \implies || f(x) - b || < r
$$

$f$ é contínua em $a$ nos termos $b$ para ...?

em particular, $f$ é contínua em $a$ \iff existe \lim\_{x \to a} f(x) = f(a)

listámos propriedades do limite face à soma, multiplicação, divisão, multiplicação por escalar, etc...
f(x) <= g(x) \forall x \in D \implies \lim*{x\to a} f(x) \leq \lim*{x\to a} g(x) \$ se existem

f(x) \leq g(x) \leq h(x) x \in D e existe ...

lim*{x\to a} f(x) = 0 \iff \lim*{x\to a} |(x)| = 0

## limites direcionais

em $\R^2$ em particular

quando calculo limite ...
posso "para experimentar" tomar limite ao longo de retas y=mx

se \lim*{(x,y)\to (0,0)\\ y=mx} f(x,y) = \lim*{x \to 0} f(x,mx)= ...feitos os cálculos ...= F(m)
ou seja depende explicitamente de m então o limite não existe, pois o limite quando existe é único

e limites segundo família de quadráticas

\lim*{(x,y)\to (0,0)\\ y=kx^x} = \lim*{x\to 0} f(x, kx^2)

se der um k, então o limite não existe.

Exemplo:

f(x,y) = \frac{x^2y}{x^4+y^2}

\lim*{(x,y) -> (0,0)\\ y =kx^2} f(x,y) = \lim*{x\to 0} \frac{x^2\cdot kx^2}{x^4+(kx^2)^2}=
\lim{x\to 0} \frac{x^4\cdot k}{x^4(1+k^2)}=\lim\_{x\to 0} \frac{k}{1+k^2} = \frac{k}{1+k^2}
portanto depende de $k$, logo não existe limite.

No entanto, se houvesse limite, por ex, \pi não se podia tirar nenhuma conclusão.

Esta é uma boa estratégia quando queremos provar que o limite não existe.

Exemplo 2:

\lim\_{(x,y)\to (0,0)} = \frac{\sin(x^2+2y^2)+x^3y^2}{x^2+2y^2}= ...

\lim*{(x,y)\to (0,0)} = \frac{\sin(x^2+2y^2)}{x^2+2y^2} = 1 (porque de CDI 1 sabemos que \$\lim*{t\to 0} \frac{\sin(t)}{t} = 1$ e $x^2+2y^2 \to 0$ em $(x,y) \to (0,0)$, portanto "$t=x^2+2y^2\$").

\lim\_{(x,y)\to (0,0)} = \frac{x^3y^2}{x^2+2y^2}

grau do polinómio é 5 = 3+2
o grau deste polinómio é 2

$$
0 \leq \left|\frac{x^3 y^2}{x^2+2y^2}\right| = | x^3 | \frac{y^2}{x^2+2y^2}\leq
|x^3| \frac{2y^2}{x^2+2y^2} \leq |x^3| \frac{x^2+2y^2}{x^2+2y^2} = |x^3| \to 0
$$

função contínuia
|poli| = g \circ p (x), g(t) = |t|

logo, $|\frac{x^3y^2}{x^2+2y^2}| \to 0 \implies \frac{x^3y^2}{x^2+2y^2} \to 0$

portanto, \lim\_{(x,y)\to (0,0)} \frac{\sin(x^2+2y^2)+x^3y^2}{x^2+2y^2} = \frac{\sin(x^2+2y^2)}{x^2+2y^2} + \frac{x^3y^2}{x^2+2y^2} = 1 + 0 = 1

---

## Teorema (Bolzano -Weierstrass)

$D \subseteq \R^n$ é compacto (fechado e limitado) $\iff$ toda a sucessão de pontos em $D$ contém uma sub-sucessão convergente para um ponto de $D$.

Demonstração:

\implies

seja $x_k = (x_{k1}, x_{k2}, \dots, x_{kn})\in D \forall k\in \N$

Como $ é limitado então existe um $M \in \R^+$ tal que
$M^2 \geq ||x*k||^2 = |x*{k1}|^2+ |x*{k2}|^2 + \dots + |x*{kn}|^2 \implies
|x\_{ki}| \leq M \forall k \in \N$ (para $i = 1, \dots, n\$)

portanto ($x_{k1} \subset \R$) é limitada; logo, pelo Teorema de Bolzano Weierstrass em $\R$, existe sua subsucessão convergente. ($\x_{\alpha_k 1} \to x_1$);

Portanto $x_{\alpha_k 2} \subset \R$ é limitada portanto exsite sua subsucessão $x_{...} \to x_2$

portanto, $(...) \subseteq \R$ é limitada ...

\vdots

portanto $(...) \subseteq \R$ é limitada donde existe sua subsucessão convergente. $x_{\alpha^{n}_{k} n} \to x_n$

logo, $x_{\alpha^{n}_{k}} \subset \R^n$ é tal que $... \to (x_1,x_2,\dots,x_n)\in \overline D = D $ (porque D é fechado por hipótese)

logo se $D$ é compacto, toda a sucessão em $D$ tem subsucessão convergente
para ponto em $D$.

(pergunta) o que é o alfa? "o alfa é a subsucessão"

sucessão / subsucessões

\Leftarrow

i) Dada uma sucessão $(x_k) \subset D$ e convergente, $\lim x_k = a, a \in \overline D$ mas existe sua subsucessão convergente para ponto de $D$ (por hipótese)
Esse subsucessão converge para $a$ que portanto pertence a $D$.
Logo $D$ é fechado.

ii) Suponhamos que $D$ não é limitado então para cada $k \in \N$
existe $x_k \in D \backslash B_k(\vec 0)$, $\forall k \in \N$

portanto $||x_k|| \geq k \to +\infty$
$ \implies ||x_k|| \to +\infty$
$ \implies (x_k)$ não converge

e qualquer sua subsucessão não converge

Logo, $D$ é limitado

Exemplo de sucessão limitada mas não convergente

u_k = (r_k, (-1)^k + \frac 1k) c/ r_k = k % 3 \in \{0,1,2\}

primeira parcela: 0 \leq ... \leq 2
segunda parcela: -1 \leq ... \leq 2

$(u_k)$ é limitada mas não converge

se $k$ par $(-1)^k+\frac{1}{k}\to 1$
se $k$ ímpar $(-1)^k+\frac{1}{k}\to -1$
diverge

$u_{3k}$ = (r\_{3k}, (-1)^{3k}+\frac{1}{3k}) = (0, (-1)^{3k}+\frac{1}{3k})$
$3k\$ par ou ímpar?

\$u\_{6k}\$ = (r\\_{6k}, (-1)^{6k}+\frac{1}{6k}) = (0, {(-1)^2}^{3k}+\frac{1}{6k})\to (0,1)\$

portanto $(u_{6k})$ é subsucessão convergente da sucessão limitada $(u_k)$.

---

Seja f: D \subset \R^n \to \R^m contínua com $D$ compacto

Seja ainda $(v_k) \subset f(D)$; então existe $(u_k) \subset D$ tal que
$v_k = f(u_k) \forall k \in \N$

Como $D$ é compacto $(u_k)$ tem subsucessão convergente $(u_\alpha_k)$ com
$\lim_{u_\alpha_k}=a\in D$
confrontar teorema de bolzano-weirestrass

donde porque $f$ é contínua tem-se
$f(a)=\lim_{k\to \infty} f(u_\alpha_k) = \lim_{k\to \infty} v_alpha_k$
donde $(v_k) \subset f(D)$ tem subsucessão convergente para ponto de $f(D)$

Como $(v_k)$ é genérica, então $f(D)$ é compacto pelo Teorema de Bolzano Weirestrass

Conclusão:

Teorema

As funções contínuas aplicam (conjuntos) compactos em compactos

Teorema de Weirestrass

Para funções escalares $f:\D\subset \R^n \to \R^m$ mas $m=1$

Funções contínuas em compactos têm máximo e mínimo
