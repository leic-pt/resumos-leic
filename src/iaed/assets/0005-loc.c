
int potencia(int base, int n)
{
    int p;
    for (p = 1; n > 0; n--) /* O valor de n dentro da função varia,
                            mas fora da função n mantém o seu valor original*/
        p = p * base;
    return p;
}
int main()
{
    int n = 2; /* Valor de n antes de ser executada a função potencia*/
    int base = 6;
    int res;
    res = potencia(base, n);

    printf("%d\n", n);
}
/*  O output da main será 2, pois fora da função potencia o valor de n não mudou */