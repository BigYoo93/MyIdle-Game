$(document).ready(function(){
    var totalUser = 0;

    $("#icb").click(function(){
        addNewUsers()
        disableBtn("icb",5000)
    });

    function addNewUsers(){
        totalUser += 1;
        console.log('Klik '+ totalUser)
        $("#total-user").html("Urzytkownicy : " + totalUser);
        
    }

    function disableBtn(btn,DisableTime){
        var button = document.getElementById(btn);
        button.disabled = true;
        console.log('9 Disable button?' + button.disabled)
        setTimeout(function() {
            button.disabled = false;
            console.log('13 Disable button?' + button.disabled)
        }, DisableTime);
    }

});


