.PHONY: elm crystal go ocaml copy python npm ts rust

PATH=/bin:/usr/bin:./bin

all: protoc3/bin/protoc ts

ts: proto/*.proto
	./node_modules/.bin/gulp
#	protoc3/bin/protoc --plugin=protoc-gen-ts="./node_modules/.bin/protoc-gen-ts" --ts_out=ts  proto/*.proto

node_modules/.bin/gulp:
	npm install gulp gulp-cli protobuf-templates

ic_nouns.js: proto/*.proto
	mkdir -p js
#	protoc3/bin/protoc --js_out=js  proto/*.proto
	./node_modules/.bin/pbjs -t static-module proto/*.proto -o ic_nouns.js

sql: proto/*.proto
	mkdir -p sql
	LD_LIBRARY_PATH=protobuf-3.3.0/src/.libs/ protoc3/bin/protoc --plugin=protoc-gen-sql="proto-sql/protosql" --sql_out=sql --proto_path=proto proto/*.proto
	sed -i 's/.*AUTO_INCREMENT.*//' sql/*.sql
	sed -i "s/SET charset 'utf8';//" sql/*.sql
	sed -i 's/`id` text/`id` text primary key/' sql/*.sql

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

rust: proto/*.proto
	mkdir -p rust
	PATH=$$PATH:~/.cargo/bin protoc3/bin/protoc --rust_out rust $^
	for a in $^; do sed -i 's/Debug/Debug,::serde::Serialize,::serde::Deserialize/' rust/`basename $$a .proto`.rs; done
	for a in $^; do sed -i 's/^.*@@protoc_insertion_point.special_field.*/#[serde(skip)]/' rust/`basename $$a .proto`.rs; done
	cp rust/* ../../api-rs/src/nouns

copy:
	cp -r elm/Proto ../web-elm/src/
	cp -r go/proto ../api-go/src/cointhink

proto-sql:
	git clone  https://github.com/commandus/proto-sql

proto-sql/protosql: proto-sql
	cd proto-sql && ./configure LDFLAGS=-Lprotobuf-3.3.0/src/.libs/ && make 

protoc3/bin/protoc:
	mkdir bin
	wget --no-clobber https://github.com/protocolbuffers/protobuf/releases/download/v3.20.1/protoc-3.20.1-linux-x86_64.zip 
	unzip -o protoc-3.20.1-linux-x86_64.zip -d protoc3
	rm protoc-3.20.1-linux-x86_64.zip

bin/protoc-gen-elm:
	GOPATH=`pwd` go get -u github.com/tiziano88/elm-protobuf/protoc-gen-elm
	GOPATH=`pwd` go build -o bin/protoc-gen-elm github.com/tiziano88/elm-protobuf/protoc-gen-elm

bin/protoc-gen-go:
	GOPATH=`pwd` go get -u github.com/golang/protobuf/protoc-gen-go

gen-ocaml:
	opam install ocaml-protoc

~/.cargo/bin/protoc-gen-rust:
	export PATH=$$PATH:~/.cargo/bin; cargo install protobuf-codegen
