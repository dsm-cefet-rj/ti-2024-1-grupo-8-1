const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://labeats2238:lucas1213@cluster0.zid7k.mongodb.net/portal_da_doutora';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;
