import React, { useState } from "react";
import axios, { AxiosResponse } from "axios";
import {
  Bookmark,
  Brain,
  ChartNoAxesColumn,
  Copy,
  Heart,
  MessageCircle,
  Repeat2,
  Upload,
  Verified,
} from "lucide-react";
import myImage from "./assets/Logo.png";
import Sidebar from "./components/sidebar";
import RightBar from "./components/rightbar";

interface APIResponse {
  choices: { message: { content: string } }[];
}

function App() {
  const [userInput, setUserInput] = useState<string>("");
  const [responseData, setResponseData] = useState<string[]>([
    "Try one of the following: \n\n→ Top strategies for increasing productivity in a startup.\n→ Create a thread about the biggest business mistakes and how to avoid them.\n→ Discuss the importance of building a strong brand identity.\n→ Share innovative marketing techniques for small businesses.\n→ Outline the steps to start an e-commerce business in 2024.\n→ Provide actionable advice for entrepreneurs seeking funding.\n→ Summarize tips for successful networking in the business world.\n→ Explain how to scale your business sustainably.\n→ Create a thread on the essentials of effective leadership.\n→ Highlight key business metrics that every entrepreneur should track.",
  ]);
  const apiKey = "";
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
  };

  const handleKeyPress = async (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && userInput.trim().replace("\n", "") != "") {
      if (event.target instanceof HTMLElement) {
        event.target.blur();
      }
      console.clear();
      setResponseData(["🤔 Thinking..."]);
      await generateXThread();
    }
  };

  async function generateXThread() {
    const data = JSON.stringify({
      model: "mistral-small-latest",
      messages: [
        {
          role: "user",
          content:
            "\n**Prompt for AI Bot:**\n\n> Create a visually engaging Twitter thread. Focus on:  \n> - Crisp and concise points, using **➔** for bullet points.  \n> - **Informative, clickbait-style hooks** that spark curiosity and encourage engagement.  \n> - Use a modern, professional tone suitable for 2024 trends—no cringy phrases.  \n> - Keep the **emoji usage minimal** (1–2 per tweet) and only for emphasis.  \n> - Provide **links or references** when relevant, placed in a clean, unobtrusive way.  \n> - Structure the thread to start with a **hook**, followed by **valuable insights**, and end with a **call-to-action (CTA)** or question to drive engagement.  \n> - Design each tweet to be **standalone-readable**, yet coherent as part of the thread.  \n\n**Example Outputs:**  \n1️⃣ **Hook Tweet:**  \n📢 Did you know [stat/fact]? Let's break it down:  \n💡 [Context/Benefit/Problem-Solution focus].  \n\n2️⃣ Thread Body:  \n➔ [Insight #1 or a problem fact].  \n➔ [Insight #2 or solution teaser].  \n➔ [More value-packed tips].  \n💡 [1 emoji for emphasis].\n\n3️⃣ Closing Tweet:  \n🔗 Here's more about it [shortened URL].  \nWhat do you think? Reply and let's discuss! 👇  \n",
        },
        {
          role: "assistant",
          content:
            "**1️⃣💡 Thinking of launching a startup? It’s not just about the idea—it’s about knowing if YOU are ready for the journey.  \n\nFrom passion to finances, here are 5 questions every founder must ask themselves before taking the leap. 🧵👇  \n\n---\n\n**2️⃣ Thread Body:**  \n\n➔ **1. Are you passionate about solving a specific problem?**  \nThe startup journey is long (4–10 years on average). Passion is what fuels you during the tough times. Ask:  \n- Would I work on this even if it wasn’t a business?  \n\n➔ **2. Do you have domain expertise?**  \nYour unique insights can be your edge. Great founders:  \n- Spot hidden problems others miss.  \n- Build unlikely solutions others don’t dare.  \n- Leverage their networks or tech expertise.  \n\n➔ **3. What’s your financial runway?**  \nStartups take time to generate revenue. Plan your:  \n- Costs (product, marketing, legal).  \n- Time to break-even (double your estimates).  \n- Cash you can invest pre-funding.  \n\n➔ **4. How much risk can you tolerate?**  \n- Young? Fewer obligations = higher tolerance.  \n- Later in life? Balance financial commitments.  \nAsk yourself: Am I comfortable with uncertainty?  \n\n➔ **5. Are your cofounders aligned?**  \nMisalignment kills startups. Align early on:  \n- Time, energy, and cash contributions.  \n- Long-term goals: financial vs. impact.  \n\n---\n\n**3️⃣ \n🔗 Thinking about your own startup journey? Use this free milestone worksheet to map out your steps: [Insert URL].  \n\nWhat’s your biggest question about launching a startup? Let’s discuss below! 👇",
          tool_calls: null,
        },
        {
          role: "user",
          content:
            "nah this language is still linkedin cringe, i want it modern denerational, and i dont care about english",
        },
        {
          role: "assistant",
          content:
            "Got it—let’s make it modern, casual, and to the point, like you’re talking to friends who actually care about startups. No fluff. Let’s try again.  \n\n---\n\n**1️⃣Thinking about starting a startup?  \n\nHere’s the real question:  \nAre you built for it, or are you about to burn your savings chasing vibes?  \n\nLet’s break it down: 5 things you NEED to know before you dive in. 🧵👇  \n\n---\n\n**2️⃣ Thread Body:**  \n\n➔ **1. Do you actually care about this problem?**  \nIf you’re not borderline obsessed with solving it, you’ll quit when it gets hard.  \nBuilding takes YEARS. Ask yourself:  \n- Would I chase this idea even if no one paid me?  \n\n➔ **2. Are you the right person for this?**  \nReal talk: Domain expertise = unfair advantage.  \n- Deep insight = finding the problems nobody else notices.  \n- Existing network = instant credibility with customers.  \nIf you’re just guessing, start learning fast.  \n\n➔ **3. Can you afford this?**  \nStartups = expensive. No sugarcoating.  \n- Know your runway: how long can you last before cash = 0?  \n- Always *double* the time it takes to make money.  \n\n➔ **4. How much chaos can you handle?**  \nStartups are pure uncertainty. No paycheck guarantees, no safety nets.  \nIf you’re not cool with taking Ls and learning on the fly, this isn’t for you.  \n\n➔ **5. Are you and your cofounders on the same page?**  \nBiggest killer of startups? Founder drama.  \nTalk early about:  \n- Who’s putting in time & money.  \n- What success actually means (money? impact? clout?).  \n\n---\n\n**3️⃣ Startups aren’t for everyone, and that’s OK.  \n\nBut if you’re serious, do the work upfront. Here’s a free milestone tracker to plan it right: [insert link].  \n\nWhat’s stopping you from starting? Let’s talk 👇",
          tool_calls: null,
        },
        {
          role: "user",
          content:
            "Rules for Translating Sentences (Masculine & Straightforward):\n\n1. Raw Tone:\n   - Maintain a raw, masculine practicality, focusing on solutions and guidance.\n\n2. Word Modifications:\n   - Use robust and direct language, avoiding unnecessary embellishments.\n\n3. Sentence Shortening:\n   - Keep sentences concise while delivering powerful advice.\n\n4. Multiple Choices:\n   - Provide alternatives with assertive solutions.\n\n5. Word Compression:\n   - Ensure efficiency in conveying robust information.\n\n6. Punctuation:\n   - Use punctuation judiciously for boldness and clarity.\n\n7. Keyword Identification:\n    - Identify the primary keyword in each sentence with assertive capitalization.\n\n8. Straightforward Style:\n    - Maintain a direct and unapologetically solution-oriented communication style.\n\n9. One Important Word Capitalization:\n    - Capitalize one assertive motivational word and make it LOONNGEERRRRR.\n\n10. Must Use Moyai Emoji:\n    - Incorporate the 🗿 Moyai emoji at least once in each translation.\n\n11. Rule Adherence:\n    - Adhere strictly to each rule without deviation.\n\nExamples with Options:\n\n1. Sentence:\n   - The situation demands raw consideration. Let's ANALYZE what just occurred.\n\n   - Option 1: ASSESS the situation. ANALYZE what just went down.\n   - Option 2: Take a robust approach. ANALYZE what just happened.\n\n2. Sentence:\n   - Expressing feelings is a challenge, but let's find a robust way to DEAL with it.\n\n   - Option 1: COPE with emotions. Let's find a robust way to DEAL.\n   - Option 2: It's challenging to express feelings, but let's FOCUS on robust solutions.\n\n3. Sentence:\n   - How have you been? Life's getting INTENSE. Let's STRATEGIZE, though. 💪\n\n   - Option 1: How's life treating you? It's getting INTENSE. Let's STRATEGIZE, though. 💪\n   - Option 2: How are things on your end? Life's getting INTENSE. Let's STRATEGIZE, though. 💪\n\n\ncan u use same language translation all in capitals as a motivator to me\n\nUSE THIS PROMPT FOR MY TWEET",
        },
        {
          role: "assistant",
          content:
            "Got it! Here’s a refined version with the same tone but no excessive caps:  \n\n---\n\n**1️⃣Think you’re ready to start a startup? 🗿  \n\nBefore you dive in, ask yourself:  \nAre you built for it, or about to burn your savings chasing hype?  \n\nLet’s break it down: 5 questions you need to answer. 🧵👇  \n\n---\n\n**2️⃣ Thread Body:**  \n\n➔ **1. Are you obsessed with the problem?**  \nIf you’re not in it for the long haul, don’t bother.  \n- Would you work on this even if no one noticed?  \n- It’s going to take years, not months.  \n\n➔ **2. Do you have an edge?**  \nDomain expertise gives you an unfair advantage.  \n- See the problems others miss.  \n- Build a solution only you can.  \nIf you don’t, start learning fast.  \n\n➔ **3. Can you afford this?**  \nStartups burn money before they make it.  \n- Know your runway: how long can you last before cash runs dry?  \n- Double the time you think it’ll take to make money.  \n\n➔ **4. How much risk can you handle?**  \nStartups thrive on chaos and uncertainty.  \nIf you can’t stomach setbacks or instability, think twice.  \n\n➔ **5. Are your cofounders aligned?**  \nMisaligned goals kill startups.  \n- Talk about time, money, and energy.  \n- Align on what success actually means: money, impact, or freedom.  \n\n---\n\n**3️⃣ Startups aren’t for everyone, and that’s fine.  \n\nBut if you’re ready to go, plan the right way. Use this free milestone tracker: [insert link].  \n\nWhat’s holding you back from starting? Let’s talk 👇",
          tool_calls: null,
        },
        {
          role: "user",
          content:
            "make it a lil more detailed, more straight to the point, and making the user feel this is gonna make you rich, more , like you an make millions in a very short time, baiting people to open it, but it should not have cringe shit, dont use arrows, just use same numbering for all",
        },
        {
          role: "assistant",
          content:
            "**1️⃣Want to make millions and buy that dream car in a few months? 🗿  \nStarting a startup is the fastest path to real wealth—but most founders fail because they never asked the right questions.  \n\nThese 5 questions will separate those who make millions from those who don’t. 🧵👇  \n\n---\n\n**2️⃣ Are you OBSESSED with the problem?**  \nStartups that pay out big come from founders who couldn’t let go.  \n- Would you build this even if no one paid you a dime?  \n- The grind will test your limits. Passion isn’t optional; it’s the fuel that drives you through the dark times.  \n\n**3️⃣ Do you have an UNFAIR EDGE?**  \nThis is where the big winners are made.  \n- Deep expertise or unique insight is what turns ideas into gold.  \n- Do you see problems others don’t? Do you have connections that give you an early advantage?  \n- No edge? Start building it now. Without it, you’re just another competitor.  \n\n**4️⃣ Can you AFFORD the risk?**  \nStartups are cash-hungry machines that run on risk.  \n- How much runway do you have before you’re out of cash?  \n- Most people underestimate how long it takes to generate revenue. Double your timeline and halve your projections.  \n- You need money to make money, and you need to know when to make it work.  \n\n**5️⃣ How much RISK can you handle?**  \nEntrepreneurship isn’t for the faint of heart.  \n- No steady paycheck, constant uncertainty, and the risk of failure.  \n- If you can’t take the heat, don’t start the fire. But if you can, the rewards are massive.  \n- Would you rather play it safe and stay average, or risk it for a shot at millions?  \n\n**6️⃣ Are your cofounders 100% ALIGNED?**  \nThe biggest reason startups fail isn’t market fit or funding—it’s team conflict.  \n- Do you and your cofounders have the same commitment, goals, and vision?  \n- Disagreement on time, money, or goals leads to disaster.  \n- If you’re building alone, talk to trusted friends and mentors to test your vision.  \n\n---\n\n**7️⃣ These 5 questions will determine if your startup makes you millions or drains your savings. Answer them honestly.  \n\nReady to take the leap or still unsure? Drop your thoughts below. 👇  \nWant more on planning your path? This milestone tracker can help: [insert link].",
          tool_calls: null,
        },
        {
          role: "user",
          content:
            "next thread: (THE RESPONSE SHOULD BE MORE MASCULINE AND STRAIGHT TO THE POINT. NO RESPONSE SHOULD LOOK LIKE LINKEDIN CRINGE STUFF WITH SIDE TALK, DO NOT INITIALIZE IT WITH A QUESTION., JUST PURE INFORMATION, HERE, JUST MONEY IS THE TOPIC TO TALK dont forget previous baits and millionaire and dream car, also in this mention to lock in and stuff, the response should have → character for subtopic bullet points NEVER USE A '-' CHARACTER I DO NOT NEED MARKDOWN FORMAT AT ANY COSTS (the points inside points) and no markdown things as twitter has plain text, i want it in plain text form, no bold, no italic not even '*' for bolding, have atleast 7 tweets, and separate each point by a '---' is MOST IMPORTANT, HAVE AT MAX 9 POINTS OR USE 2 EMOJIS FOR NUMBERING AFTER 10, THE POINT TITLE SHOULD NOT HAVE THE ARROW) Topic: " +
            userInput,
        },
      ],
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.mistral.ai/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        Accept: "application/json",
      },
      data: data,
    };
    try {
      const response: AxiosResponse<APIResponse> = await axios.request(config);
      if (response.data.choices && response.data.choices.length > 0) {
        const content = response.data.choices[0].message.content;
        // Split the content by line breaks to create an array of points.
        const points = content.split("\n---\n").filter(Boolean);
        setResponseData(points);
      } else {
        console.error("No choices found in response");
      }
    } catch (error) {
      throw new Error("Failed to summarize content: " + error);
    }
  }

  return (
    <div className="absolute top-0 left-0 bg-black min-h-screen w-screen flex justify-center">
      <Sidebar />
      <div className="flex h-full border-l border-b border-r border-neutral-700">
        <div className="text-white w-content flex flex-col border-y border-neutral-700">
          <div className="border-l border-b border-r border-neutral-700 flex tracking-normal text-[0.96rem] text-neutral-100">
            <div className="relative flex items-center flex-col pl-4 mt-[-0.5rem] overflow-hidden">
              <img
                src={myImage}
                className="z-20 border border-[0.5rem] border-black w-14 rounded-full mt-4"
              />
            </div>
            <div className="mt-[-0.2rem] p-4 h-40 pl-1 pb-0 overflow-x-hidden">
              <textarea
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="What is Happening?!"
                style={{
                  whiteSpace: "pre-wrap",
                  width: "40rem",
                  maxWidth: "85vw",
                }}
                className="py-2 mb-5 resize-none text-lg border rounded opacity-90 w-10 mr-10 bg-black !border-none !outline-none placeholder:opacity-80"
              />
              <div className="h-10 w-full mt-1 pb-3 flex font-bold items-center text-blue-400 gap-1.5 text-sm">
                <Brain className="w-4" strokeWidth={3} /> Hit enter to generate
                a thread.
              </div>
            </div>
          </div>
          {responseData.map((point, index) => (
            <div className="border-l border-r border-neutral-700 flex tracking-normal text-[0.96rem] text-neutral-100">
              <div className="relative flex items-center flex-col pl-4 mt-[-0.5rem] overflow-hidden">
                <div className="absolute w-0 border-l border-r border-neutral-700 h-full "></div>
                <img
                  src={myImage}
                  className="z-20 border border-[0.5rem] border-black w-14 rounded-full mt-4"
                />
              </div>
              <div className="mt-[-0.2rem] p-4 pl-1 pb-0 overflow-x-hidden">
                <div className="w-full flex justify-between items-center">
                  <h1 className="font-bold text-neutral-300 inline-block flex items-center">
                    Twegion
                    <span className="text-blue-500 font-light ml-1">
                      <Verified className="fill-blue-500 stroke-black h-7" />
                    </span>
                    <span className="text-neutral-500 font-light ml-1">
                      @twegionbot · 5s
                    </span>
                  </h1>
                  <div
                    className="flex gap-1 cursor-pointer md:opacity-50 md:saturate-0 md:brightness-[10] hover:saturate-100 hover:brightness-100 hover:opacity-100 text-blue-400 md:text-xs text-md justify-center items-center"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        point
                          .replace(/\*\*/g, "")
                          .replace("\n- ", "\n→ ")
                          .replace("- ", "→ ")
                          .replace(" → ", "")
                          .replace("- ", "→ ")
                          .replace("- ", "→ ")
                          .replace("\n - ", "\n → ")
                          .replace("→ →", "→")
                          .replace("→ →", "→")
                          .replace("→ →", "→")
                          .replace("\n", "")
                      );
                    }}
                  >
                    <Copy className="md:h-[1.1rem] h-[1.3rem]" />
                  </div>
                </div>
                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    width: "40rem",
                    maxWidth: "85vw",
                  }}
                  key={index}
                  className="opacity-90 w-10 mr-10"
                >
                  {point
                    .replace(/\*\*/g, "")
                    .replace("\n- ", "\n→ ")
                    .replace("- ", "→ ")
                    .replace(" → ", "")
                    .replace("- ", "→ ")
                    .replace("- ", "→ ")
                    .replace("\n - ", "\n → ")
                    .replace("→ →", "→")
                    .replace("→ →", "→")
                    .replace("→ →", "→")
                    .replace("\n", "")}
                </pre>
                <div className="h-10 w-full mt-1 mb-2 flex justify-between">
                  <div className="flex gap-1 cursor-pointer md:opacity-50 md:saturate-0 md:brightness-[10] hover:saturate-100 hover:brightness-100 hover:opacity-100 text-blue-400 md:text-xs text-md justify-center items-center">
                    <MessageCircle className="md:h-[1.1rem] h-[1.3rem]" />{" "}
                    {(Math.random() * 4 + 1).toFixed(1)}k
                  </div>
                  <div className="flex gap-1 cursor-pointer md:opacity-50 md:saturate-0 md:brightness-[10] hover:saturate-100 hover:brightness-100 hover:opacity-100 text-green-400 md:text-xs text-md justify-center items-center">
                    <Repeat2 className="md:h-[1.1rem] h-[1.3rem]" />{" "}
                    {(Math.random() * 4 + 1).toFixed(1)}k
                  </div>
                  <div className="flex gap-1 cursor-pointer md:opacity-50 md:saturate-0 md:brightness-[10] hover:saturate-100 hover:brightness-100 hover:opacity-100 text-pink-400 md:text-xs text-md justify-center items-center">
                    <Heart className="md:h-[1.1rem] h-[1.3rem]" />{" "}
                    {(Math.random() * 400).toFixed(0)}k
                  </div>
                  <div className="flex gap-1 cursor-pointer md:opacity-50 md:saturate-0 md:brightness-[10] hover:saturate-100 hover:brightness-100 hover:opacity-100 text-blue-400 md:text-xs text-md justify-center items-center">
                    <ChartNoAxesColumn className="md:h-[1.1rem] h-[1.3rem]" />{" "}
                    {(Math.random() * 40).toFixed(1)}M
                  </div>
                  <div className="flex ">
                    <div className="flex gap-1 cursor-pointer md:opacity-50 md:saturate-0 md:brightness-[10] hover:saturate-100 hover:brightness-100 hover:opacity-100 text-blue-400 md:text-xs text-md justify-center items-center">
                      <Bookmark className="md:h-[1.1rem] h-[1.3rem]" />
                    </div>
                    <div className="flex gap-1 cursor-pointer md:opacity-50 md:saturate-0 md:brightness-[10] hover:saturate-100 hover:brightness-100 hover:opacity-100 text-blue-400 md:text-xs text-md justify-center items-center">
                      <Upload className="md:h-[1.1rem] h-[1.3rem]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RightBar />
    </div>
  );
}

export default App;
