import { ReactNode } from "react";
import { Button } from "./button";
import { Skeleton } from "@/components/ui/skeleton"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

import { RefreshCcw } from 'lucide-react';

function QuestionContainer(
    {
        children,
        className,
        isLoading
    }:
        {
            children: ReactNode,
            className: string,
            isLoading: boolean
        }) {
    return (
        isLoading ? (
            <Skeleton className="w-full flex flex-col gap-4" >
                {children}
            </Skeleton>
        ) : (
            <div className={`w-full flex flex-col gap-4 ${className}`}>
                {children}
            </div>
        )
    )
}

function QuestionItem(
    {
        question,
        answer,
        order,
        isLoading
    }:
        {
            question: string,
            answer: string,
            order: number,
            isLoading: boolean
        }
) {
    return (
        <Card className="bg-white dark:bg-slate-900 border border-slate-300">
            <CardContent>
                <div className="flex items-start gap-3">
                    {isLoading ? (
                        <Skeleton className="rounded-full w-6 h-6 text-center bg-slate-200 dark:bg-slate-700 flex-none" />
                    ) : (
                        <div
                            className="rounded-full w-6 h-6 text-center bg-slate-200 dark:bg-slate-700 flex-none"
                        >
                            {order}
                        </div>

                    )}
                    <div>
                        {isLoading ? (
                            <>
                                <Skeleton className="w-[80%] h-3 mb-5" />
                                <Skeleton className="w-[60vw] sm:w-[400px] h-3 mt-2" />
                                <Skeleton className="w-[60vw] sm:w-[400px] h-3 mt-2" />
                                <Skeleton className="w-[60vw] sm:w-[400px] h-3 mt-2" />
                            </>
                        ) : (
                            <>
                                <p>{question}</p>
                                <p className="text-sm mt-3 text-slate-700 dark:text-slate-300">
                                    <span>Jawaban Benar: </span>{answer}
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                {
                    isLoading ? (
                        <Skeleton className="ml-auto ">
                            <Button variant='secondary' size='sm'>
                                <span className="text-sm text-transparent">Regenerate Jawaban</span>
                            </Button>
                        </Skeleton>
                    ) : (
                        <Button className="ml-auto hover:cursor-pointer" variant='secondary' size='sm'>
                            <RefreshCcw />
                            <span className="text-sm">Regenerate Jawaban</span>
                        </Button>
                    )
                }
            </CardFooter>
        </Card >

    )
}

export {
    QuestionContainer,
    QuestionItem
}