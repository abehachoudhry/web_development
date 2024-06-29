"""
Abeha Choudhry
Tuesday, June 25
"""

# define a function that takes two numbers and return the sum of them
def addition(x,y):
    return x+y

# calling function addition()
result = addition(2,5)
print(result)
print(addition(8,-10))

#define a function to calculate the area of a rectangle using the length and the width
def arearectangle(length, width):
    area = length * width
    return area # or you can return length * width

#calling the function arearectangle
print(f"The are of a rectangle is {arearectangle(3,5)}")

#define function to check if a number is postive, negative, or zero
def ispositive(num):
    try:
        if num>0:
            return "positive"
        elif num<0:
            return "negative"
        elif num== 0:
            return "zero"
        else:
            return "undefined"
    except:
        return "undefined"
    

# calling function ispositive()
n = "Peter"
print(f"The number is {ispositive(n)}")

# define a function that check if a number is even number%2 == 0
def iseven(num):
    try:
        if num%2==0:
            return True
        else:
            return False
    except: 
        return "ERROR"

# calling function iseven()
x = "Peter pan"
print(f"Is the number even? {iseven(x)}")


print("/n ============= CLASSES =============")
class MyCLass:
    # attribute (variable)
    i = 12345

    # method (function)
    def testing(self):
        return "Hello World!"
    
# calling claass MyClass

# step 1) create the instance of the class
newclass = MyCLass()

# step 2) call the instance class property
instanceproperty = newclass.i

# step 3) call the instance class method
instancemethod = newclass.testing()

# print result 
print(f"Instance class property {instanceproperty}")
print(f"Instance class method {instancemethod}")

print("/n ============= CLASSES =============")
class Car:
    # instantiation object
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year
        self.odemeter_reading = 0

        # method to return the information of the car 
    def get_descriptive_car(self):
        return (f"{self.year}, {self.make} {self.model}")
        
# create an instance of the class car
newcar = Car("Audi", "a4", 2020)

# access method get_descriptive_car
car_description = newcar.get_descriptive_car()
print(car_description)

