# gendiff project

[![Code Climate](https://codeclimate.com/github/tysky/project-lvl2-s117/badges/gpa.svg)](https://codeclimate.com/github/tysky/project-lvl2-s117)
[![Test Coverage](https://codeclimate.com/github/tysky/project-lvl2-s117/badges/coverage.svg)](https://codeclimate.com/github/tysky/project-lvl2-s117/coverage)
[![Issue Count](https://codeclimate.com/github/tysky/project-lvl2-s117/badges/issue_count.svg)](https://codeclimate.com/github/tysky/project-lvl2-s117)
[![Build Status](https://travis-ci.org/tysky/project-lvl2-s117.svg?branch=master)](https://travis-ci.org/tysky/project-lvl2-s117)

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
