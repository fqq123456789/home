export default defineEventHandler(async () => {
  const dataStorage = useStorage('data')

  return {
    count: await dataStorage.getItem<number>('count'),
  }
})
