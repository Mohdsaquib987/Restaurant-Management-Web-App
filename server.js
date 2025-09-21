const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/Contact'); // Import the Contact model

const app = express();
app.use(cors());
app.use(express.json()); // To parse incoming JSON data

// MongoDB connection
mongoose.connect(
  'mongodb+srv://mohdsaquib98705:x4VLvBct2z4Lk4Rb@cluster0.ptocnm1.mongodb.net/contactDB?retryWrites=true&w=majority',
  { useNewUrlParser: true }
)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// POST route to save contact form data
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, phone, address, message } = req.body;

    const newContact = new Contact({
      fullName,
      email,
      phone,
      address,
      message
    });

    await newContact.save(); // Save to MongoDB
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact form data:', error);
    res.status(500).json({ message: 'Error sending message. Please try again.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
