import React from 'react';
import { connect } from 'react-redux';
import { newRecipe } from './../actions/Actions';
import { finalRecipe } from './../actions/OtherActions';


class ClassComponent extends React.Component {


    componentDidMount() {
        this.props.secondrecipe();
        this.props.anotherrecipe();
    }

    render() {
        return (
            <div id='class-component'>
                <h2>Green Smoothies:</h2>
                <p>1. {this.props.greenSmoothie}</p>
                <p>2. {this.props.secondGreenSmoothie}</p>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {

        greenSmoothie: state.OtherReducer.green,
        secondGreenSmoothie: state.OtherReducer.secondgreen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        secondrecipe: () => {
            dispatch(newRecipe())
        },
        anotherrecipe: () => {
            dispatch(finalRecipe())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassComponent)