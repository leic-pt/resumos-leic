typedef struct node node_t;
typedef struct list list_t;

typedef struct link link_t;

struct node
{
    struct node *next;
    struct node *prev;
    void *value;
};

struct list
{
    node_t *first;
    node_t *last;
};

struct link
{
    void *value;
    struct link *left;
    struct link *right;
    int height;
};
/**
 * Creates a new AVL Tree item with the given item and left/right children.
 * Returns the newly created link.
 */
link_t *init_link(void *value, link_t *left, link_t *right)
{
    link_t *new_link = (link_t *)malloc(sizeof(link_t));

    new_link->value = value;
    new_link->left = left;
    new_link->right = right;
    new_link->height = 1;

    return new_link;
}

/**
 * Gets the height of a tree link.
 * If the link is NULL, the height is 0.
 * Returns the height of the link.
 */
int height(link_t *link)
{
    if (link == NULL)
        return 0;
    return link->height;
}

/**
 * Recalculates the height of the given link based on the height of its
 * children.
 */
void update_height(link_t *link)
{
    int height_left = height(link->left);
    int height_right = height(link->right);
    link->height =
        height_left > height_right ? height_left + 1 : height_right + 1;
}

/**
 * Executes a rotation left on the given link.
 * Returns the link that is now in the position of the given link.
 */
link_t *rotL(link_t *link)
{
    link_t *x = link->right;
    link->right = x->left;
    x->left = link;

    update_height(link);
    update_height(x);

    return x;
}

/**
 * Executes a rotation right on the given link.
 * Returns the link that is now in the position of the given link.
 */
link_t *rotR(link_t *link)
{
    link_t *x = link->left;
    link->left = x->right;
    x->right = link;

    update_height(link);
    update_height(x);

    return x;
}

/**
 * Executes a rotation left followed by a rotation right on the given link.
 * Returns the link that is now in the position of the given link.
 */
link_t *rotLR(link_t *link)
{
    if (link == NULL)
        return link;
    link->left = rotL(link->left);
    return rotR(link);
}

/**
 * Executes a rotation right followed by a rotation left on the given link.
 * Returns the link that is now in the position of the given link.
 */
link_t *rotRL(link_t *link)
{
    if (link == NULL)
        return link;
    link->right = rotR(link->right);
    return rotL(link);
}

/**
 * Gets the balance factor of the given link, which is the difference
 * between the height of the left and right links.
 * If link is NULL, returns 0.
 */
int balance_factor(link_t *link)
{
    if (link == NULL)
        return 0;
    return height(link->left) - height(link->right);
}

/**
 * Balance a tree link by executing the necessary rotations.
 * Returns the link that is now in the position of the given link.
 */
link_t *balance(link_t *link)
{
    int bal_factor;
    if (link == NULL)
        return link;
    bal_factor = balance_factor(link);
    if (bal_factor > 1)
    {
        if (balance_factor(link->left) >= 0)
            link = rotR(link);
        else
            link = rotLR(link);
    }
    else if (bal_factor < -1)
    {
        if (balance_factor(link->right) <= 0)
            link = rotL(link);
        else
            link = rotRL(link);
    }
    else
    {
        update_height(link);
    }
    return link;
}

/**
 * Insert a new value under the given link.
 * Automatically balances the resulting AVL tree.
 */
link_t *insert_tree(link_t *link, void *value, char *(*key)(void *))
{
    if (link == NULL)
        return init_link(value, NULL, NULL);

    if (strcmp(key(value), key(link->value)) < 0)
        link->left = insert_tree(link->left, value, key);
    else
        link->right = insert_tree(link->right, value, key);
    link = balance(link);
    return link;
}

/**
 * Get the item that identified by the given name (value) from the given tree
 * (link).
 * Returns the found value. If the value does not exist, returns NULL.
 */
void *get_link_by_value(link_t *link, char *value, char *(*key)(void *))
{
    int cmp;
    if (link == NULL)
        return NULL;

    cmp = strcmp(value, key(link->value));
    if (cmp == 0)
    {
        return link->value;
    }
    else if (cmp < 0)
    {
        return get_link_by_value(link->left, value, key);
    }
    else
    {
        return get_link_by_value(link->right, value, key);
    }
}

/**
 * Destroys the entire tree given by the root link.
 * Frees each link, but not their value.
 */
void destroy_tree(link_t *link)
{
    if (link == NULL)
        return;
    destroy_tree(link->left);
    destroy_tree(link->right);

    free(link);
}

/**
 * Returns the maximum value under the given link, that is, the rightmost link.
 */
link_t *max_link(link_t *link)
{
    while (link != NULL && link->right != NULL)
        link = link->right;
    return link;
}

/**
 * Removes a link from the tree (identified by the root link) by a compare
 * function with a given value.
 * Automatically balances the tree afterwards.
 * Frees the removed link, but not its value.
 * Returns the link that is now in the position of the given link.
 */
link_t *delete_link(link_t *link, char *value, char *(*key)(void *))
{
    int cmp;
    if (link == NULL)
        return link;

    cmp = strcmp(value, key(link->value));
    if (cmp < 0)
        link->left = delete_link(link->left, value, key);
    else if (cmp > 0)
        link->right = delete_link(link->right, value, key);
    else
    {
        if (link->left != NULL && link->right != NULL)
        {
            link_t *aux = max_link(link->left);
            swap_variables(&link->value, &aux->value);
            link->left = delete_link(link->left, key(aux->value), key);
        }
        else
        {
            link_t *aux = link;
            if (link->left == NULL && link->right == NULL)
                link = NULL;
            else if (link->left == NULL)
                link = link->right;
            else
                link = link->left;

            free(aux);
        }
    }
    link = balance(link);
    return link;
}

void traverse_tree(link_t *link, void (*fn)(void *value))
{
    if (link == NULL)
        return;

    traverse_tree(link->left, fn);
    fn(link->value);
    traverse_tree(link->right, fn);
}