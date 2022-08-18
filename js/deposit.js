
document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount=getInputFieldvaluebyId('deposit-field');
    const previouseDeposit = getTexElementValueById('deposit-total');
    const newDepositAmountTotal=newDepositAmount+previouseDeposit;
    setTextElementValueById('deposit-total',newDepositAmountTotal);
    const previouseBalanceTotal=getTexElementValueById('balance-total');
    const newBalanceTotal=previouseBalanceTotal+newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})