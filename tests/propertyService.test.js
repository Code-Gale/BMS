const Property = require('../src/models/Property');
const propertyService = require('../src/services/propertyService');

jest.mock('../src/models/Property');

describe('Property Service', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('getAllProperties should return all properties', async () => {
    const mockProperties = [
      { id: '1', name: 'Cozy Apartment', description: 'A charming apartment', price: 100, location: 'Anytown' },
      { id: '2', name: 'Beach House', description: 'A beautiful beach-front property', price: 200, location: 'Beachtown' },
    ];
    Property.find.mockResolvedValue(mockProperties);

    const properties = await propertyService.getAllProperties();

    expect(Property.find).toHaveBeenCalledWith({});
    expect(properties).toEqual(mockProperties);
  });

  test('getPropertyById should return a property', async () => {
    const mockProperty = { id: '1', name: 'Cozy Apartment', description: 'A charming apartment', price: 100, location: 'Anytown' };
    Property.findById.mockResolvedValue(mockProperty);

    const property = await propertyService.getPropertyById('1');

    expect(Property.findById).toHaveBeenCalledWith('1');
    expect(property).toEqual(mockProperty);
  });

  test('createProperty should create a new property', async () => {
    const mockPropertyData = { name: 'Luxury Villa', description: 'A spacious villa', price: 300, location: 'Mountaintown' };
    const mockProperty = { id: '1', ...mockPropertyData };
    Property.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(mockProperty),
    }));

    const property = await propertyService.createProperty(mockPropertyData);

    expect(Property).toHaveBeenCalledWith(mockPropertyData);
    expect(property).toEqual(mockProperty);
  });

  test('updateProperty should update an existing property', async () => {
    const mockPropertyId = '1';
    const mockPropertyData = { name: 'Luxury Villa - Updated', description: 'A spacious villa with a pool', price: 350, location: 'Mountaintown' };
    const mockUpdatedProperty = { id: '1', ...mockPropertyData };
    Property.findByIdAndUpdate.mockResolvedValue(mockUpdatedProperty);

    const property = await propertyService.updateProperty(mockPropertyId, mockPropertyData);

    expect(Property.findByIdAndUpdate).toHaveBeenCalledWith(mockPropertyId, mockPropertyData, { new: true });
    expect(property).toEqual(mockUpdatedProperty);
  });

  test('deleteProperty should delete a property', async () => {
    const mockPropertyId = '1';
    const mockDeletedProperty = { id: '1', name: 'Cozy Apartment', description: 'A charming apartment', price: 100, location: 'Anytown' };
    Property.findByIdAndDelete.mockResolvedValue(mockDeletedProperty);

    const property = await propertyService.deleteProperty(mockPropertyId);

    expect(Property.findByIdAndDelete).toHaveBeenCalledWith(mockPropertyId);
    expect(property).toEqual(mockDeletedProperty);
  });
});