const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'PHONE NUMBER', uid: 'phone' },
  { name: 'POSTAL CODE', uid: 'postalcode' },
  { name: 'CITY', uid: 'city' },
  { name: 'SHIPPING ADDRESS', uid: 'shippingaddress' },
  { name: 'ACTIONS', uid: 'actions' },
];

const users = [
  {
    id: 1,
    status: 'active',

    name: 'Tony Reichert',
    role: 'CEO',
    age: '29',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    email: 'tony.reichert@example.com',
    phone: '555-555-5555',
    shippingaddress: 'San Francisco, CA',
    city: 'San Francisco',
    postalcode: '94108',
  },
  {
    id: 2,
    name: 'Zoey Lang',
    role: 'Technical Lead',

    age: '25',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    email: 'zoey.lang@example.com',
    phone: '555-555-5555',
    shippingaddress: 'San Francisco, CA',
    city: 'San Francisco',
    postalcode: '94108',
  },
  {
    id: 3,
    name: 'Jane Fisher',

    age: '22',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
    email: 'jane.fisher@example.com',
    phone: '555-555-5555',
    shippingaddress: 'San Francisco, CA',
    city: 'San Francisco',
    postalcode: '94108',
  },
  {
    id: 4,
    name: 'William Howard',

    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
    email: 'william.howard@example.com',
    phone: '555-555-5555',
    shippingaddress: 'San Francisco, CA',
    city: 'San Francisco',
    postalcode: '94108',
  },
  {
    id: 5,
    name: 'Kristen Copper',

    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
    email: 'kristen.cooper@example.com',
    phone: '555-555-5555',
    shippingaddress: 'San Francisco, CA',
    city: 'San Francisco',
    postalcode: '94108',
  },
];

export { columns, users };
