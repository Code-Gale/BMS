const Booking = require('../models/Booking');

exports.getAllBookings = async () => {
  return await Booking.find().populate('customer').populate('property');
};

exports.getBookingById = async (id) => {
  return await Booking.findById(id).populate('customer').populate('property');
};

exports.createBooking = async (bookingData) => {
  const booking = new Booking(bookingData);
  return await booking.save();
};

exports.updateBooking = async (id, bookingData) => {
  const booking = await Booking.findByIdAndUpdate(id, bookingData, { new: true });
  return booking;
};

exports.deleteBooking = async (id) => {
  const booking = await Booking.findByIdAndDelete(id);
  return booking;
};