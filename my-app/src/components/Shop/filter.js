function l(){
let indicator = document.querySelector('.indicator').children;
let p = document.querySelector('.items').children;

for(let i of p){
    const name = i.querySelector('strong');
    const x = name.textContent;
    i.setAttribute('data-category',x)
}

for(let i=0; i<indicator.length; i++){
    indicator[i].onclick = function(){
       for(let x=0;x<indicator.length; x++){
        indicator[x].classList.remove('active');
       }
       this.classList.add('active');
       const displayItems = this.getAttribute('data-filter');
       for(let z=0;z<p.length; z++){
        p[z].getElementsByClassName.transform = 'scale(0)';
        setTimeout(()=>{
            p[z].style.display='none';

        }, 500);
        if((p[z].getAttribute('data-category') == displayItems)|| displayItems == 'all'){
            p[z].getElementsByClassName.transform = 'scale(1)';
            setTimeout(()=>{
                p[z].style.display='block';
    
            }, 500);
        }     
    }
    }
}
}

export default l