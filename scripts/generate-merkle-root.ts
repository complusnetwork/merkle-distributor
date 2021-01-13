import { program } from 'commander'
import fs from 'fs'
import { parseBalanceMap } from '../src/parse-balance-map'

program
  .version('0.0.0')
  .requiredOption(
    '-i, --input <path>',
    'input JSON file location containing a map of account addresses to string balances'
  )

program.parse(process.argv)

const json = JSON.parse(fs.readFileSync(program.input, { encoding: 'utf8' }))

if (typeof json !== 'object') throw new Error('Invalid JSON')

const merkleroot= JSON.stringify(parseBalanceMap(json))

fs.writeFile("scripts/result.json", merkleroot, function(err) {
    if(err) {
        return console.log(err)
    }
    console.log("The file was saved in scripts/result.json")
})
