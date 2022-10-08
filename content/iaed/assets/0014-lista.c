#include <stdio.h>
#include <stdlib.h>

struct node {
    char text;
    struct node *next;
};
typedef struct node Node;
typedef struct node *link;

int main(int argc, char *argv[]) {
    int i;
    link head = NULL;

    /* inserir todos os elementos na lista */
    for (i = 1; i < argc; i++) {
        head = insert_end(head, argv[i]);
    }

    print_list(head); /* imprime toda a lista */

    /* remover o elemento na posição i (lido do stdin) */
    scanf("%d", &i);
    head = delete_node(head, argv[i]);

    print_list(head); /* voltamos a imprimir toda a lista */

    return 0;
}

/* Função auxiliar responável por alocar memória para
tudo o que é necessário para um novo nó */
link new_node(char *buffer) {
    /* reservar memória para novo nó */
    link x = (link) malloc(sizeof(struct node));
    /* reservar memória para nova string */
    x->text = (char *) malloc(sizeof(char) * (strlen(buffer) + 1));

    strcpy(x->text, buffer);
    x->next = NULL;
    return x;
}

link insert_beginning(link head, char *text) {
    link x = new_node(text);
    x->next = head;
    return x; /* retorna a nova "head" */
}

link insert_end(link head, char *text) {
    link x;
    if (head == NULL) {
        return new_node(text);
    }
    // loop para chegar ao fim da lista
    for (x = head; x->next != NULL; x = x->next);

    x->next = new_node(text);
    return head;
}

link lookup(link head, char *text) {
    link t;
    for (t = head; t != NULL; t = t->next) {
        if (strcmp(t->text, text) == 0) {
            return t;
        }
    }
    return NULL;
}

void print_list(link head) {
    link t;
    for (t = head; t != NULL; t = t->next) {
        printf("%s\n", t->text);
    }
}

link delete_node(link head, char *text) {
    link t, prev;
    for (t = head, prev = NULL; t != NULL;
         prev = t, t = t->next) {
        if (strcmp(t->text, text) == 0) {
            if (t == head) {
                head = t->next;
            } else {
                prev->next = t->next;
            }
            free_node(t);
            break;
        }
    }
    return head;
}

void free_node(link t) {
    free(t->text);
    free(t);
}
