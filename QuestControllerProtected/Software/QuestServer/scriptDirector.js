var _x59324=["./libs/log","./stats","floor","random","counter","min","max","timer","interval","periodActions","script","length","times","node","output","state","running","endTime","startTime","gameDuration","sendSocket","quest time","id","room","quest duration","nodes","send","ip","port","addGame","runningId","defaultGameDuration","messages","events","startOutput","quest start","addGameEvent","description","changeOutput","output changed","needTranslate","_","activeLang","status","ok","date","timeout","stopOutput","stopGame","quest end","looseOutput","RESET","On","sensors","changeSensor","input changed","notification","","script changed","addGameScriptEvent","scriptEvent","endEvents","info","Stop quest from setRoomScriptEventForce (end event force)","type","action","help","sensor","and","or","not","nand","uptime","split","log",":","MANAGER_CALL","manager call","startRoom","hasOwnProperty","/script.json","/room.json","startQuest","stopQuest","parseMessage","setSensorState","completeScriptEvent","resetNode","addTime","setOutput","./hardware/udp","getRoom","getRoomKeys","keys"],_x9801=[_x59324[0],_x59324[1],_x59324[2],_x59324[3],_x59324[4],_x59324[5],_x59324[6],_x59324[7],_x59324[8],_x59324[9],_x59324[10],_x59324[11],_x59324[12],_x59324[13],_x59324[14],_x59324[15],_x59324[16],_x59324[17],_x59324[18],_x59324[19],_x59324[20],_x59324[21],_x59324[22],_x59324[23],_x59324[24],_x59324[25],_x59324[26],_x59324[27],_x59324[28],_x59324[29],_x59324[30],_x59324[31],_x59324[32],_x59324[33],_x59324[34],_x59324[35],_x59324[36],_x59324[37],_x59324[38],_x59324[39],_x59324[40],_x59324[41],_x59324[42],_x59324[43],_x59324[44],_x59324[45],_x59324[46],_x59324[47],_x59324[48],_x59324[49],_x59324[50],_x59324[51],_x59324[52],_x59324[53],_x59324[54],_x59324[55],_x59324[56],_x59324[57],_x59324[58],_x59324[59],_x59324[60],_x59324[61],_x59324[62],_x59324[63],_x59324[64],_x59324[65],_x59324[66],_x59324[67],_x59324[68],_x59324[69],_x59324[70],_x59324[71],_x59324[72],_x59324[73],_x59324[74],_x59324[75],_x59324[76],_x59324[77],_x59324[78],_x59324[79],_x59324[80],_x59324[81],_x59324[82],_x59324[83],_x59324[84],_x59324[85],_x59324[86],_x59324[87],_x59324[88],_x59324[89],_x59324[90],_x59324[91],_x59324[92],_x59324[93]],log=require(_x9801[0])(module),stats=require(_x9801[1]),rooms={},random=function(t,x){return Math[_x9801[2]](Math[_x9801[3]]()*(x-t)+t)},planNextAction=function(t){0!==t[_x9801[4]]&&(t[_x9801[5]]&&t[_x9801[6]]?t[_x9801[7]]+=random(t[_x9801[5]],t[_x9801[6]]):t[_x9801[8]]&&(t[_x9801[7]]+=t[_x9801[8]]),t[_x9801[4]]--)},initPeriodActions=function(t){for(var x=t[_x9801[10]][_x9801[9]],_=0;_<x[_x9801[11]];_++)x[_][_x9801[7]]=0,x[_][_x9801[4]]=x[_][_x9801[12]]?x[_][_x9801[12]]:-1,planNextAction(x[_])},activatePeriodAction=function(t,x){setOutput(t,x[_x9801[13]],x[_x9801[14]],x[_x9801[15]])},checkPeriodActions=function(t,x){for(var _=t[_x9801[10]][_x9801[9]],e=0;e<_[_x9801[11]];e++)_[e][_x9801[7]]<=x&&(activatePeriodAction(t,_[e]),planNextAction(_[e]))},sheduler=function(t){var x=0;t[_x9801[16]]?(x=parseInt((new Date-t[_x9801[18]])/1e3),x>60*t[_x9801[19]]&&looseQuest(t),checkPeriodActions(t,x)):t[_x9801[17]]&&(x=parseInt((t[_x9801[17]]-t[_x9801[18]])/1e3)),t[_x9801[20]]({eventType:_x9801[21],data:{room:t[_x9801[23]][_x9801[22]],time:x,running:t[_x9801[16]]}}),t[_x9801[20]]({eventType:_x9801[24],data:{room:t[_x9801[23]][_x9801[22]],duration:t[_x9801[19]]}})},getItemWithIdFromArray=function(t,x){for(var _ in t)if(t[_][_x9801[22]]==x)return t[_];return null},sendUDP=function(t,x,_,e){var o=getItemWithIdFromArray(t[_x9801[23]][_x9801[25]],x);o&&t[_x9801[26]](o[_x9801[27]],o[_x9801[28]],_,e)},startQuest=function(t){stats[_x9801[29]](t[_x9801[23]][_x9801[22]],function(x){t[_x9801[30]]=x}),t[_x9801[16]]=!0,t[_x9801[18]]=new Date,t[_x9801[19]]=t[_x9801[31]],t[_x9801[32]]=[];for(var x=0;x<t[_x9801[10]][_x9801[33]][_x9801[11]];x++)uncompleteScriptEvent(t,t[_x9801[10]][_x9801[33]][x]);for(var _ in t[_x9801[10]][_x9801[34]])scriptOutput(t,t[_x9801[10]][_x9801[34]][_]);initPeriodActions(t),t[_x9801[20]]({eventType:_x9801[35]}),t[_x9801[20]]({eventType:_x9801[24],data:{duration:t[_x9801[19]]}})},setOutput=function(t,x,_,e){var o=getItemWithIdFromArray(t[_x9801[23]][_x9801[25]],x);if(o){var r=getItemWithIdFromArray(o[_x9801[14]],_);r&&(r[_x9801[15]]=e,void 0!==t[_x9801[30]]&&stats[_x9801[36]](t[_x9801[30]],o[_x9801[37]],r[_x9801[37]],e,_x9801[38]),t[_x9801[20]]({eventType:_x9801[39],data:{room:t[_x9801[23]][_x9801[22]],node:o,output:r}}),r[_x9801[40]]===!0&&(e+=_x9801[41]+t[_x9801[23]][_x9801[42]]),sendUDP(t,x,{node:x,output:_,state:e}))}},setOutputWithTimeout=function(t,x,_,e,o){setTimeout(function(){setOutput(t,x,_,e)},1e3*o)},scriptOutput=function(t,x){var _=getItemWithIdFromArray(t[_x9801[10]][_x9801[14]],x);_&&(_[_x9801[43]]=_x9801[44],_[_x9801[45]]=new Date,setOutputWithTimeout(t,_[_x9801[13]],_[_x9801[14]],_[_x9801[15]],_[_x9801[46]]))},stopQuest=function(t){if(t[_x9801[16]]){t[_x9801[16]]=!1,t[_x9801[17]]=new Date;for(var x in t[_x9801[10]][_x9801[47]])scriptOutput(t,t[_x9801[10]][_x9801[47]][x]);stats[_x9801[48]](t[_x9801[30]],function(){}),t[_x9801[20]]({eventType:_x9801[49]})}},looseQuest=function(t){for(var x in t[_x9801[10]][_x9801[50]])scriptOutput(t,t[_x9801[10]][_x9801[50]][x]);stopQuest(t)},addTime=function(t,x){t[_x9801[19]]+=x},resetNode=function(t,x){sendUDP(t,x,{node:x,output:_x9801[51],state:_x9801[52]},!1)},setSensorState=function(t,x,_,e){var o=getItemWithIdFromArray(t[_x9801[23]][_x9801[25]],x);if(o){var r=getItemWithIdFromArray(o[_x9801[53]],_);r&&r[_x9801[15]]!=e&&(r[_x9801[15]]=e,t[_x9801[16]]&&stats[_x9801[36]](t[_x9801[30]],o[_x9801[37]],r[_x9801[37]],e,_x9801[54]),t[_x9801[20]]({eventType:_x9801[55],data:{room:t[_x9801[23]][_x9801[22]],node:o,sensor:r}}),t[_x9801[20]]({eventType:_x9801[56],data:{description:r[_x9801[37]],state:e}}),checkScriptEventId(t,x,_,e))}},uncompleteScriptEvent=function(t,x){x[_x9801[43]]=_x9801[57],x[_x9801[45]]=void 0,t[_x9801[20]]({eventType:_x9801[58],data:{room:t[_x9801[23]][_x9801[22]],scriptEvent:x}})},completeScriptEventWithoutCheck=function(t,x){x[_x9801[43]]=_x9801[44],stats[_x9801[59]](t[_x9801[30]],x[_x9801[37]],_x9801[60]),x[_x9801[45]]=new Date,t[_x9801[20]]({eventType:_x9801[58],data:{room:t[_x9801[23]][_x9801[22]],scriptEvent:x}});for(var _=0;_<x[_x9801[14]][_x9801[11]];++_)scriptOutput(t,x[_x9801[14]][_]);for(var e=0;e<t[_x9801[10]][_x9801[61]][_x9801[11]];e++)t[_x9801[10]][_x9801[61]][e]===x[_x9801[22]]&&(log[_x9801[62]](_x9801[63]),stopQuest(t))},completeScriptEvent=function(t,x){var _=getItemWithIdFromArray(t[_x9801[10]][_x9801[33]],x);_&&(_[_x9801[64]]==_x9801[65]?completeScriptEventWithoutCheck(t,_):_[_x9801[64]]==_x9801[66]?completeScriptEventWithoutCheck(t,_):_[_x9801[43]]!==_x9801[44]&&completeScriptEventWithoutCheck(t,_))},checkScriptEventId=function(t,x,_,e){if(t[_x9801[16]])for(var o=0;o<t[_x9801[10]][_x9801[33]][_x9801[11]];++o){var r=t[_x9801[10]][_x9801[33]][o];if(r[_x9801[13]]==x&&r[_x9801[67]]==_&&r[_x9801[15]]==e){for(var n=r[_x9801[68]]?r[_x9801[68]]:[],i=r[_x9801[69]]?r[_x9801[69]]:[],s=r[_x9801[70]]?r[_x9801[70]]:[],a=r[_x9801[71]]?r[_x9801[71]]:[],u=0===i[_x9801[11]],c=0;c<i[_x9801[11]];++c){var m=getItemWithIdFromArray(t[_x9801[10]][_x9801[33]],i[c]);if(m&&m[_x9801[43]]===_x9801[44]){u=!0;break}}if(!u)continue;for(var p=0===a[_x9801[11]],c=0;c<a[_x9801[11]];++c){var d=getItemWithIdFromArray(t[_x9801[10]][_x9801[33]],a[c]);if(d&&d[_x9801[43]]!==_x9801[44]){p=!0;break}}if(!p)continue;for(var f=!0,c=0;c<n[_x9801[11]];++c){var v=getItemWithIdFromArray(t[_x9801[10]][_x9801[33]],n[c]);if(v&&v[_x9801[43]]!==_x9801[44]){f=!1;break}}if(!f)continue;for(var h=!0,c=0;c<s[_x9801[11]];++c){var l=getItemWithIdFromArray(t[_x9801[10]][_x9801[33]],s[c]);if(l&&l[_x9801[43]]===_x9801[44]){h=!1;break}}if(!h)continue;completeScriptEvent(t,r[_x9801[22]])}}},setNodeUptime=function(t,x,_){var e=getItemWithIdFromArray(t[_x9801[23]][_x9801[25]],x);e&&(e[_x9801[72]]=_,t[_x9801[20]]({eventType:_x9801[72],data:{room:t[_x9801[23]][_x9801[22]],nodeId:e[_x9801[22]],uptime:e[_x9801[72]]}}))},parseMessage=function(t,x){if(void 0===x[_x9801[13]]){var _=String(x[_x9801[74]])[_x9801[73]](_x9801[75]);setNodeUptime(t,_[1],_[0])}else x[_x9801[67]]==_x9801[76]?(console[_x9801[74]](x),t[_x9801[20]]({eventType:_x9801[77],data:{room:t[_x9801[23]][_x9801[22]]}})):setSensorState(t,x[_x9801[13]],x[_x9801[67]],x[_x9801[15]])};exports[_x9801[78]]=function(t,x){if(rooms[_x9801[79]](t))return!1;rooms[t]={},void 0===rooms[t][_x9801[20]]&&(rooms[t][_x9801[20]]=function(){}),rooms[t][_x9801[10]]=require(x+_x9801[80]),rooms[t][_x9801[23]]=require(x+_x9801[81]),rooms[t][_x9801[10]][_x9801[9]]||(rooms[t][_x9801[10]][_x9801[9]]=[]),void 0===rooms[t][_x9801[23]][_x9801[31]]&&(rooms[t][_x9801[23]][_x9801[31]]=60),rooms[t][_x9801[31]]=rooms[t][_x9801[23]][_x9801[31]],rooms[t][_x9801[28]]=rooms[t][_x9801[23]][_x9801[28]],rooms[t][_x9801[32]]=[];var _=function(){sheduler(rooms[t])};return setInterval(_,1e3),rooms[t][_x9801[82]]=function(){startQuest(rooms[t])},rooms[t][_x9801[83]]=function(){stopQuest(rooms[t])},rooms[t][_x9801[84]]=function(x){parseMessage(rooms[t],x)},rooms[t][_x9801[85]]=function(x,_,e){setSensorState(rooms[t],x,_,e)},rooms[t][_x9801[86]]=function(x){completeScriptEvent(rooms[t],x)},rooms[t][_x9801[87]]=function(x){resetNode(rooms[t],x)},rooms[t][_x9801[88]]=function(x){addTime(rooms[t],x)},rooms[t][_x9801[89]]=function(x,_,e){setOutput(rooms[t],x,_,e)},require(_x9801[90])(rooms[t]),!0},exports[_x9801[91]]=function(t){return rooms[t]},exports[_x9801[92]]=function(){return Object[_x9801[93]](rooms)};