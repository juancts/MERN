import { Router } from "express"

const router = Router()


//GET ALL POSTS FROM DB

const GET_allposts = async (req, res)=> res.send("RUTA GET")
const POST_allposts = async(req, res)=> res.send("RUTA POST")
const DELETE_allpost = async(req, res)=> res.send("RUTA DELETE")
const UPDATE_post = async(req, res)=> res.send("RUTA UPDATE")
const GET_post = async(req, res)=> res.send("ROUTE GET WITH ID")

export {GET_allposts, POST_allposts, DELETE_allpost, UPDATE_post, GET_post}