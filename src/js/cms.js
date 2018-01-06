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
CMS.registerEditorComponent({
  // Internal id of the component
  id: "youtube",
  // Visible label
  label: "Youtube",
  // Fields the user need to fill out when adding an instance of the component
  fields: [{name: 'id', label: 'Youtube Video ID', widget: 'string'}],
  // Pattern to identify a block as being an instance of this component
  pattern: /^youtube (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return 'youtube ' + obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      '<img src="http://img.youtube.com/vi/' + obj.id + '/maxresdefault.jpg" alt="Youtube Video"/>'
    );
  }
});
CMS.registerEditorComponent({
  // Internal id of the component
  id: "image",
  // Visible label
  label: "Image",
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'image', label: 'Image', widget: 'image'
    },
    {
      name: 'alt', label: 'Alt', widget: 'string'
    }
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^img (\S+)$/,
  // Function to extract data elements from the regexp match
  fromBlock: function(match) {
    return {
      id: match[1]
    };
  },
  // Function to create a text block from an instance of this component
  toBlock: function(obj) {
    return 'youtube ' + obj.id;
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function(obj) {
    return (
      `<img src="${obj.id}" alt="${obj.alt}"/>`
    );
  }
});
