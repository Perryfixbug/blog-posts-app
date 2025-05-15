const { BlogPosts } = require('../mockPostData.js');

module.exports.getAllPosts = async (req, res) => {
    try {
        const posts = BlogPosts;
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
}

module.exports.getPostById = async (req, res) => {
    try{
        const { slug } = req.params;
        res.status(200).json(BlogPosts.find((post) => post.slug === slug));
    }catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
}

module.exports.getTop = async(req, res)=>{
    try{
        const top = req.query.top;
        console.log(top);
        res.status(200).json(BlogPosts.slice(0, top));
    }catch(e){
        console(e)
    }
}