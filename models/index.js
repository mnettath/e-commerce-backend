// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo one Category
// One to One

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
// One to Many

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
// belongsToMany: used to create a many-to-many relationship between two models
// the association between these two models is represented in ProductTag which acts as an intermediary

// Product is the source model, search in ProductTag model to find the foreign key (what connects the Product model to the ProductTag model?)
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });

// Tag is the source model. What connects the Tag model to the ProductTag model? tag_id
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
