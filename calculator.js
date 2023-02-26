function erase(){
    document.getElementById("resultscreen").value="";
}

function disp(value){
    document.getElementById("resultscreen").value +=value;
}

function calculate(){
    var x=document.getElementById("resultscreen").value;
    var y=eval(x);
    document.getElementById("resultscreen").value=y;
}

