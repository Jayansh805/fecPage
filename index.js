document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu_btn');
    const menu = document.getElementsByClassName('mobl_nav_btns')[0];
    const rem = document.getElementsByClassName('mobl_nav_left')[0];

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            if (rem.style.display!="none") {
                rem.style.display = `none`;
                menu.style.width = `80%`;
            }
            else{
                menu.style.width = `0%`;
                setTimeout(()=>{
                    rem.style.display = `flex`;
                }, 400)
            }
        });
    } else {
        console.error("Element with ID 'menu_btn' not found.");
    }
    
    const btns = document.querySelectorAll('.btn');

    btns.forEach(btn => {
        const txt = btn.querySelector('div');

        btn.addEventListener('mouseenter', ()=>{
            txt.style.width = "70px";
        })
        btn.addEventListener('mouseleave', ()=>{
            txt.style.width = "0px";
        })
    });
});