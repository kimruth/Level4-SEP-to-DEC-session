import calcul
from calcul import addition

a = float(input ("Please enter the first number: "))
b = float(input ("Please enter the second number: "))
sign = input("Please select one sign in; +, -, *, / : ")

result = None

if (sign == '+'):
    result = calcul.addition(a, b)
elif (sign == '-'):
    result = calcul.substraction(a, b)
elif (sign == '*'):
    result = calcul.multiplication(a, b)
elif (sign == '/'):
    result = calcul.division(a, b)
else:
    result = "Please select a good sign"
    
print(f"Result: {result}")