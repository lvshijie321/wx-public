module.exports = (route, app) => {
    Object.keys(route).forEach(item => app.use(item, route[item]))
}