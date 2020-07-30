// array months , weeks and names with linking as wriitten in your notepad


function calc(){

  function akanName (weekDay, gender){
    // male highlighting
      if (weekDay === 0 && gender === "male"){
        return ("Kwasi")
      }
      if (weekDay === 1 && gender === "male"){
        return ("Kwadwo")
      }
      if (weekDay === 2 && gender === "male"){
        return ("Kwabena")
      }
      if (weekDay === 3 && gender === "male"){
        return ("Kwaku")
      }
      if (weekDay == 4 && gender === "male"){
        return ("Yaw")
      }
      if (weekDay === 5 && gender === "male"){
        return ("Kofi")
      }
      if (weekDay === 6 && gender === "male"){
        return ("Kwame")
      }
      //check female names
      if (weekDay === 0 && gender === "female"){
        return ("Akosua")
      }
      if (weekDay === 1 && gender === "female"){
        return ("Adwoa")
      }
      if (weekDay === 2 && gender === "female"){
        return ("Abenaa")
      }
      if (weekDay === 3 && gender === "female"){
        return ("Akua")
      }
      if (weekDay === 4 && gender === "female"){
        return ("Yaa")
      }
      if (weekDay === 5 && gender === "female"){
        return ("Afua")
      }
      if (weekDay === 6 && gender === "female"){
        return ("Ama")
      }
      //LIMIT APPLICATION
      else {
        return(alert("INVALID DATE! Please use 'MM/DD/YYYY' format"));
      }
    }
    //birthday
    var date = document.forms["form"]["date"].value;
    var newDate = new Date (date);
    // try to limit days to respond a certain way once made contact with an invalid input
    var weekDay = newDate.getDay();

    //gender
    var genderInput = document.getElementById("gender");
    var gender = genderInput.options[genderInput.selectedIndex].text;



    var result = akanName(weekDay, gender);
    document.getElementById("displayDay").innerHTML = 'You were born on ' + newDate;
    document.getElementById("displayDay").innerHTML = "You were born on " + newDate;

    // console.log(akanName(weekDay, gender));
    }
