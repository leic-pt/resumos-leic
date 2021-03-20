#include <stdio.h>

#define DIM 100

int main() 
{
    int c, i;
    char origem[DIM], destino[DIM];

    for (i = 0; i < DIM-1 && (c=getchar()) != EOF && c != '\n'; i++)
        origem[i] = c;

    origem[i] = '\0';

    i=0;

    while((destino[i] = origem[i]) != '\0')
        i++;

    printf("Origem: %s\nDestino: %s\n", origem, destino);
    
    return 0;
}