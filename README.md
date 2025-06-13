# WYSIWYG Editor

A simple and customizable simple text editor built with React and TypeScript.

## Features

- Simple text formatting (Bold, Italic, Underline)
- Controlled & Uncontrolled component patterns
- Customizable toolbar
- Easy to integrate

## Installation

```bash
git clone <https://github.com/YousefMaher179/ososs-tech-test.git>
npm install
npm start
```

## Quick Start

### Basic Usage

```jsx
import { WysiwygEditor } from './components/WysiwygEditor';
import { EditorState } from 'draft-js';

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
    <WysiwygEditor
      editorState={editorState}
      onChange={setEditorState}
      placeholder="Start typing..."
    />
  );
}
```

## Usage Examples

### Controlled Mode
The editor requires you to manage the state (controlled component):

```jsx
const [editorState, setEditorState] = useState(EditorState.createEmpty());

<WysiwygEditor
  editorState={editorState}
  onChange={setEditorState}
/>
```

### Uncontrolled Mode
Simple implementation where editor manages its own state internally:

```jsx
function SimpleEditor() {
  return (
    <WysiwygEditor
      placeholder="Start typing..."
    />
  );
}
```

### Custom Toolbar
Replace the default toolbar with your own:

```jsx
const CustomToolbar = () => (
  <div>
    <button onClick={() => toggleBold()}>Bold</button>
    <button onClick={() => toggleItalic()}>Italic</button>
  </div>
);

<WysiwygEditor
  editorState={editorState}
  onChange={setEditorState}
  toolbar={<CustomToolbar />}
/>
```

## Project Structure

```
ososs-task/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── __tests__/
│   │   └── components/
│   │       └── Toolbar/
│   │           └── Toolbar.test.tsx
│   ├── components/
│   │   ├── Toolbar/
│   │   │   ├── index.ts
│   │   │   ├── Toolbar.module.css
│   │   │   └── Toolbar.tsx
│   │   └── WysiwygEditor/
│   │       ├── index.ts
│   │       ├── WysiwygEditor.module.css
│   │       └── WysiwygEditor.tsx
│   ├── demo/
│   │   ├── DemoPage.module.css
│   │   ├── DemoPage.tsx
│   │   └── index.ts
│   ├── types/
│   │   ├── editor.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── api.ts
│   │   └── index.ts
│   ├── App.module.css
│   ├── App.tsx
│   ├── index.tsx
│   └── setupTests.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```

## Scripts

```bash
# Development
npm start

# Testing
npm test

# Build
npm run build
```

## Dependencies

- React
- Draft.js
- TypeScript
