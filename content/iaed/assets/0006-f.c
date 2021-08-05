struct ponto adicionaPonto(struct ponto p1, struct ponto p2)
{
    struct ponto res;

    res.x = p1.x + p2.x; /*Podíamos fazer a soma sobre um dos argumentos*/
    res.y = p1.y + p2.y; /*pois não altera o valor original de p1 e p2 fora da função*/

    return res;
}