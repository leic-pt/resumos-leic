#include <stdio.h>
enum meses
{
    JAN = 1,
    FEV, /* = 2 */
    MAR, /* = 3 */
    ABR, /* ... */
    MAI,
    JUN,
    JUL,
    AGO,
    SET,
    OUT,
    NOV,
    DEZ /* = 12 */
};
int main()
{
    enum meses mes;

    mes = FEV;
    mes++;

    if (mes == MAR)
        puts("Estamos em Março");
    /*Escreve a string*/

    return 0;
}