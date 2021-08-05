#include <stdio.h>

typedef struct
{
	float real;
	float imaginary;
} Complex;

int main()
{
	Complex a = {0}, b = {0};
	char c;
	scanf("%f%c%fi", &a.real, &c, &a.imaginary);
	a.imaginary = c == '-' ? -a.imaginary : a.imaginary;
	scanf("%f%c%fi", &b.real, &c, &b.imaginary);
	b.imaginary = c == '-' ? -b.imaginary : b.imaginary;

	printf("%.2f%+.2fi", a.real + b.real, a.imaginary + b.imaginary);

	return 0;
}
