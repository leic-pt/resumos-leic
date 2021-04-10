int search(int a[], int n, int elem)
{
    int left = 0, right = n - 1;
    int med;

    while (left <= right)
    {
        int med = (left + right) / 2;
        if (a[med] == elem)
            return med;
        else if (a[med] < elem)
            left = med + 1;
        else
            right = med - 1;
    }
    return -1;
}