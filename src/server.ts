import express from 'express'
import dotenv from 'dotenv'
import { testDBConnection } from './config/database'
import applicationRoutes from './routes/applicationRoutes'
import authRoutes from './routes/authRoutes'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

const startServer = async () => {

    //Test database connection first
await testDBConnection();

    //Body parsing middleware
app.use(express.json());
app.use('/api/auth', authRoutes )

//Application routes
app.use('/api', applicationRoutes);



//Start listening
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
};

startServer();