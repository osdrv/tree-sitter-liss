/**
 * @file A TreeSitter syntax highlighter for the Liss programming language
 * @author osdrv
 * @license MIT
 */

/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: "liss",

  rules: {
    // TODO: add the actual grammar rules
    source_file: ($) => "hello",
  },
});
