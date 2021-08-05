void shellsort(Item a[], int left, int right)
{
    int i, j, h;
    for (h = 1; h <= (right - left) / 9; h = 3 * h + 1)
        ;
    for (; h > 0; h /= 3)
        for (i = left + h; i <= right; i++)
        {
            Item v = a[i];
            int j = i;
            while (j >= left + h && less(v, a[j - h]))
            {
                a[j] = a[j - h];
                j -= h;
            }
            a[j] = v;
        }
}
