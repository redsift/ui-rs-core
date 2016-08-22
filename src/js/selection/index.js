const disableSelectionStyle = `
  * {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

export default function cssDisableSelection() {
  var node = document.createElement('style');
  node.innerHTML = disableSelectionStyle;
  document.body.appendChild(node);
}
