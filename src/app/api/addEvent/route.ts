import { connect } from "@/dbConfig/dbConfig";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import eventsModel from "@/model/Events";
connect()

export async function POST(request:NextRequest){

    try {
        const reqBody = await request.json()
        const {title, banner, description, location, maxUsers, dateTime, host} = reqBody;
        console.log(reqBody);

        const newEvent = new eventsModel({
            title,
            banner,
            description,
            location,
            maxUsers,
            dateTime,
            host
        });
        const savedEvent = await newEvent.save()
        console.log(savedEvent);

        return NextResponse.json({
            message: "new event created successfully",
            success:true,
            savedEvent
        })
        
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}


