//const boton = document.querySelector(".menu");
const sidebar = document.querySelector("nav");
const nav = document.querySelector(".nav-style");
const search = document.querySelector("input");
const cards = document.querySelectorAll(".caja");
const carac = document.querySelectorAll(".caja2");

boton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-active');
    nav.classList.toggle('navbar-active');
    search.classList.remove('search-active');
});

search.addEventListener('click', () => {
    search.classList.add('search-active');
});

document.addEventListener("keyup", e=>{
    let busqueda= e.target.value;
    if(e.target.matches("#search")){
        cards.forEach(i=>{
            i.textContent.toLowerCase().includes(busqueda.toLowerCase())
            ?i.classList.remove("filtro") & window.scrollTo(0, 1000)
            :i.classList.add("filtro");
        })
        carac.forEach(i=>{
            i.textContent.toLowerCase().includes(busqueda.toLowerCase())
            ?i.classList.remove("filtro") & window.scrollTo(0, 1000)
            :i.classList.add("filtro");
        })
    }   
})

/*document.addEventListener("keyup", e=>{
    let busqueda= e.target.value;
    let emptyArray = [];
    if(busqueda){
        emptyArray= suggestions.filter(data=>{
            return data.toLowerCase().startsWith(busqueda.toLowerCase());
});
emptyArray=emptyArray.map(data=>{
    return data = '<li>' + data + '</li>';
})
    }
})*/
    








/*function removeCard(){
    cards.forEach(cards=>{
        cards.remove();
    });
}*/


/*search.addEventListener("keyup", e =>{
    e.target.matches("#search");
    console.log(e);
const filter = e.target.value;
cards.forEach(i =>{
let text = i.textContent;
    if(i.textContent.toLowerCase().includes(filter)){
        i.style.display = 'block';
        window.scrollTo(0,1000);
    }
    else{
        i.style.display='none';
    }
});
});
*/


/*search.addEventListener("keyup", e =>{
    const filter = e.target.value;
    cards.forEach(i =>{
    let text = i.textContent;
        if(i.textContent.toLowerCase().includes(filter.toLowerCase())){
            i.style.display = 'block';
            window.scrollTo(0,1000);
        }
        else{
            i.style.display='none';
        }
    });
    });
    */



  
  
            ////// BUSCADOR //////
 /* search.addEventListener("keyup", e => {
   let busqueda = e.target.value.toLowerCase();
    
          
for (let i=0; i< cards.length; i++){
    
        const currentItem = cards[i].textContent.toLowerCase();
        if (currentItem.includes(busqueda)) {
            cards[i].style.display = 'block';
            carac[i].style.display = 'block';
            window.scrollTo(0,1000);
           
} else {
    cards[i].style.display = 'none';
    carac[i].style.display = 'none';
}
}
    });
    
 */   
    


/*function searchFilters(input){
document.addEventListener("keyup", e =>{
if (e.target.matches(input)){
cards.forEach((e)=>
    e.textContent.toLowerCase().includes(e.target.value)
    ?e.cards.style.display = 'block'
    :e.cards.style.display = 'none'

);
}
});
}*/








 /*if(open===0){
   boton.addEventListener('click', () => {
        sidebar.classList.add('abrir');
        open=1
        ;
    
    });
} 
 else{
    boton.addEventListener('click', () => {
        sidebar.classList.remove('abrir');
        open=0;
    });
}*/