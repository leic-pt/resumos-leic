#include <stdio.h>

int main()
{
    int n, hours, minutes, seconds, result[6];

    printf("Escreva um numero inteiro em segundos\n");
    scanf("%d", &n);

    hours = n / 3600;
    minutes = ((n % 3600) / 60);
    seconds = ((n % 3600) % 60);

    if (hours < 10)
    {
        if (minutes < 10)
        {
            if (seconds < 10)
            {
                printf("0%d:0%d:0%d", hours, minutes, seconds);
            }
            else
            {
                printf("0%d:0%d:%d", hours, minutes, seconds);
            }
        }
        else
        {
            if (seconds < 10)
            {
                printf("0%d:%d:0%d", hours, minutes, seconds);
            }
            else
            {
                printf("0%d:0%d:%d", hours, minutes, seconds);
            }
        }
    }
    else
    {
        if (minutes < 10)
        {
            if (seconds < 10)
            {
                printf("%d:0%d:0%d", hours, minutes, seconds);
            }
            else
            {
                printf("%d:0%d:%d", hours, minutes, seconds);
            }
        }
        else
        {
            if (seconds < 10)
            {
                printf("%d:%d:0%d", hours, minutes, seconds);
            }
            else
            {
                printf("%d:0%d:%d", hours, minutes, seconds);
            }
        }
    }
    return 0;
}
