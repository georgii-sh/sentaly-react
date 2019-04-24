const fs = require('fs')
const path = require('path')
const glob = require('glob')

class InsertExtractedMainStylePlugin {
  apply(compiler) {
    compiler.hooks.done.tapAsync('InsertExtractedMainStylePlugin', (compilation, callback) => {
      const files = glob.sync('public/*.styles.css', {})
      if (!files.length) {
        throw new Error('Bundle dependencies are missing!')
      }

      files.sort((fileA, fileB) => {
        const fileAStat = fs.statSync(fileA)
        const fileBStat = fs.statSync(fileB)
        return fileBStat.mtimeMs - fileAStat.mtimeMs
      })

      const style = fs.readFileSync(files[0]).toString()

      const content = fs.readFileSync(path.join(__dirname, '../../public/index.html')).toString()
      const newContent = content.replace('<!--STYLE-->', `<style>\n${style}\n</style>`)
      fs.writeFileSync(path.join(__dirname, '../../public/index.html'), newContent)
      callback()
    })
  }
}

module.exports = InsertExtractedMainStylePlugin
