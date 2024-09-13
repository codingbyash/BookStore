import Book from "../model/book.model.js"; //Book naam se model banaya hai hmne schema ko convert karke usko yaha use kar rhe hain

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book); //jab tak response na aa jaye tabtak aage ka operation na ho
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};