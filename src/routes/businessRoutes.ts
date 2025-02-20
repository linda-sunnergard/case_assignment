import express from "express";
const router = express.Router();

import {
    getBusinesses,
    getBusinessByID
} from '../controllers/businessController';

router.get('/search', getBusinesses);

router.get('/:id', getBusinessByID);

export default router;