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
$ docker-compose up
```


### In Prod

There is an additional docker-compose override, that configures traefik for HTTPS and `licium.dev` domain.

Specify base compose file and environment override like this:

```bash
$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```

## License

 Copyright 2020 Andreas Houben, Sebastian Posth, Kevin Wittek

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
