/* eslint-disable import/first */
let marked = require('marked')
let hljs = require('highlight.js')

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code, lang) {
    if (lang && hljs.getLanguage(lang)) {    
      return hljs.highlight(lang, code, true).value
    } else {
      return hljs.highlightAuto(code).value
    }
  }
})

module.exports = function(src) {
  const html = marked(src || '', {
    sanitize: true
  })
  console.error(html)
  return (
    `<template>\n` +
      `<div class="marked">${html}</div>\n` +
    `</template>\n`
  )
}