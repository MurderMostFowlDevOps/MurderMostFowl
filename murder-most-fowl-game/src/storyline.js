const storyData = {
  start: {
    text: `You, Sherlock Hooves, the greatest detective on this side of the pasture are summoned to Sheepy Hollow Farm in the dead of the night. 
    
    Your reputation precedes you and rightfully so. After all, you are the brilliant mind that cracked the cases of the Quack Dahlia, the Zodiquack Killer, and Quack the Ripper. It seems that poultry everywhere are unsafe, especially after hearing about what has taken place at Sheepy Hollow. 
    
    The glamorous farm icon, Clucklyn Monroe, was found dead near the grain silo, her feathers ruffled and a single golden feather clasped in her beak. The cause of death? Unknown. No signs of struggle--was it poison? An accident? Or something more sinister? 
    
    The authorities at the farm are overwhelmed, the clues are piling up, the suspects are restless, and time is running out.`,
    choices: [
      { text: "Go to Sheepy Hollow", next: "farm" },
    ]
  },
  farm: {
    text: `Officer Quackers greets you at the entrance of Sheepy Hollow Farm. 'Thank goodness you're here, Detective Hooves. Things have truly run afowl here.' 

    Afowl, indeed, Officer, you think to yourself.

    You follow Officer Quackers to the crime scene as he fills you in.

    From what you gather, Clucklyn was glamorous, charming, and intelligent, though often underestimated. She had an effortless grace and an aura of mystery that made every animal on the farm either love her, fear her, or envy her.
    
    The undisputed queen of the farm, Clucklyn was more than just a pretty hen —- she was a star, performing in talent shows and crooning in the moonlight. She had ties to the most powerful animals, from Vito Cor-lamb-one to Ham Solo, and even Ferris Mooler, who adored her carefree spirit. But behind the dazzling feathers, she had secrets. She had been poking around the wrong nests, asking too many questions, and the night before her death, she seemed afraid.
    
    'Clucklyn was last seen near the barn, whispering with a shadowy figure. A half-eaten corn cob was found at the scene, and there were traces of muddy hoofprints leading away.'
    
    Given what you have heard about her, every occupant of the farm could have wanted her gone for some reason or another. The question is… who wanted her gone the most?
    
    You decide to examine the crime scene...`
    
    ,
    choices: [
      { text: "You glance at the ground", next: "footprints" },
      { text: "You catch a glimpse of the gold feather", next: "goldfeather" },
        {text: "You follow the direction of Clucklyn's outstretched wing", next: "sack" }
      
    ]
  },
  footprints: {
    text: `Your wingtips are covered in mud. You think of Clucklyn, whose wings will never flap again. 
    
    Just as you are about to approach the body, you spot some markings in the mud.. leading away from it. 
    
    You're suddenly interested to know the whereabouts of a certain swine and bleatnik the previous night.
`,
    choices: [
      { text: "'Officer, would you point me to the sty?'", next: "hamsolo" },
      { text: "'Officer, leave the gun, take the cannoli.'", next: "vito" }
    ]
  },
  goldenfeather: {
    text: `You approach the body to do a more thorough inspection. Glinting in Clucklyn's mouth is the golden feather, sharply contrasting with her milky white feathers. Whoever did this wanted to make a statement. 
    
    Luckily they were foolish enough to leave behind a critical piece of evidence. If you follow it, you might just catch the killer gold feathered.
    
    Come to think of it, you've heard of a character of questionable morals with a penchant for shiny things.`,
    choices: [
      { text: "This is the day you will always remember as the day you *almost* caught Quack Sparrow.", next: "quacksparrow" },
      { text: "'Officer, leave the gun, take the cannoli.'", next: "vito" }
    ]
  },
  sack: {
    text: `You retrieve the sack and gently sift through the contents.
    
    A half-eaten corn cob, a few feathers, and a letter. You open the letter and smile to yourself. 
    
    You have more questions than answers but at least now you know who to ask.`,
    choices: [
      { text: "It's hard to imagine how heartfelt words could precede a grisly murder but crimes of passion are not rare.", next: "hamsolo" },
      { text: "The paper bears the seal of quack's secret smuggling ring. ", next: "quacksparrow" }
    ]
  },

hamsolo: {
    text: `You wonder if pigs are really as innocent as they claim. Or perhaps the Big Bad Wolf was not the biggest and baddest in that tale.
    
    Ham Solo has an arrogance about him that makes you hope he is guilty. Chicks dig that, though, and with his charm you can understand how Clucklyn fell for him. 
    
    You have heard about his daring adventures before washing up on the farm and you know ham well that someone can't turn away from that life entirely to be a farmhand. Ham is a gambler and you suspect he is the mastermind behind the black-market feed trade operating out of Sheepy Hollow. 
    
    It is not uncommon for a gambling ham to get in too deep or have to keep someone quiet.
    
    When you first accuse him, Ham begins to storm off, only stopping when you begin reading the letter you found in the sack aloud. 
    
    Ham's eyes widen and he looks at you, then at his letter to Clucklyn. He begins to frantically explain that he loved her and would never hurt her.`
    ,
    choices: [
      { text: `"I was set up.. FRAMED! It was someone going after my business!" Ham pleads.
    
    You are not sure if you believe him but it is a lead worth following. Who would gain from Ham's downfall? Perhaps someone who also had a horn in the moving of feed on the farm.`, next: "vito" },

      { text: "You can tell Ham is hiding something so you decide to keep an eye on him.", next: "hamGuilty" }
    ]
  },
  vito: {
    text: `You review the facts on your way to question your next suspect. You are determined not to let a made lamb pull the wool over your eyes.
    
    Vito Corlambone is a powerful figure on the farm. He is a shrewd businessman and a ruthless negotiator, both necessary to run the farm's underground economy and control food distribution. He has a reputation for being able to get things done, no matter the cost. However, he doesn't need to get his hooves dirty -- his associates handle that. Therefore, whatever alibi he has for last night is meaningless unless he can account for the whereabouts of all his lambs. 
    
    Vito greets you with a smile, though you can tell he is not pleased to see you. You ask him about how Ham's business was affecting his own and he asks how the illegal dealings of a ham could affect his legitimate hay disposal business. 

    "Perhaps he tried to make you an offer you couldn't refuse?" you ask.

    Vito laughs, "Ham may make offers but I make demands. He knows better than to cross me. He may yet be an asset.. in hay disposal, of course. Let me make this clear for you -- I make problems disappear, not pretty chickens."
    `,
    choices: [
      { text: "As you walk back to the crime scene to re-coop-erate, one of Vito's right-hoof lambs approaches you. 'The boss lamb says Clucklyn had her beak in Quack's business, that there was something of a chicken fight last night.' You hate to go on another wild goose chase but it's better than chasing your tail which is what it's felt like so far.", next: "quacksparrow" },
      { text: "If that's so then you wouldn't mind if I take a look at your books?", next: "vitoGuilty" }
    ]
  },  

  quacksparrow: {
    text: `You are not eager to come snout to bill with Quack Sparrow. He's clever and slippery, talking in riddles to make it impossible to decipher whether he's telling the truth or not. 
    
    Rumor has it he runs a smuggling ring, bringing contraband grain and supplies across the farm, and always staying one step ahead of the watchdogs. 
    
    He is known to avoid violence but if he feels cornered, he can be dangerous. Perhaps Clucklyn was on to him? Is that what caused their altercation last night?
    
    You find Quack Sparrow in the barn, surrounded by his crew of misfits who all refer to him as 'Captain' though he has never laid eyes on the ocean or even left the farm. He greets you with a sly smile and a twinkle in his eye. 
    
    "I don't kill birds, Mate. I smuggle grains, not secrets."
    
    "The police are combing your pond as we speak. You may have a way with words, but if they find something, you won't be able to riddle your way out of this one."
    
    Officer Quackers approaches with an empty vial, presumably from Quack's pond.

    "Recognize this, 'Captain'? Perhaps you had a drink with Clucklyn after your loud meeting last night and something from this vial slipped in?" you ask.`,
    choices: [
      { text: "'You've got it wrong, mate. Clucklyn knew what kind of man I was, she would never take a drink from me! I'm dishonest, and a dishonest man you can always trust to be dishonest. Honestly, it's the honest ones you want to watch out for. Like that Goose Wayne fellow. He's right next door, he could have tossed the vial in my pond.'", next: "goosewayne" },
      { text: "", next: "quackGuilty" }
    ]
  },  

  goosewayne: {
    text: `The brooding billionaire Goose Wayne is a mystery to all. Some see him as a protector, others a vigilante. Perhaps Clucklyn was involved in a scheme that threatened the order Goose protects. Or maybe his darker side finally got the better of him -- you either die a hero or live long enough to see yourself become the villain. He certainly has the means to get the herbs used in a poison.
    
    When you reach his nest, Goose does not get up to greet you or even acknowledge your presence. `,
    choices: [
        { text: "HES SEARCHING FOR KILLER TOO -- GIVES YOU CLUES", next: "" },
        { text: "HE HAS MORE VIALS OF POISON", next: "" }
    ]},


  hamGuilty: {
    text: `After leaving Ham's sty, you double back to surveil him from a distance. He waits several minutes to ensure he is not being watched and then rushes to his trough. Sensing his urgency you move in on him as he pulls a clump of paper from the water. Before he can tear it up, you wrest it from his grip.
    
    Though it is in rough shape, edges singed and sopping, you are able to make out a seething correspondance from Clucklyn to Ham, confessing her inability to be with someone in his line of work and dramatically ending their love affair. 
    
    Now as you study Ham, you no longer see a suave lady's ham but the wild eyes of the heartbroken. 
    
    "I didn't mean to..." he says. "I just.. I just wanted her to love me again".`,
    choices: [
        {text: "And, thus, Ham was less like the romantic Romeo and more like the murderous Hamlet." , next: "end" }
    ]

  },

  vitoGuilty: {
    text: `Vito's eyes narrow as you ask to see his books. He tells you that he has nothing to hide and that you are welcome to look at them. He knows you can't prove anything untoward happened even if you have the evidence right under your snout. 
    
    You leaf through the pages of names with sums of money next to them until you spot Clucklyn's. But beside her name there is no sum, just a note: "No more favors." 
    
    You look up at Vito. 
    
    "Sweet girl but she took advantage of my generosity. Had to cut her out... I mean off."
    
    You know that whatever happened last night was tied up without any loose hens. You know that whatever evidence remained was destroyed hours before anyone spotted Clucklyn. 
     
    `, 
    choices: [
        {text: "But you also know that Ham will know who is responsible for the death of his love and, after all, revenge is a dish best served cold." , next: "end" }
    ]
  }
  // Add more nodes as needed
};
