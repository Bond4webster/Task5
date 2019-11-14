const User = require('./db');

const add = function (req) {
    const user = new User(req.body);
    user.save(function (err) {
        if (err) return console.error(err);
    });
    return {user};
}

const getAll =  async function(){
    return await User.find(function (err, users) {
        if (err) return console.error(err);
        return users;
    })
}

const get =  function(req){
    return  User.findById(req.params.id);
}

const update =  function(req){
    return User.findByIdAndUpdate(req.params.id, req.body);
}


const del = async function(req){
    return await User.findByIdAndDelete(req.params.id);
}


module.exports = {
    add,
    get,
    update,
    del,
    getAll
}