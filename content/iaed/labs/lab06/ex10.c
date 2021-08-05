int funcao(int n, int m)
{
    int i = 0, count = 0;

    if (n % m == 0)
        return 0;

    while (i < n)
    {
        if (i % m == 0)
            count++;
        i = i + 2;
    }
    return count;
}