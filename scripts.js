function validate_tilmeldte()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var con = document.getElementById("tilmeldte_container");
            con.innerHTML = myObj;
        }
    };
    xmlhttp.open("GET", "tilmeldte.php", true);
    xmlhttp.send();
}

function view_tilmeldte()
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var con = document.getElementById("tilmeldte_container");
            var text = "";
            for (i in myObj)
            {
                if (myObj[i].pay == 1)
                {
                    var ball = "<figure class=\"fig_payed\"></figure>";
                }else{
                    var ball = "<figure class=\"fig_notpayed\"></figure>";
                }

                text += "<div>" + ball + "  " +myObj[i].id + " - " + myObj[i].name + "</div>";
            }
            con.innerHTML = text;
        }
    };
    xmlhttp.open("GET", "tilmeldte.php", true);
    xmlhttp.send();
}

function validate_signup()
{

    var button = document.getElementById('signup_button');
    button.disabled = true;
    var input_name = document.getElementById('name').value;
    console.log(input_name);
    
    
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            var output = document.getElementById("signup_error_output");
            output.innerHTML = "";
            var newele = document.createElement('div');
            newele.innerHTML = myObj.text;
            if (myObj.error == 1)
            {
                newele.id = 'alert';
                var button = document.getElementById('signup_button');
                button.disabled = false;
            }else
            {
                newele.id = 'noerror';
            }
            output.appendChild(newele);
        }
    };
    xmlhttp.open("GET", "do_tilmelding.php?name="+input_name, true);
    xmlhttp.send();
}

document.addEventListener("DOMContentLoaded", function() {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(text);
    var out = document.getElementById('output');
    out.innerHTML = html;
});
