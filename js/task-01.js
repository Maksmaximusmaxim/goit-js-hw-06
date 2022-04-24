const catList = document.querySelector(`#categories`);
const catListChildren = catList.children;
console.log(`Number of categories:` , catListChildren.length);

const catListEls = document.querySelectorAll(`.item`);
catListEls.forEach(catListEl =>{
    console.log(`Category:` ,catListEl.firstElementChild.textContent)
    console.log("Elements:" ,catListEl.lastElementChild.children.length)
})