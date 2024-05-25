const btnLike1= document.getElementById("btnLike1")
const btnLike2= document.getElementById("btnnLike2")
const countLikes = document.getElementById("countLikes1")
const countLikes = document.getElementById("countLikes2")

function hitLikes1() {
 let totalLikes1 = parseInt(countLikes1) + 1
  countLikes1.textcontent = totalLikes1.toString()
}
btnLike1.atEventListener("click",hitLikes1)
