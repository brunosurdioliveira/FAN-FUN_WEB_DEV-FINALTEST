// Empty global array to store Customer objects
var customerArray = [];

// Constructor for a Customer object, using the properties and methods
function Customer(firstName, lastName, city, province, birthDate, gender) {
    function _calculateAge(birthday) { // birthday is a date
        var ageDifMs = Date.now() - birthday.getTime(); // get the difference between today and the birthday in ms
        var ageDate = new Date(ageDifMs); // Get this difference(ms) in date
        // date.getUTCFullYear() - It returns the year of birth in the specific date accourding to Universal time
        // Subtract the Age in year of 1970 which is the reference (.getTime() return number of ms since midnight Jan 1 1970 and a specified date)
        // Using Math.abs() we get a positive age
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    this.firstName = firstName;                    // String
    this.lastName = lastName;                      // String
    this.city = city;                              // String
    this.province = province;                      // String
    this.birthDate = birthDate;                    // Date Object
    this.gender = gender;                          // String
    this.age = _calculateAge(birthDate);		   // Number
    this.fullName = `${firstName} ${lastName}`;    // String

    // Method
    this.toString = function () {
        return `${this.fullName} is a ${this.age} year old ${this.gender} from ${this.city}, ${this.province}.`
    }
}

// Function that creates some sample of customer and adds them to the customerArray. 
function createSample() {
    customerArray.push(new Customer("Jeff", "Smith", "London", "ON", new Date("March 13, 2003"), "Male"));
    customerArray.push(new Customer("Pauline", "MacIntyre", "Sydney", "NS", new Date("October 20, 1995"), "Female"));
    customerArray.push(new Customer("Kevin", "Firth", "London", "ON", new Date("September 19, 1979"), "Male"));
    customerArray.push(new Customer("Carol", "Green", "London", "ON", new Date("July 14, 1997"), "Female"));
    customerArray.push(new Customer("Lynda", "Reynolds", "Winnipeg", "MB", new Date("June 17, 1983"), "Female"));
}

// Function that displays customers to the “Customers” section
// Loop through the array calling the toString() method for each customer and output 
function displayCustomers() {
    var customerOutput = "";
    customerArray.forEach(function (customer) {
        customerOutput = customerOutput.concat(customer.toString())
        customerOutput = customerOutput.concat("<br>")
    });
    document.getElementById("divCustomerOutput").innerHTML = customerOutput;
}

// Function that will get all input from the form and register a new customer
function registerCustomer() {
    // Get the input elements
    var firstNameEL = document.getElementById("tbFirstName");
    var lastNameEL = document.getElementById("tbLastName");
    var cityEL = document.getElementById("tbCity");
    var provinceEL = document.getElementById("ddProvince");
    var birthDateEL = document.getElementById("tbBirthDate");
    var genderEL = document.getElementById("ddGender");

    // Customer object and populate the object with the input collected from the form input
    var customer = new Customer(firstNameEL.value, lastNameEL.value, cityEL.value, provinceEL.value, new Date(birthDateEL.value), genderEL.value);

    // Add the Customer object to customerArray
    customerArray.push(customer);

    // Clear all the input
    firstNameEL.value = "";
    lastNameEL.value = "";
    cityEL.value = "";
    provinceEL.value = "";
    birthDateEL.value = "";
    genderEL.value = "";

    // Call the function to display Customer
    displayCustomers();
}

// function that will search the customerArray and output the following information based on the filter fields
function queryData() {
    // Total number of customers
    var totalNumberCustomers = customerArray.length;

    // Total number of customers living in [Selected Province]
    var queryProvinceEL = document.getElementById("ddQueryProvince");

    // Array.filter(function() { return //any criteria}) - it returns an array with all array elements that passed in the criteria
    var totalNumberCustomersLivingIn = customerArray.filter(function (customer) {
        // Return all array elements where the province is the same as the selected one
        return customer.province === queryProvinceEL.value
    }).length; // .length to get the length of the array 

    // Total number of customers matching [Selected Gender]
    var queryGenderEL = document.getElementById("ddQueryGender");

    // Other sintax for array.filter (element => {return //some criteria})
    var totalNumberCustomersGenderMatching = customerArray.filter(customer => {
        // Return all elements with the same gender selected
        return customer.gender === queryGenderEL.value
    }).length; // .length to get the length of the array

    // Total number of customers aged [Entered Age] and older
    var queryAgeEL = document.getElementById("tbQueryAge");
    var totalNumberCustomersAgedAndOlder = customerArray.filter(customer => {
        // Filter all the elements where the age is larger or equal than the entered age
        return customer.age >= queryAgeEL.value
    }).length; // .length to get the length of the array

    // Output the informations based on filters
    document.getElementById("divQueryOutput").innerHTML = `Total number of customers: ${totalNumberCustomers}<br>
			Number of customers living in ${queryProvinceEL.value}: ${totalNumberCustomersLivingIn}<br>
			Number of ${queryGenderEL.value} customers: ${totalNumberCustomersGenderMatching}<br>
			Number of customers ${queryAgeEL.value} or older: ${totalNumberCustomersAgedAndOlder}<br>`
}

// Functions called when the page loads
function initialize() {
    createSample();
    displayCustomers();
    queryData();
}