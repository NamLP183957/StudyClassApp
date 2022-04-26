import { Dispatch } from "redux";
import { PaginationRequest } from "../../types/pagination/PaginationRequest";
import RequestService from "../../utils/RequestService";
import { questionLoading, questionsFetchFailure, questionsFetchSuccess } from "../actions/QuestionAction";

export const fetchQuestions = (paginationRequest: PaginationRequest, testId: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(questionLoading());
        const response = await RequestService.post(`/question/pagination?test-id=${testId}`, paginationRequest, true);
        dispatch(questionsFetchSuccess(response.data));
    } catch (error) {
        dispatch(questionsFetchFailure(error.reponse.data))
    }
}