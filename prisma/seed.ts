import prisma from '@/lib/prisma'
import { categories, product } from './data'

async function main() {
  // Сначала удаляем связанные данные
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.productTranslation.deleteMany()
  await prisma.product.deleteMany()
  await prisma.categoryTranslation.deleteMany()
  await prisma.category.deleteMany()
  await prisma.account.deleteMany()
  await prisma.verification.deleteMany()
  await prisma.session.deleteMany()
  await prisma.user.deleteMany()

  // Создаём категории
  for (const category of categories) {
    await prisma.category.create({
      data: {
        id: category.id,
        translations: {
          create: category.translations,
        },
      },
    })
  }

  // Создаём продукты
  for (const item of product) {
    await prisma.product.create({
      data: {
        categoryId: item.categoryId,
        imageUrl: item.imageUrl,

        weightInGrams: item.weightInGrams,
        calories: item.calories,
        proteins: item.proteins,
        fats: item.fats,
        carbs: item.carbs,

        price: item.price,

        translations: {
          create: item.translations,
        },
      },
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)

    await prisma.$disconnect()

    process.exit(1)
  })
