import products from "../../../data/productDetails2";


export default function handler(req, res) {
    const productId = parseInt(req.query.productId);
    const product = products.find(pr => pr.id === productId);
    console.log("product", product);
    
    res.status(200).json(product);
}