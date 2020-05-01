import axios from "axios";

export default {
    create: function (quizResults) {
        console.log(quizResults);
        return axios.post('/api/savequiz', quizResults);
      }    
}