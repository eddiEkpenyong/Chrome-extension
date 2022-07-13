let myLeads = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const delBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")


saveBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

    })
})

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
//refactoring the render function so it could act dynamically
function render(array) {
    let listItems = ""
    for (let i = 0; i < array.length; i++) {
        listItems += `
             <li>
                <a target = '_blank' href = '${array[i]}'>
                    ${array[i]}
                </a>
            </li>
        `
    }

    ulEl.innerHTML = listItems
}


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

delBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
