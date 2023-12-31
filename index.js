// index.js
const inputBoxes = ['', '', '', '']; // Array to store letters for each input box
const enteredLetters = new Set(); // Set to keep track of unique letters
const guesses = [];
//const wordList = ["last","lest","list","lost","lust"];
const wordList = ['able', 'ache', 'acid', 'acne', 'acre', 'afro', 'aged',
'aint', 'airy', 'also', 'amid', 'anew', 'anex', 'anti',
'apex', 'arch', 'army', 'atom', 'aunt', 'auto', 'avid',
'awry', 'axis', 'axle', 'back', 'bail', 'bake', 'bald',
'bale', 'balm', 'band', 'bane', 'bang', 'bank', 'bare',
'barf', 'bark', 'barn', 'base', 'bash', 'bask', 'bawl',
'bead', 'beak', 'bean', 'bear', 'beat', 'belt', 'bend',
'bent', 'best', 'beta', 'bias', 'bike', 'bind', 'bird',
'bite', 'blip', 'blog', 'blot', 'blow', 'blue', 'boar',
'boat', 'body', 'boil', 'bold', 'bolt', 'bond', 'bone',
'bore', 'born', 'both', 'bowl', 'brag', 'brat', 'bred',
'brew', 'brim', 'brow', 'buck', 'bulk', 'bump', 'buoy',
'burn', 'burp', 'bury', 'bush', 'bust', 'busy', 'byte',
'cafe', 'cage', 'cake', 'calf', 'calm', 'came', 'camp',
'cane', 'cant', 'cape', 'card', 'care', 'cart', 'case',
'cash', 'cast', 'cave', 'cent', 'chai', 'chap', 'chat',
'chef', 'chew', 'chin', 'chip', 'chit', 'chug', 'chum',
'cite', 'city', 'clam', 'clan', 'clap', 'claw', 'clay',
'clip', 'clog', 'clot', 'club', 'clue', 'coal', 'coat',
'coax', 'code', 'coil', 'coin', 'cola', 'cold', 'coma',
'comb', 'come', 'cone', 'cope', 'copy', 'cord', 'core',
'cork', 'corn', 'cost', 'coup', 'cozy', 'crab', 'cram',
'crew', 'crop', 'crow', 'cube', 'cult', 'curb', 'curd',
'cure', 'curl', 'curt', 'cusp', 'cute', 'cyan', 'cyst',
'daft', 'dame', 'damp', 'dare', 'dark', 'dart', 'dash',
'date', 'dawn', 'daze', 'deaf', 'deal', 'dean', 'dear',
'debt', 'deck', 'defy', 'demo', 'dent', 'deny', 'desk',
'dial', 'dice', 'died', 'diet', 'dime', 'dine', 'dire',
'dirt', 'disc', 'dish', 'disk', 'dive', 'dock', 'does',
'dome', 'done', 'dork', 'dorm', 'dosa', 'dose', 'dove',
'down', 'down', 'drab', 'drag', 'draw', 'drip', 'drop',
'drug', 'drum', 'dual', 'duck', 'duct', 'duet', 'duly',
'dumb', 'dump', 'dune', 'dunk', 'dusk', 'dust', 'duty',
'each', 'earn', 'east', 'easy', 'echo', 'edgy', 'edit',
'else', 'epic', 'etch', 'euro', 'evil', 'exam', 'exit',
'face', 'fact', 'fade', 'fail', 'fair', 'fake', 'fame',
'fang', 'fare', 'farm', 'fast', 'fate', 'faux', 'fawn',
'faze', 'fear', 'feat', 'felt', 'fern', 'feud', 'file',
'film', 'find', 'fine', 'fire', 'fish', 'fist', 'five',
'flag', 'flat', 'flea', 'fled', 'flew', 'flex', 'flip',
'flop', 'flow', 'foam', 'foil', 'fold', 'folk', 'fond',
'font', 'fork', 'fort', 'foul', 'four', 'foxy', 'fret',
'frog', 'from', 'fuel', 'fund', 'fury', 'fuse', 'fush',
'gain', 'gait', 'game', 'gape', 'gash', 'gasp', 'gate',
'gave', 'gawk', 'gaze', 'gear', 'germ', 'gift', 'girl',
'give', 'glad', 'glow', 'glue', 'gnat', 'gnaw', 'goal',
'goat', 'gold', 'golf', 'gone', 'good', 'gore', 'gory',
'gown', 'grab', 'gray', 'grey', 'grid', 'grim', 'grin',
'grip', 'grit', 'grow', 'gulp', 'gush', 'gust', 'hack',
'hail', 'hair', 'half', 'halo', 'halt', 'hand', 'hard',
'hare', 'hark', 'harm', 'harp', 'hate', 'haul', 'have',
'hawk', 'hazy', 'head', 'heal', 'heap', 'hear', 'heat',
'heir', 'held', 'helm', 'help', 'herb', 'hero', 'hide',
'hike', 'hilt', 'hind', 'hint', 'hire', 'hive', 'hold',
'hole', 'holy', 'home', 'home', 'honk', 'hope', 'hose',
'host', 'hour', 'howl', 'huge', 'hump', 'hunt', 'hurt',
'hurt', 'husk', 'hymn', 'hype', 'iced', 'icky', 'icon',
'idea', 'idle', 'idly', 'idol', 'inch', 'inky', 'into',
'iota', 'iron', 'isle', 'itch', 'item', 'jack', 'jade',
'jail', 'jape', 'jean', 'jedi', 'jerk', 'jinx', 'jist',
'jock', 'join', 'joke', 'judo', 'jump', 'junk', 'jury',
'just', 'jute', 'kale', 'kart', 'kemp', 'kept', 'keys',
'kiln', 'kilo', 'kilt', 'kind', 'king', 'kite', 'kith',
'knap', 'knew', 'knit', 'knob', 'knot', 'know', 'lace',
'lack', 'lacy', 'lady', 'laid', 'lain', 'lair', 'lake',
'lakh', 'lamb', 'lame', 'lamp', 'land', 'lane', 'lard',
'lash', 'last', 'late', 'lawn', 'lazy', 'lead', 'leaf',
'leak', 'lean', 'leap', 'lend', 'lent', 'lest', 'levy',
'liar', 'lice', 'lick', 'lied', 'lies', 'lieu', 'life',
'lift', 'like', 'limb', 'lime', 'limp', 'line', 'link',
'lion', 'lisp', 'list', 'live', 'load', 'loaf', 'loan',
'lobe', 'loci', 'lock', 'lofi', 'loft', 'loin', 'long',
'lord', 'lore', 'lorn', 'lost', 'loud', 'love', 'lube',
'luck', 'ludo', 'lump', 'lung', 'lure', 'lurk', 'lush',
'lust', 'lynx', 'mach', 'maid', 'mail', 'main', 'make',
'male', 'malt', 'many', 'mare', 'mark', 'mars', 'mart',
'mask', 'mast', 'mate', 'math', 'maul', 'mayo', 'maze',
'mead', 'meal', 'mean', 'meat', 'meld', 'melt', 'meow',
'mesh', 'meta', 'mica', 'mice', 'mild', 'mile', 'milk',
'mind', 'mine', 'mint', 'miso', 'mist', 'mite', 'moan',
'mock', 'mode', 'mold', 'mole', 'monk', 'mope', 'more',
'moth', 'move', 'much', 'murk', 'muse', 'musk', 'must',
'mute', 'myna', 'myth', 'nail', 'name', 'near', 'neat',
'nest', 'nice', 'nose', 'note', 'nuts', 'okay', 'once',
'only', 'open', 'oval', 'oxen', 'pace', 'pack', 'palm',
'pans', 'pant', 'park', 'part', 'part', 'pear', 'peas',
'pile', 'pine', 'ping', 'pink', 'plan', 'play', 'plot',
'plug', 'pony', 'pore', 'pork', 'port', 'pots', 'pour',
'prom', 'pure', 'pyre', 'race', 'rack', 'raft', 'rail',
'rain', 'rake', 'rank', 'rash', 'rate', 'rats', 'rave',
'read', 'real', 'rent', 'rest', 'rice', 'ride', 'ring',
'ripe', 'rise', 'road', 'roam', 'rock', 'rope', 'runs',
'sail', 'sale', 'same', 'sand', 'save', 'seam', 'seat',
'self', 'send', 'sent', 'ship', 'shoe', 'shot', 'show',
'side', 'sign', 'sing', 'site', 'skin', 'slot', 'slum',
'snow', 'sock', 'sofa', 'soft', 'soil', 'some', 'song',
'soup', 'spat', 'star', 'stay', 'stop', 'suck', 'sure',
'surf', 'swat', 'tags', 'take', 'talk', 'tame', 'tame',
'tank', 'tape', 'task', 'taxi', 'teal', 'team', 'tend',
'term', 'them', 'this', 'tick', 'tide', 'time', 'time',
'tire', 'toad', 'toes', 'tops', 'tore', 'tote', 'tram',
'trap', 'true', 'tube', 'tuna', 'tune', 'turf', 'turn',
'twin', 'type', 'tyre', 'used', 'vary', 'vein', 'vent',
'very', 'view', 'vlog', 'wart', 'wash', 'wear', 'webs',
'west', 'what', 'when', 'wild', 'wilt', 'wind', 'with',
'word', 'work', 'worm', 'wrap', 'yank', 'year', 'your',
'zero', 'zest', 'zips'];
let rWord = getRandomWord(wordList);

const canvas = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

document.getElementById('hiddenInput').addEventListener('input', handleHiddenInput);
document.addEventListener('keypress', handleKeyPress);
document.addEventListener('keydown', handleKeyDown);

function getRandomWord(wordArray) {
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    return wordArray[randomIndex];
}

// For phone keyboards

function resetGame() {
    // Get a new random word
    rWord = getRandomWord(wordList);
    rWord = rWord.toUpperCase();

    // Reset game state
    inputBoxes.fill('');
    enteredLetters.clear();
    guesses.length = 0;

    // Clear the displayed guesses
    const guessesContainer = document.getElementById('guessesContainer');
    while (guessesContainer.firstChild) {
        guessesContainer.removeChild(guessesContainer.firstChild);
    }
    if (guesses.length > 0) {
        displayGuesses();
    }

    // Programmatically trigger a click event on the hidden input element
    const hiddenInput = document.getElementById('hiddenInput');
    hiddenInput.focus(); // Set focus
    hiddenInput.click(); // Trigger click
    
    // Focus the hidden input element to show the keyboard
    //document.getElementById('hiddenInput').focus();
}


function cowbull(word, guess) {
    let cows = 0;
    let bull = 0;

    for (let i of guess) {
        if (word.includes(i)) {
            //alert(word.indexOf(i));
            if (guess[word.indexOf(i)] == i) {
                bull += 1;
            }
            else {
                cows += 1;
            }
        }
    }    

    //alert("cows:" + cows + ", bulls:" + bull);
    return { cows: cows.toString(), bull: bull.toString() };
}


function handleHiddenInput() {
    const inputValue = document.getElementById('hiddenInput').value;
    inputBoxes.forEach((_, index) => {
        const currentInput = document.getElementsByClassName('inputBox')[index];
        const firstLetter = inputValue.charAt(index);
        inputBoxes[index] = firstLetter;
        currentInput.value = firstLetter;
    });
}

function handleKeyPress(event) {
    const hiddenInput = document.getElementById('hiddenInput');
    const currentInputIndex = hiddenInput.value.length;

    // Check if the pressed key is a letter and not repeated
    if (/^[a-zA-Z]$/.test(event.key) && currentInputIndex < 4 && !enteredLetters.has(event.key.toUpperCase())) {
        const uppercaseKey = event.key.toUpperCase();
        hiddenInput.value += uppercaseKey;
        enteredLetters.add(event.key.toUpperCase());
        handleHiddenInput();
    }
}

function handleKeyDown(event) {
    const hiddenInput = document.getElementById('hiddenInput');
    const currentInputIndex = hiddenInput.value.length;

    // Check if the pressed key is the backspace key
    if (event.key === 'Backspace' && currentInputIndex > 0) {
        // Remove the last character from the hidden input and from the set
        const removedLetter = hiddenInput.value.slice(-1).toUpperCase();
        hiddenInput.value = hiddenInput.value.slice(0, -1);
        enteredLetters.delete(removedLetter);
        handleHiddenInput();
    }

    // Check if the pressed key is the Enter key
    if (event.key === 'Enter') {
        // Check if all four letters are typed
        if (inputBoxes.every(letter => letter !== '')) {
            const combinedLetters = inputBoxes.join(''); // combined word

            // Reset the input boxes, hidden input, and the set
            inputBoxes.fill('');
            hiddenInput.value = '';
            enteredLetters.clear();
            handleHiddenInput();

            //alert(rWord+','+combinedLetters);
            const ans = cowbull(rWord, combinedLetters);
            const guessStr = combinedLetters + " : <br>"+ ans.cows + "🐄, " + ans.bull + "🐂";
            guesses.push(guessStr);

            displayGuesses();

            // Scroll to the bottom after updating guesses
            const guessesContainer = document.getElementById('guessesContainer');
            guessesContainer.scrollTop = guessesContainer.scrollHeight;

            // Compare the input to the random word
            if (combinedLetters == rWord) {
                alert('Congratulations! You guessed the word.');
                jsConfetti.addConfetti();
                resetGame();
            } 
        }
    }
}

function displayGuesses() {
    const guessesContainer = document.getElementById('guessesContainer');

    // Clear previous content
    guessesContainer.innerHTML = '';

    // Calculate the number of pairs to display in each row
    const pairsPerRow = 3;

    // Create a wrapper div for guesses
    const guessesWrapper = document.createElement('div');
    guessesWrapper.className = 'guesses-container';

    // Iterate over guesses to create rows
    for (let i = 0; i < guesses.length; i += pairsPerRow) {
        // Create a row div
        const row = document.createElement('div');
        row.className = 'row';

        // Iterate over pairs within the current row
        for (let j = i; j < i + pairsPerRow && j < guesses.length; j++) {
            const guessElement = document.createElement('div');
            guessElement.className = 'guess';
            guessElement.innerHTML = guesses[j];
            row.appendChild(guessElement);
        }

        // Append the row to the wrapper
        guessesWrapper.appendChild(row);
    }

    // Append the wrapper to the container
    guessesContainer.appendChild(guessesWrapper);

    // Get the last row
    const lastRow = guessesWrapper.lastChild;
    // Scroll the last row into view
    lastRow.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

resetGame();

/* ----- */