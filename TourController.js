const Tour =require("../model/Tour");


//getBooks -test postman
const getAllTour =async (req,res,next)=>{
    let tours;
    try{
        tours= await Tour.find();
    }catch(err){
        console.log(err);
    }
    if(!tours){
        return res.status(404).json({message:"No Book found"})
    }
    return res.status(200).json(tours)
}

//get book id-test postman
const getById =async(req,res,next)=>{
    const vid =req.params.id;  
    let tour;
    try{
        tour =await Tour.findById(vid);
    }catch(err){
        console.log(err);
    }
    if(!tour){
        return res.status(404).json({message:"No Book found"})
    }
    return res.status(200).json(tour)
}


//add Book-test postman
const addTour =async (req,res,next)=>{
    const {name,desc,price,room,img,place}=req.body;
    let tour;
    try{
        tour = new Tour({
            name,
            desc,
            price,
            place,
            img
        });
        await tour.save();
    }catch (err){
        console.log(err);
    }
    if(!tour){
        return res.status(500).json({message:"Unnable to Add"})
    }
    return res.status(201).json({tour})
}


//update book product
const updateTour = async(req,res,next)=>{
    const id =req.params.id;
    const {name,desc,price,place,img}=req.body;
    let tour;
    try{
        tour =await Tour.findByIdAndUpdate(id,{
                name,desc,price,img,place
        });
        tour =await tour.save();
    }catch(err){
            console.log(err);
    }
    if(!tour){
        return res.status(404).json({message:"Unnable to Update "})
    }
    return res.status(200).json({tour})

}

//delete book product
const deleteTour = async (req,res,next)=>{
    const id =req.params.id;
    let tour;
    try{
        tour = await Tour.findByIdAndRemove(id)
    }catch(err){
            console.log(err);
    }
    if(!tour){
        return res.status(404).json({message:"Unnable to delete "})
    }
    return res.status(200).json({tour})
}

//exports all function

exports.getAllTour=getAllTour;
 exports.addTour =addTour;
 exports.getById=getById;
 exports.updateTour=updateTour;
 exports.deleteTour=deleteTour;