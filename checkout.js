function getinfo() {
    var name = document.forms["RegForm"]["Name"];
    var phone = document.forms["RegForm"]["Telephone"];
    var email = document.forms["RegForm"]["EMail"];
    var gender = document.forms["RegForm"]["Gender"];
    var age = document.forms["RegForm"]["Age"];
    var district = document.forms["RegForm"]["District"];
    var address = document.forms["RegForm"]["Address"];
    var postalcode = document.forms["RegForm"]["PostalCode"];

    if (name.value == "") {
      window.alert("Name cannot be empty.");
      name.focus();
      return false;
    }

    if (phone.value == "") {
      window.alert("Telephon number cannot be empty.");
      phone.focus();
      return false;
    }

    if (email.value == "") {
      window.alert("Email address must be valid.");
      email.focus();
      return false;
    }
    
    if (gender.value == "") {
      window.alert("Gender cannot be empty.");
      gender.focus();
      return false;
    }

    if (age.value == "") {
      window.alert("Age cannot be empty.");
      age.focus();
      return false;
    }

    if (district.value == "") {
      window.alert("District cannot be empty.");
      district.focus();
      return false;
    }

    if (address.value == "") {
      window.alert("Address cannot be empty.");
      address.focus();
      return false;
    }

    if (postalcode.value == "") {
      window.alert("Postal code cannot be empty.");
      postalcode.focus();
      return false;
    }

    return true;
  }