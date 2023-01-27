//header animation
const observerHeader = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInLeft");
        }
    })
});
observerHeader.observe(document.querySelector(".theMove"));
//about animation
const observerAbout = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[2].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[3].classList.add("fadeInRight");
        }
    })
});
observerAbout.observe(document.querySelector(".theMoveH"));
//skills animation
const observerSkills = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[4].classList.add("fadeInTop");
        }
    })
});
observerSkills.observe(document.querySelector(".theMoveS"));
//my work animation
const observerWork = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[5].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[6].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[7].classList.add("fadeInRight");
            document.querySelectorAll(".animated")[8].classList.add("fadeInLeft");
        }
    })
});
observerWork.observe(document.querySelector(".theMoveW"));
//contact animation
const observerContact = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[9].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[10].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[11].classList.add("fadeInRight");
        }
    })
});
observerContact.observe(document.querySelector(".theMoveC"));