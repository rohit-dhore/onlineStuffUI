UI
============

## Environment Set up

Setting the pre-requisite before environment set-up:

Installing all the Node Dependencies.
```bash
npm install 
```

Installing all the Bower Dependencies.
```bash
bower install 
```

## Development

To start developing in the project run:  

```bash
grunt serve 
```

Then head to `http://localhost:9000/` in your browser.

## Production ready build - a.k.a. dist

Node.js and NPM (Node Package Manager) must be installed - https://nodejs.org/

Grunt must be installed globally:
```bash
npm install -g gulp
```

Bower must be install globally:
```bash
npm install -g bower
```

After prerequisites have been installed, clone this repository. Then the following commands must be run in sequence:

```bash
npm install
bower install
grunt serve
```

`grunt serve` will process and compile all scripts, templates, and style sheets.
