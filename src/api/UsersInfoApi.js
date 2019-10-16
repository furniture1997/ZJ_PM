/* eslint-disable no-unused-vars */
// eslint-disable-next-line standard/object-curly-even-spacing
import {get, post, patch, put } from './http'

export function UserLogin (data, config = {}) {
  return post('/PM_Users/Login', data, config).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

export function SearchUsers (data, config = {}) {
  return post('/PM_Users/GetUsers', data, config).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

export function NewUsers (data, config = {}) {
  return post('/PM_Users/InsertNewUsers', data, config).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

export function DeleteLists (data, config = {}) {
  return post('/PM_Users/DeleteUsers', data, config).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    return Promise.reject(err)
  })
}

export function UpdateUser (data, config = {}) {
  return post('/PM_Users/UpdateUser', data, config).then((res) => {
    return Promise.resolve(res)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
