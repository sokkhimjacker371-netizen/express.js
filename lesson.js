const express = require("express");
const app = express();
const PORT = 4000;
const product = require("./model/product");
app.use(express.json());

// get products using method get
app.get("/products", (req, res) => {
  res.status(200).send(product.list_);
});

// add product using method post
app.post("/create-product", (req, res) => {
  res.status(201).json({
    status: "add successfully",
  });
});

//update product using method put
app.put("/update-product", (req, res) => {
  res.status(201).json({
    status: "update successfully",
  });
});

//delete product using method delete
app.delete("/delete-product",(req, res)=>{
  res.status(201).json({
    status: "delete successfully"
  })
})


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
