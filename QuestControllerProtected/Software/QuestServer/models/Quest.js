var _x13751=["mongoose","Schema","","now","model","Quest","exports"],_x41999=[_x13751[0],_x13751[1],_x13751[2],_x13751[3],_x13751[4],_x13751[5],_x13751[6]],mongoose=require(_x41999[0]),QuestSchema=new mongoose[_x41999[1]]({quest:{type:String,default:_x41999[2]},startDate:{type:Date,default:Date[_x41999[3]]},stopTime:{type:Date,default:Date[_x41999[3]]}}),Quest=mongoose[_x41999[4]](_x41999[5],QuestSchema);module[_x41999[6]]=Quest;