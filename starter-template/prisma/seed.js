const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
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
