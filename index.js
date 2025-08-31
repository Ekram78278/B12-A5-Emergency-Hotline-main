
const allCopyButtons = document.querySelectorAll(".copy-btn");
const allLoveButtons = document.querySelectorAll(".love-btn");
const allCallButtons = document.querySelectorAll(".call-btn");

const coinCountElement = document.getElementById("coin-count"); 
const copyCountElement = document.getElementById("copy-count"); 
const loveCountElement = document.getElementById("love-count"); 
const historyContainer = document.getElementById("history-container"); // 
const callHistory = [];

let coins = 100;
let copyCount = 0;
let heartCount =0;

allCopyButtons.forEach(button =>{
    button.addEventListener("click",
        function(){
            const card = button.closest('.card')
            const phoneNumberElement = card.querySelector(".phone-number")
            const phoneNumberText = phoneNumberElement.innerText
            navigator.clipboard.writeText(phoneNumberText)

        const currentCount = parseInt(copyCountElement.innerText);
        const newCount = currentCount + 1;
        copyCountElement.innerText = newCount;
        }
    )
})


allLoveButtons.forEach(button => {
    button.addEventListener("click", 
        function(){
            const currentCount = parseInt(loveCountElement.innerText)
            const newCount = currentCount+1
            loveCountElement.innerText = newCount

            button.classList.add("scale-125", "text-red-500")
            setTimeout(() => button.classList.remove 
               ("scale-125", "text-red-500") 
            , 200);
        }
    )
})

allCallButtons.forEach(button => {
    button.addEventListener("click", 
        function(){
            const card= button.closest(".card")
            const serviceName = card.querySelector(".service-name").textContent
            const serviceNumber = card.querySelector(".phone-number").textContent
            const currentCount = parseInt(coinCountElement.innerText)
            if( currentCount >= 20 ){
                alert (`Calling ${serviceName} at ${serviceNumber}....`)
            } else{
                alert("You do not have Sufficient coin")
                return;
            }
            const newCount = currentCount-20
            coinCountElement.innerText = newCount

const data = {

    name: `${serviceName}`,
    number:`${serviceNumber}`,
    date: new Date().toLocaleTimeString()
}
callHistory.push(data)

renderHistory();

function renderHistory() {
    historyContainer.innerHTML=""
}

for (const history of callHistory){
    const div = document.createElement("div")
    div.innerHTML=`
      <div class="flex justify-between bg-gray-100 w-[232px] h-[83px] p-2 rounded-xl items-center shadow-sm mb-2">
            <div>
                <h3 class="text-[14px] font-semibold">${history.name}</h3>
                <p class="mt-1 text-[12px] font-semibold">${history.number}</p>
            </div>
            <div>
                <p class="text-[13px] font-semibold">${history.date}</p>
            </div>
        </div>

    `
    historyContainer.appendChild(div)
}
            
        }
    )
})

