compile:
	@coffee --compile --bare --output . index.coffee

pack:
	@zip github-easy-review.zip index.js jquery.js manifest.json