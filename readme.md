Created a quiz that logs the user score
When the Start Quiz button is clicked
Then a series of questions follows
When a wrong answer is selected
Then 10 seconds is taken off the time clock
When Quiz is finished
Then a screen requesting the user's initials as well as the users score appears
When the user inputs their initials
Then it is logged to the browser with current and past highscores appearing
When View Highscores is clicked
Then past highscores appear
When Clear Highscores is clicked
Then current and past highscores are cleared from storage
When Go Back is clicked
Then page returns to beginning awaiting user selection