import { describe, it, expect } from 'vitest'
import { fizzBuzz } from '../src/fizzbuzz'

/**
Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.
 */

describe('fizzbuzz', () => {
  it('should be a function', () => {
    expect(typeof fizzBuzz).toBe('function')
  })

  it('should throw if not number is provided as parameter', () => {
    expect(() => {
      fizzBuzz()
    }).toThrow()
  })

  it('should throw a specific error message if not number is provided as parameter', () => {
    expect(() => {
      fizzBuzz()
    }).toThrow(/Parameter must be a number/)
  })

  it('should throw a specific error message not a number is provided', () => {
    expect(() => {
      fizzBuzz(NaN)
    }).toThrow(/must/)
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzBuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzBuzz(2)).toBe(2)
  })

  it('should return "fizz" if number provided is 3', () => {
    expect(fizzBuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzBuzz(6)).toBe('fizz')
    expect(fizzBuzz(9)).toBe('fizz')
    expect(fizzBuzz(12)).toBe('fizz')
  })

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzBuzz(25)).toBe('buzz')
    expect(fizzBuzz(10)).toBe('buzz')
    expect(fizzBuzz(20)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz')
  })

  it('should return "woff" if number provided is 7', () => {
    expect(fizzBuzz(7)).toBe('woff')
  })

  it('should return "fizzwoff" if number provided is 21', () => {
    expect(fizzBuzz(21)).toBe('fizzwoff')
  })
})
