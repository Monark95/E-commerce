const paypal = require("paypal-rest-sdk");

// Only configure PayPal if environment variables are provided
if (process.env.PAYPAL_MODE && process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET) {
  paypal.configure({
    mode: process.env.PAYPAL_MODE, // "sandbox" or "live"
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
  });
  console.log("PayPal configured successfully");
} else {
  console.log("PayPal credentials not provided - PayPal features will be disabled");
}

module.exports = paypal;
