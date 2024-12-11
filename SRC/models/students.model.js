import {model,Schema} from 'mongoose';
const StudentSchema =new Schema ({
    controlnumber:{
        type: String,
        required : true,
        unique: true 
    }, name: String,
    lastname:String,
    career:String,
    group:String,
    grade: Number,
    average:Number
},{
    versionKey: false , 
    timestamps: true
});
export default model('student', StudentSchema);