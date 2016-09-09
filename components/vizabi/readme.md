### Overview

Native Angular2 directive for `Vizabi` component. 

### Usage
```typescript
import {vizabiWrapper} from 'ng2-vizabi';
```

### Annotations
```typescript
// class VizabiWrapper
@Directive({
  selector: 'vizabi',
  properties: [
    'readerModuleObject',
    'readerGetMethod',
    'readerParams',
    'readerName',
    'model',
    'modelHash',
    'extResources',
    'translations',
    'chartType'
  ]
})
```

### VizabiWrapper properties

  * `readerModuleObject` (`?any`) - object (separate module that contains method to get reader's object); undefined by default
  * `readerGetMethod` (`?string`) - method name (to get reader's object) in `readerModuleObject`; undefined by default
  * `readerParams` (`?Array<any>`) - parameters for `readerGetMethod`; undefined by default
  * `readerName` (`?string`) - reader's name; undefined by default
  * `model` (`any`) - model for current `Vizabi` instance
  * `modelHash` (`?string`) - hash (url encoded) with extra data for `model`; undefined by default
  * `extResources` (`?any`) - extResources object (see `Vizabi._globals.ext_resources`)
  * `translations` (`any`) - translations for current `Vizabi` instance
  * `chartType` (`string`) - chart type for current `Vizabi` instance

### Reader customization

Next parameters are for reader customization:

  * `readerModuleObject`
  * `readerGetMethod`
  * `readerParams`
  * `readerName`

These parameters are optional. But for custom reader using they should be defined. More information - in demo example on this page.

More information regarding `Vizabi` you can see here:
 
 * [github](https://github.com/Gapminder/vizabi)
 * [demo](http://static.gapminderdev.org/vizabi/develop/preview/bubblechart.html)
 * [docs](http://vizabi.org/)
