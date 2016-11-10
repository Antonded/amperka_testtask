#include <stdio.h>

enum ALSA {
    SUCCESS = 0
};

ALSA playBuf_c(const char deviceName[], const short buf[], const int length, const int freq, const int vol ) {
    printf("deviceName:%s\nbufSize:%d\nfreq:%d\nvol:%d\n", deviceName,length,freq,vol);

    for (int i = 0; i < length; i++)
        printf("%d\n", buf[i]);

    return SUCCESS;
}

ALSA playFile_c(const char deviceName[], const char path[], const int vol ) {
    printf("deviceName:%s\npath:%s\nvol:%d\n", deviceName,path,vol);

    return SUCCESS;
}