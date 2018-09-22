const faker = require('faker');
const mongoose = require('mongoose');
const config = require('../config.json');

const UserModel = require('../models/user.model');
const StoryModel = require('../models/story.model');

const logger = require('../utils/logger');

const generateUsers = async (amount) => {
  const users = [];
  for (let i = 0; i < amount; i++) {
    users.push({
      firstName: faker.name.findName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    });
  }

  return await UserModel.create(users);
};

const generateStories = async (amount, users) => {
  const stories = [];
  for (let i = 0; i < amount; i++) {
    const author = users[Math.floor(faker.random.number({ min: 0, max: users.length - 1 }))];

    const sections = [];
    const sectionsAmount = Math.floor(faker.random.number({ min: 1, max: 5 }));
    for (let i = 0; i < sectionsAmount; i++) {
      sections.push({
        items: [
          {
            variant: 1,
            content: faker.lorem.paragraph()
          },
          {
            variant: 1,
            content: faker.lorem.paragraph()
          }
        ]
      });
    }

    stories.push({
      title: faker.lorem.sentence(),
      author: author.id,
      sections,
      isPublished: true
    });
  }

  return await StoryModel.create(stories);
}

module.exports = async () => {
  /**
   * Establish DB Connection
   */
  mongoose.connect(config.storage.fakeConnection, {
    useNewUrlParser: true
  });
  const connection = mongoose.connection;


  return new Promise((resolve, reject) => {
    connection.on('error', function () {
      logger.error('Connection error');
      reject();
    });

    connection.once('open', async function () {
      logger.info('Storage connection established successfully');

      logger.info('Droping database');
      await connection.db.dropDatabase();
      logger.info('Database dropped');

      logger.info('Users generation started');
      const users = await generateUsers(10);
      logger.info('Users generation completed');

      logger.info('Stories generation started');
      await generateStories(20, users);
      logger.info('Stories generation completed');

      return resolve();
    });
  });
};

