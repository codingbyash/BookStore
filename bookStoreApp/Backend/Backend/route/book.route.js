import express from "express";
import { getBook } from "../controller/book.controller.js"; //getbook func controller se liya

const router = express.Router();

router.get("/", getBook); // jaise hi request fetch kare to hmara getBook function run hona chhiye

export default router;