{/* <div class="row" id ="cards-container"></div>
<div class="card" style="width: 18rem;">
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div> */}



  let cardsContainer = document.getElementById("cards-container")

    

  fetch("https://fakestoreapi.com/products") 
  .then(res => res.json())
  .then (data => {
      data.map(item =>{


          let card = document.createElement("div")
          let cardBody = document.createElement("div")
          let title = document.createElement("h3")
          let rating = document.createElement("h4")
          let img = document.createElement("img")
          card.classList.add("card","justify-content-center" ,"gx-4")
          cardBody.classList.add("card-body","mb-2")
          img.classList.add("card-img-top","align-self-center","mt-4","card-border","mb-3")

          title.classList.add("title")

          cardsContainer.appendChild(card)
          card.appendChild(img)
          card.appendChild(cardBody)
          cardBody.appendChild(title)
          cardBody.appendChild(rating)
  
          img.setAttribute("src",item.image)
          title.textContent = item.title
          rating.textContent = "$"+item.price 
      })
  
  })
