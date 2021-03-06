import React from 'react';

import Markdown from '../../components/Markdown';

export default () => {
    return (
<Markdown
    content={`
## Difference

A _parameter_ is the variable belonging to the declaration of a function.

An _argument_ is the actual value of the parameter that is passed to the function.

Assume that we have a function that calculates the sum of two numbers:

~~~ javascript
const sum = function(a, b) {
    return a + b;
};
~~~

here \`a\` and \`b\` are the parameters. If we call the function, \`sum(1, 2)\`, then \`1\` and \`2\` are the arguments.

## Tip

There is a handy memory hook to distinguish these terms:

__P__arameter → __P__laceholder

__A__rgument → __A__ctual value
`}
/>
    );
};
