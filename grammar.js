module.exports = grammar({
  name: 'liss',

  extras: $ => [
    /\s/,
  ],

  rules: {
    source_file: $ => repeat($._expression),

    _expression: $ => choice(
      $.sexp,
      $.list,
      $.number,
      $.string,
      $.boolean,
      $.null,
      $.identifier,
      $.operator,
    ),

    sexp: $ => choice(
      seq('(', $.kw_fn, $.identifier, $.list, repeat($._expression), ')'),
      seq('(', $.kw_let, $.identifier, $._expression, ')'),
      seq('(', $.kw_cond, $._expression, $._expression, optional($._expression), ')'),
      prec(1, seq('(', choice($.identifier, $.operator), repeat($._expression), ')')),
      seq('(', repeat($._expression), ')')
    ),

    list: $ => seq('[', repeat($._expression), ']'),

    number: $ => /[+-]?\d+(\.\d+)?([eE][+-]?\d+)?/,

    string: $ => /"[^"]*"/,

    boolean: $ => choice('true', 'false'),

    null: $ => 'null',

    identifier: $ => seq(/[a-zA-Z_][a-zA-Z0-9_:]*/, optional('?')),

    operator: $ => /[+\-*\/%<>=!&|]+/,

    kw_fn: $ => 'fn',
    kw_let: $ => 'let',
    kw_cond: $ => 'cond'
  }
});
