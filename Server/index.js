const express = require('express')
const mongoose = require('mongoose');


const app = express()
const PORT = 4000
const DB_URL = "mongodb+srv://ExamDemo:examdemo123@cluster0.5s3wfti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())


const Schema = mongoose.Schema;

const ProductWomenSchema = new Schema({
    title: { type: String, require: true },
    imageUrl: { type: String, require: true },
    price: { type: Number, require: true },
   
});

const productWomenModel = mongoose.model("product", ProductWomenSchema)

app.get('/api/products', async (req, res) => {
try {
    
    const allProduct = await productWomenModel.find({})
    if (allProduct.length>0) {
        res.status(200).send({message:"success", data: allProduct})

    }else{
        res.status(204).send({
            message: "data is epmty",
            data: null
        })
    }
} catch (error) {
    res.status(500).send({message: error.message})
}
})

app.get('/api/products/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const allproductes =  await productWomenModel.findById(id)
        if (allproductes) {
            res.status(200).send({
                message: "success",
                data: allproductes,
            })
        }else{
            res.status(404).send({message: "NOT FOUND"})
        }

    } catch (error) {
        res.status(500).send({message: error.message})
    }
})

app.delete('/api/products/:id', async (req, res) => {

    const {id} = req.params;
try {
    const deletedProduct = await productWomenModel.findByIdAndDelete(id)
    if (deletedProduct) {
        res.status(200).send({message: "Product deleted"})
    }

} catch (error) {
    res.status(500).send({data:"not found"})
}
})


app.post('/api/products', async (req, res) => {
    console.log(req.body);

try {
    const newProduct = new productWomenModel({...req.body});
    await newProduct.save();
    res.status(201).send({message: "created new Product", data: newProduct,});
} catch (error) {
    res.status(500).send({data:"not found"})

}

})

mongoose.connect(DB_URL)
  .then(() => {console.log('Connected!')
  app.listen(PORT, () => {
    console.log(`Example ${PORT} http://localhost:${PORT}`)
  }) 

  });