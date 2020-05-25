const username = document.getElementById("uname");
const password = document.getElementById("pass");

function validate()
{
    

    if(username.value.trim()=="")
    {
       alert("Blank Username");
      uname.style.border = "solid 3px red";
      error.innerHTML="Blank Username";
      error.style.color= "red";
      return false;
    }
    else if(password.value.trim()=="")
    {
      alert("Blank Password");
      pass.style.border = "solid 3px red";
      error2.innerHTML="Blank Password";
      error2.style.color= "red";
      return false;
    }
    
    else if(password.value.trim().length<8)
    {
      alert("Password too short, Please Retry");
      pass.style.border = "solid 3px red";
      return false
    }
    else{
      return true;
    }

    // if(username.value.trim()==""|| password.value.trim() == "")
    // {
    //     alert("No Blank Allowed");
    //     return false;
    // }
    // else
    // {
    //   true;
    // }
}