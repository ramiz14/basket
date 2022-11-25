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
        document.getElementById('bdy').innerHTML+=`
        <tr>
        <th scope="row">${pr.Id}</th>
        <td><img class='img' src="${pr.Img}" alt=""></td>
        <td>${pr.Name}</td>
        <td>${pr.Price}</td>
        <td>${pr.Count}<td>
        <td>${pr.Price_num*pr.Count}$<td>
      </tr>
    
        `  
    }
}
function summary() {
    let cem=0
    for(let pr of basket){
        cem+=pr.Price_num*pr.Count 
    }
    console.log(cem);
    document.getElementById('um').innerHTML+=`${cem}$`
}
summary()