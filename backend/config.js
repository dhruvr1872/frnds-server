module.exports = {
    token: process.env.JWT_SECRET || 'change-me',
    database: process.env.MONGODB_URI || ''
};
