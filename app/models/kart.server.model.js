'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Kart Schema
 */
var KartSchema = new Schema({
	// Kart model fields   
	// ...
    created: {         
        // types are defined e.g. String, Date, Number (http://mongoosejs.com/docs/guide.html)
        type: Date,   
        // default values can be set
        default: Date.now 
    },
    
});

mongoose.model('Kart', KartSchema);