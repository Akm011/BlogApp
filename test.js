const mongoose = require('mongoose')
const Post = require('./database/models/Post')

const mongoURI = "mongodb://127.0.0.1:27017/blog";
mongoose.connect(mongoURI)

// Write to DB
// Post.create({
//     title: '2nd my firs blog',
//     description: '2nd defsfs',
//     content: '2nd testt 1'
// })

//read from db
// Post.find({})
//     .then(result => {
//         if (result) {
//           console.log('Document found:', result);
//         } else {
//           console.log('Document not found');
//         }
//     })

//to find by id
// Post.findById("6557a9f1a6ce4ddf77e1fb2a")
//     .then(result => {
//         if (result) {
//           console.log('Document found:', result);
//         } else {
//           console.log('Document not found');
//         }
//     })
//     .catch(error => {
//         console.error('Error finding document by _id:', error);
//     });

//update by id
Post.findByIdAndUpdate("6557a9f1a6ce4ddf77e1fb2a", { title: 'updated the title see' }, { new: true })
    .then(updatedPost => {
      if (updatedPost) {
        console.log('Document updated:', updatedPost);
      } else {
        console.log('Document not found');
      }
    })
    .catch(error => {
      console.error('Error updating document by _id:', error);
    });