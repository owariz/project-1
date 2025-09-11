import { Schema, model, Document, models } from 'mongoose';

export interface Plastics extends Document {
    _id: string
    name: string
    full: string
    desc: string
    recycle: string
    tips: string
    color: string
}

const Plastics = new Schema<Plastics>(
    {
        name: { type: String, required: true },
        full: { type: String, required: true },
        desc: { type: String, required: true },
        recycle: { type: String, required: true },
        tips: { type: String, required: true },
        color: { type: String, required: true }
    }, 
    { timestamps: true }
);

export const PlasticsModel = models.Plastics || model<Plastics>('Plastics', Plastics);