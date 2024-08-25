const Booking = require('../src/models/Booking');
const bookingService = require('../src/services/bookingService');

jest.mock('../src/models/Booking');

describe('Booking Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getAllBookings should return all bookings', async () => {
    const mockBookings = [
      { id: '1', customer: '1', property: '1', startDate: '2023-01-01', endDate: '2023-01-07', totalPrice: 500 },
      { id: '2', customer: '2', property: '2', startDate: '2023-02-15', endDate: '2023-02-22', totalPrice: 700 },
    ];
    Booking.find.mockResolvedValue(mockBookings);

    const bookings = await bookingService.getAllBookings();

    expect(Booking.find).toHaveBeenCalledWith({});
    expect(bookings).toEqual(mockBookings);
  });

  test('getBookingById should return a booking', async () => {
    const mockBooking = { id: '1', customer: '1', property: '1', startDate: '2023-01-01', endDate: '2023-01-07', totalPrice: 500 };
    Booking.findById.mockResolvedValue(mockBooking);

    const booking = await bookingService.getBookingById('1');

    expect(Booking.findById).toHaveBeenCalledWith('1');
    expect(booking).toEqual(mockBooking);
  });

  test('createBooking should create a new booking', async () => {
    const mockBookingData = { customer: '1', property: '1', startDate: '2023-01-01', endDate: '2023-01-07', totalPrice: 500 };
    const mockBooking = { id: '1', ...mockBookingData };
    Booking.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(mockBooking),
    }));

    const booking = await bookingService.createBooking(mockBookingData);

    expect(Booking).toHaveBeenCalledWith(mockBookingData);
    expect(booking).toEqual(mockBooking);
  });

  test('updateBooking should update an existing booking', async () => {
    const mockBookingId = '1';
    const mockBookingData = { customer: '2', property: '2', startDate: '2023-02-15', endDate: '2023-02-22', totalPrice: 700 };
    const mockUpdatedBooking = { id: '1', ...mockBookingData };
    Booking.findByIdAndUpdate.mockResolvedValue(mockUpdatedBooking);

    const booking = await bookingService.updateBooking(mockBookingId, mockBookingData);

    expect(Booking.findByIdAndUpdate).toHaveBeenCalledWith(mockBookingId, mockBookingData, { new: true });
    expect(booking).toEqual(mockUpdatedBooking);
  });

  test('deleteBooking should delete a booking', async () => {
    const mockBookingId = '1';
    const mockDeletedBooking = { id: '1', customer: '1', property: '1', startDate: '2023-01-01', endDate: '2023-01-07', totalPrice: 500 };
    Booking.findByIdAndDelete.mockResolvedValue(mockDeletedBooking);

    const booking = await bookingService.deleteBooking(mockBookingId);

    expect(Booking.findByIdAndDelete).toHaveBeenCalledWith(mockBookingId);
    expect(booking).toEqual(mockDeletedBooking);
  });
});