const stockRouter = require('../src/stock/routerStock');
const editRouter = require('../src/edit/routerEdit');
// const origamiRouter = require('../src/origami/router-origami');
// const excelRouter = require('../src/excel/router-excel')

module.exports = (app) => {

    app.use('/api/stock', stockRouter);

    app.use('/api/edit', editRouter);

    // app.use('/api/excel', excelRouter)

    
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};