function submitRange(e){
    e.preventDefault();

    let num =  document.getElementById("rangeSubmit").elements;
    
    let newNum1 = num[0].value;
    let newNum2 = num[1].value;
    if (newNum1=="" || newNum2==""){
        alert("Please enter both the values");
        return;
    }
   let range= setInterval(function () {
    document.getElementById("displayNum").style.display="block";
    if(newNum1==newNum2) stopInterval();
    document.getElementById("displayNum").innerHTML= newNum1;
    newNum1= Number(newNum1)+1;
   }, 1000);
   function stopInterval(){
    clearInterval(range);
}
}

