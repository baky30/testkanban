const db = require('../models');
const Users = db.users;

const Projects = db.projects;

const Tickets = db.tickets;

const ProjectsData = [
  {
    name: 'Stephen Hawking',

    description: 'Comte de Buffon',

    // type code here for "relation_many" field
  },

  {
    name: 'Jean Piaget',

    description: 'Leonard Euler',

    // type code here for "relation_many" field
  },

  {
    name: 'Lucretius',

    description: 'William Bayliss',

    // type code here for "relation_many" field
  },
];

const TicketsData = [
  {
    title: 'Lucretius',

    description: 'Marcello Malpighi',

    status: 'ToDo',

    // type code here for "relation_one" field

    created_date: new Date(),

    due_date: new Date(),
  },

  {
    title: 'George Gaylord Simpson',

    description: 'Charles Sherrington',

    status: 'Done',

    // type code here for "relation_one" field

    created_date: new Date(),

    due_date: new Date(),
  },

  {
    title: 'Thomas Hunt Morgan',

    description: 'Karl Landsteiner',

    status: 'ToDo',

    // type code here for "relation_one" field

    created_date: new Date(),

    due_date: new Date(),
  },
];

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateTicketWithAssigned_user() {
  const relatedAssigned_user0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Ticket0 = await Tickets.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Ticket0?.setAssigned_user) {
    await Ticket0.setAssigned_user(relatedAssigned_user0);
  }

  const relatedAssigned_user1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Ticket1 = await Tickets.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Ticket1?.setAssigned_user) {
    await Ticket1.setAssigned_user(relatedAssigned_user1);
  }

  const relatedAssigned_user2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Ticket2 = await Tickets.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Ticket2?.setAssigned_user) {
    await Ticket2.setAssigned_user(relatedAssigned_user2);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Projects.bulkCreate(ProjectsData);

    await Tickets.bulkCreate(TicketsData);

    await Promise.all([
      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateTicketWithAssigned_user(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});

    await queryInterface.bulkDelete('tickets', null, {});
  },
};
