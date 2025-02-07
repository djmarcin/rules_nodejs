const fs = require('fs');
const path = require('path');
const unidiff = require('unidiff')
const {runfiles} = require('build_bazel_rules_nodejs/internal/linker');

function read(readPath) {
  // TODO(#32) Can shorten the path if
  // https://github.com/bazelbuild/rules_nodejs/issues/32 is resolved
  return fs.readFileSync(require.resolve(readPath), {encoding: 'utf-8'})
      .replace(/\r\n/g, '\n')
      .replace(/\\\\/g, '/')
      // In the sourcemap, CRLF is turned into a string encoding
      .replace(/\\r\\n/g, '\\n');
}

// These keys are arbitrary and local to this test.
const update_var = 'UPDATE_GOLDEN'
const update_val = '1'

// Ensure we are running under `bazel run`.
if (process.env[update_var] && !process.env['BUILD_WORKSPACE_DIRECTORY']) {
  throw new Error(`Cannot use ${update_var} when run as a test. Use bazel run instead.`);
}

function check(actual, expected) {
  const actualPath = runfiles.resolvePackageRelative(actual);
  const expectedPath = runfiles.resolvePackageRelative(expected);
  const actualContents = read(actualPath);
  const expectedContents = read(expectedPath);
  if (actualContents !== expectedContents) {
    if (process.env[update_var] === update_val) {
      fs.writeFileSync(expectedPath, actualContents);
      console.error('Replaced ', expectedPath);
    } else {
      const diff = unidiff.diffLines(actualContents, expectedContents);
      const prettyDiff = unidiff.formatLines(diff);
      fail(`Actual output in ${actual} doesn't match golden file ${expected}.

Diff:
${prettyDiff}

Update the golden file:

      bazel run --define ${update_var}=${update_val} ${process.env['BAZEL_TARGET']}`);
    }
  }
}

module.exports = check;
