; Keywords
(kw_fn) @keyword
(kw_let) @keyword
(kw_cond) @keyword
(kw_import) @keyword

; Literals
(string) @string
(number) @number
(boolean) @boolean
(null) @constant

; Identifiers
(identifier) @variable

; Operators
(operator) @operator

; Punctuation
"?" @punctuation.special

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
