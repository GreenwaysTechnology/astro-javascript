//has a 

function Phone(mobileno = "1234567890") {
    this.mobileno = mobileno
}

function Address(doorno = "doorno", street = "street", city = "city", state = "state", zip = "zip", mobileno = new Phone()) {
    this.doorno = doorno;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.mobileno = mobileno;
}

function Employee(id = 0, name = "defaultName", salary = 0.0, address = new Address()) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    //address - doorno,street,city,state,zipcode-has-a 
    this.address = address;
}
//how to associate objects

var emp = null;

emp = new Employee();
console.log(emp);

var phone = new Phone("9003407867")
var address = new Address("10/5", "gandhi street", "Coimbatore", "Tamil Nadu", "600 001", phone)
emp = new Employee(1, "Subramanian", 1000, address);
console.log(emp);

emp = new Employee(1, "Subramanian", 1000, new Address("10/5", "gandhi street", "Coimbatore", "Tamil Nadu", "600 001", new Phone("9003407867")))