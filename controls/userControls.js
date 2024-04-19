exports.allUsers = (req,res) => {
    res.status(200)
    res.json([
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
        },

        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
        },

        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
        }
    ])
}

exports.singleUser = (req, res) => {
    res.status(200)
    res.json([
        {
            id: 1,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
        }
    ])
}

exports.createUsers = (req, res) => {
    res.status(200)
    res.json({
        message: "user added successfully"
    })
}

exports.updateUsers = (req, res) => {
    res.status(200)
    res.json({
        message: "user have been updates sucessfully"
    })
}

exports.deleteUsers = (req, res) => {
    res.status(200)
    res.json({
        message: "user have been deleted successfully"
    })
}