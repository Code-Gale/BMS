const Property = require('../models/Property');

exports.getAllProperties = async () => {
  return await Property.find();
};

exports.getPropertyById = async (id) => {
  return await Property.findById(id);
};

exports.createProperty = async (propertyData) => {
  const property = new Property(propertyData);
  return await property.save();
};

exports.updateProperty = async (id, propertyData) => {
  const property = await Property.findByIdAndUpdate(id, propertyData, { new: true });
  return property;
};

exports.deleteProperty = async (id) => {
  const property = await Property.findByIdAndDelete(id);
  return property;
};