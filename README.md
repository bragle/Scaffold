# Scaffold
Build HTML with JSON

How to use:

```javascript
// create an instance of Scaffold

const scaffold = new Scaffold();

// create a simple node

const element = scaffold.build({
  
  'div': {
    
    'text': 'This is a node!'
    
  }
  
});

// you can also do it like this (you might want that if you want to create multiple nodes with the same tag)


const element = scaffold.build([
  
  {
    
    'tag': 'div',
    'text': 'This is a node!'
    
  },
  {
    
    'tag': 'div',
    'text': 'This is another node!'
    
  }
  
]);

// add any attribute you'd like

const element = scaffold.build({
  
  'div': {
    
    'text': 'This is a node!',
    'id': 'cool-id',
    'class': 'cool-class-name',
    'something-else': 'this is also an attribute'
    
  }
  
});

// add events

const element = scaffold.build({
  
  'div': {
    
    
    'text': 'This is a node!',
    'id': 'cool-id',
    'class': 'cool-class-name',
    'something-else': 'this is also an attribute'
    'event': ['click', e => {
      
      alert('Woah! Awesome!');
      
    }, true]
    
  }
  
});

// add child nodes

const element = scaffold.build({
  
  'div': {

    'class': 'box',
    'node': [
      
      {'tag': 'p', 'class': 'header', 'text': 'Box'},
      {'tag': 'p', 'class': 'description', 'text': 'Oh yeah, box-time'}
      
    ]
    
  }
  
});

```
