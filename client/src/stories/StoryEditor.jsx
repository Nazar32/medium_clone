/* eslint-disable */
import React, { Component } from 'react';
import './StoryEditor.scss';

class StoryEditor extends Component {
  state = {

  };

  render() {
    return (
      <div className="editor">
        <div className="editor_headline">
          <h1 className="title">This is article Name</h1>
        </div>
        <section className="editor_section">
          <p className="item item--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>        
        </section>
        <section className="editor_section">
          <p className="item item--text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>        
        </section>
      </div>
    );
  }
}

export default StoryEditor;
