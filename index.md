## IVT

<b>The test <a href="https://youtu.be/j5a0jTc9S10" target="_blank">here</a></b>

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

=KDYŽ(HODNOTA(ČÁST(A2;1;HLEDAT(";";A2)-1))>1000;ČÁST(A2;1;HLEDAT(";";A2)-1);CONCAT("0";ČÁST(A2;1;HLEDAT(";";A2)-1)))

### ID10

=CONCAT(ZPRAVA(E2;2);KDYŽ(C2="female";F2+50;F2);D2;G2)

### ID

=KDYŽ(MOD(H2;11)=0;CONCAT(ZPRAVA(E2;2);KDYŽ(C2="female";F2+50;F2);D2;"/";G2);"Invalid")

### combine když

=KDYŽ(C5>16;"Excellent";KDYŽ(C5>14;"Very Good";KDYŽ(C5>12;"Good";KDYŽ(C5>10;"Pass";KDYŽ(C5<=10;"Failed";" ")))))

### zaokrouhlení

=KDYŽ(B3<0;MROUND(B3;-10);MROUND(B3;10))

### check

=KDYŽ((B3-C3)<0;B3-C3+10;KDYŽ((B3-C3)>10;B3-C3-10;"OK"))

