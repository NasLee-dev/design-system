import run from '@ds/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
})
