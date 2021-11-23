---
title: Exercícios Resolvidos Prof. Pavão
description: Exercícios do Prof. João Pavão Martins resolvidos (2020-2021)
path: /fp/exercises/exercicios-pavao
type: exercises
---

# Exercícios Aulas Práticas (Completo)

:::info[Resoluções Incorretas?]
Caso encontres incorreções nas resoluções abaixo, por favor
[reporta-as](https://github.com/diogotcorreia/resumos-leic/issues/new?assignees=&labels=incorrect+solution&template=incorrect_solution.yml&title=%5BIncorrect+Solution%5D+)
para serem corrigidas.
:::

- [Enunciado](https://drive.google.com/file/d/1objOD3KNb_uGYHAXg8q0byaz_HX_O6cA/view?usp=sharing)

# Resolução

```toc

```

[EdSwordsmith/ExerciciosFP](https://github.com/EdSwordsmith/ExerciciosFP) - Resolução alternativa dos exercícios pelo Eduardo Espadeiro

## Capítulo 1

1. a) Símbolos não terminais: <palavra>, <sílaba>, <vogal> e <consoante>
   Símbolos terminais: `a b c d e f g h i j l m n o p q r s t u v x z`  
   b) Cada palavra tem de conter exatamente duas sílabas, cada sílaba (par de dois caracteres) tem de conter obrigatoriamente uma consoante e uma vogal, por qualquer ordem, minúsculas. Logo, apenas `asno`, `gato`, `vaca` pertencem à gramática.
2. a) Símbolos não terminais: `<S>`, `<A>`, `<B>`, `<x>` e `<y>`
   Símbolos terminais: `A B C D 1 2 3 4`  
   b) A gramática permite frases que comecem com um qualquer número de letras (`A B C D`), seguidas de qualquer número de dígitos (`1 2 3 4`). Logo, apenas `AAAAB12` pertence à gramática.  
   c) Sim
3. a) Símbolos não terminais: `<Pric>`, `<Meio>` e `<Fim>`
   Símbolos terminais: `a b c`  
   b) As frases definidas por esta gramática é constituída por capicuas, cuja parte exterior começa com um `a`, seguida de um `b` e um qualquer número de `c`. Por exemplo: `abcccccccba`.
4. BNF:

   ```
   <numero> = <digito positivo> <digito>* | 0
   <digito> = <digito positivo> | 0
   <digito positivo> = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
   ```

5. a) Símbolos não terminais: `<operação>`, `<operador>`, `<argumento>` e `<dígito>`
   Símbolos terminais: `2 4 6 8 0 + - * / ( )`  
   b) Segundo a gramática, as frases começam com `(`, seguidas de um número com qualquer número dos dígitos `2 4 6 8 0`, seguidas de um operador `+ - * /`, novamente um número e acabam com `)`. Logo, apenas `(24 * 06)` e `(0 / 0)` pertencem à gramática.
6. BNF:

   ```
   <palavra> = c <meio>+ r
   <meio> = a | d
   ```

7. BNF:

   ```
   <cod postal> = <digito positivo> <tres digitos> - <tres digitos>
   <tres digitos> = <digito> <digito> <digito>
   <digito> = <digito positivo> | 0
   <digito positivo> = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
   ```

8. a) BNF:

   ```
   <palavra> = <letra>+ <numero>+
   <letra> = A | B | C
   <numero> = 1 | 2 | 3
   ```

   b) Símbolos não terminais: `<palavra>`, `<letra>` e `<numero>`
   Símbolos terminais: `A B C 1 2 3`

## Capítulo 2

1.  ```python
    print('Vou pedir-lhe dois numeros')
    x = eval(input('Escreva o primeiro numero, x = '))
    y = eval(input('Escreva o segundo numero, y = '))
    print('O valor de (x + 3 * y) + (x - y) e:', (x + 3 * y) * (x - y))
    ```

2.  ```python
    print("Vamos calcular a velocidade média em km/h e m/s")
    d = eval(input("Introduza a distância percorrida em km: "))
    t = eval(input("Introduza o intervalo de tempo em minutos: "))
    print("Velocidade média em km/h:", d / (t / 60))
    print("Velocidade média em m/s:", (d * 1000) / (t * 60))
    ```

3.  ```python
    print("Escreva um número de segundos")
    t = eval(input("? "))
    print("O número de dias correspondentes é", t / (3600 * 24))
    ```

4.  ```python
    t = eval(input("Escreva o número de segundos "))

    days = t // (3600 * 24)
    t = t - days * 3600 * 24

    hours = t // 3600
    t = t - hours * 3600

    minutes = t // 60
    t = t - minutes * 60

    print("dias:", days, "horas:", hours, "mins:", minutes, "segs:", t)
    ```

5.  ```python
    from math import sqrt

    xSum = 0
    x = [None] * 5
    for i in range(5):
        x[i] = eval(input("Introduza o {0}º número: ".format(i + 1)))
        xSum += x[i]

    avg = xSum / 5

    print("Média dos números:", avg)

    sumDesvio = 0

    for i in range(5):
        sumDesvio += (x[i] - avg) ** 2

    print("Desvio padrão:", sqrt(sumDesvio)/2)
    ```

6.  ```python
    greater = None
    for i in range(3):
        x = eval(input("Introduza o {0}º número: ".format(i + 1)))
        if greater is None or x > greater:
            greater = x

    print("Maior número:", greater)
    ```

7.  ```python
    hours = eval(
        input("Quantas horas trabalhou o trabalhador durante uma semana? "))
    salary = eval(input("Qual é o salário do trabalhador, em €, à hora? "))

    if hours <= 40:
        print("Salário:", hours * salary, "€")
    else:
        print("Salário:", 40 * salary + (hours - 40) * salary * 2, "€")
    ```

8.  ```python
    while True:
        print('Escreva um número de segundos\n(um número negativo para terminar)')
        sec = eval(input('? '))
        if sec < 0:
            break
        print('O número de dias correspondente é', sec / (3600 * 24))
    ```

9.  ```python
    number = ''

    while True:
        print('Escreva um dígito\n(-1 para terminar)')
        digit = input('? ')
        if digit == '-1':
            print('O número é', number)
            break
        number += digit
    ```

10. ```python
    print('Escreva um inteiro')
    number = eval(input("? "))

    result = 0
    i = 0
    while number != 0:
        digit = number % 10
        number //= 10
        if digit % 2 == 1:
            result += digit * (10 ** i)
            i += 1

    print('Resultado:', result)
    ```

11. ```python
    print('Escreva um inteiro positivo')
    number = input("? ")

    result = ''
    for i in range(len(number), 0, -1):
        result += number[i - 1]

    print('Resultado:', result)
    ```

12. ```python
    print('Qual o valor de x')
    x = eval(input("? "))

    print('Qual o valor de n')
    n = eval(input("? "))

    result = 1
    last_item = 1
    for i in range(1, n + 1):
        item = last_item * (x / i)
        last_item = item
        result += item

    print('O valor da soma é', result)
    ```

13. ```python
    print('Escreva um numero para eu escrever a tabuada da multiplicação')
    n = eval(input("Num -> "))

    for i in range(1, 11):
        print(n, 'x', i, '=', n*i)
    ```

14. ```python
    print("Introduza um número")
    num = eval(input("? "))

    sumNum = 0
    while num != 0:
        sumNum += num % 10
        num = num // 10

    print("O número é", sumNum)
    ```

15. ```python
    resultNum = 0
    while True:
        print("Introduza um dígito")
        num = eval(input("? "))
        if num == -1:
            break
        resultNum = resultNum * 10 + num

    print("O número é", resultNum)
    ```

16. ```python
    print("Introduza um número")
    num = eval(input("? "))

    resultNum = num
    while num != 0:
        resultNum = resultNum * 10 + (num % 10)
        num //= 10

    print("O número é", resultNum)
    ```

17. ```python
    print("Introduza uma lista de notas, separada por vírgulas (,)")
    grades = eval(input("? "))

    countPositive = 0
    countTotal = 0

    for grade in grades:
        countTotal += 1
        if grade >= 10:
            countPositive += 1

    print("Houve", countPositive, "notas positivas")
    print(countPositive / countTotal, "% notas positivas")
    ```

18. ```python
    print("Introduza um número")
    num = eval(input("? "))

    counter = 0
    while num != 0:
        digit = num % 10
        num //= 10  # num = num // 10
        if digit == 0 and num % 10 == 0:
            counter += 1

    print("O numero tem", counter, "zeros seguidos")
    ```

19. ```python
    print("Introduza uma quantia em euros")
    num = eval(input("? ")) * 100 // 1  # passar a inteiro

    print("Há", num // 5000, "nota(s) de 50€")
    num %= 5000

    print("Há", num // 2000, "nota(s) de 20€")
    num %= 2000

    print("Há", num // 1000, "nota(s) de 10€")
    num %= 1000

    print("Há", num // 500, "nota(s) de 5€")
    num %= 500

    print("Há", num // 200, "moeda(s) de 2€")
    num %= 200

    print("Há", num // 100, "moeda(s) de 1€")
    num %= 100

    print("Há", num // 50, "moeda(s) de 0.5€")
    num %= 50

    print("Há", num // 20, "moeda(s) de 0.2€")
    num %= 20

    print("Há", num // 10, "moeda(s) de 0.1€")
    num %= 10

    print("Há", num // 5, "moeda(s) de 0.05€")
    num %= 5

    print("Há", num // 2, "moeda(s) de 0.02€")
    num %= 2

    print("Há", num, "moeda(s) de 0.1€")
    ```

    Python (compacto):

    ```python
    print("Introduza uma quantia em euros")
    num = eval(input("? ")) * 100 // 1  # passar a inteiro

    for amount in [5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]:
        print("Há", num // amount, "nota(s) de ", amount / 100, "€")
        num %= amount
    ```

20. ```python
    x = 1
    num = 0
    while x < 10:
        num = num * 10 + x
        print(num, "x 8 +", x, "=", num * 8 + x)
        x += 1
    ```

## Capítulo 3

1.  ```python
    def cinco(num):
        return num == 5
    ```

2.  ```python
    def horas_dias(hours):
        return hours / 24
    ```

3.  ```python
    def area_circulo(radius):
        return 3.14 * (radius ** 2)
    ```

4.  ```python
    def area_circulo(radius):
        return 3.14 * (radius ** 2)

    def area_coroa(r1, r2):
        if r1 > r2:
            raise ValueError("r1 must be smaller than r2")
        return area_circulo(r2) - area_circulo(r1)
    ```

5.  ```python
    def bissexto(year):
        return (year % 4 == 0) and (year % 100 != 0 or year % 400 == 0)
    ```

6.  ```python
    def bissexto(year):
        return (year % 4 == 0) and (year % 100 != 0 or year % 400 == 0)

    def dia_mes(month, year):
        if month == "jan" or month == "mar" or month == "mai" or month == "jul" or month == "aug" or month == "out" or month == "dez":
            return 31
        if month == "feb":
            if bissexto(year):
                return 29
            return 28
        if month == "abr" or month == "jun" or month == "set" or month == "nov":
            return 30
        raise ValueError("Invalid month")
    ```

7.  ```python
    def valor(amount, interest, year):
        if interest < 0 or interest > 1:
            raise ValueError("interest must be between 0 and 1")
        return amount * ((1 + interest) ** year)

    def duplicar(amount, interest):
        counter = 0
        while True:
            counter += 1
            if valor(amount, interest, counter) >= amount * 2:
                return counter
    ```

8.  ```python
    from math import sqrt

    def primo(num):
        if num == 1:
            return False
        i = 2
        sqrtNum = sqrt(num)
        while i <= sqrtNum:
            if num % i == 0:
                return False
            i += 1
        return True
    ```

9.  ```python
    def n_esimo_primo(n):
        i = 0
        num = 1
        while i < n:
            if primo(num):
                i += 1
            num += 1
        return num - 1
    ```

10. ```python
    from math import floor

    def dia_da_semana(day, month, year):
        parsedMonth = parseMonth(month)
        if parsedMonth > 12:
            year -= 1
        h = execFormula(day, parsedMonth, year % 100, floor(year / 100))

        return weekdayToString(h)

    def parseMonth(month):
        if month < 1 or month > 12:
            raise ValueError("Invalid month")
        if month <= 2:
            return 12 + month
        return month

    def execFormula(q, m, K, J):
        return (q + floor(13 * (m + 1) / 5) + K + floor(K / 4) + floor(J / 4) - 2 * J) % 7

    def weekdayToString(weekday):
        if weekday == 0:
            return "sabado"
        if weekday == 1:
            return "domingo"
        if weekday == 2:
            return "segunda"
        if weekday == 3:
            return "terca"
        if weekday == 4:
            return "quarta"
        if weekday == 5:
            return "quinta"
        if weekday == 6:
            return "sexta"
        raise ValueError("Invalid weekday")
    ```

11. a)

    ```python
    def misterio(n):
        ni = invertNumber(n)
        ns = abs(n - ni)
        if ns < 100:
            return "Condições não verificadas"
        nsi = invertNumber(ns)
        return ns + nsi

    def invertNumber(num):
        newNum = 0
        while num > 0:
            newNum = newNum * 10 + num % 10
            num //= 10
        return newNum
    ```

    b) _Um mágico nunca revela os seus truques._

## Capítulo 4

1.  ```python
    soma = 0
    for i in range(20, 0, -2):
        soma += 1
    print('Soma =', soma)
    ```

2.  ```python
    def explode(i):
        if not isinstance(i, int):
            raise ValueError("explode: argumento não inteiro")
        tuple = ()
        while i > 0:
            tuple = (i % 10,) + tuple
            i //= 10
        return tuple
    ```

3.  ```python
    def implode(digits):
        result = 0
        i = 0
        while i < len(digits):
            digit = digits[i]
            if not isinstance(digit, int) or not 0 <= digit <= 9:
                raise ValueError("explode: argumento não inteiro")
            result = result * 10 + digit
            i += 1
        return result
    ```

    ```python
    def implode(digits):
        result = 0
        for digit in digits:
            if not isinstance(digit, int) or not 0 <= digit <= 9:
                raise ValueError("explode: argumento não inteiro")
            result = result * 10 + digit
        return result
    ```

4.  ```python
    def filtra_pares(numbers):
        result = ()
        for i in numbers:
            if not isinstance(i, int):
                raise ValueError("not a number")
            if i % 2 == 0:
                result += (i,)
        return result
    ```

5.  ```python
    def algarismos_pares(i):
        return implode(filtra_pares(explode(i)))
    ```

6.  ```python
    def num_para_seq_cod(num):
        result = ()
        while num > 0:
            digit = num % 10
            num //= 10
            if digit % 2 == 0:
                result = ((digit + 2) % 10,) + result  # 8 + 2 % 10 = 0
            elif digit == 1:
                result = (9,) + result
            else:
                result = (digit - 2,) + result
        return result
    ```

7.  ```python
    def amigas(word1, word2):
        if len(word1) != len(word2):
            raise ValueError("words don't have the same length")
        hit = 0
        for i in range(len(word1)):
            if word1[i] == word2[i]:
                hit += 1
        return hit / len(word1) > 0.9  # diff less than 10%
    ```

8.  ```python
    def junta_ordenados(t1, t2):
        result = ()
        i1 = i2 = 0
        while i1 < len(t1) or i2 < len(t2):
            if i1 < len(t1) and (i2 >= len(t2) or t1[i1] <= t2[i2]):
                result += (t1[i1],)
                i1 += 1
            else:
                result += (t2[i2],)
                i2 += 1
        return result
    ```

9.  ```python
    def reconhece(string):
        if not isinstance(string, str):
            raise TypeError("not a string")

        if len(string) == 0:
            return False

        i = 0
        while i < len(string) and string[i] in 'ABCD':
            i += 1
        if i == 0 or i == len(string):
            return False
        while i < len(string) and string[i] in '1234':
            i += 1
        return i == len(string)
    ```

10. ```python
    from math import ceil

    def codifica(string):
        str1 = ''
        str2 = ''
        for i in range(0, len(string)):
            if i % 2 == 0:
                str1 += string[i]
            else:
                str2 += string[i]
        return str1 + str2

    def descodifica(string):
        result = ''
        middle = ceil(len(string) / 2)
        for i in range(middle):
            result += string[i]
            if i + middle < len(string):
                result += string[i + middle]
        return result
    ```

## Capítulo 5

1.  ```python
    def lista_codigo(string):
        l = []
        for c in string:
            l += [ord(c)]
        return l
    ```

2.  ```python
    def remove_multiplos(list, n):
        for i in range(len(list) - 1, -1, -1):
            if list[i] % n == 0:
                del(list[i])
        return list
    ```

3.  ```python
    def soma_cumulativa(list):
        s = 0
        newList = []
        for i in list:
            s += i
            newList += [s]
        return newList
    ```

4.  ```python
    def elemento_matriz(matrix, row, col):
        if row >= len(matrix):
            raise ValueError(
                'elemento_matriz: indice invalido, linha {}'.format(row))
        if col >= len(matrix[row]):
            raise ValueError(
                'elemento_matriz: indice invalido, coluna {}'.format(col))
        return matrix[row][col]
    ```

5.  ```python
    def print_matrix(matrix):
        for row in matrix:
            rowStr = ""
            for el in row:
                rowStr += str(el) + " "
            print(rowStr)
    ```

6.  ```python
    def soma_mat(mat1, mat2):
        if len(mat1) != len(mat2):
            raise ValueError("matrices not the same size")
        result = mat1 + []
        for rowI in range(len(mat1)):
            if len(mat1[rowI]) != len(mat2[rowI]):
                raise ValueError("matrices not the same size")
            resultRow = mat1[rowI] + []
            for colI in range(len(mat1[rowI])):
                resultRow[colI] = mat1[rowI][colI] + mat2[rowI][colI]
            result[rowI] = resultRow
        return result
    ```

7.  ```python
    def multiplicar_mat(mat1, mat2):
        n = len(mat2)
        if n == 0 or len(mat1) == 0 or (len(mat1[0]) != n):
            raise ValueError("cannot multiply this matrices")
        colN = len(mat1)
        rowN = len(mat2[0])
        result = []
        for i in range(rowN):
            row = []
            for j in range(colN):
                elSum = 0
                for k in range(n):
                    elSum += mat1[i][k] * mat2[k][j]
                row += [elSum]
            result += [row]
        return result
    ```

8.  ```python
    def seq_racaman(n):
        res = []
        for i in range(n):
            if i == 0:
                res += [0]
                continue
            last_item = res[i - 1]
            if last_item > i and last_item - i not in res:
                res += [last_item - i]
            else:
                res += [last_item + i]
        return res
    ```

9.  ```python
    from random import random
    from math import ceil

    def random_to(n):
        return ceil(random() * n)

    def euromilhoes():
        list1 = []
        while len(list1) < 5:
            r = random_to(50)
            if r not in list1:
                list1 += [r]
        list2 = []
        while len(list2) < 2:
            r = random_to(12)
            if r not in list2:
                list2 += [r]
        return [list1, list2]

    print(euromilhoes())
    ```

## Capítulo 6

### Capítulo 6.1

1.  ```python
    def apenas_digitos_impares(n):
        if n == 0:
            return 0
        digit = n % 10
        if digit % 2 == 0:
            return apenas_digitos_impares(n // 10)
        else:
            return apenas_digitos_impares(n // 10) * 10 + digit
    ```

2.  ```python
    def junta_ordenadas(list1, list2):
        if len(list1) == 0 or len(list2) == 0:
            return list1 + list2
        elif list1[0] < list2[0]:
            return [list1[0]] + junta_ordenadas(list1[1:], list2)
        else:
            return [list2[0]] + junta_ordenadas(list1, list2[1:])
    ```

3.  ```python
    def sublistas(l):
        if len(l) == 0:
            return 0
        if isinstance(l[0], list):
            return 1 + sublistas(l[0]) + sublistas(l[1:])
        return sublistas(l[1:])
    ```

4.  ```python
    def soma_n_vezes(a, b, n):
        if n == 0:
            return 0
        return b + a + soma_n_vezes(a, 0, n - 1)
    ```

5.  ```python
    def soma_els_atomicos(tup):
        if isinstance(tup, tuple):
            if len(tup) == 0:
                return 0
            return soma_els_atomicos(tup[0]) + soma_els_atomicos(tup[1:])
        return tup
    ```

6.  ```python
    def inverte(l):
        if len(l) == 0:
            return []
        return inverte(l[1:]) + [l[0]]
    ```

7.  ```python
    def pertence(l, n):
        if len(l) == 0:
            return False
        if l[0] == n:
            return True
        return pertence(l[1:], n)
    ```

8.  ```python
    # Usar 'pertence' do último exercício

    def subtrai(l1, l2):
        if len(l1) == 0:
            return []
        if pertence(l2, l1[0]):
            return subtrai(l1[1:], l2)
        return [l1[0]] + subtrai(l1[1:], l2)
    ```

9.  ```python
    def parte(l, n):
        def parte_aux(greater, less, l, n):
            if len(l) == 0:
                return [less, greater]
            if l[0] < n:
                return parte_aux(greater, less + [l[0]], l[1:], n)
            return parte_aux(greater + [l[0]], less, l[1:], n)

        return parte_aux([], [], l, n)
    ```

10. ```python
    def maior(l):
        def maior_aux(l, n):
            if len(l) == 0:
                return n
            if l[0] > n:
                return maior_aux(l[1:], l[0])
            return maior_aux(l[1:], n)

        return maior_aux(l, l[0])
    ```

### Capítulo 6.2

1. a) Soma todos os números entre 4 e 500  
   b) Soma os quadrados dos múltiplos de 5 entre 5 e 500  
   c) Soma os somatórios de 1 a N, de 1 a 5
2. a)

   ```python
   def piatorio(l_inf, l_sup, calc_termo, prox):
       res = 1
       while l_inf <= l_sup:
           res = res * calc_termo(l_inf)
           l_inf = prox(l_inf)
       return res
   ```

   b)

   ```python
   def factorial(n):
       return piatorio(1, n, lambda x: x, lambda x: x + 1)
   ```

3. a)

   ```python
   def soma_fn(n, fn):
       res = 0
       for i in range(n):
           res += fn(i + 1)
       return res
   ```

   b)

   ```python
   def soma_fn(n, fn):
       def soma_fn_aux(acc, i, n, fn):
           if i > n:
               return acc
           return soma_fn_aux(acc + fn(i), i + 1, n, fn)

       return soma_fn_aux(0, 1, n, fn)
   ```

4. a)

   ```python
   def filtra(lst, tst):
       def filtra_aux(acc, lst, tst):
           if len(lst) == 0:
               return acc
           if tst(lst[0]):
               return filtra_aux(acc + [lst[0]], lst[1:], tst)
           return filtra_aux(acc, lst[1:], tst)

       return filtra_aux([], lst, tst)
   ```

   b)

   ```python
   def transforma(lst, fn):
       def transforma_aux(acc, lst, fn):
           if len(lst) == 0:
               return acc
           return transforma_aux(acc + [fn(lst[0])], lst[1:], fn)

       return transforma_aux([], lst, fn)
   ```

   c)

   ```python
   def acumula(lst, fn):
       def acumula_aux(acc, lst, fn):
           if len(lst) == 0:
               return acc
           return acumula_aux(fn(acc, lst[0]), lst[1:], fn)

       return acumula_aux(lst[0], lst[1:], fn)
   ```

5. ```python
   def soma_quadrados_impares(lst):
       return acumula(transforma(filtra(lst, lambda x: x % 2 != 0), lambda x: x ** 2), lambda x, y: x + y)
   ```

6. ```python
   def nao_primos(n):
       if n == 0:
           return []
       if not eh_primo(n):
           return nao_primos(n - 1) + [n]
       return nao_primos(n - 1)
   ```

7. a) Recebe um número e argumento e retorna o número cujos dígitos são dígitos em que `p` retorna verdadeiro

   ```python
   def filtra_pares(num):
       return misterio(num, lambda x: x % 2 == 0)
   ```

8. ```python
   def lista_digitos(n):
       return list(map(lambda x: int(x), str(n)))
   ```

9. ```python
   from functools import reduce

   def produto_digitos(n, fn):
       return reduce(lambda x, y: x * y, filter(fn, lista_digitos(n)))
   ```

10. ```python
    def apenas_digitos_impares(n):
        return reduce(lambda x, y: x*10+y, filter(lambda x: x % 2 != 0, lista_digitos(n)))
    ```

## Capítulo 7

1. _nope_
2. a)

   ```python
   def squared(n):
       if n <= 1:
           return 1
       return (n + n - 1) + squared(n-1)
   ```

   b)

   ```python
   def squared(n):
       def squared_aux(n, acc):
           if n <= 1:
               return acc + 1
           return squared_aux(n-1, acc + n + n-1)
       return squared_aux(n, 0)
   ```

   c)

   ```python
   def squared(n):
       acc = 0
       for i in range(1, n + 1):
           acc += i + i - 1
       return acc
   ```

3. a)

   ```python
   def numero_digitos(n):
       if type(n) != int or n < 0:
           raise ValueError('n não é um inteiro positivo')

       if n == 0:
           return 0
       return 1 + numero_digitos(n // 10)
   ```

   b)

   ```python
   def numero_digitos(n):
       def numero_digitos_aux(n, acc):
           if n == 0:
               return acc
           return numero_digitos_aux(n // 10, acc + 1)

       if type(n) != int or n < 0:
           raise ValueError('n não é um inteiro positivo')

       return numero_digitos_aux(n, 0)
   ```

   c)

   ```python
   def numero_digitos(n):
       if type(n) != int or n < 0:
           raise ValueError('n não é um inteiro positivo')

       count = 0
       while n > 0:
           n //= 10
           count += 1
       return count
   ```

4. ```python
   def eh_capicua(n):
       def digito(n, i):
           return (n % (10 ** (i + 1)) // (10 ** i))

       def eh_capicua_aux(n, i, length):
           if i >= length // 2:
               return True
           if digito(n, i) == digito(n, length - i - 1):
               return eh_capicua_aux(n, i + 1, length)
           return False

       return eh_capicua_aux(n, 0, numero_digitos(n))
   ```

5. ```python
   def espelho(n):
       def espelho_aux(n, result):
           if n == 0:
               return result
           return espelho_aux(n // 10, result * 10 + n % 10)
       return espelho_aux(n, 0)
   ```

6. a)

   ```python
   def g(n):
       if n == 0:
           return 0
       return n - g(g(n-1))
   ```

7. ```python
   def calc_soma(x, n):
       def calc_soma_aux(x, i, n, acc, prev):
           if i > n:
               return acc
           return calc_soma_aux(x, i + 1, n, acc + prev * (x / i), prev * (x / i))

       return calc_soma_aux(x, 1, n, 1, 1)
   ```

8. ```python
   def maior_inteiro(limite):
       def maior_inteiro_aux(limite, n, acc):
           if acc > limite:
               return n - 1
           return maior_inteiro_aux(limite, n + 1, acc + n + 1)
       return maior_inteiro_aux(limite, 1, 1)
   ```

9. ```python
   def soma_divisores(n):
       def soma_divisores_aux(n, d, acc):
           if d > n:
               return acc
           if n % d == 0:
               return soma_divisores_aux(n, d + 1, acc + d)
           return soma_divisores_aux(n, d + 1, acc)

       return soma_divisores_aux(n, 1, 0)
   ```

10. ```python
    def perfeito(n):
        def perfeito_aux(n, d, acc):
            if d >= n:
                return acc
            if n % d == 0:
                return perfeito_aux(n, d + 1, acc + d)
            return perfeito_aux(n, d + 1, acc)

        return perfeito_aux(n, 1, 0) == n

    def perfeitos_entre(low, high):
        if low == high:
            return []
        if perfeito(low):
            return [low] + perfeitos_entre(low + 1, high)
        return perfeitos_entre(low + 1, high)
    ```

## Capítulo 8

1. a) `{’nome’:{’nomep’:’John’, ’apelido’:’Doe’}, ’morada’:{’rua’:’West Hazeltine Ave.’, ’num’: 57, ’andar’:’’, ’localidade’:’Kenmore’, ’estado’:’NY’, ’cp’:’14217’, ’pais’:’USA’}}`  
   b) `{’nomep’:’John’, ’apelido’:’Doe’}`  
   c) `’Doe’`  
   d) `’D’`
2. ```python
   def agrupa_por_chave(list):
       result = {}
       for key, value in list:
           if key in result:
               result[key] += [value]
           else:
               result[key] = [value]
       return result
   ```

3. ```python
   from math import floor
   from random import random

   def baralho():
       result = []
       for naipe in ('esp', 'copas', 'ouros', 'paus'):
           for vlr in ('A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'):
               result += [{'np': naipe, 'vlr': vlr}]
       return result

   def baralha(deck):
       def random_card(max):
           return floor(random() * max)

       result = deck[:]
       for i in range(len(deck)):
           shuffleIndex = random_card(len(deck))
           result[i], result[shuffleIndex] = result[shuffleIndex], result[i]
       return result

   def distribui(deck):
       if len(deck) % 4 != 0:
           raise ValueError('numero de cartas deve ser multiplo de 4')
       cardsPerPlayer = int(len(deck) / 4)
       result = []
       for player in range(4):
           fromI = player * cardsPerPlayer
           toI = (player + 1) * cardsPerPlayer
           result += [deck[fromI:toI]]
       return result
   ```

4. ```python
   def resumo_FP(notas):
       notasP, alunosP, alunosN = 0, 0, 0
       for nota in notas:
           count = len(notas[nota])
           if nota >= 10:
               notasP += nota * count
               alunosP += count
           else:
               alunosN += count
       return (notasP / alunosP, alunosN)
   ```

5. ```python
   def metabolismo(pessoas):
       def m(s, i, h, p):
           print(s, i, h, p)
           if s == 'M':
               return 66 + 6.3 * p+ 12.9 * h+ 6.8 * i
           else:
               return 655 + 4.3 * p + 4.7 * h + 4.7 * i
       result = {}
       print(m('M', 34, 1.65, 64))
       for pessoa in pessoas:
           result[pessoa] = m(*pessoas[pessoa])
       return result
   ```

6. ```python
   def conta_palavras(strIn):
       result = {}
       for word in strIn.split(' '):
           if word not in result:
               result[word] = 0
           result[word] += 1
       return result
   ```

7. ```python
   def mostra_ordenado(words):
       keys = []
       for key in words:
           keys += [key]
       done = False
       while not done:
           done = True
           for i in range(len(keys) - 1):
               if keys[i] > keys[i + 1]:
                   keys[i], keys[i + 1] = keys[i + 1], keys[i]
                   done = False
       for key in keys:
           print(key, words[key])
   ```

8. ```python
   def escreve_esparsa(matrix):
       max_col = -1
       max_row = -1

       # {(row, col): value, (row, col): value, ...}
       for row, col in matrix:
           if row >= max_row:
               max_row = row
           if col >= max_col:
               max_col = col

       for row in range(max_row + 1):
           rowStr = ""
           for col in range(max_col + 1):
               if (row, col) in matrix:
                   rowStr += str(matrix[(row, col)]) + " "
               else:
                   rowStr += '0 '
           print(rowStr)

   def soma_esparsa(matrix1, matrix2):
       res = dict(matrix1)  # duplicate dict

       for key in matrix2:
           if key not in res:
               res[key] = 0
           res[key] += matrix2[key]
       return res
   ```

9. ```python
   def mais_antigo(bib):
       target = ('', -1)
       for book in bib:
           if target[1] == -1 or target[1] > book['ano']:
               target = book['titulo'], book['ano']
       return target[0]
   ```

10. ```python
    from math import sqrt

    def cria_racional(n, d):
        if d == 0:
            raise ValueError("o denominador não pode ser 0")
        if type(n) != int or type(d) != int:
            raise ValueError("os números devem ser inteiros")

        i = 2
        while i <= sqrt(min(n, d)):
            if n % i == 0 and d % i == 0:
                n //= i
                d //= i
                i = 2  # start over
            i += 1

        return {'d': d, 'n': n}

    def escreve_racional(racional):
        print(racional['n'], '/', racional['d'], sep='')

    def soma_racionais(rac1, rac2):
        n = rac1['n'] * rac2['d'] + rac2['n'] * rac1['d']
        d = rac1['d'] * rac2['d']
        return cria_racional(n, d)
    ```

11. ```python
    def ataques_rainhas(tabuleiro):
        def letra_numero(letra):
            return ord(letra) - 64  # A - 1, B - 2, etc

        def numero_letra(numero):
            return chr(numero + 64)  # 1 - A, 2 - B, etc

        def ataque_rainha(tabuleiro, l, c, cor):
            result = []
            cNum = letra_numero(c)

            def verificar_posicoes(transformer, posicoes):
                res = []
                for pos in posicoes:
                    row, col = transformer(pos)
                    if (row, col) not in tabuleiro:
                        continue
                    corTarget, tipo = tabuleiro[(row, col)]
                    if corTarget == cor:
                        break  # peça da mesma cor, não podemos passar por cima
                    res += [tipo, corTarget, (row, col)]
                return res

            # Linhas
            for pos in (range(l + 1, 9), range(l - 1, -1, -1)):
                result += verificar_posicoes(lambda p: (p, c), pos)

            # Colunas
            for pos in (range(cNum + 1, 9), range(cNum - 1, -1, -1)):
                result += verificar_posicoes(lambda p: (l, numero_letra(p)), pos)

            # Diagonais direita
            for pos in (range(-1, -min(cNum, l), -1), range(1, 9 - max(cNum, l))):
                result += verificar_posicoes(lambda offset: (
                    l + offset, numero_letra(cNum + offset)), pos)

            # Diagonais esquerda
            for pos in (range(-1, -min(cNum, 9-l), -1), range(1, 9 - max(9 - cNum, l))):
                result += verificar_posicoes(lambda offset: (
                    l - offset, numero_letra(cNum + offset)), pos)

            return result

        result = []

        for pos in tabuleiro:
            cor, tipo = tabuleiro[pos]
            if tipo == "rainha":
                l, c = pos
                result += ataque_rainha(tabuleiro, l, c, cor)

        return result
    ```

## Capítulo 9

1.  ```python
    # R[n/d] = {'n': numerador, 'd': denominador}

    def cria_rac(num, den):
        if type(num) != int or type(den) != int or den <= 0:
            raise ValueError("argumentos invalidos")
        return {'n': num, 'd': den}

    def num(r):
        return r['n']

    def den(r):
        return r['d']

    def eh_racional(arg):
        if type(arg) != dict or len(arg) != 2 or 'n' not in arg or 'd' not in arg:
            return False

        return type(arg['n']) == int and type(arg['d']) == int and arg['d'] > 0

    def eh_rac_zero(arg):
        return eh_racional(arg) and num(arg) == 0

    def rac_iguais(r1, r2):
        if not eh_racional(r1) and not eh_racional(r2):
            raise ValueError("algum argumento eh invalido")

        return num(r1) * den(r2) == num(r2) * den(r1)

    def escreve_rac(r):
        if not eh_racional(r):
            raise ValueError("argumento invalido")
        return '{}/{}'.format(num(r), den(r))

    def produto_rac(r1, r2):
        return cria_rac(num(r1) * num(r2), den(r1) * den(r2))
    ```

2.  ```python
    # R[hh:mm:ss] = [horas, minutos, segundos]

    def eh_inteiro_entre(arg, low, high):
        return type(arg) == int and low <= arg <= high

    def cria_rel(h, m, s):
        if not eh_inteiro_entre(h, 0, 23) or not eh_inteiro_entre(m, 0, 59) or not eh_inteiro_entre(s, 0, 59):
            raise ValueError("argumentos invalidos")
        return [h, m, s]

    def horas(r):
        if not eh_relogio(r):
            raise ValueError("argumento invalido")
        return r[0]

    def minutos(r):
        if not eh_relogio(r):
            raise ValueError("argumento invalido")
        return r[1]

    def segundos(r):
        if not eh_relogio(r):
            raise ValueError("argumento invalido")
        return r[2]

    def eh_relogio(arg):
        return type(arg) == list and \
            len(arg) == 3 and \
            eh_inteiro_entre(arg[0], 0, 23) and \
            eh_inteiro_entre(arg[1], 0, 59) and \
            eh_inteiro_entre(arg[2], 0, 59)

    def eh_meia_noite(r):
        return eh_relogio(r) and horas(r) == minutos(r) == segundos(r) == 0

    def eh_meio_dia(r):
        return eh_relogio(r) and horas(r) == 12 and minutos(r) == segundos(r) == 0

    def mesmas_horas(r1, r2):
        if not eh_relogio(r1) or not eh_relogio(r2):
            raise ValueError("argumentos invalidos")

        return horas(r1) == horas(r2) and minutos(r1) == minutos(r2) and segundos(r1) == segundos(r2)

    def escreve_relogio(r):
        def int_to_str(i):
            return '0' + str(i) if i < 10 else str(i)

        if not eh_relogio(r):
            raise ValueError("argumento invalido")

        return '{}:{}:{}'.format(int_to_str(horas(r)), int_to_str(minutos(r)), int_to_str(segundos(r)))

    def depois_rel(r1, r2):
        if not eh_relogio(r1) or not eh_relogio(r2):
            raise ValueError("argumentos invalidos")

        return horas(r2) > horas(r1) or \
            (horas(r1) == horas(r2) and minutos(r2) > minutos(r1)) or \
            (horas(r1) == horas(r2) and
             minutos(r1) == minutos(r2) and segundos(r2) > segundos(r1))

    def dif_segs(r1, r2):
        if not depois_rel(r1, r2):
            raise ValueError("dif_segs: primeiro arg posterior ao segundo")

        difH = horas(r2) - horas(r1)
        difM = minutos(r2) - minutos(r1)
        difS = segundos(r2) - segundos(r1)

        return difH * 3600 + difM * 60 + difS
    ```

3.  ```python
    # R[dd/mm/aaaa] = {'dia': dia, 'mes': mes, 'ano': ano}

    def eh_bissexto(ano):
        return (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0

    def obter_dias_mes(mes, bissexto):
        return {1: 31, 2: 29 if bissexto else 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31}[mes]

    def cria_data(dia, mes, ano):
        if type(dia) != int or type(mes) != int or type(ano) != int or not 1 <= mes <= 12 or not 1 <= dia <= obter_dias_mes(mes, eh_bissexto(ano)):
            raise ValueError("data invalida")

        return {'dia': dia, 'mes': mes, 'ano': ano}

    def dia(data):
        return data['dia']

    def mes(data):
        return data['mes']

    def ano(data):
        return data['ano']

    def eh_data(arg):
        if type(arg) != dict or 'dia' not in arg or 'mes' not in arg or 'ano' not in arg:
            return False
        dia, mes, ano = arg["dia"], arg["mes"], arg["ano"]
        return type(dia) == int and type(mes) == int and type(ano) == int and 1 <= mes <= 12 and 1 <= dia <= obter_dias_mes(mes, eh_bissexto(ano))

    def mesma_data(d1, d2):
        if not eh_data(d1) or not eh_data(d2):
            return False
        return dia(d1) == dia(d2) and mes(d1) == mes(d2) and ano(d1) == ano(d2)

    def escreve_data(data):
        def format_num(n):
            return n if n >= 10 else '0{}'.format(n)
        if not eh_data(data):
            raise ValueError("data invalida")
        return "{}/{}/{}{}".format(format_num(dia(data)), format_num(mes(data)), abs(ano(data)), " AC" if ano(data) < 0 else "")

    def data_anterior(d1, d2):
        if not eh_data(d1) or not eh_data(d2):
            raise ValueError("argumentos invalidos")

        return ano(d1) < ano(d2) or \
            ano(d1) == ano(d2) and mes(d1) < mes(d2) or \
            ano(d1) == ano(d2) and mes(d1) == mes(d2) and dia(d1) < dia(d2)

    def idade(d1, d2):
        if not eh_data(d1) or not eh_data(d2):
            raise ValueError("argumentos invalidos")
        if data_anterior(d2, d1):
            raise ValueError("idade: a pessoa ainda não nasceu")

        age = ano(d2) - ano(d1)
        if mes(d1) < mes(d2) or (mes(d1) == mes(d2) and dia(d1) < dia(d2)):
            age += 1

        return age
    ```

4.  ```python
    # R[dd:mm:aaaa hh:mm:ss] = (data, relógio)

    def cria_time_stamp(data, relogio):
        if not eh_data(data) or not eh_relogio(relogio):
            raise ValueError("argumentos invalidos")

        return (data, relogio)

    def data(ts):
        return ts[0]

    def relogio(ts):
        return ts[1]

    def eh_time_stamp(arg):
        return type(arg) == tuple and len(arg) == 2 and eh_data(arg[0]) and eh_relogio(arg[0])

    def mesmo_time_stamp(ts1, ts2):
        if not eh_time_stamp(ts1) or not eh_time_stamp(ts2):
            raise ValueError("argumentos invalidos")

        return mesma_data(data(ts1), data(ts2)) and mesmas_horas(relogio(ts1), relogio(ts2))

    def depois_ts(ts1, ts2):
        if not eh_time_stamp(ts1) or not eh_time_stamp(ts2):
            raise ValueError("argumentos invalidos")

        return mesma_data(data(ts1), data(ts2)) and depois_rel(relogio(ts1), relogio(ts2)) or data_anterior(data(ts2), data(ts1))
    ```

5.  ```python
    # R[(x, y)] = (x, y)

    def vetor(x, y):
        if type(x) not in (int, float) or type(y) not in (int, float):
            raise ValueError("argumentos invalidos")
        return (x, y)

    def abcissa(vetor):
        return vetor[0]

    def ordenada(vetor):
        return vetor[1]

    def eh_vetor(arg):
        return type(arg) == tuple and len(arg) == 2 and type(arg[0]) in (int, float) and type(arg[1]) in (int, float)

    def eh_vetor_nulo(v):
        return eh_vetor(v) and abcissa(v) == ordenada(v) == 0

    def vetores_iguais(v1, v2):
        if not eh_vetor(v1) or not eh_vetor(v2):
            raise ValueError("argumentos invalidos")
        return abcissa(v1) == abcissa(v2) and ordenada(v1) == ordenada(v2)

    def prod_escalar(v1, v2):
        if not eh_vetor(v1) or not eh_vetor(v2):
            raise ValueError("argumentos invalidos")
        return abcissa(v1) * abcissa(v2) + ordenada(v1) * ordenada(v2)
    ```

## Capítulo 10

1.  ```python
    def conta_linhas(file_name):
        with open(file_name, 'r') as f:
            return len(list(filter(lambda x: x.strip() != "", f.readlines())))
    ```

2.  ```python
    def conta_vogais(file_name):
        d = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0}
        with open(file_name, 'r') as f:
            for c in f.read():
                if c in d:
                    d[c] += 1
        return d
    ```

3.  ```python
    def copy_file(f1, f2):
        with open(f1, 'r') as f:
            lines = f.readlines()[::-1]
            with open(f2, 'w+') as write_f:
                write_f.writelines(lines)
    ```

4.  ```python
    def concatena(from_f, to_f):
        content = []
        for f_name in from_f:
            with open(f_name, 'r') as f:
                content.extend(f.readlines())
        with open(to_f, 'w+') as f:
            f.writelines(content)
    ```

5.  ```python
    def procura(query, file):
        with open(file, 'r') as f:
            for l in f.readlines():
                if query in l:
                    print(l[:-1])  # remove \n
    ```

6.  ```python
    def corta(from_f, to_f, n):
        with open(from_f, 'r') as f1:
            with open(to_f, 'w+') as f2:
                i = 0
                for l in f1.read():
                    if i >= n:
                        break
                    f2.write(l)
                    i += 1
    ```

7.  ```python
    def ordena(file):
        with open(file, 'r') as f:
            lines = sorted(f.readlines())
        with open(file, 'w') as f:
            f.writelines(lines)
    ```

8.  ```python
    def divide(file_name, n):
        with open(file_name, 'r') as f:
            lines = f.readlines()
            with open(file_name + '0', 'w+') as f0:
                with open(file_name + '1', 'w+') as f1:
                    for l in lines:
                        f0.write(l[:n] + '\n')
                        f1.write(l[n:])
    ```

9.  ```python
    def separa(file_name, c, n):
        def split_line(line, c, n):
            i = 0
            count = 0
            res = ['', '']
            while i < len(line):
                if line[i] == c:
                    count += 1
                res[1 if count == n else 0] += line[i]
                i += 1
            return res

        with open(file_name, 'r') as f:
            lines = f.readlines()
            with open(file_name + '0', 'w+') as f0:
                with open(file_name + '1', 'w+') as f1:
                    for l in lines:
                        l = l.strip('\r\n')
                        l0, l1 = split_line(l, c, n)
                        f0.write(l0 + '\n')
                        f1.write(l1 + '\n')
    ```

## Capítulo 11

1.  ```python
    class estacionamento():
        def __init__(self, capacity):
            self.capacity = capacity
            self.max_capacity = capacity

        def entra(self):
            if self.capacity == 0:
                raise ValueError("estacionamento cheio")
            self.capacity -= 1

        def sai(self):
            if self.capacity == self.max_capacity:
                raise ValueError("estacionamento vazio")

            self.capacity += 1

        def lugares(self):
            return self.capacity
    ```

2.  ```python
    from math import gcd

    class racional:

        def __init__(self, n, d):
            self.n = n
            self.d = d

        def nume(self):
            return self.n

        def deno(self):
            return self.d

        def __repr__(self):
            div = gcd(self.n, self.d)
            return "{}/{}".format(self.n // div, self.d // div)

        def __mul__(self, r2):
            return racional(self.nume() * r2.nume(), self.deno() * r2.deno())

        def __add__(self, other):
            return racional(self.nume() * other.deno() + self.deno() * other.nume(), self.deno() * other.deno())
    ```

3.  ```python
    class automovel:

        def __init__(self, maxFuel, fuel, fuelRate):
            self.maxFuel = maxFuel
            self.fuel = fuel
            self.fuelRate = fuelRate

        def combustivel(self):
            return self.fuel

        def autonomia(self):
            return int((self.fuel * 100) // self.fuelRate)

        def abastece(self, toAdd):
            if self.fuel + toAdd > self.maxFuel:
                raise ValueError("Fuel overflow")
            self.fuel += toAdd
            return '{} Km até abastecimento'.format(self.autonomia())

        def percorre(self, km):
            requiredFuel = (km * self.fuelRate) / 100
            if self.fuel - requiredFuel < 0:
                raise ValueError("Não tem autonomia para esta viagem")
            self.fuel -= requiredFuel
            return '{} Km até abastecimento'.format(self.autonomia())
    ```

4.  ```python
    from random import randrange

    class conjunto:

        def __init__(self, *args):
            self.l = list(set(args))

        def duplica(self):
            return conjunto(*self.l)

        def insere(self, e):
            return self if e in self.l else conjunto(*self.l, e)

        def el_conj(self, e):
            return self.l[randrange(len(self.l))]

        def retira(self, e):
            if e in self.l:
                self.l.remove(e)
            return self

        def cardinal(self):
            return len(self.l)

        def e_conj_vazio(self):
            return self.cardinal == 0

        def pertence(self, e):
            return e in self.l

        def __repr__(self):
            return '{' + ','.join(str(x) for x in self.l) + '}'

        def subconjunto(self, c):
            return all(x in c.l for x in self.l)

        def uniao(self, c):
            return conjunto(*self.l, *c.l)

        def interseccao(self, c):
            return conjunto(*filter(lambda x: x in c.l, self.l))

        def diferenca(self, c):
            return conjunto(*filter(lambda x: x not in c.l, self.l))
    ```

5.  ```python
    class mem_A:

        def __init__(self):
            self._mem = {}

        def val(self, m, n):
            def A(m, n):
                if m == 0:
                    return n + 1
                elif m > 0 and n == 0:
                    return self.val(m-1, 1)
                else:
                    return self.val(m-1, self.val(m, n-1))

            t = (m, n)
            if t not in self._mem:
                self._mem[t] = A(m, n)
            return self._mem[t]

        def mem(self):
            return self._mem
    ```
