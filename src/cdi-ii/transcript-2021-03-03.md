topologia em r
pontos interiores , exteriores, aderentes, fronteiros a um conjunto

é "sempre" um par: ponto, conjunto

a repsosta tem que ver como o conjutnto "surge" quando? centro bola(s) no ponto:

C é aberto <=> int C = C

sucessões em RN
uma sucessão (notação u_k) de termos em R^n é uma função u: N -> R^n. (n coordenadas)

Exemplos

sucessão de termos em R^3
suas sucessões coordenadas:

diz-se que uma sucessão u_k converge para a in R^n, se por definição

---

portanto u_k -> a é igual a dizer o mesmo para cada uma das suas coordenadas

portanto na dimensão em R^n olhar para as sucessões e confirmar se estas convergenm

Teorema: qualquer sucessão de termos em D(u_k subset D) e
convergente tem o seu limite em D

demonstração: seja u_k subset D e u_k -> a (queremos provar que a \in D)

como a sucessão ...
e como, por hipotese, D contem os limites de todas as U, convergentes então ...

continuidade

def f:D subseteq R^n -> R^m é contínua em a ...

ou seja, forall r > o, exists epislon > 0 : || x-a|| < epsilon =>
|| f(x)-f(a)|| < epsilon

graficamente...

a noção de continuidade migra naturalmente para dim > 1

a continuidade só depende de distância, que tbm migrou para dim > 1

seja f contínua em a e (u_k) subset D com u_k -> a

seja r>0,; como f é contínua em a, \exists epsilon > 0 : || x - a || < \epsilon => || f(x) - f(e) || < r

como u_k -> a então N \in N; k > N => || u_k - a|| < epsilon => || f(u_k) - f(a)|| < r

ou seja, "juntando" A, B, C e D:

f(u_k) -> f(a).
reprocicamente : se f não fosse contínua em a in D então existia r > 0 tal que para qq epsilon > 0
existia ... tal que ... e ...

fazendo epsilon = 1/k com k \in N a sucessão (x_k) \subset D seria tal que |x_k - a || < 1 \ k e ||f(x_2)-f(a)| >= epsilon?
ou seja, x_k -> a mas f(...) -/-> f (a)

TEOREMA uma função f: D subset R^n -> R^m é contínua em a in D

qualquer sucessão (u_k) subset D com u_k -> a implica que f(u_k) -> f(a)

limite
Def: f: D subseteq R^n -> R^m, b in R^m, a in overline D

Diz-se que b é o limite de f quando x -> a (notação b = lim \_(x->a) f(x)),
se, por definição, forall r > 0, exists epsilon > 0: x in B_epsilon (a) =>
f (x) in B_r(b)

ou seja
for all r > 0 exists epsilon > 0: || x - a_n?|| < epsilon => ||f(x)-b||m < r

portanto f é contínua em a <=> lim x->a f(x) = f(a)

lim x-> a f(x)=b <=> para qq sucessão (x_k) subset D com x_k -> a se tem f(x_k) -> b

exemplos (i) em R f(x) = sin x / x for all x in R \ {0}
no entanto existe lim x->0 sen x /x = 1
donde a "coisa" natural a fazer é criar overline f(x) = f(x) x =/= 0 (prolongamento por continuidade de f ao ponto 0)

mas se tivesse feito f_1(x)= ... esta função já não seria contínua em x=0, porque 1 = lim x->0 f_1(x)=lim x->0 sinx/ x =/= ...
