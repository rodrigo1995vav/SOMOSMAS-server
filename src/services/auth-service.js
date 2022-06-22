const bcrypt = require('bcrypt');
const express = require('express');
const { User, sequelize } = require('../models')
const jwt = require('jsonwebtoken')
const authRepository = require('../repositories/auth-repository')

const login = async (body) => {
    const user = await authRepository.getByEmail(body.email)
    if (bcrypt.compareSync(body.password, user.password)) {
        return user
    } else {
        throw "Incorrect password"
    }

}



module.exports = {
    login
}