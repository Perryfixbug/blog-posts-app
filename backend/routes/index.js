const postRoutes = require('./post.route');

module.exports = (app) => {
    app.use('/api/posts', postRoutes);
}