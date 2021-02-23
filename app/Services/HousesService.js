import { ProxyState } from "../AppState.js";
import House from "../Models/Houses.js";
import { api } from "./AxiosService.js";

class HousesService{

 
  constructor(){
    console.log("Houses Service");
    this.getHouses()
  }

  async getHouses(){
    try {
      const res = await api.get('houses')
      ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
    } catch (error) {
      console.log(error)
    }
  }
  async createHouse(rawHouse) {
    try {
      const res = await api.post('houses', rawHouse)
      ProxyState.houses = [...ProxyState.houses, new House(res.data)]
    } catch (error) {
      console.log(error);
    }
  }

  async bid(id) {
    let temp = ProxyState.houses
    let house = temp.find(h=> h.id === id)
    house.price += 100
    
    try {
      const res = await api.put('houses/' + id, house)
      ProxyState.houses = ProxyState.houses
    } catch (error) {
      console.log(error);
    }
  }

  async deleteHouse(id) {
   try {
     const res = await api.delete(`houses/`+ id)
     this.getHouses()
   } catch (error) {
     console.log(error)
   }
  }
}

export const housesService = new HousesService()