const RestaurantSchema = require('../models/restaurantModel');
const { validateGeneral, addFieldIfExist } = require('../utils/generalValidations');

class RestaurantService {
  getById(body) {
    this.restaurantId = body.restaurantId;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.restaurantId, 'The identificador is required');
        try {
          RestaurantSchema.findById(this.restaurantId).then((res) => resolve(res));
        } catch (error) {
          reject(error);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  searchs(body) {
    this.searchText = body.searchText;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.searchText, 'The search text is required');
        try {
          const query = {
            $or: [
              { name: { $regex: this.searchText } },
              { description: { $regex: this.searchText } },
              { categories: this.searchText },
            ],
            // name: /this.searchText/,
            // name: { $regex: this.searchText },
          };
          RestaurantSchema.find(query).then((res) => resolve(res));
        } catch (error) {
          reject(error);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  getByCategory(body) {
    this.categories = body.categories;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.categories, 'Categories are required');
        try {
          const query = {
            categories: { $in: this.categories },
          };
          RestaurantSchema.find(query).then((res) => resolve(res));
        } catch (error) {
          reject(error);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  create(body) {
    this.userId = body.userId;
    this.name = body.name;
    this.description = body.description;
    this.categories = body.categories;
    this.address = body.address;
    this.timeDelivery = body.timeDelivery;
    return new Promise((resolve, reject) => {
      try {
        let data = {
          user_id: this.userId,
          name: this.name,
        };
        data = addFieldIfExist(this.description, 'description', data);
        data = addFieldIfExist(this.categories, 'categories', data);
        data = addFieldIfExist(this.address, 'address', data);
        data = addFieldIfExist(this.timeDelivery, 'time_delivery', data);
        const restaurantSchema = new RestaurantSchema(data);
        restaurantSchema.save()
          .then((restaurant) => resolve(restaurant));
      } catch (error) {
        reject(error);
      }
    });
  }

  update(body) {
    this.restaurantId = body.restaurantId;
    this.name = body.name;
    this.description = body.description;
    this.categories = body.categories;
    this.address = body.address;
    this.timeDelivery = body.timeDelivery;
    return new Promise((resolve, reject) => {
      try {
        let data = {};
        data = addFieldIfExist(this.name, 'name', data);
        data = addFieldIfExist(this.description, 'description', data);
        data = addFieldIfExist(this.categories, 'categories', data);
        data = addFieldIfExist(this.address, 'address', data);
        data = addFieldIfExist(this.timeDelivery, 'time_delivery', data);
        RestaurantSchema.updateOne(
          { _id: this.restaurantId },
          data,
        ).then(async (confirm) => resolve(confirm));
      } catch (error) {
        reject(error);
      }
    });
  }

  delete(body) {
    this.restaurantId = body.restaurantId;
    this.userId = body.userId;
    return new Promise((resolve, reject) => {
      try {
        validateGeneral(this.restaurantId, 'The identificador is required');
        validateGeneral(this.userId, 'The user identificador is required');
        const query = {
          _id: this.restaurantId,
          user_id: this.userId,
        };
        RestaurantSchema.deleteOne(query)
          .then(async (confirm) => resolve(confirm));
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = {
  RestaurantService,
};
