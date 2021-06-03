int funcao(int a[], int n)
{
    int i, sum = 0;

    for (i = 0; i < n / 2; i++)
        sum += a[i] + a[n - i - 1];
    return sum;
}