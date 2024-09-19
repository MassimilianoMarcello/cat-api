import express from 'express';
import controller from '../controllers/cat.js';
const router = express.Router();




// routes


router.get('/', controller.getCats);
router.get('/cat/:id', controller.getCatById);
router.post('/', controller.createCat);
router.put('/:id', controller.updateCat);
router.delete('/:id', controller.deleteCat);

export default router;