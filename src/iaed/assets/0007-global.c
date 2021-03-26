int global; /*global = 0*/

int contador()
{
    static int i = 1; /*Só inicializa i a 1 */
                      /*Depois de inicializada esta instrução é ignorada */
    return i++;
}
int main()
{
    int a = global + contador();
    int b = contador();
    int c = contador();

    printf("a = %d, b = %d, c = %d\n", a, b, c);
    return 0; /* a = 1, b = 2, c = 3 */
}
