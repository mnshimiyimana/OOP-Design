# OOP Design & Coding

## Deliverables:

1. JavaScript Code: Submit your complete JavaScript code via the GitHub URL implementing the classes and functionalities.
2. Documentation: Provide comments within your code to explain the purpose of each class, property, and method.
3. Demonstration: Create a basic HTML file to demonstrate how to use your classes and functionalities. This could involve creating objects, assigning residences to students, submitting maintenance requests, etc.

class Residence {
-name: string
-address: string
-size: number
-isOccupied: boolean
}

    class Student {
        -name: string
        -studentId: string
        -gender: string
        -assignedResidence: Residence
    }
    
    class DormRoom {
        -numBedrooms: number
    }
    
    class Apartment {
        -numBedrooms: number
    }
    
    class MaintenanceRequest {
        -description: string
        -status: string
        -submittedBy: Student
        -assignedTo: Employee
    }
    
    class Employee {
        -name: string
    }
    
    Residence <|-- DormRoom
    Residence <|-- Apartment
    Student "1" -- "1" Residence : assignedResidence
    Student "1" -- "1" MaintenanceRequest : submittedBy
    Employee "1" -- "1" MaintenanceRequest : assignedTo