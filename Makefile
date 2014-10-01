
all:
	mkdir -p dist
	rm -fr dist/*
	npm install
	gulp
