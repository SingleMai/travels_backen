export const getDateTime = (date) => {
  const origDate = new Date(date)
  const resultDate = `${origDate.getFullYear()}-${origDate.getMonth() + 1}-${origDate.getDate()}`
  return `${resultDate} ${getTime(date)}`
}

export const getTime = (date) => {
  const origDate = new Date(date)
  return `${(origDate.getHours() < 10 ? '0' : '') + origDate.getHours()}:${(origDate.getMinutes() < 10 ? '0' : '') + origDate.getMinutes()}:${(origDate.getSeconds() < 10 ? '0' : '') + origDate.getSeconds()}`
}

<<<<<<< HEAD
export const getDate = (date) => {
  const origDate = new Date(date)
  const resultDate = `${origDate.getFullYear()}-${origDate.getMonth() + 1}-${origDate.getDate()}`
  return resultDate
=======
// 兼容火狐浏览器下,new Date出现NAN的情况
export const fireFoxNewDate = (timestamp) => {
  var da = timestamp.replace('年', '-').replace('月', '-').replace('日', '').replace(/-/g, '/').split(/\/|:| /)
  const time = new Date(Date.UTC(da[0], da[1] - 1, da[2], da[3], da[4], da[5]))
  return time
>>>>>>> 85dd75f138c9e9142230004ec3f8dee5e1ba363c
}
