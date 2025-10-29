import XCTest
import SwiftTreeSitter
import TreeSitterLiss

final class TreeSitterLissTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_liss())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Liss grammar")
    }
}
