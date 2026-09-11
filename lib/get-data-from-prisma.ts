import { unstable_cache } from 'next/cache'
import prisma from './prisma'

export const getDataFromPrisma = (locale: string) =>
  unstable_cache(
    async () => {
      return prisma.category.findMany({
        select: {
          id: true,

          translations: {
            where: { locale },
            select: {
              name: true,
            },
          },

          products: {
            select: {
              id: true,
              price: true,
              imageUrl: true,
              weightInGrams: true,
              calories: true,
              proteins: true,
              fats: true,
              carbs: true,

              translations: {
                where: { locale },
                select: {
                  name: true,
                  slug: true,
                },
              },
            },
          },
        },
      })
    },
    ['catalog', locale],
    {
      revalidate: 3600,
    }
  )()
