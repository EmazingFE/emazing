const expectedEgg = 'Emazing'
const sessionEgg = sessionStorage.getItem('egg')

export default function checkEgg(egg) {
  return new Promise((resolve, reject) => {
    if (egg === expectedEgg || sessionEgg === expectedEgg) {
      sessionStorage.setItem('egg', expectedEgg)
      resolve()
    } else {
      sessionStorage.removeItem('egg')
      reject(new Error())
    }
  })
}