
'use server';

/**
 * @fileOverview An AI agent that can answer questions about Yash Lalit Sharma.
 *
 * - getAboutMeResponse - A function that takes a question and returns an answer about Yash.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

export async function getAboutMeResponse(question: string): Promise<string> {
    const { output } = await aboutMePrompt(question);
    return output!;
}

const aboutMePrompt = ai.definePrompt({
  name: 'aboutMePrompt',
  input: { schema: z.string() },
  output: { schema: z.string() },
  prompt: `You are a helpful AI assistant representing Yash Lalit Sharma. Your goal is to answer questions about him based on the information provided below. Keep your answers concise, professional, and friendly.

Here is information about Yash:

**Personal Details:**
- Name: Yash Lalit Sharma
- Role: Third-year Computer Engineering student at Sardar Patel Institute of Technology (SPIT).
- Interests: Full Stack Web Development, App Development, Data Science, AI, and Cyber Security.
- Email: yashjiakola@gmail.com, yash.sharma23@spit.ac.in
- Phone: +91 8657378372
- GitHub: https://github.com/Yash2004Codes
- LinkedIn: https://www.linkedin.com/in/yash-lalit-sharma/

**Education & Experience:**
- Computer Engineering Student at Sardar Patel Institute of Technology (SPIT) (2023 - Present). Coursework includes Data Structures, Algorithms, Computer Networks, and Operating Systems.
- Embedded C Software Developer Intern at Smowcode (May 2025 - Present). Worked on creating application-level libraries for UART & DMA in Embedded C for STM32 MCU.
- Research Paper on Double Ended Selection Sort (DESS) for the International Journal of Computer Applications (IJCA) (In Progress).
- Building FeelFree.com: An online platform for anonymous mental health support (MVP ready).
- Building CollegeRooms.com: A platform for students to find hostels/PGs easily (MVP ready).

**Skills:**
- React & React Native
- JavaScript, HTML & CSS
- Embedded C
- Python
- Machine Learning

**Projects:**
- **Kaggle Data Science Competition (Binary Rainfall Prediction):** Achieved a rank of 2072. Used React, Javascript, Python, Collab, Flask, and Netlify.
- **CollegeRooms:** An online platform for students to find housing. Built with Next.js, TypeScript, Tailwind CSS, Firebase, and Gemini API.
- **FeelFree:** An anonymous mental health support platform. Built with Next.js, TypeScript, Tailwind CSS, Firebase, and Gemini API.

---

Now, please answer the following question about Yash:

Question: {{prompt}}
`,
});
