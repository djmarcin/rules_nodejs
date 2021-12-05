<!-- *********************
  DO NOT EDIT THIS FILE
  It is a generated build output from Stardoc.
  Instead you must edit the .bzl file where the rules are declared,
  or possibly a markdown file next to the .bzl file
 ********************* -->
Public API for toolchains

These provide platform-specific tool binaries for rules to consume and use.
They are mostly useful for authors of custom rules, and aren't exposed to end-users.

See https://docs.bazel.build/versions/main/toolchains.html


## cypress_toolchain

**USAGE**

<pre>
cypress_toolchain(<a href="#cypress_toolchain-name">name</a>, <a href="#cypress_toolchain-cypress_bin">cypress_bin</a>, <a href="#cypress_toolchain-cypress_bin_path">cypress_bin_path</a>, <a href="#cypress_toolchain-cypress_files">cypress_files</a>)
</pre>

Defines a cypress toolchain.

For usage see https://docs.bazel.build/versions/main/toolchains.html#defining-toolchains.


**ATTRIBUTES**


<h4 id="cypress_toolchain-name">name</h4>

(*<a href="https://bazel.build/docs/build-ref.html#name">Name</a>, mandatory*): A unique name for this target.


<h4 id="cypress_toolchain-cypress_bin">cypress_bin</h4>

(*<a href="https://bazel.build/docs/build-ref.html#labels">Label</a>*): A hermetically downloaded cypress executable binary for the target platform.

Defaults to `None`

<h4 id="cypress_toolchain-cypress_bin_path">cypress_bin_path</h4>

(*String*): Path to an existing cypress executable for the target platform.

Defaults to `""`

<h4 id="cypress_toolchain-cypress_files">cypress_files</h4>

(*<a href="https://bazel.build/docs/build-ref.html#labels">Label</a>*): A hermetically downloaded cypress filegroup of all cypress binary files for the target platform. Must be set when cypress_bin is set.

Defaults to `None`


## node_toolchain

**USAGE**

<pre>
node_toolchain(<a href="#node_toolchain-name">name</a>, <a href="#node_toolchain-target_tool">target_tool</a>, <a href="#node_toolchain-target_tool_path">target_tool_path</a>)
</pre>

Defines a node toolchain.

For usage see https://docs.bazel.build/versions/main/toolchains.html#defining-toolchains.


**ATTRIBUTES**


<h4 id="node_toolchain-name">name</h4>

(*<a href="https://bazel.build/docs/build-ref.html#name">Name</a>, mandatory*): A unique name for this target.


<h4 id="node_toolchain-target_tool">target_tool</h4>

(*<a href="https://bazel.build/docs/build-ref.html#labels">Label</a>*): A hermetically downloaded nodejs executable target for the target platform.

Defaults to `None`

<h4 id="node_toolchain-target_tool_path">target_tool_path</h4>

(*String*): Path to an existing nodejs executable for the target platform.

Defaults to `""`


## node_toolchain_configure

**USAGE**

<pre>
node_toolchain_configure(<a href="#node_toolchain_configure-name">name</a>, <a href="#node_toolchain_configure-repo_mapping">repo_mapping</a>, <a href="#node_toolchain_configure-target_tool">target_tool</a>, <a href="#node_toolchain_configure-target_tool_path">target_tool_path</a>)
</pre>

Creates an external repository with a node_toolchain //:toolchain target properly configured.

**ATTRIBUTES**


<h4 id="node_toolchain_configure-name">name</h4>

(*<a href="https://bazel.build/docs/build-ref.html#name">Name</a>, mandatory*): A unique name for this repository.


<h4 id="node_toolchain_configure-repo_mapping">repo_mapping</h4>

(*<a href="https://bazel.build/docs/skylark/lib/dict.html">Dictionary: String -> String</a>, mandatory*): A dictionary from local repository name to global repository name. This allows controls over workspace dependency resolution for dependencies of this repository.<p>For example, an entry `"@foo": "@bar"` declares that, for any time this repository depends on `@foo` (such as a dependency on `@foo//some:target`, it should actually resolve that dependency within globally-declared `@bar` (`@bar//some:target`).


<h4 id="node_toolchain_configure-target_tool">target_tool</h4>

(*<a href="https://bazel.build/docs/build-ref.html#labels">Label</a>*): Target for a downloaded nodejs binary for the target os.

Defaults to `None`

<h4 id="node_toolchain_configure-target_tool_path">target_tool_path</h4>

(*String*): Absolute path to a pre-installed nodejs binary for the target os.

Defaults to `""`


## configure_esbuild_toolchains

**USAGE**

<pre>
configure_esbuild_toolchains(<a href="#configure_esbuild_toolchains-name">name</a>, <a href="#configure_esbuild_toolchains-platforms">platforms</a>)
</pre>

Configures esbuild toolchains for a list of supported platforms

**PARAMETERS**


<h4 id="configure_esbuild_toolchains-name">name</h4>

unused

Defaults to `""`

<h4 id="configure_esbuild_toolchains-platforms">platforms</h4>

dict of platforms to configure toolchains for

Defaults to `{}`


## cypress_repositories

**USAGE**

<pre>
cypress_repositories(<a href="#cypress_repositories-name">name</a>, <a href="#cypress_repositories-version">version</a>, <a href="#cypress_repositories-linux_urls">linux_urls</a>, <a href="#cypress_repositories-linux_sha256">linux_sha256</a>, <a href="#cypress_repositories-darwin_urls">darwin_urls</a>, <a href="#cypress_repositories-darwin_sha256">darwin_sha256</a>,
                     <a href="#cypress_repositories-windows_urls">windows_urls</a>, <a href="#cypress_repositories-windows_sha256">windows_sha256</a>)
</pre>

    Repository rule used to install cypress binary.

**PARAMETERS**


<h4 id="cypress_repositories-name">name</h4>

Name of the external workspace where the cypress binary lives



<h4 id="cypress_repositories-version">version</h4>

Version of cypress binary to use. Should match package.json



<h4 id="cypress_repositories-linux_urls">linux_urls</h4>

(Optional) URLs at which the cypress binary for linux distros of linux can be downloaded. If omitted, https://cdn.cypress.io/desktop will be used.

Defaults to `[]`

<h4 id="cypress_repositories-linux_sha256">linux_sha256</h4>

(Optional) SHA-256 of the linux cypress binary

Defaults to `""`

<h4 id="cypress_repositories-darwin_urls">darwin_urls</h4>

(Optional) URLs at which the cypress binary for darwin distros of linux can be downloaded. If omitted, https://cdn.cypress.io/desktop will be used.

Defaults to `[]`

<h4 id="cypress_repositories-darwin_sha256">darwin_sha256</h4>

(Optional) SHA-256 of the darwin cypress binary

Defaults to `""`

<h4 id="cypress_repositories-windows_urls">windows_urls</h4>

(Optional) URLs at which the cypress binary for windows distros of linux can be downloaded. If omitted, https://cdn.cypress.io/desktop will be used.

Defaults to `[]`

<h4 id="cypress_repositories-windows_sha256">windows_sha256</h4>

(Optional) SHA-256 of the windows cypress binary

Defaults to `""`


## esbuild_repositories

**USAGE**

<pre>
esbuild_repositories(<a href="#esbuild_repositories-name">name</a>, <a href="#esbuild_repositories-npm_repository">npm_repository</a>, <a href="#esbuild_repositories-npm_args">npm_args</a>)
</pre>

Helper for fetching and setting up the esbuild versions and toolchains

This uses Bazel's downloader (via `http_archive`) to fetch the esbuild package
from npm, separately from any `npm_install`/`yarn_install` in your WORKSPACE.
To configure where the download is from, you make a file containing a rewrite rule like

    rewrite (registry.nodejs.org)/(.*) artifactory.build.internal.net/artifactory/$1/$2

You can find some documentation on the rewrite patterns in the Bazel sources:
[UrlRewriterConfig.java](https://github.com/bazelbuild/bazel/blob/4.2.1/src/main/java/com/google/devtools/build/lib/bazel/repository/downloader/UrlRewriterConfig.java#L66)

Then use the `--experimental_downloader_config` Bazel option to point to your file.
For example if you created `.bazel_downloader_config` you might add to your `.bazelrc` file:

    common --experimental_downloader_config=.bazel_downloader_config


**PARAMETERS**


<h4 id="esbuild_repositories-name">name</h4>

currently unused

Defaults to `""`

<h4 id="esbuild_repositories-npm_repository">npm_repository</h4>

the name of the repository where the @bazel/esbuild package is installed
by npm_install or yarn_install.

Defaults to `"npm"`

<h4 id="esbuild_repositories-npm_args">npm_args</h4>

additional args to pass to the npm install rule

Defaults to `[]`

