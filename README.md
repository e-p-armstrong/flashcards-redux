# I can do redux too!

Created while working through Codecademy's Full Stack Engineer Course, this challenge project involved adding redux-managed state to a react application. I worked through it, and felt I might as well post my results to GitHub. 

I would not actually recommend using this for anything serious as it does not have a backend and thus will not remember all the stuff you enter into it. Unless you're like me, and have hundreds of permanently-open Chrome tabs, merely take this as part of my portfolio.

# To Run

Run `npm start` in the project root and the app will be available on port 3000.

# State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

# Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

# Questions

Is this appropriately scoped? Does it have too many features? Too few?
