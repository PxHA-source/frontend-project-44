install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npm eslint .

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

.PHONY: install brain-games publish lint brain-even brain-calc