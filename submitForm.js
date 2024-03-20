// Import necessary libraries
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define a schema for your data
const formDataSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a Mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Your MongoDB connection string
const MONGODB_URI = 'your_mongodb_connection_string';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define the handler for the Netlify function
exports.handler = async (event, context) => {
  try {
    // Parse form data from the event object
    const { name, email, message } = JSON.parse(event.body);

    // Create a new FormData document
    const formData = new FormData({ name, email, message });

    // Save the form data to the database
    await formData.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted and data saved to the database' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form or save data to the database' }),
    };
  }
};
