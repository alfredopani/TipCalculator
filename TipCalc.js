function tipCalculator(){ 
    var billAmount = document.getElementById("billAmnt").value;
    let tenPercent = (billAmount * .10);
    let fifteenPercent = (billAmount * .15);
    let twentyPercent = (billAmount * .20);

    let x = tenPercent.toFixed(2);
    let y = fifteenPercent.toFixed(2);
    let z = twentyPercent.toFixed(2);

    document.getElementById('tenPer').innerHTML = ('If you want to tip 10%, you should leave: $' + x);
    document.getElementById('fiftenPer').innerHTML = ('If you want to tip 15%, you should leave: $' + y);
    document.getElementById('twentyPer').innerHTML = ('If you want to tip 20%, you should leave: $' + z);
}

tipCalculator();
