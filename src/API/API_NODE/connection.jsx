const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/portal_da_doutora', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);

  }
};

connectDB();