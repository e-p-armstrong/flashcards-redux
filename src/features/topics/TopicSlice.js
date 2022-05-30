import { createSlice } from "@reduxjs/toolkit";

const topics = createSlice({
    name: "topics",
    initialState: {
        topics: {

        }
    },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload; //payload will look like: {id: '123456', name: 'name of topic', icon: 'icon url'}
            state.topics[action.payload.id].quizIds = []
        },
        addQuizId: (state,action) => { //Payload will look like: {quizId: '123', topicId: '456'}
            // state.topics[action.payload.topicId].quizIds.push(action.payload.quizId)
            console.log("action.payload.id",action.payload.id)
            console.log("topicId",state.topics[action.payload.topicId].quizIds)
            state.topics[action.payload.topicId].quizIds.push(action.payload.id)
            console.log("action.payload.id",action.payload.id)
        }
        }, 
    extraReducers: {

    },
})

export function selectTopics (state){
    return state.topics.topics;
}

export const { addTopic, addQuizId } = topics.actions
export default topics.reducer