
all:
	mkdir dist || true
	rm -fr dist/*
	npm install
	bower install
	gulp