function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

info_box = document.querySelector(".info");
//random 3 letter word function
const words = ['aah', 'aal', 'aas', 'aba', 'abs', 'aby', 'ace', 'act', 'add', 'ado', 'ads', 'adz', 'aff', 'aft', 'aga', 'age', 'ago', 'aha', 'ahi', 'ahs', 'aid', 'ail', 'aim', 'ain', 'air', 'ais', 'ait', 'ala', 'alb', 'ale', 'all', 'alp', 'als', 'alt', 'ama', 'ami', 'amp', 'amu', 'ana', 'and', 'ane', 'ani', 'ant', 'any', 'ape', 'app', 'apt', 'arb', 'arc', 'are', 'arf', 'ark', 'arm', 'ars', 'art', 'ash', 'ask', 'asp', 'ass', 'ate', 'att', 'auk', 'ava', 'ave', 'avo', 'awa', 'awe', 'awl', 'awn', 'axe', 'aye', 'ays', 'azo', 'baa', 'bad', 'bag', 'bah', 'bal', 'bam', 'ban', 'bap', 'bar', 'bas', 'bat', 'bay', 'bed', 'bee', 'beg', 'bel', 'ben', 'bet', 'bey', 'bib', 'bid', 'big', 'bin', 'bio', 'bis', 'bit', 'biz', 'boa', 'bob', 'bod', 'bog', 'boo', 'bop', 'bos', 'bot', 'bow', 'box', 'boy', 'bra', 'bro', 'brr', 'bub', 'bud', 'bug', 'bum', 'bun', 'bur', 'bus', 'but', 'buy', 'bye', 'bys', 'cab', 'cad', 'cam', 'can', 'cap', 'car', 'cat', 'caw', 'cay', 'cee', 'cel', 'cep', 'chi', 'cig', 'cis', 'cob', 'cod', 'cog', 'col', 'con', 'coo', 'cop', 'cor', 'cos', 'cot', 'cow', 'cox', 'coy', 'coz', 'cru', 'cry', 'cub', 'cud', 'cue', 'cup', 'cur', 'cut', 'cwm', 'dab', 'dad', 'dag', 'dah', 'dak', 'dal', 'dam', 'dan', 'dap', 'daw', 'day', 'deb', 'dee', 'def', 'del', 'den', 'dev', 'dew', 'dex', 'dey', 'dib', 'did', 'die', 'dif', 'dig', 'dim', 'din', 'dip', 'dis', 'dit', 'doc', 'doe', 'dog', 'doh', 'dol', 'dom', 'don', 'dor', 'dos', 'dot', 'dow', 'dry', 'dub', 'dud', 'due', 'dug', 'duh', 'dui', 'dum', 'dun', 'duo', 'dup', 'dye', 'ear', 'eat', 'eau', 'ebb', 'eco', 'ecu', 'edh', 'eek', 'eel', 'eff', 'efs', 'eft', 'egg', 'ego', 'eke', 'eld', 'elf', 'elk', 'ell', 'elm', 'els', 'eme', 'emo', 'ems', 'emu', 'end', 'eng', 'ens', 'eon', 'era', 'ere', 'erg', 'ern', 'err', 'ers', 'ess', 'eta', 'eth', 'eve', 'ewe', 'eye', 'fab', 'fad', 'fah', 'fan', 'far', 'fas', 'fat', 'fax', 'fay', 'fed', 'fee', 'feh', 'fem', 'fen', 'fer', 'fet', 'feu', 'few', 'fey', 'fez', 'fib', 'fid', 'fie', 'fig', 'fil', 'fin', 'fir', 'fit', 'fix', 'fiz', 'flu', 'fly', 'fob', 'foe', 'fog', 'foh', 'fon', 'foo', 'fop', 'for', 'fou', 'fox', 'foy', 'fro', 'fry', 'fub', 'fud', 'fug', 'fun', 'fur', 'gab', 'gad', 'gae', 'gag', 'gal', 'gam', 'gan', 'gap', 'gar', 'gas', 'gat', 'gay', 'ged', 'gee', 'gel', 'gem', 'gen', 'get', 'gey', 'ghi', 'gib', 'gid', 'gie', 'gig', 'gin', 'gip', 'gis', 'git', 'gnu', 'goa', 'gob', 'god', 'goo', 'gor', 'got', 'gox', 'goy', 'gul', 'gum', 'gun', 'gut', 'guv', 'guy', 'gym', 'had', 'hae', 'hag', 'hah', 'haj', 'ham', 'hao', 'hap', 'has', 'hat', 'haw', 'hay', 'heh', 'hem', 'hen', 'hep', 'her', 'hes', 'het', 'hew', 'hex', 'hey', 'hic', 'hid', 'hie', 'him', 'hin', 'hip', 'his', 'hit', 'hmm', 'hob', 'hod', 'hoe', 'hog', 'hom', 'hon', 'hop', 'hos', 'hot', 'how', 'hoy', 'hub', 'hue', 'hug', 'huh', 'hum', 'hun', 'hup', 'hut', 'hyp', 'ice', 'ich', 'ick', 'icy', 'ids', 'iff', 'ifs', 'igg', 'ilk', 'ill', 'imp', 'ink', 'inn', 'ins', 'ion', 'ire', 'irk', 'ism', 'its', 'ivy', 'jab', 'jag', 'jam', 'jar', 'jaw', 'jay', 'jee', 'jet', 'jeu', 'jib', 'jig', 'jin', 'job', 'joe', 'jog', 'jot', 'jow', 'joy', 'jug', 'jun', 'jus', 'jut', 'kab', 'kae', 'kaf', 'kas', 'kat', 'kay', 'kea', 'kef', 'keg', 'ken', 'kep', 'kex', 'key', 'khi', 'kid', 'kif', 'kin', 'kip', 'kir', 'kit', 'koa', 'kob', 'koi', 'kop', 'kor', 'kos', 'kue', 'kye', 'lab', 'lac', 'lad', 'lag', 'lah', 'lam', 'lap', 'lar', 'las', 'lat', 'lav', 'law', 'lax', 'lay', 'lea', 'led', 'lee', 'leg', 'lei', 'lek', 'let', 'leu', 'lev', 'lex', 'ley', 'lib', 'lid', 'lie', 'lin', 'lip', 'lis', 'lit', 'lob', 'log', 'loo', 'lop', 'lot', 'low', 'lox', 'lud', 'lug', 'lum', 'luv', 'lux', 'lye', 'mac', 'mad', 'mae', 'mag', 'mam', 'man', 'map', 'mar', 'mas', 'mat', 'maw', 'max', 'may', 'med', 'meg', 'meh', 'mel', 'mem', 'men', 'met', 'mew', 'mho', 'mib', 'mic', 'mid', 'mig', 'mil', 'mim', 'mir', 'mis', 'mix', 'mmm', 'moa', 'mob', 'moc', 'mod', 'mog', 'moi', 'mol', 'mom', 'mon', 'moo', 'mop', 'mor', 'mos', 'mot', 'mow', 'mud', 'mug', 'mum', 'mun', 'mus', 'mut', 'mux', 'nab', 'nae', 'nag', 'nah', 'nam', 'nan', 'nap', 'naw', 'nay', 'neb', 'nee', 'net', 'new', 'nib', 'nil', 'nim', 'nip', 'nit', 'nix', 'nob', 'nod', 'nog', 'noh', 'nom', 'noo', 'nor', 'nos', 'not', 'now', 'nth', 'nub', 'nun', 'nus', 'nut', 'obe', 'obi', 'oca', 'oaf', 'oak', 'oar', 'oat', 'oba', 'och', 'oda', 'odd', 'ode', 'ods', 'oes', 'off', 'oft', 'ohm', 'oho', 'ohs', 'oik', 'oil', 'oka', 'oke', 'old', 'ole', 'oms', 'one', 'ono', 'ons', 'oof', 'ooh', 'oot', 'ope', 'ops', 'opt', 'ora', 'orb', 'orc', 'ore', 'ors', 'ort', 'ose', 'oud', 'our', 'out', 'ova', 'owe', 'owl', 'own', 'owt', 'oxo', 'oxy', 'pac', 'pad', 'pah', 'pal', 'pam', 'pan', 'pap', 'par', 'pas', 'pat', 'paw', 'pax', 'pay', 'pea', 'pec', 'ped', 'pee', 'peg', 'peh', 'pen', 'pep', 'per', 'pes', 'pet', 'pew', 'phi', 'pho', 'pht', 'pia', 'pic', 'pie', 'pig', 'pin', 'pip', 'pis', 'pit', 'piu', 'pix', 'ply', 'pod', 'poh', 'poi', 'pol', 'pom', 'poo', 'pop', 'pos', 'pot', 'pow', 'pox', 'pro', 'pry', 'psi', 'pub', 'pud', 'pug', 'pul', 'pun', 'pup', 'pur', 'pus', 'put', 'pya', 'pye', 'pyx', 'qat', 'qis', 'qua', 'rad', 'rag', 'rah', 'rai', 'raj', 'ram', 'ran', 'rap', 'ras', 'rat', 'raw', 'rax', 'ray', 'reb', 'rec', 'red', 'ree', 'ref', 'reg', 'rei', 'rem', 'rep', 'res', 'ret', 'rev', 'rex', 'rho', 'ria', 'rib', 'rid', 'rif', 'rig', 'rim', 'rin', 'rip', 'rob', 'roc', 'rod', 'roe', 'rom', 'roo', 'rot', 'row', 'rub', 'rue', 'rug', 'rum', 'run', 'rut', 'rya', 'rye', 'ryu', 'sab', 'sac', 'sad', 'sae', 'sag', 'sal', 'san', 'sap', 'sat', 'sau', 'saw', 'sax', 'say', 'sea', 'sec', 'see', 'sei', 'sel', 'sen', 'ser', 'set', 'sev', 'sew', 'sex', 'sez', 'sha', 'she', 'shh', 'sho', 'shy', 'sib', 'sic', 'sim', 'sin', 'sip', 'sir', 'sis', 'sit', 'six', 'ska', 'ski', 'sky', 'sly', 'sob', 'soc', 'sod', 'soh', 'sol', 'som', 'son', 'sop', 'sos', 'sot', 'sou', 'sow', 'sox', 'soy', 'spa', 'spy', 'sri', 'sty', 'sub', 'sue', 'suk', 'sum', 'sun', 'sup', 'suq', 'sus', 'syn', 'tab', 'tad', 'tae', 'tag', 'taj', 'tam', 'tan', 'tao', 'tap', 'tar', 'tas', 'tat', 'tau', 'tav', 'taw', 'tax', 'tea', 'ted', 'tee', 'teg', 'tel', 'ten', 'tet', 'tew', 'the', 'tho', 'thy', 'tic', 'tie', 'til', 'tin', 'tip', 'tis', 'tit', 'tiz', 'tod', 'toe', 'tog', 'tom', 'ton', 'too', 'top', 'tor', 'tot', 'tow', 'toy', 'try', 'tsk', 'tub', 'tug', 'tui', 'tum', 'tun', 'tup', 'tut', 'tux', 'twa', 'two', 'tye', 'udo', 'ugh', 'uke', 'ulu', 'umm', 'ump', 'uni', 'uns', 'upo', 'ups', 'urb', 'urd', 'urn', 'use', 'uta', 'ute', 'uts', 'vac', 'van', 'var', 'vas', 'vat', 'vau', 'vav', 'vaw', 'vee', 'veg', 'vet', 'vex', 'via', 'vid', 'vie', 'vig', 'vim', 'vin', 'vis', 'voe', 'vog', 'vow', 'vox', 'vug', 'wab', 'wad', 'wae', 'wag', 'wan', 'wap', 'war', 'was', 'wat', 'waw', 'wax', 'way', 'web', 'wed', 'wee', 'wen', 'wet', 'wha', 'who', 'why', 'wig', 'win', 'wis', 'wit', 'wiz', 'woe', 'wok', 'won', 'woo', 'wos', 'wot', 'wow', 'wry', 'wud', 'wuz', 'wye', 'wyn', 'yag', 'yah', 'yak', 'yam', 'yap', 'yar', 'yas', 'yaw', 'yay', 'yea', 'yeh', 'yen', 'yep', 'yer', 'yes', 'yet', 'yew', 'yez', 'yin', 'yip', 'yob', 'yod', 'yok', 'yom', 'yon', 'you', 'yow', 'yuk', 'yum', 'yup', 'zag', 'zap', 'zas', 'zax', 'zed', 'zee', 'zek', 'zen', 'zig', 'zin', 'zip', 'zit', 'zoa', 'zoo', 'xi'];
var word = words[Math.floor(Math.random()*words.length)];


first_letter = word.charAt(0);
second_letter = word.charAt(1);
third_letter = word.charAt(2);

guess_num = 1;
round_num =1;
next_round=false;
word_guessed = "";
document.addEventListener('keydown', function(event) {

    guess = document.getElementById(round_num);
    letters = guess.querySelectorAll(".letters");

    //ENTERING LETTERS
    if(isLetter(event.key)){
        if(guess_num<4){
            letters.forEach(letter=>{
                if(letter.getAttribute("type") == guess_num ){
                    letter.innerHTML = event.key;
                    word_guessed += event.key;
                    if(guess_num == 1){
                        first_letter_guessed = letter;
                    }else if(guess_num ==2){
                        second_letter_guessed = letter;
                    }else{
                        third_letter_guessed = letter;
                    }
                }
            })
            guess_num++;
        }

    //GUESSED WORD
    }else if(event.key == 'Enter'){
        if(guess_num>3){
            //Check if word exists
            if(words.includes(word_guessed)){
                green = false;
                orange = false;
                //Check letters
                if(word_guessed == word){
                    info_box.innerHTML = "wow legend! "+word+" is a cool word";
                }else{
                    console.log(round_num);
                    if(round_num == 8){
                        
                        info_box.innerHTML = "word was "+word+". thanks for playing";
                        throw new Error("All done loldot");
                    }
                    if(word.includes(first_letter_guessed.innerHTML)){
                        if(first_letter_guessed.innerHTML == first_letter){
                            first_letter_guessed.style.background = "green";
                            green = true;
                        }else{
                            first_letter_guessed.style.background = "orange";
                            orange = true;
                        }
                    }
                    if(word.includes(second_letter_guessed.innerHTML)){
                        if(second_letter_guessed.innerHTML == second_letter){
                            second_letter_guessed.style.background = "green";
                            green = true;
                        }else{
                            second_letter_guessed.style.background = "orange";
                            orange = true;
                        }
                    }
                    if(word.includes(third_letter_guessed.innerHTML)){
                        if(third_letter_guessed.innerHTML == third_letter){
                            third_letter_guessed.style.background = "green";
                            green = true;
                        }else{
                            third_letter_guessed.style.background = "orange";
                            orange = true;
                        }
                    }
                }

                if(green){
                    info_box.innerHTML = "wow! right place aswell";
                }else if(orange){
                    info_box.innerHTML = "decent but wrong place";
                }
        
                //reset go to next round
                round_num++;
                guess_num=1;
                word_guessed ="";
            }else{
                guess_num=1;
                word_guessed ="";
                first_letter_guessed.innerHTML = "";
                second_letter_guessed.innerHTML = "";
                third_letter_guessed.innerHTML = "";
                info_box.innerHTML = "not in word list";
            }
        }
    }
});

// //-----------Var Inits--------------
// canvas = document.getElementById("canvas");
// ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// cx = ctx.canvas.width / 2;
// cy = ctx.canvas.height / 2;

// let confetti = [];
// const confettiCount = 300;
// const gravity = 0.5;
// const terminalVelocity = 5;
// const drag = 0.075;
// const colors = [
// { front: 'red', back: 'darkred' },
// { front: 'green', back: 'darkgreen' },
// { front: 'blue', back: 'darkblue' },
// { front: 'yellow', back: 'darkyellow' },
// { front: 'orange', back: 'darkorange' },
// { front: 'pink', back: 'darkpink' },
// { front: 'purple', back: 'darkpurple' },
// { front: 'turquoise', back: 'darkturquoise' }];


// //-----------Functions--------------
// resizeCanvas = () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   cx = ctx.canvas.width / 2;
//   cy = ctx.canvas.height / 2;
// };

// randomRange = (min, max) => Math.random() * (max - min) + min;

// initConfetti = () => {
//   for (let i = 0; i < confettiCount; i++) {
//     confetti.push({
//       color: colors[Math.floor(randomRange(0, colors.length))],
//       dimensions: {
//         x: randomRange(10, 20),
//         y: randomRange(10, 30) },

//       position: {
//         x: randomRange(0, canvas.width),
//         y: canvas.height - 1 },

//       rotation: randomRange(0, 2 * Math.PI),
//       scale: {
//         x: 1,
//         y: 1 },

//       velocity: {
//         x: randomRange(-25, 25),
//         y: randomRange(0, -50) } });


//   }
// };

// //---------Render-----------
// render = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   confetti.forEach((confetto, index) => {
//     let width = confetto.dimensions.x * confetto.scale.x;
//     let height = confetto.dimensions.y * confetto.scale.y;

//     // Move canvas to position and rotate
//     ctx.translate(confetto.position.x, confetto.position.y);
//     ctx.rotate(confetto.rotation);

//     // Apply forces to velocity
//     confetto.velocity.x -= confetto.velocity.x * drag;
//     confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
//     confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

//     // Set position
//     confetto.position.x += confetto.velocity.x;
//     confetto.position.y += confetto.velocity.y;

//     // Delete confetti when out of frame
//     if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

//     // Loop confetto x position
//     if (confetto.position.x > canvas.width) confetto.position.x = 0;
//     if (confetto.position.x < 0) confetto.position.x = canvas.width;

//     // Spin confetto by scaling y
//     confetto.scale.y = Math.cos(confetto.position.y * 0.1);
//     ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

//     // Draw confetti
//     ctx.fillRect(-width / 2, -height / 2, width, height);

//     // Reset transform matrix
//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//   });

//   // Fire off another round of confetti
//   if (confetti.length <= 10) initConfetti();

//   window.requestAnimationFrame(render);
// };

// //---------Execution--------
// initConfetti();
// render();

// //----------Resize----------
// window.addEventListener('resize', function () {
//   resizeCanvas();
// });

// //------------Click------------
// window.addEventListener('click', function () {
//   initConfetti();
// });