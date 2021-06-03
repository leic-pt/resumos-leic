int atoi(char s[]) /*Função que recebe uma stirng de digitos todos juntos 
                    e devolve o inteiro correspondente*/
{
    int i, n;
    n = 0;

    for (i = 0; s[i] >= '0' && s[i] <= '9'; i++)
        n = 10 * n + (s[i] - '0');

    return n;
}