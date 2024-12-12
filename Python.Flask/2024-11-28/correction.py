# EXERCISE 2 || PALINDROME
word = input("Please enter a word, a phrase or a number: ")

remove_space = ''.join(word.split()).lower()
lenght = len(remove_space)
is_palindrome = True

for i in range(lenght // 2) :
    if remove_space[i] != remove_space[lenght -i -1] :
        is_palindrome = False
        break
    
if is_palindrome :
        print("Yes")
else :
        print("No")
        
        
# EXERCISE 3 || PRIMES NOMBERS
def say_hello():
    print("Hello, world!")
    
def say_hello_with_name(name):
    print(f"Hello, {name}!")
    
say_hello_with_name("Seven Academy")

def format_name(name):
    return name.upper()

print(format_name("Succeded..."))
    
def calcul(first_number = 2, second_number = 100, operator = '+'):
    if operator == '+':
        return first_number + second_number
    # if second_number is 0:
    # if second_number == 0:
    # if second_number is not 0:
    if second_number != 0:
        return first_number / second_number
    else:
        return "Please enter the second_number."
    
# calcul(2, 100, '-')
# calcul(operator='-')
print(calcul(operator='-'))