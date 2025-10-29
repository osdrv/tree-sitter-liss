package tree_sitter_liss_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_liss "github.com/osdrv/tree-sitter-liss/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_liss.Language())
	if language == nil {
		t.Errorf("Error loading Liss grammar")
	}
}
