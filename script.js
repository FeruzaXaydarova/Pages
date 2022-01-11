const tabs = document.getElementById('tabs');
const page = document.querySelectorAll('.page');
const tab2 = document.querySelectorAll('.tab-btn2');


const handleChange = el => {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].classList.remove('active');    
  }  
  el.classList.add('active') 
};

tabs.addEventListener('click', e => {
  const tabAll = e.target.dataset.btn;
  handleChange(e.target);
    for( let i = 0; i < page.length; i++){
        page[i].classList.remove('active');      
        if(page[i].dataset.page == tabAll){
          page[i].classList.add('active')          
        }       
    }    
});


