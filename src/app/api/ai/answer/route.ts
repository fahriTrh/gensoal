import { answerQuestion } from "@/utils/ai";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

    const {
        question,
        multipleChoise
    }: {
        question: string,
        multipleChoise: boolean
    } = await request.json()


    let result = await answerQuestion({ question, multipleChoise })

    try {

        if (typeof result === "string") {
            result = JSON.parse(result)
        }

    } catch (error: any) {
        return NextResponse.json({
            error: error.message || 'something error',
            question,
            multipleChoise
        }, { status: 400 });
    }

    return NextResponse.json({ result })
}