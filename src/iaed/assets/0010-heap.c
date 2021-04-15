void heapsort(Item a[], int l, int r)
{
    buildheap(a, l, r);
    while (r - l > 0)
    {
        exch(a[l], a[r]);
        fixDown(a, l, --r, l);
    }
}

void buildheap(Item a[], int l, int r)
{
    int k, heapsize = r - l + 1;
    for (k = heapsize / 2 - 1; k >= l; k--)
        fixDown(a, l, r, l + k);
}

void fixDown(Item a[], int l, int r, int k)
{
    int ileft, iright, largest = k;
    ileft = l + left(k - l);
    iright = l + right(k - l);
    if (ileft <= r && less(a[largest], a[ileft]))
        largest = ileft;
    if (iright <= r && less(a[largest], a[iright]))
        largest = iright;
    if (largest != k)
    {
        exch(a[k], a[largest]);
        fixDown(a, l, r, largest);
    }
}
