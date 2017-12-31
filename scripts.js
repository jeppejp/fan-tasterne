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
    var output = document.getElementById("signup_error_output");
    var newele = document.createElement('div');
    newele.id = 'alert';
    newele.innerHTML = "NEJ TAK DO!";
    output.appendChild(newele);
}

document.addEventListener("DOMContentLoaded", function() {
    var converter = new showdown.Converter();
    var html = converter.makeHtml(text);
    var out = document.getElementById('output');
    out.innerHTML = html;
});
