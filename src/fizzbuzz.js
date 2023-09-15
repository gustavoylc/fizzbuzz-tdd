export const fizzBuzz = (number) => {
  console.log('first')
  if (typeof number !== 'number') throw new Error('Parameter must be a number')
  if (Number.isNaN(number)) throw new Error('Parameter must be a number')

  const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'wooff' }
  let output = ''
  Object.entries(multiplies).forEach(([multiplier, word]) => {
    if (number % multiplier === 0) output += word
  })

  return output === '' ? number : output
}
