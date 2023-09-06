import count from "./count.js";
import createQuestion from "./createQuestion.js";
import findAllQuestion from "./findAllQuestion.js";
import findSingleQuestion from "./findSingleQuestion.js";
import patchUpdateQuestion from "./patchUpdateQuestion.js";
import putUpdateQuestion from "./putUpdateQuestion.js";


const questionService ={
    findAllQuestion,
    count,
    createQuestion,
    findSingleQuestion, 
    putUpdateQuestion,
    patchUpdateQuestion
}

export default questionService;