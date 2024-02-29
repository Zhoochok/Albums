'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usersData = [
      {
        name: "Alex",
        email: "alex@mail.com",
        password: "1234",
      },
      {
        name: "Alexey",
        email: "alexey@mail.com",
        password: "1234",
      },
      {
        name: "Alexandro",
        email: "alexandro@mail.com",
        password: "1234",
      },
    ];
    const users = usersData.map((user) => ({
      ...user,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Users", users);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users");
  }
};
