export default class Jobs{
constructor({company, jobTitle, hours, rate, description, imgUrl, _id, id}){
  this.company = company
  this.jobTitle = jobTitle
  this.hours = hours
  this.rate = rate
  this.description = description
  this.imgUrl = imgUrl
  this.id = _id || id
}

get Template(){
  return /*html*/`<div class="card col-2">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.jobsController.deleteJob('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title text-center"> Company: ${this.company}</h4>
      <h5 class="text-center">Job Title: ${this.jobTitle}</h5>
      <p class="card-text"><b>Description:</b> ${this.description}</p>
      <p><b>Hours:</b> ${this.hours}/week</p>
      <p><b>Price:</b> $${this.rate}/yr</p>
      <button class="btn btn-success" onclick="app.jobsController.apply('${this.id}')">Apply</button>
  </div>
</div>`
}

}
