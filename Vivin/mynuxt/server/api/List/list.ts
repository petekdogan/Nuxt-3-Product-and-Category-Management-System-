import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
 
  const giyim = await prisma.category.create({
    data: { name: 'Giyim' },
  });

  const ayakkabı = await prisma.category.create({
    data: { name: 'Ayakkabı' },
  });

  const çanta = await prisma.category.create({
    data: { name: 'Çanta' },
  });

  const aksesuar = await prisma.category.create({
    data: { name: 'Aksesuar' },
  });


 
  await prisma.product.createMany({
    data: [
      {
        name: 'Suni deri şişme mont',
        price: 1200.00,
        description: 'Dik yaka, uzun kollu, suni deri ceket.',
        categoryId: giyim.id,
      },
      {
        name: 'Basic Crop Sweatshirt',
        price: 550.00,
        description: 'Pamuklu, bisiklet yaka, uzun kollu fit crop sweatshirt.',
        categoryId: giyim.id,
      },
      {
        name: 'Mom Fit Jean',
        price: 990.00,
        description: 'Pamuklu jean.',
        categoryId: giyim.id,
      },
      {
        name: 'Snoopy Peanuts Pijama',
        price: 850.00,
        description: 'Önü Snoopy Peanuts desenli, uzun kollu, bisiklet yaka t-shirt.',
        categoryId: giyim.id,
      },
      {
        name: 'Tokalı Babet',
        price: 1200.00,
        description: 'Kadınlar için üst kısmı tokalı bantlı babet.',
        categoryId: ayakkabı.id,
      },
      {
        name: 'Yumuşak Bağcıklı Spor Ayakkabı',
        price: 550.00,
        description: 'Farklı renkleri mevcuttur, uyumlu renk bağcıklı.',
        categoryId: ayakkabı.id,
      },
      {
        name: 'Topuklu Babet',
        price: 1190.00,
        description: 'Suni rugan yüzeyli, tokalı , çift bantlı topuklu ayakkabı.',
        categoryId: ayakkabı.id,
      },
      {
        name: 'Kovboy Çizmesi',
        price: 1790.00,
        description: 'Üst kısmı parçalı, yanları çekme halkalı sivri burunlu çizme.',
        categoryId: ayakkabı.id,
      },
      {
        name: 'Tote Çanta',
        price: 1200.00,
        description: 'Naylon kumaşlı, kısa tutma saplı ve uzun askılı tote çanta.',
        categoryId: çanta.id,
      },
      {
        name: 'Mini Boston Çanta',
        price: 550.00,
        description: 'Ana bölmesi fermuarlı kol çantası.',
        categoryId: çanta.id,
      },
      {
        name: 'Paraşüt bucket çanta',
        price: 650.00,
        description: 'Mıknatıslı.',
        categoryId: çanta.id,
      },
      {
        name: 'Kapaklı ve Dokulu Çanta',
        price: 690.00,
        description: 'Dokulu, mıknatıslı klipsli, çapraz askılı çanta.',
        categoryId: çanta.id,
      },
      {
        name: 'Zincir Kolye',
        price: 360.00,
        description: 'Altın rengi metalik yüzeyli, boncuklu zincir kolye.',
        categoryId: aksesuar.id,
      },
      {
        name: 'Desenli Şapka',
        price: 490.00,
        description: '%100 pamuklu, leopar desenli şapka.',
        categoryId: aksesuar.id,
      },
      {
        name: 'Soluk Şapka',
        price: 330.00,
        description: 'Önü Hawaii Tales işlemeli şapka.',
        categoryId: aksesuar.id,
      },
      {
        name: 'Kalpli Küpe',
        price: 220.00,
        description: 'Kalp şeklinde büyük küpe.',
        categoryId: aksesuar.id,
      },

    ],
  });

  console.log('Kategoriler ve ürünler başarıyla eklendi.');
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
