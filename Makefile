.PHONY: build duk var node amd size hint clean test web preview pages dependencies

# repository name
REPO = dom-class

# make var files
VAR = src/$(REPO).js

# make node files
NODE = $(VAR)

# make amd files
AMD = $(VAR)

VITAMER =	src/ie-lte-9.js \
					node_modules/dom4/build/dom4.js \
					node_modules/document-register-element/build/document-register-element.js \
					node_modules/restyle/build/restyle.js \
					node_modules/es-class/build/es-class.js

# README constant


# default build task
build:
	make clean
	make var
	make vitamer
	make vitamer-qr
	make node
	make amd
	make mixins
	make test
	make hint
	make size

# build generic version
var:
	mkdir -p build
	cat template/var.before $(VAR) template/var.after >build/no-copy.$(REPO).max.js
	node node_modules/uglify-js/bin/uglifyjs --verbose build/no-copy.$(REPO).max.js >build/no-copy.$(REPO).js
	cat template/license.before LICENSE.txt template/license.after build/no-copy.$(REPO).max.js >build/$(REPO).max.js
	cat template/copyright build/no-copy.$(REPO).js >build/$(REPO).js
	rm build/no-copy.$(REPO).max.js
	rm build/no-copy.$(REPO).js
	node node_modules/uglify-js/bin/uglifyjs --verbose src/Bindings.js >build/no-copy.bindings.js

mixins:
	node node_modules/uglify-js/bin/uglifyjs --verbose src/Data.js >build/no-copy.data.js
	node node_modules/uglify-js/bin/uglifyjs --verbose src/Bindings.js >build/no-copy.bindings.js
	cat template/copyright build/no-copy.data.js >build/dom-class-data.js
	cat template/copyright build/no-copy.bindings.js >build/dom-class-bindings.js
	rm build/no-copy*

vitamer:
	mkdir -p build
	cat template/var.before $(VAR) template/var.after >build/no-copy.$(REPO).max.js
	node node_modules/uglify-js/bin/uglifyjs --verbose build/no-copy.$(REPO).max.js >build/no-copy.$(REPO).js
	echo '' >build/vitamer.cr.js
	cat $(VITAMER) build/vitamer.cr.js build/no-copy.$(REPO).js >build/vitamer.js
	node -e 'var fs=require("fs");fs.writeFileSync("build/vitamer.cr.js",fs.readFileSync("build/vitamer.js").toString().replace(/\/\*\!.+?\*\//g,""));'
	cat template/copyright build/vitamer.cr.js >build/vitamer.js
	rm build/no-copy.$(REPO).max.js
	rm build/no-copy.$(REPO).js
	rm build/vitamer.cr.js

vitamer-qr:
	mkdir -p build
	cat template/var.before $(VAR) template/var.after >build/no-copy.$(REPO).max.js
	node node_modules/uglify-js/bin/uglifyjs --verbose build/no-copy.$(REPO).max.js >build/no-copy.$(REPO).js
	echo '' >build/vitamer.cr.js
	cat $(VITAMER) node_modules/query-result/build/query-result.js build/vitamer.cr.js build/no-copy.$(REPO).js >build/vitamer-qr.js
	node -e 'var fs=require("fs");fs.writeFileSync("build/vitamer.cr.js",fs.readFileSync("build/vitamer-qr.js").toString().replace(/\/\*\!.+?\*\//g,""));'
	cat template/copyright build/vitamer.cr.js >build/vitamer-qr.js
	rm build/no-copy.$(REPO).max.js
	rm build/no-copy.$(REPO).js
	rm build/vitamer.cr.js

# build node.js version
node:
	mkdir -p build
	cat template/license.before LICENSE.txt template/license.after template/node.before $(NODE) template/node.after >build/$(REPO).node.js

# build AMD version
amd:
	mkdir -p build
	cat template/amd.before $(AMD) template/amd.after >build/no-copy.$(REPO).max.amd.js
	node node_modules/uglify-js/bin/uglifyjs --verbose build/no-copy.$(REPO).max.amd.js >build/no-copy.$(REPO).amd.js
	cat template/license.before LICENSE.txt template/license.after build/no-copy.$(REPO).max.amd.js >build/$(REPO).max.amd.js
	cat template/copyright build/no-copy.$(REPO).amd.js >build/$(REPO).amd.js
	rm build/no-copy.$(REPO).max.amd.js
	rm build/no-copy.$(REPO).amd.js

# build self executable for duktape
duk:
	node -e 'var fs=require("fs");\
          fs.writeFileSync(\
            "test/duk.js",\
            fs.readFileSync("node_modules/wru/build/wru.console.js") +\
            "\n" +\
            fs.readFileSync("build/$(REPO).js") +\
            "\n" +\
            fs.readFileSync("test/$(REPO).js").toString().replace(/^[^\x00]+?\/\/:remove\s*/,"")\
          );'


size:
	wc -c build/$(REPO).max.js
	gzip -c build/$(REPO).js | wc -c
	gzip -c build/vitamer.js | wc -c
	gzip -c build/vitamer-qr.js | wc -c

# hint built file
hint:
	node node_modules/jshint/bin/jshint build/$(REPO).max.js
	node node_modules/jshint/bin/jshint src/Bindings.js

# clean/remove build folder
clean:
	rm -rf build

# tests, as usual and of course
test:
	npm test

# launch tiny-cdn (ctrl+click to open the page)
web:
	node node_modules/tiny-cdn/tiny-cdn run

# markdown the readme and view it
preview:
	node_modules/markdown/bin/md2html.js README.md >README.md.htm
	cat template/md.before README.md.htm template/md.after >README.md.html
	open README.md.html
	sleep 3
	rm README.md.htm README.md.html

pages:
	git pull --rebase
	git checkout gh-pages
	git pull --rebase
	git checkout master
	make var
	mkdir -p ~/tmp
	mkdir -p ~/tmp/$(REPO)
	cp .gitignore ~/tmp/
	cp -rf src ~/tmp/$(REPO)
	cp -rf build ~/tmp/$(REPO)
	cp -rf test ~/tmp/$(REPO)
	cp index.html ~/tmp/$(REPO)
	git checkout gh-pages
	cp ~/tmp/.gitignore ./
	mkdir -p test
	rm -rf test
	cp -rf ~/tmp/$(REPO) test
	git add .gitignore
	git add test
	git add test/.
	git commit -m 'automatic test generator'
	git push
	git checkout master
	rm -r ~/tmp/$(REPO)

# modules used in this repo
dependencies:
	rm -rf node_modules
	mkdir node_modules
	npm install wru
	npm install tiny-cdn
	npm install uglify-js@1
	npm install jshint
	npm install markdown
	npm install browserify
	npm install watchify

# bundle: creates the browserified version of the project as js/bundle.max.js
bundle:
	sh utils/browserify.sh

# watch: update the browserified version of the project as soon as file changes
watch:
	sh utils/watchify.sh

# minified: create the minifeid version of the project as js/bundle.js
minified:
	make -s bundle
	sh utils/uglifyjs.sh $(LICENSE)
	make -s size

# jshint: recursively checks for javascript files inside the src folder and lint them
jshint:
	sh utils/jshint.sh
