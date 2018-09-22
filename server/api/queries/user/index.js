const currentUser = require('./rootCurrentUser');
const myStories = require('./myStories');
const publishedStories = require('./publishedStories');

module.exports = {
  RootQuery: {
    currentUser
  },
  Me: {
    myStories
  },
  Author: {
    publishedStories
  }
};
