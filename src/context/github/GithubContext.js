import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	// const [state, dispatch] = useReducer(githubReducer, initialState);

	const [state, dispatch] = useReducer(githubReducer, initialState);

	// Get serach results
	// const searchUsers = async (text) => {
	// 	// setLoading();

	// 	const params = new URLSearchParams({
	// 		q: text,
	// 	});

	// 	const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
	// 		headers: {
	// 			Authorizarion: `token ${GITHUB_TOKEN}`,
	// 		},
	// 	});
	// };

	return (
		<GithubContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubContext;
