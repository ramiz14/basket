if (localStorage.getItem('products')===null) {
    localStorage.setItem('products',JSON.stringify([]))
}
let buttons=document.querySelectorAll('.card-body .btn')
for(btn of buttons){
    btn.onclick = function(e){
        e.preventDefault();
        let id=this.parentElement.parentElement.id
        let price=this.previousElementSibling.innerHTML
        let pr_name=this.previousElementSibling.previousElementSibling.innerHTML
        let img=this.parentElement.previousElementSibling.src  
        let num=this.previousElementSibling.lastElementChild.innerHTML
        

        let basket=JSON.parse(localStorage.getItem('products'))
        let find_pr=basket.find(x=>x.Id===id)
        
        
        if (find_pr===undefined) {
            basket.push({
               Id:id,
               Img:img,
               Price:price,
               Name:pr_name,
               Count:1,
               Price_num:num
            })
            
        }
        else{
            find_pr.Count+=1
        }
        localStorage.setItem('products',JSON.stringify(basket))   
        Count()   
        
           
    }
}
function Count() {
    let spn=document.getElementById('spn')
    let basket=JSON.parse(localStorage.getItem('products'))
    spn.innerHTML=basket.length;
}
Count()

