const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategories=await Category.findAll({
      include:[Product]
    })
    res.status(200).json(allCategories)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.get('/:id',async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const oneCategory=await Category.findOne({
      where:{
        id:req.params.id
      },
      include:[Product]
    })
    res.status(200).json(oneCategory)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.post('/',async (req, res) => {
  // create a new category
  try {
    
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.put('/:id',async (req, res) => {
  // update a category by its `id` value
  try {
    
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.delete('/:id',async (req, res) => {
  // delete a category by its `id` value
  try {
    
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

module.exports = router;
