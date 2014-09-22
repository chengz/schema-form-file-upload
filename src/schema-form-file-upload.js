angular.module('schemaForm-file-upload', ['schemaForm', 'flow', 'mgcrea.ngStrap']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var file_upload = function(name, schema, options) {
    if (schema.type === 'object' && schema.format == 'file_upload') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'file_upload';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.object.unshift(file_upload);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'file_upload',
    'directives/decorators/bootstrap/upload/file_upload.html');
    schemaFormDecoratorsProvider.createDirective('file_upload',
    'directives/decorators/bootstrap/upload/file_upload.html');
  }]);
