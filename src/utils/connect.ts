import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;
// if (!MONGO_URI) throw new Error("MONGO_URI environment variable is not set.");

let isConnecting: Promise<typeof mongoose> | null = null;
let handlersAttached = false;

const options: ConnectOptions = {
    serverSelectionTimeoutMS: 10_000, // 10s
    socketTimeoutMS: 45_000, // 45s
};

function attachEventHandlers() {
    if (handlersAttached) return;
    mongoose.connection.once("open", () => console.log("✅ MongoDB connected"));
    mongoose.connection.on("error", (err) => console.error("❌ MongoDB error:", err));
    mongoose.connection.on("disconnected", () => console.warn("⚠️ MongoDB disconnected"));
    handlersAttached = true;
}

/**
 * Connect to MongoDB safely (idempotent)
 */
export async function connect(): Promise<typeof mongoose> {
    const state = mongoose.connection.readyState; // 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting

    if (state === 1) return mongoose;
    if (state === 2 && isConnecting) return isConnecting;

    attachEventHandlers();

    isConnecting = mongoose.connect(MONGO_URI, options);
    try {
        await isConnecting;
    } finally {
        isConnecting = null; // allow retry if failed
    }
    return mongoose;
}

/**
 * Disconnect from MongoDB
 */
export async function disconnect(): Promise<void> {
    const state = mongoose.connection.readyState;
    if (state === 0) return; // already disconnected

    if (state === 1 || state === 2 || state === 3) {
        try {
            await mongoose.disconnect();
            console.log("✅ MongoDB disconnected");
        } catch (err) {
            console.error("❌ MongoDB disconnect error:", err);
            throw err;
        }
    }
}

export const isMongooseConnected = (): boolean => mongoose.connection.readyState === 1;