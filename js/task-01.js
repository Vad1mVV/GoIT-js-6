const mainList = document.querySelector("#categories");
const mainListChild = mainList.children;

console.log(`Number of categories: ${mainListChild.length}`);

for (let i = 0; i < mainListChild.length; i += 1) {
    console.log('Category: ' + mainListChild[i].firstElementChild.textContent);
    console.log('Elements: ' + mainListChild[i].lastElementChild.children.length);
};