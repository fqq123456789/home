export default defineEventHandler(async () => {
  const dataStorage = useStorage('data')

  const count = await dataStorage.getItem<number>('count')

  await dataStorage.setItem('count', (count ?? 0) + 1)

  return {
    count,
  }
})
