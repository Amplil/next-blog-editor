import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/cjs/styles/prism"

const CodeBlock = ({ inline, className, children }) => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter language={match[1]} style={base16AteliersulphurpoolLight}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className}>
    {children}
  </code>
    )
}
export default CodeBlock