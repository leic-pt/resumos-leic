#define key(A) (A->value)
#define eq(A, B) (A == B)
#define less(A, B) (A < B)
#define more(A, B) (A > B)

typedef struct node *link;

struct node
{
    Item item;
    link next;
};

typedef int Key;

typedef struct number
{
    int value;
} * Item;

int M;

/*Add to beggining of the list*/
link push(link head, Item i)
{
    link aux = NEWNode(i, head);
    return aux;
}

link remove_elem(link head, Key k)
{
    link current, prev;
    for (current = head, prev = NULL; current; prev = current, current = current->next)
    {
        if (eq(k, key(current->item)))
        {
            if (current == head)
                head = current->next;
            else
                prev->next = current->next;
            DELETENode(current);
            return head;
        }
    }
    return head;
}

Item search_list(link head, Key key)
{
    link current;
    for (current = head; current; current = current->next)
    {
        if (eq(key(current->item), key))
            return current->item;
    }
    return NULL;
}

void show_list(link head)
{
    link current;
    printf("|HEAD|");
    for (current = head; current; current = current->next)
    {
        printf("--");
        visitItem(current->item);
        printf("--");
    }
    printf("|TAIL|\n");
}

void destroy_list(link head)
{
    if (!head)
        return;
    link current, aux;
    for (current = head, aux = head->next; current; aux = current->next, DELETENode(current), current = aux)
    {
    }
}

link *HASHinit(int max)
{
    int i;
    M = max;
    link *heads = (link *)malloc(M * sizeof(link));
    for (i = 0; i < M; i++)
    {
        heads[i] = NULL;
    }
    return heads;
}

int hash(int value, int M)
{
    return value % M;
}

/*
Hash for strings
int hash(char *v, int M){
	int h = 0, a = 127;
	for(;*v != '\0'; v++) {
		h =  (a*h + *v) % M;
	}
	return h;
}
*/

link NEWNode(Item item, link next)
{
    link x = (link)malloc(sizeof(struct node));

    x->item = item;
    x->next = next;
    return x;
}

void DELETENode(link node)
{
    deleteItem(node->item);
    free(node);
}

Item getItem(link h)
{
    if (h)
        return h->item;
}

void insert(link *heads, Item item)
{
    int i = hash(key(item), M);
    heads[i] = push(heads[i], item);
}

void delete (link *heads, Key k)
{
    int i = hash(k, M);
    heads[i] = remove_elem(heads[i], k);
}

Item search(link *heads, Key k)
{
    int i = hash(k, M);
    return search_list(heads[i], k);
}

void show_hash(link *heads)
{
    int i;
    for (i = 0; i < M; i++)
    {
        printf("|%d|", i);
        show_list(heads[i]);
    }
}

void destroy_hash(link *heads)
{
    int i;
    for (i = 0; i < M; i++)
    {
        destroy_list(heads[i]);
    }
    free(heads);
}