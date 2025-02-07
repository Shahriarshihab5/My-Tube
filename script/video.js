// Show Catagories



// Create Load Catagories
function getTimeString(time){
  // get hour and rest seconds
  const hour = parseInt(time/3600);
  let remainigSecond = time%3600;
  const minutes = parseInt(remainigSecond/60);
  remainigSecond=remainigSecond%60;

return `${hour}hour ${minutes} minutes ${remainigSecond} second ago`

}

const removeActiveClass=()=>{
const buttons=document.getElementsByClassName('category-btn')
console.log(buttons); 
for (let btn of buttons){
  btn.classList.remove('active');
}
}
const loadDetails =async(videoId)=>{
  const uri=`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  const res = await fetch(uri);
  const data = await res.json();
  displayDetails(data.video)
}
const displayDetails=(video)=>{
console.log(video)
const detailsContainer =document.getElementById('modelContent')
detailsContainer.innerHTML=`<img src=${video.thumbnail}/>

<p>
${video.description}
</p>
`
document.getElementById('showmodal').click()
}



const loadCatagories= () =>{

fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then((res) => res.json())
.then((data)=>displayCatagories(data.
    categories))
.catch((error)=>console.log(error))
}


const loadVideos= () =>{

    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data)=>displayVideos(data.
        videos))
    .catch((error)=>console.log(error))
    }


    const loadCategoriyVideos = (id)=>{
      // alert(id);
      fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
      .then((res)=>res.json())
      .then((data) => {
removeActiveClass();
               
        const activeBtn=document.getElementById(`btn-${id}`)
        activeBtn.classList.add('active')
        displayVideos(data.category)
      })
      .catch((error) =>console.log(error))
    }
// const cardDemo= {
//     "category_id": "1003",
//     "video_id": "aaaf",
//     "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
//     "title": "Sticks & Stones",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
//             "profile_name": "Dave Chappelle",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "113K",
//         "posted_date": ""
//     },
//     "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
// }
    


  const displayVideos=(videos) =>
    {

        const videoContainer =document.getElementById("videos")
        videoContainer.innerHTML="";

        if(videos.length==0){
          videoContainer.classList.remove("grid")
          videoContainer.innerHTML=`
          
          <div class="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
<img src="assets/Icon.png">
<h2 class="font-bold text-center text-xl">  No Content Here in this category</h2>

          </div>
          `
          return;
        }
        else{
          videoContainer.classList.add("grid");
        }

videos.forEach(video =>{

console.log(video)
const card = document.createElement('div')
card.classList="card card-compact "
card.innerHTML = ` <figure class="h-[200px] relative ">
    <img
      src=${video.thumbnail}
    class=h-full w-full object-cover
      alt="Shoes" />
      ${video.others.posted_date?.length==0?"":`<span class='absolute right-2 bottom-2 bg-black rounded p-1 text-white'> ${getTimeString(video.others.posted_date)} </span>
`}
<span class='absolute right-2 bottom-2 bg-black rounded p-1 text-white'> ${video.others.posted_date} </span>

  </figure>
  <div class=" px-0 py-2 flex gap-2">
<div>
<img class= "w-10 h-10 rounded-full" src=${video.authors[0].profile_picture}/>
</div>    
    


<div>
<h2 class="font-bold">
${video.title}

</h2>
<div class="flex items-center gap-2">

<p class="text-gray-400">${video.authors[0].profile_name}</p>

${video.authors[0].verified == true?'<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png">':""}

<div>

<p><button  onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details
</button> </p>

</div>

</div>
</div>
<p>

</p>
<p>

</p>


</h2>
</div>    


</div>
  `


  videoContainer.append(card)
})

    }  
// Create Display catagories

const displayCatagories = (catagories)=>{
const catagoryContainer = document.getElementById('categories')

    catagories.forEach((item)=>{
        console.log(item)
        // createButton
  const buttonContainer = document.createElement("div");

buttonContainer.innerHTML=`
<button id="btn-${item.category_id}" onclick="loadCategoriyVideos(${item.category_id})" class='btn category-btn'>
${item.category}
</button>
`
    
//   add button to catagory


catagoryContainer.append(buttonContainer)

    })
}


loadCatagories()
loadVideos()