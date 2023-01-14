/* how to wirte only number input
    <input type="text" onkeypress =" return numericNumber(event)">  
*/
function numericNumber(e){
    let x = e.which || e.keycode;
    if(x >= 48 && x <= 57) {
        return true;
    }else{
        return false;
    }
}

let currency = [
    {   
        country : "Singapore",
        forMMK : 1530,
        forTHB : 25.02,
        forUSD : 0.76,
    },
    {   
        country : "USA",
        forMMK : 2100,
        forTHB : 33.12,
        forSGD : 1.32,
    },
    {
        country : "Thai",
        forMMK : 63.41,
        forUSD : 0.030,
        forSGD : 0.040,
    },
    {
        country : "Myanmar",
        forUSD : 0.00048,
        forTHB : 0.16,
        forSGD : 0.00063,
    }

];


const input = document.getElementById("Put");
const output = document.querySelector("#Show");
const button = document.querySelector(".btt");
const select = document.querySelector(".dClas")
const select1 = document.querySelector("#Mc")
const textCurrency =document.querySelector(".textCurrency")
const aTag = document.querySelector(".high")
let click = document.querySelector(".click")
let result = input.value

let check = true;
input.addEventListener("mouseover",(k)=>{
    input.classList.add("hoverBox")
});
input.addEventListener("mouseleave",() =>{
    input.classList.remove("hoverBox")
});
output.addEventListener("mouseover",(k)=>{
    output.classList.add("hoverBox")
});
output.addEventListener("mouseleave",() =>{
    output.classList.remove("hoverBox")
});


    click.addEventListener("click", ()=>{
        // OTher Currency to MMK  
        let e = input.value
        input.addEventListener("keyup",(ab)=>{
            removeFunc(ab)
        })
        if(select.value === "USD"  && select1.value === "MMK"){
            dollarValueToKyats(e)
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;" href="#">1</a>` +" USD($) in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">2100</a>`+" Ks"
            removeFunc (e)
            
            
        };
        if(select.value === "THB" && select1.value === "MMK"){
            thaiValueToKyats(e)                      /* 1*/                                          //63ks                  
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">1</a>` +" THB in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">63</a>`+" Ks"
            removeFunc (e)
        };
        if(select.value === "SGD" && select1.value === "MMK"){
            sgdValueToKyats(e)                                                                         //1530ks
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">1</a>` +" SGD in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">1530</a>`+" Ks"
            removeFunc (e)
        };

        //other Currency to Thai baht 
        if(select.value === "MMK" && select1.value === "THB1"){
            mmkValueToBaht(e)                                                                       //0.02 thb
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">1</a>` +" MMK in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">0.02</a>`+" THB"
            removeFunc (e)
        };
        if(select.value === "USD" && select1.value === "THB1"){
            dollarValueToBaht(e)                                                                    //33.1thb
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">1</a>` +" USD($) in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">33.1</a>`+" THB"
            removeFunc (e)
        };
        if(select.value === "SGD" && select1.value === "THB1"){
            sgdValueToBaht(e)                                                                       //    25.02 thb
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">1</a>` +" SGD in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">25.02</a>`+" THB"
            removeFunc (e)
        };

        //  other Currency to USD 
        if(select.value === "MMK" && select1.value === "USD"){
            mmkValueToUsd(e)                                                                          //  0.05 USD                              
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">100</a>` +" MMK in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">0.05</a>`+" USD($)"
            removeFunc (e)
        };
        if(select.value === "THB" && select1.value === "USD"){
            thaiValueToUsd(e)                                                                         //0.02 USD
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">1</a>` +" THB in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">0.02</a>`+" USD($)"
            removeFunc (e)
        };
        if(select.value === "SGD" && select1.value === "USD"){
            sgdValueToUsd(e)                                                                          // 0.76 USD
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">1</a>` +" SGD in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">0.76</a>`+" USD($)"
            removeFunc (e)
        };
        
        //other currency to SGD 
        if(select.value === "MMK" && select1.value === "SGD1"){
            mmkValueToSgd(e)                                                                          //   0.63 SGD
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">1</a>` +" MMK in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">0.63</a>`+" SGD"
            removeFunc (e)
        };
        if(select.value === "THB" && select1.value === "SGD1"){
            thaiValueTosgd(e)                                                                         //   4.00 SGD
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high" style="font-size : 22px;"  href="#">100</a>` +" THB in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">4.00</a>`+" SGD"
            removeFunc (e)
        };
        if(select.value === "USD" && select1.value === "SGD1"){
            usdValueToSgd(e)                                                                          //  1.32  SGD
            textCurrency.innerHTML ="Today curreny is "+ `<a class="high"  style="font-size : 22px;" href="#">1</a>` +" USD($) in " +` <a style="color : yellow ; text-decoration : none; font-size : 22px;"  href="#">1.32</a>`+" SGD"
            removeFunc (e)
        };
        })

    
//MMK to other   
function thaiValueToKyats (k){
    let thb = input.value
    output.value = Math.floor((currency[2].forMMK * thb)).toString() + " ks"
    
}

function sgdValueToKyats (k){
    let sing$ = input.value
    output.value = (currency[0].forMMK * sing$).toString() + " ks"
    
}

function dollarValueToKyats (k) {
    let dollar =input.value
    output.value = (currency[1].forMMK * dollar).toString() + " ks"
    
}

//Thai baht to other 
function mmkValueToBaht (k){
    let mmk = input.value
    output.value = (mmk / currency[2].forMMK).toFixed(2).toString() + " THB"
    
    
}

function sgdValueToBaht (k){
    let sing$ = input.value
    output.value = (sing$ * currency[0].forTHB).toFixed(2).toString() + " THB"
    
}

function dollarValueToBaht (k) {
    let dollar = input.value
    output.value = (dollar * currency[1].forTHB).toFixed(1).toString() + " THB"
    
}

//USD to other currency 

function mmkValueToUsd (k){
    let mmk = input.value
    output.value = (mmk * currency[3].forUSD).toFixed(2).toString() + " $"
}

function sgdValueToUsd (k){
    let sing$ = input.value
    output.value = (sing$ * currency[0].forUSD).toFixed(2).toString() + " $"
    
}

function thaiValueToUsd (k) {
    let baht = input.value
    output.value = (baht * currency[2].forUSD).toFixed(2).toString() + " $"
    
}

//SGD to other currency 

function mmkValueToSgd (k){
    let mmk = input.value
    output.value = (mmk * currency[3].forSGD).toFixed(2).toString() + " SGD"
    
}

function usdValueToSgd (k){
    let dollar = input.value
    output.value = (dollar * currency[1].forSGD).toFixed(2).toString() + " SGD"
    
}

function thaiValueTosgd (k) {
    let baht = input.value
    output.value = (baht * currency[2].forSGD).toFixed(2).toString() + " SGD"
    
}
function removeFunc (e){
    if(e.location === 0){
        output.value= "0"
        textCurrency.innerHTML = ''
    }
}
