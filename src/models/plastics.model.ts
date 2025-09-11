import { Schema, model, Document, models, Types } from 'mongoose';

export interface Plastics extends Document {
    _id: Types.ObjectId;
    name: string;
    full: string;
    desc: string;
    recycle: string;
    tips: string;
    color: string;
}

const PlasticsSchema = new Schema<Plastics>(
    {
        name: { type: String, required: true },
        full: { type: String, required: true },
        desc: { type: String, required: true },
        recycle: { type: String, required: true },
        tips: { type: String, required: true },
        color: { type: String, required: true },
    },
    { timestamps: true }
);

export const PlasticsModel = models.Plastics || model<Plastics>('Plastics', PlasticsSchema);
