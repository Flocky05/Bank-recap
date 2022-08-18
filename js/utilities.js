function getInputFieldvaluebyId(inputFieldId){
    const inputfield=document.getElementById(inputFieldId);
    const inputfieldValue=parseFloat(inputfield.value);
    return inputfieldValue;
     inputfieldValue=" ";
}
function getTexElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValue=parseFloat(element.innerText);
    return elementValue;
}
 
function setTextElementValueById(elementId, newValue){
    const textElement=document.getElementById(elementId);
    textElement.innerText=newValue;

}