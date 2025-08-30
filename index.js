
const callHistory = []

// Copy Button Mechanism
function copyButtonSteps(id){
        const countElement = document.getElementById(id);
    const currentCount = parseInt(countElement.innerText);
    const newCount = currentCount + 1;
    countElement.innerText = newCount;
}


// Coopy the Hotline number

function copyHotlineNumber(id){

    const copyPhoneNumber =document.getElementById(id).innerText
    navigator.clipboard.writeText(copyPhoneNumber);

}

// copy button
document.getElementById("copy-btn").addEventListener("click", function() {
    copyHotlineNumber("phone-number")
    copyButtonSteps("copy-count")
});

// love button 

document.getElementById("love-btn").addEventListener("click",
    function(){
        copyButtonSteps("heart-count")

    })

// Call Button Increase

document.getElementById("call-btn").addEventListener("click",
    function(){
        const countElement = document.getElementById("coin-count");
    const currentCount = parseInt(countElement.innerText);
    if(currentCount > 0){
        alert("Calling 999 National Emergency")
    } else{
        alert("You dont have sufficient Coin")
        return;
    }
const newCount = currentCount - 20;
countElement.innerText = newCount;

const data = {

    name: "National Emergency Number",
    date: new Date().toLocaleTimeString()
}
callHistory.push(data)
console.log(callHistory)

    })