const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const todo = [
  {
    id: 1,
    name: "Teeth brushing",
    title: "Brush your teeth",
    complete: false
  },
  {
    id: 2,
    name: "Get dressed",
    title: "Get dressed",
    complete: true
  }
]

async function main() {
  console.log(`Start seeding ...`);
  for (const m of todo) {
    const todoItem = await prisma.menu.create({
      data: m,
    });
    console.log(`Created menu item with id: ${menuItem.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
