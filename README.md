# Licium

Everything Licium

## Development Setup

### Ethereum

Local [Truffle installation](https://www.trufflesuite.com/docs/truffle/getting-started/installation) necessary (note that you should install the Truffle version for node LTS). 

```bash
$ npm i -g truffle@nodeLTS
```

Note that there are some quirks with regards to node version, especially for the local test Ethereum network, (using LTS version from NVM works, e.g. node `v12.18.3`), so using [NVM](https://github.com/nvm-sh/nvm) is recommended.

## Running the App

### Local Dev

Just your jolly good old docker-compose:

```bash
docker-compose up
```


### In Prod

There is an addition docker-compose override, that configures traefik for HTTPS and `licium.dev` domain.

Specify base compose file and environment override like this:

```bash
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```