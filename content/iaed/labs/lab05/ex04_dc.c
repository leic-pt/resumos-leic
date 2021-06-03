#include <stdio.h>

#define MAXDIM 100

char get_winner(char tab[MAXDIM][MAXDIM], int h, int v, int d);

int main()
{
	char tab[MAXDIM][MAXDIM] = {0};
	int d, n, i, h, v, xWon = 0, oWon = 0;

	scanf("%d", &d);
	scanf("%d", &n);

	for (i = 0; i < n; ++i)
	{
		char c;
		scanf("%d %d %c", &h, &v, &c);
		tab[h][v] = c;
	}

	for (h = 0; h < d; ++h)
	{
		for (v = 0; v < d; ++v)
		{
			char c;
			c = get_winner(tab, h, v, d);
			if (c == 'x')
			{
				xWon = 1;
			}
			if (c == 'o')
			{
				oWon = 1;
			}
		}
	}

	if (xWon == oWon)
	{
		printf("?\n");
	}
	else if (xWon)
	{
		printf("x\n");
	}
	else
	{
		printf("o\n");
	}

	return 0;
}

char get_winner(char tab[MAXDIM][MAXDIM], int h, int v, int d)
{
	if (v + 2 < d && tab[h][v] && tab[h][v] == tab[h][v + 1] && tab[h][v] == tab[h][v + 2])
	{
		return tab[h][v];
	}

	if (h + 2 < d && tab[h][v] && tab[h][v] == tab[h + 1][v] && tab[h][v] == tab[h + 2][v])
	{
		return tab[h][v];
	}

	if (v + 2 < d && h + 2 < d && tab[h][v] && tab[h][v] == tab[h + 1][v + 1] && tab[h][v] == tab[h + 2][v + 2])
	{
		return tab[h][v];
	}

	if (v + 2 < d && h - 2 >= 0 && tab[h][v] && tab[h][v] == tab[h - 1][v + 1] && tab[h][v] == tab[h - 2][v + 2])
	{
		return tab[h][v];
	}

	return 0;
}