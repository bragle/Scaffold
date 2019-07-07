class Scaffold {

	_buildNode(tag, attributes){

		const element = document.createElement(tag);

		Object.keys(attributes).forEach(key => {

			let attribute = attributes[key];

			switch(key){

				case 'tag':

					//don't use the type for anything

				break;

				case 'node':

					if (!(attribute instanceof Array) && attribute instanceof Object){

						attribute = [attribute];

					}

					if (attribute instanceof Array) {

						this._buildNodes(attribute).forEach(child => {

							element.appendChild(child);

						});

					} else {

						throw new Error('Node should be either an array or an object');

					}

				break;

				case 'event':

					if(!(attribute instanceof Array)){

						throw new Error('Event key should only be used with an array');

					}

					if(attribute.length < 2){

						throw new Error('Event key must contain an event and a function');

					}

					if(attribute[0] instanceof Array){

						attribute.forEach(event => {

							element.addEventListener(...event);

						});

					}else{

						element.addEventListener(...attribute);

					}

				break;

				case 'text':

					element.textContent = attribute;

				break;

				default:

					if(typeof attribute !== 'string'){

						throw new Error('Normal keys should only be used with a string');

					}

					element.setAttribute(key, attribute);

				break;

			}

		});

		return element;

	}

	_buildNodes(nodes){

		const elements = [];

		if(!(nodes instanceof Object)){

			throw new Error('A node must be either an object or an array');

		}

		Object.keys(nodes).forEach(key => {

			if(!nodes[key].hasOwnProperty('tag')){

				throw new Error('Nodes in an array must contain a tag attribute');

			}

			elements.push(this._buildNode(nodes[key].tag, nodes[key]));

		});

		return elements;

	}

	build(object, returnArray){

		if (!(object instanceof Array) && object instanceof Object) {

			object = [object];

		}

		if (object instanceof Array) {

			const elements = paraply.scaffold._buildNodes(object);

			return elements.length == 1 && !returnArray ? elements[0] : elements;

		} else {

			throw new Error('Build object should be either an array or an object');

		}

	}

	buildFromJson(json){

		let parsedJson;

		try {

			parsedJson = JSON.parse(json);

		} catch (e) {

			throw new Error('Invalid JSON passed');

		}

		return self.build(parsedJson);

	}

}
