const Product  = require('../modle/model')

exports.addProduct = (req,res) =>{
    res.render('form',{editing:false})
}

// create
exports.postAddProduct = (req,res)=>{
    const title = req.body.title
    const price = req.body.price
    const description = req.body.description
    const product = new Product({
        title:title,
        price:price,
        description:description
    })
    product.save()
    .then(result=>{
        res.redirect('/')
        console.log("created Product...")
    })
    .catch(err=>{
        console.log(err)
    })
}

// read
exports.product = (req,res) =>{
    Product.find()
    .then(product=>{
        res.render('product',{prod:product})
    })
    .catch(err=>{
        console.log(err)
    })
}

// update
// post
exports.postEditProduct=(req,res)=>{
   const updatedTitle = req.body.title
   const updatedPrice = req.body.price
   const updatedDescription = req.body.description
   const prodId = req.body.productId
   Product.findById(prodId)
   .then(product => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDescription;
    return product.save();
  })
  .then(result => {
    console.log('UPDATED PRODUCT!');
    res.redirect('products');
  })
  .catch(err => console.log(err));
   
}
// get
exports.getEditProduct=(req,res)=>{
    const editMode = req.query.edit
    if(!editMode){
        return res.redirect('/add-product')
    }
    const prodId = req.params.productId
    Product.findById(prodId).then(product=>{
        if(!product){
            return res.redirect('/add-product')
        }
        res.render('form',{editing:editMode,product})
    })
}
// delete
exports.postDeleteProduct = (req,res) =>{
    const prodId = req.body.productId
    Product.findByIdAndRemove(prodId)
    .then(result=>{
        console.log("Deleted Product")
        res.redirect('/')
    })
    .catch(err=>{console.log(err)})
}