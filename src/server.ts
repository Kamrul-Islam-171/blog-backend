import app from './app';

// const mongoose = require('mongoose');
import mongoose from 'mongoose';
import config from './app/config';
require('dotenv').config();



async function main() {
  try {
    await mongoose.connect(config.db_url as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
