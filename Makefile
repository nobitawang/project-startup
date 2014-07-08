
all:
	mkdir dist || true
	rm -fr dist/*
	npm install
	gulp