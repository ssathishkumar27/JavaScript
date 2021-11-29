function validate()
{
    var userName = document.getElementById("name").value;
    var fatherName = document.getElementById("fathername").value;
    var email = document.getElementById("mail").value;
    var dateOfBirth = document.getElementById("dob").value;
    var mobileNumber = document.getElementById("mobilenumber").value;
    var address = document.getElementById("currentaddress").value;
    var cityName = document.getElementById("city").value;
    var pinCode = document.getElementById("pincode").value;

     var regx = /^[a-z A-Z]$/;
    var fathernameRegx = /^[a-zA-Z]+$/;
    var emailRegx = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    var dobRegx = /^[0-3]{1}[0-9]{1}[-]{1}[0-1]{1}[0-9]{1}[-]{1}[0-9]{4}$/;
    var mobileRegx = /^[6-9]{1}[0-9]{9}$/;
    var addressRegx = /^[0-9]{1,4}\s{1}[a-z\s]$/;
    var address2Regx = /^[0-9]{1,4}\s{1}[a-z\s]$/;
    var cityRegx = /^[a-z A-Z]+$/;
    var pinCodeRegx = /^[0-9]{6}$/;
    if(userName.value.trim()=="")
    {
        alert("please enter properly!")
    }
    if(regx.test(userName))
    {
        document.getElementById("name").innerHTML="valid";
        document.getElementById("name").style.visibility="visible";
        document.getElementById("name").style.borderColor="green";
    
    }
    else
    {
        
        document.getElementById("name").innerHTML="Invalid";
        document.getElementById("name").style.visibility="visible";
        document.getElementById("name").style.borderColor="red";
        
    }
    if(fathernameRegx.test(fatherName))
    {
        document.getElementById("fathername").innerHTML="valid";
        document.getElementById("fathername").style.visibility="visible";
        document.getElementById("fathername").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("fathername").innerHTML="Invalid";
        document.getElementById("fathername").style.visibility="visible";
        document.getElementById("fathername").style.borderColor="red";
        
    }
    if(emailRegx.test(email))
    {
        document.getElementById("mail").innerHTML="valid";
        document.getElementById("mail").style.visibility="visible";
        document.getElementById("mail").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("mail").innerHTML="Invalid";
        document.getElementById("mail").style.visibility="visible";
        document.getElementById("mail").style.borderColor="red";
        
    }
    if(dobRegx.test(dateOfBirth))
    {
        document.getElementById("dob").innerHTML="valid";
        document.getElementById("dob").style.visibility="visible";
        document.getElementById("dob").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("dob").innerHTML="Invalid";
        document.getElementById("dob").style.visibility="visible";
        document.getElementById("dob").style.borderColor="red";
        
    }
    if(mobileRegx.test(mobileNumber))
    {
        document.getElementById("mobilenumber").innerHTML="valid";
        document.getElementById("mobilenumber").style.visibility="visible";
        document.getElementById("mobilenumber").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("mobilenumber").innerHTML="Invalid";
        document.getElementById("mobilenumber").style.visibility="visible";
        document.getElementById("mobilenumber").style.borderColor="red";
        
    }
    if(mobileRegx.test(mobileNumber))
    {
        document.getElementById("mobilenumber").innerHTML="valid";
        document.getElementById("mobilenumber").style.visibility="visible";
        document.getElementById("mobilenumber").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("mobilenumber").innerHTML="Invalid";
        document.getElementById("mobilenumber").style.visibility="visible";
        document.getElementById("mobilenumber").style.borderColor="red";
        
    }
    if(addressRegx.test(address))
    {
        document.getElementById("currentaddress").innerHTML="valid";
        document.getElementById("currentaddress").style.visibility="visible";
        document.getElementById("currentaddress").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("currentaddress").innerHTML="Invalid";
        document.getElementById("currentaddress").style.visibility="visible";
        document.getElementById("currentaddress").style.borderColor="red";
        
    }
    if(address2Regx.test(address))
    {
        document.getElementById("currentaddress").innerHTML="valid";
        document.getElementById("currentaddress").style.visibility="visible";
        document.getElementById("currentaddress").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("currentaddress").innerHTML="Invalid";
        document.getElementById("currentaddress").style.visibility="visible";
        document.getElementById("currentaddress").style.borderColor="red";
        
    }
    if(addressRegx.test(address))
    {
        document.getElementById("currentaddress").innerHTML="valid";
        document.getElementById("currentaddress").style.visibility="visible";
        document.getElementById("currentaddress").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("currentaddress").innerHTML="Invalid";
        document.getElementById("currentaddress").style.visibility="visible";
        document.getElementById("currentaddress").style.borderColor="red";
        
    }
    if(cityRegx.test(cityName))
    {
        document.getElementById("city").innerHTML="valid";
        document.getElementById("city").style.visibility="visible";
        document.getElementById("city").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("city").innerHTML="Invalid";
        document.getElementById("city").style.visibility="visible";
        document.getElementById("city").style.borderColor="red";
        
    }
    if(pinCodeRegx.test(pinCode))
    {
        document.getElementById("pincode").innerHTML="valid";
        document.getElementById("pincode").style.visibility="visible";
        document.getElementById("pincode").style.borderColor="green";
    
    }
    else
    {
        document.getElementById("pincode").innerHTML="Invalid";
        document.getElementById("pincode").style.visibility="visible";
        document.getElementById("pincode").style.borderColor="red";
        
    }
}
