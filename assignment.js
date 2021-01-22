


//kilometerToMeter

function kilometerToMeter(kiloMeter){
    var meter = kiloMeter * 1000;
    if (kiloMeter >=1){
        return meter;
    }
    else (kiloMeter <=-1)
    {
        console.log("please input Number upto '0' ")
    }
    
}
var outputMeter = kilometerToMeter(1)
console.log(outputMeter)



//budgetCalculator

function budgetCalculator (watch, phone, laptop){
    var result = watch * 50 + phone * 100 + laptop * 500 ;
    return result ;
}
var totalBudget = budgetCalculator(10 , 5 ,3);
console.log(totalBudget)



//hotelCost

function hotelCost(days){
    var cost = 0;
    if (days <= 10){
        cost = days * 100;
    } else if (days <= 20){
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second10Days = remaining * 80;
        cost = first10Days + second10Days;
    }else{
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = days - 20;
        var leftDays = remaining * 50;
        cost = first10Days + second10Days + leftDays;
    }
    return cost;
}
var totalCost = hotelCost(25);
console.log(totalCost)



//megaFriend

function megaFriend (name)
  {
    var max = name[0];
    var element = name[0].length;
    for (var i = 0; i < name.length; i++) {
        if (name[i].length > element) {
            max = name[i];
        }
    }
    return max;
}
console.log(megaFriend(["mamun", "shawon", "nobin", "nirob"]));
