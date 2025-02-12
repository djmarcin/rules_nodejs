check = require('check');
const fs = require('fs');
const expected = 'dep4 fn';
const {runfiles} = require('build_bazel_rules_nodejs/internal/linker');

describe('bundling chunks', () => {
  function findChunk() {
    const chunkDir = runfiles.resolvePackageRelative('bundle_chunks');
    let chunks =
        fs.readdirSync(chunkDir).filter(name => name.startsWith('chunk-') && name.endsWith('.js'));
    if (chunks.length != 1) {
      fail('Not 1 chunk ' + chunks);
    }
    return chunks[0];
  }

  it('should work', () => {
    check('bundle.min.js', 'goldens/bundle.min.js_');
    check('bundle.min.es2015.js', 'goldens/bundle.min.es2015.js_');
  });

  // Disabled because native ESModules can't be loaded in current nodejs
  // see https://github.com/bazelbuild/rules_nodejs/issues/593
  xit('bundle_chunks_es6 should work', () => {
    const additional_entry = require(
        'build_bazel_rules_nodejs/internal/rollup/test/rollup_code_splitting/bundle_chunks_es6/' +
        findChunk());
    const actual = additional_entry.fn();
    expect(actual).toEqual(expected);
  });

  it('bundle_chunks should work', () => {
    const additional_entry = require(
        'build_bazel_rules_nodejs/internal/rollup/test/rollup_code_splitting/bundle_chunks/' +
        findChunk());
    const actual = additional_entry.fn();
    expect(actual).toEqual(expected);
  });

  it('bundle_chunks_min should work', () => {
    const additional_entry = require(
        'build_bazel_rules_nodejs/internal/rollup/test/rollup_code_splitting/bundle_chunks_min/' +
        findChunk());
    const actual = additional_entry.fn();
    expect(actual).toEqual(expected);
  });

  it('bundle_chunks_min_debug should work', () => {
    const additional_entry = require(
        'build_bazel_rules_nodejs/internal/rollup/test/rollup_code_splitting/bundle_chunks_min_debug/' +
        findChunk());
    const actual = additional_entry.fn();
    expect(actual).toEqual(expected);
  });

  it('should have a license header', () => {
    const content = fs.readFileSync(
        require.resolve(
            'build_bazel_rules_nodejs/internal/rollup/test/rollup_code_splitting/bundle_chunks_min_debug/' +
            findChunk()),
        {encoding: 'utf-8'});
    expect(content).toContain('dummy license banner');
  });
});
