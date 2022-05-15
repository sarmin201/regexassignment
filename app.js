
/*Create an email pattern 
# Create a  username pattern
# Create a Bangladeshi phone number pattern
# Create a password pattern 
# Create a zipcode pattern  */

// Create an username pattern 
let userName="sarminS1";

let userNamePattern=/^[a-z]{1,}[A-Z][0-9]$/;

console.log(userNamePattern.test(userName));

//Create an email pattern 

let emailAddress="sarmin201@yahoo.com"

let emailPattern=/^[a-z0-9_.]*@[a-z]{2,5}\.[a-z]{2,4}$/;
console.log(emailPattern.test(emailAddress));

//Create a Bangladeshi phone number pattern

let phoneNumber="+8801716242957";

let phoneNumberPattern=/^(\+8801|00880)[0-9]{9}$/;

console.log(phoneNumberPattern.test(phoneNumber));

//Create a zipcode pattern 

let  postcode=3337;
let postcodePattern=/^[0-9]{4}$/;

console.log(postcodePattern.test(postcode));

//Create a password pattern

let password1="dighOlia123#";

let password1Pattern=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

console.log(phoneNumberPattern.test(phoneNumber));


