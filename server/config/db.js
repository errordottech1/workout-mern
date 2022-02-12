import mongoose from "mongoose";

export const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONN_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `connected to database => ${conn.connection.name}: ${conn.connection.host}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
