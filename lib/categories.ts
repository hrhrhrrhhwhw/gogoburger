import { unstable_cache } from 'next/cache'
import prisma from './prisma'

export const getGategories = (locale: string) =>
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
        },
      })
    },
    ['catalog', locale],
    {
      revalidate: 3600,
    }
  )()
