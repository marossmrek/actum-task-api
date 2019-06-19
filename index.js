const express = require('express');
const cors = require('cors');
const { Cart } = require('./models/cart');

const app = express();
const port = 5000;

//middleware
app.use(cors());

//endpoints
app.get('/', async (req, res) => {
    let allItems = await Cart.getAllItems();
    res.send(allItems).end();
});

app.delete('/:id', async (req, res) => {
    let deleteItem = await Cart.findItemById(req.params.id);
    await deleteItem.$query().delete();

    let allItems = await Cart.getAllItems();
    res.send(allItems).end();
});

//starting server
app.listen(port, () => console.log(`Listening on port ${port}!`));
