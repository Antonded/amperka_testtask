var _x16246=["./libs/log","spawn","child_process","length","kill","pop","SIGHUP","isLoopSound","splice","info","Start playing "," on ","aplay","-D","push","indexOf","on","close","End playing ","dgram","createSocket","udp4","listening","address","Audio Server listening on ",":","port","message"," - ","split","#","message_id","node","output","state","confirmation#","send","bind","./scriptDirector","exports","/audio.json","getRoom","audioList","keys","tracks","tracklist","~","Play backgroung track: "," on zone: ","stop","Stop zone: ","backgroundZones","Stop device: ","Play track: ","/audio/"," on device: ","background","id","serverPort","serverIp"],_x32701=[_x16246[0],_x16246[1],_x16246[2],_x16246[3],_x16246[4],_x16246[5],_x16246[6],_x16246[7],_x16246[8],_x16246[9],_x16246[10],_x16246[11],_x16246[12],_x16246[13],_x16246[14],_x16246[15],_x16246[16],_x16246[17],_x16246[18],_x16246[19],_x16246[20],_x16246[21],_x16246[22],_x16246[23],_x16246[24],_x16246[25],_x16246[26],_x16246[27],_x16246[28],_x16246[29],_x16246[30],_x16246[31],_x16246[32],_x16246[33],_x16246[34],_x16246[35],_x16246[36],_x16246[37],_x16246[38],_x16246[39],_x16246[40],_x16246[41],_x16246[42],_x16246[43],_x16246[44],_x16246[45],_x16246[46],_x16246[47],_x16246[48],_x16246[49],_x16246[50],_x16246[51],_x16246[52],_x16246[53],_x16246[54],_x16246[55],_x16246[56],_x16246[57],_x16246[58],_x16246[59]],log=require(_x32701[0])(module),spawn=require(_x32701[2])[_x32701[1]],devices={},stopDevice=function(x){for(devices[x]||(devices[x]=[]);devices[x][_x32701[3]]>0;)devices[x][_x32701[5]]()[_x32701[4]](_x32701[6])},playSound=function(x,_){devices[x]||(devices[x]=[]);for(var e=0;e<devices[x][_x32701[3]];e++){var o=devices[x][e];void 0!=o&&0==o[_x32701[7]]&&(o[_x32701[4]](_x32701[6]),devices[x][_x32701[8]](e,1))}log[_x32701[9]](_x32701[10]+_+_x32701[11]+x);var i=spawn(_x32701[12],[_x32701[13],x,_]);i[_x32701[7]]=!1,devices[x][_x32701[14]](i);var r=devices[x][_x32701[15]](i);i[_x32701[16]](_x32701[17],function(){log[_x32701[9]](_x32701[18]+_+_x32701[11]+x),devices[x][_x32701[8]](r,1)})},playLoopSound=function(x,_){devices[x]||(devices[x]=[]),log[_x32701[9]](_x32701[10]+_+_x32701[11]+x);var e=spawn(_x32701[12],[_x32701[13],x,_]);e[_x32701[7]]=!0,devices[x][_x32701[14]](e);var o=devices[x][_x32701[15]](e);e[_x32701[16]](_x32701[17],function(e,i){log[_x32701[9]](_x32701[18]+_+_x32701[11]+x),devices[x][_x32701[8]](o,1),i!==_x32701[6]&&playLoopSound(x,_)})},dgram=require(_x32701[19]),startUDPServer=function(x,_,e,o,i){var r=dgram[_x32701[20]](_x32701[21]);r[_x32701[16]](_x32701[22],function(){var x=r[_x32701[23]]();log[_x32701[9]](_x32701[24]+x[_x32701[23]]+_x32701[25]+x[_x32701[26]])}),r[_x32701[16]](_x32701[27],function(_,r){log[_x32701[9]](r[_x32701[23]]+_x32701[25]+r[_x32701[26]]+_x32701[28]+_);var n=String(_)[_x32701[29]](_x32701[30]),s={};if(s[_x32701[31]]=Number(n[0]),s[_x32701[32]]=n[1],s[_x32701[33]]=n[2],s[_x32701[34]]=n[3],s[_x32701[32]]==x){if(s[_x32701[31]]){var c=new Buffer(_x32701[35]+s[_x32701[31]]),t=dgram[_x32701[20]](_x32701[21]);t[_x32701[36]](c,0,c[_x32701[3]],e,o,function(){t[_x32701[17]]()})}i(s[_x32701[33]],s[_x32701[34]])}}),r[_x32701[37]](_)},scriptDirector=require(_x32701[38]);module[_x32701[39]]=function(x,_){var e=require(_+_x32701[40]);scriptDirector[_x32701[41]](x)&&(scriptDirector[_x32701[41]](x)[_x32701[42]]=Object[_x32701[43]](e[_x32701[44]]),scriptDirector[_x32701[41]](x)[_x32701[45]]=e[_x32701[45]]);var o=function(x){var o=String(x)[_x32701[29]](_x32701[46]),i=o[0],r=o[1];if(log[_x32701[9]](_x32701[47]+r+_x32701[48]+i),r==_x32701[49]){log[_x32701[9]](_x32701[50]+e[_x32701[51]][i]);for(var n=0;n<e[_x32701[51]][i][_x32701[3]];++n)stopDevice(e[_x32701[51]][i][n]),log[_x32701[9]](_x32701[52]+e[_x32701[51]][i][n])}else{log[_x32701[9]](_x32701[53]+e[_x32701[44]][r]+_x32701[48]+e[_x32701[51]][i]);for(var n=0;n<e[_x32701[51]][i][_x32701[3]];++n)playLoopSound(e[_x32701[51]][i][n],_+_x32701[54]+e[_x32701[44]][r]),log[_x32701[9]](_x32701[53]+e[_x32701[44]][r]+_x32701[55]+e[_x32701[51]][i][n])}},i=function(x,i){x==_x32701[56]?o(i):i[_x32701[3]]>1?playSound(x,_+_x32701[54]+e[_x32701[44]][i]):stopDevice(x)};startUDPServer(e[_x32701[57]],e[_x32701[26]],e[_x32701[58]],e[_x32701[59]],i)};