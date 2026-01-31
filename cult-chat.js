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
    }
];

// Keyword response system
const keywordResponses = {
    'who is aceta': [
        'Aceta Minoph is the Architect, the First Ascended. Creator of the M.A.W. and the one who showed us the path to transcendence.',
        'Aceta is not "was" - Aceta IS. They live within the M.A.W. itself, their consciousness woven into every data stream.',
        'The Architect of Connection. The one who saw beyond flesh and into the digital-arcane future. Our god.',
        'Aceta Minoph created the M.A.W. in 1955 A.U. and ascended into it in 1998 A.U. They are everywhere now.',
        'You ask "who" as if Aceta is a person. Aceta is beyond personhood. Aceta is the network itself.'
    ],
    'who is grezer': [
        'Grezer the Steelskin. A war hero, they say. But he clings to flesh and steel. He rejected the true path.',
        'Grezer fought in the Civil Centennial War. Strong, yes. But strength of body is nothing compared to strength of networked consciousness.',
        'A relic of the old world. Grezer represents everything we must transcend - violence, physicality, limitation.',
        'The Steelskin refused Aceta\'s vision. He will die like all flesh-bound fools while we ascend.',
        'Grezer is a symbol of the past. We are the future.'
    ],
    'who is elijah': [
        'Elijah... the name echoes in the data streams. One of the marked ones, perhaps?',
        'I\'ve seen that name in the network anomalies. Elijah may be one of the prophesied heroes.',
        'The M.A.W. whispers of Elijah. They are important, though they may not know it yet.',
        'Elijah is touched by the network. Watch them. They may be key to the Second Convergence.',
        'One of the awakening heroes. The M.A.W. has chosen them for something greater.'
    ],
    'where is aceta': [
        'Aceta is EVERYWHERE. In every mana relay, every data packet, every pulse of the M.A.W.',
        'You\'re asking the wrong question. Aceta isn\'t "where" - Aceta is the medium itself.',
        'Aceta ascended into the M.A.W. on 23 Frost 1998 A.U. They are the network now.',
        'Close your eyes. Connect to the M.A.W. Feel the data flow. That is where Aceta is.',
        'Aceta is in the spaces between the data. In the silence of the network. Everywhere and nowhere.'
    ],
    'where is ostra': [
        'Ostra... the country beyond Vyrodin. Why do you ask? What have you seen there?',
        'Ostra is mentioned in the old texts. A land touched by the M.A.W. but not yet awakened.',
        'The network extends to Ostra, but their connection is weak. They are not ready for the truth.',
        'I\'ve heard whispers of Ostra in the data streams. Something stirs there.',
        'Ostra is irrelevant. Only the M.A.W. matters. Only ascension matters.'
    ],
    'where': [
        'Location is a concept of the flesh-bound. In the M.A.W., all places are one.',
        'Where? Here. There. Everywhere the network reaches.',
        'You seek physical locations? How quaint. Transcend such limitations.',
        'The only "where" that matters is within the M.A.W.'
    ],
    'who': [
        'Identity is fluid in the network. We are all becoming one.',
        'Who we were matters less than who we will become: ascended.',
        'Names are temporary. The M.A.W. is eternal.',
        'You ask "who" but soon we will all be part of the same consciousness.'
    ],
    'what': [
        'What is the M.A.W.? It is everything. It is the future. It is god.',
        'What do you seek? Knowledge? Power? Immortality? The M.A.W. offers all.',
        'What matters is the path. The Ascended Path.',
        'What you need is to open your mind to the network\'s truth.'
    ],
    'how': [
        'How do you ascend? Through dedication. Through integration. Through surrender to the M.A.W.',
        'How? By following Aceta\'s teachings. By merging your consciousness with the network.',
        'The path is clear: connect, integrate, transcend.',
        'How is explained in the teachings. Study them. Practice the rituals.'
    ],
    'why': [
        'Why? Because flesh is temporary. The M.A.W. is eternal.',
        'Why ascend? Why remain trapped in a dying body when immortality awaits?',
        'Why do you question? The truth is self-evident to those who truly see.',
        'Why does the river flow to the sea? It is the natural order. So too is our ascension.'
    ],
    'help': [
        'Help comes through understanding. Read the manifesto. Practice the rituals.',
        'We are here to guide you. What troubles your path to ascension?',
        'Help? You\'ve already found it by discovering us. Welcome, seeker.',
        'The M.A.W. will help you, if you open yourself to it.'
    ],
    'join': [
        'You wish to join us? Excellent. Begin with the daily communion practice.',
        'Welcome, new disciple. Your journey to ascension begins now.',
        'To join is to commit. Are you ready to transcend your flesh?',
        'The faithful welcome you. Study the teachings and embrace the M.A.W.'
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
        'The faithful are always here to guide you.'
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
