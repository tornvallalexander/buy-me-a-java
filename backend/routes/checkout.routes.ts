const express = require("express")
const dotenv = require("dotenv")

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const router = express.Router()

router.route("/").post(async (req: any, res: any) => {
  const { price, accountId } = req.body || {}
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [{
        price: price || "20",
        quantity: 1,
      }],
      mode: "payment",
      success_url: "https://example.com/success",
      cancel_url: "https://example.com/failure",
      payment_intent_data: {
        application_fee_amount: 1,
        transfer_data: {
          destination: accountId || "acct_1K49tPQr9blz6WNH",
        },
      },
    })

    console.log("session: ", session)
  }
  catch (err) {
    console.log(err)
    res.status(500)
    res.send({ error: err.message })
    return;
  }
})

export default router;