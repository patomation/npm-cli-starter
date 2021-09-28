#! /usr/bin/env node
import meow from 'meow';

const cli = meow(`
	Usage
	  $ hello <input>

	Options
	  --rainbow, -r  Display in red text

	Examples
	  $ hello Dave --rainbow
	  🌈 Hello Dave! 🌈
`, {
  importMeta: import.meta,
  flags: {
    rainbow : {
      type: 'boolean',
      alias: 'r'
    }
  }
});

console.log(`
  cli.input[0] ${cli.input[0]}
  cli.flags ${JSON.stringify(cli.flags, null, 2)}
`);

function main() {
  const [command, text] = cli.input
  switch (command) {
    case 'hello':
      const message = `Hello ${text}!`
      console.log(
        cli.flags.rainbow ? `🌈 ${message} 🌈` : message
      )
      break;

    default:
      console.log('no command, try --help')
      break;
  }
}
main()