# EXERCISE 2 || PALINDROME
def is_palindrome(text):
    # Remove spaces and convert to lowercase
    cleaned_text = ''.join(text.split()).lower()
    # Check if the cleaned text is equal to its reverse
    return cleaned_text == cleaned_text[::-1]

# Ask the user for input
user_input = input("Enter a word or phrase to check if it's a palindrome: ")

# Check and print the result
if is_palindrome(user_input):
    print("The input is a palindrome!")
else:
    print("The input is not a palindrome.")


# --------------------------------------------------------------------------------------
# EXERCISE 3 || GENERATE PRIME NUMBERS
def is_prime(num):
    # """Check if a number is a prime number."""
    if num < 2:
        return False
    for i in range(2, num):
        if num % i == 0:
            return False
    return True

def generate_primes(count):
    # """Generate the first `count` prime numbers."""
    primes = []
    number = 2  # Start checking from 2
    while len(primes) < count:
        if is_prime(number):
            primes.append(number)
        number += 1
    return primes

# Ask the user for input
try:
    num_primes = int(input("How many prime numbers do you want to display? "))
    if num_primes <= 0:
        print("Please enter a positive number.")
    else:
        prime_numbers = generate_primes(num_primes)
        print(f"The first {num_primes} prime numbers are: {prime_numbers}")
except ValueError:
    print("Please enter a valid integer.")


# --------------------------------------------------------------------------------------
# EXERCISE 4 || GUESSING GAME
import random

def guessing_game():
    # Generate a random number between 1 and 100
    secret_number = random.randint(1, 100)
    print("Welcome to the Guessing Game!")
    print("I have chosen a number between 1 and 100. Try to guess it!")

    attempts = 0
    while True:
        try:
            # Get the player's guess
            guess = int(input("Enter your guess: "))
            attempts += 1
            
            if guess < 1 or guess > 100:
                print("Please guess a number between 1 and 100.")
            elif guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You've guessed the number {secret_number} in {attempts} attempts.")
                break
        except ValueError:
            print("Invalid input. Please enter a valid number.")

# Run the game
import random

def guessing_game():
    # Generate a random number between 1 and 100
    secret_number = random.randint(1, 100)
    print("Welcome to the Guessing Game!")
    print("I have chosen a number between 1 and 100. Try to guess it!")

    attempts = 0
    while True:
        try:
            # Get the player's guess
            guess = int(input("Enter your guess: "))
            attempts += 1
            
            if guess < 1 or guess > 100:
                print("Please guess a number between 1 and 100.")
            elif guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You've guessed the number {secret_number} in {attempts} attempts.")
                break
        except ValueError:
            print("Invalid input. Please enter a valid number.")

# Run the game
import random

def guessing_game():
    # Generate a random number between 1 and 100
    secret_number = random.randint(1, 100)
    print("Welcome to the Guessing Game!")
    print("I have chosen a number between 1 and 100. Try to guess it!")

    attempts = 0
    while True:
        try:
            # Get the player's guess
            guess = int(input("Enter your guess: "))
            attempts += 1
            
            if guess < 1 or guess > 100:
                print("Please guess a number between 1 and 100.")
            elif guess < secret_number:
                print("Too low! Try again.")
            elif guess > secret_number:
                print("Too high! Try again.")
            else:
                print(f"Congratulations! You've guessed the number {secret_number} in {attempts} attempts.")
                break
        except ValueError:
            print("Invalid input. Please enter a valid number.")

# Run the game
guessing_game()