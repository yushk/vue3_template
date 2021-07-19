export function randomColor() {
  return '#' + (~~(Math.random() * (1 << 24))).toString(16)
}
export function genUid() {
  return new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
}

export const formatNewDate = function(date, isAll = true) {
  if (date === '' || date === undefined) return ''
  if (typeof (date) === 'number' || typeof (date) === 'string') date = new Date(Number(date))
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  var d = date.getDate()
  var h = date.getHours()
  var m1 = date.getMinutes()
  var s = date.getSeconds()
  m = m < 10 ? ('0' + m) : m
  d = d < 10 ? ('0' + d) : d
  h = h < 10 ? ('0' + h) : h
  m1 = m1 < 10 ? ('0' + m1) : m1
  s = s < 10 ? ('0' + s) : s
  if (isAll) {
    return y + '-' + m + '-' + d + ' ' + h + ':' + m1 + ':' + s
  } else {
    return y + '-' + m + '-' + d
  }
}

