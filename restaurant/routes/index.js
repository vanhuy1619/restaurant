const siteRouter = require('./site')
const staffRouter = require('./staff')
const orderRouter = require('./order')
const adminRouter = require('./admin')
const paymentRouter = require('./payment')
const chefRouter = require('./chef')
const errorRouter = require('./error')

module.exports = function route(app) {
    app.use("/", siteRouter)
    app.use("/user", staffRouter)
    app.use("/order", orderRouter)
    app.use("/admin", adminRouter)
    app.use("/payment", paymentRouter)
    app.use("/chef", chefRouter)
    app.use(errorRouter)
}