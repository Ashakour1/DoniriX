import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$disconnect();

export default prisma;
