# Makefile для проекта frontend-project-44

# Целевая команда 'install' — выполняет npm ci для чистой установки зависимостей
install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
