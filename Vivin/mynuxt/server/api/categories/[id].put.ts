import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const categoryId = parseInt(event.context.params?.id || '0'); 

  if (!categoryId) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid category ID' });
  }

  const body = await readBody(event);
  
  return await prisma.category.update({
    where: { id: categoryId },
    data: { name: body.name }
  });
});
