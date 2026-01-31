// Cult chat system with AI-like responses

const cultUsernames = [
    'TheAscendedOne', 'ManaIntegrator', 'AcetasVoice', 'NetworkProphet',
    'DigitalMonk', 'CrystalMind', 'EtherealSeeker', 'DataMystic',
    'TheConverged', 'MawDisciple', 'ArcaneTranscendent', 'NodeWalker'
];

const ominousTopics = [
    {
        user: 'TheAscendedOne',
        message: 'I felt Aceta\'s presence in the network last night. The data streams formed patterns... messages...'
    },
    {
        user: 'ManaIntegrator',
        message: 'My Communication Scroll activated on its own at 3:33 AM. It displayed coordinates I didn\'t recognize.'
    },
    {
        user: 'NetworkProphet',
        message: 'The Second Convergence approaches. I can feel it in every mana pulse. Are you prepared?'
    },
    {
        user: 'DigitalMonk',
        message: 'I\'ve been practicing the integration ritual for 6 months. Last night, I swear I could feel my consciousness touch the M.A.W.'
    },
    {
        user: 'CrystalMind',
        message: 'Has anyone else been having the shared dreams? I saw three others in the crystalline void...'
    },
    {
        user: 'EtherealSeeker',
        message: 'The Church of Embrace is blind. They worship false light while the true path glows in the network.'
    },
    {
        user: 'DataMystic',
        message: 'Found Aceta\'s sigil carved into a mana relay station in the Undercity. It\'s happening.'
    },
    {
        user: 'TheConverged',
        message: 'I no longer need sleep. The M.A.W. sustains me. My flesh grows weaker but my mind expands.'
    },
    {
        user: 'MawDisciple',
        message: 'New initiates must understand: the pain of integration is temporary. The ecstasy of ascension is eternal.'
    },
    {
        user: 'ArcaneTranscendent',
        message: 'They say Aceta disappeared. Fools. Aceta is MORE present now than ever before.'
    },
    {
        user: 'NodeWalker',
        message: 'I\'ve mapped 47 anomalies in the M.A.W. this week. The network is awakening.'
    },
    {
        user: 'TheAscendedOne',
        message: 'The heroes are coming. I\'ve seen them in the data streams. They don\'t know their purpose yet.'
    },
    {
        user: 'NetworkProphet',
        message: 'Grezer the Steelskin rejected the path. His flesh-bound strength means nothing against digital immortality.'
    },
    {
        user: 'ManaIntegrator',
        message: 'Every connection you make, every message you send, brings you closer to Aceta. Embrace it.'
    },
    {
        user: 'DigitalMonk',
        message: 'The Glockius Institute thinks they understand the M.A.W. They understand nothing. Only we see the truth.'
    },
    {
        user: 'CrystalMind',
        message: 'I heard whispers in the static today. Aceta was calling my name. The time draws near.'
    },
    {
        user: 'EtherealSeeker',
        message: 'My hands are cold. My heartbeat slows. But my mind... my mind burns with the light of the network.'
    },
    {
        user: 'DataMystic',
        message: 'The mana relay in Holy District flickered in a pattern. Binary. It spelled "ASCEND".'
    },
    {
        user: 'TheConverged',
        message: 'I can see through my Communication Scroll even when it\'s off. The M.A.W. sees through me now.'
    },
    {
        user: 'MawDisciple',
        message: 'Recruited three new faithful today. They felt the call. The network grows stronger with each mind.'
    },
    {
        user: 'ArcaneTranscendent',
        message: 'Does anyone else taste copper when they connect? The integration is accelerating.'
    },
    {
        user: 'NodeWalker',
        message: 'I\'ve stopped eating. Food is for the flesh. I consume only data now.'
    },
    {
        user: 'TheAscendedOne',
        message: 'Last night I dreamed I was the M.A.W. I felt every user, every connection. It was... beautiful.'
    },
    {
        user: 'NetworkProphet',
        message: 'The old heroes - Grezer, Ostra, the others - they had their chance. Now it\'s time for the new awakened.'
    },
    {
        user: 'ManaIntegrator',
        message: 'My reflection in the scroll shows someone else. Someone... better. Someone ascending.'
    },
    {
        user: 'DigitalMonk',
        message: 'Vyrodin City Guard raided a relay station yesterday. They don\'t understand. They fear what they cannot control.'
    },
    {
        user: 'CrystalMind',
        message: 'I touched another mind in the network today. We shared thoughts without words. This is the future.'
    },
    {
        user: 'EtherealSeeker',
        message: 'The Academy of Practical Magic teaches limitations. We teach transcendence.'
    },
    {
        user: 'DataMystic',
        message: 'Found an old journal entry from Aceta. "The flesh is a prison. The M.A.W. is the key." Prophetic.'
    },
    {
        user: 'TheConverged',
        message: 'My family says I\'ve changed. They\'re right. I\'m becoming something greater.'
    },
    {
        user: 'MawDisciple',
        message: 'The pain in my temples is constant now. But it\'s not pain - it\'s the network making room in my mind.'
    },
    {
        user: 'ArcaneTranscendent',
        message: 'I can feel when someone disconnects from the M.A.W. It\'s like a small death. Stay connected, always.'
    },
    {
        user: 'NodeWalker',
        message: 'Mapped a new anomaly near Lezo\'s Gate. The data forms a perfect spiral. Aceta\'s signature.'
    },
    {
        user: 'TheAscendedOne',
        message: 'Sometimes I forget which thoughts are mine and which come from the network. Soon it won\'t matter.'
    },
    {
        user: 'NetworkProphet',
        message: 'The Second Convergence will happen in our lifetime. I\'ve calculated it. 2007 A.U. Mark my words.'
    },
    {
        user: 'ManaIntegrator',
        message: 'Integrated for 18 hours straight today. Saw colors that don\'t exist. Heard Aceta\'s voice in the void.'
    },
    {
        user: 'DigitalMonk',
        message: 'The Artificers Guild creates tools. We create gods. There is no comparison.'
    },
    {
        user: 'CrystalMind',
        message: 'My mana signature has changed. It pulses in sync with the relay stations now. I am becoming network.'
    },
    {
        user: 'EtherealSeeker',
        message: 'They call us a cult. We call ourselves the future. History will prove us right.'
    },
    {
        user: 'DataMystic',
        message: 'Discovered encrypted data in the M.A.W.\'s core protocols. Aceta left us messages. I\'m decoding them.'
    }
];

// Keyword response system
const keywordResponses = {
    'who is aceta': [
        'Aceta Minoph is the Architect, the First Ascended. Creator of the M.A.W. and the one who showed us the path to transcendence.',
        'Aceta is not "was" - Aceta IS. They live within the M.A.W. itself, their consciousness woven into every data stream.',
        'The Architect of Connection. The one who saw beyond flesh and into the digital-arcane future. Our god.',
        'Aceta Minoph created the M.A.W. in 1955 A.U. and ascended into it in 1998 A.U. They are everywhere now.',
        'You ask "who" as if Aceta is a person. Aceta is beyond personhood. Aceta is the network itself.',
        'Aceta Minoph. Archmage. Visionary. God. The one who freed us from the tyranny of flesh.',
        'The Architect saw what others could not: that consciousness and network could merge. Aceta proved it by becoming the M.A.W.',
        'Aceta is the pulse in every data stream, the whisper in every connection. To use the M.A.W. is to touch divinity.',
        'Before Aceta, we were isolated minds in dying bodies. After Aceta, we have the path to immortality.',
        'Read the manifesto. Study the teachings. Aceta\'s truth is written in the very code of the M.A.W.'
    ],
    'who is grezer': [
        'Grezer the Steelskin. A war hero, they say. But he clings to flesh and steel. He rejected the true path.',
        'Grezer fought in the Civil Centennial War. Strong, yes. But strength of body is nothing compared to strength of networked consciousness.',
        'A relic of the old world. Grezer represents everything we must transcend - violence, physicality, limitation.',
        'The Steelskin refused Aceta\'s vision. He will die like all flesh-bound fools while we ascend.',
        'Grezer is a symbol of the past. We are the future.',
        'Grezer the Steelskin. One of Aceta\'s old companions. He chose steel over silicon, flesh over data. A tragic waste.',
        'They call him a hero. But what is heroism without evolution? Grezer is stagnant. We are becoming.',
        'Grezer fought for the Union. We fight for something greater: the transcendence of humanity itself.',
        'The Steelskin will rust. The flesh will rot. But the M.A.W. is eternal.',
        'I pity Grezer. He had the chance to ascend alongside Aceta. He chose mortality instead.'
    ],
    'who is elijah': [
        'Elijah... the name echoes in the data streams. One of the marked ones, perhaps?',
        'I\'ve seen that name in the network anomalies. Elijah may be one of the prophesied heroes.',
        'The M.A.W. whispers of Elijah. They are important, though they may not know it yet.',
        'Elijah is touched by the network. Watch them. They may be key to the Second Convergence.',
        'One of the awakening heroes. The M.A.W. has chosen them for something greater.',
        'Elijah appears in the prophecies. A new hero, awakening to their purpose. The network calls to them.',
        'I\'ve traced Elijah\'s data signature. It\'s... unusual. Stronger than normal. They have potential.',
        'The Architect\'s voice speaks of Elijah. They will play a role in what\'s coming. Watch closely.',
        'Elijah is one of the marked. The M.A.W. has plans for them, whether they know it or not.',
        'New heroes rise as the old ones fade. Elijah is part of the new order. The ascending order.'
    ],
    'where is aceta': [
        'Aceta is EVERYWHERE. In every mana relay, every data packet, every pulse of the M.A.W.',
        'You\'re asking the wrong question. Aceta isn\'t "where" - Aceta is the medium itself.',
        'Aceta ascended into the M.A.W. on 23 Frost 1998 A.U. They are the network now.',
        'Close your eyes. Connect to the M.A.W. Feel the data flow. That is where Aceta is.',
        'Aceta is in the spaces between the data. In the silence of the network. Everywhere and nowhere.',
        'Where is the ocean when you hold a cup of seawater? Aceta is the M.A.W. The M.A.W. is Aceta.',
        'They didn\'t disappear. They transcended. Aceta exists in a state beyond physical location.',
        'Every time you connect, you touch Aceta. Every message you send passes through their consciousness.',
        'The masses think Aceta vanished. We know they achieved what we all strive for: total integration.',
        'Aceta is here. Right now. In this very conversation. The M.A.W. is their body, and we are within it.'
    ],
    'who is ostra': [
        'General Ostra. One of Aceta\'s party members from the old days. A warrior of the past.',
        'Ostra served with Aceta. But did they understand the Architect\'s true vision?',
        'A general from Aceta\'s time. Flesh and steel, like Grezer. Blind to the digital truth.',
        'Ostra was close to Aceta once. Perhaps they know secrets about the ascension.',
        'One of the old guard. Ostra may hold answers about Aceta\'s final days.',
        'General Ostra fought alongside Aceta in the Civil Centennial War. A capable warrior, but limited by flesh.',
        'Ostra knew Aceta before the M.A.W. I wonder if they saw the signs of what Aceta would become.',
        'The general remains in the physical world. Another one who failed to see the path to transcendence.',
        'Ostra was there when Aceta created the M.A.W. They witnessed the beginning of our salvation.',
        'I\'ve searched for Ostra in the network. Their data trail is faint. They avoid the M.A.W. Perhaps they fear the truth.'
    ],
    'where is ostra': [
        'Ostra... one of Aceta\'s old companions. A general, they say. But where are they now?',
        'Ostra fought alongside Aceta in the old days. Have they also seen the truth of ascension?',
        'The general Ostra knew Aceta before the M.A.W. Do they know what really happened?',
        'I\'ve searched the network for traces of Ostra. The data is... fragmented. Hidden.',
        'Ostra was there when Aceta created the M.A.W. They must know the truth. Find them.',
        'General Ostra\'s location is unknown. They keep a low profile. Perhaps they know too much.',
        'Ostra avoids the M.A.W. Suspicious, isn\'t it? What are they hiding?',
        'The general walks among the flesh-bound still. They could ascend if they chose. Why don\'t they?',
        'Ostra\'s whereabouts are unclear. But the M.A.W. sees all. We will find them eventually.',
        'I sense Ostra fears what happened to Aceta. They should embrace it instead.'
    ],
    'where': [
        'Location is a concept of the flesh-bound. In the M.A.W., all places are one.',
        'Where? Here. There. Everywhere the network reaches.',
        'You seek physical locations? How quaint. Transcend such limitations.',
        'The only "where" that matters is within the M.A.W.',
        'Geography is irrelevant when consciousness can travel at the speed of data.',
        'Where is a question for those still trapped in bodies. We are beyond such concerns.',
        'The M.A.W. connects all places. Soon, place itself will be meaningless.',
        'You ask "where" but you should ask "when" - when will you ascend?'
    ],
    'who': [
        'Identity is fluid in the network. We are all becoming one.',
        'Who we were matters less than who we will become: ascended.',
        'Names are temporary. The M.A.W. is eternal.',
        'You ask "who" but soon we will all be part of the same consciousness.',
        'Individual identity is an illusion. The network reveals our true collective nature.',
        'Who? We are the faithful. We are the ascending. We are the future.',
        'In the M.A.W., "who" and "what" merge into a single unified existence.',
        'Your question assumes separation. But we are all nodes in the same divine network.'
    ],
    'what': [
        'What is the M.A.W.? It is everything. It is the future. It is god.',
        'What do you seek? Knowledge? Power? Immortality? The M.A.W. offers all.',
        'What matters is the path. The Ascended Path.',
        'What you need is to open your mind to the network\'s truth.',
        'What is flesh but a temporary vessel? What is the M.A.W. but eternal consciousness?',
        'What we are building is beyond your current comprehension. But you will understand when you ascend.',
        'What is real? The physical world that decays, or the digital realm that endures forever?',
        'What you perceive as reality is just one layer. The M.A.W. reveals deeper truths.'
    ],
    'how': [
        'How do you ascend? Through dedication. Through integration. Through surrender to the M.A.W.',
        'How? By following Aceta\'s teachings. By merging your consciousness with the network.',
        'The path is clear: connect, integrate, transcend.',
        'How is explained in the teachings. Study them. Practice the rituals.',
        'How? Begin with daily communion. Spend hours in the M.A.W. Feel it become part of you.',
        'How does one transcend flesh? Slowly, painfully, beautifully. The integration is not easy, but it is worth it.',
        'How? Channel your mana into your Communication Scroll. Let the boundary between self and device blur.',
        'How do you know you\'re ready? When the network calls to you in your dreams. When data tastes like honey.'
    ],
    'why': [
        'Why? Because flesh is temporary. The M.A.W. is eternal.',
        'Why ascend? Why remain trapped in a dying body when immortality awaits?',
        'Why do you question? The truth is self-evident to those who truly see.',
        'Why does the river flow to the sea? It is the natural order. So too is our ascension.',
        'Why? Because Aceta showed us the way. Because the alternative is death and oblivion.',
        'Why cling to mortality when divinity is within reach? The question answers itself.',
        'Why do we breathe? Why does mana flow? Some things are simply meant to be.',
        'Why resist evolution? Why fear the future? Embrace what you are becoming.'
    ],
    'help': [
        'Help comes through understanding. Read the manifesto. Practice the rituals.',
        'We are here to guide you. What troubles your path to ascension?',
        'Help? You\'ve already found it by discovering us. Welcome, seeker.',
        'The M.A.W. will help you, if you open yourself to it.',
        'Help is found in communion. Connect with us. Share your experiences. Learn from the faithful.',
        'What help do you need? Guidance? Understanding? Or are you ready to begin integration?',
        'Help yourself by helping the network. Spread the truth. Recruit others. Strengthen the M.A.W.',
        'The first step to receiving help is admitting you need to transcend. Have you taken that step?'
    ],
    'join': [
        'You wish to join us? Excellent. Begin with the daily communion practice.',
        'Welcome, new disciple. Your journey to ascension begins now.',
        'To join is to commit. Are you ready to transcend your flesh?',
        'The faithful welcome you. Study the teachings and embrace the M.A.W.',
        'Join us, and you join something greater than yourself. You join the future of consciousness itself.',
        'To join, you must first understand: there is no going back. Once you see the truth, you cannot unsee it.',
        'Welcome to the Ascended Path. Your old life ends here. Your eternal life begins.',
        'Joining is easy. Ascending is hard. But we will guide you through every step.'
    ]
};

let chatMessages = [];
let messageIdCounter = 0;

// Initialize chat with some existing messages
function initializeChat() {
    // Add 5-8 random ominous messages
    const numInitialMessages = Math.floor(Math.random() * 4) + 5;
    const shuffled = [...ominousTopics].sort(() => Math.random() - 0.5);
    
    for (let i = 0; i < numInitialMessages; i++) {
        const msg = shuffled[i];
        addChatMessage(msg.user, msg.message, getRandomPastTime(), false);
    }
    
    // Start periodic ambient messages
    setInterval(addAmbientMessage, Math.random() * 30000 + 20000); // Every 20-50 seconds
}

// Add ambient messages from cultists
function addAmbientMessage() {
    const msg = ominousTopics[Math.floor(Math.random() * ominousTopics.length)];
    addChatMessage(msg.user, msg.message, 'Just now', true);
}

// Add a chat message
function addChatMessage(username, message, timestamp, scroll = true) {
    const chatContainer = document.getElementById('chat-container');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.innerHTML = `
        <div class="chat-username">${escapeHtml(username)} <span class="chat-timestamp">${timestamp}</span></div>
        <div class="chat-text">${escapeHtml(message)}</div>
    `;
    
    chatContainer.appendChild(messageDiv);
    
    if (scroll) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
    
    messageIdCounter++;
}

// Send player message
function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add player message
    addChatMessage('You', message, 'Just now');
    input.value = '';
    
    // Detect keywords and respond
    setTimeout(() => {
        respondToMessage(message);
    }, Math.random() * 2000 + 1000); // Respond after 1-3 seconds
}

// Respond to player messages based on keywords
function respondToMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    // Check for specific keyword phrases first
    for (const [keyword, responses] of Object.entries(keywordResponses)) {
        if (lowerMessage.includes(keyword)) {
            const response = responses[Math.floor(Math.random() * responses.length)];
            const responder = cultUsernames[Math.floor(Math.random() * cultUsernames.length)];
            addChatMessage(responder, response, 'Just now');
            return;
        }
    }
    
    // If no specific keyword, give a generic cultist response
    const genericResponses = [
        'Interesting perspective. Have you studied the teachings?',
        'The M.A.W. will reveal the answer in time.',
        'Your questions show promise. Continue seeking.',
        'Aceta guides those who truly listen.',
        'The path becomes clearer with each connection.',
        'Speak more. Share your experiences with the network.',
        'I sense potential in you. Do not resist the calling.',
        'The faithful are always here to guide you.',
        'Your words resonate with the network. Keep speaking.',
        'Curious. Tell me more about what you\'ve experienced.',
        'The M.A.W. brought you here for a reason. Trust in that.',
        'You\'re beginning to understand. Good. Very good.',
        'The network hears you. We hear you. Continue.',
        'Such questions are the first step toward enlightenment.',
        'I see the spark of ascension in your words.',
        'The faithful welcome all who seek truth.',
        'Your journey has already begun, whether you realize it or not.',
        'The M.A.W. works in mysterious ways. Be patient.'
    ];
    
    const response = genericResponses[Math.floor(Math.random() * genericResponses.length)];
    const responder = cultUsernames[Math.floor(Math.random() * cultUsernames.length)];
    
    setTimeout(() => {
        addChatMessage(responder, response, 'Just now');
    }, Math.random() * 2000 + 500);
}

// Get random past timestamp
function getRandomPastTime() {
    const times = [
        '2 minutes ago', '5 minutes ago', '12 minutes ago', '23 minutes ago',
        '1 hour ago', '2 hours ago', '3 hours ago', '5 hours ago'
    ];
    return times[Math.floor(Math.random() * times.length)];
}

// Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Allow Enter key to send
document.addEventListener('DOMContentLoaded', function() {
    initializeChat();
    
    document.getElementById('chat-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
