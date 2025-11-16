const productModel = require("../models/productModel.js");

//createing products

const createProducts = async (req,res)=>{
    try{
        // console.log(req.body)
    const product = await productModel.create(req.body);
    res.status(201).json({success:true,product})
    }catch(error){
        console.log(error);
        res.status(500).json({error})
    }
}

//get all products
const getAllProducts = async (req,res)=>{

    try{
        const {searchCategory, sortingbyprice, currentPage} = req.query;
        // console.log(searchCategory, sortingbyprice, currentPage);
//searching by category
        const query = {};
        if(searchCategory){
            query.category = { $regex: searchCategory, $options: 'i' };
        }
//sorting by price
        const sortby = {};
        if(sortingbyprice){
            sortby.price = sortingbyprice === 'desc' ? -1 : 1;
        }
//pagination
        const resultsPerPage = 1;
        const current_page = parseInt(currentPage) || 1;
        const pagesToSkip  = (current_page - 1) * resultsPerPage;

        const allProducts = await productModel.find(query).sort(sortby).skip(pagesToSkip ).limit(resultsPerPage);
        const totalDatacount = await productModel.find(query).sort(sortby).countDocuments();
        const totalPagesToShow = Math.ceil(totalDatacount / resultsPerPage);

        if(current_page > totalPagesToShow || totalDatacount <= 0){
            return res.status(404).json({message:"No more data to show",success: false,totalDatacount,totalPagesToShow,currentPage:current_page,resultsPerPage,allProducts})
        }


        // console.log(allProducts,"allProducts");
        
        res.status(200).json({
            success: true,
            allProducts,
            totalDatacount,
            totalPagesToShow,
            currentPage: current_page,
            resultsPerPage
        });
    }catch(error){
        console.log(error);
        res.status(500).json({error})
    }
}


// update product

const updateProduct = async (req,res)=>{
    try{
        // console.log(req.params.id);
    let ProductToUpdate = await productModel.findById(req.params.id);
    if(!ProductToUpdate){
        return res.status(404).json({success:false,message:"no product found"})
    }
    ProductToUpdate = await productModel.findByIdAndUpdate(req.params.id, req.body,{new:true,runValidators:true});

    res.status(200).json({success:true,ProductToUpdate})
    }catch(error){
        console.log(error);
        return res.status(500).json({error})
    }
}

//delete product

const deleteProduct = async (req,res)=>{
    try{
        // console.log(req.params.id);
    let ProductToDelete = await productModel.findById(req.params.id);
    if(!ProductToDelete){
        return res.status(404).json({success:false,message:"no product found"})
    }
    ProductToDelete = await productModel.findByIdAndDelete(req.params.id);

    res.status(200).json({success:true,message:"Product deleted Successfully"})
    }catch(error){
        console.log(error);
        res.status(500).json({error})
    }
}

const getSingleProducts = async (req,res)=>{
    try{
        // console.log(req.params.id);
    let SingleProduct = await productModel.findById(req.params.id);
    if(!SingleProduct){
        return res.status(404).json({success:false,message:"no product found"})
    }

    res.status(200).json({success:true,SingleProduct})
    }catch(error){
        console.log(error);
        res.status(500).json({error})
    }
}


module.exports = {getAllProducts,createProducts,updateProduct,deleteProduct,getSingleProducts}
