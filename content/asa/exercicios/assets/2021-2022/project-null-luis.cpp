#include <vector>
#include <iostream>
using namespace std;

typedef vector<vector<int>> graph;
typedef vector<vector<int>> matrix;
typedef vector<int> histogram;

void parse_input(graph &g, graph &gt) {
    uint n, m;
    char ignore;
    cin >> n >> ignore >> m;

    g = vector<vector<int>>(n, vector<int>());
    gt = vector<vector<int>>(n, vector<int>());

    for (uint i = 0; i < m; i++) {
        uint u, v;
        cin >> u >> v;
        g[u - 1].push_back(v - 1);
        gt[v - 1].push_back(u - 1);
    }
}

histogram make_histogram(const graph &g) {
    histogram h = vector<int>(g.size(), 0);

    for (uint i = 0; i < g.size(); i++) h[g[i].size()]++;

    return h;
}

void show_histogram(const histogram &h) {
    for (uint i = 0; i < h.size(); i++) cout << h[i] << '\n';
}

matrix make_matrix(const graph &g) {
    matrix m = vector<vector<int>>(g.size(), vector<int>(g.size(), 0));

    for (uint i = 0; i < m.size(); i++) {
        for (uint j = i; j < m[i].size(); j++) {
            if (i == j) {
                m[i][j] = g[i].size();
            } else {
                // Calculate histogram of friends known by the nodes,
                // If the frequency is 2 then both know it.
                histogram h = vector<int>(g.size(), 0);
                for (uint u = 0; u < g[i].size(); u++) h[g[i][u]]++;
                for (uint u = 0; u < g[j].size(); u++) h[g[j][u]]++;

                for (uint u = 0; u < h.size(); u++) {
                    if (h[u] == 2) {
                        // Increment matrix symetrically.
                        m[i][j]++;
                        m[j][i]++;
                    }
                }
            }
        }
    }

    return m;
}

void show_matrix(const matrix &m) {
    for (uint i = 0; i < m.size(); i++) {
        for (uint j = 0; j < m[i].size(); j++) {
            cout << m[i][j] << " ";
        }
        cout << '\n';
    }
}

int main() {
    ios::sync_with_stdio(0);
    cin.tie(NULL);

    graph g, gt;
    parse_input(g, gt);

    cout << "Histograma 1\n";
    show_histogram(make_histogram(g));
    cout << "Histograma 2\n";
    show_histogram(make_histogram(gt));
    cout << "Matrix\n";
    show_matrix(make_matrix(g));
}
