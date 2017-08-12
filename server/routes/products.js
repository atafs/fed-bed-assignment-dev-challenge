import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
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
