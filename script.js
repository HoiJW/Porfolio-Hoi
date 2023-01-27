
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[2].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[3].classList.add("fadeInRight");
            document.querySelectorAll(".animated")[5].classList.add("fadeInLeft");
        }
    })
});
observer.observe(document.querySelector(".theMove"))
