app = angular.module 'myApp'
app.factory 'langFactory',
  (translation_en, translation_ru) ->
    dictionary =
      'en' : translation_en
      'ru' : translation_ru
    (lang) ->
      dictionary[lang]


