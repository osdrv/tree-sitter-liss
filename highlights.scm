; Keywords
(kw_fn) @keyword
(kw_let) @keyword
(kw_cond) @keyword
(kw_import) @keyword
(kw_as) @keyword
(kw_raise) @keyword
(kw_switch) @keyword

; Literals
(string) @string
(number) @number
(boolean) @boolean
(null) @constant
(match_all) @constant

; Identifiers
(identifier
  (_identifier_base) @variable)
(identifier
  (_predicate_marker) @punctuation.special)

; Operators
(operator) @operator

; Function definitions
(sexp (kw_fn) (identifier) @function)

; Function calls
(sexp (identifier) @function)

; For qualified identifiers like module:name
(qualified_identifier
  module: (identifier) @namespace)

; For function calls with qualified identifiers like (module:name ...)
(sexp
  (qualified_identifier
    function: (identifier) @function))

; Comments
(comment) @comment
