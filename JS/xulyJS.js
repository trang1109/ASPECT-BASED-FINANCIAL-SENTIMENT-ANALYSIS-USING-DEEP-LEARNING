
const element_product = document.querySelectorAll('.product');
const filter_button=document.querySelectorAll('.btn');

Array.from(filter_button).forEach(function(element){
   
    element.addEventListener('click', function(event){
       
        let name_filter=element.dataset.filter;
     
        for (let k=0; k<element_product.length;k++){
            element_product[k].style.display='block';
            element_product[k].style.display='none';
            if(element_product[k].getAttribute('data-item')==name_filter || name_filter=='all'){
                element_product[k].style.display='none';
                element_product[k].style.display='block';
            }
        }
    })

        
})