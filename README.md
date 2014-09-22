schema-form-file-upload
========================

ngflow and ng-strap modal

This ng-flow add-on uses as the name implies the ng-flow plugin to provide a file upload interface. [ng-flow](https://github.com/flowjs/ng-flow) is used.

It provides a modal to allow upload files.

This add-on takes an options object via `uploadOptions` in the form. More info below at [Options](#Options).

Installation
------------
The editor is an add-on to the Bootstrap decorator. To use it, just include
`schema-form-file-upload.min.js`.

Easiest way is to install is with bower, this will also include dependencies:
```bash
$ bower install chengz/schema-form-file-upload
```

You'll need to load a few additional files to use the editor:

**Be sure to load this projects files after you load angular schema form**

Example

```HTML
<script type="text/javascript" src="/bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.min.js"></script>
<script src="bower_components/ng-flow/dist/ng-flow-standalone.js"></script>
<script src='bower_components/angular-strap/dist/angular-strap.min.js'></script>
<script src='bower_components/angular-strap/dist/angular-strap.tpl.min.js'></script>
<script src="bower_components/tv4/tv4.js"></script>
<script src="bower_components/objectpath/lib/ObjectPath.js"></script>
<script src="bower_components/angular-schema-form/dist/schema-form.min.js"></script>
<script src="bower_components/angular-schema-form/dist/bootstrap-decorator.min.js"></script>
<script src="schema-form-file-upload.js"></script>
```

When you create your module, be sure to depend on this project's module as well.

```javascript
angular.module('yourModule', ['schemaForm', 'schemaForm-file-upload']);
```

Usage
-----
The add-on adds a new form type, `ngflow`, and a new default
mapping.

| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "object" and "format": "file_upload"   |   file_upload   |


Options
-------
The `file_upload` form takes one option, `uploadOptions`. This is an object with any
and all options availible to tinymce.

### Example
This example replaces the standard toolbar with one we choose.

```javascript
{
  "key": "image",
  "uploadOptions": {
    "modale": {
      title: 'Modal Title',
      flow: {
        dropEnabled: true,
        imageOnly: true
      }
    }
  }
},
```

ngModel
-------
ngModel returns the below structure:
```javascript
image = {
  id: 1
  file_name: 'some file.jpg',
  file: {
    placeholder: '/url/to/image'
  }
}
