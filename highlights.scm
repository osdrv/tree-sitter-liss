; Keywords
(kw_fn) @keyword
(kw_let) @keyword
(kw_cond) @keyword

; Literals
(string) @string
(number) @number
(boolean) @boolean
(null) @constant

; Identifiers
(identifier) @variable

; Operators
(operator) @operator

; Function definitions
(sexp (kw_fn) (identifier) @function)

; Function calls
(sexp (identifier) @function)
