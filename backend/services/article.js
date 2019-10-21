const Article = require('../models/article');

module.exports.getAll = async () => {
    return await Article.find();
};

module.exports.getById = async (_id) => {
    return await Article.findOne({_id});
};

module.exports.getByUserID = async (userID) => {
    return await Article.find({
        authorID: userID
    });
};

module.exports.create = async (article) => {
    const newArticle = {...article};
    const createdArticle = await Article.create(newArticle);
    return createdArticle;
};

module.exports.delete = async (articleID) => {
    return await Article.findByIdAndDelete(articleID);
}; 
