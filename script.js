let transactions = []

function addTransaction(){

let name = document.getElementById("name").value
let amount = Number(document.getElementById("amount").value)
let type = document.getElementById("type").value
let category = document.getElementById("category").value
let date = document.getElementById("date").value
let description = document.getElementById("description").value

let transaction = {
name,
amount,
type,
category,
date,
description
}

transactions.push(transaction)

displayTransactions()
updateSummary()

}

function displayTransactions(){

let table = document.getElementById("tableBody")
table.innerHTML = ""

transactions.forEach((t,index)=>{

let row = `<tr>
<td>${t.name}</td>
<td>${t.amount}</td>
<td>${t.type}</td>
<td>${t.category}</td>
<td>${t.date}</td>
<td>${t.description}</td>
<td>
<button onclick="deleteTransaction(${index})" class="delete">Delete</button>
</td>
</tr>`

table.innerHTML += row

})

}

function deleteTransaction(index){

transactions.splice(index,1)

displayTransactions()
updateSummary()

}

function updateSummary(){

let income = 0
let expense = 0

transactions.forEach(t=>{

if(t.type==="Income")
income += t.amount
else
expense += t.amount

})

document.getElementById("income").innerText = income
document.getElementById("expense").innerText = expense
document.getElementById("balance").innerText = income - expense

}
