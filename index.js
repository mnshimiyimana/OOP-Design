// Residence class
export class Residence {
  constructor(name, address, size) {
    this.name = name;
    this.address = address;
    this.size = size;
    this.isOccupied = false;
  }
}

// DormRoom class
export class DormRoom extends Residence {
  constructor(name, address, size, numBedrooms) {
    super(name, address, size);
    this.numBedrooms = numBedrooms;
  }
}

// Apartment class
export class Apartment extends Residence {
  constructor(name, address, size, numBedrooms) {
    super(name, address, size);
    this.numBedrooms = numBedrooms;
  }
}

// Student class
export class Student {
  constructor(name, studentId, gender) {
    this.name = name;
    this.studentId = studentId;
    this.gender = gender;
    this.assignedResidence = null;
  }

  assignResidence(residence) {
    this.assignedResidence = residence;
    residence.isOccupied = true;
  }
}

// MaintenanceRequest class
export class MaintenanceRequest {
  constructor(description, student) {
    this.description = description;
    this.status = "Submitted";
    this.submittedBy = student;
    this.assignedTo = null;
  }

  assignEmployee(employee) {
    this.assignedTo = employee;
  }

  updateStatus(status) {
    this.status = status;
  }
}

// Employee class
export class Employee {
  constructor(name) {
    this.name = name;
  }
}
