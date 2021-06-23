void copia(char destino[], char origem[])
{
    int i;
    for (i = 0; origem[i] != '\0'; i++)
        destino[i] = origem[i];
    destino[i] = '\0';
}
