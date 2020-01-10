const { Router } = require('express');
const router = Router();
const stripe = require('stripe')('sk_test_ZfYuPEK43dXmTls0BEVNxIgj002SB2vsej');

router.post('/checkout', async (req, res) => {

    console.log('hola mundo');
    console.log(req.body);

    /*console.log(req.body);
    const customer = await stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    });

    const charge = await stripe.charges.create({
        amount: '1000',
        currency: 'usd',
        customer : customer.id,
        description: 'Video Editing Software'
    });

    console.log(charge.id);*/
    res.send('received');
});

module.exports = router;