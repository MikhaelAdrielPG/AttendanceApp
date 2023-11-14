import mongoose from 'mongoose';

const connection: any = {};

async function connectDB() {
  if (connection.isConnected || !process.env.MONGODB_URI) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI,);
  connection.isConnected = db.connections[0].readyState;
}

export default connectDB;