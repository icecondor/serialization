.PHONY: elm crystal go ocaml copy python

PATH=/bin:/usr/bin:./bin

all: protoc3/bin/protoc proto-sql/protosql sql

ts: proto/*.proto
	protoc3/bin/protoc --plugin=protoc-gen-ts="./node_modules/.bin/protoc-gen-ts" --ts_out=ts  proto/*.proto

js: proto/*.proto
	protoc3/bin/protoc --js_out=js  proto/*.proto

sql: proto/*.proto
	protoc3/bin/protoc --plugin=protoc-gen-sql="proto-sql/protosql" --sql_out=sql --proto_path=proto proto/*.proto
	sed -i 's/.*AUTO_INCREMENT.*//' sql/*.sql
	sed -i "s/SET charset 'utf8';//" sql/*.sql

elm: proto/*.proto
	mkdir -p elm
	protoc3/bin/protoc --elm_out=elm $^

crystal: proto/*.proto
	mkdir -p crystal
	protoc3/bin/protoc --crystal_out=crystal $^

go: proto/*.proto
	mkdir -p go
	protoc3/bin/protoc --go_out=go $^

python: proto/*.proto
	mkdir -p python
	protoc3/bin/protoc --python_out=python $^

ocaml: proto/*.proto
	mkdir -p ocaml
	for name in $^; do ocaml-protoc -ml_out ocaml $$name; done

copy:
	cp -r elm/Proto ../web-elm/src/
	cp -r go/proto ../api-go/src/cointhink

proto-sql/protosql:
	git clone  https://github.com/commandus/proto-sql
	cd proto-sql
	./configure
	make

protoc3/bin/protoc:
	mkdir bin
	wget --no-clobber https://github.com/google/protobuf/releases/download/v3.3.0/protoc-3.3.0-linux-x86_64.zip
	unzip -o protoc-3.3.0-linux-x86_64.zip -d protoc3
	rm protoc-3.3.0-linux-x86_64.zip

bin/protosql:
	#libprotobuf-dev libprotoc-dev
	git clone https://github.com/commandus/proto-sql
	cd proto-sql && ./configure && make
	cp proto-sql/protosql bin/

bin/protoc-gen-elm:
	GOPATH=`pwd` go get -u github.com/tiziano88/elm-protobuf/protoc-gen-elm
	GOPATH=`pwd` go build -o bin/protoc-gen-elm github.com/tiziano88/elm-protobuf/protoc-gen-elm

bin/protoc-gen-go:
	GOPATH=`pwd` go get -u github.com/golang/protobuf/protoc-gen-go

gen-ocaml:
	opam install ocaml-protoc
