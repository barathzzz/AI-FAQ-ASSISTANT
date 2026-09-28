const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://mongodb+srv://barathakrishnanzzz_db_user:oc1yuuJ44mDEuhkD@ai-faq-assistant.blzsosf.mongodb.net/?appName=ai-faq-assistant/');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
