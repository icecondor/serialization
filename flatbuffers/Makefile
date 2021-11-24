.ONESHELL:

all: bin/flatc ts

bin/flatc:
	mkdir bin
	cd bin
	wget https://github.com/google/flatbuffers/releases/download/v2.0.0/Linux.flatc.binary.clang++-9.zip
	unzip Linux.flatc.binary.clang++-9.zip
	rm Linux.flatc.binary.clang++-9.zip
	chmod 755 flatc

ts:
	./bin/flatc --ts --gen-object-api fbs/*.fbs
