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

const products = [];

db.products.drop();
db.products.insertMany(products);
