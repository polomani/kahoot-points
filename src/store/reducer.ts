import { AnyAction } from "redux";
import { generatePlayerSummaryFromItems } from "./PlayerSummary";
import { AppState, GameItem, ItemTypes, ReducerMethods } from "./types";

const MAX_ITEMS_IN_GAME = 5;
const MIN_ITEMS_IN_GAME = 30;

function getRandomIntInRange(from: number, to: number) {
	return Math.floor(Math.random() * (to - from)) + from;
}

export function generateRandomItems(quantity: number) {
	const items: GameItem[] = [];
	for (let i = 0; i < quantity; i++) {
		items.push({
			id: i,
			type: ItemTypes[getRandomIntInRange(0, ItemTypes.length)],
		});
	}
	return items;
}

export function getInitialState(): AppState {
	return {
		gameItems: generateRandomItems(
			getRandomIntInRange(MIN_ITEMS_IN_GAME, MAX_ITEMS_IN_GAME),
		),
		player: generatePlayerSummaryFromItems([]),
	};
}

const reducerMethods: ReducerMethods = {
	GIVE_ITEM_TO_PLAYER(state: AppState, payload: any) {
		const targetItem = state.gameItems.find((item) => item.id === payload.itemId);
		if (targetItem) {
			return {
				gameItems: state.gameItems.filter((item) => item.id !== payload.itemId),
				player: generatePlayerSummaryFromItems([...state.player.items, targetItem]),
			};
		} else {
			return state;
		}
	},
	NEW_GAME() {
		return getInitialState();
	},
};

export function reducer(state: AppState = getInitialState(), action: AnyAction): AppState {
	return reducerMethods[action.type]
		? reducerMethods[action.type](state, action.payload)
		: state;
}
