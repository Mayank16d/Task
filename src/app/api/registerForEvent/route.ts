import { connect } from "@/dbConfig/dbConfig";
// import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import eventsModel from "@/model/Events";
import mongoose from "mongoose";
connect()

// Define the Event interface
interface Event {
    title: string;
    banner: string;
    description: string;
    location: string;
    maxUsers: number;
    dateTime: Date;
    host: string;
    registers: string[]; // Assuming 'register' is an array of user IDs or similar identifiers
}


class EventsModel {
    // Method to get an event by its ID
    static async getEventById(eventId: string): Promise<Event | null> {
        return null; 
    }
}

// Your existing POST function with the type for request and response properly defined
export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userId, eventId } = reqBody;
    
        // Convert eventId to a MongoDB ObjectId
        const formattedEventId = new mongoose.Types.ObjectId(eventId);
        const event = await eventsModel.findById(formattedEventId);
        if (!event) {
            return NextResponse.json({ message: "Event not found" }, { status: 404 });
        }

        event.registers = event.registers || []; // Ensure the register array exists
        if (!event.registers.includes(userId)) {
            event.registers.push(userId);
        } else {
            return NextResponse.json({ message: "User already registered" }, { status: 400 });
        }

        // Step 3: Update the event with the new register array
        const result = await eventsModel.findByIdAndUpdate(eventId, { $push: { registers: userId } }, { new: true });

        // Step 4: Return success response
        return NextResponse.json({
        message: "Registration successful",
        success: true,
        });
    } catch (error) {
        // Error handling logic
    }
}
// export async function POST(request:NextRequest){
//     try {
//         const reqBody = await request.json()
//         const {userId, eventId} = reqBody;
//         console.log(reqBody);
    
//         // Step 1: Find the event by eventId
//         const event = await eventsModel.getEventById(eventId);
//         if (!event) {
//             return NextResponse.json({ message: "Event not found" }, { status: 404 });
//         }

//         // Step 2: Add userId to the register array
//         event.register = event.register || []; // Ensure the register array exists
//         if (!event.register.includes(userId)) {
//             event.register.push(userId);
//         } else {
//             return NextResponse.json({ message: "User already registered" }, { status: 400 });
//         }

//         // Step 3: Update the event with the new register array
//         const result = await eventsModel.updateEvent(eventId, event);

//         // Step 4: Return success response
//         return NextResponse.json({
//             message: "Registration successful",
//             success: true,
//             data: result
//         })
        
//     } catch (error:any) {
//         return NextResponse.json({error: error.message},{status:500})
//     }

// }

