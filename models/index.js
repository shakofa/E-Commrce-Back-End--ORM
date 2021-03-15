// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
product.belongTo(Category, {
  foreignKey: 'category_id',
});

// Categories have many Products
category.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
category.belongToMany(Tag, {
  through: 'productTag',
  foreignKey: 'product_id',
});
// Tags belongToMany Products (through ProductTag)
tag.belongsToMany(Produt, {
  through: 'productTag',
  foreignKey: 'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
