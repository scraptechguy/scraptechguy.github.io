# Hey! I see you're on your way to ace the computer science test...

### Table of contents 

+ <a href="https://github.com/scraptechguy/scraptechguy.github.io/blob/main/index.md#conditional-formatting">Conditional formatting</a>
+ <a href="https://github.com/scraptechguy/scraptechguy.github.io/blob/main/index.md#graphs">Graphs</a>
+ <a href="https://github.com/scraptechguy/scraptechguy.github.io/blob/main/index.md#relative-and-absolute-referencing">Relative and absolute referencing</a>
+ <a href="https://github.com/scraptechguy/scraptechguy.github.io/blob/main/index.md#ifs">Ifs</a>
+ <a href="https://github.com/scraptechguy/scraptechguy.github.io/blob/main/index.md#logical-functions">Logical functions</a>
+ <a href="https://github.com/scraptechguy/scraptechguy.github.io/blob/main/index.md#text-functions">Text functions</a>
+ <a href="https://github.com/scraptechguy/scraptechguy.github.io/blob/main/index.md#data-handling">Data handling</a>

## Conditional formatting

Conditional formating is located in the `Home` section roughly in the middle of the top pane.

![image](https://user-images.githubusercontent.com/75474651/149218125-7ac9d9ba-4826-46f2-915c-707df91d1e9e.png)

You can further manage rules in the Conditional formating menu

![image](https://user-images.githubusercontent.com/75474651/149218374-c43596ed-edb3-4cf4-9a2b-5fd8edd69ade.png)

I expect some sort of Icon set question, nothing to worry about

## Graphs

Graphs are located in the `Insert` section. 

![image](https://user-images.githubusercontent.com/75474651/149218604-28a3801a-02d1-4b43-ae53-e2b46eeb7f7a.png)

I recommend using `Recommended charts`, Excel is pretty smart in these ways.

### Formating a graph

To format a graph, right click it and go through the menu that pops up. 

![image](https://user-images.githubusercontent.com/75474651/149219051-7aa0d2a4-7504-473d-98a7-26e574694efa.png)

If you want to edit the heading or some shit innit, just double click it. Cmon, you're fucking 17

### Reselecting a data set and changing chart type 

You can do both of these in the popup menu after right clicking the whole chart. 

![image](https://user-images.githubusercontent.com/75474651/149219588-ae991f4e-0e27-4e41-b506-3b962b8008b9.png)

![image](https://user-images.githubusercontent.com/75474651/149219526-f254c5db-7c36-46b5-8bd1-a075fd1dd069.png)


## Relative and absolute referencing

## Ifs

If is a basic logical function that does an action only <b>if</b> a certain condition is met. If functions can be nested so every condition is checked. 

Nesting == adding multiple ifs in a row, just like this: 

![image](https://user-images.githubusercontent.com/75474651/149221696-248ba76c-f52f-4558-a177-5db968060837.png)

These ifs are checking the cell number H22. There are three possible options the ifs have to go over. 1) there's a 1 in that cell, 2) there's a 2 in that cell, 
3) there's not 1 nor 2 in that cell. The ifs first check if there's a 1 in that cell, if it is, "there's 1" is the output, if not, another if checks if there's a 2, if there is, the output is "there's 2". If this condition isn't met, the output is "there's not 1 nor 2". If we wanted to check for more numbers, "there's not 1 nor 2" would be replaced with another if. 

(never used the word "if" that many times in a paragraph lol)

## Logical functions 

## Text functions

Text functions are designed to make working with text easier. Here are some useful ones with examples: 

### gender

```
=ČÁST(A2;HLEDAT(";";A2;1)+1;50)
```

### den

```
=KDYŽ(DEN(B2)>9;DEN(B2);CONCAT(0;DEN(B2)))
```

### rok

```
=ROK(B2)
```

### měsíc

```
=KDYŽ(MĚSÍC(B2)>9;MĚSÍC(B2);CONCAT(0;MĚSÍC(B2)))
```

### Serial Number (SN)

```
=KDYŽ(HODNOTA(ČÁST(A2;1;HLEDAT(";";A2)-1))>1000;ČÁST(A2;1;HLEDAT(";";A2)-1);CONCAT("0";ČÁST(A2;1;HLEDAT(";";A2)-1)))
```

### ID10

```
=CONCAT(ZPRAVA(E2;2);KDYŽ(C2="female";F2+50;F2);D2;G2)
```

### ID

```
=KDYŽ(MOD(H2;11)=0;CONCAT(ZPRAVA(E2;2);KDYŽ(C2="female";F2+50;F2);D2;"/";G2);"Invalid")
```

### combine když

```
=KDYŽ(C5>16;"Excellent";KDYŽ(C5>14;"Very Good";KDYŽ(C5>12;"Good";KDYŽ(C5>10;"Pass";KDYŽ(C5<=10;"Failed";" ")))))
```

### zaokrouhlení

```
=KDYŽ(B3<0;MROUND(B3;-10);MROUND(B3;10))
```

### check

```
=KDYŽ((B3-C3)<0;B3-C3+10;KDYŽ((B3-C3)>10;B3-C3-10;"OK"))
```

### Hledat tabulku 

```
=SVYHLEDAT("89"; B6:E20; 4)
```

## Data handling 
