import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicSlice";

const quizSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => { //payload looks like: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
            state.quizzes[action.payload.id] = action.payload;
        }
    }
})

export function createQuiz(payload) {
    return (dispatchFunc) => {
        dispatchFunc(addQuiz(payload))
        const quizIdObj = {quizId: payload.id}
        // console.log("createQuiz topicId",payload.topicId)
        dispatchFunc(addQuizId(payload))
    }
}

export function selectQuizzes (state) {
    return state.quizzes.quizzes
}

export default quizSlice.reducer;
export const {addQuiz} = quizSlice.actions