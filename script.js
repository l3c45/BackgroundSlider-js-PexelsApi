const background=document.getElementById("container")
const image=document.getElementById("image")
const leftBtn=document.getElementById("left")
const rightBtn=document.getElementById("right")
let photos
let index=40
const url="https://api.pexels.com/v1/search?query=animal&per_page=80"

  async function getPhotos(url) {
    const res = await fetch(url,{
      headers: {
        Authorization: "563492ad6f91700001000001ddcd8d70ed7f4cfe9029b9b04c401d61"
  }})
    const data = await res.json()
    photos=[data.photos]
    changeImg(`url(${photos[0][index].src.large})`)
  
}

getPhotos(url)

leftBtn.addEventListener("click",()=>{
  if(index<=79)
  index+=1
  let img=`url(${photos[0][index].src.large})`
  changeImg(img)
  }
)

rightBtn.addEventListener("click",()=>{
  if(index>=1)
  index-=1
  let img=`url(${photos[0][index].src.large})`
  changeImg(img)
  }
)

function changeImg(img){
  image.style.backgroundImage=img
  background.style.backgroundImage=img
}
