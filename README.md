# Scaffold
Build HTML with JSON

How to use:

**Create an instance of Scaffold**
```javascript
const scaffold = new Scaffold();
```

**Create a simple node**
```javascript
const element = scaffold.build({

  tag: 'div',
  text: 'This is a node!'

});
```

**You can also do it like this**

You might want that if you want to create multiple nodes with the same tag
```javascript
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
```

**Add any attribute you'd like**
```javascript
const element = scaffold.build({

  tag: 'div',
  text: 'This is a node!',
  id: 'cool-id',
  class: 'cool-class-name',
  'something-else': 'this is also an attribute'

});
```

**Add events**
```javascript
const element = scaffold.build({

  tag: 'div',
  text: 'This is a node!',
  id: 'cool-id',
  class: 'cool-class-name',
  'something-else': 'this is also an attribute'
  event: ['click', e => {

    alert('Woah! Awesome!');

  }, true]

});
```

**Add many events...**
```javascript
const element = scaffold.build({

  tag: 'div',
  text: 'This is a node!',
  id: 'cool-id',
  class: 'cool-class-name',
  'something-else': 'this is also an attribute'
  event: [

    ['click', e => {

      alert('Woah! Awesome!');

    }, true],
    ['mouseover', e => {

      e.target.color = 'red';

    }, false]

  ]

});
```

**Add child nodes**
```javascript
const element = scaffold.build({

  tag: 'div',
  class: 'box',
  node: [

    {'tag': 'p', 'class': 'header', 'text': 'Box'},
    {'tag': 'p', 'class': 'description', 'text': 'Oh yeah, box-time'}

  ]

});
```
