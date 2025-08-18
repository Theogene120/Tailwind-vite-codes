

// code to toggle dark class in html tag

const htmltag = document.documentElement;
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    htmltag.classList.toggle('dark')
    if(htmltag.classList == 'dark'){
        btn.textContent = "Light Mode";
    }
    else{
        btn.textContent = "Dark Mode"
    }
});

