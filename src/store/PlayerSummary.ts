import { GameItem, ItemsSpecs, ItemSummary } from "./types";

export function generatePlayerSummaryFromItems(items: GameItem[]) {

    const itemsSummary: Map<string, ItemSummary> = new Map();
    let total = 0;
    let bonuses = 0;

    for (const item of items) {
        let summary = itemsSummary.get(item.type);
        if (!summary) {
            summary = { quantity: 0, points: 0, bonus: 0, type: item.type };
            itemsSummary.set(item.type, summary);
        }
        summary.quantity++;
    }

    itemsSummary.forEach((summary, type) => {
        const { bonus, points } = getPointsAndBonusForItems(type, summary.quantity);
        summary.points = points;
        summary.bonus = bonus;

        total += points;
        bonuses += bonus;
    });

    return {
        items,
        itemsSummary,
        total,
        bonuses,
    };
}

function getPointsForItems(itemType: string, quantity: number, withBonus: boolean) {
    const itemSpecs = ItemsSpecs[itemType];
    if (itemSpecs) {
        const { bonus, points } = itemSpecs;
        if (bonus && withBonus) {
            return Math.floor(quantity / bonus.itemsRequired) * bonus.points
                + (quantity % bonus.itemsRequired) * points;
        }
        return quantity * points;
    }
    return 0;
}

function getPointsAndBonusForItems(itemType: string, quantity: number) {
    const points = getPointsForItems(itemType, quantity, true);
    const bonus = points - getPointsForItems(itemType, quantity, false);
    return { points, bonus };
}
