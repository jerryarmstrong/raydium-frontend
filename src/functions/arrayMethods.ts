import listToMap from './format/listToMap'
import { isArray, isObject, isSet } from './judgers/dateType'
import { mergeObjectsWithConfigs } from './objectMethods'

export function hasSameItems<T>(arr1: T[], arr2: any[]): arr2 is T[] {
  if (arr1.length !== arr2.length) return false
  if (arr1.length === 0) return true
  return arr1.every((item) => arr2.includes(item))
}

export function addItem<T, U>(arr: T[], item: U): (T | U)[]
export function addItem<T, U>(set: Set<T>, item: U): Set<T | U>
export function addItem(arr, item) {
  if (isArray(arr)) {
    return [...arr, item]
  }
  // Set
  if (isSet(arr)) {
    const newSet = new Set(arr)
    newSet.add(item)
    return newSet
  }
}

export function removeItem<T>(arr: T[], item: T): T[]
export function removeItem<T>(set: Set<T>, item: T): Set<T>
export function removeItem(arr, item) {
  if (isArray(arr)) {
    return arr.filter((i) => i !== item)
  }
  // Set
  if (isSet(arr)) {
    const newSet = new Set(arr)
    newSet.delete(item)
    return newSet
  }
}

export function unifyItem<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}

export function shakeUndifindedItem<T>(arr: T[]): NonNullable<T>[] {
  return arr.filter((item) => item != null) as NonNullable<T>[]
}
export function shakeFalsyItem<T>(arr: readonly T[]): NonNullable<T>[] {
  return arr.filter(Boolean) as NonNullable<T>[]
}

// todo use js object to speed up the fn
export function unifyByKey<T>(objList: T[], getKey: (item: T) => string): T[] {
  const objMap = listToMap(objList, getKey)
  return shakeUndifindedItem(Object.values(objMap))
}

/**
 * add old data as default
 */
export function mergeWithOld<T extends any[]>(
  newData: T,
  oldData: T,
  options?: {
    uniqueKey?: (item: T[number]) => string
    sameKeyMergeRule?: (newItem: T[number], oldItem: T[number]) => T[number]
  }
): T
export function mergeWithOld<T extends Set<any>>(newData: T, oldData: T): T
export function mergeWithOld<T extends Record<keyof any, any>>(
  newData: T,
  oldData: Partial<T>,
  options?: {
    sameKeyMergeRule?: (newItem: T[number], oldItem: T[number]) => T[number]
  }
): T
export function mergeWithOld<T>(
  newData,
  oldData,
  options?: {
    uniqueKey?: (item: any) => string
    sameKeyMergeRule?: (newItem: any, oldItem: any) => any
  }
) {
  if (isSet(newData) && isSet(oldData)) {
    return new Set([...oldData, ...newData])
  }
  if (isArray(newData) && isArray(oldData)) {
    return options?.uniqueKey
      ? options.sameKeyMergeRule
        ? Object.values(
            mergeObjectsWithConfigs(
              [listToMap(oldData, options.uniqueKey), listToMap(newData, options.uniqueKey)],
              ({ valueA, valueB }) => (valueA && valueB ? options.sameKeyMergeRule!(valueA, valueB) : valueA ?? valueB)
            )
          )
        : unifyByKey([...oldData, ...newData], options.uniqueKey)
      : unifyItem([...oldData, ...newData])
  }
  if (isObject(newData) && isObject(oldData)) {
    return options?.sameKeyMergeRule
      ? mergeObjectsWithConfigs([oldData, newData], ({ valueA, valueB }) =>
          valueA && valueB ? options.sameKeyMergeRule!(valueA, valueB) : valueA ?? valueB
        )
      : { ...oldData, ...newData }
  }
}
