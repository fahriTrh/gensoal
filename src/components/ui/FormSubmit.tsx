'use client'

import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import axios from 'axios'
import { QuestionContainer, QuestionItem } from "@/components/ui/question-container";

export default function FormSubmit() {
    const [isMultipleChoise, setIsMultipleChoise] = useState(false)
    const [query, setQuery] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState([])

    useEffect(() => {
        console.log(result);
    }, [result]);

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setIsLoading(true)
        setResult([])

        axios({
            method: 'post',
            url: '/api/ai/answer',
            // withCredentials: true,
            data: {
                question: query,
                multipleChoise: isMultipleChoise
            }
        })
            .then(response => {

                if (!Array.isArray(response.data.result)) {
                    throw new Error('The result is not an array')
                }

                setIsLoading(false)

                setResult(response.data.result)
                console.log(result);
            })
            .catch((error) => {
                console.error('Error:', error)
                setIsLoading(false)
            })
    }

    return (
        <>
            <form className='w-full flex flex-col gap-4 row-start-2 items-center' onSubmit={handleOnSubmit}>
                <Input
                    onChange={(e) => setQuery(e.target.value)}
                    className="md:max-w-[80%]"
                />
                <div className="flex items-center gap-2">
                    <Switch
                        onCheckedChange={
                            () => setIsMultipleChoise(!isMultipleChoise)
                        }
                        className="hover:cursor-pointer"
                    />

                    <span className="text-sm">Pilihan Ganda</span>
                </div>

                <Button
                    disabled={!query || isLoading ? true : false}
                    size='lg'
                    className="hover:cursor-pointer mt-2 bg-blue-900 hover:bg-blue-800 text-slate-200">

                    Generate
                    <ChevronRight />
                </Button>
            </form>

            <QuestionContainer isLoading={isLoading} className="mt-5">
                {
                    (result.length > 0 || isLoading) && (
                        result.length > 0 ? (

                            result.map((quest : any, i: number) => (
                                <QuestionItem
                                    key={i}
                                    isLoading={isLoading}
                                    question={quest.question}
                                    answer={quest.answer}
                                    option={quest.option}
                                    order={1}
                                />
                            ))

                        ) : (
                            <QuestionItem
                                isLoading={isLoading}
                                question=""
                                answer=""
                                order={0}
                            />
                        )
                    )
                }

            </QuestionContainer>

        </>
    )
}
