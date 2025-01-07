class Animal:
    def __init__(self, name, specie):
        self.name = name
        self.specie = specie
        
    def speak(self):
        print(f"{self.name} say hello to you")
    
dog = Animal('Waff-Waff', 'dog')
cat = Animal('Minou', 'cat')
dog.speak()
cat.speak()