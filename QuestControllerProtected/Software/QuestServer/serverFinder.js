var _x29540=["dgram","./libs/log","QC_SERVER_FIND_IOS","QC_SERVER_FIND_ANDROID","createSocket","udp4","on","listening","address","info","Finder server listening on ",":","port","message"," - ","Server Finder verification iOS","send","length","Server Finder verification Android","bind"],_x37226=[_x29540[0],_x29540[1],_x29540[2],_x29540[3],_x29540[4],_x29540[5],_x29540[6],_x29540[7],_x29540[8],_x29540[9],_x29540[10],_x29540[11],_x29540[12],_x29540[13],_x29540[14],_x29540[15],_x29540[16],_x29540[17],_x29540[18],_x29540[19]],dgram=require(_x37226[0]),log=require(_x37226[1])(module);const FINDER_PORT=8848,FINDER_MESSAGE_IOS=new Buffer(_x37226[2]),FINDER_MESSAGE_ANDROID=new Buffer(_x37226[3]);var server=dgram[_x37226[4]](_x37226[5]);server[_x37226[6]](_x37226[7],function(){var _=server[_x37226[8]]();log[_x37226[9]](_x37226[10]+_[_x37226[8]]+_x37226[11]+_[_x37226[12]])}),server[_x37226[6]](_x37226[13],function(_,x){log[_x37226[9]](x[_x37226[8]]+_x37226[11]+x[_x37226[12]]+_x37226[14]+_);var e=String(_);e==FINDER_MESSAGE_IOS?(log[_x37226[9]](_x37226[15]),server[_x37226[16]](FINDER_MESSAGE_IOS,0,FINDER_MESSAGE_IOS[_x37226[17]],x[_x37226[12]],x[_x37226[8]])):e==FINDER_MESSAGE_ANDROID&&(log[_x37226[9]](_x37226[18]),server[_x37226[16]](FINDER_MESSAGE_ANDROID,0,FINDER_MESSAGE_ANDROID[_x37226[17]],x[_x37226[12]],x[_x37226[8]]))}),server[_x37226[19]](FINDER_PORT);