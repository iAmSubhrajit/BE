const { json } = require('express');
const express = require('express');
const app = express();
// const users = require('./data/users.json')
// const posts = require('./data/posts.json')
//middleware
//to get the data from client where body is in form of json 
app.use(express.json());
//to get the data from a form where the body format is  urlencoded()
// app.use(express.urlencoded())

const products = [
    {
        id: 1,
        name: 'Oneplus 7',
        category: 'mobile',
        price: 33000,
        color: 'Black'
    },
    {
        id: 2,
        name: 'Nothing 1',
        category: 'mobile',
        price: 33000,
        color: 'Black'
    },
    {
        id: 3,
        name: 'Iphone 14',
        category: 'mobile',
        price: 98000,
        color: 'White'
    },
    {
        id: 4,
        name: 'Galaxy S23',
        category: 'mobile',
        price: 86000,
        color: 'Black'
    },
    {
        id: 5,
        name: 'HP Pavillion 15',
        category: 'laptop',
        price: 55000,
        color: 'silver'
    },
    {
        id: 6,
        name: 'Fridge',
        category: 'appliance',
        price: 25000,
        color: 'Dark-gray'
    }
]

app.get('/', (req, res) => {
    console.log('/ endpoint');
    res.send('<h1>Hello World</h1>')
})

app.post('/', (req, res) => {
    console.log('/ endpoint using', req.method);
    res.send(req.method)
})

app.get('/login', (req, res) => {
    console.log('login endpoint');
    console.log('method:-', req.method);
    console.log('url:-', req.url);
    console.log('path:-', req.path);
    console.log('headers:-', req.headers);
    console.log('query:-', req.query);
    res.send('<h2>Login Page</h2>')
})

// app.get('/users', (req, res) => {
//     console.log('users endpoint');
//     // res.send({
//     //     name: 'Subhrajit',
//     //     age: 25
//     // })
//     res.send(users)
// })

// app.get('/posts', (req, res) => {
//     console.log('posts endpoint');
//     res.send(posts)
// })

//Read operation
app.get('/products', (req, res) => {
    const { category, price } = req.query
    if (category && price) {
        const productLists = products.filter((prod) => prod.category === category && prod.price === +price);
        res.send(productLists)
    }
    else if (category) {
        const productLists = products.filter((prod) => prod.category === category);
        res.send(productLists)
    }
    else if (price) {
        const productLists = products.filter((prod) => prod.price === +price);
        res.send(productLists)
    }
    else {
        res.send(products)
    }
})
app.get('/products/:id', (req, res) => {
    // console.log('params', req.params);
    const product = products.find((prod) => prod.id === +req.params.id);

    product ? res.send(product) : res.send({})
})

//Create opeartion
app.post('/products', (req, res) => {
    // console.log('data in body', req.body);
    products.push(req.body)
    res.send(products)
})

app.get('*', (req, res) => {
    console.log('not found page');
    res.send('<center><h1>Page Not Found!!</h1></center>')
})

//update operation:- PUT & PATCH
//PUT:- used to update the whole data of document or element by replacing the whole content
//    -> and will create a new data or element if updating element is not found
//PATCH:- used to update the only value passed in request data

app.put('/products/:id', (req, res) => {
    products.forEach((el, idx) => {
        if (el.id === +req.params.id) {
            products[idx] = req.body;
        }
    })
    //or
    // find index
    // const elementIndex = products.findIndex((el)=> el.id === +req.params.id)
    // update element at the index
    // products[elementIndex] = req.body
    res.send(products)
})
app.patch('/products/:id', (req, res) => {
    // products.forEach((el, idx) => {
    //     if (el.id === +req.params.id) {
    //         products[idx] = { ...el, ...req.body };
    //     }
    // })
    //or
    // find index
    const elementIndex = products.findIndex((el) => el.id === +req.params.id)
    // update element at the index
    if (elementIndex !== -1)
        products[elementIndex] = { ...products[elementIndex], ...req.body };
    res.send(products)
})

//Delete operation
app.delete('/products/:id', (req, res) => {
    // find index
    const elementIndex = products.findIndex((el) => el.id === +req.params.id)
    //delete the elemet
    if (elementIndex !== -1)
        products.splice(elementIndex, 1)
    res.send(products)
})
//see 1hr 45min






const PORT = 3000;
// app.listen(3000)
app.listen(PORT, () => {
    console.log(`express server running at ${PORT}`);
})