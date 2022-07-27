// write your code here
document.addEventListener("DOMContentLoaded", () => {
let ramenArray;
fetch ("http://localhost:3000/ramens")
.then(res => res.json())
.then(data => {
ramenArray = data
ramenArray.forEach(ramen => getRamenData(ramen))
})

function getRamenData (ramen) {
const img = document.createElement('img')
img.src = ramen.image
const ramenMenu = document.getElementById("ramen-menu")
ramenMenu.appendChild(img)
img.addEventListener("click", (e) => {
    e.preventDefault()
    const h2 = document.getElementsByClassName("name")[0]
    h2.textContent = ramen.name
    const detailImg = document.getElementsByClassName("detail-image")[0]
    detailImg.src = ramen.image
    const restaurantName = document.getElementsByClassName("restaurant")[0]
    restaurantName.textContent = ramen.restaurant
    const ratingSpan = document.getElementById("rating-display")
    ratingSpan.textContent = ramen.rating
    const commentPar = document.getElementById("comment-display")
    commentPar.textContent = ramen.comment
})
}

const ramenForm = document.getElementById("new-ramen")
ramenForm.addEventListener("submit", submitNewRamen)

function submitNewRamen (e) {
        e.preventDefault()
        let ramenObj = {
            name:e.target["new-name"].value,
            restaurant:e.target["new-restaurant"].value,
            image:e.target["new-image"].value,
            rating:e.target["new-rating"].value,
            comment:e.target["new-comment"].value
        }
        getRamenData(ramenObj)
        addingRamenToServer(ramenObj)
        ramenForm.reset()
}

function addingRamenToServer(ramenObj){
    fetch("http://localhost:3000/ramens", {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(ramenObj)
    })
    .then(res => res.json())
    .then()
}
})
