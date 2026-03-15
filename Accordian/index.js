//This is usefull for FAQSS

document.addEventListener("DOMContentLoaded", () => {

const  accordian = document.querySelectorAll(".accordion-item");

accordian.forEach((item) => {
     const header = item.querySelector(".accordion-header");
     const content = item.querySelector(".accordion-content");

     header.addEventListener("click" , ()=> {
        const isOpen = item.classList.contains("active");

        if(!isOpen){
            item.classList.add("active");
            content.style.maxHeight = content.scrollHeight + "px";
        }else{
            item.classList.remove("active");
            content.style.maxHeight = null;
        }
     })
})
})