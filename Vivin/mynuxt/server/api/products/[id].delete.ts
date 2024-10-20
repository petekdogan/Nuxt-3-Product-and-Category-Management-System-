import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  
  const params = event.context.params as Record<string, string | undefined>;

  
  const id = params.id;
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Product ID is required' });
  }

  const productId = parseInt(id);
  if (isNaN(productId)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid Product ID' });
  }

 
  const deletedProduct = await prisma.product.delete({
    where: { id: productId }
  });

  return deletedProduct; 
});
