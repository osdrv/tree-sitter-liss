module.exports = grammar({
  name: "liss",

  extras: ($) => [
    /\s/,
    $.comment,
  ],

  rules: {
    comment: _ => /;.*\n?/,
    source_file: ($) => repeat($._expression),

    _expression: ($) =>
      choice(
        $.sexp,
        $.list,
        $.number,
        $.string,
        $.boolean,
        $.null,
        $.identifier,
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
        prec(
          1,
          seq(
            "(",
            choice($.identifier, $.operator),
            repeat($._expression),
            ")",
          ),
        ),
        seq("(", repeat($._expression), ")"),
      ),

    list: ($) => seq("[", repeat($._expression), "]"),

    number: ($) => /[+-]?\d+(\.\d+)?([eE][+-]?\d+)?/,

    string: ($) => /"[^"]*"/,

    boolean: ($) => choice("true", "false"),

    null: ($) => "null",

    identifier: ($) => /[a-zA-Z_][a-zA-Z0-9_:]*\??/,

    operator: ($) => /[+\-*\/%<>=!&|]+/,

    kw_fn: ($) => "fn",
    kw_let: ($) => "let",
    kw_cond: ($) => "cond",
    kw_import: ($) => "import",
  },
});
