import math

class Cercle:
    def __init__(self, radius):
        self.radius = radius
        # self.center = (0, 0)
        
    def diameter(self):
        return (self.radius * 2)
    
    def perimeter(self):
        return (2 * 3.14 * self.radius)
    
    def area(self):
        return (3.14 * (self.radius ** 2))
    
cercler = Cercle(10)
print(f"The diamter is: {cercler.diameter()}")
print(f"The perimeter is: {cercler.perimeter()}")
print(f"The area is: {cercler.area()}")



# --------------------------------------------------------------------------------
class Cercle:
    def __init__(self, radius):
        self.radius = radius
        # self.center = (0, 0)
        
    def diameter(self):
        return (self.radius * 2)
    
    def perimeter(self):
        return (self.radius * math.pi) * 2
    
    def area(self):
        return (self.radius ** 2) * math.pi
    
cercler = Cercle(10)
print(f"The diamter is: {cercler.diameter()}")
print(f"The perimeter is: {cercler.perimeter()}")
print(f"The area is: {cercler.area()}")