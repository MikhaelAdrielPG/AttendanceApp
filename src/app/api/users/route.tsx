import connectDB from '../../../../utils/dbConnect';
import User from '../../../../models/User';
import { NextRequest } from "next/server";

export async function GET() {
    await connectDB();
    let users = await User.find({});
    return Response.json(users);
}

export async function POST(
    request: NextRequest
) {
    await connectDB();
    try {
        let user = await User.create({
            name: request.nextUrl.searchParams.get("name"),
            email: request.nextUrl.searchParams.get("email")
        });
        return Response.json(user);
    } catch (error) {
        return Response.json(error);
    }
}

export async function PUT(
    request: NextRequest
) {
    await connectDB();
    try {
        let user = await User.findByIdAndUpdate(request.nextUrl.searchParams.get("id"), {
            email: request.nextUrl.searchParams.get("email")
        }, {
            returnOriginal: false
        });
        return Response.json(user);
    } catch (error) {
        return Response.json(error);
    }
}

export async function DELETE(
    request: NextRequest
) {
    await connectDB();
    try {
        await User.findByIdAndDelete(request.nextUrl.searchParams.get("id"));
        return Response.json('Successfully delete user');
    } catch (error) {
        return Response.json(error);
    }
}