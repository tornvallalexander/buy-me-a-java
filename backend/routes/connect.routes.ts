const express = require("express")
const dotenv = require("dotenv")

// https://www.youtube.com/watch?v=RYiscsdICrs

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const router = express.Router()

router.route("/").post(async (_req: any, res: any) => {
  try {
    const account = await stripe.accounts.create({ type: "standard" })

    const accountLink = await stripe.accountLinks.create({
      account: account.id,
      refresh_url: `${process.env.SITE_URL}/reconnect`,
      return_url: `${process.env.SITE_URL}/return`,
      type: "account_onboarding",
    })
    res.send(accountLink)
    return;
  }
  catch (err) {
    console.log(err)
    res.status(400)
    res.send({ error: err})
    return;
  }
})

export default router;