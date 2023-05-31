function sub() 
{
        //retrieving data
        var name = document.getElementById("ff1").value;
        var ph = document.getElementById("ff2").value;
        var email = document.getElementById("ff3").value;
        var password = document.getElementById("ff4").value;
        alert("registered successfully")

        //creating data
        var name1 = localStorage.setItem("name",name);
        var ph1 = localStorage.setItem("ph",ph);
        var email1 = localStorage.setItem("email",email);
        var password1 = localStorage.setItem("password",password);
} 
function log()
{
        //retreiving data
        var email = document.getElementById("fl1").value;
        var password = document.getElementById("fl2").value;

        var email1 = localStorage.getItem("email",email);
        var password1 = localStorage.getItem("password",password);

        if (email==email1 && password==password1)
        {
                alert("login successful ! click ok to continue");
                location.replace("fin.html");
        } 
        else
        {
                alert("wrong email or password");
        }
}
function fin()
{
        var name = localStorage.getItem("name",name);
        var ph = localStorage.getItem("ph",ph);
        var email = localStorage.getItem("email",email);
        var password = localStorage.getItem("password",password);
        localStorage.clear();
        //alert(" hai " + name + " your registered phone number " + ph + " and email " + email );
        // localStorage.removeItem("email");
        // localStorage.removeItem("name");
        // localStorage.removeItem("ph");
        // localStorage.removeItem("password");
        alert("your data will be deleted");
        location.replace("register.html");

}
function fun() {
        document.getElementById("f1").reset(); 
}
