void distcount(int a[], int left, int right)
{
    int i, j, cnt[M + 1];
    int b[maxN]; /*vetor auxiliar*/
    for (j = 0; j <= M; j++)
        cnt[j] = 0;
    for (i = left; i <= right; i++) /*valor vai sendo cumulativo*/
        cnt[a[i] + 1]++;            /*para indicar os indices na lista ordenada*/
    for (j = 1; j <= M; j++)
        cnt[j] += cnt[j - 1];
    for (i = left; i <= right; i++)
        b[cnt[a[i]]++] = a[i];
    for (i = left; i <= right; i++) /*ordenar*/
        a[i] = b[i - left];
}
