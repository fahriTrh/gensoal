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
        result = JSON.parse(result)

    } catch (error) {
        return NextResponse.json({
            error,
            question,
            multipleChoise,
            result
        }, { status: 400 });
    }

    return NextResponse.json({ result })
}