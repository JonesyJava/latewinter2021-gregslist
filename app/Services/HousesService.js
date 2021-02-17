import { ProxyState } from "../AppState.js";
import House from "../Models/Houses.js";

class HousesService{

 
  constructor(){
    console.log("Houses Service");
  }

  createHouse(rawHouse) {
    let temp = ProxyState.houses
    temp.push(new House(rawHouse))
    ProxyState.houses = temp

  }

  bid(id) {
    let temp = ProxyState.houses
    let house = temp.find(h=> h.id === id)
    house.price += 100
    ProxyState.houses = temp
  }

  deleteHouse(id) {
    let temp = ProxyState.houses
    let housesIndex = temp.findIndex(house =>  house.id == id)
    temp.splice(housesIndex, 1)
    ProxyState.houses = temp
  }
}

export const housesService = new HousesService()