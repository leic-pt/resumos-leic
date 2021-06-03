while (fahr <= superior)
    {
        celsius = (5.0/9.0) * (fahr-32);
        printf("%3.0f\t%6.1f\n", fahr, celsius);
        fahr = fahr + passo;
    }

vs. 

for (fahr = INFERIOR; fahr <= SUPERIOR; fahr = fahr + PASSO)
    {
        celsius = (5.0/9.0) * (fahr-32);
        printf("%3.0f\t%6.1f\n", fahr, celsius);
    }