# gendiff project

[![Maintainability](https://api.codeclimate.com/v1/badges/31e3c1961c3a4a93672c/maintainability)](https://codeclimate.com/github/tysky/gen-diff/maintainability)
[![Build Status](https://travis-ci.org/tysky/gen-diff.svg?branch=master)](https://travis-ci.org/tysky/gen-diff)

CLI utility for searching differences in configuration files (json, yml, ini). Utility can generate reports in plain text, pretty format or json.

## Installation
* `npm i -g gen-file-diff`

## Example of use

```
$ gendiff --format plain first-config.ini second-config.ini
Setting "common.setting2" deleted.
Setting "common.setting4" added with value "blah blah".
Setting "group1.baz" changed from "bas" to "bars".
Section "group2" deleted.
```
