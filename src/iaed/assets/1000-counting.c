
#include <stdio.h>
#include <string.h>
#define MAXSIZE 1000
#define M 14
#define SIZE 10

void countSort(int arr[])
{
    int output[SIZE];
    int contador[MAXSIZE] = {0};
    int i;

    int max = 0;

    for (i = 0; i < SIZE; i++)
    {
        if (arr[i] > max)
            max = arr[i];
    }

    for (i = 0; i < SIZE; i++)
    {
        contador[arr[i]]++;
    }

    for (i = 1; i <= max; i++)
    {
        contador[i] += contador[i - 1];
    }

    for (i = SIZE - 1; i >= 0; i--)
    {
        output[contador[arr[i]] - 1] = arr[i];
        contador[arr[i]]--;
    }

    for (i = 0; i < SIZE; i++)
    {
        arr[i] = output[i];
    }
}
int main()
{
    int i;
    int arr[SIZE] = {2, 3, 2, 5, 5, 6, 3, 4, 9, 12};

    countSort(arr);

    printf("Sorted character array is : ");
    for (i = 0; i < SIZE; i++)
    {

        printf("%d ", arr[i]);
    }
    printf("\n");
    return 0;
}