let basket=JSON.parse(localStorage.getItem('products'))
List()
if (basket.length===0) {
    document.getElementById('empty').style.display='block'
    document.getElementById('full').style.display='none'
}
else{
    document.getElementById('empty').style.display='none'
    document.getElementById('full').style.display='block'
}
function List() {
    let basket=JSON.parse(localStorage.getItem('products'))
    for(let pr of basket){
        let row=`
        <tr>
        <th scope="row">${pr.Id}</th>
        <td class=t-img><img class='img' src="${pr.Img}" alt=""></td>
        <td>${pr.Name}</td>
        <td>${pr.Price}</td>
        <td><button type="button" class="btn plus btn-outline-light btn-sm">+</button> <span class='price'>${pr.Count}</span> <button type="button" class="btn minus btn-outline-light btn-sm">-</button></td>
        <td>${pr.Price_num*pr.Count}$</td>
      </tr>
        `
        document.getElementById('bdy').innerHTML+= row 
       
    }
}
function summary() {
    let cem=0
    for(let pr of basket){
        cem+=pr.Price_num*pr.Count 
    }
    document.getElementById('um').innerHTML+=`${cem}$`
}
summary()
let plus=document.querySelectorAll('.plus')
let minus=document.querySelectorAll('.minus')
let x=1
for(btn of plus){
    btn.onclick=function () {
        x++
        let id =this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        
        for(let pr of basket){
            if (pr.Id===id) {
               pr.Count++
            }
        }
        localStorage.setItem('products',JSON.stringify(basket))  
        location.reload()
    }
}

for(but of minus){
    but.onclick=function () {
        let id =this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
        for(let pr of basket){
            if (pr.Id===id && pr.Count>1) {
                
               pr.Count--
               console.log(pr.Count);
            }
        }
        localStorage.setItem('products',JSON.stringify(basket))  
        location.reload()
    }
}

