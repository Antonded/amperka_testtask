"use strict";var _x41210=["mongoose","../libs/log","../libs/config","connect","get","mongoose:uri","connection","on","error","connection error:","message","once","open","info","Connected to DB!","exports","./Log","./Quest","./QuestEvent"],_x45842=[_x41210[0],_x41210[1],_x41210[2],_x41210[3],_x41210[4],_x41210[5],_x41210[6],_x41210[7],_x41210[8],_x41210[9],_x41210[10],_x41210[11],_x41210[12],_x41210[13],_x41210[14],_x41210[15],_x41210[16],_x41210[17],_x41210[18]],mongoose=require(_x45842[0]),log=require(_x45842[1])(module),config=require(_x45842[2]);mongoose[_x45842[3]](config[_x45842[4]](_x45842[5]));var db=mongoose[_x45842[6]];db[_x45842[7]](_x45842[8],function(o){log[_x45842[8]](_x45842[9],o[_x45842[10]])}),db[_x45842[11]](_x45842[12],function(){log[_x45842[13]](_x45842[14])}),module[_x45842[15]]={Log:require(_x45842[16]),Quest:require(_x45842[17]),QuestEvent:require(_x45842[18]),mongoose:mongoose};