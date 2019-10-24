const express = require('express'),
      bodyParser = require('body-parser'),
      MongoCLient = require('mongodb').MongoClient,
      ObjectID = require('mongodb').ObjectID;
      
var app = express(),
    db;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
            res.header('Access-Control-Allow-Credentials', true);
            res.header('Access-Control-Allow-Origin', req.headers.origin);
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
            next();
})

//START PAGE

app.get('/', (req, res) => {
    res.send('hello api')
});

//AUTH

app.post('/auth', (req, res) => {
    
    let {login, pass} = req.body;
    
    db.collection('users').findOne({login, pass}, (err, result) => {
        if(err) {
            console.log(err)
            return res.sendStatus(500);
        }
        
        if(!result) return res.send({statusCode: 0, message: 'incorect login or password'});
        
        let {login, _id, cart, pass} = result;
        res.send({id: _id, login, pass, cart, statusCode: 1})
    })
}) // {"login": "Denis", "pass": 12345}

//REGISTERY

app.post('/registery', (req, res) => {
    db.collection('users').findOne({login: req.body.login}, (err, result) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500)
        }
        if(!result) {
            db.collection('users').insertOne({...req.body, cart: []}, (err, result) => {
                if(err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send({statusCode: 1});
            })   
        } else res.send({statusCode: 0, message: 'login is already taken'});
    })
}) // {"login": "Ura1", "pass": 12345, "email": "test@gmail.com"}

// PRODUCTS

app.get('/products', (req, res) => {
    
    db.collection('products').find().toArray((err, docs) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500)
        } 
        res.send({statusCode: 1, products: docs});
    })
})

app.get('/products/:id', (req, res) => {
    
    let {id} = req.params;
    
    db.collection('products').findOne({_id: ObjectID(id)}, (err, doc) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send({statusCode: 1, products: Array(doc)})
    })
})

app.post('/products', (req, res) => {
    
    db.collection('products').insert(req.body, (err, result) => {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);  
    })
}) // {"name": "milk", "price": 22, "category": "milk-products"}


app.put('/products/:id', (req, res) => {
    
    let {id} = req.params;
    
    db.collection('products').updateOne(
        { _id: ObjectID(id) },
        {$set: {...req.body}},
        (err, result) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200)
        })
}) // {"name": "cheese", "price": 24}

app.delete('/products/:id', (req, res) => {
    
    let {id} = req.params;
    
    db.collection('products').deleteOne({_id: ObjectID(id)}, (err, result) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
})

//HIT 

app.get('/hit', (req, res) => {
    
    db.collection('products').find({hit: {$exists: true}}).toArray((err, docs) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500)
        } 
        res.send({statusCode: 1, products: docs});
    })
})

// CATALOG

app.get('/catalog/:category', (req, res) => {
    
    const {count, page} = req.query;
    
    db.collection('products').find({category: req.params.category}).limit(+count).skip(+page * +count).toArray((err, docs) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500)
        }
        db.collection('products').find({category: req.params.category}).count((err, count) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500)
            }
            res.send({statusCode: 1, products: docs, totalCount: count})
        })
    })
})

//USERS

app.get('/users', (req, res) => {
    
    db.collection('users').find().toArray((err, docs) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500)
        }
        res.send(docs)
    })
})

app.get('/users/:id', (req, res) => {
    
    db.collection('users').findOne(
            { _id: ObjectID(req.params.id) },
            (err, doc) => {
                if(err) {
                    console.log(err)
                    return res.sendStatus(500)
                }
                res.send(doc)
            }
        )
})

app.put('/users/:id', (req, res) => {
    
    let {id} = req.params;

    const updateUserData = (id) => {
        db.collection('users').updateOne(
            {_id: ObjectID(id)},
            {$set: {...req.body}},
            (err, result) => {
                if(err) {
                    console.log(err);
                    return res.sendStatus(500);
                }
                res.send({statusCode: 1});;
            }
        )
    };

    req.body.login 
        ? db.collection('users').findOne({login: req.body.login}, (err, result) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500)
            }
            return !result ? updateUserData(id) : res.send({statusCode: 0, message: 'такой логин уже занят'});
        })
        :  updateUserData(id);
})

app.delete('/users/:id', (req, res) => {
    db.collection('users').deleteOne({_id: ObjectID(req.params.id)}, (err, result) => {
        if(err) {
            console.log(err)
            return res.sendStatus(500)
        }
        res.sendStatus(200)
    })
})

// CART

app.post('/cart/:id', (req, res) => {
    db.collection('users').update(
        {_id: ObjectID(req.params.id)}, 
        {$push: { cart: {...req.body} }},
        (err, result) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })
})  // Добавление продукта в массив cart (объект должен выглядить следующим образом: {name: имя продукта, price: цена, id: id продукта, counter: количество })

app.put('/cart/:id', (req, res) => {
    db.collection('users').update(
        {_id: ObjectID(req.params.id), "cart._id": req.body._id}, 
        {$set: {"cart.$.counter": req.body.value}},
        (err, result) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })
}) //Инкрементирует counter {"_id": 12, "value": -1}

app.put('/cart/:id/delete', (req, res) => {
    db.collection('users').updateOne(
        {_id: ObjectID(req.params.id)},
        {$pull: {cart: {_id: req.body._id}}},
        (err, result) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
}) //Удаление продукта из cart {"_id": 2}

//SERCH

app.get('/search', (req, res) => {

    const {q, count, page} = req.query;

    db.collection('products').find({name: q ? {$regex: q, $options: 'i'} : null}).limit(+count).skip(+page * +count).toArray((err, docs) => {
        if(err) {
            console.log(err);
            return res.sendStatus(500);
        }
        db.collection('products').find({name: q ? {$regex: q, $options: 'i'} : null}).count((err, count) => {
            if(err) {
                console.log(err);
                return res.sendStatus(500)
            }
            res.send({statusCode: 1, products: docs, totalCount: count})
        })
    })
})

MongoCLient.connect('mongodb://localhost', (err, client) => {
    if(err) return console.log(err);
    db = client.db('productShopApp');
    app.listen(4000, () => {
        console.log('server is listen at port 4000');
    })
})
