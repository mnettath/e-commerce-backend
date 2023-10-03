// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo one Category
// One to One

Product.hasOne(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Category.belongsTo(Product, {
  foreignKey: "category_id",
});

// Categories have many Products
// One to Many

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
// belongsToMany: used to create a many-to-many relationship between two models
// the association between these two models is represented in ProductTag which acts as an intermediary

Product.belongsToMany(Tag, { through: ProductTag });

Tag.belongsToMany(Product, { through: ProductTag });

// Tags belongToMany Products (through ProductTag)
// belongsToMany: used to create a many-to-many relationship between two models
// the association between these two models is represented in ProductTag which acts as an intermediary

Tag.belongsToMany(Product, { through: ProductTag });

Product.belongsToMany(Tag, { through: ProductTag });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
