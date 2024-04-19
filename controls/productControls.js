exports.allProducts = (req,res) => {
    res.status(200)
    res.json([
        {
            productName: "iPhone 15",
            productPrice: "$1300",
        },

        {
            productName: "Samsung s20",
            productPrice: "$1200",
        },

        {
            productName: "Nokia A14",
            productPrice: "$1100",
        }
    ])
}

exports.singleProducts = (req, res) => {
    res.status(200)
    res.json([
        {
            productName: "iPhone 15",
            productPrice: "$1300",
        }
    ])
}

exports.createProducts = (req, res) => {
    res.status(200)
    res.json({
        message: "product added successfully"
    })
}

exports.updateProducts = (req, res) => {
    res.status(200)
    res.json({
        message: "product have been updates sucessfully"
    })
}

exports.deleteProducts = (req, res) => {
    res.status(200)
    res.json({
        message: "product have been deleted successfully"
    })
}