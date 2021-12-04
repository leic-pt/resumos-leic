#include <iostream>
#include <vector>

using namespace std;
typedef int Vertex;
typedef vector<vector<Vertex>> adjList;

class Graph {
  int noElements;
  adjList list;

  public:
    Graph(int noElements);
    void addEdge(Vertex u, Vertex v);
    int getNoElements();
    adjList getAdjList();
};

void parse(Graph &graph, Graph &transverse, int noRelationships);
void printHist(Graph graph, char num);
void printCommonMatrix(Graph graph);

Graph::Graph(int noElements) {
  this->noElements = noElements;
  list.resize(noElements);
}

void Graph::addEdge(Vertex u, Vertex v) {
  list[u].push_back(v);
}

int Graph::getNoElements() {
  return this->noElements;
}

adjList Graph::getAdjList() {
  return this->list;
}

int main() {
  int noPeople, noRelationships;
  scanf("%d,%d", &noPeople, &noRelationships);

  Graph graph = Graph(noPeople);
  Graph transverseGraph = Graph(noPeople);
  parse(graph, transverseGraph, noRelationships);

  printHist(graph, '1');
  printHist(transverseGraph, '2');
  printCommonMatrix(transverseGraph);

  return 0;
}

void parse(Graph &graph, Graph &transverse, int noRelationships) {
  for (int i = 0; i < noRelationships; i++) {
    Vertex person1, person2;
    scanf("%d %d", &person1, &person2);
    graph.addEdge(person1 - 1, person2 - 1);
    transverse.addEdge(person2 - 1, person1 - 1);
  }
}

void printHist(Graph graph, char num) {
  int noElements = graph.getNoElements();
  adjList list = graph.getAdjList();
  vector<int> degrees(noElements, 0);

  for (int i = 0; i < noElements; i++) {
    degrees[list[i].size()]++;
  }

  cout << "Histograma " << num << endl;
  for (int deg: degrees) {
    cout << deg << endl;
  }
}

void printCommonMatrix(Graph graph) {
  adjList list = graph.getAdjList();
  vector<vector<int>> commonMatrix(graph.getNoElements(), vector<int>(graph.getNoElements(), 0));
  for (uint i = 0; i < list.size(); i++) {
    for (uint j = 0; j < list[i].size(); j++) {
      for (uint k = j; k < list[i].size(); k++) {
        commonMatrix[j][k]++;
        if (j != k) commonMatrix[k][j]++; // not adding twice if j == k
      }
    }
  }
  for (vector<int> row: commonMatrix) {
    for (int amt: row) {
      cout << amt << " ";
    }
    cout << endl;
  }
}