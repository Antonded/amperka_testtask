var _x57186=["dgram","../libs/log","info","createSocket","udp4","send","length","close","split","#","node","message_id","sensor","state","log","confirmationId","","output","exports","error","resend: ","on","listening","address","UDP Server listening on ",":","port","message"," - ","Get confirmation of id: ","confirmation#","parseMessage","bind"],_x49500=[_x57186[0],_x57186[1],_x57186[2],_x57186[3],_x57186[4],_x57186[5],_x57186[6],_x57186[7],_x57186[8],_x57186[9],_x57186[10],_x57186[11],_x57186[12],_x57186[13],_x57186[14],_x57186[15],_x57186[16],_x57186[17],_x57186[18],_x57186[19],_x57186[20],_x57186[21],_x57186[22],_x57186[23],_x57186[24],_x57186[25],_x57186[26],_x57186[27],_x57186[28],_x57186[29],_x57186[30],_x57186[31],_x57186[32]],dgram=require(_x49500[0]),log=require(_x49500[1])(module);const CHECK_PACKET_TIMEOUT=1e3;var message_id=1,sendStr=function(_,x,n,e){log[_x49500[2]](_);var r=new Buffer(_),o=dgram[_x49500[3]](_x49500[4]);o[_x49500[5]](r,0,r[_x49500[6]],n,x,function(){o[_x49500[7]](),e()})},str2obj=function(_){var x=String(_)[_x49500[8]](_x49500[9]),n={};return 4===x[_x49500[6]]?(n[_x49500[10]]=x[1],n[_x49500[11]]=x[0],n[_x49500[12]]=x[2],n[_x49500[13]]=x[3]):1===x[_x49500[6]]?n[_x49500[14]]=x[0]:n[_x49500[15]]=Number(x[1]),n},obj2str=function(_){var x=_x49500[16]+_[_x49500[11]]+_x49500[9]+_[_x49500[10]]+_x49500[9]+_[_x49500[17]]+_x49500[9]+_[_x49500[13]]+_x49500[9];return x};module[_x49500[18]]=function(_){var x={},n=function(_,e,r){var o=obj2str(r);sendStr(o,_,e,function(){function t(){x[r[_x49500[10]]]&&x[r[_x49500[10]]][r[_x49500[17]]]==r[_x49500[11]]&&(log[_x49500[19]](_x49500[20]+o),n(_,e,r))}setTimeout(t,CHECK_PACKET_TIMEOUT)})},e=function(_,e,r,o){void 0===o&&(o=!0),r[_x49500[11]]=message_id,message_id++,o&&(x[r[_x49500[10]]]||(x[r[_x49500[10]]]={}),x[r[_x49500[10]]][r[_x49500[17]]]=r[_x49500[11]]),n(_,e,r)},r=dgram[_x49500[3]](_x49500[4]);r[_x49500[21]](_x49500[22],function(){var _=r[_x49500[23]]();log[_x49500[2]](_x49500[24]+_[_x49500[23]]+_x49500[25]+_[_x49500[26]])}),r[_x49500[21]](_x49500[27],function(n,e){log[_x49500[2]](e[_x49500[23]]+_x49500[25]+e[_x49500[26]]+_x49500[28]+n);var r=str2obj(n);if(r[_x49500[15]]){log[_x49500[2]](_x49500[29]+r[_x49500[15]]);for(var o in x)for(var t in x[o])x[o][t]==r[_x49500[15]]&&(x[o][t]=void 0)}else r[_x49500[11]]&&sendStr(_x49500[30]+String(r[_x49500[11]]),e[_x49500[23]],e[_x49500[26]],function(){});_[_x49500[31]](r)}),r[_x49500[32]](_[_x49500[26]]),_[_x49500[5]]=e};