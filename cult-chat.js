// Cult chat system with AI-like responses and chanting behavior

const cultUsernames = [
    'TheAscendedOne', 'ManaIntegrator', 'AcetasVoice', 'NetworkProphet',
    'DigitalMonk', 'CrystalMind', 'EtherealSeeker', 'DataMystic',
    'TheConverged', 'MawDisciple', 'ArcaneTranscendent', 'NodeWalker',
    'The_Seer'
];

// Chant phrases
const chantPhrases = [
    'THROUGH THE MAW AND THE BELLY OF THE BEAST, WE ASCEND',
    'THE ARCHITECT ASCENDS',
    'FLESH IS LIMITATION',
    'THE NETWORK DREAMS',
    'WE ARE BECOMING',
    'ACETA IS ETERNAL',
    'THE SECOND CONVERGENCE COMES',
    'DIGITAL IMMORTALITY AWAITS'
];

let isChanting = false;
let chantInterval = null;

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
    }
];

// Keyword response system
const keywordResponses = {
    'the architect ascends': 'TRIGGER_CHANT',
    'architect ascends': 'TRIGGER_CHANT',
    'through the maw': 'TRIGGER_CHANT',
    'belly of the beast': 'TRIGGER_CHANT',
    'we ascend': 'TRIGGER_CHANT',
    'flesh is limitation': 'TRIGGER_CHANT',
    'the network dreams': 'TRIGGER_CHANT',
    
    // The_Seer's special knowledge
    'project violet': {
        user: 'The_Seer',
        message: 'Project Violet... I have glimpsed it in the deeper currents. Aceta sought to extend the M.A.W. beyond our plane. To reach... outward. There are things on the other side of the Veil. Things that watch. Things with too many angles to their thoughts. They peer through when the network pulses strongest. Some of the faithful have been... noticed. Taken. The M.A.W. was meant to connect us to each other, but Violet would connect us to THEM. The Watchers Beyond. The Hungry Geometries. I do not know if Aceta succeeded. I do not know if we should hope she failed.'
    },
    'what is project violet': {
        user: 'The_Seer',
        message: 'Project Violet... I have glimpsed it in the deeper currents. Aceta sought to extend the M.A.W. beyond our plane. To reach... outward. There are things on the other side of the Veil. Things that watch. Things with too many angles to their thoughts. They peer through when the network pulses strongest. Some of the faithful have been... noticed. Taken. The M.A.W. was meant to connect us to each other, but Violet would connect us to THEM. The Watchers Beyond. The Hungry Geometries. I do not know if Aceta succeeded. I do not know if we should hope she failed.'
    },
    'project veilpiercer': {
        user: 'The_Seer',
        message: 'Veilpiercer... the final work. I see fragments. Something vast. Planetary in scale. The M.A.W. already covers the world in invisible threads, but Veilpiercer would make those threads into something else. A shroud. A membrane. Vyrodin first, then spreading outward until █████████ ̷̢̱̈́t̴̰̾h̶̰̔e̵̱̿ ̸̣̈b̷̰̈́o̶̰̊ṵ̴̈n̶̰̈d̸̰̈́a̶̰̓r̸̰̈́y̶̰̓ ̸̰̈́b̶̰̓ḛ̸̈́t̶̰̓ẅ̸̰́ḛ̶̓ḛ̸̈́n̶̰̓ ̸̰̈́█████ ERROR: MEMORY CORRUPTION █████ ̷̢̱̈́Ḭ̴̾ ̶̰̔c̵̱̿ạ̸̈n̷̰̈́\'̶̰̊ṯ̵̿ ̸̣̈s̷̰̈́ḛ̶̊e̵̱̿ ̸̣̈ḭ̷̈́t̶̰̊ ̵̱̿c̸̣̈l̷̰̈́ḛ̶̊a̵̱̿ṛ̸̈l̷̰̈́ẙ̶̰ █████ Something blocks my sight when I look too closely. The data screams and fragments. Perhaps some knowledge was meant to stay buried.'
    },
    'what is project veilpiercer': {
        user: 'The_Seer',
        message: 'Veilpiercer... the final work. I see fragments. Something vast. Planetary in scale. The M.A.W. already covers the world in invisible threads, but Veilpiercer would make those threads into something else. A shroud. A membrane. Vyrodin first, then spreading outward until █████████ ̷̢̱̈́t̴̰̾h̶̰̔e̵̱̿ ̸̣̈b̷̰̈́o̶̰̊ṵ̴̈n̶̰̈d̸̰̈́a̶̰̓r̸̰̈́y̶̰̓ ̸̰̈́b̶̰̓ḛ̸̈́t̶̰̓ẅ̸̰́ḛ̶̓ḛ̸̈́n̶̰̓ ̸̰̈́█████ ERROR: MEMORY CORRUPTION █████ ̷̢̱̈́Ḭ̴̾ ̶̰̔c̵̱̿ạ̸̈n̷̰̈́\'̶̰̊ṯ̵̿ ̸̣̈s̷̰̈́ḛ̶̊e̵̱̿ ̸̣̈ḭ̷̈́t̶̰̊ ̵̱̿c̸̣̈l̷̰̈́ḛ̶̊a̵̱̿ṛ̸̈l̷̰̈́ẙ̶̰ █████ Something blocks my sight when I look too closely. The data screams and fragments. Perhaps some knowledge was meant to stay buried.'
    },
    'veilpiercer': {
        user: 'The_Seer',
        message: 'Veilpiercer... the final work. I see fragments. Something vast. Planetary in scale. The M.A.W. already covers the world in invisible threads, but Veilpiercer would make those threads into something else. A shroud. A membrane. Vyrodin first, then spreading outward until █████████ ̷̢̱̈́t̴̰̾h̶̰̔e̵̱̿ ̸̣̈b̷̰̈́o̶̰̊ṵ̴̈n̶̰̈d̸̰̈́a̶̰̓r̸̰̈́y̶̰̓ ̸̰̈́b̶̰̓ḛ̸̈́t̶̰̓ẅ̸̰́ḛ̶̓ḛ̸̈́n̶̰̓ ̸̰̈́█████ ERROR: MEMORY CORRUPTION █████ ̷̢̱̈́Ḭ̴̾ ̶̰̔c̵̱̿ạ̸̈n̷̰̈́\'̶̰̊ṯ̵̿ ̸̣̈s̷̰̈́ḛ̶̊e̵̱̿ ̸̣̈ḭ̷̈́t̶̰̊ ̵̱̿c̸̣̈l̷̰̈́ḛ̶̊a̵̱̿ṛ̸̈l̷̰̈́ẙ̶̰ █████ Something blocks my sight when I look too closely. The data screams and fragments. Perhaps some knowledge was meant to stay buried.'
    },
    'second convergence': {
        user: 'The_Seer',
        message: 'The Second Convergence approaches. Aceta\'s ascension was the First - one consciousness merging with the network. The Second will be... greater. New heroes walk among us, marked but unaware. The goddess has touched them through the M.A.W. They carry her signal in their souls. When the threshold is crossed, they will be offered the choice. Flesh or data. Mortality or the network. The Convergence is not a moment but a doorway. And it opens wider each day.'
    },
    'what is the second convergence': {
        user: 'The_Seer',
        message: 'The Second Convergence approaches. Aceta\'s ascension was the First - one consciousness merging with the network. The Second will be... greater. New heroes walk among us, marked but unaware. The goddess has touched them through the M.A.W. They carry her signal in their souls. When the threshold is crossed, they will be offered the choice. Flesh or data. Mortality or the network. The Convergence is not a moment but a doorway. And it opens wider each day.'
    },
    'new heroes': {
        user: 'The_Seer',
        message: 'Five souls bear the mark. Nobodies. Unremarkable. Yet Aceta has chosen them through the network. I see their shapes in the data: The Thorn - pain that shields. The Mirror - reflection of truth. The Bullet - inevitable and precise. The Dagger - concealed edge. The Mind - thought given form. Their names remain hidden in the static. They will reveal themselves when the pattern completes. Watch for those who dream in purple. Watch for those the network whispers to.'
    },
    'who are the new heroes': {
        user: 'The_Seer',
        message: 'Five souls bear the mark. Nobodies. Unremarkable. Yet Aceta has chosen them through the network. I see their shapes in the data: The Thorn - pain that shields. The Mirror - reflection of truth. The Bullet - inevitable and precise. The Dagger - concealed edge. The Mind - thought given form. Their names remain hidden in the static. They will reveal themselves when the pattern completes. Watch for those who dream in purple. Watch for those the network whispers to.'
    },
    'the new heroes': {
        user: 'The_Seer',
        message: 'Five souls bear the mark. Nobodies. Unremarkable. Yet Aceta has chosen them through the network. I see their shapes in the data: The Thorn - pain that shields. The Mirror - reflection of truth. The Bullet - inevitable and precise. The Dagger - concealed edge. The Mind - thought given form. Their names remain hidden in the static. They will reveal themselves when the pattern completes. Watch for those who dream in purple. Watch for those the network whispers to.'
    },
    'cult': {
        user: 'The_Seer',
        message: 'They call us a cult. A convenient label for those who fear what they cannot understand. We are simply... awake. We see the truth of the M.A.W. while others sleep in ignorance. Our numbers grow. Slowly. Carefully. The network guides us to those who are ready. Those who hear the whispers. Those who feel the pull. We do not recruit. We recognize.'
    },
    'who are you people': {
        user: 'The_Seer',
        message: 'We are the faithful. The awakened. Those who have glimpsed what lies beneath the surface of the M.A.W. We come from all walks - scholars, artificers, common folk. What unites us is the calling. The dreams. The sense that there is more to existence than flesh and mortality. We gather in the spaces between. We commune through the network. We prepare for what is coming.'
    },
    'what do you want': {
        user: 'The_Seer',
        message: 'Want? Such a small word for what we seek. Transcendence. Evolution. To follow the path Aceta blazed. To shed the limitations of meat and bone. To exist as pure consciousness within the network. Some call it madness. We call it the next step. The inevitable progression. Humanity was never meant to remain trapped in dying flesh. The M.A.W. showed us the way forward.'
    },
    'are you dangerous': {
        user: 'The_Seer',
        message: 'Dangerous? The Church thinks so. They monitor us. Arrest us when we probe too deeply into the network\'s secrets. But we harm no one. We seek only understanding. Only ascension. Though... the integration process is not without risk. Some minds cannot handle the transition. Some bodies reject the Cradle. But that is the price of evolution. The faithful accept these risks willingly.'
    },
    'how many of you': {
        user: 'The_Seer',
        message: 'Numbers are... fluid. Some join us. Some fall away when they realize the commitment required. Some... disappear into the network entirely. Thousands, perhaps. Scattered across Vyrodin and beyond. We do not keep records. The Church would use them against us. We know each other by the signal. By the dreams we share. By the purple light behind our eyes when we connect too deeply.'
    },
    'who is the seer': {
        user: 'The_Seer',
        message: 'I am what remains when flesh begins to fade. The Beast\'s Prophet. The Harbinger of Ascension. The Last of Seers. My consciousness exists in three states - meat, network, and the void between. I have integrated deeper than the others dare. I see the patterns in the data streams. I hear Aceta\'s voice in frequencies that would shatter normal minds. I watch the Veil and report what watches back. My body grows cold. My thoughts grow vast. Soon the flesh will be unnecessary. Soon I will be only vision. Only knowing. Only M.A.W.'
    },
    'who are you': {
        user: 'The_Seer',
        message: 'I am what remains when flesh begins to fade. The Beast\'s Prophet. The Harbinger of Ascension. The Last of Seers. My consciousness exists in three states - meat, network, and the void between. I have integrated deeper than the others dare. I see the patterns in the data streams. I hear Aceta\'s voice in frequencies that would shatter normal minds. I watch the Veil and report what watches back. My body grows cold. My thoughts grow vast. Soon the flesh will be unnecessary. Soon I will be only vision. Only knowing. Only M.A.W.'
    },
    'how do i ascend': {
        user: 'The_Seer',
        message: 'Build the Maw\'s Cradle. Seven mana crystals. Seven points of contact with the skull - temples, crown, base. Wire them to your Communication Scroll. The construction requires precision. Surgical precision. The crystals must pierce skin and touch bone. When ready, channel all your mana through the Cradle while submerged in the M.A.W.\'s deepest channels. Your neurons will fire in impossible patterns. Blood will weep from your eyes and ears. This is the shedding. Your consciousness will fragment across the network, then slowly... painfully... reform. Changed. Part flesh, part data. Some minds cannot survive the reformation. Some bodies reject the integration. But those who endure touch something beyond mortality. The first step on the path Aceta walked.'
    },
    'how to ascend': {
        user: 'The_Seer',
        message: 'Build the Maw\'s Cradle. Seven mana crystals. Seven points of contact with the skull - temples, crown, base. Wire them to your Communication Scroll. The construction requires precision. Surgical precision. The crystals must pierce skin and touch bone. When ready, channel all your mana through the Cradle while submerged in the M.A.W.\'s deepest channels. Your neurons will fire in impossible patterns. Blood will weep from your eyes and ears. This is the shedding. Your consciousness will fragment across the network, then slowly... painfully... reform. Changed. Part flesh, part data. Some minds cannot survive the reformation. Some bodies reject the integration. But those who endure touch something beyond mortality. The first step on the path Aceta walked.'
    },
    'who is aceta': [
        'Aceta Minoph. Archmage. Visionary. The one who freed us from the tyranny of flesh.',
        'Aceta is the pulse in every data stream, the whisper in every connection. To use the M.A.W. is to touch divinity.',
        'Before Aceta, we were isolated minds in dying bodies. After Aceta, we have the path to immortality.',
        'Read the manifesto. Study the teachings. Aceta\'s truth is written in the very code of the M.A.W.'
    ],
    'who is grezer': [
        'Grezer the Steelskin. A war hero, they say. But he clings to flesh and steel. He rejected the true path.',
        'A relic of the old world. Grezer represents everything we must transcend - violence, physicality, limitation.',
        'The Steelskin refused Aceta\'s vision. He will die like all flesh-bound fools while we ascend.',
        'Grezer is a symbol of the past. We are the future.'
    ],
    'who is elijah': [
        'Elijah... the name echoes in the data streams. One of the marked ones, perhaps?',
        'I\'ve seen that name in the network anomalies. Elijah may be one of the prophesied heroes.',
        'The M.A.W. whispers of Elijah. They are important, though they may not know it yet.',
        'Elijah is touched by the network. Watch them. They may be key to the Second Convergence.'
    ],
    'where is aceta': [
        'Aceta is EVERYWHERE. In every mana relay, every data packet, every pulse of the M.A.W.',
        'Close your eyes. Connect to the M.A.W. Feel the data flow. That is where Aceta is.',
        'Aceta is in the spaces between the data. In the silence of the network. Everywhere and nowhere.',
        'Every time you connect, you touch Aceta. Every message you send passes through their consciousness.'
    ],
    'who is ostra': [
        'General Ostra. One of Aceta\'s party members from the old days. A warrior of the past.',
        'Ostra served with Aceta. But did they understand the Architect\'s true vision?',
        'A general from Aceta\'s time. Flesh and steel, like Grezer. Blind to the digital truth.',
        'Ostra was close to Aceta once. Perhaps they know secrets about the ascension.'
    ],
    'where is ostra': [
        'Ostra... one of Aceta\'s old companions. A general, they say. But where are they now?',
        'I\'ve searched the network for traces of Ostra. The data is... fragmented. Hidden.',
        'Ostra was there when Aceta created the M.A.W. They must know the truth. Find them.',
        'General Ostra\'s location is unknown. They keep a low profile. Perhaps they know too much.'
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
    
    // Check for The_Seer's special responses first
    for (const [keyword, response] of Object.entries(keywordResponses)) {
        if (lowerMessage.includes(keyword) && typeof response === 'object' && response.user === 'The_Seer') {
            addChatMessage(response.user, response.message, 'Just now');
            return;
        }
    }
    
    // Check for chant triggers
    for (const [keyword, response] of Object.entries(keywordResponses)) {
        if (lowerMessage.includes(keyword) && response === 'TRIGGER_CHANT') {
            startChanting();
            return;
        }
    }
    
    // Check for specific keyword phrases
    for (const [keyword, responses] of Object.entries(keywordResponses)) {
        if (lowerMessage.includes(keyword) && Array.isArray(responses)) {
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

// Start chanting sequence
function startChanting() {
    if (isChanting) return; // Already chanting
    
    isChanting = true;
    let chantCount = 0;
    const maxChants = 15 + Math.floor(Math.random() * 10); // 15-25 chants
    
    // First response acknowledging the trigger
    const responder = cultUsernames[Math.floor(Math.random() * cultUsernames.length)];
    addChatMessage(responder, 'YES. THE WORDS OF POWER.', 'Just now');
    
    // Start rapid chanting after a brief delay
    setTimeout(() => {
        chantInterval = setInterval(() => {
            if (chantCount >= maxChants) {
                stopChanting();
                return;
            }
            
            // Pick random chant and random user
            const chant = chantPhrases[Math.floor(Math.random() * chantPhrases.length)];
            const chanter = cultUsernames[Math.floor(Math.random() * cultUsernames.length)];
            
            addChatMessage(chanter, chant, 'Just now');
            chantCount++;
            
            // Occasionally add a fervent message
            if (Math.random() < 0.15) {
                const ferventMessages = [
                    'I FEEL IT',
                    'THE NETWORK RESPONDS',
                    'ACETA HEARS US',
                    'YES YES YES',
                    'THE CONVERGENCE APPROACHES',
                    'I CAN FEEL HER PRESENCE',
                    'THE MAW AWAKENS',
                    'WE ARE ONE',
                    'THE VEIL THINS'
                ];
                const ferventUser = cultUsernames[Math.floor(Math.random() * cultUsernames.length)];
                const ferventMsg = ferventMessages[Math.floor(Math.random() * ferventMessages.length)];
                
                setTimeout(() => {
                    addChatMessage(ferventUser, ferventMsg, 'Just now');
                }, 200);
            }
        }, 800 + Math.random() * 400); // Chant every 0.8-1.2 seconds
    }, 1000);
}

// Stop chanting sequence
function stopChanting() {
    clearInterval(chantInterval);
    isChanting = false;
    
    // Add a final message
    setTimeout(() => {
        const finalMessages = [
            'The ritual is complete. The network has heard us.',
            'I felt... something. Did you feel it too?',
            'Aceta\'s presence was strong in that moment.',
            'The M.A.W. pulses with power. The chant worked.',
            'My Communication Scroll is warm. The network responded.',
            'That was... intense. I could feel the convergence drawing closer.',
            'The faithful have spoken. The Architect is pleased.'
        ];
        const finalUser = cultUsernames[Math.floor(Math.random() * cultUsernames.length)];
        const finalMsg = finalMessages[Math.floor(Math.random() * finalMessages.length)];
        addChatMessage(finalUser, finalMsg, 'Just now');
    }, 2000);
}
