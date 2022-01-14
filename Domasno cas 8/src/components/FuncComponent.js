import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeRecipe, otherRecipe } from './../actions/Actions';



export const FuncComponent = () => {

    const dispatch = useDispatch();
    const sweetSmoothie = useSelector(state => state.Reducer.sweet);
    const otherSweetSmoothie = useSelector(state => state.Reducer.secondsweet);

    useEffect(() => {
        dispatch(makeRecipe());
        dispatch(otherRecipe())
    }, [dispatch])

    return (
        <div id="redux-func">
            <h2>Sweet Smoothies: </h2>
            <p>1.{sweetSmoothie} </p>
            <p>2.{otherSweetSmoothie}</p>

        </div >
    )
}