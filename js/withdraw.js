document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount=getInputFieldvaluebyId('withdraw-field');
    const previouseWithdraw = getTexElementValueById('withdraw-total');
    const newWithdrawAmountTotal=newWithdrawAmount+previouseWithdraw;
    setTextElementValueById('withdraw-total',newWithdrawAmountTotal);
    const previouseBalanceTotal=getTexElementValueById('balance-total');
    const newBalanceTotal=previouseBalanceTotal-newWithdrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})