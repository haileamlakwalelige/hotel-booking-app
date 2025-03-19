import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello this is router end point!");
})

router.get('/register', (req, res) => {
    res.send("Hello from register");
})


export default router;