const User = require('../models/User');


async function add(ctx) {
    const newUser = new User(ctx.request.body.user);
    ctx.body = await newUser.save();
}

async function getAll(ctx) {
    ctx.body = await User.find({});
}

module.exports = {

    add,
    getAll

};
