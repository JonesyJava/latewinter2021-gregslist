import Jobs from "./Models/Jobs.js"
import Car from "./Models/Car.js"
import Houses from "./Models/Houses.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  cars = [new Car({make: "Jeep", model: "Wrangler", price: 20, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its nice", miles: 75000}), new Car({make: "Jeep", model: "Rango", price: 1500, imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg', year: 2012, description: "Its very nice", miles: 5000})]

  /**@type {Houses[]} */
  houses = [new Houses({bedrooms: 3, bathrooms:  2, price: 20000, imgUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', year: 2009, description: "Its a big ole house", levels: 2})]

  /**@type {Jobs[]} */
  jobs = [new Jobs({company: "Codeworks", jobTitle: "Instructor", rate: 50000, imgUrl: 'https://secure.meetupstatic.com/photos/event/e/5/7/9/highres_478678745.jpeg', hours: 80, description: "Work here and be better than people"})]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
