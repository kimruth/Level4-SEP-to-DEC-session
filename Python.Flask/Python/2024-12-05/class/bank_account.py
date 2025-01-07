class BankAccount:
    def __init__(self, balance):
        self.__balance = balance
        
    def deposit(self, amount):
        self.__balance += amount
        
    def withdrow(self, amount):
        if (amount > self.__balance):
            print("Insuffiient balance.")
        else:
            self.__balance -= amount
        
    def show_balance(self):
        print(f"The balane is {self.__balance}")
        
Ruth = BankAccount(15000)
Ruth.deposit(250000000)
Ruth.withdrow(150000)
Ruth.show_balance()