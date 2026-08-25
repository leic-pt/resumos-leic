import Prism from 'prismjs';

/**
 * Prism language definition for MIPS assembly, ported verbatim from the
 * Gatsby remark-prismjs configuration. Importing this module registers the
 * `mips-asm` language so code blocks with that language highlight correctly.
 */
Prism.languages['mips-asm'] = {
  comment: {
    pattern: /#.*$/m,
    greedy: true,
  },
  string: {
    pattern: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: true,
  },
  register: {
    pattern: /([\s\(]|^)(?:\$(?:zero|at|v[01]|a[0123]|t\d|s[01234567]|k[01]|[gsf]p|ra))\b/i,
    lookbehind: true,
    alias: ['variable'],
  },
  instruction: {
    pattern:
      /\b(?:addi?|sub|[ls]w|l[hb]u?|s[hb]|ll|sc|lui|andi?|ori?|nor|s[rl]l|beq|bne|slti?u?|jr?|jal)\b/i,
    alias: ['keyword'],
  },
  number: {
    pattern: /(^|[^\w-])(?:0b[01]+|0x[a-f0-9]+|-?\d+)\b/,
    lookbehind: true,
  },
  label: {
    pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
    lookbehind: true,
    alias: ['function'],
  },
  directive: {
    pattern: /\b[A-Za-z._?$][\w.?$@~#]*\b/,
    alias: ['property'],
  },
  punctuation: /[(),:]/,
};
