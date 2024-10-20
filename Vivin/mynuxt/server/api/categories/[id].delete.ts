import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const params = event.context.params;

  
  if (!params || !params.id) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid category ID' });
  }

  const categoryId = parseInt(params.id);

  return await prisma.category.delete({
    where: { id: categoryId }
  });
});
