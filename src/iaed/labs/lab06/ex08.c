int funcao(int a[], int n, int b[], int m)
{
    int i = n - 1, count = 0;

    while (i > 0)
    {
        for (j = 0; j < m; j++)
        {
            if (a[i] == b[j])
                count++;
        }
        i = i / 2;
    }
    return count;
}