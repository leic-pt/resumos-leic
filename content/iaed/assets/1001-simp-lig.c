typedef struct
{
    int value;
    struct node *next;
} node;

node *insertBegin(node *head, int number)
{
    node *x = malloc(sizeof(node));
    x->value = number;
    x->next = head;
    return x;
}

node *insertEnd(node *head, int number)
{
    node *x;
    node *aux;
    if (head == NULL)
    {
        x = (node *) malloc(sizeof(node));
        x->value = number;
        x->next = NULL;
        return x;
    }
    for (x = head; x->next != NULL; x = x->next)
        ;
    aux = (node *) malloc(sizeof(node));
    aux->value = number;
    aux->next = NULL;
    x->next = aux;
    return head;
}

node *insert(node *x, node *t)
{
    t->next = x->next;
    x->next = t;
    return x;
}

node *remove(node *x, node *t)
{
    t = x->next;
    x->next = t->next;
    free(t);
    return x;
}

int length(node *head)
{
    int count = 0;
    node *x = head;
    while (x != NULL)
    {
        count++;
        x = x->next;
    }
    return count;
}

void print(node *head)
{
    node *x = head;
    while (x != NULL)
    {
        printf("%d\n", x->value);
        x = x->next;
    }
}

node *lookup(node *head, int number)
{
    node *t;
    for (t = head; t != NULL; t = t->next)
        if (t->value == number)

            return t;

    return NULL;
}