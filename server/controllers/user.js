const User = require('../models/User');

async function add(ctx) {
    ctx.body = await User.create(ctx.request.body);
}

async function getAll(ctx) {
    ctx.body = await User.find({});
}

module.exports = {
    add,
    getAll
};
