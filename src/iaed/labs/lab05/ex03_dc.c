#include <stdio.h>

#define NAME_LENGTH 11
#define MAX_STOCKS 1000

typedef struct
{
	char name[NAME_LENGTH];
	float value;
	float percent_annual_income;
} Stock;

int main()
{
	Stock stocks[MAX_STOCKS];
	Stock stock;
	int i, n;
	float max_income, income;
	scanf("%d", &n);

	for (i = 0; i < n; ++i)
	{
		stock = stocks[i];
		scanf("%s %f %f", stock.name, &stock.value, &stock.percent_annual_income);
		stocks[i] = stock;
	}

	stock = stocks[0];
	max_income = stock.percent_annual_income * stock.value / 100;

	for (i = 0; i < n; ++i)
	{
		income = stocks[i].percent_annual_income * stocks[i].value / 100;
		if (income > max_income)
		{
			stock = stocks[i];
			max_income = income;
		}
	}

	printf("%s %.2f %.2f\n", stock.name, stock.value, stock.percent_annual_income);

	return 0;
}