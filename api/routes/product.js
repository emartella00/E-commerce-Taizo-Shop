const User = require("../models/User");

const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
let ar=[];
  if(req.body.promo){
    console.log("c");
    for (let i = 0; i < req.body.price.length; i++) {
      const x=(req.body.price[i]- [req.body.price[i] * (req.body.perc/100)]).toFixed(2);

      
      ar.push(x);
      req.body.pricestock = ar;
  
      
      
    }
    const newProduct = new Product(req.body);
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }



  }
  else{
    const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}});

//UPDATE
router.post("/:id", async (req, res) => {





  let ar=[];
  if(req.body.promo== true){

    for (let i = 0; i < req.body.price.length; i++) {
      const x=(req.body.price[i]- [req.body.price[i] * (req.body.perc/100)]).toFixed(2);

      
      ar.push(x);
      req.body.pricestock = ar;
  
      
      
    }
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },

      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }



  }else{



  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
   
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
}});

//DELETE
router.delete("/:id", async (req, res) => {
  
  try {
    console.log(req.params);
    await Product.findByIdAndDelete({_id:req.params.id});
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});


//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qsubCategory = req.query.subcategory;
  const qsubCategory2 = req.query.subcategory2;
   try {
    let products;

    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
          if (qsubCategory){

              if(qsubCategory2) {

      products = await Product.find({
        categories: {
          $in: [qCategory],

        },
        subcategories: { $in: [qsubCategory],
        } ,
       
        subcategories2: { $in: [qsubCategory2],},
      
      });
    } else {
      products = await Product.find({
        categories: {
          $in: [qCategory],

        },
        subcategories: { $in: [qsubCategory],
        } 
       
      
      
      });

    }
   } else{   products = await Product.find({
      categories: {
        $in: [qCategory],

      },
     
     
    
    });

    }
  
  
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
   }catch (err) {
    res.status(500).json(err);
  }
});

router.get("/brand", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  
  const qbrand = req.query.brand;
   try {
    let products;

    if (qNew)
     {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    }
     else if (qbrand) {
          if (qCategory){

      products = await Product.find({
        categories: {
          $in: [qCategory],

        },
        brand: { $in: [qbrand],
        } 
       
      
      
      });

    }else {
      products = await Product.find({
       
        brand: { $in: [qbrand],
        } 
       
      
      
      });

    }
    
  
  
    } else {
      products = await Product.find();
    }

    res.status(200).json(products);
   }catch (err) {
    res.status(500).json(err);
  }
});

router.get("/promo", async (req, res) => {
  const qNew = req.query.new;
  const qpromo = req.query.promo;
  
 
   try {
    let products;

    if (qNew)
     {
      products = await Product.find().sort({ createdAt: -1 }).limit(1);
    }
     else if (qpromo) {
     
      products = await Product.find({
       
        promo: { $in: [qpromo],
        } 
       
      
      
      });

    }
    
  
  
     else {
      products = await Product.find();
    }

    res.status(200).json(products);
   }catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;