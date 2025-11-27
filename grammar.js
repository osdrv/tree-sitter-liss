module.exports = grammar({
  name: "liss",

  extras: ($) => [/\s/, $.comment, /\n/],

  rules: {
    source_file: ($) => repeat($._expression),

    comment: ($) => /;[^\n]*/,

    _expression: ($) =>
      choice(
        $.sexp,
        $.list,
        $.number,
        $.string,
        $.boolean,
        $.null,
        $.identifier,
        $.qualified_identifier,
        $.operator,
      ),

    sexp: ($) =>
      choice(
        seq("(", $.kw_fn, $.identifier, $.list, repeat($._expression), ")"),
        seq("(", $.kw_let, $.identifier, $._expression, ")"),
        seq(
          "(",
          $.kw_import,
          $.string,
          optional(seq("[", repeat($.string), "]")),
          optional(seq($.kw_as, $.identifier)),
          ")",
        ),
        seq(
          "(",
          $.kw_cond,
          $._expression,
          $._expression,
          optional($._expression),
          ")",
        ),
        seq("(", $.kw_switch, $._expression, repeat($.switch_case), ")"),
        prec(
          1,
          seq(
            "(",
            choice($.identifier, $.qualified_identifier, $.operator),
            repeat($._expression),
            ")",
          ),
        ),
        seq("(", $.kw_raise, $._expression, ")"),
        seq("(", repeat($._expression), ")"),
      ),

    list: ($) => seq("[", repeat($._expression), "]"),

    number: ($) => /[+-]?\d+(\.\d+)?([eE][+-]?\d+)?/,

    string: ($) => /"[^"]*"/,

    boolean: ($) => choice("true", "false"),

    null: ($) => "null",

    identifier: ($) => seq($._identifier_base, optional($._predicate_marker)),
    _identifier_base: ($) => /[a-zA-Z_][a-zA-Z0-9_]*/,
    _predicate_marker: ($) => "?",

    qualified_identifier: ($) =>
      seq(field("module", $.identifier), ":", field("function", $.identifier)),

    operator: ($) => /[+\-*\/%<>=!&|]+/,

    match_all: ($) => "*",

    switch_case: ($) =>
      seq("[", choice($.match_all, $._expression), $._expression, "]"),

    kw_fn: ($) => "fn",
    kw_let: ($) => "let",
    kw_cond: ($) => "cond",
    kw_import: ($) => "import",
    kw_as: ($) => "as",
    kw_raise: ($) => "raise!",
    kw_switch: ($) => "switch",
  },
});
