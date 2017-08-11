import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  const products = {
    "1": { "Supplier": "New Co Ltd",
    "Product": "Small wongle",
    "Price": "5"
    },
    "2": { "Supplier": "Old Co Ltd",
    "Product": "Mini wongle",
    "Price": "4"
    },
    "3": { "Supplier": "New Co Ltd",
    "Product": "Large wongle",
    "Price": "8"
    },
    "4": { "Supplier": "Old Co Ltd",
    "Product": "Small wongle",
    "Price": "6"
    },
    "5": { "Supplier": "New Co Ltd",
    "Product": "Super wongle",
    "Price": "12"
    },
    "6": { "Supplier": "Old Co Ltd",
    "Product": "Large wongle",
    "Price": "9"
    },
    "7": { "Supplier": "Old Co Ltd",
    "Product": "Super wongle",
    "Price": "13"
    }
  }
  console.log(products)

  res.send(products)
});

export default router;
