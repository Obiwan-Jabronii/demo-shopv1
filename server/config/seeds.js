const db = require('./connection');
const  { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();
    console.log(Category)

    const categories = await Category.insertMany([
        {name: 'Food'},
        {name: 'Electronics'},
        {name: 'Household Items'},
        {name: 'Books'},
        {name: 'Games'},
        {name: 'Toys'},
    ]);

    console.log('Categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Tin of Cookies',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'tinofcookies.jpg',
            category: categories[0]._id,
            price: 2.99,
            quantity: 500
          },{
            name: 'How to Be Fine',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'fine.jpg',
            category: categories[3]._id,
            price: 14.99,
            quantity: 150
          },{
            name: 'Jacks',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'jacks.jpg',
            category: categories[5]._id,
            price: 1.99,
            quantity: 300
          },{
            name: 'Laptop',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'laptop.jpg',
            category: categories[1]._id,
            price: 799.99,
            quantity: 50
          },{
            name: 'Monopoly',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'monopoly.jpg',
            category: categories[4]._id,
            price: 15.99,
            quantity: 250
          },{
            name: 'Candle',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'candle.jpg',
            category: categories[2]._id,
            price: 10.99,
            quantity: 175
          },{
            name: 'Cake',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'cake.jpg',
            category: categories[0]._id,
            price: 35.99,
            quantity: 25
          },{
            name: 'Console',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'console.jpg',
            category: categories[1]._id,
            price: 499.99,
            quantity: 15
          },{
            name: 'Settlers of Catan',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'settlers.jpg',
            category: categories[4]._id,
            price: 25.99,
            quantity: 75
          },{
            name: 'Jules Verne Collection',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'julesverne.jpg',
            category: categories[3]._id,
            price: 20.99,
            quantity: 45
          },{
            name: 'Wooden Car',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'car.jpg',
            category: categories[5]._id,
            price: 6.99,
            quantity: 250
          },{
            name: 'Salad',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'salad.jpg',
            category: categories[0]._id,
            price: 5.99,
            quantity: 60
          },{
            name: 'Television',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'tv.jpg',
            category: categories[1]._id,
            price: 499.99,
            quantity: 20
          },{
            name: 'Bar Soap',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'soap.jpg',
            category: categories[2]._id,
            price: 5.99,
            quantity: 100
          },{
            name: 'Dune',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'dune.jpg',
            category: categories[3]._id,
            price: 25.99,
            quantity: 50
          },{
            name: 'Jenga',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'jenga.jpg',
            category: categories[4]._id,
            price: 15.99,
            quantity: 300
          },{
            name: 'Toy Boat',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'boat.jpg',
            category: categories[5]._id,
            price: 10.99,
            quantity: 150
          },{
            name: 'Sandwich',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'sandwich.jpg',
            category: categories[0]._id,
            price: 6.99,
            quantity: 35
          },{
            name: 'Keyboard',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'keyboard.jpg',
            category: categories[1]._id,
            price: 65.99,
            quantity: 75
          },{
            name: 'Loofa',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'loofa.jpg',
            category: categories[2]._id,
            price: 7.99,
            quantity: 155
          },{
            name: 'Wool',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'wool.jpg',
            category: categories[3]._id,
            price: 12.99,
            quantity: 50
          },{
            name: 'Here to Slay',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'heretoslay.jpg',
            category: categories[4]._id,
            price: 10.99,
            quantity: 30
          },{
            name: 'YoYo',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'yoyo.jpg',
            category: categories[5]._id,
            price: 7.99,
            quantity: 200
          },{
            name: 'Vacuum',
            description:
              'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
            image: 'vacuum.jpg',
            category: categories[2]._id,
            price: 75.99,
            quantity: 45
          },

    ]);
    console.log(products)
    console.log('Products seeded');

    await User.deleteMany();

    await User.create({
        username: 'Mitchell',
        email: 'mitchell@testmail.com',
        password: 'password12345',
        orders: [
          {
            products: [products[0]._id, products[0]._id, products[1]._id]
          }
        ]
      });
    
      await User.create({
        username: 'Kassi',
        email: 'kassi@testmail.com',
        password: 'password12345'
      });
    
      console.log('users seeded');
    
      process.exit();
});