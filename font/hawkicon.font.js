const icons = [
  'icons/bookmark.svg',
  'icons/book.svg',
  'icons/briefcase.svg',
  'icons/heart.svg',
  'icons/social-dribbble.svg',
  'icons/social-facebook.svg',
  'icons/social-facebook-messenger.svg',
  'icons/social-facebook-messenger-bubble.svg',
  'icons/social-github.svg',
  'icons/social-stack-exchange.svg',
  'icons/social-steam.svg',
  'icons/social-twitter.svg',
  'icons/warning.svg',
];

module.exports = {
  files: [
    ...icons,
  ],
  fontName: 'HawkIcons',
  classPrefix: 'hi-',
  baseClass: 'hi',
  fixedWidth: true,
  types: ['eot', 'woff', 'ttf'],
  cssTemplate: 'templates/less.hbs',
};
