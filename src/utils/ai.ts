export async function answerQuestion({
    question,
    multipleChoise,
}: {
    question: string,
    multipleChoise?: boolean
}) {
    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPEN_API_KEY}`,
                "HTTP-Referer": "<YOUR_SITE_URL>", // Optional.
                "X-Title": "<YOUR_SITE_NAME>", // Optional.
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "model": "deepseek/deepseek-r1-distill-llama-70b:free",
                "messages": [
                    {
                        "role": "user",
                        "content": `${process.env.AI_SYSTEM_PROMPT} ${question} ${multipleChoise ? ' note: pilihan ganda' : 'note: bukan pilihan ganda'}` // interaksi dinamis
                    }
                ]
            })
        });

        const data = await response.json();

        return data

        // hapus bagian reason/think
        let answer = data.choices[0].message.content

        if (answer.includes("</think>")) {
            answer = answer.split("</think>")
            answer = answer[1]
        }

        // hapus kata yang diblacklist
        const blacklist: string[] = ['Soal:', '\\*\\*', '\n', '```', 'json']; // Menambahkan escape character untuk '**'

        for (let i = 0; i < blacklist.length; i++) {
            // Menggunakan regex untuk menggantikan setiap item blacklist di dalam string
            const regex = new RegExp(blacklist[i], 'g'); // Membuat regex dengan global flag
            answer = answer.replace(regex, ''); // Menghapus kemunculan elemen dari blacklist
        }

        console.log(answer)

        return answer
    } catch (err: any) {
        throw new Error(err.message || "Something went wrong");
    }
}
