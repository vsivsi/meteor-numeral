## meteor-numeral

*Note: this package is a replacement for the old auto-migrated `mrt:numeral` package.*
That package does not conform to the Meteor 1.0 package specifications and will not be maintained.
If you are starting a new project, use this package, not `mrt:numeral`!
If you are updating an existing project, this is a drop-in replacement, you can simply:
```
meteor remove mrt:numeral
meteor add vsivsi:numeral
```

A meteorite package for [Atmosphere](https://atmosphere.meteor.com), providing a wrapper for the [numeral-js](https://github.com/adamwdraper/Numeral-js) library by [Adam Draper](https://github.com/adamwdraper).

### How to install:
1. inside your project, run:
    `$ meteor add vsivsi:numeral`

`meteor-numeral` has no dependencies on the client or server.

### In your Meteor project:

Exposes the `numeral` object.

API documentation is available at [http://numeraljs.com/](http://numeraljs.com/)
