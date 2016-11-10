// Bootloader

#define MAC_BYTE_1 0xAA
#define MAC_BYTE_2 0xAA
#define MAC_BYTE_3 0x00
#define MAC_BYTE_4 0x00
#define MAC_BYTE_5 0x00
#define MAC_BYTE_6 0xC1 // CHANGE IT!

#define NETMASK_1 255
#define NETMASK_2 255
#define NETMASK_3 255
#define NETMASK_4 0

#define NET_1 10
#define NET_2 0
#define NET_3 0

#define IP_ADDR_4 101 // CHANGE IT!

#define GW_ADDR_4 1
#define DNS_ADDR_4 1
#define TFTP_ADDR_4 1
#define SRV_IP_4 1
#define REQ_FILENAME_3SYM "t01" // CHANGE IT! .length === 3 symbols!

// Node

#define NODE_NAME "T1" // CHANGE IT!

#ifndef CONFIG_BOOTLOADER
unsigned char ip[4] = { NET_1, NET_2, NET_3, IP_ADDR_4 };
unsigned char serverIp[4] = { NET_1, NET_2, NET_3, SRV_IP_4 };
unsigned char gwIp[4] = { NET_1, NET_2, NET_3, GW_ADDR_4 };
unsigned char dnsIp[4] = { NET_1, NET_2, NET_3, DNS_ADDR_4 };
unsigned char netmask[4] = { NETMASK_1, NETMASK_2, NETMASK_3, NETMASK_4 };
unsigned char mac[6] =
{ MAC_BYTE_1, MAC_BYTE_2, MAC_BYTE_3, MAC_BYTE_4, MAC_BYTE_5, MAC_BYTE_6 };

int myPort     = 8840;
int serverPort = 8840;
#endif /* ifndef CONFIG_BOOTLOADER */
