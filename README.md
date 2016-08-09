# ng2-vizabi

Native Angular2 directive for [Vizabi](https://github.com/Gapminder/vizabi) component.

[Vizabi](https://github.com/Gapminder/vizabi) is a framework for building visual data exploration tools freely provided by Gapminder. WARNING: Vizabi is in alpha. Don't expect too much!

- - -

## Quick start

1. A recommended way to install ***ng2-vizabi*** is through [npm](https://www.npmjs.com/search?q=ng2-vizabi) package manager using the following command:

  `npm i ng2-vizabi --save`

  Alternatively, you can [download it in a ZIP file](https://github.com/VS-work/ng2-vizabi/archive/master.zip).

2. More information regarding using of ***ng2-vizabi*** is located in
  [demo](http://VS-work.github.io/ng2-vizabi/) and [demo sources](https://github.com/VS-work/ng2-vizabi/tree/master/demo).

## API

### Properties

  * `readerModuleObject` (`?any`) - object (separate module that contains method to get reader's object); undefined by default
  * `readerGetMethod` (`?string`) - method name (to get reader's object) in `readerModuleObject`; undefined by default
  * `readerParams` (`?Array<any>`) - parameters for `readerGetMethod`; undefined by default
  * `readerName` (`?string`) - reader's name; undefined by default
  * `model` (`any`) - model for current `Vizabi` instance
  * `modelHash` (`?string`) - hash (url encoded) with extra data for `model`; undefined by default 
  * `metadata` (`any`) - metadata for current `Vizabi` instance
  * `translations` (`any`) - translations for current `Vizabi` instance
  * `chartType` (`string`) - chart type for current `Vizabi` instance

## Troubleshooting

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/VS-work/ng2-vizabi/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

### License

The MIT License (see the [LICENSE](https://github.com/VS-work/ng2-vizabi/blob/master/LICENSE) file for the full text)