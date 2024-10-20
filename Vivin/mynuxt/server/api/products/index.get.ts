
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });

  return products; 
});

