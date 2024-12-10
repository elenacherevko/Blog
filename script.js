
const tabsButton= document.querySelectorAll(".tabs__nav button");
console.log(tabsButton);
const tabsItems= document.querySelectorAll(".tabs__item");
console.log(tabsItems);


function hideTabs(){
    tabsItems.forEach(item=>item.classList.add("hide"));
    tabsButton.forEach(item=>item.classList.remove("active"))
}

function showTab(index) {
    tabsItems [index].classList.remove("hide");
    tabsButton[index].classList.add("active");
}
    hideTabs();
    showTab(0);


tabsButton.forEach((btn, index) =>btn.addEventListener("click",()=> {
    hideTabs();
    showTab(index);
}))