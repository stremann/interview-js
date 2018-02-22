function pipe(...fns) {
  return param => fns.reduce(
    (result, fn) => fn(result),
    param
  );
}

function validate(args) {
  console.log('validate:', args);
  return 'validated';
}

function normalize(args) {
  console.log('normalize:', args);
  return 'normalized';
}

function process(args) {
  console.log('process:', args);
  return 'processed';
}

function verify(args) {
  console.log('verify:', args);
  return 'verified';
}

function log(args) {
  console.log('log:', args);
  return 'logged';
}

pipe(
  validate,
  normalize,
  process,
  verify,
  log
)('arguments');

/** output should be as follows:
* validate: arguments
* normalize: validated
* process: normalized
* verify: processed
* log: verified
*/
