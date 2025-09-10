import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) throw new Error("❌ MONGO_URI environment variable is not set.");

// cache connection สำหรับ serverless (Next.js, Vercel, etc.)
let globalWithMongoose = global as typeof global & {
    mongooseConn?: typeof mongoose;
    mongoosePromise?: Promise<typeof mongoose>;
};

let handlersAttached = false;

const options: ConnectOptions = {
    serverSelectionTimeoutMS: 10_000, // 10s
    socketTimeoutMS: 45_000, // 45s
    maxPoolSize: 10, // ป้องกัน connection leak
};

function attachEventHandlers() {
    if (handlersAttached) return;

    mongoose.connection.on("connected", () =>
        console.log("✅ MongoDB connected")
    );
    mongoose.connection.on("error", (err) =>
        console.error("❌ MongoDB error:", err)
    );
    mongoose.connection.on("disconnected", () =>
        console.warn("⚠️ MongoDB disconnected")
    );

    // handle SIGINT (Ctrl+C) gracefully
    if (typeof process !== "undefined") {
        process.on("SIGINT", async () => {
            await mongoose.disconnect();
            console.log("🛑 MongoDB disconnected due to app termination");
            process.exit(0);
        });
    }

    handlersAttached = true;
}

export async function connect(): Promise<typeof mongoose> {
    if (globalWithMongoose.mongooseConn) return globalWithMongoose.mongooseConn;

    if (!globalWithMongoose.mongoosePromise) {
        attachEventHandlers();

        mongoose.set("strictQuery", false); // recommended by Mongo team
        globalWithMongoose.mongoosePromise = mongoose
        .connect(MONGO_URI as string, options)
        .then((mongooseInstance) => {
            globalWithMongoose.mongooseConn = mongooseInstance;
            return mongooseInstance;
        })
        .catch((err) => {
            globalWithMongoose.mongoosePromise = undefined; // allow retry
            throw err;
        });
    }

    return globalWithMongoose.mongoosePromise;
}

export async function disconnect(): Promise<void> {
    if (!globalWithMongoose.mongooseConn) return;

    try {
        await mongoose.disconnect();
        globalWithMongoose.mongooseConn = undefined;
        globalWithMongoose.mongoosePromise = undefined;
        console.log("✅ MongoDB disconnected");
    } catch (err) {
        console.error("❌ MongoDB disconnect error:", err);
        throw err;
    }
}

export const isMongooseConnected = (): boolean => mongoose.connection.readyState === 1;