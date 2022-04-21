const express = require('express');
const router = express.Router();
const ToDo = require("../model/todoModel");
const {check, validationResult} = require("express-validator");
const { restart } = require('nodemon');
const config = require('config');
const { v4: uuidv4 } = require('uuid');
const auth = require('../middleware/auth');

// const dbURI = config.get('mongoURI');
// const {MongoClient, ObjectId} = require('mongodb')


// @route                    /api
// @description              get all todoItems array
// @access                   public

router.get("/get", auth , async function(req, res) {


    const apiResponse = {
        status: res.statusCode,
        items: 0,
        todoItems: [],
        errors: "no errors"
    }

    try {

        // const client = new MongoClient(dbURI);
        // await client.connect();
        // const database = client.db("myFirstDatabase");
        // const db = database.collection('todoitems');
        
        // const list = await db.find().toArray();
        

        const list = await ToDo.find().sort({date: 1});

        apiResponse.todoItems = list;
        apiResponse.items = list.length;

        res.json(apiResponse);

    } catch (error) {

        console.log(error);

        apiResponse.errors = error.message;

        res.status(500).json(apiResponse);

    }

});


// @route                   /api
// @description             post todoItem
// @access                  public

router.post("/add", check("todoItem", "todoItem is required").not().isEmpty(), async function(req, res) {

    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        res.status(400).json({errors: errors});
    }

    try {
        const todoItem = new ToDo({
            todoItem: req.body.todoItem
        })


        // const client = new MongoClient(dbURI);
        // await client.connect();
        // const database = client.db("myFirstDatabase");
        // const db = database.collection('todoitems');
        
        // const todoItem = {
        //     // _id: uuidv4(),
        //     todoItem: req.body.todoItem,
        //     date: Date.now()
        // }

        // await db.insertOne(todoItem, function(err, info) {
        //     if(err) {
        //         res.status(500).json({error: err});
        //     }
        // } )
    
        todoItem.save();

        // console.log(todoItem)
    
        res.json(todoItem)

    } catch (error) {

        console.log(error);
        res.status(500).json({error: error});

    }

});

// @route                   /api/delete/:id
// @description             delete todoItem
// @access                  public

router.delete("/delete/:id/", async function(req, res) {

    try {
        const id = req.params.id;
        // console.log(id);
        // const client = new MongoClient(dbURI);
        // await client.connect();
        // const database = client.db("myFirstDatabase");
        // const db = database.collection('todoitems');

        // await db.deleteOne({_id: ObjectId(id)}, function(err) {
        //     if(err) {
        //         console.log("some error occured")
        //         res.json(500).json({error: err});
        //     }
        // });

        await ToDo.deleteOne({_id: id});
        console.log("deleted item")
        res.json({status: "success"});

        // await ToDo.delete

    } catch (error) {
        console.log(error);
        res.status(500).json({error: error});
    }

});



module.exports = router;

// route optimization
// demerits of redux
// lazy loding - suspense