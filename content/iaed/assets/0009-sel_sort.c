void SelectionSort(int a[], int left, int right)
{
    int i, j;
    for (i = left; i < right; i++)
    {
        int aux, min = i;
        for (j = i + 1; j <= right; j++) /*procura o menor*/
            if (a[j] < a[min])
                min = j;

        aux = a[i]; /*troca elementos*/
        a[i] = a[min];
        a[min] = aux;
    }
}