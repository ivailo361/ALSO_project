const userRouter = require('../src/stock/router-stock');
// const origamiRouter = require('../src/origami/router-origami');
// const excelRouter = require('../src/excel/router-excel')

module.exports = (app) => {

    app.use('/api/stock', userRouter);

    // app.use('/api/origami', origamiRouter);

    // app.use('/api/excel', excelRouter)

    
    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again. :thumbsup: </h1>'))
};