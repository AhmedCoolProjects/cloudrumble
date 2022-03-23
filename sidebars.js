/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Fundamentals',
      items: [
        {type: 'autogenerated', dirName: 'Fundamentals'},
      ],
    },
    {
      type: 'category',
      label: 'Certificates',
      items: [
        {type: 'autogenerated', dirName: 'Certificates'},
      ],
    },
    {
      type: 'category',
      label: 'Examples',
      items: [
        {type: 'autogenerated', dirName: 'Examples'},
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'link',
          label: 'K8s Commands',
          href:
              'https://gist.github.com/Piotr1215/443fb83c89958139f0c67ec70b111da2#file-kubectl-commands-md'
        },{
          type: 'link',
          label: 'K8s Networking',
          href:
              'https://gist.github.com/Piotr1215/23cf678d74079f98dc7be731e6a3f1d1#file-cka-networking-commands-md'
        },{
          type: 'link',
          label: 'Vim Commands',
          href:
              'https://gist.github.com/Piotr1215/0a1ccd30efe38ed2de829c315a0fc355#file-vim-commands-md'
        },{
          type: 'link',
          label: 'Tmux Commands',
          href:
              'https://gist.github.com/Piotr1215/e15d4fdbe2a4d24e61b3a1b6701f0df8#file-tmux-cheatsheet-md'
        },{
          type: 'link',
          label: 'Linux Commands',
          href:
              'https://gist.github.com/Piotr1215/43796f441dcb74a40e4c1a567b1b1176#file-linux-commands-md'
        },
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;