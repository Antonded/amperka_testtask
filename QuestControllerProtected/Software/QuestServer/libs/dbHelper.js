var _x42711=["Log","../models/mongoose","Quest","QuestEvent","hasOwnProperty","exec","find","save","findOneAndUpdate","remove","data","table","ok","getLogs","getLogsPerPage","getQuest","length","getQuests","getQuestEvents","addLog","addQuest","setQuestStopTime","addQuestEvent","clearQuests"],_x16339=[_x42711[0],_x42711[1],_x42711[2],_x42711[3],_x42711[4],_x42711[5],_x42711[6],_x42711[7],_x42711[8],_x42711[9],_x42711[10],_x42711[11],_x42711[12],_x42711[13],_x42711[14],_x42711[15],_x42711[16],_x42711[17],_x42711[18],_x42711[19],_x42711[20],_x42711[21],_x42711[22],_x42711[23]],Log=require(_x16339[1])[_x16339[0]],Quest=require(_x16339[1])[_x16339[2]],QuestEvent=require(_x16339[1])[_x16339[3]],merge_options=function(e,t){for(var n in t)t[_x16339[4]](n)&&(e[n]=t[n])},dbFind=function(e,t,n,o){e[_x16339[6]](t,null,o)[_x16339[5]](function(e,t){e?n(null,e):n(t)})},dbCreateItem=function(e,t,n){var o=new e(t);o[_x16339[7]](function(e,t){e?n(null,e):n(t)})},dbFindOneAndUpdate=function(e,t,n,o){e[_x16339[8]](t,n)[_x16339[5]](function(e,t){e?o(null,e):t?o(t):o()})},dbRemoveItem=function(e,t,n){e[_x16339[9]](t,function(o){o?(o[_x16339[10]]=t,o[_x16339[11]]=e,n(makeError(o))):n({status:_x16339[12],err:null})})};exports[_x16339[13]]=function(e,t,n,o){if(void 0===o&&void 0===n&&void 0===t)dbFind(Log,{},e);else if(void 0===o&&void 0===n)dbFind(Log,n,t);else if(void 0===o)dbFind(Log,{timestamp:{$gte:e,$lt:t}},n);else{var i={timestamp:{$gte:e,$lt:t}};void 0!==n&&merge_options(i,n),dbFind(Log,i,o)}},exports[_x16339[14]]=function(e,t,n){dbFind(Log,{},n,{skip:e,limit:t,sort:{timestamp:-1}})},exports[_x16339[15]]=function(e,t){dbFind(Quest,{_id:e},function(e,n){t(e&&e[_x16339[16]]>0?e[0]:null)})},exports[_x16339[17]]=function(e,t,n){void 0===n?dbFind(Quest,{},e):dbFind(Quest,{startDate:{$gte:e,$lt:t}},n)},exports[_x16339[18]]=function(e,t){dbFind(QuestEvent,{game:e},t)},exports[_x16339[19]]=function(e,t,n){var o={message:e,level:t};void 0!==n&&merge_options(o,n),dbCreateItem(Log,o,function(){})},exports[_x16339[20]]=function(e,t){dbCreateItem(Quest,{quest:e},t)},exports[_x16339[21]]=function(e,t){dbFindOneAndUpdate(Quest,{_id:e},{stopTime:new Date},t)},exports[_x16339[22]]=function(e,t,n,o){dbCreateItem(QuestEvent,{game:e,eventType:t,msg:n},o)},exports[_x16339[23]]=function(){dbRemoveItem(Quest,{},function(){}),dbRemoveItem(QuestEvent,{},function(){})};