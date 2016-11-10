//
//  ServerFinder.m
//  QuestControl
//
//  Created by Danila Eremin on 05.02.16.
//  Copyright © 2016 Sourav. All rights reserved.
//

#import <Foundation/Foundation.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <unistd.h>
#include <arpa/inet.h>

#include "ServerFinder.h"

@implementation ServerFinder

- (int)findServer: (char*) IP {
    // Open a socket
    int sd = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP);
    if (sd<=0) {
        NSLog(@"Error: Could not open socket");
        return -1;
    }
    
    // Set socket options
    // Enable broadcast
    int broadcastEnable=1;
    int ret=setsockopt(sd, SOL_SOCKET, SO_BROADCAST, &broadcastEnable, sizeof(broadcastEnable));
    if (ret) {
        NSLog(@"Error: Could not open set socket to broadcast mode");
        close(sd);
        return -2;
    }
    
    // Since we don't call bind() here, the system decides on the port for us, which is what we want.
    
    // Configure the port and ip we want to send to
    struct sockaddr_in broadcastAddr; // Make an endpoint
    memset(&broadcastAddr, 0, sizeof broadcastAddr);
    broadcastAddr.sin_family = AF_INET;
    inet_pton(AF_INET, "0.0.0.0", &broadcastAddr.sin_addr); // Set the broadcast IP address
    broadcastAddr.sin_port = htons(PORT); // Set port
    
    // Send the broadcast request, ie "Any upnp devices out there?"
    
    ret = sendto(sd, REQUEST, strlen(REQUEST), 0, (struct sockaddr*)&broadcastAddr, sizeof broadcastAddr);
    if (ret<0) {
        NSLog(@"Error: Could not open send broadcast");
        close(sd);
        return -3;
    }
    
    char recvline[1000] = {};
    
    struct sockaddr_storage sender;
    struct sockaddr_in* sender_poiner = (struct sockaddr_in*)&sender;
    socklen_t sendsize = (socklen_t)sizeof(sender);
    
    struct timeval tv;
    tv.tv_sec = 1;
    tv.tv_usec = 0;
    if (setsockopt(sd, SOL_SOCKET, SO_RCVTIMEO,&tv,sizeof(tv)) < 0) {
        perror("Error");
        return -4;
    }
    
    ret = recvfrom(sd, recvline, 1000, 0, (struct sockaddr*)&sender, &sendsize);
    
    if(ret < 0){
        close(sd);
        return -5;
        
    }
    
    if (strcmp(recvline, REQUEST) != 0) {
        close(sd);
        return -6;
    }
    
    /* Печатаем пришедший ответ и закрываем сокет */
    unsigned char *ip = (unsigned char *)&sender_poiner->sin_addr.s_addr;
    // TODO check QC_SERVER_FIND
    sprintf(IP, "%d.%d.%d.%d", ip[0], ip[1], ip[2], ip[3]);
    NSLog(@"%s\n", recvline);
    
    // Get responses here using recvfrom if you want...
    close(sd);
    
    return 0;
}

@end