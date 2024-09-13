import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
}); 
const Book = mongoose.model("Book", bookSchema); //jo schema liya hai na usko model mei convert kar rhe hain

export default Book;