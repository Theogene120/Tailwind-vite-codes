
const select = document.getElementsByClassName("theos");

for(let element of select){
    let active = false
    element.addEventListener("click", () => {
        if(!active){
            element.parentElement.parentElement.style.cssText = "border: 2px solid red";
            element.style.cssText = "background-color: red; color: white"
            active = true;
        }
        else{
            element.parentElement.parentElement.style.cssText = " ";
            element.style.cssText = " ";
            active = false
        }
    
    })    
}

const htmltag = document.documentElement;
const btn = document.getElementById("dark");
btn.addEventListener('click', () => {
    htmltag.classList.toggle("dark")
    if(htmltag.classList == 'dark'){
        btn.innerHTML = '<i class="fa-regular fa-sun"></i>';
    }
    else{
        btn.innerHTML = '<i class="fa-solid fa-moon"></i>'
    }
})