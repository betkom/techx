import React from 'react'
import classnames from 'classnames'
import InputBase from './InputBase.react'

export default class TextArea extends InputBase {
  constructor(props) {
    super(props)
    this.setInitialState(props)
    this.onFormElementChange = this.onFormElementChange.bind(this)
  }
  render() {
    return (<InputElement {...this.props} onChange={this.onFormElementChange} />)
  }
}

const InputElement = (props) => {
  return <textarea {...props} autoFocus={props.autoFocus} className={classnames('text-area', props.className)} />
}

TextArea.defaultProps = { autoFocus: false, wrap: "true" }
