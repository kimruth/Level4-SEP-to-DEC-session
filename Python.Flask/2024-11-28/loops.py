# lists = [ 'Orange', 'Apple', 'Pineaple' ]

# for index, list in enumerate(lists):
#     print(list)
#     print(index)

array = [ '1', '2', '3', '4', '5' ]
for index, element in enumerate(array):
    if index %2==0:
        print(element)

numbers = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10' ]
N = int(input('Please enter a number: '))
for i in range(N):
    if N > 0:
        total_sum = sum(range(N))
        print(f"The sum of all numbers from 1 to {N} is: {total_sum}")
    else :
        print("Please enter a positive number.")
        break
    
number = int(input('Please enter a positive number: '))
if number <= 0:
    print("Please enter a positive number.")
else : 
    result = sum(range(1, number))
    print(f"Result equal to: {result}")