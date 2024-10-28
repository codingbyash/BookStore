import Address from "../model/address.model.js"

export const createAddress = async (req, res) => {
  const { userId, name, street, city, zip } = req.body;

  try {
    const address = new Address({ userId, name, street, city, zip });
    await address.save();
    res.status(201).json(address);
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json({ message: 'Error creating address' });
  }
};

export const getAddressesByUserId = async (req, res) => {
  try {
    const addresses = await Address.find({ userId: req.params.userId });
    res.status(200).json(addresses);
  } catch (error) {
    console.log('Error: ', error);
    res.status(500).json(error);
  }
};

export const getAddressById = async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    if (!address) {
      return res.status(404).json({ message: 'Address not found' });
    }
    res.json(address);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
