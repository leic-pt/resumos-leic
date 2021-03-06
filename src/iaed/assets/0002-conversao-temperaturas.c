#include <stdio.h>

/* Conversao Fahrenheit-Celsius */

#define INFERIOR 0
#define SUPERIOR 300
#define PASSO 20

int main ()
{
    float fahr, celsius;

    fahr = inferior;
    while (fahr <= superior)
    {
        celsius = (5.0/9.0) * (fahr-32);
        printf("%3.0f\t%6.1f\n", fahr, celsius);
        fahr = fahr + passo;
    }
    return 0;
}
