/* INDEX FILE
It exports as default the reducer function of the duck.
It exports as named export the selectors and the operations.
Optionally it exports the actions and types if they are needed in other ducks.
*/

import reducers from "./reducers";

import questionsService from "./service";
import questionsTypes from "./types";
import questionsActions from "./actions";

export { questionsService, questionsActions, questionsTypes };

export default reducers;
