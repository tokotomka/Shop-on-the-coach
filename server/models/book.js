import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String
});

const Book = mongoose.model('Book', BookSchema);