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

const displayCatagories = (data)=>{

    console.log(data)

}


loadCatagories()