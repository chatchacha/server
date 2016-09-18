# Chatchacha

Chatchacha is yet another live chat service that you can install and host on your own webservers!

## 1. Server

### Dependencies
All you need is ~~love~~ a recent version of [Node.js](http://nodejs.org)

This server has been tested and approved on [Node.js](http://nodejs.org) v5.9.1

### Installation instructions
* Clone this repository anywhere you fancy (ideally not a public folder)
* Install dependencies with `npm install`
* Create a file config.js at the root of your repository by copying config.dist.js
* Fine-tune your configuration if necessary

### Running instructions
If installation went fine, you can finally start up your own Chatchacha server by executing `node index.js`

If the server starts running correctly, you should get the following output:
```sh
$ node index.js
- Loading dependencies... OK
- Importing local configuration... OK
- Starting socket.io...
```

Otherwise, something wrong happened and you might want to open an issue to let me know. :)
