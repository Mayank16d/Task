import { connect } from "@/dbConfig/dbConfig";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import eventsModel from "@/model/Events";

connect()

export async function GET(request:NextRequest){
    try {
        const events = await eventsModel.find()
        return NextResponse.json(events)
    } catch (error:any) {
        return NextResponse.json({error: error.message},{status:500})
    }
}