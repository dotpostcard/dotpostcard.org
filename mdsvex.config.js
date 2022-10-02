import relativeImages from 'mdsvex-relative-images'
import autolinkHeadings from 'rehype-autolink-headings'
import slugPlugin from 'rehype-slug'
import remarkExternalLinks from 'remark-external-links'
import remarkGfm from 'remark-gfm'

const config = {
  extensions: ['.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [
    remarkGfm,
    relativeImages,
    // external links open in a new tab
    [remarkExternalLinks, { target: '_blank', rel: 'noopener' }],
  ],
  rehypePlugins: [
    slugPlugin,
    [
      autolinkHeadings,
      {
        behavior: 'wrap',
      },
    ],
  ],
}

export default config