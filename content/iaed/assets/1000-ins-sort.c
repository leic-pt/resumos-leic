
void insertion(Item a[], int left, int right)
{
    int i, j;
    for (i = left + 1; i <= right; i++)
    {
        Item v = a[i]; /*var auxiliar para guardar o valor de a[i]*/
        j = i - 1;
        while (j >= left && less(v, a[j])) /*percorrer o vetor */
        {                                  /* até encontrar o elemento menor que v*/

            a[j + 1] = a[j]; /*percorrer uma casa para a direita */
            j--;
        }
        a[j + 1] = v; /*guarda o valor na casa acima ao valor menor */
    }
}