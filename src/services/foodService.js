const FoodSchema = require('../models/foodModel');
const { validateGeneral, addFieldIfExist } = require('../utils/generalValidations');

class FoodService {
  findById(body) {
    this.foodId = body.foodId;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.foodId, 'The identificador of food is required');
        try {
          FoodSchema.findById(this.foodId).then((res) => resolve(res));
        } catch (error) {
          reject(error);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  findByRestaurant(body) {
    this.restaurantId = body.restaurantId;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.restaurantId, 'The identificador of restaurant is required');
        try {
          FoodSchema.find({ restaurant_id: this.restaurantId }).then((res) => resolve(res));
        } catch (error) {
          reject(error);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  create(body) {
    this.restaurantId = body.restaurantId;
    this.name = body.name;
    this.description = body.description;
    this.type = body.type;
    this.categories = body.categories;
    this.price = body.price;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.restaurantId, 'The identificador of restaurant is required');
        validateGeneral(this.name, 'The name is required');
        validateGeneral(this.type, 'The type is required');
        validateGeneral(this.price, 'The price is required');
        let data = {
          restaurant_id: this.restaurantId,
          name: this.name,
          type: this.type,
          price: this.price,
        };
        data = addFieldIfExist(this.description, 'description', data);
        data = addFieldIfExist(this.categories, 'categories', data);
        const foodSchema = new FoodSchema(data);
        foodSchema.save()
          .then((food) => resolve(food));
      } catch (error) {
        reject(error);
      }
    });
  }

  update(body) {
    this.foodId = body.foodId;
    this.name = body.name;
    this.description = body.description;
    this.type = body.type;
    this.categories = body.categories;
    this.price = body.price;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.foodId, 'The identificador is required');
        let data = {
          updated: new Date(),
        };
        data = addFieldIfExist(this.name, 'name', data);
        data = addFieldIfExist(this.description, 'description', data);
        data = addFieldIfExist(this.type, 'type', data);
        data = addFieldIfExist(this.categories, 'categories', data);
        data = addFieldIfExist(this.price, 'price', data);
        FoodSchema.updateOne(
          { _id: this.foodId },
          data,
        ).then(async (confirm) => resolve(confirm));
      } catch (error) {
        reject(error);
      }
    });
  }

  delete(body) {
    this.foodId = body.foodId;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.foodId, 'The identificador is required');
        const query = { _id: this.foodId };
        FoodSchema.deleteOne(query)
          .then(async (confirm) => resolve(confirm));
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = {
  FoodService,
};
