let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ulel")
let listItems = ""

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
})
