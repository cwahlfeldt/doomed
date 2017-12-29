import React from "react";
import CMS from "netlify-cms";
import { SketchPicker } from 'react-color';
import PostPreview from "./cms-preview-templates/post";

// Example of creating a custom color widget
class ColorControl extends React.Component {
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

class DateControl extends React.Component {
  render() {
    return (
      <input
        class="date-control"
        style={{ height: "80px" }}
        type="date"
        value={this.props.value}
        onInput={(e) => this.props.onChange(e.target.value)}
      />
    );
  }
}

class SketchControl extends React.Component {
  render() {
    return (
      <SketchPicker
        value={ this.props.value }
      />
    );
  }
}

CMS.registerPreviewStyle("/css/main.css");
CMS.registerPreviewTemplate("posts", PostPreview);
CMS.registerWidget("color", ColorControl);
CMS.registerWidget("date", DateControl);
CMS.registerWidget("sketch", SketchControl);
