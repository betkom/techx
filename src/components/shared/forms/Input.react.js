import React from 'react'
import InputBase from './InputBase.react'
import classnames from 'classnames'

export default class Input extends InputBase {
  constructor(props) {
    super(props)
    this.setInitialState(props) //weird workaround for ie shallow copy: http://babeljs.io/docs/plugins/transform-proto-to-assign/
  }
  render() {
    return <InputElement {...this.props} value={this.state.formValue} onChange={this.onFormElementChange.bind(this)} />
  }
}

const InputElement = ({wrap, ...otherProps}) => (
  <input {...otherProps} type={otherProps.type ? otherProps.type : 'text'} />
)

Input.defaultProps = {wrap: true}
