export const makeRecipe = () => {
    return {
        type: "MAKE_RECIPE",
        payload: " Banana, appple, strawberry, honey."
    }
}

export const newRecipe = () => {
    return {
        type: "NEW_RECIPE",
        payload: "Spinach, broccoli, basil, banana."
    }
}
export const otherRecipe = () => {
    return {
        type: "OTHER_RECIPE",
        payload: "Pineapple, banana, milk, mango"
    }
}