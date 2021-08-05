typedef int Item;
/* as barras permitem escrever em varias linhas */
/* o que estamos a definir para não ficar tudo sobreposto */
#define key(A) (A)
#define less(A, B) (key(A) < key(B))
#define exch(A, B)  \
    {               \
        Item t = A; \
        A = B;      \
        B = t;      \
    }

#define compexch(A, B) \
    if (less(B, A))    \
    exch(A, B)
