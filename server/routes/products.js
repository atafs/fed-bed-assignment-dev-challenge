import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  const todayDate = new Date();
  const deviceType = ["smart-phone", "feature_phone", "browser"];
  const randomDeviceType = Math.floor(Math.random() * 3);

  const transation = {
    "userId" : "bob",
    "transaction" : {
        "type": "login",
        "time": todayDate
    },
    "location" : {
        "longitude": -51.51965,
        "latitude": 51.51965,
    },
    "device" : {
      "type" : deviceType[randomDeviceType],
      "os" : "Apple",
      "model" : "iPhone 7"
    }
  }
  console.log(transation)

  const products = [
    { "Supplier": "New Co Ltd",
    "Product": "Small wongle",
    "Price": "5"
    },
    { "Supplier": "Old Co Ltd",
    "Product": "Mini wongle",
    "Price": "4"
    },
    { "Supplier": "New Co Ltd",
    "Product": "Large wongle",
    "Price": "8"
    },
    { "Supplier": "Old Co Ltd",
    "Product": "Small wongle",
    "Price": "6"
    },
    { "Supplier": "New Co Ltd",
    "Product": "Super wongle",
    "Price": "12"
    },
    { "Supplier": "Old Co Ltd",
    "Product": "Large wongle",
    "Price": "9"
    },
    { "Supplier": "Old Co Ltd",
    "Product": "Super wongle",
    "Price": "13"
    }
  ]
  console.log(products)

  res.send(products)
});

export default router;
