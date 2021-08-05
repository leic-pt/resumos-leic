int funcao(int n, int m)
{
    int i = 0, count = 0;

    while (i < n * n)
    {
        if (i % m == 0)
            count++;
        i++;
    }
    return count;
}