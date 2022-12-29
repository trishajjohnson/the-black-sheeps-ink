import products from "../../../data/productDetails2";


export default function handler(req, res) {
    res.status(200).json(products);
}