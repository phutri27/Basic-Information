const fs = require('node:fs/promises');
const express = require("express");
const { error } = require('node:console');
const app = express()
require('dotenv').config({override: true})

app.get("/", async (req, res) => {
    try{
        const data = await fs.readFile('./templates/index.html', { encoding: 'utf8' })
        res.send(data)
    } catch(err){
        throw err
    }
})


app.get("/about", async (req, res) => {
    try{
        const data = await fs.readFile('./templates/about.html', { encoding: 'utf8' })
        res.send(data)
    } catch(err){
        throw err
    }

})

app.get("/contact-me", async (req, res) => {
    try{
        const data = await fs.readFile('./templates/contact-me.html', { encoding: 'utf8' })
        res.send(data)
    } catch(err){
        throw err
    }

})

app.use(async (req, res, next) => {
    try{
        const data = await fs.readFile('./templates/404.html', { encoding: 'utf8' })
        res.status(404).send(data)
    } catch(err){
        throw err
    }
})

app.listen(process.env.PORT, (error) => {
    if (error)
        throw error
})

