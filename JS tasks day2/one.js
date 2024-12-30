{
  let age = 27;
  if (age > 18) {
    document.getElementById("age").innerHTML = "You are an adult";
  }

  let score = 45;
  if (score <= 50) {
    document.getElementById("score").innerHTML = "You failed the test";
  }

  let name = "John";
  if ((name = "john")) {
    document.getElementById("name").innerHTML = "Hello, John";
  }

  let day = "Monday";
  if ((day != "Saturday", day != "Sunday")) {
    document.getElementById("day").innerHTML = "It's a weekday";
  }

  let num = 4;
  if (num % 2 == 0) {
    document.getElementById("num").innerHTML = "The number is even";
  }

  let char = "a";
  if (char >= "a" && char <= "z") {
    document.getElementById("char").innerHTML = "It's a letter";
  }

  let list = [1, 2, 3];
  if (Array.isArray(list)) {
    document.getElementById("list").innerHTML = "It's an array";
  }

  let x = 5;
  if (x > 0) {
    document.getElementById("positive").innerHTML = "x is a positive number";
  }

  let y = -5;
  if (y < 0) {
    document.getElementById("negative").innerHTML = "y is a negative number";
  }

  let z = 9;
  if (z % 3 == 0) {
    document.getElementById("mult").innerHTML = "z is a multiple by 3";
  }

  let GPA = "A";
  switch (GPA) {
    case "F":
      document.getElementById("gpa").innerHTML = "Failed";
      break;
    case "C":
      document.getElementById("gpa").innerHTML = "Good";
      break;
    case "B":
      document.getElementById("gpa").innerHTML = "Very good";
      break;
    case "A":
      document.getElementById("gpa").innerHTML = "Excellent";
      break;
    default:
      document.getElementById("gpa").innerHTML = "You didn't attempt the quiz";
  }

  let month = "January";
  switch (month) {
    case "January":
    case "February":
    case "December":
      document.getElementById("month").innerHTML = "Winter";
      break;
    case "March":
    case "April":
    case "May":
      document.getElementById("month").innerHTML = "Spring";
      break;
    case "June":
    case "July":
    case "August":
      document.getElementById("month").innerHTML = "Summer";
      break;
    case "September":
    case "October":
    case "November":
      document.getElementById("month").innerHTML = "Autumn";
      break;
    default:
      document.getElementById("month").innerHTML = "Love from Earth";
  }

  let password = "password123";
  if (password.length >= 8) {
    document.getElementById("pass").innerHTML = "Your password is strong";
  }
}
{
  let email = "mohammedziadeh6@gmail.com";
  let password = "momo550011";

  if (email != "mohammedziadeh6@gmail.com") {
    document.getElementById("porg").innerHTML = "Incorrect email";
  } else if (password != "momo550011") {
    document.getElementById("porg").innerHTML = "Incorrect password";
  } else {
    document.getElementById("porg").innerHTML = "Welcome";
  }
}
{
  
}
