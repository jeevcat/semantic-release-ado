const fs = require('fs')

module.exports = async (pluginConfig, { nextRelease: { version, notes }, logger }) => {
  const varName = pluginConfig.varName || 'nextRelease'
  logger.log(`Setting version ${version} to the env var ${varName}`)

  console.log(`##vso[task.setvariable variable=${varName}]${version}`)

  const notesFilename = pluginConfig.notesFilename || 'nextNotes.txt'
  logger.log(`Writing to file ${notesFilename} with release notes:\n${notes}`)

  fs.writeFileSync(notesFilename, notes)
}
