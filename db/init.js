db.createUser({
  user: "devstore",
  pwd: "dsfjsdlujfoewrnj1232",
  roles: [
    {
      role: "readWrite",
      db: "dstore",
    },
  ],
});

const products = [
  {
    name: "Suite D Costa",
    inventory: [
      {
        size: "sm",
        quantity: "25",
        price: 9.99,
        availableColors: [
          {
            color: "#11111",
            imageUrls: ["https://item-image.jpg"],
          },
        ],
      },
    ],
    description: "Beautiful, handmade journal.",
    categories: ["Suites", "bestsellers", "Mens"],
    coverImage: "items/journal.jpg",
  },
];
db.products.drop();
db.products.insertMany(products);

const carts = [];
db.products.drop();
db.products.insertMany(carts);

const orders = [];
db.products.drop();
db.products.insertMany(orders);

const payments = [];
db.products.drop();
db.products.insertMany(payments);

//************* DB Collections and models *******************

// Products
/**
  {
    "name": "Suite D Costa",
    "inventory": [
      {
        "size": 'sm',
        "quantity": 25,
        "price": 9.99,
        "availableColors": [ 
           {
              "color": "#11111",
              "imageUrls": ["https://item-image.jpg"]
           }
        ]
      }
    ], 
    "description": "Beautiful, handmade journal.",
    "categories": ["Suites", "bestsellers", "Mens"],
    "coverImage": "items/journal.jpg" 
  }
 */


// Cart
/**
 * {
 *   customerId: 2354539,
 *   quantity: 3,
 *   total: 575,
 *   products: []
 * }
 */


// Orders
/**
 * {
 *   customerId: 2354539,
 *   paymentId: 0958405,
 *   quantity: 3,
 *   products: []
 * }
 */

// Payments
/**
 * { 
 *   customerId: 1243483294,
 *   status: "verified",
 *   gateway: "stripe",
 *   type: "credit",
 *   amount: {
 *     total: 350,
 *     tax: 25,
 *     amount: 325 
 *   },
 *   card: {
 *       brand: "Visa",
 *       panLastFour: "4242",
 *       expirationMonth: 1,
 *       expirationYear: 2090,
 *       cvvVerified: true
 *   }
 * }
 */
