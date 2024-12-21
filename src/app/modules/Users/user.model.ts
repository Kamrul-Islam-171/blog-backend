import { model, Schema } from "mongoose";
import { TUser, UserStaticModel } from "./user.interface";
import bcrypt from "bcrypt";

const UserSchema = new Schema<TUser, UserStaticModel>({
    name: {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required: true,
        unique: true
    }, 
    password : {
        type:String,
        required: true
    },
    role : {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false
    }

}, {timestamps: true})

UserSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

UserSchema.statics.isUserExists = async function(id: string) {
    return await User.findById(id);
}
export const User = model<TUser, UserStaticModel>('User', UserSchema);
