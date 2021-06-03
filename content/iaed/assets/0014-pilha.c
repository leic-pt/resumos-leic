#include <stdio.h>
#include <stdlib.h>
struct node
{
    int value;
    struct node *next;
};
static struct node *top;
void init() /* inicializa a pilha */
{
    top = NULL;
}

void push(int value) /* introduz novo elemento no topo */
{
    struct node *new;
    new = (struct node *)malloc(sizeof(struct node));
    new->value = value;
    new->next = top;
    top = new;
}

int is_empty() /* pergunta se está vazia */
{
    return top == NULL;
}

int pop() /* apaga o topo e retorna o valor apagado */
{
    int value;
    struct node *old;
    if (!is_empty())
    {
        value = top->value;
        old = top;
        top = top->next;
        free(old);
        return value;
    }
    else
        return -1;
}
