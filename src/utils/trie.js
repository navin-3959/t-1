class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.words = []; // Store words for fast lookup
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (let char of word.toLowerCase()) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
      node.words.push(word); // Store words at each level for prefix search
    }
    node.isEndOfWord = true;
  }

  searchPrefix(prefix) {
    let node = this.root;
    for (let char of prefix.toLowerCase()) {
      if (!node.children[char]) return []; // No matching prefix
      node = node.children[char];
    }
    return node.words; // Return all words found under this prefix
  }
}

export default Trie;
