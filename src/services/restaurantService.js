// import restaurantModel from '../models/restaurantModel';

class RestaurantService {
  create(body) {
    this.name = body.name;
    this.description = body.description;
    this.types = body.types;
    this.address = body.address;
    this.timeDelivery = body.timeDelivery;
    return new Promise((resolve, reject) => {
      try {
        resolve('restaurant add');
        // restaurantModel(data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = {
  RestaurantService,
};
