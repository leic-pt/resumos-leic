#include <stdio.h>

#define ALUNOS 10
#define DISCIPLINAS 5

long score_disciplina(int disciplina, int valores[ALUNOS][DISCIPLINAS]);

long score_aluno(int aluno, int valores[ALUNOS][DISCIPLINAS]);

int main()
{
	int valores[ALUNOS][DISCIPLINAS] = {0};
	int i, n;
	int id_aluno, id_disciplina, entusiasmo;
	long l, score_max;
	scanf("%d", &n);

	for (i = 0; i < n; ++i)
	{
		scanf("%d%d%d", &id_aluno, &id_disciplina, &entusiasmo);
		valores[id_aluno][id_disciplina] = entusiasmo;
	}

	id_disciplina = 0;
	score_max = score_disciplina(id_disciplina, valores);
	for (i = 1; i < DISCIPLINAS; ++i)
	{
		l = score_disciplina(i, valores);
		if (l > score_max)
		{
			id_disciplina = i;
			score_max = l;
		}
	}

	id_aluno = 0;
	score_max = score_aluno(id_aluno, valores);
	for (i = 1; i < ALUNOS; ++i)
	{
		l = score_aluno(i, valores);
		if (l > score_max)
		{
			id_aluno = i;
			score_max = l;
		}
	}

	printf("%d\n%d\n", id_disciplina, id_aluno);

	return 0;
}

long score_disciplina(int disciplina, int valores[ALUNOS][DISCIPLINAS])
{
	int i;
	long result = 0;
	for (i = 0; i < ALUNOS; ++i)
	{
		result += valores[i][disciplina];
	}

	return result / ALUNOS;
}

long score_aluno(int aluno, int valores[ALUNOS][DISCIPLINAS])
{
	int i;
	long result = 0;
	for (i = 0; i < DISCIPLINAS; ++i)
	{
		result += valores[aluno][i];
	}

	return result / DISCIPLINAS;
}