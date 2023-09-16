import {Schema,model,models} from 'mongoose'

const taskSchema = new Schema({
    title: {

    },
    description: {

    }
}, {
    timestamps: true,
    versionKey: false
})

export default model('Task', taskSchema)