; Keywords
(kw_fn) @keyword
(kw_let) @keyword
(kw_cond) @keyword
(kb_import) @keyword

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

; Comments
(comment) @comment
