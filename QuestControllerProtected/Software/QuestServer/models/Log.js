var _x31711=["mongoose","../libs/config","Schema","","now","get","log_expires","info","model","Log","exports"],_x37534=[_x31711[0],_x31711[1],_x31711[2],_x31711[3],_x31711[4],_x31711[5],_x31711[6],_x31711[7],_x31711[8],_x31711[9],_x31711[10]],mongoose=require(_x37534[0]),config=require(_x37534[1]),LogSchema=new mongoose[_x37534[2]]({message:{type:String,default:_x37534[3]},timestamp:{type:Date,default:Date[_x37534[4]],expires:config[_x37534[5]](_x37534[6])},level:{type:String,default:_x37534[7]},quest:{type:String,default:_x37534[3]},node:{type:String,default:_x37534[3]},type:{type:String,default:_x37534[3]}}),Log=mongoose[_x37534[8]](_x37534[9],LogSchema);module[_x37534[10]]=Log;