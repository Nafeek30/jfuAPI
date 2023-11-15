const { db } = require("./admin");

exports.info = async (req, res) => {
    const infoRef = db.collection('info');
    try{
        infoRef.add({
            "type": "Other",
            "timestamp": "August 16",
        }).then(() => {
            res.send('data saved');
            console.log('saved data');
        });
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};