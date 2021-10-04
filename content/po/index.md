---
title: Programação com Objetos
path: /po
type: topLevelPage
---

# Programação com Objetos

> Esta cadeira tem como objetivo dar a conhecer o paradigma de programação com objectos, as suas vantagens,
> inconvenientes e limitações; assim como o paradigma dos padrões de desenho, tanto no desenvolvimento, como na refactorização de aplicações.

## Recursos Adicionais

- [Wiki do Prof. David Matos](https://web.tecnico.ulisboa.pt/~david.matos/w/pt/index.php/Programa%C3%A7%C3%A3o_com_Objectos)
- [MermaidJS Live Editor](https://mermaid.live/) - Editor de gráficos UML

```mermaid
classDiagram
class Student
Student : +age: int
Student : +void jumpOffTower(NorthTower: Tower)

class Course
Course : +name: String
Course : +students: List~Students~ 
Course : +void giveMaxGradeToAllStudents()

Course --> Student

```
