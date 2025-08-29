
let count = 0;
function tipDao (){
  let love = document.getElementById('love-count');
  count++;
  love.innerText = count;
}

const date = new Date();

const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const callButton = document.querySelectorAll('#call-btn');
for (const btn of callButton) {
  btn.addEventListener('click',function (){
    let coin = parseInt(document.getElementById('coin').innerText)
    if(coin < 20){
      alert(`❌আপনার পর্যাপ্ত কয়েন নেই ! কমপক্ষে ২০ কয়েন লাগবে `)
    }
    else {
      coin-=20
      document.getElementById('coin').innerText = coin
      const serviceName = btn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
      const serviceNumber = btn.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
      alert(`📞 Calling ${serviceName} ${serviceNumber}...`)
      let Div  = document.getElementById('show-history')
       const newChild = document.createElement('div');
       newChild.innerHTML=
       `
       <div class="flex items-center bg-gray-200 justify-between py-3 px-2 mb-2 rounded-lg">
        <div>
          <p class="text-[16px] inter-font font-medium">${serviceName}</p>
          <p class="text-xl text-gray-600">${serviceNumber}</p>
        </div>
        <div>
          <p class="text-xl hind-maduri-font ">${hour}:${minute}:${second}</p>
        </div>
      </div>
       `
      Div.appendChild(newChild)

      document.getElementById('clear-btn').addEventListener('click', function(){
        Div.innerHTML= ''
      })
    }
    

  })
}

let copyCount = parseInt(document.getElementById('copy-count').innerText)


const copys = document.querySelectorAll('#copy-btn')
for (const copy of copys) {
  copy.addEventListener('click', function(){
    const copiedNumber = copy.parentNode.parentNode.childNodes[5].childNodes[1].innerText
    alert(`নম্বর কপি হয়েছে ${copiedNumber}`)
    navigator.clipboard.writeText(copiedNumber)
    copyCount++;
    document.getElementById('copy-count').innerText = copyCount
  })

}


