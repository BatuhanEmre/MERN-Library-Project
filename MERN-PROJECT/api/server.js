const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const BookStore = require("./models/BookModel");

const app = express();

app.use(bodyParser.json());
app.use(cors());

//mongoose connection

mongoose.connect(
  "mongodb+srv://@cluster0.1mvlvgx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to Database");
  }
);

app.get("/books", (req, res) => {
  BookStore.find().then((books) => res.json(books));
});

app.post("/newbook", async (req, res) => {
  try {
    const newBook = new BookStore({
      //Bookstore modelini kullanıyoruz

      bookName: req.body.bookName, //request.body body kısmı database'e eklemek istedğim alan
      author: req.body.author,
      quantity: req.body.quantity,
      department: req.body.department,
      comments: req.body.comments,
    });

    const book = await newBook.save(); // yeni kitap nesnesi database eklendi await asenktron olduğu için yukarıdaki işlemin olmasını bekliyoruz
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  BookStore.findByIdAndDelete({ _id: id }, (err) => {
    if (!err) {
      console.log("book deleted");
    } else {
      console.log(err);
    }
  });
});
app.put("/lend/:id", async (req, res) => {
  try {
    await BookStore.findByIdAndUpdate(req.params.id, {
      $inc: { quantity: -1 },
    });
  } catch (error) {
    console.log(error);
  }
});
app.put("/back/:id", async (req, res) => {
  try {
    await BookStore.findByIdAndUpdate(req.params.id, { $inc: { quantity: 1 } });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000, () => {
  console.log("Server Çalıştı");
});
