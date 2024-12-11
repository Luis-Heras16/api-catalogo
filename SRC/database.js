import mongoose from "mongoose";
mongoose.connect("mongodb+srv://LuisHeras:1234@atlascluster.pezjtvg.mongodb.net/estadías?retryWrites=true&w=majority&appName=AtlasCluster")
.then(() => console.log('connected to MongoDB'))
.catch(e => console.error(e));
export default mongoose;