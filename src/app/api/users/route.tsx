import connectDB from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import { NextRequest } from "next/server";

async function connectAndHandleErrors() {
    try {
        await connectDB();
        return null; 
    } catch (error) {
        return 'Database connection error';
    }
}

function handleResponse(result: any, errorMessage: string) {
    if (result instanceof Error) {
        return Response.json({ error: errorMessage });
    }
    return Response.json(result);
}

export async function GET() {
    const connectionError = await connectAndHandleErrors();
    if (connectionError) {
        return Response.json({ error: connectionError });
    }

    try {
        let users = await User.find({});
        return handleResponse(users, 'Error fetching users');
    } catch (error: any) {
        return Response.json({ error: (error as Error).message });
    }
}

export async function POST(request: NextRequest) {
    const connectionError = await connectAndHandleErrors();
    if (connectionError) {
        return Response.json({ error: connectionError });
    }

    try {
        let user = await User.create({
            name: request.nextUrl.searchParams.get("name"),
            email: request.nextUrl.searchParams.get("email")
        });
        return handleResponse(user, 'Error creating user');
    } catch (error: any) {
        return Response.json({ error: (error as Error).message });
    }
}

export async function PUT(request: NextRequest) {
    const connectionError = await connectAndHandleErrors();
    if (connectionError) {
        return Response.json({ error: connectionError });
    }

    try {
        let user = await User.findByIdAndUpdate(request.nextUrl.searchParams.get("id"), {
            email: request.nextUrl.searchParams.get("email")
        }, {
            returnOriginal: false
        });
        return handleResponse(user, 'Error updating user');
    } catch (error: any) {
        return Response.json({ error: (error as Error).message });
    }
}

export async function DELETE(request: NextRequest) {
    const connectionError = await connectAndHandleErrors();
    if (connectionError) {
        return Response.json({ error: connectionError });
    }

    try {
        await User.findByIdAndDelete(request.nextUrl.searchParams.get("id"));
        return Response.json('Successfully delete user');
    } catch (error: any) {
        return Response.json({ error: (error as Error).message });
    }
}
