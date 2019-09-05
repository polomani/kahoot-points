import { ActionCreator } from "redux";
import { ActionBase } from "./types";

export const giveItemToPlayer: ActionCreator<ActionBase> = (itemId: number) => ({
    type: "GIVE_ITEM_TO_PLAYER",
    payload: {
        itemId,
    },
});

export const newGame: ActionCreator<ActionBase> = () => ({
    type: "NEW_GAME",
});
