const loanAmountInput = document.querySelector(".amount");
const interestRateInput = document.querySelector(".interest");
const loanTenureInput = document.querySelector(".tenure");

const loanEMIValue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector(".total-interest .value");
const totalAmountValue = document.querySelector(".total-amount .value");

const calculateBtn = document.querySelector(".cal-btn");

let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100;
// let myChart;

// const displayChart = (totalInterest) => {
//     const ctx = document.getElementById('myChart').getContext("2d");

//    myChart=new Chart(ctx, {
//     type: 'pie',
//     data: {
//       labels: ['Total Interest','Principal Loan Amount' ],
//       datasets: [{
     
//         data: [totalInterest, loanAmount],
//         borderWidth: 0,
//         backgroundColor: ["#e63946", "#14213d"],
//       }]
//     },
   
//   });
// }

const updateChart = (totalInterest) => {
    myChart.dataa.datasets[0].data[0] = totalInterest;
    myChart.dataa.datasets[0].data[1] = loanAmount;
    myChart.update();

}

const calculateEMI = () => {
    let emi = loanAmount * interest * (Math.pow(1 + interest, loanTenure) / (Math.pow(1 + interest, loanTenure) - 1));
    return emi;
};

const updateDate = (emi) => {
    loanEMIValue.innerHTML = Math.round(emi);
    let totalAmount = Math.round(loanTenure * emi);
    totalAmountValue.innerHTML = totalAmount;

    let totalInterestPayable = Math.round(totalAmount - loanAmount);
    totalInterestValue.innerHTML = totalInterestPayable;

    // if(myChart) {
    //   updateChart(totalInterestPayable);
    // }else{  
    //   displayChart(totalInterestPayable);
    // }

};

const refreshInputValue = () => {
    loanAmount = parseFloat(loanAmountInput.value);
    interestRate = parseFloat(interestRateInput.value);
    loanTenure = parseFloat(loanTenureInput.value);
    interest = interestRate / 12 / 100;
};

const init = () => {
    refreshInputValue();
    let emi = calculateEMI();
    updateDate(emi);
};

init();


calculateBtn.addEventListener("click", () => {
    refreshInputValue();
    let emi = calculateEMI();
    updateDate(emi);
});