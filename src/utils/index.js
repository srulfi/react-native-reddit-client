export const getHoursAgo = (timestamp) => {
  let postDate = timestamp * 1000,
    today = new Date().getTime(),
    diff = today - postDate

  return Math.floor(diff / 1000 / 60 / 60)
}
