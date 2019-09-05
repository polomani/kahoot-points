import { generatePlayerSummaryFromItems } from "../PlayerSummary";
import { generateRandomItems } from "../reducer";
import { ItemsSpecs } from "../types";

it("correct player summary [0 items]", () => {
  expect(generatePlayerSummaryFromItems([])).toEqual({
      total: 0,
      items: [],
      itemsSummary: new Map(),
      bonuses: 0,
  });
});

it("correct player summary [100 items]", () => {
    const items = generateRandomItems(20)
    const itemsSummary = new Map()
    let total = 0
    let bonuses = 0

    for (const item of items) {
        const itemSpecs = ItemsSpecs[item.type];
        let summary = itemsSummary.get(item.type);
        if (!summary) {
            summary = {
                points: 0,
                type: item.type,
                bonus: 0,
                quantity: 0,
                freePoints: 0,
                freeQuantity: 0,
            };
            itemsSummary.set(item.type, summary);
        }
        summary.quantity++;
        summary.freeQuantity++;
        summary.freePoints = summary.freeQuantity * itemSpecs.points;
        if (itemSpecs.bonus) {
            if (summary.freeQuantity === itemSpecs.bonus.itemsRequired) {
                summary.points += itemSpecs.bonus.points;
                summary.bonus += itemSpecs.bonus.points - summary.freePoints;
                summary.freeQuantity = 0;
                summary.freePoints = 0;
            }
        }
    }

    itemsSummary.forEach((summary) => {
        summary.points += summary.freePoints;
        total += summary.points;
        bonuses += summary.bonus;
        delete summary.freePoints;
        delete summary.freeQuantity;
    });

    expect(generatePlayerSummaryFromItems(items)).toEqual({
        total,
        items,
        itemsSummary,
        bonuses,
    });
  });
