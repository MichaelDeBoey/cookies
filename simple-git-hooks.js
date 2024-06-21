module.exports = {
  'prepare-commit-msg': `grep -qE '^[^#]' .git/COMMIT_EDITMSG || (exec < /dev/tty && pnpx cz --hook || true)`,
  'commit-msg': 'pnpx commitlint --edit $1',
}
