//header animation
const observerHeader = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInLeft");
        }else{document.querySelectorAll(".animated")[0].classList.remove("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.remove("fadeInLeft");}
    })
});
observerHeader.observe(document.querySelector(".theMove"));
//header shapes
const observerHShapes = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animatedS")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animatedS")[1].classList.add("fadeInRight");
            document.querySelectorAll(".animatedS")[2].classList.add("fadeInTop");
        }else{
            document.querySelectorAll(".animatedS")[0].classList.remove("fadeInLeft");
            document.querySelectorAll(".animatedS")[1].classList.remove("fadeInRight");
            document.querySelectorAll(".animatedS")[2].classList.remove("fadeInTop");
        }
    })
});
observerHShapes.observe(document.querySelector(".theMove"));
//***************************************************************************** */
//about animation
const observerAbout = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[2].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[3].classList.add("fadeInRight");
        }else{
            document.querySelectorAll(".animated")[2].classList.remove("fadeInTop");
            document.querySelectorAll(".animated")[3].classList.remove("fadeInRight");
        }
    })
});
observerAbout.observe(document.querySelector(".theMoveH"));
//about shapes
const observerAShapes = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animatedS")[3].classList.add("fadeInLeft");
            document.querySelectorAll(".animatedS")[4].classList.add("fadeInTop");
            document.querySelectorAll(".animatedS")[5].classList.add("fadeInTop");
        }else{
            document.querySelectorAll(".animatedS")[3].classList.remove("fadeInLeft");
            document.querySelectorAll(".animatedS")[4].classList.remove("fadeInTop");
            document.querySelectorAll(".animatedS")[5].classList.remove("fadeInTop");
        }
    })
});
observerAShapes.observe(document.querySelector(".theMoveH"));

//**************************************************************************** */
//skills animation
const observerSkills = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[4].classList.add("fadeInTop");
        }else{
            document.querySelectorAll(".animated")[4].classList.remove("fadeInTop");
        }
    })
});
observerSkills.observe(document.querySelector(".theMoveS"));
//**************************************************************************** */
//my work animation
const observerWork = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[5].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[6].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[7].classList.add("fadeInRight");
            document.querySelectorAll(".animated")[8].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[9].classList.add("fadeInRight");
        }else{
            document.querySelectorAll(".animated")[5].classList.remove("fadeInTop");
            document.querySelectorAll(".animated")[6].classList.remove("fadeInLeft");
            document.querySelectorAll(".animated")[7].classList.remove("fadeInRight");
            document.querySelectorAll(".animated")[8].classList.remove("fadeInLeft");
            document.querySelectorAll(".animated")[9].classList.remove("fadeInRight");
        }
    })
});
observerWork.observe(document.querySelector(".theMoveW"));
//work shapes
const observerWShapes = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animatedS")[6].classList.add("fadeInTop");
            document.querySelectorAll(".animatedS")[7].classList.add("fadeInTop");
            document.querySelectorAll(".animatedS")[8].classList.add("fadeInTop");
        }else{
            document.querySelectorAll(".animatedS")[6].classList.remove("fadeInTop");
            document.querySelectorAll(".animatedS")[7].classList.remove("fadeInTop");
            document.querySelectorAll(".animatedS")[8].classList.remove("fadeInTop");
        }

    })
});
observerWShapes.observe(document.querySelector(".theMoveW"));
//**************************************************************************** */
//contact animation
const observerContact = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[10].classList.add("fadeInTop");
            document.querySelectorAll(".animated")[11].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[12].classList.add("fadeInRight");
        }else{
            document.querySelectorAll(".animated")[10].classList.remove("fadeInTop");
            document.querySelectorAll(".animated")[11].classList.remove("fadeInLeft");
            document.querySelectorAll(".animated")[12].classList.remove("fadeInRight");
        }
    })
});
//shapes animation
observerContact.observe(document.querySelector(".theMoveC"));
const observerCShapes = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            document.querySelectorAll(".animatedS")[9].classList.add("fadeInTop");
            document.querySelectorAll(".animatedS")[10].classList.add("fadeInLeft");
            document.querySelectorAll(".animatedS")[11].classList.add("fadeInRight");
        }else{
            document.querySelectorAll(".animatedS")[9].classList.remove("fadeInTop");
            document.querySelectorAll(".animatedS")[10].classList.remove("fadeInLeft");
            document.querySelectorAll(".animatedS")[11].classList.remove("fadeInRight");
        }
    
    })
});
observerCShapes.observe(document.querySelector(".theMoveC"));
