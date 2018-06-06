// Code ThemedDecoration Component Here
import React from 'react';

class ThemedDecoration extends React.Component {
  render () {
    const childrenWithExtraProps = React.Children.map(this.props.children,
    child => {
      return React.cloneElement(child, {
        className: this.props.theme
      })
    })
    return(
      <div className="themed-decorations">
      {childrenWithExtraProps}
      </div>
    )
  }
}

export default ThemedDecoration
