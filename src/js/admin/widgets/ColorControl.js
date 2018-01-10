import React from 'react';

// Example of creating a custom color widget
export default class ColorControl extends React.Component {
  render() {
    return (
      <input
        class="color-control"
        style={{ height: "80px" }}
        type="color"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
      />
    );
  }
}
