/*17 segundos para correr 1 milhão de caracteres*/

void lower(char s[])
{
    int i;
    for (i = 0; i < strlen(s); i++) /*sempre a calular o tamanho da string*/
        if (s[i] >= 'A' && s[i] <= 'Z')
            s[i] -= ('A' - 'a');
}

/*0,01 segundos para correr 1 milhão de caracteres*/

void lower(char s[])
{
    int i, len = strlen(s); /*tamanho definido no inicio da função*/
    for (i = 0; i < len; i++)
        if (s[i] >= 'A' && s[i] <= 'Z')
            s[i] -= ('A' - 'a');
}
