const updateTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0"); 
    const seconds = now.getSeconds().toString().padStart(2,"0");  

    const timeElements = document.querySelector(".time");
    timeElements.textContent = `${hours} : ${minutes} : ${seconds}`;

    setInterval(updateTime, 1000)

}

window.addEventListener("load", () => {
    updateTime();
    setInterval(updateTime, 1000);

});

