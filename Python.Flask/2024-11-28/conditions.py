age = input("Please enter your age: ")

age = int(age)

# if statement
if age >= 18:
    print("You are major")

# if else statement
if age >= 18:
    print("You are major")
else :
    print("You are a minor.")


# Ask the users their age
age = int(input("Please enter your age: "))

# Determine reduction based on age
if age < 12:
    reduction = 50
    print ( f"You get a { reduction } % discount!" )
elif age <= 19: 
    reduction = 25
    print ( f"You get a { reduction } % discount!" )
elif age <= 65:
    reduction = 30
    print ( f"You get a { reduction } % discount!" )
else :
    print ( "You pay full price!" )


name = input("Please enter your name: ")
age = int( input( "Please enter your age: " ) )
if age >= 18:
    print( f"Hello, {name} you are a major." )
else:
    print( f"Hello, {name} you are a minor." )


# Match (switch case)
match age:
    case _ if age < 12:
        reduction = 50
        print ( f"You have { reduction } %" )
    case _ if age <= 19:
        reduction = 25
        print( f"You have { reduction } %" )
    case _ if age <= 65:
        reduction = 30
        print( f"You have { reduction } %" )
    case _:
        print( "No rreduction!" )