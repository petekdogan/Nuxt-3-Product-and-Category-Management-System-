import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event); 
  
  const newProduct = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
      description: body.description,
      categoryId: body.categoryId,
    }
  });

  return newProduct;
});
