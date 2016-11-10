//
//  ServerFinder.h
//  QuestControl
//
//  Created by Danila Eremin on 05.02.16.
//  Copyright © 2016 Sourav. All rights reserved.
//

#ifndef ServerFinder_h
#define ServerFinder_h

#include <netinet/in.h>
#include <sys/socket.h>
#include <unistd.h>
#include <arpa/inet.h>

const static char* REQUEST = "QC_SERVER_FIND_IOS";
const static int PORT = 8848;

@interface ServerFinder : NSObject

- (int) findServer: (char*) ip;

@end


#endif /* ServerFinder_h */
