import PropTypes from "prop-types"

// if the prop is passed, it use that prop and if the prop is not passed it use that default. hamile tala ko defaultprop pani use garna sakim tara react ley future maa hamile yo default prop lai hatauna sakxam vanera warning dinxa.
const Button = ({content = "default", arkoContent= "123"}) => {
    return (
      <>
        <button>{content}</button>
        <button>{arkoContent}</button>
      </>
    )
  }
//   Button.defaultProps = { //if app.jsx bata kei props aayena vani default props pani rakhna milyo like:
//     content : "default",
//     arkoContent : 123
//   }
  //this is from npm i prop-types(natra mildaina garna)
  Button.propTypes = { //if mero PropTypes maa arkoContent vanni kunai prop aako xa vani tesko datatype chai string hunu parxa vaneko.yesle sidai error ta didaina tara console maa warning dinxa.
    arkoContent : PropTypes.string.isRequired
  }
  export default Button