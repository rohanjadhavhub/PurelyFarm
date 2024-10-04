const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a product name'],
            trim: true, 
            maxlength: [100, 'Product name cannot exceed 100 characters'],
        },
        description: {
            type: String,
            required: [true, 'Please provide a product description'],
            maxlength: [500, 'Product description cannot exceed 500 characters'],
        },
        price: {
            type: Number,
            required: [true, 'Please provide a product price'],
            maxlength: [5, 'Product price cannot exceed 5 digits'],
        },
        category: {
            type: String,
            required: [true, 'Please provide a category for the product'],
            enum: {
                values: ['Fruits', 'Vegetables', 'Grains', 'Dairy', 'Meat', 'Others'],
                message: 'Please select a valid category',
            },
        },
        stock: {
            type: Number,
            required: [true, 'Please provide product stock'],
            min: [0, 'Stock cannot be less than 0'],
            default: 0, 
        },
        sold: {
            type: Number,
            default: 0, 
        },
        images: [
            {
                public_id: { type: String, required: true },
                url: { type: String, required: true },
            }
        ],
        farmer: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            required: true,
        },
        ratings: {
            type: Number,
            default: 0,
        },
        numOfReviews: {
            type: Number,
            default: 0,
        },
        reviews: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    ref: 'User', // Reference to the User model (the consumer reviewing)
                    required: true,
                },
                name: {
                    type: String,
                    required: true,
                },
                rating: {
                    type: Number,
                    required: true,
                },
                comment: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true } 
);

// Export the Product model
export const Product = mongoose.model('Product', productSchema);