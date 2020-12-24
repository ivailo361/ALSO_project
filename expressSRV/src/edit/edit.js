const fs = require('fs');
const path = require('path');
const excelToJson = require('convert-excel-to-json');
const MongoDB = require("../../models/mongo");
const db = new MongoDB();

module.exports = {
    get: async (req, res, next) => {
        try {
            let result = await db.getData('components');
            res.status(200).json(result)
        }
        catch (e) {
            res.status(400).json('Unsuccessful loading of component\'s list please try again later ')
            next(e)
        }
    },

    post: async (req, res, next) => {
        try {
            console.log(req.file)
           
            let filePath = path.normalize(
                path.join(__dirname, `../../public/${req.file.filename}`)
            )
            console.log(filePath)
            const result = excelToJson({
                sourceFile: filePath,
                columnToKey: {
                    A: 'manufacturer',
                    B: 'sapNum',
                    C: 'manNum',
                    D: 'description',
                    E: 'price',
                    F: 'qty',
                    G: 'type',
                    H: 'compatibleSrv'
                },
                header: {
                    rows: 1
                }
            });

            console.log(result.Sheet1)
            try {
                let updateResult = await db.insertDbFile('components', result)
    
                        // fs.readFile(req.files.file.path, function(err, data){
                        //     console.log(data)
                        //     // Do something with the data (which holds the file information)
                        //   });

                res.status(200).json(updateResult)
            } catch (e) {
                res.status(404).json('Unsuccessful import please try again later')
                next(e)
            }

        }
        catch (e) {
            res.status(500).json('Don\'t forget to attach a file!')
            next(e)
        }
    },

    put: async (req, res, next) => {
        try {
            // console.log(req.body)
            const input = req.body
            const id = input._id 
            let data = {}
            for(key in input) {
                if (key !== '_id') {
                    data[key] = input[key]
                }
            }
            
            let result = await db.updateComponentData(id, data)
            // res.status(200).json(`modified component: ${result.modifiedCount}\n`)
            res.status(200).json(result.modifiedCount)
        }
        catch(e) {
            res.status(404).json('Something went wrong please try again later')
            next(e)
        }
    }

}