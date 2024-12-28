const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const clock = document.querySelector("#clock")

const updateTime = () => {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    clock.textContent = `${h}:${m}:${s}`

    setTimeout(() => {
        updateTime()
    }, 100)
}
updateTime()