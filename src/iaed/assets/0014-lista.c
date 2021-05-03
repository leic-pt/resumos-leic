#include <stdio.h>
#include <stdlib.h>

struct node
{
    char text;
    struct node *next;
};
typedef struct node Node;
typedef struct node *link;

int main(int argc, char *argv[])
{
    int i;
    link head = NULL;
    /* inserir todos os elementos na lista*/
    for (i = 1; i < argc; i++)
        head = insertEnd(head, argv[i]);
    print(head); /* imprime toda a lista*/
    /* remover o elemento na posição i (lido do stdin) */
    scanf("%d", &i);
    head = delete (head, argv[i]);
    print(head); /* voltamos a imprimir toda a lista */
    return 0;
}

/* Função auxiliar responável por alocar memória para 
tudo o que é necessário para um novo nó */

link NEW(char *buffer)
{
    link x = (link)malloc(sizeof(struct node)); /*reservar memória para novo nó*/
                                                /*reservar memória para nova string*/
    x->text =
        (char *)malloc(sizeof(char) * (strlen(buffer) + 1));

    strcpy(x->text, buffer);
    x->next = NULL;
    return x;
}

link insertBegin(link head, char *text)
{
    link x = NEW(text);
    x->next = head;
    return x; /*retorna a nova "head"*/
}

link insertEnd(link head, char *text)
{
    link x;
    if (head == NULL)
        return NEW(text);
    for (x = head; x->next != NULL; x = x->next) /*loop para chegar ao fim da lista*/
        ;
    x->next = NEW(text); /*recorrer à função new*/
    return head;
}

link lookup(link head, char *text)
{
    link t;
    for (t = head; t != NULL; t = t->next)
        if (strcmp(t->text, text) == 0)
            return t;
    return NULL;
}

void print(link head)
{
    link t;
    for (t = head; t != NULL; t = t->next)
        printf("s\n", t->text);
}

link delete (link head, char *text)
{
    link t, prev;
    for (t = head, prev = NULL; t != NULL;
         prev = t, t = t->next)
    {
        if (strcmp(t->text, text) == 0)
        {
            if (t == head)
                head = t->next;
            else
                prev->next = t->next;
            free(t->text);
            free(t);
            break;
        }
    }
    return head;
}

link insertBegin(link head, char *text)
{
    link x = NEW(text);
    x->next = head;
    return x;
}

void insertBegin(link *headptr, char *text) /*alternativa*/
{
    link x = NEW(text);
    x->next = *headptr;
    *headptr = x;
}

void FREEnode(link t)
{
    free(t->text);
    free(t);
}