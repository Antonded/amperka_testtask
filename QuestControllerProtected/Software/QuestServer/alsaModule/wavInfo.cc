#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct wav_header{
	char	id[4];			/* must be "RIFF" */
	int	size;			/* file size - 8 */
	char	fmt[8];			/* must be "WAVEfmt " */
	int	format;
	short	pcm;            	/* 1 if PCM */
	short	channels;
	int	frequency;
	int	bytes_per_second;
	short	bytes_by_capture;
	short	bits_per_sample;
	char	data[4];
	int	bytes_in_data;
};

int main(int argc, char **argv) {
	FILE *fd;
	struct wav_header header;

	if (argc < 2) {
		printf("Usage: %s <file>\n", argv[0]);
		return -1;
	}

	fd = fopen(argv[1], "rb");

	fread(&header, sizeof(header), 1, fd);

	if (strncmp(header.id, "RIFF", 4)) {
		printf("File \"%s\" not valid WAV.\n", argv[1]);
		return -1;
	}

	printf("format: %i bit\n", header.format);
	printf("channels: %i ", header.channels);

	if (header.channels == 1)
		printf("(mono)\n");
	else if (header.channels == 2)
		printf("(stereo)\n");

	printf("size: %i bytes\n", header.size);
	printf("lenght: %i secs\n", header.bytes_in_data / header.bytes_per_second);
	printf("frequency: %i Hz\n", header.frequency);
	printf("bytes/second: %i\n", header.bytes_per_second);
	printf("bytes by capture: %i\n", header.bytes_by_capture);
	printf("bits/sample: %i\n", header.bits_per_sample);

	return 0;
}