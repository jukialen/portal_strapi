module.exports = {
    settings: {
        cors: {
            enabled: true,
            origin: process.env.URLS.split(',')
        },
    },
};