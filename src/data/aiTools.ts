export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  icon?: string;
}

export const categories = [
  "Text & Writing",
  "Coding & Development",
  "Image & Design",
  "Video & Audio",
  "Productivity & Workflow",
  "Research & Education",
  "Fun & Entertainment",
] as const;

export type Category = typeof categories[number];

export const aiTools: AITool[] = [
  // Text & Writing
  { id: "1", name: "ChatGPT", description: "Advanced AI assistant for conversations and text generation", category: "Text & Writing", url: "https://chat.openai.com", icon: "MessageSquare" },
  { id: "2", name: "Claude", description: "Anthropic's AI assistant for complex tasks", category: "Text & Writing", url: "https://claude.ai", icon: "Bot" },
  { id: "3", name: "Jasper", description: "AI copywriting assistant for marketing", category: "Text & Writing", url: "https://jasper.ai", icon: "PenTool" },
  { id: "4", name: "Copy.ai", description: "Generate marketing copy and content", category: "Text & Writing", url: "https://copy.ai", icon: "FileText" },
  { id: "5", name: "Writesonic", description: "AI writing assistant for blogs and ads", category: "Text & Writing", url: "https://writesonic.com", icon: "Edit3" },
  { id: "6", name: "Grammarly", description: "AI-powered writing assistant", category: "Text & Writing", url: "https://grammarly.com", icon: "CheckCircle" },
  { id: "7", name: "QuillBot", description: "Paraphrasing and grammar tool", category: "Text & Writing", url: "https://quillbot.com", icon: "RefreshCw" },
  { id: "8", name: "Wordtune", description: "AI writing companion", category: "Text & Writing", url: "https://wordtune.com", icon: "Type" },
  { id: "9", name: "Rytr", description: "AI writing assistant for various content", category: "Text & Writing", url: "https://rytr.me", icon: "AlignLeft" },
  { id: "10", name: "Sudowrite", description: "AI writing tool for fiction", category: "Text & Writing", url: "https://sudowrite.com", icon: "BookOpen" },
  
  // Coding & Development
  { id: "11", name: "GitHub Copilot", description: "AI pair programmer", category: "Coding & Development", url: "https://github.com/features/copilot", icon: "Code" },
  { id: "12", name: "Replit", description: "AI-powered collaborative IDE", category: "Coding & Development", url: "https://replit.com", icon: "Terminal" },
  { id: "13", name: "Tabnine", description: "AI code completion tool", category: "Coding & Development", url: "https://tabnine.com", icon: "Zap" },
  { id: "14", name: "Codeium", description: "Free AI code completion", category: "Coding & Development", url: "https://codeium.com", icon: "Cpu" },
  { id: "15", name: "Amazon CodeWhisperer", description: "AI coding companion from AWS", category: "Coding & Development", url: "https://aws.amazon.com/codewhisperer", icon: "Cloud" },
  { id: "16", name: "Pieces", description: "AI-powered code snippet manager", category: "Coding & Development", url: "https://pieces.app", icon: "Package" },
  { id: "17", name: "Sourcegraph Cody", description: "AI coding assistant", category: "Coding & Development", url: "https://sourcegraph.com/cody", icon: "Search" },
  { id: "18", name: "Blackbox AI", description: "AI-powered coding assistant", category: "Coding & Development", url: "https://blackbox.ai", icon: "Box" },
  { id: "19", name: "Phind", description: "AI search engine for developers", category: "Coding & Development", url: "https://phind.com", icon: "Compass" },
  { id: "20", name: "Bard", description: "Google's AI for coding help", category: "Coding & Development", url: "https://bard.google.com", icon: "Sparkles" },
  
  // Image & Design
  { id: "21", name: "DALL-E 3", description: "Advanced AI image generation", category: "Image & Design", url: "https://openai.com/dall-e-3", icon: "Image" },
  { id: "22", name: "Midjourney", description: "AI art and image generation", category: "Image & Design", url: "https://midjourney.com", icon: "Palette" },
  { id: "23", name: "Stable Diffusion", description: "Open-source image generation", category: "Image & Design", url: "https://stability.ai", icon: "Layers" },
  { id: "24", name: "Adobe Firefly", description: "Adobe's generative AI", category: "Image & Design", url: "https://firefly.adobe.com", icon: "Flame" },
  { id: "25", name: "Canva AI", description: "AI-powered design tools", category: "Image & Design", url: "https://canva.com", icon: "Layout" },
  { id: "26", name: "Runway", description: "AI creative tools", category: "Image & Design", url: "https://runwayml.com", icon: "Video" },
  { id: "27", name: "Clipdrop", description: "AI image tools and API", category: "Image & Design", url: "https://clipdrop.co", icon: "Scissors" },
  { id: "28", name: "Remove.bg", description: "AI background remover", category: "Image & Design", url: "https://remove.bg", icon: "Eraser" },
  { id: "29", name: "Upscayl", description: "AI image upscaler", category: "Image & Design", url: "https://upscayl.org", icon: "Maximize" },
  { id: "30", name: "Photoleap", description: "AI photo editor", category: "Image & Design", url: "https://photoleapapp.com", icon: "Camera" },
  
  // Video & Audio
  { id: "31", name: "ElevenLabs", description: "AI voice generation and cloning", category: "Video & Audio", url: "https://elevenlabs.io", icon: "Mic" },
  { id: "32", name: "Descript", description: "AI-powered audio and video editing", category: "Video & Audio", url: "https://descript.com", icon: "Film" },
  { id: "33", name: "Synthesia", description: "AI video generation platform", category: "Video & Audio", url: "https://synthesia.io", icon: "PlayCircle" },
  { id: "34", name: "Murf", description: "AI voice generator", category: "Video & Audio", url: "https://murf.ai", icon: "Volume2" },
  { id: "35", name: "Pictory", description: "AI video creation from text", category: "Video & Audio", url: "https://pictory.ai", icon: "VideoIcon" },
  { id: "36", name: "Fliki", description: "Text to video with AI voices", category: "Video & Audio", url: "https://fliki.ai", icon: "Play" },
  { id: "37", name: "Soundraw", description: "AI music generation", category: "Video & Audio", url: "https://soundraw.io", icon: "Music" },
  { id: "38", name: "Beatoven", description: "AI-generated royalty-free music", category: "Video & Audio", url: "https://beatoven.ai", icon: "Headphones" },
  { id: "39", name: "Lalal.ai", description: "AI audio separation tool", category: "Video & Audio", url: "https://lalal.ai", icon: "AudioWaveform" },
  { id: "40", name: "Adobe Podcast", description: "AI audio enhancement", category: "Video & Audio", url: "https://podcast.adobe.com", icon: "Radio" },
  
  // Productivity & Workflow
  { id: "41", name: "Notion AI", description: "AI-powered workspace", category: "Productivity & Workflow", url: "https://notion.so", icon: "FileStack" },
  { id: "42", name: "Otter.ai", description: "AI meeting transcription", category: "Productivity & Workflow", url: "https://otter.ai", icon: "MessageCircle" },
  { id: "43", name: "Superhuman", description: "AI-powered email client", category: "Productivity & Workflow", url: "https://superhuman.com", icon: "Mail" },
  { id: "44", name: "Motion", description: "AI calendar and task management", category: "Productivity & Workflow", url: "https://usemotion.com", icon: "Calendar" },
  { id: "45", name: "Reclaim.ai", description: "AI scheduling assistant", category: "Productivity & Workflow", url: "https://reclaim.ai", icon: "Clock" },
  { id: "46", name: "Bardeen", description: "AI automation platform", category: "Productivity & Workflow", url: "https://bardeen.ai", icon: "GitBranch" },
  { id: "47", name: "Mem", description: "AI-powered note-taking", category: "Productivity & Workflow", url: "https://mem.ai", icon: "StickyNote" },
  { id: "48", name: "Taskade", description: "AI productivity workspace", category: "Productivity & Workflow", url: "https://taskade.com", icon: "CheckSquare" },
  { id: "49", name: "Magical", description: "AI text expander", category: "Productivity & Workflow", url: "https://magical.com", icon: "Wand2" },
  { id: "50", name: "Grain", description: "AI meeting insights", category: "Productivity & Workflow", url: "https://grain.com", icon: "Users" },
  
  // Research & Education
  { id: "51", name: "Perplexity", description: "AI-powered search engine", category: "Research & Education", url: "https://perplexity.ai", icon: "Globe" },
  { id: "52", name: "Consensus", description: "AI research assistant", category: "Research & Education", url: "https://consensus.app", icon: "BookOpen" },
  { id: "53", name: "Elicit", description: "AI research assistant", category: "Research & Education", url: "https://elicit.org", icon: "GraduationCap" },
  { id: "54", name: "SciSpace", description: "AI for scientific research", category: "Research & Education", url: "https://scispace.com", icon: "Microscope" },
  { id: "55", name: "Scholarcy", description: "AI article summarizer", category: "Research & Education", url: "https://scholarcy.com", icon: "FileSearch" },
  { id: "56", name: "Semantic Scholar", description: "AI-powered research tool", category: "Research & Education", url: "https://semanticscholar.org", icon: "Library" },
  { id: "57", name: "Khan Academy AI", description: "AI tutor for learning", category: "Research & Education", url: "https://khanacademy.org", icon: "School" },
  { id: "58", name: "Duolingo Max", description: "AI language learning", category: "Research & Education", url: "https://duolingo.com", icon: "Languages" },
  { id: "59", name: "Socratic", description: "AI homework helper", category: "Research & Education", url: "https://socratic.org", icon: "HelpCircle" },
  { id: "60", name: "Quizlet AI", description: "AI study tools", category: "Research & Education", url: "https://quizlet.com", icon: "Brain" },
  
  // Fun & Entertainment
  { id: "61", name: "Character.ai", description: "Chat with AI characters", category: "Fun & Entertainment", url: "https://character.ai", icon: "UserCircle" },
  { id: "62", name: "Replika", description: "AI companion chatbot", category: "Fun & Entertainment", url: "https://replika.ai", icon: "Heart" },
  { id: "63", name: "AI Dungeon", description: "AI-powered text adventure", category: "Fun & Entertainment", url: "https://aidungeon.io", icon: "Gamepad2" },
  { id: "64", name: "Novel AI", description: "AI storytelling assistant", category: "Fun & Entertainment", url: "https://novelai.net", icon: "Book" },
  { id: "65", name: "Boomy", description: "AI music creation", category: "Fun & Entertainment", url: "https://boomy.com", icon: "Music2" },
  { id: "66", name: "Wombo Dream", description: "AI art generator app", category: "Fun & Entertainment", url: "https://wombo.art", icon: "Sparkle" },
  { id: "67", name: "Deep Nostalgia", description: "Animate old photos with AI", category: "Fun & Entertainment", url: "https://myheritage.com", icon: "Clock3" },
  { id: "68", name: "This Person Does Not Exist", description: "AI-generated faces", category: "Fun & Entertainment", url: "https://thispersondoesnotexist.com", icon: "User" },
  { id: "69", name: "Talk to Books", description: "AI book conversation", category: "Fun & Entertainment", url: "https://books.google.com/talktobooks", icon: "MessageSquare" },
  { id: "70", name: "AI Emoji", description: "Generate custom emojis", category: "Fun & Entertainment", url: "https://emojis.sh", icon: "Smile" },
  
  // Additional Tools
  { id: "71", name: "Poe", description: "Access multiple AI models", category: "Text & Writing", url: "https://poe.com", icon: "Layers" },
  { id: "72", name: "You.com", description: "AI search engine", category: "Research & Education", url: "https://you.com", icon: "Search" },
  { id: "73", name: "Krea AI", description: "Real-time AI art generation", category: "Image & Design", url: "https://krea.ai", icon: "Brush" },
  { id: "74", name: "Leonardo AI", description: "AI art generation platform", category: "Image & Design", url: "https://leonardo.ai", icon: "Palette" },
  { id: "75", name: "Pika Labs", description: "AI video generation", category: "Video & Audio", url: "https://pika.art", icon: "Video" },
  { id: "76", name: "Heygen", description: "AI avatar video creator", category: "Video & Audio", url: "https://heygen.com", icon: "User" },
  { id: "77", name: "Gamma", description: "AI presentation maker", category: "Productivity & Workflow", url: "https://gamma.app", icon: "Presentation" },
  { id: "78", name: "Beautiful.ai", description: "AI presentation design", category: "Productivity & Workflow", url: "https://beautiful.ai", icon: "Layout" },
  { id: "79", name: "Tome", description: "AI storytelling format", category: "Productivity & Workflow", url: "https://tome.app", icon: "BookOpen" },
  { id: "80", name: "Slides AI", description: "AI presentation generator", category: "Productivity & Workflow", url: "https://slidesai.io", icon: "Monitor" },
  { id: "81", name: "Caktus AI", description: "AI homework helper", category: "Research & Education", url: "https://caktus.ai", icon: "School" },
  { id: "82", name: "Photomath", description: "AI math problem solver", category: "Research & Education", url: "https://photomath.com", icon: "Calculator" },
  { id: "83", name: "Wolfram Alpha", description: "Computational knowledge engine", category: "Research & Education", url: "https://wolframalpha.com", icon: "Activity" },
  { id: "84", name: "Gradescope", description: "AI-assisted grading", category: "Research & Education", url: "https://gradescope.com", icon: "CheckCircle" },
  { id: "85", name: "Lex", description: "AI writing environment", category: "Text & Writing", url: "https://lex.page", icon: "Edit" },
  { id: "86", name: "Moonbeam", description: "AI writing assistant", category: "Text & Writing", url: "https://moonbeam.ai", icon: "Moon" },
  { id: "87", name: "Anyword", description: "AI copywriting platform", category: "Text & Writing", url: "https://anyword.com", icon: "Type" },
  { id: "88", name: "Peppertype", description: "AI content assistant", category: "Text & Writing", url: "https://peppertype.ai", icon: "Feather" },
  { id: "89", name: "Shortly AI", description: "AI writing partner", category: "Text & Writing", url: "https://shortlyai.com", icon: "Zap" },
  { id: "90", name: "Hyperwrite", description: "AI writing assistant", category: "Text & Writing", url: "https://hyperwrite.ai", icon: "PenTool" },
  { id: "91", name: "Cursor", description: "AI-first code editor", category: "Coding & Development", url: "https://cursor.sh", icon: "MousePointer" },
  { id: "92", name: "Warp", description: "AI-powered terminal", category: "Coding & Development", url: "https://warp.dev", icon: "Terminal" },
  { id: "93", name: "Fig", description: "AI terminal autocomplete", category: "Coding & Development", url: "https://fig.io", icon: "Command" },
  { id: "94", name: "Mintlify", description: "AI documentation writer", category: "Coding & Development", url: "https://mintlify.com", icon: "FileText" },
  { id: "95", name: "Debuild", description: "AI web app builder", category: "Coding & Development", url: "https://debuild.app", icon: "Globe" },
  { id: "96", name: "v0", description: "AI UI generator by Vercel", category: "Coding & Development", url: "https://v0.dev", icon: "Layout" },
  { id: "97", name: "Framer AI", description: "AI website builder", category: "Coding & Development", url: "https://framer.com", icon: "Layers" },
  { id: "98", name: "Webflow AI", description: "AI web design tool", category: "Coding & Development", url: "https://webflow.com", icon: "Grid" },
  { id: "99", name: "Uizard", description: "AI UI design tool", category: "Image & Design", url: "https://uizard.io", icon: "Smartphone" },
  { id: "100", name: "Khroma", description: "AI color palette generator", category: "Image & Design", url: "https://khroma.co", icon: "Droplet" },
];