class Animal:
    
    def __init__(self, name, food):
        self.name = name
        self._food = food
    
    def speak(self):
        print(f"{self.name} speaks ...")
        
class Dog(Animal):
    
    def __init__(self, name, race):
        super().__init__(name)
        self.race = race
        
    def get_food(self):
        return self._food
        
dog = Dog("Idriss", "Mouse")
dog.speak()   