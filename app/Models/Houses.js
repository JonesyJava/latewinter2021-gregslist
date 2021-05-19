export default class House{
constructor({bedrooms, bathrooms, levels, price, description, imgUrl, year, _id, id}){
  this.bedrooms = bedrooms
  this.bathrooms = bathrooms
  this.levels = levels
  this.price = price
  this.description = description
  this.imgUrl = imgUrl
  this.year = year
  this.id = _id || id
}

get Template(){
  return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h5 class="card-title"> Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</h5>
      <p class="card-text">${this.description}</p>
      <p>Levels: ${this.levels}</p>/
      <p>Year: ${this.year}</p>
      <p>Price: $${this.price}</p>
      <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">Bid</button>
  </div>
</div>`
}

}
