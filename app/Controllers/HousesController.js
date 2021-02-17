import { ProxyState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"

function _draw(){
    let houses = ProxyState.houses
    let template = ""
    houses.forEach(house => template += house.Template)
    document.getElementById('houses').innerHTML = template
    console.log(ProxyState.houses)
}

export default class HousesController{
    constructor(){
        console.log("houses controller working")
        console.log(ProxyState.houses)
        _draw()
        ProxyState.on("houses", _draw)
    }

    createHouse(event){
        event.preventDefault();
        console.log('creating house')
        let form = event.target
        console.log(form)
        let rawHouse = {
          bedrooms: form.bedrooms.value,
          bathrooms: form.bathrooms.value,
          levels: form.levels.value,
          price: parseFloat(form.price.value), 
          description: form.description.value,
          year: form.year.value,
          imgUrl: form.imgUrl.value,
        }
        console.log(rawHouse)
        housesService.createHouse(rawHouse)
    }

    bid(id){
        console.log('bidding ' + id)
        housesService.bid(id)
      }
    
      deleteHouse(id){
        console.log(id)
        housesService.deleteHouse(id)
      }


}