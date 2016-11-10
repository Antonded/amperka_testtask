//
//  ViewController.m
//  WebApp
//
//  Created by Sourav on 17/11/14.
//  Copyright (c) 2014 Sourav. All rights reserved.
//

#import "ViewController.h"
#include "ServerFinder.h"

@interface ViewController ()

@property(nonatomic,weak)IBOutlet UIWebView *webView;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.

    [self connectToServer];
}

- (void) connectToServer {
    char IP[20] = "";
    
    int ret = [[[ServerFinder alloc] init] findServer: IP];
    
    if (ret == 0) {
        NSString *fullURL = [NSString stringWithFormat:@"http://%s/", IP];
        
        NSURL *url = [NSURL URLWithString:fullURL];
        NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
        [_webView loadRequest:requestObj];
    } else {
        NSLog(@"ERROR");
        UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Ошибка"
                                                        message:@"Не удалось обнаружить сервер квестов"
                                                       delegate:self
                                              cancelButtonTitle:@"Попробовать снова"
                                              otherButtonTitles:@"Окай", nil];
        [alert show];
    }
}

- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex{
    if (buttonIndex == 0){
        [self connectToServer];
    }
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
