import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/ecomDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));