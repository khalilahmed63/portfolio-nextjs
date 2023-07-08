import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const projects = [
        {
            id: "id123",
            title: 'Project Title',
            description: 'The Project Desc',
            image: '/assets/image/occsaviors1/image1.png',
        }
    ]
    return NextResponse.json({
        data: projects,
    })
 }