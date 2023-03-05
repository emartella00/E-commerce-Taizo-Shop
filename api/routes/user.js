









const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const CryptoJS = require("crypto-js");
const router = require("express").Router();



  router.post("/password/:id", async (req, res) => {
    console.log(req.params.id);

    const user = await User.findOne({ _id: req.params.id });
  
     if (req.body.password) {
       const hashedPassword = CryptoJS.AES.decrypt(
         user.password,
        "lama"
       );
       const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
{console.log(req.body.ppassword)}
{console.log(req.body.password)}
     
      if(OriginalPassword == req.body.ppassword
        ){
        {console.log("OK")}
          req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
           "lama"
          ).toString();
          try {
            const updatedOrder = await User.findByIdAndUpdate(
              req.params.id,
              {
                $set:{password:req.body.password}
              },
             
            );
          
          

          res.status(200).json(updatedOrder);
          } catch (err) {
           
        
        
        }
       
   }else{
    res.status(201).json("Error");
   }
  
  
  }
 
  
  }
  );
  
  router.post("/:id", async (req, res) => {
    const user = await User.findOne({ _id: req.params.id });
  
     if (req.body.password) {
       const hashedPassword = CryptoJS.AES.decrypt(
         user.password,
        "lama"
       );
       const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
       console.log(OriginalPassword);
    
      if(OriginalPassword == req.body.password
        ){
          
          req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
           "lama"
          ).toString();
          try {
            const updatedOrder = await User.findByIdAndUpdate(
              req.params.id,
              {
                $set:{ username:req.body.username,
                  email:req.body.email,
                  tel:req.body.tel,
                  name:req.body.name,
                  surname:req.body.surname,}
              },
             
            );
          
            
            res.status(200).json("ok");
           
          } catch (err) {
             
        }
      
   }else{
    res.status(201).json("Error")
   }
  
  
          
  
  
     }
     else{res.status(201).json("Error")}
    }
  
  );
 


//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER
router.get("/find/:id", async (req, res) => {

  try {
    const user = await User.findById(req.params.id);
  
    const { password, ...others } = user._doc;
    res.status(200).json(others);
   
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/", async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post("/deletews/:id",async(req,res)=>{
console.log(req.params);


try{
  
  const upws2 =   await User.findByIdAndUpdate({_id:req.body._id},{
  $pull:{wishlist:{_id: req.params.id}}
})
res.status(200).json(upws2);

}catch(err) {
res.status(500).json(err);
}
   
  }
  
  );



  router.post("/upd/:id",async(req,res)=>{



    try{
      const upws2 =   await User.updateMany(
        {wishlist:{$elemMatch:{_id:req.params.id}}},
       {$push  :{wishlist:{
        title:req.body.title,
          img:req.body.img,
          _id:req.params.id,
          brand:req.body.brand  }}},
          {multi:true}
      
          )
          res.status(200).json(upws2);
      console.log(upws2);
     
      
      
            }catch(err) {
              res.status(500).json(err);
            }

    try{
    
      const upws3 =   await User.updateMany(
        {wishlist:{$elemMatch:{_id:req.params.id}}},
       {$pull  :{wishlist:{_id:req.params.id,
        title:req.body.ttitle


    
       }}},{multi:true}
      
          )
    res.status(200).json(upws3);
console.log(upws3);

  }catch(err) {
   
  }


   
   } 
    
  );












    


router.post("/ws/:id",async(req,res)=>{


let alreadyadded =0;
  const us= await User.findOne({ _id: req.params.id });
 

for(let i=0; i<us.wishlist.length;i++){
  if(us.wishlist[i]._id == req.body._id){
    alreadyadded = 1;

  }
}


  if (alreadyadded!=0){

    try{
      const upws2 =   await User.findByIdAndUpdate({_id:req.params.id},{
      $pull:{wishlist:{_id:req.body._id,
    
     }}
    })
    res.status(200).json(upws2);


  }catch(err) {
    res.status(500).json(err);
  }
}
  else{
  
  
try{
  const upws =  await User.findOneAndUpdate({_id:req.params.id},
       {$push:{ wishlist: req.body
    
       
      }
      },);
    
      res.status(200).json(upws);

   
    }catch(err) {
      res.status(500).json(err);
    }}}
  

  


);

//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;