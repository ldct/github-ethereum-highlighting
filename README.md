# github-ethereum-highlighting

userscript (greasymonkey / tampermonkey) for synatx highlighting of ethereum languages (solidity, viper, LLL) on github. PRs welcome!

![screenshot](https://i.imgur.com/oIx2kjG.png)

# limitations

Currently, this uses javascript syntax highlighting for solidity since I can't find a good highlightjs style for solidity.

# installation

First, install a userscript manager (eg greasymonkey for firefox or tampermonkey for chrome).

Then, install this script. You can either copy userscript.js into your manager or install this via https://greasyfork.org/en/scripts/35046-github-solidity-highlighter

# development

I develop this using chrome + tampermonkey

# todo

- add viper, LLL, EVM, serpent
- create proper solidity language definition

maybe

- add line numbers
- package as chrome extension
