import express from 'express';
import {createShortUrl, getShortUrl, deleteShortUrl} from '../controller/short_url.controller.js'

const router = express.Router();

router.post("/", createShortUrl)
export default router;