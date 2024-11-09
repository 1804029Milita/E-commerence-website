const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close= document.getElementById('close');

if (bar) {
    console.log("Bar element found"); // Debugging line
    bar.addEventListener('click', () => {
        console.log("Bar clicked"); // Debugging line
        nav.classList.add('active');
    });
} else {
    console.log("Bar element not found"); // Debugging line
}
if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
    
}