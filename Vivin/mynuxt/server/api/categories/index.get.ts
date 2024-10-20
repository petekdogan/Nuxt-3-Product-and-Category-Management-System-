import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true
      }
    });
    return categories;
  } catch (error) {
    console.error("API Hatası:", error);
    throw new Error("Kategoriler alınamadı.");
  }
});

