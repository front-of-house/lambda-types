# lambda-types

[![npm version](https://img.shields.io/npm/v/lambda-types?style=flat&colorA=4488FF&colorB=4488FF)](https://www.npmjs.com/package/lambda-types) [![npm bundle size](https://badgen.net/bundlephobia/min/lambda-types?color=223355&labelColor=223355)](https://bundlephobia.com/result?p=lambda-types)

Generic AWS lambda types for use in serverless frameworks. Intended to be
somewhat permissive to allow for small inconsistencies between codebases and
serverless providers.

```
npm i lambda-types -D
```

## Usage

All types are generic to allow for extension within a specific framework.

```javascript
import { Event, Context, Response, Handler } from 'lambda-types'
```

### License

MIT License © [Sure Thing](https://github.com/sure-thing)
