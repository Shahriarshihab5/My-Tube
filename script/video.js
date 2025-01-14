// Show Catagories



// Create Load Catagories

const loadCatagories= () =>{

fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
.then((res) => res.json())
.then((data)=>displayCatagories(data.
    categories))
.catch((error)=>console.log(error))
}

// Create Display catagories

const displayCatagories = (catagories)=>{
const catagoryContainer = document.getElementById('categories')

    catagories.forEach((item)=>{
        console.log(item)
        // createButton
  const button = document.createElement("button")
    button.classList="btn";
    button.innerText=item.category;
//   add button to catagory


catagoryContainer.append(button)

    })
}


loadCatagories()