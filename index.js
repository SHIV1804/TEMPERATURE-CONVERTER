




$("#Celcius").on('input',function() {
        var value = this.value;
        $(".temp-box").html((1.8*value+32)+"°F\n"+(Number(value)+273.15)+"°K\n");
    });

$("#Kelvin").on('input',function() {
        var value = this.value;
    $(".temp-box").html((Number(value) - 273.15)+"°C\n"+( (Number(value)- 273.15) * 1.8 + 32)+"°F\n");
});
$("#Fahrenheit").on('input',function() {
        var value = this.value;
    $(".temp-box").html(((Number(value) -32)*(5/9)) + " °C\n" + (((Number(value)-32)*(5/9))+273.15)+" °K\n");
   
});
$("#login").click(function(){
    window.location.assign("./assets/login-page.html");
});
