int main()
{
    char command;
    while (1)
    {
        command = getchar(); /* le o comando */
        switch (command)
        {
        case 'a':
            /* Chama a funcao responsavel pela execucao do comando a */
            break;
        case 'b':
            /* Chama a funcao responsavel pela execucao do comando b */
            break;
        case 'x':
            return 0; /* Termina o programa com sucesso */
        default:
            printf("ERRO: Comando desconhecido\n");
        }
        getchar(); /* le o '\n' introduzido pelo utilizador */
    }
    return -1; /* se chegou aqui algo correu mal*/
}