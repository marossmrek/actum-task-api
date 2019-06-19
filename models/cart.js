const { Model } = require('../config/database');

class Cart extends Model {
    static get tableName() {
        return this.name.toLowerCase();
    }

    static async getAllItems() {
        console.log('in cart')
        return await this.query();
    }

    static async findItemById(id) {
        return await this.query().where({id: id}).limit(1).first();
    }
}

module.exports.Cart = Cart;
