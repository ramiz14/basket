if (localStorage.getItem('products')===null) {
    localStorage.setItem('products',JSON.stringify([]))
}

function Fetch() {
    let x=0
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(products=>
                products.forEach(pr => {
                    x++
                    document.querySelector('.all-products').innerHTML+=`
                    <div class="col-lg-3 mt-5">
                    <div id='pr-${x}' class="card" style="width: 18rem;">
                            <img src=${pr.image} class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${pr.title.length>20?pr.title.slice(0,20)+"...":pr.title}</h5>
                            <p class="card-text">${pr.description.length>40?pr.description.slice(0,40)+"...":pr.description}</p>
                            <p class="prc"><span class="num">${pr.price}</span>$</p>
                            <button class=" add btn btn-success">Add Basket</button>
                            </div>
                        </div>
                    `
                })
            )
           
}
Fetch()
setTimeout(() => {
let buttons=document.getElementsByClassName('add')
console.log(buttons.length);
for (let i = 0; i < buttons.length; i++) {
buttons[i].onclick=function () {
let id=buttons[i].parentElement.parentElement.id
let price=buttons[i].previousElementSibling.innerHTML
let pr_name=buttons[i].previousElementSibling.previousElementSibling.innerHTML
let img=buttons[i].parentElement.previousElementSibling.src  
let num=buttons[i].previousElementSibling.lastElementChild.innerHTML


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
}, 1000);

