const Table = require('../models/Table');

exports.createTable = async (req, res) => {
    try {
        const table = new Table({
            name: req.body.name,
            capacity: req.body.capacity,
        })
        await table.save();
        res.status(200).json({message: 'Table created successfully.'})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}