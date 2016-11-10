#!/bin/bash

#MACOS hack neef to brew install coreutils
QUESTCONTROLLER_PATH=../../../QuestController
ETHERBOOT_PATH=${QUESTCONTROLLER_PATH}/firmware/Etherboot/atmega2560/device_001
QUESTLIB_PATH=${QUESTCONTROLLER_PATH}/firmware/QuestLib

echo "Current Quest Contoller: $(greadlink -f ${QUESTCONTROLLER_PATH})"
echo "Current Etherboot: $(greadlink -f ${ETHERBOOT_PATH})"
echo "Current Quest Lib: $(greadlink -f ${QUESTLIB_PATH})"

if [ $1 = "update" ]; then
	rm -rf ./lib && mkdir lib/ && mkdir lib/QuestLib/ && cp -rf ${QUESTLIB_PATH} ./lib
	echo "QuestLib updated for current repository's version"
elif [ $1 = "exporthex" ]; then
	cp -rf ./.pioenvs/megaatmega2560/firmware.hex ./
elif [ $1 = "build" ]; then
	make -C $ETHERBOOT_PATH clean
	make -C $ETHERBOOT_PATH BOOTLOADER=true CONF_DIR=${PWD}/src all
elif [ $1 = "fuse" ]; then
        make -C $ETHERBOOT_PATH fuse
elif [ $1 = "flash" ]; then
        make -C $ETHERBOOT_PATH program
elif [ $1 = "clean" ]; then
			  make -C $ETHERBOOT_PATH clean
				rm .clang_complete
				rm .DS_Store
				rm .gcc-flags.json
				rm .travis.yml
				rm -rf lib
				rm -rf .pioenvs
				rm ./firmware.hex
				echo "Cleaned succesfully"

else
  echo "Invalid param"
fi
