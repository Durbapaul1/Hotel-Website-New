onst navBtn=document.getElementById('nav-btn');
const cancelBtn=document.getElementById('cancel-btn');
const sideNav=document.getElementById('sidenav');
const modal=document.getElementById('modal');

navBtn.addEventListener("click",function() {
    sideNav.classList.add('show');
    modal.classList.add('showMondal');
});

cancelBtn.addEventListener('click',function() {
    sideNav.classList.remove('show');
    modal.classList.remove('showMondal');
});

window.addEventListener('click' ,function() {
    if(Event.target===modal) {
        sideNav.classList.remove('show');
        modal.classList.remove('showMondal');
    }
});
