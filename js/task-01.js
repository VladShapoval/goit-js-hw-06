const allElementLi = document.querySelectorAll(".item")

const numberOfCategories = `Number of categories : ${allElementLi.length}`
console.log(numberOfCategories)

allElementLi.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`)
    console.log(`Elements : ${category.lastElementChild.children.length}`)
    // console.log(category.lastElementChild.childElementCount)   
})





















