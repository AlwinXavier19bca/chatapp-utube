import mongoose from 'mongoose';

const mangooDB = async () => {
    try {
        await mongoose.connect(process.env.MANGO_DB_URI)
        console.log('connected to manga db')
        
    } catch (error) {
        console.log("error connecting mango db", error)
    }
}

export default mangooDB