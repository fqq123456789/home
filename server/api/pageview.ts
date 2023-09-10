let count = 0

export default defineEventHandler(() => ({
  pageview: count++,
}))
