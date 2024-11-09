const User = require('../models/user')
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');
const db = require('../models/MySQL');

const test = (req, res) => {
    res.json('test is working');
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password,type} = req.body;
        if (!name) {
            return res.json({
                error: 'name is required'
            })
        };
        if (!email) {
            return res.json({
                error: 'Email is Required'
            })
        }
        if (!password || password.length < 6) {
            return res.json({
                error: 'Password is required and should be greater than 6 character long'
            })
        }
        if(!type){
            return res.json({
                error: "Type not declared",
            })
        }
        const query = "SELECT * FROM users.user WHERE email = ?";
        db.query(query, [email], (err, data)=> {
            if(err) throw err;
            if(data.length > 0){
                return res.json({
                    error: "Email is taken already"
                })
            }
        })
        // const exist = await User.findOne({ email });
        // if (exist) {
        //     return res.json({
        //         error: 'Email is taken already'
        //     })
        // };
        const hashedPassword = await hashPassword(password);
        // const user = await User.create({
        //     name,
        //     email,
        //     password: hashedPassword,
        //     type
        // })
        const sql = "INSERT INTO users.user (username, email,password,type) VALUES (?,?,?,?)";
        db.query(sql,[name, email,hashedPassword, type] , function (err, results,fields) {
            if (err) throw err;
            console.log("1 record inserted");
        });
        return res.json("Inserted");
    } catch (error) {
        console.log(error);
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const query = "SELECT * FROM users.user WHERE email = ?";
        db.query(query, [email], async (err, data) => {
            if(err){
                console.log(err);
                return res.json({
                    error : "User not found"
                })
            }
            const match = await comparePassword(password, data[0].password);
            if (match) {
                jwt.sign({ email: data.email, id: data.id, name: data.name, type: data.type }, process.env.JWT_SECRET, {}, (err, token) => {
                    if (err) throw err;
                    res.cookie('token', token).json("assigned");
                })
            }
        })
        // if (!match) {
        //     res.json({
        //         error: "Incorrect Password",
        //     })
        // }})
        // const user = await User.findOne({ email });
        // if (!user) {
        //     return res.json({
        //         error: "User not Found",
        //     })
        // }
        // const match = await comparePassword(password, user.password);
        // if (match) {
        //     jwt.sign({ email: user.email, id: user._id, name: user.name, type: user.type }, process.env.JWT_SECRET, {}, (err, token) => {
        //         if (err) throw err;
        //         res.cookie('token', token).json(user);
        //     })
        // }
        // if (!match) {
        //     res.json({
        //         error: "Incorrect Password",
        //     })
        // }
    } catch (error) {
        console.log(error);
    }
}

const getProfile = (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if (err) throw err;
            res.json(user);
        })
    }
    else {
        res.json(null);
    }
}

const getContacts = (req, res) => {
    const query = 'SELECT * FROM users.userdata';
    db.query(query, (err, data) => {
        if (err) {
            return res.json(err);
        }
        return res.json(data);
    })
}

const getUsers = async (req,res) => {
    try {
        const query = "SELECT * FROM users.user";
        db.query(query, (err,data) => {
            if(err) throw err;
            return res.json(data);
        })
        // const data = await User.find({});
        // res.json(data);
    } catch (error) {
        console.log(error);
    }
}

const getAgents = async (req,res) => {
    try {
        const query = "SELECT * FROM users.userdata";
        db.query(query, (err,data) => {
            if(err) throw err;
            return res.json(data);
        })
        // const data = await User.find({type: "agent"});
        // res.json(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile,
    getContacts,
    getUsers,
    getAgents,
}