const Customer = require('../src/models/Customer');
const customerService = require('../src/services/customerService');

jest.mock('../src/models/Customer');

describe('Customer Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getAllCustomers should return all customers', async () => {
    const mockCustomers = [
      { id: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' },
      { id: '2', name: 'Jane Smith', email: 'jane.smith@example.com', phone: '0987654321' },
    ];
    Customer.find.mockResolvedValue(mockCustomers);

    const customers = await customerService.getAllCustomers();

    expect(Customer.find).toHaveBeenCalledWith({});
    expect(customers).toEqual(mockCustomers);
  });

  test('getCustomerById should return a customer', async () => {
    const mockCustomer = { id: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' };
    Customer.findById.mockResolvedValue(mockCustomer);

    const customer = await customerService.getCustomerById('1');

    expect(Customer.findById).toHaveBeenCalledWith('1');
    expect(customer).toEqual(mockCustomer);
  });

  test('createCustomer should create a new customer', async () => {
    const mockCustomerData = { name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' };
    const mockCustomer = { id: '1', ...mockCustomerData };
    Customer.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(mockCustomer),
    }));

    const customer = await customerService.createCustomer(mockCustomerData);

    expect(Customer).toHaveBeenCalledWith(mockCustomerData);
    expect(customer).toEqual(mockCustomer);
  });

  test('updateCustomer should update an existing customer', async () => {
    const mockCustomerId = '1';
    const mockCustomerData = { name: 'John Doe Jr.', email: 'john.doe.jr@example.com', phone: '0987654321' };
    const mockUpdatedCustomer = { id: '1', ...mockCustomerData };
    Customer.findByIdAndUpdate.mockResolvedValue(mockUpdatedCustomer);

    const customer = await customerService.updateCustomer(mockCustomerId, mockCustomerData);

    expect(Customer.findByIdAndUpdate).toHaveBeenCalledWith(mockCustomerId, mockCustomerData, { new: true });
    expect(customer).toEqual(mockUpdatedCustomer);
  });

  test('deleteCustomer should delete a customer', async () => {
    const mockCustomerId = '1';
    const mockDeletedCustomer = { id: '1', name: 'John Doe', email: 'john.doe@example.com', phone: '1234567890' };
    Customer.findByIdAndDelete.mockResolvedValue(mockDeletedCustomer);

    const customer = await customerService.deleteCustomer(mockCustomerId);

    expect(Customer.findByIdAndDelete).toHaveBeenCalledWith(mockCustomerId);
    expect(customer).toEqual(mockDeletedCustomer);
  });
});