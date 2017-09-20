import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  const todayDate = new Date();
  const deviceType = ["smart-phone", "feature_phone", "browser"];
  const randomDeviceType = Math.floor(Math.random() * 3);

  const transaction = {
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
  console.log(transaction)

  res.send(transaction)
});

export default router;
