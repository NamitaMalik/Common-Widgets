describe('Unit testing auto-complete directive', function() {
  var countries = [{ "name": "British Indian Ocean Territory", "topLevelDomain": [".io"], "alpha2Code": "IO", "alpha3Code": "IOT", "callingCodes": ["246"], "capital": "Diego Garcia", "altSpellings": ["IO"], "region": "Africa", "subregion": "Eastern Africa", "population": 3000, "latlng": [-6.0, 71.5], "demonym": "Indian", "area": 60.0, "gini": null, "timezones": ["UTC+06:00"], "borders": [], "nativeName": "British Indian Ocean Territory", "numericCode": "086", "currencies": [{ "code": "USD", "name": "United States dollar", "symbol": "$" }], "languages": [{ "iso639_1": "en", "iso639_2": "eng", "name": "English", "nativeName": "English" }], "translations": { "de": "Britisches Territorium im Indischen Ozean", "es": "Territorio Británico del Océano Índico", "fr": "Territoire britannique de l'océan Indien", "ja": "イギリス領インド洋地域", "it": "Territorio britannico dell'oceano indiano", "br": "Território Britânico do Oceano íÍdico", "pt": "Território Britânico do Oceano Índico", "nl": "Britse Gebieden in de Indische Oceaan", "hr": "Britanski Indijskooceanski teritorij", "fa": "قلمرو بریتانیا در اقیانوس هند" }, "flag": "https://restcountries.eu/data/iot.svg", "regionalBlocs": [{ "acronym": "AU", "name": "African Union", "otherAcronyms": [], "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"] }], "cioc": "" }, { "name": "India", "topLevelDomain": [".in"], "alpha2Code": "IN", "alpha3Code": "IND", "callingCodes": ["91"], "capital": "New Delhi", "altSpellings": ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"], "region": "Asia", "subregion": "Southern Asia", "population": 1295210000, "latlng": [20.0, 77.0], "demonym": "Indian", "area": 3287590.0, "gini": 33.4, "timezones": ["UTC+05:30"], "borders": ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"], "nativeName": "भारत", "numericCode": "356", "currencies": [{ "code": "INR", "name": "Indian rupee", "symbol": "₹" }], "languages": [{ "iso639_1": "hi", "iso639_2": "hin", "name": "Hindi", "nativeName": "हिन्दी" }, { "iso639_1": "en", "iso639_2": "eng", "name": "English", "nativeName": "English" }], "translations": { "de": "Indien", "es": "India", "fr": "Inde", "ja": "インド", "it": "India", "br": "Índia", "pt": "Índia", "nl": "India", "hr": "Indija", "fa": "هند" }, "flag": "https://restcountries.eu/data/ind.svg", "regionalBlocs": [{ "acronym": "SAARC", "name": "South Asian Association for Regional Cooperation", "otherAcronyms": [], "otherNames": [] }], "cioc": "IND" }, { "name": "Indonesia", "topLevelDomain": [".id"], "alpha2Code": "ID", "alpha3Code": "IDN", "callingCodes": ["62"], "capital": "Jakarta", "altSpellings": ["ID", "Republic of Indonesia", "Republik Indonesia"], "region": "Asia", "subregion": "South-Eastern Asia", "population": 258705000, "latlng": [-5.0, 120.0], "demonym": "Indonesian", "area": 1904569.0, "gini": 34.0, "timezones": ["UTC+07:00", "UTC+08:00", "UTC+09:00"], "borders": ["TLS", "MYS", "PNG"], "nativeName": "Indonesia", "numericCode": "360", "currencies": [{ "code": "IDR", "name": "Indonesian rupiah", "symbol": "Rp" }], "languages": [{ "iso639_1": "id", "iso639_2": "ind", "name": "Indonesian", "nativeName": "Bahasa Indonesia" }], "translations": { "de": "Indonesien", "es": "Indonesia", "fr": "Indonésie", "ja": "インドネシア", "it": "Indonesia", "br": "Indonésia", "pt": "Indonésia", "nl": "Indonesië", "hr": "Indonezija", "fa": "اندونزی" }, "flag": "https://restcountries.eu/data/idn.svg", "regionalBlocs": [{ "acronym": "ASEAN", "name": "Association of Southeast Asian Nations", "otherAcronyms": [], "otherNames": [] }], "cioc": "INA" }, { "name": "Papua New Guinea", "topLevelDomain": [".pg"], "alpha2Code": "PG", "alpha3Code": "PNG", "callingCodes": ["675"], "capital": "Port Moresby", "altSpellings": ["PG", "Independent State of Papua New Guinea", "Independen Stet bilong Papua Niugini"], "region": "Oceania", "subregion": "Melanesia", "population": 8083700, "latlng": [-6.0, 147.0], "demonym": "Papua New Guinean", "area": 462840.0, "gini": 50.9, "timezones": ["UTC+10:00"], "borders": ["IDN"], "nativeName": "Papua Niugini", "numericCode": "598", "currencies": [{ "code": "PGK", "name": "Papua New Guinean kina", "symbol": "K" }], "languages": [{ "iso639_1": "en", "iso639_2": "eng", "name": "English", "nativeName": "English" }], "translations": { "de": "Papua-Neuguinea", "es": "Papúa Nueva Guinea", "fr": "Papouasie-Nouvelle-Guinée", "ja": "パプアニューギニア", "it": "Papua Nuova Guinea", "br": "Papua Nova Guiné", "pt": "Papua Nova Guiné", "nl": "Papoea-Nieuw-Guinea", "hr": "Papua Nova Gvineja", "fa": "پاپوآ گینه نو" }, "flag": "https://restcountries.eu/data/png.svg", "regionalBlocs": [], "cioc": "PNG" }, { "name": "Samoa", "topLevelDomain": [".ws"], "alpha2Code": "WS", "alpha3Code": "WSM", "callingCodes": ["685"], "capital": "Apia", "altSpellings": ["WS", "Independent State of Samoa", "Malo Saʻoloto Tutoʻatasi o Sāmoa"], "region": "Oceania", "subregion": "Polynesia", "population": 194899, "latlng": [-13.58333333, -172.33333333], "demonym": "Samoan", "area": 2842.0, "gini": null, "timezones": ["UTC+13:00"], "borders": [], "nativeName": "Samoa", "numericCode": "882", "currencies": [{ "code": "WST", "name": "Samoan tālā", "symbol": "T" }], "languages": [{ "iso639_1": "sm", "iso639_2": "smo", "name": "Samoan", "nativeName": "gagana fa'a Samoa" }, { "iso639_1": "en", "iso639_2": "eng", "name": "English", "nativeName": "English" }], "translations": { "de": "Samoa", "es": "Samoa", "fr": "Samoa", "ja": "サモア", "it": "Samoa", "br": "Samoa", "pt": "Samoa", "nl": "Samoa", "hr": "Samoa", "fa": "ساموآ" }, "flag": "https://restcountries.eu/data/wsm.svg", "regionalBlocs": [], "cioc": "SAM" }];
  var initController;
  beforeEach(module('autoComplete'));
  beforeEach(module('autoCompleteTemplates'));
  beforeEach(module('commonWidgets'));
  beforeEach(function() {
    angular.mock.module('autoComplete');
    angular.mock.inject(function(_$controller_, _$compile_, $rootScope, _$httpBackend_, _$timeout_, _$q_, _AutoCompleteService_) {
      this.$controller = _$controller_;
      this.$compile = _$compile_;
      this.$rootScope = $rootScope;
      this.$httpBackend = _$httpBackend_;
      this.$timeout = _$timeout_;
      this.$scope = $rootScope.$new();
      var $q = _$q_;
      var deferred = $q.defer();
      this.AutoCompleteService = _AutoCompleteService_;
      spyOn(this.AutoCompleteService, 'getSuggestions').and.callFake(function() {
        return $q.when({
          data: countries
        })
      })
    });
  });

  var initDirective = function(that, isError) {
    var status = isError ? 500 : 200;
    that.$httpBackend
      .expectGET('https://restcountries.eu/rest/v2/name/ind')
      .respond(status, countries);

    that.element = angular.element("<auto-complete options='{}'></auto-complete>")
    that.$compile(that.element)(that.$scope);
    that.$rootScope.$digest();
    return that.element;
  }

  it('should replace the element with input element', function() {
    var element = initDirective(this)
    expect(element.html()).toContain('autocomplete');
  });

  it('should have initAutoComplete function definition', function() {
    var element = initDirective(this);
    var innerScope = element.isolateScope();
    var vm = innerScope.vm;
    expect(vm.initAutoComplete).toBeDefined();
  });

  it('should have call getSuggestions function', function() {
    var mockedEvent = {}
    var element = initDirective(this);
    var innerScope = element.isolateScope();
    var event= {keyCode: 48};
    var vm = innerScope.vm;
    vm.options.suggestionUrl = "https://restcountries.eu/rest/v2/name/ind";
    vm.input = 'ind';
    vm.initAutoComplete(event);
    this.$rootScope.$apply();
    this.$timeout.flush();
    expect(vm.data).toEqual(countries);
  });

  it('should not call getSuggestions function when input is empty', function() {
    var element = initDirective(this);
    var innerScope = element.isolateScope();
    var vm = innerScope.vm;
    vm.options.suggestionUrl = "https://restcountries.eu/rest/v2/name/ind";
    var event= {keyCode: 47};
    vm.initAutoComplete(event);
    this.$rootScope.$apply();
    this.$timeout.flush();
    expect(this.AutoCompleteService.getSuggestions).not.toHaveBeenCalled();
  });

  it('should set selected suggest in input', function() {
      var element = initDirective(this);
      var innerScope = element.isolateScope();
      var vm = innerScope.vm;
      vm.options.suggestionUrl = "https://restcountries.eu/rest/v2/name/ind";
      vm.data = countries;
      vm.selectSuggestion(1);
      this.$rootScope.$apply();
      expect(vm.input).toEqual('India');
  });

});
