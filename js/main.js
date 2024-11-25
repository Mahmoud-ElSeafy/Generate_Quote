//Quotes array of objects
var quotes = [
    {quoteImg: "Oscar Wilde", quoteData: "“Be yourself; everyone else is already taken.”", quoteAuthor: "-- Oscar Wilde"},
    {quoteImg: "Marilyn Monroe", quoteData: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”", quoteAuthor: "-- Marilyn Monroe"},
    {quoteImg: "Frank Zappa", quoteData: "“So many books, so little time.”", quoteAuthor: "-- Frank Zappa"},
    {quoteImg: "Albert Einstein", quoteData: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”", quoteAuthor: "-- Albert Einstein"},
    {quoteImg: "Marcus Tullius Cicero", quoteData: "“A room without books is like a body without a soul.”", quoteAuthor: "-- Marcus Tullius Cicero"},
    {quoteImg: "Bernard M. Baruch", quoteData: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”", quoteAuthor: "-- Bernard M. Baruch"},
    {quoteImg: "Dr. Seuss", quoteData: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", quoteAuthor: "-- Dr. Seuss"},
    {quoteImg: "Mae West", quoteData: "“You only live once, but if you do it right, once is enough.”", quoteAuthor: "-- Mae West"},
    {quoteImg: "Mahatma Gandhi", quoteData: "“Be the change that you wish to see in the world.”", quoteAuthor: "-- Mahatma Gandhi"},
    {quoteImg: "Robert Frost", quoteData: "“In three words I can sum up everything I've learned about life: it goes on.”", quoteAuthor: "-- Robert Frost"},
    {quoteImg: "J.K. Rowling", quoteData: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”", quoteAuthor: "-- J.K. Rowling, Harry Potter and the Goblet of Fire"},
    {quoteImg: "Mark Twain", quoteData: "“If you tell the truth, you don't have to remember anything.”", quoteAuthor: "-- Mark Twain"},
    {quoteImg: "Maya Angelou", quoteData: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”", quoteAuthor: "-- Maya Angelou"},
    {quoteImg: "C.S. Lewis", quoteData: "“Friendship ... is born at the moment when one man says to another - What! You too? I thought that no one but myself . . .”", quoteAuthor: "-- C.S. Lewis, The Four Loves"},
    {quoteImg: "Elbert Hubbard", quoteData: "“A friend is someone who knows all about you and still loves you.”", quoteAuthor: "-- Elbert Hubbard"},
    {quoteImg: "Oscar Wilde", quoteData: "“To live is the rarest thing in the world. Most people exist, that is all.”", quoteAuthor: "-- Oscar Wilde"},
    {quoteImg: "Oscar Wilde", quoteData: "“Always forgive your enemies; nothing annoys them so much.”", quoteAuthor: "-- Oscar Wilde"},
    {quoteImg: "Martin Luther King Jr.", quoteData: "“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”", quoteAuthor: "-- Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches"},
    {quoteImg: "Mahatma Gandhi", quoteData: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”", quoteAuthor: "-- Mahatma Gandhi"},
    {quoteImg: "Stephen Chbosky", quoteData: "“We accept the love we think we deserve.”", quoteAuthor: "-- Stephen Chbosky, The Perks of Being a Wallflower"},
    {quoteImg: "Friedrich Nietzsche", quoteData: "“Without music, life would be a mistake.”", quoteAuthor: "-- Friedrich Nietzsche, Twilight of the Idols"},
    {quoteImg: "Oscar Wilde", quoteData: "“I am so clever that sometimes I don't understand a single word of what I am saying.”", quoteAuthor: "-- Oscar Wilde, The Happy Prince and Other Stories"},
    {quoteImg: "Ralph Waldo Emerson", quoteData: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”", quoteAuthor: "-- Ralph Waldo Emerson"},
    {quoteImg: "Steve Jobs", quoteData: "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”", quoteAuthor: "-- Steve Jobs"},
    {quoteImg: "Marilyn Monroe", quoteData: "“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”", quoteAuthor: "-- Marilyn Monroe"},
    {quoteImg: "Andre Gide", quoteData: "“It is better to be hated for what you are than to be loved for what you are not.”", quoteAuthor: "-- Andre Gide, Autumn Leaves"},
    {quoteImg: "H. Jackson Brown Jr.", quoteData: "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”", quoteAuthor: "-- H. Jackson Brown Jr., P.S. I Love You"},
    {quoteImg: "Jane Austen", quoteData: "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”", quoteAuthor: "-- Jane Austen, Northanger Abbey"},
    {quoteImg: "J.K. Rowling", quoteData: "“It is our choices, Harry, that show what we truly are, far more than our abilities.”", quoteAuthor: "-- J.K. Rowling, Harry Potter and the Chamber of Secrets"},
    {quoteImg: "Marilyn Monroe", quoteData: "“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”", quoteAuthor: "-- Marilyn Monroe"},
    {quoteImg: "Albert Einstein", quoteData: "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”", quoteAuthor: "-- Albert Einstein"},
    {quoteImg: "J.K. Rowling", quoteData: "“It does not do to dwell on dreams and forget to live.”", quoteAuthor: "-- J.K. Rowling, Harry Potter and the Sorcerer's Stone"},
    {quoteImg: "Mark Twain", quoteData: "“Good friends, good books, and a sleepy conscience: this is the ideal life.”", quoteAuthor: "-- Mark Twain"},
    {quoteImg: "John Green", quoteData: "“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”", quoteAuthor: "-- John Green, The Fault in Our Stars"},
    {quoteImg: "Oscar Wilde", quoteData: "“We are all in the gutter, but some of us are looking at the stars.”", quoteAuthor: "-- Oscar Wilde, Lady Windermere's Fan"},
    {quoteImg: "Neil Gaiman", quoteData: "“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”", quoteAuthor: "-- Neil Gaiman, Coraline"},
    {quoteImg: "William Shakespeare", quoteData: "“The fool doth think he is wise, but the wise man knows himself to be a fool.”", quoteAuthor: "-- William Shakespeare, As You Like It"},
    {quoteImg: "Maurice Switzer", quoteData: "“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”", quoteAuthor: "-- Maurice Switzer, Mrs. Goose, Her Book"},
    {quoteImg: "Mark Twain", quoteData: "“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”", quoteAuthor: "-- Mark Twain"},
    {quoteImg: "Allen Saunders", quoteData: "“Life is what happens to us while we are making other plans.”", quoteAuthor: "-- Allen Saunders"},
    {quoteImg: "Bill Keane", quoteData: "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”", quoteAuthor: "-- Bill Keane"},
    {quoteImg: "Thomas A. Edison", quoteData: "“I have not failed. I've just found 10,000 ways that won't work.”", quoteAuthor: "-- Thomas A. Edison"},
    {quoteImg: "Friedrich Nietzsche", quoteData: "“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”", quoteAuthor: "-- Friedrich Nietzsche"},
    {quoteImg: "Elie Wiesel", quoteData: "“The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.”", quoteAuthor: "-- Elie Wiesel"},
    {quoteImg: "Mark Twain", quoteData: "“The man who does not read has no advantage over the man who cannot read.”", quoteAuthor: "-- Mark Twain"},
    {quoteImg: "Eleanor Roosevelt", quoteData: "“A woman is like a tea bag; you never know how strong it is until it's in hot water.”", quoteAuthor: "-- Eleanor Roosevelt"},
    {quoteImg: "Pablo Neruda", quoteData: "“I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close.”", quoteAuthor: "-- Pablo Neruda, 100 Love Sonnets"},
    {quoteImg: "douglas adams", quoteData: "“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”", quoteAuthor: "-- douglas adams, The Long Dark Tea-Time of the Soul"},
    {quoteImg: "Groucho Marx", quoteData: "“Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.”", quoteAuthor: "-- Groucho Marx, The Essential Groucho: Writings For By And About Groucho Marx"},
    {quoteImg: "J.K. Rowling", quoteData: "“I solemnly swear that I am up to no good.”", quoteAuthor: "-- J.K. Rowling, Harry Potter and the Prisoner of Azkaban"},
    {quoteImg: "Albert Einstein", quoteData: "“I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.”", quoteAuthor: "-- Albert Einstein"},
    {quoteImg: "Neil Gaiman", quoteData: "“Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up.”", quoteAuthor: "-- Neil Gaiman, The Sandman, Vol. 9: The Kindly Ones"},
    {quoteImg: "Dr. Seuss", quoteData: "“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”", quoteAuthor: "-- Dr. Seuss"},
    {quoteImg: "George R.R. Martin", quoteData: "“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”", quoteAuthor: "-- George R.R. Martin, A Dance with Dragons"},
    {quoteImg: "Steve Martin", quoteData: "“A day without sunshine is like, you know, night.”", quoteAuthor: "-- Steve Martin"},
    {quoteImg: "Lao Tzu", quoteData: "“Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.”", quoteAuthor: "-- Lao Tzu"},
    {quoteImg: "Mark Twain", quoteData: "“Never put off till tomorrow what may be done day after tomorrow just as well.”", quoteAuthor: "-- Mark Twain"},
    {quoteImg: "Friedrich Nietzsche", quoteData: "“That which does not kill us makes us stronger.”", quoteAuthor: "-- Friedrich Nietzsche"},
    {quoteImg: "Dr. Seuss", quoteData: "“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...”", quoteAuthor: "-- Dr. Seuss, Oh, the Places You’ll Go!"},
    {quoteImg: "George Eliot", quoteData: "“It is never too late to be what you might have been.”", quoteAuthor: "-- George Eliot"},
    {quoteImg: "Ralph Waldo Emerson", quoteData: "“For every minute you are angry you lose sixty seconds of happiness.”", quoteAuthor: "-- Ralph Waldo Emerson"},
    {quoteImg: "J.K. Rowling", quoteData: "“It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.”", quoteAuthor: "-- J.K. Rowling, Harry Potter and the Sorcerer's Stone"},
    {quoteImg: "Douglas Adams", quoteData: "“I love deadlines. I love the whooshing noise they make as they go by.”", quoteAuthor: "-- Douglas Adams, The Salmon of Doubt: Hitchhiking the Galaxy One Last Time"},
    {quoteImg: "Friedrich Nietzsche", quoteData: "“I'm not upset that you lied to me, I'm upset that from now on I can't believe you.”", quoteAuthor: "-- Friedrich Nietzsche"},
    {quoteImg: "Mother Teresa", quoteData: "“If you judge people, you have no time to love them.”", quoteAuthor: "-- Mother Teresa"},
    {quoteImg: "Maya Angelou", quoteData: "“There is no greater agony than bearing an untold story inside you.”", quoteAuthor: "-- Maya Angelou, I Know Why the Caged Bird Sings"},
    {quoteImg: "Sarah Dessen", quoteData: "“There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.”", quoteAuthor: "-- Sarah Dessen, The Truth About Forever"},
    {quoteImg: "Albert Einstein", quoteData: "“If you can't explain it to a six year old, you don't understand it yourself.”", quoteAuthor: "-- Albert Einstein"},
    {quoteImg: "Haruki Murakami", quoteData: "“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”", quoteAuthor: "-- Haruki Murakami, Norwegian Wood"},
    {quoteImg: "Robert A. Heinlein", quoteData: "“Love is that condition in which the happiness of another person is essential to your own.”", quoteAuthor: "-- Robert A. Heinlein, Stranger in a Strange Land"},
    {quoteImg: "Garrison Keillor", quoteData: "“Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.”", quoteAuthor: "-- Garrison Keillor"},
    {quoteImg: "Pablo Picasso", quoteData: "“Everything you can imagine is real.”", quoteAuthor: "-- Pablo Picasso"},
    {quoteImg: "Jorge Luis Borges", quoteData: "“I have always imagined that Paradise will be a kind of library.”", quoteAuthor: "-- Jorge Luis Borges"},
    {quoteImg: "Robert A. Heinlein", quoteData: "“Women and cats will do as they please, and men and dogs should relax and get used to the idea.”", quoteAuthor: "-- Robert A. Heinlein"},
    {quoteImg: "Anaïs Nin", quoteData: "“We don't see things as they are, we see them as we are.”", quoteAuthor: "-- Anaïs Nin"},
    {quoteImg: "Dr. Seuss", quoteData: "“Sometimes the questions are complicated and the answers are simple.”", quoteAuthor: "-- Dr. Seuss"},
    {quoteImg: "C.S. Lewis", quoteData: "“You can never get a cup of tea large enough or a book long enough to suit me.”", quoteAuthor: "-- C.S. Lewis"},
    {quoteImg: "Lemony Snicket", quoteData: "“Never trust anyone who has not brought a book with them.”", quoteAuthor: "-- Lemony Snicket, Horseradish: Bitter Truths You Can't Avoid"},
    {quoteImg: "William Nicholson", quoteData: "“We read to know we're not alone.”", quoteAuthor: "-- William Nicholson, Shadowlands: A Play"},
    {quoteImg: "George Bernard Shaw", quoteData: "“Life isn't about finding yourself. Life is about creating yourself.”", quoteAuthor: "-- George Bernard Shaw"},
    {quoteImg: "John Green", quoteData: "“Sometimes, you read a book and it fills you with this weird evangelical zeal, and you become convinced that the shattered world will never be put back together unless and until all living humans read the book.”", quoteAuthor: "-- John Green, The Fault in Our Stars"},
    {quoteImg: "Charles M. Schulz", quoteData: "“All you need is love. But a little chocolate now and then doesn't hurt.”", quoteAuthor: "-- Charles M. Schulz"},
    {quoteImg: "Jim Henson", quoteData: "“Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye.”", quoteAuthor: "-- Jim Henson"},
    {quoteImg: "J.K. Rowling", quoteData: "“Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?”", quoteAuthor: "-- J.K. Rowling, Harry Potter and the Deathly Hallows"},
    {quoteImg: "Dr. Seuss", quoteData: "“Today you are You, that is truer than true. There is no one alive who is Youer than You.”", quoteAuthor: "-- Dr. Seuss, Happy Birthday to You!"},
    {quoteImg: "Woody Allen", quoteData: "“I'm not afraid of death; I just don't want to be there when it happens.”", quoteAuthor: "-- Woody Allen"},
    {quoteImg: "Oscar Wilde", quoteData: "“If one cannot enjoy reading a book over and over again, there is no use in reading it at all.”", quoteAuthor: "-- Oscar Wilde"},
    {quoteImg: "J.K. Rowling", quoteData: "“To the well-organized mind, death is but the next great adventure.”", quoteAuthor: "-- J.K. Rowling, Harry Potter and the Sorcerer's Stone"},
    {quoteImg: "J.K. Rowling", quoteData: "“It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all—in which case, you fail by default.”", quoteAuthor: "-- J.K. Rowling"},
    {quoteImg: "Albert Einstein", quoteData: "“If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.”", quoteAuthor: "-- Albert Einstein"},
    {quoteImg: "Albert Einstein", quoteData: "“Logic will get you from A to Z; imagination will get you everywhere.”", quoteAuthor: "-- Albert Einstein"},
    {quoteImg: "Nicholas Sparks", quoteData: "“I am nothing special, of this I am sure. I am a common man with common thoughts and I've led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I've loved another with all my heart and soul, and to me, this has always been enough..”", quoteAuthor: "-- Nicholas Sparks, The Notebook"},
    {quoteImg: "Paul Terry", quoteData: "“Whenever I feel the need to exercise, I lie down until it goes away.”", quoteAuthor: "-- Paul Terry"},
    {quoteImg: "Bob Marley", quoteData: "“The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.”", quoteAuthor: "-- Bob Marley"},
    {quoteImg: "William Shakespeare", quoteData: "“Love looks not with the eyes, but with the mind; And therefore is wing'd Cupid painted blind. Nor hath love's mind of any judgment taste; Wings and no eyes figure unheedy haste: And therefore is love said to be a child, Because in choice he is so oft beguil'd.”", quoteAuthor: "-- William Shakespeare, A Midsummer Night’s Dream"},
    {quoteImg: "John Green", quoteData: "“You don't get to choose if you get hurt in this world...but you do have some say in who hurts you. I like my choices.”", quoteAuthor: "-- John Green, The Fault in Our Stars"},
    {quoteImg: "Theodore Roosevelt", quoteData: "“Do what you can, with what you have, where you are.”", quoteAuthor: "-- Theodore Roosevelt"},
    {quoteImg: "Abraham Lincoln", quoteData: "“Folks are usually about as happy as they make their minds up to be.”", quoteAuthor: "-- Abraham Lincoln"},
    {quoteImg: "Dr. Seuss", quoteData: "“The more that you read, the more things you will know. The more that you learn, the more places you'll go.”", quoteAuthor: "-- Dr. Seuss, I Can Read With My Eyes Shut!"},
    {quoteImg: "Ernest Hemingway", quoteData: "“There is no friend as loyal as a book.”", quoteAuthor: "-- Ernest Hemingway"},
    {quoteImg: "Winston S. Churchill", quoteData: "“Success is not final, failure is not fatal: it is the courage to continue that counts.”", quoteAuthor: "-- Winston S. Churchill"},
    {quoteImg: "Bob Marley", quoteData: "“One good thing about music, when it hits you, you feel no pain.”", quoteAuthor: "-- Bob Marley"},
    {quoteImg: "Groucho Marx", quoteData: "“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.”", quoteAuthor: "-- Groucho Marx"},
    {quoteImg: "Nicholas Sparks", quoteData: "“Love is like the wind, you can't see it but you can feel it.”", quoteAuthor: "-- Nicholas Sparks, A Walk to Remember"},
    {quoteImg: "Stephen Chbosky", quoteData: "“So, this is my life. And I want you to know that I am both happy and sad and I'm still trying to figure out how that could be.”", quoteAuthor: "-- Stephen Chbosky, The Perks of Being a Wallflower"},
    {quoteImg: "Jane Austen", quoteData: "“There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.”", quoteAuthor: "-- Jane Austen, Northanger Abbey"}
    
];

//Declare index values
var x = ''; //current index value to be compared with the new generated random index
var i = ''; //generated random index

function addQuote(){
    do {
        
        i = Math.floor(Math.random() * quotes.length);
        console.log( x , i );
            
    } while (i == x); //Compare (latest previous index value in variable x) with (the new generated random value i)
    
        
        document.getElementById("quote").innerHTML = `
            <img class="rounded-circle" src="./images/${quotes[i].quoteImg}.jpg" alt="${quotes[i].quoteImg}">
            <p class="quoteData">${quotes[i].quoteData}</p>
            <p class="quoteAuthor">${quotes[i].quoteAuthor}</p>
            `
            x = i;  //register the current index value to variable x
}
