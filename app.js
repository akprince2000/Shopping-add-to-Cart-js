function increament(intDec,prc,itm){

    var count = document.getElementById(intDec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    // product Amount
    var pr_amount = document.getElementById("pr_amount").innerHTML;
    
    // Charge
    var charge = document.getElementById("charge").innerHTML;
    var totalAmount = document.getElementById("totalAmount");
    
    if (count.value >= 5) {
        count.value = 5;
        alert("Onley Five Prodects Allow")
    }else{
        count.value++;
        var result = parseInt(price.innerHTML) + parseInt(item.innerHTML);
        item.innerHTML = result;
        //for product amount
        var total_product =  parseInt(price.innerHTML) + parseInt(pr_amount);
        document.getElementById("pr_amount").innerHTML = total_product;

        //for totel + Charge
        var Newresult = total_product + parseInt(charge);
        totalAmount.innerHTML = Newresult;
        
        //hide text show
        // var kupon_main_div = document.getElementById("kupon_main_div");
        // kupon_main_div.style.display="none";
        // if(totalAmount < 500){
        //     kupon_main_div.style.display= "block";
        // }
    }
}
//for minus button 
function decrement(intDec,prc,itm){ //paramitter
     var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var count = document.getElementById(intDec);
    //    product Amount
    var pr_amount = document.getElementById("pr_amount").innerHTML;
    // Charge
    var charge = document.getElementById("charge").innerHTML;

    if (count.value <= 0) {
        count.value = 0;
        alert("Onley 1 Prodects Allow")
    }else{
        count.value--;
        var result =parseInt(item.innerHTML)- parseInt(price.innerHTML); 
        item.innerHTML = result;
        
        //for product amount
        var total_product =  parseInt(pr_amount) - parseInt(price.innerHTML) ;
        document.getElementById("pr_amount").innerHTML = total_product;

        //for totel - Charge
        var Newresult = total_product + parseInt(charge);
        
        totalAmount.innerHTML = Newresult;

    }
}

// Apply Button
var kupon_main_div = document.getElementById("kupon_main_div");
kupon_main_div.style.display="none";

var applybtn = document.getElementById("applybtn");

// applybtn.addEventListener('click',function(){

//     var kuponInput = document.getElementById("kuponInput");
//      var totalAmount = document.getElementById("totalAmount").innerHTML;
//     if(kuponInput.value == "akPrince"){
//         var total = parseInt(totalAmount) - 50;
//        document.getElementById("totalAmount").innerHTML = total;
//        alert("Congratulation")
//     //    kupon_main_div.style.display="none";
//     }else{
//         alert("Kupon not match")
//     }

// });


// kuppn a kaj korca na 
// Apply Button a Problem + display style nane + block Problem