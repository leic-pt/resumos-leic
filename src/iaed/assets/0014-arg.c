int main(int argc, char *argv[])
{
    int i;
    link head = NULL;
    /* inserir todos os elementos na lista*/
    for (i = 1; i < argc; i++)
        head = insertEnd(head, argv[i]);
    print(head); /* imprime toda a lista*/
    /* remover o elemento na posição i (lido do stdin) */
    scanf("%d", &i);
    head = delete (head, argv[i]);
    print(head); /* voltamos a imprimir toda a lista */
    return 0;
}