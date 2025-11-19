let e2 = document.querySelector(".buttons")
const gooKim = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const y = Math.floor(Math.random() * 256)
    return  `rgb(${r},${g},${y})`
}
const clock = () => {
    const now = new Date()
    const hours = now.getHours().toString().padStart(2,"0")
    const minutes = now.getMinutes().toString().padStart(2,"0")
    const seconds = now.getSeconds().toString().padStart(2,"0")
    e2.textContent = `${hours}:${minutes}:${seconds}`
}
setInterval(clock,1000)
let evenOdd = document.querySelector(".login")
evenOdd.addEventListener("click", () => {
    console.log("post")
    // e2.innerHTML = `<a class="login">Om kumar</a>`
    evenOdd.style.color=gooKim()
    clock()
})

const demo = ["1","2","3","4","5","6","7","8","9"]
switch(`2`){
    case demo[0]:
        console.log("gun")
        break
    case demo[1]:
        console.log("gunkim")
        break
    case demo[2]:
        console.log("gunHrll")
        break
    case demo[3]:
        console.log("uiGun")
        break
    case demo[4]:
        console.log("gun ui")
        break
    case demo[5]:
        console.log("gun Hello")
        break
    case demo[6]:
        console.log("gun mc")
        break
    case demo[7]:
        console.log("gun k")
        break
    case demo[8]:
        console.log("gun")
        break
    
}