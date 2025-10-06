    // server/routes/contact.js
    const express = require("express");
    const router = express.Router();
    const Contact = require("../models/Contact");

    // POST /api/contact
    router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
        return res.status(400).json({ msg: "All fields are required" });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();

        return res.status(201).json({ msg: "Message saved successfully" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server error" });
    }
    });

    module.exports = router;
