urce
menu

 
Custom Search

share
Home
Javascript Home
▼JavaScript Form Validation
HTML Form Validation
Checking for non-empty
Checking for all letters
Checking for all numbers
Checking for Floating numbers
Checking for letters and numbers
Checking string length
Email Validation
Date Validation
A sample Registration Form Validation onsubmit
A sample Registration Form Validation field level
Phone No. Validation
Credit Card No. Validation
Password Validation
IP Address Validation
JavaScript Form Validation
JavaScript Form Validation using a Sample Registration Form
Last update on May 22 2019 10:19:46 (UTC/GMT +8 hours)

 
Form Validation
In this document, we have discussed JavaScript Form Validation using a sample registration form. The tutorial explores JavaScript validation on submit with detail explanation.

Following pictorial shows in which field, what validation we want to impose.

JavaScript Form Validation using sample registration form
How would we set those validations

We will create JavaScript functions (one for each input field whose value is to validate) which check whether a value submitted by user passes the validation.

All those functions are called from another function.

It sets the focus to the input field until the user supplies a valid value.

When the user does so, they may proceed and can supply value to the next available field.

The later JavaScript function created is called on the onsubmit event of the form.

HTML Code of the Sample Registration Form

<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8">
<title>JavaScript Form Validation using a sample registration form</title>
<meta name="keywords" content="example, JavaScript Form Validation, Sample registration form" />
<meta name="description" content="This document is an example of JavaScript Form Validation using a sample registration form. " />
<link rel='stylesheet' href='js-form-validation.css' type='text/css' />
<script src="sample-registration-form-validation.js"></script>
</head>
<body onload="document.registration.userid.focus();">
<h1>Registration Form</h1>
Use tab keys to move from one input field to the next.
<form name='registration' onSubmit="return formValidation();">
<ul>
<li><label for="userid">User id:</label></li>
<li><input type="text" name="userid" size="12" /></li>
<li><label for="passid">Password:</label></li>
<li><input type="password" name="passid" size="12" /></li>
<li><label for="username">Name:</label></li>
<li><input type="text" name="username" size="50" /></li>
<li><label for="address">Address:</label></li>
<li><input type="text" name="address" size="50" /></li>
<li><label for="country">Country:</label></li>
<li><select name="country">
<option selected="" value="Default">(Please select a country)</option>
<option value="AF">Australia</option>
<option value="AL">Canada</option>
<option value="DZ">India</option>
<option value="AS">Russia</option>
<option value="AD">USA</option>
</select></li>
<li><label for="zip">ZIP Code:</label></li>
<li><input type="text" name="zip" /></li>
<li><label for="email">Email:</label></li>
<li><input type="text" name="email" size="50" /></li>
<li><label id="gender">Sex:</label></li>
<li><input type="radio" name="msex" value="Male" /><span>Male</span></li>
<li><input type="radio" name="fsex" value="Female" /><span>Female</span></li>
<li><label>Language:</label></li>
<li><input type="checkbox" name="en" value="en" checked /><span>English</span></li>
<li><input type="checkbox" name="nonen" value="noen" /><span>Non English</span></li>
<li><label for="desc">About:</label></li>
<li><textarea name="desc" id="desc"></textarea></li>
<li><input type="submit" name="submit" value="Submit" /></li>
</ul>
</form>
</body>
</html>

Copy
sample-registration-form-validation.js is the external JavaScript file which contains the JavaScript ocde used to validate the form. js-form-validation.css is the stylesheet containing styles for the form. Notice that for validation, the JavaScript function containing the code to validate is called on the onSubmit event of the form.

For the sake of demonstration, we have taken five countries only. You may add any number of countries in the list.

CSS Code of the Sample Registration Form


h1 {
margin-left: 70px;
}
form li {
list-style: none;
margin-bottom: 5px;
}

form ul li label{
float: left;
clear: left;
width: 100px;
text-align: right;
margin-right: 10px;
font-family:Verdana, Arial, Helvetica, sans-serif;
font-size:14px;
}

form ul li input, select, span {
float: left;
margin-bottom: 10px;
}

form textarea {
float: left;
width: 350px;
height: 150px;
}

[type="submit"] {
clear: left;
margin: 20px 0 0 230px;
font-size:18px
}

p {
margin-left: 70px;
font-weight: bold;
}

Copy
JavaScript code for validation

JavaScript function which is called on onSubmit

This function calls all other functions used for validation.

function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uadd = document.registration.address;
var ucountry = document.registration.country;
var uzip = document.registration.zip;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex; if(userid_validation(uid,5,12))
{
if(passid_validation(passid,7,12))
{
if(allLetter(uname))
{
if(alphanumeric(uadd))
{ 
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
if(validsex(umsex,ufsex))
{
}
} 
}
} 
}
}
}
}
return false;
}
