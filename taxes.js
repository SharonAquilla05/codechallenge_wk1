function calculatePayee(salary){
    const personalRelief = 2400;
    let taxableIncome = salary - personalRelief;
    let tax = 0;

    if (taxableIncome <= 0) {
        return 0;
    } else if (taxableIncome <= 24000) {
        tax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        tax = 2400 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        tax = 4483.25 + (taxableIncome - 32333) * 0.30;
    } else if (taxableIncome <= 800000) {
        tax = 144783.35 + (taxableIncome - 500000) * 0.325;
    } else {
        tax = 242285.35 + (taxableIncome - 800000) * 0.35;
    }

    return tax;
    // console.log (tax)
}


function calculateNhif(salary){
    if (salary<=5999){
        return 150;
    }
    else if(salary<=7999){
        return 300;
    }
    else if(salary<=11999){
        return 400;
    }
    else if(salary<=14999){
        return 500;
    }
    else if(salary<=19999){
        return 600;
    }
    else if(salary <=24999){
        return 750;
    }
    else if(salary <=29999){
        return 850;
 }
 else if(salary <=34999){
    return 900;
 }
 else if(salary <=39999){
    return 950;
 }
 else if(salary <=44999){
    return 1000
 }
 else if(salary <=59999)
 {return 1200;}
 else if(salary <=69999)
 {return 1300;}

 else if(salary <=79999)
 {return 1400;}
 else if(salary <=89999)
 {return 1500;}
 else if(salary <=99999)
 {return 1600;}
 else {
     return 1700;
    // console.log(1700)
 }
}
// calculateNhif(120000) 

function calculateNssf(salary){
    const contributionrate=0.06
    const tier1upperlimit =7000
    const tier2upperlimit=36000
    let tier;
    if (salary <= tier1upperlimit){
        tier='I'
    }
    else{tier='II'}
    let maximumContribution;
    if(tier==="I"){
        maximumContribution=salary * contributionrate
    }
    else{maximumContribution=Math.min(salary * contributionrate,tier2upperlimit * contributionrate)
}
return maximumContribution
}
// calculateNssf(50000)
// calculateNssf(1600)


  function calculateGrossSalary(salary,benefits){
    return salary+benefits }

    function calculateNetSalary(salary,benefits){
        let grossSalary= calculateGrossSalary(salary,benefits)
        let Payee=calculatePayee(salary)
        let Nhif=calculateNhif(salary)
        let Nssf=calculateNssf(salary)
        let NetSalary=grossSalary-Payee-Nhif-Nssf
       
        return NetSalary
    }

    function Main(){
        let prompt = require('prompt-sync')()
        let salary=parseFloat(prompt("enter salary",))
        let benefits=parseFloat(prompt("enter benefits"))
        let NetSalary=calculateNetSalary(salary,benefits)
        console.log(`netsalary:${NetSalary}`)
    }
    Main()


