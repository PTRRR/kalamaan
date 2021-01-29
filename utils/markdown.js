import MarkdownIt from 'markdown-it'

const renderMarkdown = (markdown) => {
  const md = new MarkdownIt()
  return md.render(markdown)
}

export { renderMarkdown }
