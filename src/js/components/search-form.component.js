class SearchFormCtrl {
  constructor($state) {
    'ngInject';

    this._$state = $state;
    this.formData = {};
  }

  submit() {
    if(this.formData.seriesName) {
      // TODO: get slug from name
      this._$state.go('app.graph', {slug:'placeholder'});
    }
  }

};

let SearchForm = {
  controller: SearchFormCtrl,
  transclude: true,
  templateUrl: 'components/search-form.html'
};

export default SearchForm;
