int a = 0, b = 0, c = 0;
/* Fazem o mesmo */
a++;
++a;

int a = 0;
while (a++ <= 3) 
{
... /* O ciclo é executado 4 vezes */
}

int a = 0;
while (++a <= 3) 
{
... /* O ciclo é executado 3 vezes */
}
